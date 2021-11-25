# Web-Technologie Stack

## **Teil 1: HTML**

### Was bedeuten die Kürzel
- HTML: "HyperText Markup Language"
- HTTP: "HyperText Transfer Protocol"

### allgemein:
- HTML Dateien werden über das HTTP Protokoll übertragen
- Request - Response (`GET` -> `200 OK`)
- Server - Client
- Stateless (??) (!!) - Umgehungsmethoden: tokens, session-ids, cookies

#### Ressourcen:
- [W3 Org](https://www.w3.org/) WWW Konsortium, definitive Referenz
- [w3c validator](https://validator.w3.org/)
- [Atom Editor](https://atom.io)  *Empfehlung!*
- [VS Code IDE](https://code.visualstudio.com/) - integrierter Editor: Atom 😉
- [W3Scools](https://www.w3schools.com/)
- [selfhtml](https://www.selfhtml.org/) Referenz und Tutorials, **sehr hilfreich**
- spielen mit `<F12>` im Browser
- Rechtsklick im Browser
  - Inspect Element
  - View Page Source

## HTML Aufbau und Bestandteile, Tags:

### verschiedene Typen von Tags:
- opening, z.B. `<body>`
- closing, z.B. `</body>`
- Standalone-Tags (wie z.B. `<hr/>` (Lineal)).  
Zur Eindeutigkeit wird empfohlen: `<hr/>`. Man *darf* auch nur `<hr>` schreiben.

### Parent - Child - Sibling
Tags umschließen anderen Inhalt, so wie wie `<html> ... </html>`.
Daraus ergeben sich Verwandtschaftsbeziehungen:
  - Parent (Eltern): das nächst äußere Tag
  - Child (Kind): Das umschlossene Child
  - Sibling: (Geschwister)

Somit ist `<html>` *Parent* von `<head>` und `<body>`, beide letzteren sind untereinander Siblings und beide sind Childs von `<html>`.

### Tag-Attribute
- Tags haben fast immer Attribute (auch Eigenschaften oder Parameter genannt)
- z.B. `<a href="https://google.at/">` Attribut ist hier die Angabe "href", also wohin führt der Link.
- Gute HTML-Editoren schlagen mögliche Attribute vor.

## Gliederung, Strukturierung

`<!DOCTYPE html>` (das meint html5, den momentanen Standard)   
- `<html>` (attr: lang)
  - `<head` (Metainformationen, z.B. charset)
    - `<title>`: Tab-Überschrift
    - `<meta>`: name/content Paare, charset, keywords, viewport, ..
  - `<body>` wird untergliedert in:
    - *`<header>`* (analog Word: Kopfzeile)
      - *`<nav>`* (Navigation)
    - *`<main>`*
      - *`<article>`*
        - *`<section>`*
    - *`<footer>`* (analog Word: Fußzeile)
- `<iframe>` .. Zum Einbetten anderer Websites, oft aus Sicherheitsgründen nicht möglich.

## Weitere Tags zur Strukturierung:
- `<a>` - Das "Anker (anchor)" Tag. Zum drauf Klicken und Navigieren
  - href
  - name - Zum Navigieren auf einer langen Webpage
- `<div>` - Container: Ein Block mit rechts und links keinem Platz, früher häufig verwendet, jedoch seit html5 wieder sinkend. (s. `article`, `section`, `header`, `footer` u.Ä.)
- `<span>` - Container: Teil einer "Zeile"
- `<p>` - Paragraph
- `<br/>` und `<hr/>` (standalone): Linebreak, horizontal Ruler (Lineal bzw. Strich)
- `<img>` Image-Tag, Einbetten von Bildern
- `<video>` Tag: Einbetten von Videos, *controls, poster, width, autoplay*

## Benutzereingabe, Textfelder und Buttons
- `<input>` - Eingabefeld
  - `<textarea>` .. usw
  - type="[text|password|date|email|file|checkbox|radio|...]"
- Parent-Element: `<form>`, ein Web-Formular. Umschließt also die input-Felder. Braucht am *Server Funktionalität*, die etwas mit den Daten macht.

## Tabellen & Grafiken
- Unordered List `<ul>  .. </ul>`: `<li>` .. : List Item mit "Bullet ()"
2. Ordered List `<ol> .. </ol>`: `<li>` .. `</li>`: List Item mit Nummer
- Deskriptive List `<dl> .. </dl>` (Beschreibungsliste)
  - `<dt>` Description-*Term*
  - `<dd>` Description-*Data*
- `<table> .. </table>`: tr th td caption colspan thead tbody ...
5. `<img>` Image-Tag: src, width, height, ...
