export interface Project {
  id: number;
  title: string;
  url?: string;
  description: string;
  detail: string[];
  basicDesign?: boolean;
  detailedDesign?: boolean;
  implementation?: boolean;
  unitTest?: boolean;
  integrationTest?: boolean;
  release?: boolean;
  image?: string;
  frontend?: string;
  backend?: string;
  database?: string;
  other?: string;
  CI?: string;
}
