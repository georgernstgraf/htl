# Layer 4 (UDP/TCP)
Andere Begriffe dafür:
- Transport
- Transmission
- Übertragung

## UDP (User Datagram Protocol)
- [Auf Wikipedia](https://de.wikipedia.org/wiki/User_Datagram_Protocol)
- Wichtig: Konzept von Ports
- *Keine gesicherte Datenübertragung*, aber dafür sehr simples Protokoll
- z.B. IP-Telefonie (Pakete können verloren gehen, dann schlechte Qualität)
- DNS Dienst: hauptsächlich UDP
- wenn die Antwort zu lange dauert: Retransmit in größer werdenden Abständen

## TCP (Transmission Control Protocol)
- [TCP](https://de.wikipedia.org/wiki/Transmission_Control_Protocol) auf Wikipedia.  
- "TCP" ist eine *Implementierung der Transportschicht*.  
- TCP-Pakete *sind* IP Pakete.
- Das Betriebssystem gibt der Anwendung bei TCP eine **Garantie**:
  - Unversehrtheit der Übertragung: Die Daten kommen beim Empfänger unversehrt an (Prüfsummen) oder werden von diesem verworfen.
  - Bei Fehlern in der Datenübertragung bekommt die Anwendung den Fehler mit! (socket Errors)
- notwendig und geeignet für Anwendungen, die verläßliche Datenübertragung brauchen
  - Fileservice
  - Email
  - http(s) Man denke an crypto, wo meistens ein fehlerhaftes Bit reicht, damit die Kommunikation fehlschlägt!
  - remote console, und viele viele andere

## TCP Verbindungsphasen
- Verbindungs**aufbau**phase: `SYN` Paket
- **verbindung**sphase: "normale" Pakete, jeweils vom anderen mit `ACK` quittiert.
- Verbindungs**abbau**phase: `FIN`

## Werkzeuge
- ping
- traceroute
- speedtest.net
- netstat
- wireshark
