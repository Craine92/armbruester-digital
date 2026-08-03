# Domain-Umstellung auf armbruester-digital.de

## Aktueller Status

Die Anwendung ist auf `https://armbruester-digital.de` als Hauptdomain und den Root-Pfad `/` eingestellt. Die Veröffentlichung erfolgt per GitHub Actions. Die Datei `public/CNAME` stellt sicher, dass die Custom Domain in das veröffentlichte Artefakt übernommen wird; zusätzlich wird die Domain in den GitHub-Pages-Einstellungen gepflegt.

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
7. In `astro.config.mjs` `site` auf `https://armbruester-digital.de` gesetzt lassen. Es ist kein Repository-Unterpfad über `base` konfiguriert.
8. In `src/config/site.ts` `siteUrl` und `domain` auf der Hauptdomain halten.
9. Nach Änderungen neu bauen und Canonical-URLs, Open Graph, strukturierte Daten, Sitemap, robots.txt, interne Links und Assets prüfen.
10. `public/CNAME` im Repository behalten und die Custom Domain zusätzlich in den Pages-Einstellungen pflegen.
11. Nach Ausstellung des Zertifikats **Enforce HTTPS** aktivieren.
12. Erst nach erfolgreicher Prüfung die neue Sitemap in der Google Search Console einreichen.

Quelle für die DNS-Werte und die Hinweise zur Actions-Veröffentlichung: [GitHub-Dokumentation zu benutzerdefinierten Domains](https://docs.github.com/de/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
