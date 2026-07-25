export type ProjectCategory = 'Unternehmenswebsite' | 'Handwerk' | 'Lokale Dienstleister';

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
  }
];
