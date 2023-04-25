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

Hilfestellung: Mit jeder Zeile lässt sich ein `KoerperParameter` instanzieren, welcher als Konstruktor
für die jeweiligen Körper-Instanzen dienen soll. Studieren Sie zuerst, wie die Klasse `KoerperParameter`
in den Konstruktoren der einzelnen Körper verwendet wird!

Anhand der `art` des `KoerperParamter`s instanzieren Sie die verschiedenen Klassen
mithilfe der switch/case Anweisung (oder notfalls mit if/else).

(5 Punkte)

### Aufgabe 2: Implentierung der Klasse `KoerperParameter`

Im Konstruktor dieser Klasse werden aus dem übergebenen Parameter (`line`) die einzelnen
Felder befüllt. Beachten Sie hier, daß nicht jede Zeile 6 Spalten hat (Würfel, Kugel: 4 Spalten,
Zylinder: 5, Quader: 6). Führen Sie eine gründliche Parameterprüfung durch, welche bei
allen möglichen Fehlern eine neue `IllegalArgumentException` wirft!

(4 Punkte)

### Aufgabe 3: Konstruktor von `Baukasten` - einordnen in Abteilungen

Im Konstruktor von `Baukasten` wurde der Code entfernt, welcher die Körper in die
jeweilige Abteilung einordnet. Die Abteilung eines Körpers wird durch
`koerper.getClass().getSimpleName()` ermittelt.

(6 Punkte)

### Aufgabe 4: Gesamtgewicht des Baukastens

Das Gewicht wird aus Eigengewicht + Summe aller Körpergewichte ermittelt. Vervollständigen
Sie die vorhandene Methode!

(4 Punkte)

### Aufgabe 5: `compareTo` in `Koerper`

Wie in der Einleitung erwähnt, sind innerhalb der Abteilungen des Baukastens die Körper
nach Farbe zu sortieren (alphabetisch), und bei Gleichheit nach Gewicht (absteigend)

(4 Punkte)

---
Maximal erreichbare Punkte: 23


Gutes Gelingen!




