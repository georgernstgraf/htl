# Betriebssysteme
- engl. OS (operating system)
- BIOS ROM read-only memory
  - rudimentäres, "erstes" Betriebssystem im Bootprozess
- BIOS -> Betriebssystem -> Programme (Userland)
- RAM random access memory (Arbeitsspeicher)
- Schnittstelle zw. Hardware und Software
  - Gerätetreiber (Treiber, Device-Driver) arbeiten im Kernel-Kontext
  - Treiber sind Bestandteile des Betriebssystem-Kernels
- Funktion der Treiber
  - Kommunikation mit Peripherie
  - Bereitstellung von Daten für laufende Software
- HAL (Hardware abstraction Layer)

# Aufgaben eines OS
## 1. HAL: **abstrahiert** (daher der Name) von den jeweiligen Besonderheiten von Hardware

Beispiel: Dateizugriff
  - Für ein Software-Programm (zB. Word) schaut Laufwerk D: immer gleich aus, egal ob D: ein USB-Stick oder eine Festplatte ist.

