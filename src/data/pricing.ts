export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  additionalFeatures?: readonly string[];
  includes?: string;
  badge?: string;
  featured?: boolean;
  premium?: boolean;
}

export const digitalStartFeatures = [
  'Individuelle Onepage',
  'Responsives Design für Smartphone, Tablet und Desktop',
  'Leistungs- und Kontaktbereich',
  'Technische SEO-Grundlagen',
  'Domain-Einrichtung',
  'Eine professionelle E-Mail-Adresse',
  'Social-Media-Verknüpfungen',
  'Veröffentlichung der Website'
] as const;

export const businessAdditionalFeatures = [
  'Mehrere individuell entwickelte Seiten',
  'Ausführliche Leistungsdarstellung',
  'Projekt-, Referenz- oder Bildergalerie',
  'Lokale SEO-Grundlagen',
  'Einrichtung der Google Search Console',
  'Unterstützung beim Google-Unternehmensprofil',
  'Mehrere professionelle E-Mail-Adressen',
  'Performance- und Ladezeitoptimierung'
] as const;

export const businessFeatures = [
  ...digitalStartFeatures,
  ...businessAdditionalFeatures
] as const;

export const individualAdditionalFeatures = [
  'Individuelle Beratung und ausführliche Konzeption',
  'Individuelles Webdesign',
  'Umfangreiche Seiten- und Inhaltsstruktur',
  'Lokale und deutschlandweite SEO-Ausrichtung nach Bedarf',
  'Abstimmung von Website und Social-Media-Auftritt',
  'Individuelle Kontaktformulare',
  'Besondere Animationen und Interaktionen',
  'Externe Integrationen nach Vereinbarung',
  'Mehrsprachigkeit nach Vereinbarung',
  'Individuelle technische Funktionen nach Vereinbarung',
  'Vorbereitung für spätere Erweiterungen',
  'Persönliche Übergabe und Einweisung'
] as const;

export const individualFeatures = [
  ...businessFeatures,
  ...individualAdditionalFeatures
] as const;

export const projectPackages: readonly PricingPackage[] = [
  {
    name: 'Digital Start',
    price: 'ab 990 €',
    description: 'Für Selbstständige und kleinere Unternehmen, die erstmals professionell online auftreten möchten.',
    features: digitalStartFeatures,
    badge: 'Einstiegspaket'
  },
  {
    name: 'Business-Präsenz',
    price: 'ab 1.690 €',
    description: 'Für Unternehmen, die ihre Leistungen umfassender darstellen und ihre digitale Sichtbarkeit verbessern möchten.',
    features: businessFeatures,
    additionalFeatures: businessAdditionalFeatures,
    includes: 'Inklusive aller Leistungen aus Digital Start',
    badge: 'Beliebte Wahl',
    featured: true
  },
  {
    name: 'Individuelle Komplettlösung',
    price: 'ab 2.490 €',
    description: 'Für Unternehmen mit umfangreichen Anforderungen, individuellen Funktionen oder einem vollständigen digitalen Gesamtauftritt. Enthält alle Leistungen der Business-Präsenz und wird individuell erweitert.',
    features: individualFeatures,
    additionalFeatures: individualAdditionalFeatures,
    includes: 'Inklusive aller Leistungen der Business-Präsenz',
    badge: 'Maximale Flexibilität',
    premium: true
  }
] as const;

export const carePackages: readonly PricingPackage[] = [
  {
    name: 'Basis',
    price: 'ab 49 € / Monat',
    description: 'Solide technische Begleitung mit einem klar definierten Zeitrahmen für kleine laufende Anpassungen.',
    features: ['Hosting beziehungsweise technische Bereitstellung nach Vereinbarung', 'Regelmäßige technische Kontrolle', 'Eine kleine Inhaltsanpassung pro Monat bis maximal 20 Minuten', 'Nicht genutzte Bearbeitungszeit verfällt', 'Größere Änderungen werden vorher transparent angeboten']
  },
  {
    name: 'Komfort',
    price: 'ab 99 € / Monat',
    description: 'Persönliche, regelmäßige Betreuung mit mehr Zeit für die Pflege bestehender Inhalte.',
    features: ['Regelmäßige technische Kontrolle', 'Austausch und Anpassung vorhandener Bilder und Texte', 'Bis zu 60 Minuten Inhaltsanpassungen pro Monat', 'Nicht genutzte Bearbeitungszeit verfällt', 'Umfangreiche Erweiterungen werden separat angeboten']
  },
  {
    name: 'Einzeländerungen',
    price: 'Preis nach Vereinbarung',
    description: 'Für punktuelle Wünsche ohne laufendes Betreuungspaket.',
    features: ['Abrechnung nach tatsächlichem Aufwand', 'Transparente Abstimmung vor Beginn']
  }
] as const;

export const pricingNotices = [
  'Alle Pakete dienen als erste Orientierung. Der endgültige Leistungsumfang, die Anzahl der Seiten, Korrekturschleifen und individuellen Funktionen werden vor Projektbeginn in einem transparenten Angebot festgehalten.',
  'Kosten für Domain, E-Mail-Postfächer, kostenpflichtige externe Dienste, Lizenzen oder besondere Hostingangebote sind nicht automatisch im Projektpreis enthalten, sofern dies nicht ausdrücklich vereinbart wurde.',
  'Texte, Bilder und Logos werden grundsätzlich vom Auftraggeber bereitgestellt. Eine inhaltliche Aufbereitung oder Erstellung kann nach Vereinbarung zusätzlich angeboten werden.'
] as const;
