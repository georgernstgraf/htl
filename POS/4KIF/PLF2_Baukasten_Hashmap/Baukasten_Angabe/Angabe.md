# 4BKIF PLF2 25.4.2023

#### Themen: HashSet, HashMap, FileReader, CSV

### Einleitung

In der Datei "geschenke.csv" findet sich in jeder Zeile ein Bauklotz, welcher in Klaras Baukasten
aufgenommen werden soll. Manche Zeilen sind fehlerhaft. Diese mögen mit entsprechender Fehlermeldung
nach Sytem.err ausgegeben werden.

Weiter sind einige Klassen (insbesondere Main) teilweise vorimplementiert. An allen Stellen,
welche "TODO" im Kommentar vorkommt, haben Sie Aufgaben zu erledigen. Außerhalb dieser
Kommentare sollten Sie den Code nicht ändern!

Der Baukasten hat "Abteilungen" für die unterschiedlichen Objekte, eine Abteilung mit
Würfeln, eine mit Zylindern, ein mit Quadern, und eine mit Kugeln.

Innerhalb dieser Abteilungen werden die Körper sortiert. Siehe Aufgabe 5!

### Aufgabe 1: Einlesen der CSV Datei

Hilfestellung: Mit jeder Zeile läßt sich ein "KoerperParameter" instanzieren, welcher als Konstruktor
für die jeweiligen dienen kann. Studieren Sie zuerst die Klasse "KoerperParameter"!

### Aufgabe 2: Reparieren der Klasse `KoerperParameter`

Diese Aufgabe ist selbstredend, es geht darum, das `String[] parts` richtig zu erzeugen.

### Aufgabe 3: Konstruktor von `Baukasten` - einordnen in Abteilungen

Im Konstruktor von `Baukasten` wurde der Code entfernt, welcher die Körper in die
jeweilige Abteilung einordnet. Die Abteilung eines Körpers wird durch
`koerper.getClass().getSimpleName()` ermittelt.

### Aufgabe 4: Gesamtgewicht des Baukastens

Das Gewicht wird aus Eigengewicht + Summe aller Körpergewichte ermittelt. Vervollständigen
Sie die vorhanden Methode!

### Aufgabe 5: `compareTo` in `Koerper`

Wie in der Einleitung erwähnt, sind innerhalb der Abteilungen des Baukastens die Körper
nach Farbe zu sortieren (alphabetisch), und bei Gleichheit nach Gewicht (absteigend)

---
Gutes Gelingen!




