# Blixxem Bennard – 1:1 Split-Version

Diese Version wurde aus der ursprünglichen Einzeldatei in eine wartbare Projektstruktur aufgeteilt:

- `index.html` → Markup
- `css/style.css` → Styles
- `js/app.js` → Hauptlogik
- `js/privacy-strip.js` → kleine Session-Logik
- `images/` → extrahierte Bilder

## Wichtig

- Die Optik sollte der Originaldatei sehr nahekommen.
- Du kannst die Bilder in `images/` später durch deine lokalen Originale ersetzen.
- Achte darauf, dieselben Dateinamen beizubehalten, wenn du ohne weitere Anpassungen tauschen willst.

## Empfohlener Workflow in VS Code + Claude

1. Ganze Struktur in ein GitHub-Repo legen
2. In VS Code öffnen
3. Claude gezielt an einzelnen Dateien arbeiten lassen:
   - Design → `css/style.css`
   - Verhalten → `js/app.js`
   - Struktur/Inhalt → `index.html`

## GitHub Pages

Wenn du das Repo veröffentlichst, sollte `index.html` im Root liegen.
