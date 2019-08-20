export interface Skill {
  skillName: string;
  displayName: string;
  pvmSpellDamageBonus?(value: number): number;
  pvpSpellDamageBonus?(value: number): number;
  pvmMeleeDamageBonus?(value: number): number;
  pvpMeleeDamageBonus?(value: number): number;
  globalMeleeDamageBonus?(value: number): number;
  globalSpellDamageBonus?(value: number): number;
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
  },
  {
    skillName: 'anatomy',
    displayName: 'Anatomy',
    globalMeleeDamageBonus: value => 0.2 * (value / 100)
  },
  {
    skillName: 'archery',
    displayName: 'Archery'
  },
  {
    skillName: 'fencing',
    displayName: 'Fencing'
  },
  {
    skillName: 'macing',
    displayName: 'Mace Fighting'
  },
  {
    skillName: 'swordsmanship',
    displayName: 'Swordsmanship'
  },
  {
    skillName: 'wrestling',
    displayName: 'Wrestling'
  },
  {
    skillName: 'tactics',
    displayName: 'Tactics',
    globalMeleeDamageBonus: value => 1.0 * (value / 100)
  }
];
