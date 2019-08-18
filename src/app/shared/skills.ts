export interface Skill {
  skillName: string;
  displayName: string;
  pvmSpellDamageBonus?(value: number): number;
  pvpSpellDamageBonus?(value: number): number;
  pvmMeleeDamageBonus?(value: number): number;
  pvpMeleeDamageBonus?(value: number): number;
}

export const skills: Skill[] = [
  {
    skillName: 'evalInt',
    displayName: 'Evaluate Intelligence',
    pvmSpellDamageBonus: value => 0.5 * (value / 100),
    pvpSpellDamageBonus: value => 0.25 * (value / 100)
  },
  {
    skillName: 'magery',
    displayName: 'Magery'
  }
];
