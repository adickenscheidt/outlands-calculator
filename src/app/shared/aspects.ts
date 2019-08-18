export const aspects: Aspect[] = [
  { aspectName: 'fire', displayName: 'Fire', skillBonuses: [{ skillName: 'tactics', value: (v: number) => 6 + 2 * v }] }
];

export interface Aspect {
  aspectName: string;
  displayName: string;
  skillBonuses: { skillName; value: (value: number) => number }[];
}
