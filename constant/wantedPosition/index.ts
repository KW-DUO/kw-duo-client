export const wantedPosition = [
  { label: '상관없음', value: 'ANY' },
  { label: '프론트엔드', value: 'FRONTEND' },
  { label: '백엔드', value: 'BACKEND' },
  { label: '안드로이드', value: 'ANDROID' },
  { label: 'iOS', value: 'IOS' },
  { label: '게임 개발자', value: 'GAME_DEV' },
  { label: '기획자', value: 'PLANNER' },
  { label: '디자이너', value: 'DESIGNER' },
  { label: '머신러닝', value: 'MACHINE_LEARNING' },
  { label: '블록체인', value: 'BLOCKCHAIN' },
  { label: '임베디드', value: 'EMBEDDED' },
  { label: '기타', value: 'OTHER' },
] as const;

export function getPositionLabel(value: string): string {
  const position = wantedPosition.find((pos) => pos.value === value);
  return position ? position.label : 'Unknown';
}
