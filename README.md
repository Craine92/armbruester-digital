# Armbrüster Digital

Veröffentlichungsnahe Markenwebsite für **Armbrüster Digital** und den persönlichen Ansprechpartner Philipp Armbrüster. Das deutschlandweite Angebot umfasst Strategie, Website-Erstellung, SEO, Social Media und digitale Betreuung für Unternehmen, Selbstständige, Handwerk, Praxen, Gastronomie, lokale Dienstleister und Gründungen. Die Website ist statisch generierbar, responsiv, datenschutzfreundlich und ohne große clientseitige Abhängigkeiten umgesetzt.

## Technologien

- Astro 5
- TypeScript im strikten Modus
- semantisches HTML und modernes CSS
- kleine, progressive JavaScript-Module für Navigation, Einblendungen, Projektfilter und Formular-Fallback
- lokale Bilder und Grafiken; keine extern geladenen Fonts, Tracker oder Medien

## Installation und lokale Entwicklung

Voraussetzung ist eine aktuelle Node.js-LTS-Version inklusive npm.

```bash
npm install
npm run dev
```

Astro zeigt anschließend die lokale Adresse an, üblicherweise `http://localhost:4321`.

## Prüfung und Build

```bash
npm run check
npm run build
npm run preview
```

Der statische Build liegt danach in `dist/`. Das Projekt ist für die eigene Domain `https://armbruester-digital.de` und den Root-Pfad `/` konfiguriert.

## Projektstruktur

```text
src/
  components/   wiederverwendbare UI- und SEO-Komponenten
  config/       persönliche Daten und Formular-Konfiguration
  data/         Navigation, Leistungen, Projekte und Ablauf
  layouts/      globales Seitenlayout
  pages/        alle Seiten sowie Sitemap und robots.txt
  styles/       Designsystem und responsives Layout
public/
  images/       lokale Projekt- und Markenbilder
```

## Persönliche Daten anpassen

Alle zentralen Angaben stehen in `src/config/site.ts`. Dort werden Marke, Inhaber, Domain, E-Mail, Adresse, optionale Steuerkennungen, Social-Media-Links und Bilder gepflegt. Leere Telefon-, Steuer- und Social-Werte werden öffentlich nicht ausgegeben.

Die Produktionsadresse ist `https://armbruester-digital.de/`. Canonical-URLs, Sitemap, robots.txt und strukturierte Daten werden für diese Hauptdomain erzeugt.

## Projekte hinzufügen

Neue, tatsächlich realisierte Projekte werden als Objekt in `src/data/projects.ts` ergänzt. Benötigt werden Titel, Beschreibung, Kategorien, Leistungen, lokales Bild und Alt-Text. `detailUrl` und `externalUrl` sind optional.

Für eine eigene Fallstudie wird eine neue Datei unter `src/pages/projekte/` erstellt. Die Kuhlmann-Fallstudie dient als strukturelles Beispiel.

## Bilder pflegen

Projektbilder werden je Projekt in `src/data/projects.ts` festgelegt.

Für Fotos empfehlen sich AVIF oder WebP in mehreren sinnvollen Größen. Bildabmessungen müssen im Markup erhalten bleiben, um Layoutsprünge zu vermeiden. Aussagekräftige Alt-Texte sind bei jedem Austausch anzupassen. Das Marken-Social-Preview-Bild liegt als PNG in 1200 × 630 Pixel vor.

## Kontaktformular konfigurieren

Der Formular-Endpunkt steht in `contactConfig.endpoint` in `src/config/site.ts`.

- Ist der Wert leer, validiert das Formular lokal und öffnet anschließend eine vorbereitete E-Mail. Die Website versendet selbst keine Daten.
- Ist eine HTTPS-URL eingetragen, sendet das Formular die Daten per `POST` als `FormData` an diesen Dienst.
- Der verwendete Anbieter muss datenschutzrechtlich geprüft und in der Datenschutzerklärung dokumentiert werden.
- Serverseitige Validierung und Spam-Schutz des Dienstes bleiben erforderlich; der Honeypot im Frontend ist nur eine zusätzliche Hürde.

Zugangsdaten oder API-Schlüssel dürfen nicht im Frontend hinterlegt werden.

## SEO-Einstellungen

Seitentitel und Beschreibungen werden pro Seite an `BaseLayout` übergeben. `SeoHead.astro` erzeugt Canonical-, Open-Graph- und Twitter-Metadaten sowie `ProfessionalService`, `Person`, `WebSite` und Breadcrumb-Daten. Sitemap und robots.txt werden beim Build generiert.

Vor dem Launch sind zu prüfen:

- finale Domain in Konfiguration und Astro-Config
- Social-Preview-Bild
- vollständige Unternehmensdaten in strukturierten Daten
- tatsächliche Indexierbarkeit auf dem Zielhosting
- XML-Sitemap in der Google Search Console
- alle Seitentitel und Suchbegriffe passend zum finalen Angebot

## Rechtliche Inhalte

Impressum und Datenschutz bilden den derzeitigen technischen Stand und die bereitgestellten Unternehmensdaten ab. Sie müssen vor dem geschäftlichen Start fachlich geprüft und bei jeder späteren Integration aktualisiert werden.

## Performance- und Qualitätsprüfung

Nach `npm run build` die Produktionsvorschau mit `npm run preview` starten und Lighthouse in einem privaten Browserfenster ausführen. Zusätzlich prüfen:

- Navigation vollständig mit Tastatur und Escape-Taste
- Darstellung bei 320, 375, 768, 1024 und großen Desktop-Breiten
- `prefers-reduced-motion`
- Kontrast, Fokuszustände und Formularfehler
- interne Links und externe Projekt-URL
- keine Konsolenfehler und keine fehlenden Assets
- HTML mit dem W3C Validator

Die vollständigen offenen Punkte stehen in `PROJECT-CHECKLIST.md`.

## Veröffentlichung auf GitHub Pages

Das Projekt ist für das Repository `craine92/armbruester-digital` und die Zieladresse `https://armbruester-digital.de/` eingerichtet. `astro.config.mjs` enthält dafür `site: 'https://armbruester-digital.de'` und `base: '/'`.

### Einmalige Einrichtung

1. Das Projekt in ein GitHub-Repository mit dem Namen `armbruester-digital` übertragen.
2. `package-lock.json` mit committen; die offizielle Astro-Action erkennt darüber npm und führt eine reproduzierbare Installation aus.
3. Im GitHub-Repository unter **Settings → Pages → Build and deployment → Source** die Option **GitHub Actions** auswählen.
4. Den Standardbranch `main` verwenden. Bei einem anderen Branchnamen muss `.github/workflows/deploy.yml` entsprechend angepasst werden.
5. Vor dem geschäftlichen Start die Rechtstexte fachlich prüfen lassen.

Der Workflow `.github/workflows/deploy.yml` verwendet die offizielle Astro-Action. Bei jedem Push auf `main` wird die Website gebaut und anschließend über GitHub Pages veröffentlicht. Über **Actions → Deploy to GitHub Pages → Run workflow** kann die Veröffentlichung zusätzlich manuell gestartet werden.

### Website aktualisieren

Änderungen zunächst lokal prüfen:

```bash
npm install
npm run build
npm run preview
```

Anschließend die Änderungen committen und auf `main` pushen:

```bash
git add .
git commit -m "Website aktualisieren"
git push origin main
```

Der Status der Veröffentlichung ist im Reiter **Actions** sichtbar. Nach erfolgreichem Abschluss ist die aktualisierte Website unter `https://armbruester-digital.de/` erreichbar.

Interne Links und öffentliche Assets werden über `src/utils/paths.ts` beziehungsweise `import.meta.env.BASE_URL` aufgelöst und liegen auf der Hauptdomain direkt unter dem Root-Pfad.
