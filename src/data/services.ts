export interface Service {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  benefits: readonly string[];
}

export const services: readonly Service[] = [
  {
    number: '01', title: 'Webdesign & Entwicklung', shortTitle: 'Webdesign',
    description: 'Individuelle, schnelle und responsive Websites, die zu Ihrem Unternehmen passen und auf jedem Gerät professionell wirken.',
    benefits: ['Individuelle Gestaltung', 'Responsive Entwicklung', 'Benutzerfreundliche Navigation', 'Schnelle Ladezeiten', 'Barrierearme Umsetzung', 'Technische Qualität']
  },
  {
    number: '02', title: 'SEO & Sichtbarkeit', shortTitle: 'SEO-Grundlagen',
    description: 'Eine technisch und inhaltlich saubere Grundlage, damit Suchmaschinen Ihre Website verstehen und potenzielle Kunden Ihr Unternehmen finden können.',
    benefits: ['Technische SEO-Grundlagen', 'Seitentitel und Beschreibungen', 'Strukturierte Inhalte', 'Lokale Suchbegriffe', 'Strukturierte Daten', 'Search Console', 'Performanceoptimierung']
  },
  {
    number: '03', title: 'Digitale Präsenz', shortTitle: 'Domain & Präsenz',
    description: 'Domain, professionelle E-Mail-Adressen und die wichtigsten digitalen Grundlagen aus einer Hand.',
    benefits: ['Domain-Einrichtung', 'DNS-Konfiguration', 'Professionelle E-Mail-Adressen', 'Google-Unternehmensprofil', 'Social-Media-Verknüpfung', 'Kontaktdaten und Anfahrt', 'Beratung zur Außendarstellung']
  },
  {
    number: '04', title: 'Betreuung & Weiterentwicklung', shortTitle: 'Betreuung',
    description: 'Auch nach der Veröffentlichung bleibt die Website anpassbar und kann gemeinsam mit dem Unternehmen wachsen.',
    benefits: ['Kleine Inhaltsänderungen', 'Neue Bilder und Texte', 'Technische Anpassungen', 'Sinnvolle Erweiterungen', 'Betreuung nach Vereinbarung']
  }
];
