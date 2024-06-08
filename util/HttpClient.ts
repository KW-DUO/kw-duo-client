import { apiUrl } from '@/constant/api';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD';

type RequestInterceptor = (
  url: string,
  method: HttpMethod,
  args: Record<string, any>,
  headers: any
) => void;

type ResponseInterceptor = (url: string, method: HttpMethod, body: any) => void;

type ClientOptions = {
  baseUrl?: string;
  request?: RequestInterceptor;
  response?: ResponseInterceptor;
  makeBearerAuth?: () => string | null;
};

type FetchOptions = {
  params?: Record<string, any>;
  body?: Record<string, any>;
  headers?: Record<string, string>;
};

export class HttpClient {
  constructor(private readonly options: ClientOptions) {}

  public async fetch<T>(
    path: string,
    method: HttpMethod,
    { params = {}, body = {}, headers = {} }: FetchOptions = {}
  ): Promise<T> {
    // baseUrl, path, 쿼리파람으로 url만들기
    console.log(this.options, path, params);
    const url = createUrl(this.options?.baseUrl, path, params);

    // api 쏘기 전에 인터셉터 호출
    this.options?.request?.(url, method, body, headers);

    // 설정한 headers를 가져오고 필요시 액세스토큰 추가
    const fetchOptions: RequestInit = {
      method,
      headers: this.getHeaders(headers),
      // credentials: 'include',
    };

    // GET, HEAD 요청에는 body를 포함하지 않음
    if (method !== 'GET' && method !== 'HEAD') {
      fetchOptions.body = JSON.stringify(body);
    }

    // api 호출
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    // 응답 처리
    // const responseBody: T = await response.json();

    // 응답 본문 처리
    let responseBody: T;
    const responseBodyText = await response.text();
    try {
      responseBody = responseBodyText ? JSON.parse(responseBodyText) : ({} as T);
    } catch (error) {
      throw new Error(`Failed to parse JSON response: ${error}`);
    }

    // 응답 받은 후 인터셉터 호출
    this.options?.response?.(url, method, responseBody);

    // 결과 리턴
    return responseBody;
  }

  // 액세스토큰 있으면 헤더에 넣어주는 함수
  private getHeaders(originalHeader: Record<string, string>) {
    const token = this.options?.makeBearerAuth?.();

    if (!token) {
      return originalHeader;
    }

    return { ...originalHeader, Authorization: `Bearer ${token}` };
  }
}

function createUrl(baseUrl: string | undefined, path: string, params: Record<string, any>) {
  return new URL(addQueryParams(path, params), baseUrl).toString();
}

function addQueryParams(url: string, params: Record<string, any>) {
  const searchParams = new URLSearchParams(params);
  return `${url}?${searchParams.toString()}`;
}

export function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return match[2];
  }
  return null;
}

export const client = new HttpClient({
  baseUrl: apiUrl,
  response(url, method, body) {
    console.log(`[log]: ${url}에다 ${method}로 ${body}를 응답 받음`);
  },
  // makeBearerAuth: () => getCookie('accessToken'),
  makeBearerAuth: () => localStorage.getItem('accessToken'),
});

/* -------------------------------------------------------------------------- */

// // 사용 사례
// const client = new HttpClient({
//   baseUrl: "https://api.example.com",
//   response(url, method, body) {
//     console.log(`[log]: ${url}에다 ${method}로 ${body}를 응답 받음`);
//   },
//   makeBearerAuth() {
//     return document.cookie["accessToken"];
//   },
// });

// new HttpClient({
//   baseUrl: "https://api.until.blog:8080",
//   // api를 쏘기 전에 매번 실행될 로직 (리퀘스트 인터셉터)
//   request(url, method, args) {
//     // loading.turnOn()
//   },
//   // api 쏘고 응답 받은 후 매번 실행될 로직
//   response() {
//     // loading.turnOff()
//   },
//   makeBearerAuth() {
//       return localStorage.getItem("accessToken")
//   },
// })

// // api 쏠 때 제네릭으로 이렇게 타입 넣어주면 any가 아니라 해당 타입으로 받을 수 있음
// type RT = {
//   name: string;
// };

// const result: RT = await client.fetch<RT>("/users", "GET", {
//   params: { page: 0, size: 30 },
// });

/**
 * fetch인데, interceptor 기능이 있고, baseUrl 기능이 있고,
 * 마지막으로 Authorization: Bearer ${} 이거를 자동으로 해주는 fetch를 만드는 계획
 */
