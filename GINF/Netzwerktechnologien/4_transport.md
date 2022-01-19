# Layer 4 (UDP/TCP)

Andere Begriffe dafür:

- Transport
- Transmission
- Übertragung

## UDP (User Datagram Protocol)

- [Auf Wikipedia](https://de.wikipedia.org/wiki/User_Datagram_Protocol)
- Wichtig: Konzept von Ports (s.u. bei Sockets)
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

## Der Begriff "Socket"

Auf Deutsch etwa "Steckdose". Siehe [https://de.wikipedia.org/wiki/Socket_(Software)](https://de.wikipedia.org/wiki/Socket_(Software)).  
IP Sockets gibt es als UDP-Sockets und TCP-Sockets.  
Ein Socket ist die Kombination (IP-Adresse:Port). Dadurch können mehrere Netzwerkverbindungen gleichzeitig bei nur einer IP Adresse realisiert werden.  
Der Port ist ein 16bit-Integer und kann somit die Werte 0-65535 annehmen.  
*programmiertechnisch* ist ein Socket ein Objekt, oder "handle", wie ein File-Handle, aus dem das Programm lesen und wohin es auch schreiben kann.  
Eine TCP (oder UDP) *Connection* (also Netzwerkverbindung) besteht aus je einem Socket am Server und einem Socket am Client, welche miteinander verbunden sind (engl. socket-pair).  
Ein Server hat für jeden bereitgestellten Dienst einen eigenen "listen Port". Man kann sich das wie eine Gegensprechanlage vorstellen mit mehreren Türen (Ports) an einer Adresse.  
Standard-Portnummern (zB 80:http 443:https 123:ntp 53:dns 443:https 25:smtp) sind der Datei `/etc/services` zu entnehmen.

## Werkzeuge

- ping
- traceroute
- speedtest.net
- netstat
- wireshark
