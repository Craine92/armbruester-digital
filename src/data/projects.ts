import { siteConfig } from '@/config/site';

export type ProjectCategory = 'Eventwebsite' | 'Unternehmenswebsite' | 'Handwerk' | 'Lokale Dienstleister';

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  categories: readonly ProjectCategory[];
  services: readonly string[];
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  screenshots?: { desktop: string; mobile: string; desktopAlt: string; mobileAlt: string };
  featuredInHero?: boolean;
  heroLabel?: string;
  status?: string;
  externalUrl?: string;
  detailUrl?: string;
}

export const projects: readonly Project[] = [
  {
    slug: 'dirk-kuhlmann-garten-landschaftsbau', title: 'Dirk Kuhlmann Garten- & Landschaftsbau', eyebrow: 'Unternehmenswebsite · Realisiertes Projekt',
    description: 'Moderne Unternehmenswebsite für Dirk Kuhlmann Garten- und Landschaftsbau mit klarer Leistungsdarstellung, hochwertiger Projektgalerie, direkter Kontaktführung und optimierter Darstellung auf Smartphone, Tablet und Desktop.',
    categories: ['Unternehmenswebsite', 'Handwerk', 'Lokale Dienstleister'],
    services: ['Konzeption', 'Webdesign', 'Responsive Entwicklung', 'Leistungsstruktur', 'Kontaktführung'],
    image: 'projects/dirk-kuhlmann-desktop.webp', imageAlt: 'Aktuelle Startseite der Unternehmenswebsite von Dirk Kuhlmann Garten- und Landschaftsbau', imageWidth: 1440, imageHeight: 900,
    screenshots: {
      desktop: 'projects/dirk-kuhlmann-desktop.webp',
      mobile: 'projects/dirk-kuhlmann-mobile.webp',
      desktopAlt: 'Aktuelle Desktopansicht der Website von Dirk Kuhlmann Garten- und Landschaftsbau',
      mobileAlt: 'Aktuelle Smartphoneansicht der Website von Dirk Kuhlmann Garten- und Landschaftsbau'
    },
    featuredInHero: true,
    heroLabel: 'Unternehmenswebsite · Garten- und Landschaftsbau',
    externalUrl: 'https://kuhlmann-garten.de',
    detailUrl: '/projekte/galabau-kuhlmann/'
  },
  {
    slug: 'hochzeitswebsite-justine-philipp', title: 'Justine & Philipp', eyebrow: 'Hochzeitswebsite · Realisiertes Projekt',
    description: 'Eine individuell entwickelte Hochzeitswebsite mit persönlichem Design, Veranstaltungsinformationen, Ablauf, Galerie, Standortintegration, FAQ-Bereich, Countdown und mobiler Optimierung.',
    categories: ['Eventwebsite'],
    services: ['Konzeption', 'Individuelles Webdesign', 'Responsive Umsetzung', 'Galerie', 'Countdown', 'Performance'],
    image: 'images/project-wedding.svg', imageAlt: 'Stilisierte Vorschau der Hochzeitswebsite Justine und Philipp', imageWidth: 1200, imageHeight: 760,
    externalUrl: siteConfig.projects.weddingWebsite, detailUrl: '/projekte/hochzeitswebsite/'
  }
];
