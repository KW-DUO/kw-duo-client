type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;

type Interceptor = {
  request: (url: string, method: HttpMethod, args: Record<string, any>, headers: any) => void;
  response: (url: string, method: HttpMethod, body: Record<string, any>) => void;
};

class HttpClient {
  constructor(
    private readonly baseUrl: string,
    private readonly interceptor: Interceptor | undefined
  ) {}

  async fetch<T extends Record<string, any>>(
    path: string,
    method: HttpMethod = 'GET',
    body: Record<string, any> = {},
    headers: Record<string, string> = {}
  ): Promise<T> {
    const url = new URL(path, this.baseUrl).toString();

    // 쿠키에서 액세스 토큰을 가져와 헤더에 추가
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    this.interceptor?.request(url, method, body, headers);

    const response = await fetch(url, {
      method,
      headers,
      body: method !== 'GET' ? JSON.stringify(body) : undefined, // GET 요청에는 body가 필요 없음
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseBodyText = await response.text();
    let responseBody: T;
    try {
      responseBody = responseBodyText ? (JSON.parse(responseBodyText) as T) : ({} as T);
    } catch (e) {
      throw new Error(`Failed to parse JSON response: ${e}`);
    }

    this.interceptor?.response(url, method, responseBody);
    return responseBody;
  }
}

// 쿠키에서 값을 읽어오는 함수
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return match[2];
  }
  return null;
}

export { HttpClient, HttpMethods };
