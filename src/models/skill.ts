export interface SkillLanguargeMap {
  frontend: SkillLanguargeMapItem[];
  backend: SkillLanguargeMapItem[];
  framework: SkillLanguargeMapItem[];
  database: SkillLanguargeMapItem[];
  other: SkillLanguargeMapItem[];
}

export interface SkillLanguargeMapItem {
  name: string;
  value: [number, number];
  icon: string;
  iconSize?: number | [number, number];
}

export interface SkillRinkingItem {
  name: string;
  score: number;
}

export interface SkillListItem {
  name: string;
  contents?: string[];
  avatar?: string;
  tags?: string[];
}
