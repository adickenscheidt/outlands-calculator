export const skills: Skill[] = [];

export interface Skill {
  pvmDamageBonus?(value: number): number;
}
