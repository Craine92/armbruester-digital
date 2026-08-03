# SEO- und Testbericht

Stand: 25. Juli 2026

## Nachtrag: deutschlandweite Positionierung und Kuhlmann-Projekt

- Die allgemeine Startseite ist nun deutschlandweit auf Websites, SEO, Social Media und digitale Betreuung ausgerichtet; `/webdesign-luebeck/` bleibt die eigenständige lokale Landingpage.
- Strategie und Konzeption, Website-Erstellung, SEO und Google-Auffindbarkeit, Social Media sowie optionale Pflege und Weiterentwicklung werden als Rundum-sorglos-Angebot dargestellt.
- Ein neuer Zielgruppenbereich spricht Unternehmen, Selbstständige, Praxen, Gesundheitsdienstleister, Gastronomie, Hotellerie, Handwerk, Gartenbau, lokale Dienstleister und Gründungen an.
- Das Impressum gibt `vatId` und `businessId` getrennt und ausschließlich bei vorhandenem Wert aus. Der doppelte Abschnitt „Verantwortlich für den Inhalt“ wurde entfernt.
- Die reale Projektwebsite verweist jetzt auf `https://kuhlmann-garten.de`. Neue lokale WebP-Screenshots bilden die aktuelle Website mit 1440 × 900 beziehungsweise 390 × 844 Pixeln ab.
- Das allgemeine Social Preview ist ein eigenes Markenmotiv im Format 1200 × 630 und verwendet kein Kundenlogo.
- Die erneute mobile Lighthouse-Messung erreichte Performance 98, Accessibility 100, Best Practices 100 und SEO 100.

## Ursprünglicher Zustand

- Die funktionierende Veröffentlichung war ursprünglich auf die GitHub-Pages-Projektadresse mit Repository-Unterpfad ausgerichtet.
- Die künftige Domain `armbruester-digital.de` war per DNS nicht auflösbar; die GitHub-Pages-Adresse antwortete mit HTTP 200.
- Zentrale Konfiguration, Impressum und Datenschutz enthielten sichtbare Platzhalter und `info@example.com`.
- Der Rechteseiten-Wrapper zeigte einen öffentlichen Bearbeitungshinweis.
- Firmenanschrift, korrekte E-Mail-Adresse und optionale Steuerkennungen fehlten.
- Die Startseite war noch nicht klar auf Webdesign in Lübeck ausgerichtet.
- Es gab keine eigenständige lokale Informationsseite für Lübeck.
- Ein nicht realisiertes Praxiskonzept und ein Porträt-Platzhalter wurden sichtbar ausgegeben.
- Das Projekt verwendete Astro 5; `npm audit` meldete nach der reproduzierbaren Installation vier Schwachstellen, darunter drei mit hoher Einstufung.

## Behobene Fehler und inhaltliche SEO-Änderungen

- Unternehmensdaten zentral auf Philipp Armbrüster, Armbrüster Digital, Vorderreihe 20, 23570 Lübeck und `armphi@icloud.com` aktualisiert.
- Telefonnummer öffentlich entfernt; es wird keine Nummer erfunden.
- Startseitentitel, Meta-Description, H1, Einleitung, Zielgruppen, Zusammenarbeit, FAQ und lokale Formulierungen überarbeitet.
- Hochwertige Seite `/webdesign-luebeck/` mit eigenständigen Inhalten zu mobilen Websites, Ladezeit, Navigation, lokaler Auffindbarkeit, SEO-Grundlagen, Onepage- und mehrseitigen Websites, Zielgruppen, Ablauf und persönlicher Betreuung ergänzt.
- Lübeck-Seite von Startseite, Leistungsseite und Footer verlinkt.
- Sichtbare Bearbeitungs- und Porträt-Platzhalter entfernt.
- Projektübersicht auf tatsächlich realisierte Arbeiten begrenzt.
- Keyword-Listen, erfundene Bewertungen, Ranking-Garantien und zusätzliche dünne Stadtseiten wurden nicht ergänzt.

## Technische SEO-Änderungen

- Eindeutige Titel und Beschreibungen für alle indexierbaren Seiten geprüft.
- Explizite Robots-Metadaten (`index, follow` beziehungsweise `noindex, follow`) ergänzt.
- Canonical-, Open-Graph- und Twitter-Daten auf die weiterhin erreichbare GitHub-Pages-Produktion abgestimmt.
- Strukturierte Daten für `WebSite`, `Organization`, `ProfessionalService`, `Person` und Breadcrumbs mit konsistenter Marke, E-Mail und vollständiger Anschrift erweitert.
- Sitemap um `/webdesign-luebeck/` ergänzt und auf indexierbare Inhaltsseiten begrenzt.
- robots.txt und absolute Sitemap-URLs geprüft.
- Apple-Touch-Icon-Referenz, Favicon und Social-Preview-Bild sind vorhanden.
- Hero-Bild priorisiert; unterhalb des sichtbaren Bereichs verwendete Projektbilder laden weiterhin verzögert.
- Astro und `@astrojs/check` auf aktuelle kompatible Versionen aktualisiert; transitive Sicherheitsupdates angewendet.
- `npm audit`: 0 Schwachstellen.

## Impressum

- Öffentlicher Bearbeitungshinweis und sämtliche sichtbaren Rechtstext-Platzhalter entfernt.
- Anbieter, Geschäftsbezeichnung, vollständige Anschrift und anklickbare E-Mail-Adresse zentral eingebunden.
- `vatId` und `businessId` als optionale, leere Konfigurationsfelder ergänzt.
- Der steuerliche Abschnitt wird nur bei einer tatsächlich eingetragenen Kennung gerendert.
- Eine persönliche Steuernummer wird nicht veröffentlicht.

## Datenschutz

- Datenschutzerklärung auf den tatsächlich geprüften technischen Stand abgestimmt:
  - statisches Hosting über GitHub Pages und technisch notwendige Logdaten;
  - Kontaktaufnahme per E-Mail;
  - lokaler Mailto-Fallback des Kontaktformulars ohne externen Endpoint;
  - keine Cookies, kein Local Storage und kein Session Storage;
  - keine externen Fonts;
  - keine Analyse-, Marketing-, Karten-, Social- oder Drittanbieter-Skripte;
  - lokale Bilder und normale externe Links.
- Verantwortlicher und anklickbare Kontaktadresse aktualisiert.
- Interner, nicht sichtbarer Hinweis zur fachlichen Abschlussprüfung bleibt im Quellcode.

## Domainstatus

Die Domainumstellung wurde nach der Registrierung aktiviert. Canonicals, Sitemap, Assets und strukturierte Daten verwenden die Hauptdomain und den Root-Pfad.

Die gültige Produktionsadresse ist:

`https://armbruester-digital.de/`

Die Umstellung einschließlich Netcup-DNS, GitHub Pages, HTTPS, Astro-Konfiguration und Google Search Console ist in `DOMAIN-UMSTELLUNG.md` und `GOOGLE-STARTCHECKLISTE.md` dokumentiert. Weil das Repository per GitHub Actions veröffentlicht wird, ist keine CNAME-Datei im Build erforderlich; die Custom Domain wird in den Pages-Einstellungen gepflegt.

## Tests

- `npm ci`: erfolgreich.
- `npm run check`: erfolgreich, 36 Dateien, 0 Fehler, 0 Warnungen, 0 Hinweise.
- `npm run build`: erfolgreich, 12 Seiten gebaut.
- `npm audit`: erfolgreich, 0 Schwachstellen.
- Produktionsvorschau: alle vorgesehenen HTML-Routen, `robots.txt` und `sitemap.xml` antworteten mit HTTP 200.
- Nicht vorhandene Route: HTTP 404.
- Interne Seiten und Assets: ohne fehlgeschlagene lokale URL.
- Externe Links zu den zwei Live-Projekten und den verwendeten GitHub-Dokumentationen: HTTP 200.
- Pro indexierbarer Seite: genau eine H1.
- JSON-LD: alle erzeugten Blöcke syntaktisch gültig.
- Canonical-URLs: korrekt mit dem aktiven GitHub-Pages-Unterpfad.
- Titel und Meta-Descriptions: keine Duplikate unter den indexierbaren Seiten.
- Viewport-Emulation: 320 × 568, 360 × 800, 390 × 844, 768 × 1024, 1024 × 768 und 1440 × 900 geprüft; `scrollWidth` war jeweils nicht größer als `clientWidth`.
- Impressum bei 360 Pixel: kein horizontaler Überlauf, kein Bearbeitungshinweis, kein Platzhalter.
- Mobile Navigation: sichtbarer Toggle, Öffnen, Scroll-Sperre und Schließen per Escape erfolgreich geprüft. Link- und Button-Logik sind im Header implementiert.
- Kontaktformular: erforderliche Felder, URL-/E-Mail-Prüfung, Mindestlänge, Datenschutzbestätigung, Honeypot und Mailto-Fallback im Code geprüft; kein unkonfigurierter Netzwerkversand.

## Lighthouse

Finale mobile Messung gegen die lokale Produktionsvorschau:

- Performance: 93
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Lighthouse erzeugte den vollständigen Bericht. Unter Windows meldete die CLI erst beim anschließenden Löschen ihres temporären Browserprofils einen `EPERM`-Hinweis; die Messung und der JSON-Bericht waren zu diesem Zeitpunkt bereits vollständig.

## Geänderte Dateien

- `DOMAIN-UMSTELLUNG.md`
- `GOOGLE-STARTCHECKLISTE.md`
- `PROJECT-CHECKLIST.md`
- `README.md`
- `SEO-UND-TESTBERICHT.md`
- `UNTERNEHMENSDATEN-TODO.md`
- `package.json`
- `package-lock.json`
- `public/images/social-preview.svg`
- `public/images/social-preview.png`
- `public/projects/dirk-kuhlmann-desktop.webp`
- `public/projects/dirk-kuhlmann-mobile.webp`
- `src/components/CallToAction.astro`
- `src/components/Footer.astro`
- `src/components/Header.astro`
- `src/components/LegalPageLayout.astro`
- `src/components/ProjectFeature.astro`
- `src/components/SeoHead.astro`
- `src/config/site.ts`
- `src/data/projects.ts`
- `src/data/services.ts`
- `src/pages/datenschutz.astro`
- `src/pages/impressum.astro`
- `src/pages/index.astro`
- `src/pages/kontakt.astro`
- `src/pages/leistungen.astro`
- `src/pages/projekte/index.astro`
- `src/pages/sitemap.xml.ts`
- `src/pages/ueber-mich.astro`
- `src/pages/webdesign-luebeck.astro`
- `src/styles/global.css`

## Offene manuelle Schritte und bekannte Risiken

- Domain registrieren, DNS setzen, GitHub-Custom-Domain eintragen, HTTPS aktivieren und erst danach die dokumentierte Code-Umstellung durchführen.
- Google Search Console und Google-Unternehmensprofil mit echten Inhabernachweisen einrichten.
- Rechtstexte vor dem geschäftlichen Start fachlich prüfen lassen. Diese technische Überarbeitung ersetzt keine Rechtsberatung.
- Umsatzsteuer-Identifikationsnummer oder Wirtschafts-Identifikationsnummer nur ergänzen, falls tatsächlich vorhanden. Die gewöhnliche persönliche Steuernummer nicht veröffentlichen.
- Optional ein freigegebenes professionelles Porträt ergänzen.
- Bild- und Veröffentlichungsrechte der Projektbeispiele dokumentieren.
- Echte weitere Referenzen und freiwillige Kundenbewertungen erst nach tatsächlicher Leistung und Freigabe ergänzen.
- Wenn später ein externer Formulardienst, Tracking, Karten, externe Fonts oder Social-Embeds hinzukommen, Datenschutztext und Einwilligungsbedarf erneut prüfen.
