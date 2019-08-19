export interface Build {
  id: string;
  str: number;
  dex: number;
  int: number;
  buildName?: string;
  skills: { skillName: string; value: number }[];
  aspects?: { armor: string; weapon: string; book: string };
}
