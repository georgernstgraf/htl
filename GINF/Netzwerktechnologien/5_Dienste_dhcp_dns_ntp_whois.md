# Netzerk Infrastruktur Dienste

## DHCP (dynamic host configuration protocol)

[https://de.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol](https://de.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)

Ports UDP 67 und 68  
Bei Booten oder Einschalten des Netzwerkes schickt der (noch unkonfigurierte) Host "dhcp Broadcasts" an die broadcast Adresse des Netzwerkes.
Ein DHCP Server antwortet mit Informationen, wie der Host sein Netzwerk konfigurieren soll. Folgende Sachen werden u.A. mitgeteilt:

- IP Adresse
- Netzmaske
- Default Gateway
- IPs von zu verwendenden DNS Servern
- Gültigkeitsdauer dieser Konfiguration (*Lease* genannt .. die IP Adresse wird "geleast" (geborgt))

Jedes Kabel- bzw. ADSL Modem hat so einen Dienst laufen, daher können Endgeräte automatisch ihre Netzwerk-Konfig bekommen.

## DNS (Domain Name System)

[DNS Wikipedia](https://de.wikipedia.org/wiki/Domain_Name_System)

Man merkt sich Namen besser als IP Adressen. Wichtig:  
Namensauflösung ("name resolution") ermöglicht die Zuordnung von Hostnamen zu IP Adressen, z.B.

```text
$ host mailgate.spengergasse.at
mailgate.spengergasse.at has address 193.170.108.20

Auch umgekehrt: Wie heißt der einer IP zugehörige Host-Name?

$ host 193.170.108.20
20.108.170.193.in-addr.arpa domain name pointer mailgate.spengergasse.at.
```

Im o.g. Beispiel wird der - über DHCP bekanntgegebene - DNS Server "gebeten", die Antwort zu suchen. Ein derart konfiguriert arbeitender DNS-Server wird auch DNS-Cache oder *recursive Resolver* genannt. Der Cache fängt initial mit einer öffentlich bekannten Liste aller DNS-Root-Server an und muß für diese Suche nun die DNS-Hierarchie "abklappern", wie in folgendem Beispiel, wo ich dieses "Abklappern" von Hand durchgeführe:

```text
$ dig ns at @k.root-servers.net | grep d.ns.at  # k.root-servers.net ist ursprünglich bekannt
at.       172800    IN    NS    d.ns.at.
d.ns.at.  172800    IN    A     81.91.161.98
d.ns.at.  172800    IN    AAAA  2a02:568:20:1::d

$ dig ns spengergasse.at @d.ns.at | egrep -v '^(;|$)'
spengergasse.at.  10800  IN  NS  ns10.univie.ac.at.
spengergasse.at.  10800  IN  NS  ns5.univie.ac.at.

$ dig a www.spengergasse.at @ns5.univie.ac.at | egrep -v '^(;|$)'
www.spengergasse.at.  300  IN  A  193.170.108.10
```

Ein NS-Record (Name-Server-Record) informiert darüber, welcher Server für eine Domain (=Zone) autoritativ ist.

DNS ist hierarchisch, ausgehend von sog. Root DNS Servern. Diese wissen die NS Records aller TLDs (Top-Level-Domains)
wie zB. `.net` `.com` `.org` oder auch `.wien` oder `.at`. Diese widerum liefern dann die NS-Records, also welche Nameserver
autoritative Auskünfte zu der Zone halten, also authoritativ für die von ihnen verwalteten Zonen ( = Domains) sind.  
Dieses "Weiterleiten von Autorität" (im Beispiel sagt der Root-Server: "Ein Nameserver für die Domain *.at* ist d.dns.at mit IP soundso." und dann sagt uns der "d.ns.at", "wenn Du was über *spengergasse.at* wissen willst, der autoritative Nameserver dafür ist *ns5.univie.ac.at* mit IP soundso").

Dieses Weiterleiten von Autorität nennt man auch Delegation.

DNS verwendet standardmäßig UDP Port 53, gelegentlich auch TCP Port 53.  
[https://de.wikipedia.org/wiki/Root-Nameserver](https://de.wikipedia.org/wiki/Root-Nameserver)

## Organsiationen

IANA [https://de.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority](https://de.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority)

Weltweite Verteilung von IPv4 Adressen (/8 Blöcke)  
Organisation des DNS-Namensraumes (root-nameserver)  
Verwaltung der Zeitzonen-Files (lokales Offset, Sommer/Winterzeiten)  
Betrieb des IANA-whois  
Verwaltung von Standard-Portnummern (/etc/services) und Publikation dieser im RFC: [http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml](http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)  

ICANN [https://de.wikipedia.org/wiki/Internet_Corporation_for_Assigned_Names_and_Numbers](https://de.wikipedia.org/wiki/Internet_Corporation_for_Assigned_Names_and_Numbers)

siehe dort u. Aufgaben (IP-Blöcke an RIR, AS, TLD Verwaltung)  
Verwaltung von Portnummern (/etc/services)  

RIPE [https://de.wikipedia.org/wiki/RIPE_Network_Coordination_Centre](https://de.wikipedia.org/wiki/RIPE_Network_Coordination_Centre)

Management von IP-Ranges in Europa  
Betrieb von k.root-servers.net  
Betrieb des ripe-whois Services.  

IETF [https://de.wikipedia.org/wiki/Internet_Engineering_Task_Force](https://de.wikipedia.org/wiki/Internet_Engineering_Task_Force)

Internet Engeneering Task Force. Sie ist zuständig für die Organisation und Publikation der sog. RFCs (Request for Comment).  
RFCs sind Dokumente mit technischen Standards, in denen praktisch alles zum Thema Internet spezifiziert ist.  
[https://de.wikipedia.org/wiki/Request_for_Comments](https://de.wikipedia.org/wiki/Request_for_Comments)  

## NTP

Network Time Protocol

UDP / TCP Port 123  
Weltweit verteiltes System von Uhren  
Im ganzen Internet gleiche Zeit: *UTC* (universal coordinated time)  
Aber es gibt ein paar Mal pro Jahrhundert eine Schaltsekunde.  

Zeitquellen:

- Atomuhren und GPS: Stratum 0 (beste Zeitquellen)
- Stratum 1: direkte Clients von Stratum 0 Serveren
- Stratum 2: direkte Clients von Stratum 1 Serveren
- usw.

NTP ist ein ausgeklügeltes Time-Sync Protokoll, es berücksichtigt u.A.

- wieviel Zeit braucht die Abfrage?
- um wieviel unterscheiden sich die Abfragezeiten voneinander (Jitter)?
- um wieviel geht meine lokale Uhr (kernel, Hardware) falsch?

*Ntp Pools* sind öffentlich nutzbare Zeitquellen, welche von unterschiedlichen Organsiationen zur Verfügung gestellt werden, z.B. *pool.ntp.org*.  
Genauigkeit von ca. 10ms für jeden Rechner im Internet wird durch ntp möglich.  
Durch Rubidium-Quarze als lokale Taktgeber können Genauigkeiten im einstelligen μs (micro- bzw. millionstel Sekunden) -Bereich erreicht werden.

![Grafik Stratum](https://www.rntrust.ae/sites/default/files/images/rntrust-ntp-highavailability.png)

Wie ist nun möglich, dass wir auf unseren Rechner die österreichische Zeit angezeigt bekommen?: Beim Installieren wird ja eine Zeitzone festgelegt, z.B. `Europe/Vienna`, `Indian/Maldives` oder `America/Detroit`. Das Betriebssystem kann aus der UTC (die hat es wegen NTP) und dem Zeitzonen-File die aktuelle *localtime* ermitteln, inklusive der Sprünge bei Sommer/Winterzeit-Umstellung.

Die sog. "Zone Database" wird von der IANA verwaltet. [http://www.iana.org/time-zones](http://www.iana.org/time-zones). Wenn Länder da etwas ändern, sollten sie es dort einmelden, sonst werden die Computer nix von der Änderung mitbekommen.

## Whois

Der whois Dienst gibt Auskunft über rechtliche und natürliche Personen, welchen

- Domain-Namen sowie
- IP-Blöcke

gehören.

## VPN

Siehe Dokument 7_Sicherheit.
