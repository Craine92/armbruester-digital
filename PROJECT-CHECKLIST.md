# Launch-Checkliste – Armbrüster Digital

## Kontaktdaten und Marke

- [ ] Finale Domain in `src/config/site.ts` eintragen
- [ ] Finale Domain als `site` in `astro.config.mjs` eintragen
- [x] E-Mail-Adresse zentral eingetragen
- [x] Telefonnummer bewusst deaktiviert
- [x] Vollständige Geschäftsanschrift eingetragen
- [ ] Instagram-Link ergänzen oder deaktiviert lassen
- [ ] LinkedIn-Link ergänzen oder deaktiviert lassen
- [ ] Typografisches Logo final prüfen; bei Bedarf Logo-Dateien ergänzen

## Bilder und Projekte

- [ ] Nutzungsrechte aller Bilder dokumentieren
- [x] Eigenes Marken-Social-Preview-Bild im Format 1200 × 630 ergänzt

## Kontaktformular

- [ ] Entscheiden, ob E-Mail-Fallback oder externer Formulardienst genutzt wird
- [ ] Optionalen Formular-Endpunkt in `contactConfig.endpoint` eintragen
- [ ] Formulardienst serverseitig validieren und Spam-Schutz konfigurieren
- [ ] Erfolgs- und Fehlerfall auf Mobilgeräten testen
- [ ] Datenschutzangaben um den tatsächlichen Formulardienst ergänzen
- [ ] Keine geheimen Zugangsdaten im Frontend hinterlegen

## Rechtliches

- [ ] Impressum individuell rechtlich prüfen lassen
- [ ] Datenschutztext individuell rechtlich prüfen lassen
- [x] Vollständige Anbieteranschrift ergänzt
- [ ] Umsatzsteuer-ID oder Wirtschafts-ID ergänzen, falls vorhanden
- [ ] Hostinganbieter, Server-Logs und Speicherdauer dokumentieren
- [ ] Betroffenenrechte und zuständige Aufsicht ergänzen
- [ ] Stand der Datenschutzerklärung eintragen

## SEO und Technik

- [ ] Canonical-URLs nach Domainwechsel kontrollieren
- [ ] Sitemap unter `/sitemap.xml` kontrollieren
- [ ] robots.txt kontrollieren
- [ ] Strukturierte Daten mit einem Rich-Results-Tester prüfen
- [ ] Finale Firmenangaben in strukturierten Daten vervollständigen
- [ ] Google Search Console einrichten und Sitemap übermitteln
- [ ] Favicon und Social-Media-Vorschau auf Produktionsdomain testen
- [ ] Alle internen und externen Links prüfen
- [ ] 404-Seite auf dem gewählten Hosting testen
- [ ] HTTPS und Weiterleitungen zwischen Domainvarianten einrichten

## Qualität und Launch

- [ ] `npm run check` ohne Fehler ausführen
- [ ] `npm run build` ohne Fehler ausführen
- [ ] Keine Browser-Konsolenfehler
- [x] Lighthouse Performance, Accessibility, Best Practices und SEO geprüft
- [ ] Tastaturbedienung inklusive mobilem Menü testen
- [ ] Darstellung ab 320 Pixel Breite testen
- [ ] Lange deutsche Wörter und Umlaute kontrollieren
- [ ] Reduzierte Bewegungen im Betriebssystem testen
- [ ] Formular ohne JavaScript und mit JavaScript nachvollziehen
- [ ] Datenschutzerklärung nach jeder späteren Integration aktualisieren
- [ ] Finale Inhalte auf Wahrheit, Aktualität und Freigabe prüfen
