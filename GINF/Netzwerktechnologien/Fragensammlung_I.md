# Fragensammlung Netzwerke Teil 1

## Rechnerische Grundlagen

Wieviel Byte sind `(3 Tebibyte - 1000 Gibibyte)`? (3 P.)

10 Pbit/s sind wieviele Gbit/s? (2 P.)

Gegeben ist folgende Binärzahl: `"10011101"`. Stellen Sie diese Zahl in dezimaler sowie in hexadezimaler Schreibweise dar! (3 P.)

## Layer 1 und 2 (\*plex, physisch, Ether)

Wie heißen die 7 Schichten des OSI Modelles und was bedeuten sie? (3 P.)

Erklären Sie den Begriff simplex! (2 P.)

Erklären Sie den Begriff halbduplex (2 P.)

Erklären Sie den Begriff volldumplex (2 P.)

Erklären Sie den Begriff multiplex! (3 P.)

In welcher Einheit wird die Bandbreite einer Datenleitung gemessen? (2 P.)

Welche physischen Medien kennen sie? (3 P.)

Nennen Sie ungefähre Übertragungs-Reichweiten für kabelgebundene Netzwerke! (1 P.)

Nennen Sie ungefähre Übertragungs-Reichweiten für Funknetze! (1 P.)

Nennen Sie ungefähre Übertragungs-Reichweiten für Glasfaser Datenleitungen! (1 P.)

Welches Trägermaterial ermöglicht auf eine Distanz von 1km 10Pbit/s (Peta-Bit pro Sekunde)? (1 P.)

Nennen Sie ungefähre Übertragungs-Reichweiten für Richtfunkverbindungen. (1 P.)

Was bedeutet die "MAC" Adressse? (2 P.)

Wieviele Bytes hat eine Ethernet Adresse? (1 P.)

Was ist der Unterschied zwischen einer MAC Adresse und einer Ethernet Adresse? (1 P.)

Wie viele Hexadezimalzahlen benötigt man, um eine MAC Adresse darzustellen? (2 P.)

Ist anhand einer MAC Adresse die Herstellerfirma der Netzwerkkarte feststellbar? (2 P.)

Wie kann anhand einer MAC Adresse die Herstellerfirma der Netzwerkkarte ausfindig gemacht werden? (2 P.)

Nennen Sie vier verschiedene Hardware Netzwerkkomponenten. (4 P.)

Erklären Sie die Aufgabe und Funktionsweise einer Netzwerk "Bridge". (3 P.)

Erklären Sie die Aufgabe und Funktionsweise eines Hubs. (3 P.)

Erklären Sie die Aufgabe und Funktionsweise eines Switches. (3 P.)

Erklären Sie die Aufgabe und Funktionsweise eines Routers. (3 P.)

Gibt es in einem WLAN ebenfalls Ethernet Adressen? (1 P.)

Welche Technologie löst in heutigen kabelgebundenen Netzwerken das Problem von Signalkollisionen? (2 P.)

### Layer 3 und 4 .. IP / UDP / TCP

Erklären Sie den Unterschied zwischen einem Switch und einem Router! (3 P.)

Ab welchem Layer des OSI Modelles können Datenpakete das lokale Netz verlassen? (1 P.)

Was ist die Aufgabe von Routingprotokollen? (2 P.)

Wie viele Bytes hat eine IP Adresse? (1 P.)

Was bedeutet IP? (1 P.)

Können IP Pakete ein LAN verlassen? (1 P.)

Können TCP Pakete ein LAN verlassen? (1 P.)

Was bedeutet TCP? (1 P.)

Was ist die Besonderheit von TCP gegenüber "reinem Layer 3"? (2 P.)

Auf welcher Schichte des OSI Modelles ist TCP angesiedelt? (2 P.)

aus wievielen bytes besteht eine IP Adresse?

Was ist ein IP Subnetz?

Was ist eine IP Subnetzmaske und welche Schreibweisen dieser Maske kennen Sie?

Erklären Sie die Begriffe Class A, Class B, Class C

Wie lautet eine alternative Schreibweise für die Subnetmask `/24`?

Wie lautet eine alternative Schreibweise für die Subnetmask `255.255.0.0`?

Was ist die Aufgabe des "default gateways"?

### Beispiele von Rechenaufgaben zum Thema Subnetting

Gegeben ist das Netz 10.0.0.0/8:

- Ist die IP 10.23.54.192 in dem geg. Netz?
- Ist die IP 23.10.192.24 in dem geg. Netz?
- Wie viele IP Adressen sind in diesem Netz möglich?
- wie viele Subnetze der Größe `/24` (oder `/16`) sind in diesem Netz möglich?

Gegeben ist das Netz 192.168.23.0/24:

- Ist die IP 192.168.23.23 in dem geg. Netz?
- Ist die IP 192.168.189.23 in dem geg. Netz?
- Wie viele IP Adressen sind in diesem Netz möglich?

Gegeben ist das Netz 78.41.112.0 - 78.41.112.255:

- wie lautet die Schreibweise für das Netz mit "/"
- wie lautet die Schreibweise für das Netz mit *ausgeschriebener* Netzmaske?

Ein PC hat folgende Netzwerk Konfiguration (3 P.):
`inet 10.92.51.185 netmask 255.255.0.0`.

- Wie lautet das Netzwerk in der Schreibweise a.b.c.d/e?
- Wie lautet die niedrigste und wie die höchste mögliche IP Adresse in dem Netz?
- Welche davon dürfen nicht an Netzwerkgeräte vergeben werden?

### Infrastruktur - Dienste:

Was bedeutet dhcp?

welche Probleme löst dhcp? Welche Informationen teilt der Server dem Client mit (mind. 3 Antworten)

was heißt DNS und was wird dadurch möglich?
