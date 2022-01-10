# Netzerk Infrastruktur Dienste

## DHCP (dynamic host configuration protocol)

[DHCP Wikipedia](https://de.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)

- UDP 67 und 68
Bei Booten oder Einschalten des Netzwerkes schickt der (noch unkonfigurierte) Host "dhcp Broadcasts" an die broadcast Adresse des Netzwerkes.
Ein DHCP Server antwortet mit Informationen, wie der Host sein Netzwerk konfigurieren soll. Folgende Sachen werden u.A. mitgeteilt.
- IP Adresse
- Netzmaske
- Default Gateway
- zu verwendene DNS Server
- Gültigkeitsdauer dieser Konfiguration (Lease genannt .. die IP Adresse wird "geleast")

Jedes Kabel- bzw. ADSL Modem hat so einen Dienst laufen, daher können Endgeräte automatisch ihre Netzwerk-Konfig bekommen.

## DNS (Domain Name System)
[DNS Wikipedia](https://de.wikipedia.org/wiki/Domain_Name_System)

Man merkt sich Namen besser als IP Adressen. Wichtig:
- Namensauflösung ("name resolution") ermöglicht die Zuordnung von Hostnamen zu IP Adressen, z.B.
```
> host mailgate.spengergasse.at
mailgate.spengergasse.at has address 193.170.108.20
```
- Auch reverse (umgekehrt: Wie heißt der Name von einer IP):
```
> host  193.170.108.20
20.108.170.193.in-addr.arpa domain name pointer mailgate.spengergasse.at.
```
- Delegation von Subdomains auf andere NameServer (NS Records)
- UDP (ev. TCP) Port 53
- Abfragewerkzeug: "dig" (vorm. nslookup).
- DNS ist hierarchisch, ausgehend von sog. root-servern.

### Organsiationen:
- [IANA](https://de.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority) Aufgabe:
  - Weltweite Verteilung von IPv4 Adressen (/8 Blöcke)
  - Organisation des DNS-Namensraumes (root-nameserver)
  - Verwaltung der Zeitzonen-Files (lokales Offset, Sommer/Winterzeiten)
  - Betrieb des IANA-whois
- [ICANN](https://de.wikipedia.org/wiki/Internet_Corporation_for_Assigned_Names_and_Numbers)
  - siehe dort u. Aufgaben (IP-Blöcke an RIR, AS, TLD Verwaltung)
  - Verwaltung von Portnummern (/etc/services)
- [RIPE](https://de.wikipedia.org/wiki/RIPE_Network_Coordination_Centre)
  - Management von IP-Ranges in Europa
  - Betrieb von k.root-servers.net

## NTP (Network Time Protocol)
- UDP / TCP Port 123
- Weltweit verteiltes System von Uhren
- Im ganzen Internet gleiche Zeit: UTC
  - Aber: Schaltsekunden!
- Atomuhren und GPS: Stratum 0 (beste Zeitquellen)
  - Stratum 1: direkte Clients von Stratum 0 Serveren
  - Stratum 2: direkte Clients von Stratum 1 Serveren
  - usw.
- ausgeklügeltes Sync-Protokoll, es berücksichtigt:
  - wieviel Zeit braucht die Abfrage?
  - um wieviel unterscheiden sich die Abfragezeiten (Jitter)
  - um wieviel geht meine lokale Uhr (kernel) falsch?
- ntp pools
- Genauigkeit von ~10ms für jeden Rechner im Internet möglich
- rubidium-Atomuhren als lokaler Taktgeber, Genauigkeite dadurch einstellige μs. (millionstel Sekunden)

## Whois Dienst
Der whois Dienst gibt Auskunft über rechtliche und natürliche Personen, welchen
- Domain-Namen sowie
- IP-Blöcke

gehören.
