# Launch-Checkliste – Armbrüster Digital

## Kontaktdaten und Marke

- [ ] Finale Domain in `src/config/site.ts` eintragen
- [ ] Finale Domain als `site` in `astro.config.mjs` eintragen
- [ ] E-Mail-Adresse `info@example.com` ersetzen und Postfach testen
- [ ] Telefonnummer ergänzen oder bewusst deaktiviert lassen
- [ ] Vollständige Geschäftsanschrift ergänzen
- [ ] Postleitzahl und Straße ergänzen
- [ ] Instagram-Link ergänzen oder deaktiviert lassen
- [ ] LinkedIn-Link ergänzen oder deaktiviert lassen
- [ ] Typografisches Logo final prüfen; bei Bedarf Logo-Dateien ergänzen

## Bilder und Projekte

- [ ] Portrait-Platzhalter durch ein professionelles Foto von Philipp Armbrüster ersetzen
- [ ] Alt-Text des Portraits an das finale Motiv anpassen
- [ ] Projektbild der Hochzeitswebsite durch freigegebene echte Screenshots ersetzen
- [ ] Konzept-Platzhalter für Garten- und Landschaftsbau prüfen oder später ersetzen
- [ ] Konzept-Platzhalter für Podologie prüfen oder später ersetzen
- [ ] Nutzungsrechte aller Bilder dokumentieren
- [ ] Social-Preview-Platzhalter durch finales 1200 × 630-Pixel-Bild ersetzen
- [ ] URL `https://hochzeit-philipp-justine.de` testen und bei Bedarf zentral ändern

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
- [ ] Vollständige Anbieteranschrift ergänzen
- [ ] Telefonnummer im Impressum ergänzen
- [ ] Umsatzsteuer-ID, Steuernummer-Hinweis oder Kleinunternehmerangabe prüfen
- [ ] Inhaltlich verantwortliche Person und Anschrift ergänzen
- [ ] Haftungs- und Streitbeilegungshinweise prüfen
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
- [ ] Lighthouse Performance, Accessibility, Best Practices und SEO prüfen
- [ ] Tastaturbedienung inklusive mobilem Menü testen
- [ ] Darstellung ab 320 Pixel Breite testen
- [ ] Lange deutsche Wörter und Umlaute kontrollieren
- [ ] Reduzierte Bewegungen im Betriebssystem testen
- [ ] Formular ohne JavaScript und mit JavaScript nachvollziehen
- [ ] Datenschutzerklärung nach jeder späteren Integration aktualisieren
- [ ] Finale Inhalte auf Wahrheit, Aktualität und Freigabe prüfen
