export const siteConfig = {
  brand: 'Armbrüster Digital',
  alternateName: 'Armbrüster Digital Webdesign',
  owner: 'Philipp Armbrüster',
  businessName: 'Armbrüster Digital',
  claim: 'Professionelles Webdesign für kleine Unternehmen in Lübeck.',
  servicesLine: 'Webdesign · Suchmaschinenoptimierung · Digitale Präsenz',
  location: 'Lübeck',
  region: 'Lübeck, Travemünde und Umgebung',
  siteUrl: 'https://craine92.github.io/armbruester-digital/',
  domain: 'craine92.github.io/armbruester-digital',
  futureSiteUrl: 'https://armbruester-digital.de/',
  email: 'armphi@icloud.com',
  phone: '' as string,
  // TODO: Umsatzsteuer-Identifikationsnummer oder Wirtschafts-Identifikationsnummer eintragen, falls vorhanden.
  vatId: '' as string,
  businessId: '' as string,
  address: {
    street: 'Vorderreihe 20',
    postalCode: '23570',
    city: 'Lübeck',
    country: 'Deutschland'
  },
  social: {
    instagram: '',
    linkedin: ''
  },
  images: {
    portrait: 'images/portrait-placeholder.svg',
    socialPreview: 'projects/dirk-kuhlmann-desktop.png'
  },
  projects: {
    weddingWebsite: 'https://hochzeit-philipp-justine.de'
  }
} as const;

export const contactConfig = {
  /** Optionaler HTTPS-Endpunkt eines späteren Formulardienstes. Leer = E-Mail-Fallback. */
  endpoint: '',
  email: siteConfig.email
} as const;
