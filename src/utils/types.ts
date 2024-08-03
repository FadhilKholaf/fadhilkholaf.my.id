export interface Project {
  imagePath: string;
  title: string;
  position: string;
  date: string;
  description: string;
  preview?: string;
  source?: string;
}

export interface Credit {
  category: string;
  name: string;
  href: string;
  symbol?: string;
}
