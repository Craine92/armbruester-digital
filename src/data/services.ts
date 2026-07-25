export interface Service {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  benefits: readonly string[];
}

export const services: readonly Service[] = [
  {
    number: '01', title: 'Strategie & Konzeption', shortTitle: 'Konzeption',
    description: 'Eine klare Grundlage für Ihren digitalen Auftritt – ausgerichtet auf Unternehmen, Zielgruppen, Inhalte und konkrete Geschäftsziele.',
    benefits: ['Unternehmensanalyse', 'Zielgruppen', 'Inhaltsplanung', 'Seitenstruktur', 'Persönliche Beratung']
  },
  {
    number: '02', title: 'Webdesign & Website-Erstellung', shortTitle: 'Webdesign',
    description: 'Individuelle, schnelle und responsive Websites, die zu Ihrem Unternehmen passen und auf jedem Gerät professionell wirken.',
    benefits: ['Individuelles Design', 'Unternehmenswebsites', 'Onepage-Websites', 'Responsive Umsetzung', 'Klare Kontaktführung', 'Technische Qualität']
  },
  {
    number: '03', title: 'SEO & Google-Auffindbarkeit', shortTitle: 'SEO-Grundlagen',
    description: 'Eine technisch und inhaltlich saubere Grundlage, damit Suchmaschinen Ihre Website verstehen und potenzielle Kunden Ihr Unternehmen finden können.',
    benefits: ['Technische SEO-Grundlagen', 'Seitentitel und Beschreibungen', 'Strukturierte Inhalte', 'Sitemap', 'Search-Console-Vorbereitung', 'Ladezeitoptimierung']
  },
  {
    number: '04', title: 'Social Media & digitale Präsenz', shortTitle: 'Social Media',
    description: 'Website und Social-Media-Auftritt werden als stimmige digitale Präsenz gedacht und verständlich aufeinander abgestimmt.',
    benefits: ['Einheitlicher Auftritt', 'Unterstützung bei Profilen', 'Inhaltsorientierung', 'Visuelle Abstimmung', 'Verständliche Beratung']
  },
  {
    number: '05', title: 'Pflege & Weiterentwicklung', shortTitle: 'Weiterentwicklung',
    description: 'Auf Wunsch bleibt die Website nach der Veröffentlichung anpassbar und kann gemeinsam mit dem Unternehmen wachsen.',
    benefits: ['Aktualisierung von Inhalten', 'Neue Bilder und Texte', 'Technische Weiterentwicklung', 'Sinnvolle Erweiterungen', 'Pflege nach Vereinbarung']
  }
];
