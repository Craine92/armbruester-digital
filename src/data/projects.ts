import { siteConfig } from '@/config/site';

export type ProjectCategory = 'Eventwebsite' | 'Unternehmenswebsite' | 'Handwerk' | 'Gesundheit' | 'Lokale Dienstleister';

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  categories: readonly ProjectCategory[];
  services: readonly string[];
  image: string;
  imageAlt: string;
  screenshots?: { desktop: string; mobile: string; desktopAlt: string; mobileAlt: string };
  featuredInHero?: boolean;
  heroLabel?: string;
  status?: string;
  externalUrl?: string;
  detailUrl?: string;
}

export const projects: readonly Project[] = [
  {
    slug: 'hochzeitswebsite-justine-philipp', title: 'Justine & Philipp', eyebrow: 'Hochzeitswebsite · Realisiertes Projekt',
    description: 'Eine individuell entwickelte Hochzeitswebsite mit persönlichem Design, Veranstaltungsinformationen, Ablauf, Galerie, Standortintegration, FAQ-Bereich, Countdown und mobiler Optimierung.',
    categories: ['Eventwebsite'],
    services: ['Konzeption', 'Individuelles Webdesign', 'Responsive Umsetzung', 'Galerie', 'Countdown', 'Performance'],
    image: 'images/project-wedding.svg', imageAlt: 'Stilisierte Vorschau der Hochzeitswebsite Justine und Philipp',
    externalUrl: siteConfig.projects.weddingWebsite, detailUrl: '/projekte/hochzeitswebsite/'
  },
  {
    slug: 'dirk-kuhlmann-garten-landschaftsbau', title: 'Dirk Kuhlmann Garten- & Landschaftsbau', eyebrow: 'Unternehmenswebsite · Realisiertes Projekt',
    description: 'Unternehmenswebsite für einen regionalen Garten- und Landschaftsbaubetrieb mit klarer Leistungsübersicht, Projektbereich und direkten Kontaktmöglichkeiten.',
    categories: ['Unternehmenswebsite', 'Handwerk', 'Lokale Dienstleister'],
    services: ['Konzeption', 'Webdesign', 'Responsive Entwicklung', 'Leistungsstruktur', 'Kontaktführung'],
    image: 'projects/dirk-kuhlmann-desktop.png', imageAlt: 'Startseite der Unternehmenswebsite von Dirk Kuhlmann Garten- und Landschaftsbau',
    screenshots: {
      desktop: 'projects/dirk-kuhlmann-desktop.png',
      mobile: 'projects/dirk-kuhlmann-mobile.png',
      desktopAlt: 'Desktopansicht der Website von Dirk Kuhlmann Garten- und Landschaftsbau',
      mobileAlt: 'Smartphoneansicht der Website von Dirk Kuhlmann Garten- und Landschaftsbau'
    },
    featuredInHero: true,
    heroLabel: 'Unternehmenswebsite · Garten- und Landschaftsbau',
    externalUrl: 'https://craine92.github.io/Galabau-Kuhlmann/'
  },
  {
    slug: 'podologische-praxis', title: 'Podologische Praxis', eyebrow: 'Konzept · In Vorbereitung',
    description: 'Vertrauensvoller und übersichtlicher Praxisauftritt mit Leistungen, Qualifikation, Öffnungszeiten, Anfahrt und klarer Kontaktmöglichkeit.',
    categories: ['Unternehmenswebsite', 'Gesundheit', 'Lokale Dienstleister'],
    services: ['Konzept', 'Informationsarchitektur', 'Kontaktführung'],
    image: 'images/project-podology.svg', imageAlt: 'Deutlich gekennzeichneter Konzept-Platzhalter für eine podologische Praxis', status: 'In Vorbereitung'
  }
];
