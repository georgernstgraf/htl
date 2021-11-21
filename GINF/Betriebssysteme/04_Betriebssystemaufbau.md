# Betriebssysteme

[Betriebssystem](https://de.wikipedia.org/wiki/Betriebssystem)

- engl. OS (operating system)
- BIOS ROM read-only memory
  - Basic Input and Output System
  - rudimentäres, "erstes" Betriebssystem im Bootprozess
- BIOS -> Betriebssystem -> Programme (Userland)
- RAM random access memory (Arbeitsspeicher)
- Schnittstelle zw. Hardware und Software
  - Gerätetreiber (Treiber, Device-Driver) arbeiten im Kernel-Kontext
  - Treiber sind Bestandteile des Betriebssystem-Kernels
- Funktion der Treiber
  - Kommunikation mit Peripherie
  - Bereitstellung von Daten für laufende Software
- I/O bw. IO: Input / Output

# Aufgaben eines OS

### 1. HAL: **abstrahiert** (daher der Name) von den jeweiligen Besonderheiten von Hardware

- HAL (Hardware abstraction Layer)

Dateizugriff: Für ein Software-Programm (zB. Word) schaut Laufwerk D: immer gleich aus, egal ob D: ein USB-Stick oder eine Festplatte ist.

Kommunikation mit Netzwerk: Auch hier muß die Software (zB Browser .. Chrome, Firefox, MS Edge, ..) sich mit den Details der jeweiligen Netzwerkkarte nicht beschäftigen. Das Betriebssystem stellt
über standardisierte Methoden die IO Möglichkeiten bereit

gilt generell für die **allermeisten** Peripherie-Geräte.

### 2. Sicherheit

Das OS ermöglicht für Prozesse einen "geschützten Raum", in welchem dieser ausgeführt wird. Andere Prozesse haben
normalerweise weder Lese- noch Schreibzugriff auf den RAM-Bereich von anderen Prozessen. Jedoch gibt es ebenfalls standardisierte Wege, auf denen Prozesse miteinander kommunizieren können.

### 3. Scheduling und Multiprocessing

Multitasking: Prozesse werden *gleichzeitig* ausgeführt.

Das Betriebssystem sorgt für eine "faire" Verteilung von Ressourcen (Filesystem IO, Rechenzeit, Netzwerk-Bandbreite) unter allen lauffähigen Prozessen. Dies wird ermöglicht durch den Prozess-Scheduler
(Zeitplaner).

[Prozess-Scheduler](https://de.wikipedia.org/wiki/Prozess-Scheduler)

Moderne Betriebssystem-Kernels machen jede Millisekunde (also 1000 Mal pro Sekunde) einen sogenannten "Context-Switch". Hier wird entschieden, welcher Prozess als nächstes "drankommt". Somit ist
auch schon bei einem single-Core Prozessor ein (quasi)-Multitasking möglich. Bei mehreren Cores laufen Prozesse tatsächlich gleichzeitig ab, jedoch maximal soviele, wie Cores auf dem System
vorhanden sind. Der Scheduler verteilt die laufenden Prozesse auf die vorhandenen Cores.

SMP: symmetric multi processing .. [Symmetrisches_Multiprozessorsystem](https://de.wikipedia.org/wiki/Symmetrisches_Multiprozessorsystem) .. symmetrisch deshalb, weil jedes Core jeden Prozess ausführen
kann. SMP heißt es erst ab 2 logischen Cores. Sehr passend wäre hier auch das Wort "simultan", weil wirklich *gleichzeitig* gerechnet wird.

Überlegung: Moderne CPUs sind mit 2-5 Ghz getaktet. Annahme: 3GHz, also 3 000 000 000 (3 Mrd) Rechenschritte pro Sekunde. Wenn der Scheduler 1000 Mal pro Sekunde neu entscheidet, hat ein lauffähiger Prozess
immerhin 3 Mio Taktzyklen zum unterbrechungsfreien Rechnen.

Einige Betriebssysteme (Linux, FreeBSD) erlauben dem Administrator, aus unterschiedlichen Scheduler-Implementierungen zu wählen. Weiters kann man Scheduler durch Systemeinstellungen konfigurieren.

Hohe Priorität eines Prozesses: Das Betriebssystem bevorzugt den Prozess, wenn er gleichzeitig mit anderen laufen möchte. siehe: [Echtzeitsystem](https://de.wikipedia.org/wiki/Echtzeitsystem)
Beispiele:
  - Spiele mit niedriger Antwortzeit
  - Robotik
  - Flugsteuerungen
  - Fertigungstechnik
  - Desktop .. soll geschmeidig und ruckelfrei funktionieren

Besonders niedrige Priorität wird dann für Prozesse oder Prozessgruppen verwendet, wenn das Rechenergebnis nicht schnell fertig sein muß und die reibungslose Funktion des Computers wichtig ist.
Beispiele: verteiltes Rechnen für wissenschaftliche Fragestellungen: [Projekte_verteilten_Rechnens](https://de.wikipedia.org/wiki/Liste_der_Projekte_verteilten_Rechnens) oder zB auch bitcoin-mining.
