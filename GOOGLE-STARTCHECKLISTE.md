# Google-Startcheckliste für Armbrüster Digital

## Domain und GitHub Pages

1. Domain `armbruester-digital.de` bei Netcup registrieren.
2. Domain im GitHub-Konto verifizieren und anschließend unter **Repository → Settings → Pages → Custom domain** eintragen.
3. Bei Netcup für die Hauptdomain (`@`) diese A-Records anlegen:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Optional für IPv6 diese AAAA-Records anlegen:
   - `2606:50c0:8000::153`
   - `2606:50c0:8001::153`
   - `2606:50c0:8002::153`
   - `2606:50c0:8003::153`
5. Für `www` einen CNAME-Eintrag auf `craine92.github.io` setzen. Den Repository-Namen nicht anhängen.
6. DNS-Status in GitHub Pages abwarten, beide Domainvarianten prüfen und anschließend **Enforce HTTPS** aktivieren.
7. Die Code-Umstellung exakt nach `DOMAIN-UMSTELLUNG.md` durchführen und neu veröffentlichen.

## Google Search Console

8. In der Google Search Console eine Domain-Property für `armbruester-digital.de` anlegen.
9. Die Property mit dem von Google vorgegebenen DNS-TXT-Eintrag bei Netcup bestätigen. Keinen erfundenen Verifizierungscode verwenden.
10. Nach der Domainumstellung `https://armbruester-digital.de/sitemap.xml` einreichen.
11. Die Startseite über die URL-Prüfung testen und einmalig zur Indexierung einreichen.
12. Indexierungsstatus, Crawling-Probleme und Suchanfragen regelmäßig prüfen.

## Lokale Präsenz und Vertrauen

13. Ein Google-Unternehmensprofil erstellen oder ein vorhandenes Profil bestätigen.
14. Den echten Namen **Armbrüster Digital**, die Adresse **Vorderreihe 20, 23570 Lübeck** und die Kontaktadresse **armphi@icloud.com** auf Website und Profil konsistent halten.
15. Leistungen, Einzugsgebiet und Öffnungszeiten im Unternehmensprofil wahrheitsgemäß pflegen.
16. Echte Projektbeispiele mit Freigabe der jeweiligen Auftraggeber ergänzen.
17. Echte Kunden nach abgeschlossener Arbeit um eine freiwillige Bewertung bitten; keine Bewertungen erfinden, kaufen oder vorformulieren.
18. Relevante externe Verlinkungen aufbauen, etwa über echte Partner, Branchenverzeichnisse und lokale Netzwerke. Keine Linkpakete kaufen.
19. Website, Unternehmensprofil und Search Console regelmäßig auf veraltete Angaben, neue Suchanfragen und technische Fehler prüfen.

Die DNS-Werte entsprechen der [offiziellen GitHub-Pages-Dokumentation](https://docs.github.com/de/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) mit Prüfstand 25. Juli 2026.
