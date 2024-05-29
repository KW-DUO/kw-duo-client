export function addQueryParams(url: string, params: Record<string, string>): string {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== '')
  );

  const searchParams = new URLSearchParams(filteredParams);
  return `${url}?${searchParams.toString()}`;
}
