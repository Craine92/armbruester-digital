# Armbrüster Digital

Veröffentlichungsnahe Markenwebsite für **Armbrüster Digital** und den persönlichen Ansprechpartner Philipp Armbrüster. Die Website richtet sich an kleine Unternehmen, Selbstständige, Handwerksbetriebe, Praxen und lokale Dienstleister. Sie ist statisch generierbar, responsiv, datenschutzfreundlich und ohne große clientseitige Abhängigkeiten umgesetzt.

## Technologien

- Astro 5
- TypeScript im strikten Modus
- semantisches HTML und modernes CSS
- kleine, progressive JavaScript-Module für Navigation, Einblendungen, Projektfilter und Formular-Fallback
- lokale SVG-Platzhalter; keine extern geladenen Fonts, Tracker oder Medien

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

Der statische Build liegt danach in `dist/`. Das Projekt ist für den GitHub-Pages-Unterpfad `/armbruester-digital/` konfiguriert. Die lokale Entwicklungs- und Vorschauadresse enthält deshalb ebenfalls diesen Base-Pfad.

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
  images/       lokale Projekt-, Portrait- und Social-Platzhalter
```

## Persönliche Daten anpassen

Alle austauschbaren Angaben stehen in `src/config/site.ts`. Dort werden Marke, Inhaber, Domain, E-Mail, Telefon, Adresse, Social-Media-Links, Bilder und die URL der Hochzeitswebsite gepflegt. Leere Telefon- und Social-Werte werden im Footer nicht als Links ausgegeben.

Die Produktionsadresse ist für `https://craine92.github.io/armbruester-digital/` vorkonfiguriert. Canonical-URLs, Sitemap, robots.txt und strukturierte Daten werden einschließlich des Repository-Unterpfads erzeugt.

## Projekte hinzufügen

Neue Projekte werden als Objekt in `src/data/projects.ts` ergänzt. Benötigt werden Titel, Beschreibung, Kategorien, Leistungen, lokales Bild und Alt-Text. `detailUrl` und `externalUrl` sind optional. Konzepte müssen mit einem eindeutigen Status wie „In Vorbereitung“ gekennzeichnet bleiben.

Für eine eigene Fallstudie wird eine neue Datei unter `src/pages/projekte/` erstellt. Die Hochzeitswebsite dient als strukturelles Beispiel.

## Bilder austauschen

Die derzeitigen SVG-Dateien in `public/images/` sind absichtlich deutlich gekennzeichnete Platzhalter. Das Portrait wird zentral über `siteConfig.images.portrait` referenziert. Projektbilder werden je Projekt in `src/data/projects.ts` festgelegt.

Für Fotos empfehlen sich AVIF oder WebP in mehreren sinnvollen Größen. Bildabmessungen müssen im Markup erhalten bleiben, um Layoutsprünge zu vermeiden. Aussagekräftige Alt-Texte sind bei jedem Austausch anzupassen. Das Social-Preview-Bild sollte final als PNG oder JPG in 1200 × 630 Pixel bereitgestellt werden.

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

## Rechtliche Platzhalter

Impressum und Datenschutz sind keine rechtsverbindlichen Vorlagen. Beide Seiten enthalten sichtbare Platzhalter und müssen vor Veröffentlichung individuell geprüft und vervollständigt werden. Hosting, Formularanbieter und alle später ergänzten Dienste müssen in den Datenschutzangaben berücksichtigt werden.

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

Das Projekt ist für das Repository `craine92/armbruester-digital` und die Zieladresse `https://craine92.github.io/armbruester-digital/` eingerichtet. `astro.config.mjs` enthält dafür `site: 'https://craine92.github.io'` und `base: '/armbruester-digital'`.

### Einmalige Einrichtung

1. Das Projekt in ein GitHub-Repository mit dem Namen `armbruester-digital` übertragen.
2. `package-lock.json` mit committen; die offizielle Astro-Action erkennt darüber npm und führt eine reproduzierbare Installation aus.
3. Im GitHub-Repository unter **Settings → Pages → Build and deployment → Source** die Option **GitHub Actions** auswählen.
4. Den Standardbranch `main` verwenden. Bei einem anderen Branchnamen muss `.github/workflows/deploy.yml` entsprechend angepasst werden.
5. Vor der öffentlichen Freigabe alle rechtlichen und geschäftlichen Platzhalter vervollständigen.

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

Der Status der Veröffentlichung ist im Reiter **Actions** sichtbar. Nach erfolgreichem Abschluss ist die aktualisierte Website unter `https://craine92.github.io/armbruester-digital/` erreichbar.

Interne Links und öffentliche Assets müssen über `src/utils/paths.ts` beziehungsweise `import.meta.env.BASE_URL` aufgelöst werden. Dadurch funktionieren sie sowohl lokal als auch unter dem GitHub-Pages-Unterverzeichnis.
