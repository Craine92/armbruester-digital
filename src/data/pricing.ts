export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  featured?: boolean;
}

export const projectPackages: readonly PricingPackage[] = [
  {
    name: 'Digital Start',
    price: 'ab 990 €',
    description: 'Für Selbstständige und kleinere Unternehmen, die erstmals professionell online auftreten möchten.',
    features: ['Individuelle Onepage', 'Responsives Design', 'Leistungs- und Kontaktbereich', 'Technische SEO-Grundlagen', 'Domain-Einrichtung', 'Eine professionelle E-Mail-Adresse', 'Social-Media-Verknüpfungen', 'Veröffentlichung der Website']
  },
  {
    name: 'Business Präsenz',
    price: 'ab 1.690 €',
    description: 'Für Unternehmen, die ihre Leistungen umfassender darstellen und ihre digitale Sichtbarkeit verbessern möchten.',
    features: ['Mehrere individuelle Seiten', 'Ausführliche Leistungsdarstellung', 'Projekt- oder Bildergalerie', 'Lokale SEO-Grundlagen', 'Google Search Console', 'Unterstützung beim Google-Unternehmensprofil', 'Mehrere professionelle E-Mail-Adressen', 'Performanceoptimierung', 'Domain-Einrichtung und Veröffentlichung'],
    featured: true
  },
  {
    name: 'Individuelle Lösung',
    price: 'ab 2.490 €',
    description: 'Für umfangreichere Anforderungen und individuelle Funktionen.',
    features: ['Individuelles Konzept', 'Umfangreiche Seitenstruktur', 'Besondere Animationen', 'Galerien und Referenzsysteme', 'Mehrsprachigkeit nach Vereinbarung', 'Externe Integrationen', 'Individuelle technische Anforderungen']
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
