export interface Location {
  name: string;
  coordinates: {
    x: number;
    y: number;
  };
  description: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  link: string;
}

export interface Citation {
  apa: string;
  mla: string;
  chicago: string;
}

export interface Publication {
  id: number;
  title: string;
  abstract: string;
  content: string;
  coverImage: string;
  date: string;
  category: string;
  pdfUrl: string;
  keywords: string[];
  locations?: Location[];
  timelineEvents?: TimelineEvent[];
  citations?: Citation;
}