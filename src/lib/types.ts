export type SiteMetadata = {
  title: string;
  tagline: string;
  description: string;
  author: string;
  siteUrl: string;
};

export type Social = {
  label: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type Project = {
  title: string;
  description: string;
  url: string;
  skills: string[];
  image?: string;
};

export type Experience = {
  position: string;
  company: string;
  description: string;
  skills: string[];
  startDate: string;
  endDate?: string;
};
