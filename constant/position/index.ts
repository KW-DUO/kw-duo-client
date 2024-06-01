export const positions = [
  { label: 'filters.positions.frontend', value: 'FRONTEND' },
  { label: 'filters.positions.backend', value: 'BACKEND' },
  { label: 'filters.positions.android', value: 'ANDROID' },
  { label: 'filters.positions.ios', value: 'IOS' },
  { label: 'filters.positions.gameDev', value: 'GAME_DEV' },
  { label: 'filters.positions.planner', value: 'PLANNER' },
  { label: 'filters.positions.designer', value: 'DESIGNER' },
  { label: 'filters.positions.machineLearning', value: 'MACHINE_LEARNING' },
  { label: 'filters.positions.blockchain', value: 'BLOCKCHAIN' },
  { label: 'filters.positions.embedded', value: 'EMBEDDED' },
] as const;

export function getPositionLabel(value: string, t: (key: string) => string): string {
  const position = positions.find((pos) => pos.value === value);
  if (!position) {
    throw new Error(`Unknown position value: ${value}`);
  }
  return t(position.label);
}
