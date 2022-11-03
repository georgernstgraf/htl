# Fragensammlung Netzwerke Teil 1

## Rechnerische Grundlagen

Wieviel Byte sind `(3 Tebibyte - 1000 Gibibyte)`?

10 Pbit/s sind wieviele Gbit/s?

Gegeben ist folgende Binärzahl: `"10011101"`. Stellen Sie diese Zahl in dezimaler sowie in hexadezimaler Schreibweise dar!

## Layer 1 und 2 (\*plex, physisch, Ether)

Wie heißen die 7 Schichten des OSI Modelles und was bedeuten sie?

Erkläre einen der Begriffe simplex, halbduplex, volldumplex, multiplex!

In welcher Einheit wird die Bandbreite einer Datenleitung gemessen?

Welche physischen Medien kennen sie?  

Nennen Sie ungefähre Übertragungs-Reichweiten für kabelgebundene Netzwerke!

Nennen Sie ungefähre Übertragungs-Reichweiten für Funknetze!

Nennen Sie ungefähre Übertragungs-Reichweiten für Glasfaser Datenleitungen!

Welches Trägermaterial ermöglicht auf eine Distanz von 1km 10Pbit/s (Peta-Bit pro Sekunde)?

Nennen Sie ungefähre Übertragungs-Reichweiten für Richtfunkverbindungen.

Was bedeutet die "MAC" Adressse?

Wieviele Bytes hat eine Ethernet Adresse?

Was ist der Unterschied zwischen einer MAC Adresse und einer Ethernet Adresse?

Wie viele Hexadezimalzahlen benötigt man, um eine MAC Adresse darzustellen?

Ist anhand einer MAC Adresse die Herstellerfirma der Netzwerkkarte feststellbar?

Wie kann anhand einer MAC Adresse die Herstellerfirma der Netzwerkkarte ausfindig gemacht werden?

Nennen Sie vier verschiedene Hardware Netzwerkkomponenten.

Erklären Sie die Funktion des jeweiligen Gerätes.  

Erklären Sie die Aufgabe und Funktionsweise einer Netzwerk "Bridge".

Erklären Sie die Aufgabe und Funktionsweise eines Hubs.

Erklären Sie die Aufgabe und Funktionsweise eines Switches.

Erklären Sie die Aufgabe und Funktionsweise eines Routers.

Gibt es in einem WLAN ebenfalls Ethernet Adressen?

Welche Technologie löst in heutigen kabelgebundenen Netzwerken das Problem von Signalkollisionen?

### Layer 3 und 4 .. IP / UDP / TCP

Erklären Sie den Unterschied zwischen einem Switch und einem Router!

Ab welchem Layer des OSI Modelles können Datenpakete das lokale Netz verlassen?

Was ist die Aufgabe von Routingprotokollen?

Wie viele Bytes hat eine IP Adresse?

Was bedeutet IP?

Können IP Pakete ein LAN verlassen?

Können TCP Pakete ein LAN verlassen?

Was bedeutet TCP?

Was ist die Besonderheit von TCP gegenüber "reinem Layer 3"?

Auf welcher Schichte des OSI Modelles ist TCP angesiedelt?

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
