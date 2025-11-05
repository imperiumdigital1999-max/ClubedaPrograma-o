export interface AITool {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
  featured?: boolean;
  new?: boolean;
  coverImage?: string;
  function?: string;
  applications?: string[];
  videos?: {
    id: string;
    title: string;
    thumbnail: string;
    url: string;
  }[];
  prompts?: {
    id: string;
    title: string;
    content: string;
  }[];
  freeAccessVideo?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  toolCount: number;
}

export type ViewMode = 'dashboard' | 'ia-detail' | 'ias' | 'cursos' | 'programming' | 'tool-detail';