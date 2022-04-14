# Fragensammlung Netzwerke Teil 1

Wie heißen die 7 Schichten des OSI Modelles und was bedeuten sie?

## Basics (\*plex, physisch, Ether)

erkläre einen der Begriffe simplex, halbduplex, volldumplex, multiplex  
welche physischen medien kennen sie?  
Nennen Sie ungefähre Übertragungs-Reichweiten für kabelgebundene Netzwerke!  
Nennen Sie ungefähre Übertragungs-Reichweiten für Funknetze!  
Nennen Sie ungefähre Übertragungs-Reichweiten für Glasfaser Datenleitungen!  
Nennen Sie ungefähre Übertragungs-Reichweiten für Richtfunkverbindungen.  
Was bedeutet die "MAC" Adressse?  
Ist anhand einer MAC Adresse die Herstellerfirma der Netzwerkkarte feststellbar?  
Wie kann anhand einer MAC Adresse die Herstellerfirma der Netzwerkkarte ausfindig gemacht werden?  
nenne 4 hardware netzwerkkomponenten - Erkläre die Funktionen des jeweiligen Gerätes.  

wieviele bytes hat eine ethernet-Adresse?

gibt es in einem WLAN ebenfalls Ethernet Adressen?

welche Technologie löst in heutigen kabelgebundenen Netzwerken das Problem von Signalkollisionen?

### IP / TCP

Ab welchem Layer des OSI Modelles können Datenpakete das lokale Netz verlassen?

was ist die aufgabe von routingprotokollen?

was bedeutet IP?

Können IP Pakete ein LAN verlassen?

Können TCP Pakete ein LAN verlassen?

was bedeutet TCP?

was ist die Besonderheit von TCP gegenüber "reinem Layer 3"?

Auf welcher Schichte des OSI Modelles ist TCP angesiedelt?

aus wievielen bytes besteht eine IP Adresse?

Was ist ein IP Subnetz?

Was ist eine IP Subnetzmaske und welche Schreibweisen dieser Maske kennen Sie?

Erklären Sie die Begriffe Class A, Class B, Class C

Wie lautet eine alternative Schreibweise für die Subnetmask `/24`?

Wie lautet eine alternative Schreibweise für die Subnetmask `255.255.0.0`?

Was ist die Aufgabe des "default gateways"?

### Beispiele von Rechenaufgaben zum Thema Subnetting

Gegeben das Netz 10.0.0.0/8:
- Ist die IP 10.23.54.192 in dem geg. Netz?
- Ist die IP 23.10.192.24 in dem geg. Netz?
- Wie viele IP Adressen sind hier möglich?
- wie viele Subnetze der Größe `/24` (oder `/16`) sind in diesem Netz möglich?

Gegeben das Netz 192.168.23.0/24:
- Ist die IP 192.168.23.23 in dem geg. Netz?
- Ist die IP 192.168.189.23 in dem geg. Netz?
- Wie viele IP Adressen sind in diesem Netz möglich?

Gegeben das Netz 78.41.112.0 - 78.41.112.255:
- wie lautet die Schreibweise für das Netz mit "/"
- wie lautet die Schreibweise für das Netz mit *ausgeschriebener* Netzmaske?

### Infrastruktur - Dienste:

Was bedeutet dhcp?

welche Probleme löst dhcp? Welche Informationen teilt der Server dem Client mit (mind. 3 Antworten)

was heißt DNS und was wird dadurch möglich?
