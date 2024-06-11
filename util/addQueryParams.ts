export function addQueryParams(
  url: string,
  params: Record<string, string | number | boolean>
): string {
  const filteredParams = Object.fromEntries(
    Object.entries(params)
      .filter(([_, value]) => value !== '')
      .map(([_, value]) => [_, value.toString()])
  );

  const searchParams = new URLSearchParams(filteredParams);
  return `${url}?${searchParams.toString()}`;
}
