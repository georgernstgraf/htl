# Netzwerksicherheit

[https://de.wikipedia.org/wiki/Netzwerksicherheit](https://de.wikipedia.org/wiki/Netzwerksicherheit)
Sicherheitsaspekte:

- Verfügbarkeit, Stabilität, Robustheit
- Einbruchssicherheit

## Verfügbarkeit

[https://de.wikipedia.org/wiki/Verfügbarkeit](https://de.wikipedia.org/wiki/Verf%C3%BCgbarkeit)
SLA [https://de.wikipedia.org/wiki/Service-Level-Agreement](https://de.wikipedia.org/wiki/Service-Level-Agreement)
24/7

- Redundanz
  - round robin, Bsp: google MX
  - ha-proxy (mehrere Backend-Server)
- Begriff des "single point of failure"  
- anycast (eine IP, viele Server)
- stabile Betriebssysteme

## Sicherheit vor Einbruch und Datendiebstahl

- Problematik: Hin und wieder knackt ein Mathematiker einen crypto-Algorithmus, daher:
- regelmäßiges Patchen aller beteiligten Software-Komponenten
- Inventory über Patch-Stände (eher junges Konzept, noch in den Kinderschuhen)
- Firewalls
  - Layer 3 (Paketfilter, stateful)
  - Layer 7 (deep inspection). Sog. Application-Level Firewalls, z.B. WAF (Web Application Firewall).  
  Problematik hier: SSL ist End-to-End verschlüsselt  
  "Intrusion Avoidance"
  - schlecht konfigurierte Firewalls, oft schwierig zu debuggen
- Cryptographie
  - TLS als verbreitetstes Crypto-Protokoll (xxx *over TLS*), z.B.:
    - https: http over TLS
    - smtps, imaps, ... usw
- Intrusion Detection
  - KI wird eingesetzt, um Anomalien zu erkennen. Zentrales Logging Voraussetzung.
- 2-factor authentication, Ausblick auf Layer 8
- Unterscheidung Authenticaton / Authorization
  - merke: Georg (authenticated) -> "is not authorized" (permission denied)

## Crypto

[https://de.wikipedia.org/wiki/Kryptographie](https://de.wikipedia.org/wiki/Kryptographie)

### Ziele

- Vertraulichkeit/Zugriffsschutz (kann von unbefugt nicht entschlüsselt werden)
- Integrität/Änderungsschutz (es kann bewiesen werden, dass Nachricht unverändert ist)
- Authentizität/Fälschungsschutz 
- Verbindlichkeit/Nichtabstreitbarkeit

### Ciphersuite

[https://de.wikipedia.org/wiki/Cipher_Suite](https://de.wikipedia.org/wiki/Cipher_Suite)

- Schlüsselaustausch, z. B.: RSA, DH (auch ADH, ECDH), PSK, SRP
- Authentifizierung, bspw.: RSA, DSA (auch ECDSA), PSK
- Verschlüsselung (keine, RC4, DES, 3DES, IDEA, AES, ChaCha20)
- Hashfunktion (MD5, SHA)

### Allgemeines

- Kerckhoffs Prinzip: Die Sicherheit eines Systems darf nicht von der Geheimhaltung der Algorithmen abhängen, sondern nur von der Geheimhaltung eines Schlüssels. (Security by Obscurity)
- Symmetrische (AES, DES): Es gibt einen Schlüssel, der zum Verschlüsseln **und** Entschlüsseln verwendet wird.
- Asymmetrische (RSA, DH): Jeder Partner hat ein Schlüssel**paar**, einer öffentlich, einer privat.
- Tool: OpenSSL








