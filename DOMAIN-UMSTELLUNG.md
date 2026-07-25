# Domain-Umstellung auf armbruester-digital.de

## Aktueller Status

Prüfung am 25. Juli 2026:

- `armbruester-digital.de` konnte per DNS nicht aufgelöst werden.
- `www.armbruester-digital.de` konnte per DNS nicht aufgelöst werden.
- Die aktuelle Veröffentlichung unter `https://craine92.github.io/armbruester-digital/` antwortete mit HTTP 200.
- Deshalb bleiben `site: 'https://craine92.github.io'` und `base: '/armbruester-digital'` vorerst aktiv. Es wird noch keine `CNAME`-Datei veröffentlicht.

## Schritte nach Registrierung und DNS-Aktivierung

1. Die Domain im GitHub-Konto verifizieren, um Domain-Übernahmen zu erschweren.
2. Im Repository unter **Settings → Pages → Custom domain** `armbruester-digital.de` eintragen.
3. Bei Netcup für die Hauptdomain (`@`) die vier GitHub-Pages-A-Records eintragen:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Optional zusätzlich die vier in `GOOGLE-STARTCHECKLISTE.md` genannten AAAA-Records setzen.
5. Für `www` einen CNAME auf `craine92.github.io` setzen, ohne Repository-Unterpfad.
6. DNS-Auflösung für Hauptdomain und `www` prüfen. GitHub soll die nicht gewählte Variante auf die eingetragene Hauptdomain umleiten.
7. In `astro.config.mjs` `site` auf `https://armbruester-digital.de` setzen und `base` entfernen oder auf `/` setzen.
8. In `src/config/site.ts` `siteUrl` und `domain` auf die neue Hauptdomain ändern.
9. Neu bauen und Canonical-URLs, Open Graph, strukturierte Daten, Sitemap, robots.txt, interne Links und Assets prüfen.
10. Da dieses Projekt per GitHub Actions veröffentlicht wird, ist laut GitHub keine `CNAME`-Datei erforderlich. Die Custom Domain wird in den Pages-Einstellungen gepflegt.
11. Nach Ausstellung des Zertifikats **Enforce HTTPS** aktivieren.
12. Erst nach erfolgreicher Prüfung die neue Sitemap in der Google Search Console einreichen.

Quelle für die DNS-Werte und die Hinweise zur Actions-Veröffentlichung: [GitHub-Dokumentation zu benutzerdefinierten Domains](https://docs.github.com/de/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
