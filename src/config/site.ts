export const siteConfig = {
  brand: 'Armbrüster Digital',
  owner: 'Philipp Armbrüster',
  claim: 'Moderne Webseiten für kleine Unternehmen.',
  servicesLine: 'Webdesign · Suchmaschinenoptimierung · Digitale Präsenz',
  location: 'Lübeck',
  region: 'Deutschlandweit',
  siteUrl: 'https://craine92.github.io/armbruester-digital/',
  domain: 'craine92.github.io/armbruester-digital',
  email: 'info@example.com',
  phone: '' as string,
  address: {
    street: '[PLATZHALTER-STRASSE]',
    postalCode: '[PLATZHALTER-PLZ]',
    city: 'Lübeck',
    country: 'Deutschland'
  },
  social: {
    instagram: '',
    linkedin: ''
  },
  images: {
    portrait: 'images/portrait-placeholder.svg',
    socialPreview: 'images/social-preview.svg'
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
