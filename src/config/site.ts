export const siteConfig = {
  brand: 'Armbrüster Digital',
  alternateName: 'Armbrüster Digital Webdesign',
  owner: 'Philipp Armbrüster',
  businessName: 'Armbrüster Digital',
  claim: 'Websites, SEO und Social Media für einen professionellen digitalen Auftritt.',
  servicesLine: 'Webdesign · Website-Erstellung · SEO · Social Media · Digitale Betreuung',
  location: 'Lübeck',
  region: 'Deutschlandweit · persönlich betreut aus Lübeck',
  serviceArea: 'Deutschland',
  siteUrl: 'https://craine92.github.io/armbruester-digital/',
  domain: 'craine92.github.io/armbruester-digital',
  futureSiteUrl: 'https://armbruester-digital.de/',
  email: 'armphi@icloud.com',
  phone: '' as string,
  // TODO: Nach der Gewerbeanmeldung beziehungsweise steuerlichen Registrierung
  // eine vorhandene Umsatzsteuer-Identifikationsnummer eintragen.
  // Niemals die persönliche Steuer-ID oder die gewöhnliche Steuernummer veröffentlichen.
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
    socialPreview: 'images/social-preview.png'
  }
} as const;

export const contactConfig = {
  /** Optionaler HTTPS-Endpunkt eines späteren Formulardienstes. Leer = E-Mail-Fallback. */
  endpoint: '',
  email: siteConfig.email
} as const;
