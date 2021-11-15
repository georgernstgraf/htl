# Web-Technologie-Stack
- Request - Response
- Server - Client
- Stateless (??) (!!)
  - Umgehungsmethoden: tokens, session-ids, cookies
- Ressourcen:
  - [W3 Org](https://www.w3.org/) WWW Konsortium, definitive Referenz
  - [w3c validator](https://validator.w3.org/)
  - [Atom Editor](https://atom.io)  *Empfehlung!*
  - [W3Scools](https://www.w3schools.com/)
  - [selfhtml](https://www.selfhtml.org/) Referenz und Tutorials, **sehr hilfreich**
  - spielen mit `<F12>` im Browser
  - Rechtsklick: Inspect Element

# HTML: Aufbau und Bestandteile

## Über Tags:

- Tags umschließen anderen Inhalt, wie <html> ... </html>
- opening und closing
- Einige wenige Tags sind Standalone-Tags (wie z.B. `<hr>` (Lineal)).
Zur Eindeutigkeit empfehle ich: schreibt hier **`<hr/>`**!
- Tags haben fast immer Attribute (auch Eigenschaften oder Parameter genannt)
- z.B. `<a href="https://google.at/">` Attribut ist hier die Angabe "href", also wohin führt der Link.

# HTML: Gliederung & Anwendungsfälle

## Gliederung, Strukturierung

`<!DOCTYPE html>` (das meint html5, den momentanen Standard)   
- `<html>` (attr: lang)
  - `<head` (Metainformationen, z.B. charset)
  - `<body>` wird untergliedert in:
    - *`<header>`* (analog Word: Kopfzeile)
      - *`<nav>`* (Navigation)
    - *`<main>`*
      - *`<article>`*
        - *`<section>`*
    - *`<footer>`* (analog Word: Fußzeile)

## Weitere Tags:
- `<a>` - Das "Anker (anchor)" Tag. Zum drauf Klicken und Navigieren
  - href
  - name - Zum Navigieren auf einer langen Webpage
- `<div>` - Ein Block mit rechts und links keinem Platz
- `<span>` - Teil einer "Zeile"
- `<p>` - Paragraph
- `<br/>` und `<hr/>` (standalone): Linebreak, horizontal Ruler (Lineal bzw. Strich)
- `<img>` Image-Tag, Einbetten von Bildern
- `<video>` Tag: Einbetten von Videos, *controls, poster, width, autoplay*
- `<input>` - Eingabefeld
  - `textarea` .. usw
  - type="[text|password|date|email|file|checkbox|radio|...]"

# HTML: Tabellen & Grafiken
1. Unordered List `<ul>  .. </ul>`
  - `<li>` .. List Item mit "Bullet ()"
2. Ordered List `<ol> .. </ol>`
  - `<li>` .. List Item mit Nummer
3. Deskriptive List `<dl> .. </dl>` (Beschreibungsliste)
  - `<dt>` *Term*
  - `<dd>` *Data*
4. `<table> .. </table>`
  - tr th td caption colspan thead tbody ...
5. `<img>` Image-Tag
  - src, width, height, ...

# CSS: Designelemente
# CSS: Selektoren
# JavaScript: Interaktivität
# CMS
