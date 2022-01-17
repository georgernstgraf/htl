# Netzwerksicherheit

[https://de.wikipedia.org/wiki/Netzwerksicherheit](https://de.wikipedia.org/wiki/Netzwerksicherheit)
Sicherheitsaspekte:

- Verfügbarkeit, Stabilität, Robustheit
- Einbruchssicherheit

## Verfügbarkeit

Verfügbarkeit [https://de.wikipedia.org/wiki/Verfügbarkeit](https://de.wikipedia.org/wiki/Verf%C3%BCgbarkeit)  
24/7 [https://de.wikipedia.org/wiki/Hochverfügbarkeit](https://de.wikipedia.org/wiki/Hochverf%C3%BCgbarkeit)  
SLA [https://de.wikipedia.org/wiki/Service-Level-Agreement](https://de.wikipedia.org/wiki/Service-Level-Agreement)  
Stabile Betriebssysteme erhöhen die Verfügbarkeit.

### Redundanz

Redundanz meint das Gegenteil des Begriffes des "single point of failure". Oft ist es nicht sofort ersichtlich,
dass z.B. die Stromversorgung so ein single point ist. Rechenzentren tragen dem Rechnung durch Akkus und Notstromaggregate.
Es muß genau analysiert werden, was alles redundant ausgelegt werden muß, um hochverfügbar zu sein.  
Manche single points of failure müssen je nach (finanziellen) Ressourcen in Kauf genommen werden.  
Im Anschluss einige Konzepte:

- DNS round robin (ein Hostname -> mehrere IPs): Bsp: google MX, at.pool.ntp.org 
- ha-proxy (mehrere Backend-Server "hinter" einer IP)
- anycast (eine IP, viele Server) (Netzwerk-Schnickschnack ist beteiligt)

## Sicherheit vor Einbruch und Datendiebstahl

Problematik: Hin und wieder knackt ein Mathematiker einen crypto-Algorithmus, daher:  

- regelmäßiges Patchen aller beteiligten Software-Komponenten
- Inventory über Patch-Stände (eher junges Konzept, noch in den Kinderschuhen) in Kombination mit Vulnerability-Datenbanken
- Firewalls
  - Layer 3 (Paketfilter, stateful)
  - Layer 7 (deep inspection). Sog. Application-Level Firewalls, z.B. WAF (Web Application Firewall).  
Problematik hier: SSL ist End-to-End verschlüsselt  
- "Intrusion Avoidance"
- schlecht konfigurierte Firewalls, oft schwierig zu debuggen

Intrusion Detection

- KI wird eingesetzt, um Anomalien zu erkennen. Zentrales Logging Voraussetzung.
2-factor authentication, Ausblick auf Layer 8
Unterscheidung Authenticaton / Authorization
- merke: Georg (authenticated) -> "is not authorized" (permission denied)

## Kryptographie

*Transport Layer Security (TLS)* ist das am Meisten verbreitete Crypto-Protokoll (xxx *over TLS*), z.B.:

- https: http over TLS
- smtps, imaps, ... usw

[https://de.wikipedia.org/wiki/Kryptographie](https://de.wikipedia.org/wiki/Kryptographie)

### Ziele

- Vertraulichkeit/Zugriffsschutz (kann von unbefugt nicht entschlüsselt werden)
- Integrität/Änderungsschutz (es kann bewiesen werden, dass Nachricht unverändert ist)
- Authentizität/Fälschungsschutz (es kann bewiesen werden, dass die Gegenstelle tatsächlich die ist, die sie vorgibt zu sein)
- Verbindlichkeit/Nichtabstreitbarkeit (es kann bewiesen werden, daß die Nachricht von niemand anders kommt)

### Vier Teilkomponenten der Verschlüsselung

1. asymetrischer Schlüsselaustausch (A und B machen sich einen geheimen Schlüssel über ein unsicheres Medium aus).
2. symmetrische Verschlüsselung für große Datenmengen (verwenden den unter Punkt 1. ausgehandelten Schlüssel).
3. Zertifikate zur Authentisierung der Gegenstelle
4. Hashfunktionen zur Sicherung der Nachrichten-Integrität

### Ciphersuite

Eine Ciphersuite ist eine Kombination aus allen 4 oben genannten Komponenten, diese wird beim sog. "TLS-Handshake" zwischen Browser und Server ausgemacht. `openssl ciphers` zum Auflisten möglicher Kombinationen.

[https://de.wikipedia.org/wiki/Cipher_Suite](https://de.wikipedia.org/wiki/Cipher_Suite)

- Schlüsselaustausch, z. B.: RSA, DH (Diffie-Helman Verfahren)
- Authentifizierung, bspw.: RSA, DSA (auch ECDSA)
- Verschlüsselung zB DES, AES
- Hashfunktionen (MD5, SHA)

### Allgemeines

Kerckhoffs Prinzip: Die Sicherheit eines Systems darf nicht von der Geheimhaltung der Algorithmen abhängen (Security by Obscurity), sondern nur von der Geheimhaltung eines Schlüssels. Stichwort: Reverse-Engeneering

Man In The Middle

- entweder "rein passiv" oder
- aktiv (ändert Pakete oder gibt sich als einer der 2 Partner aus)
- aktiv relevant bei DNS-Spoofing und Cache-Poisoning

Symmetrische Kryptographie (AES, DES): Es gibt **einen** Schlüssel, der zum Verschlüsseln **und** Entschlüsseln verwendet wird.  
Vorteil: Schnelle Algorithmen, Stromchiffren, dieser wird über ein asymmetrisches Verfahren ausgehandelt.

Asymmetrische Kryptographie (RSA, DH): Jeder Partner hat ein Schlüssel**paar**, einer öffentlich, einer privat.

- Vorteile
  - public/private Keys
  - passiver Angreifer wird den gemeinsamen Schlüssel nicht kennen, auch wenn er den ganzen Handshake mitbekommen hat.
- Nachteile  
  - hoher Rechenaufwand
  - nicht geeignet zur Verschlüsselung großer Datenmengen

Tools

- OpenSSL, kennt die allermeisten Algorithmen
- sha256sum, md5sum, ... Hashfunktionen über Files

### Zertifikate

Sind so etwas wie ein "digitaler Ausweis", enthalten einige digital signierte Informationen:

- issuer (Wer ist der Aussteller)
- subject (also "Betreff" des Zertifikates)
- Gültigkeitszeitraum
- erlaubte Verwendungszwecke
