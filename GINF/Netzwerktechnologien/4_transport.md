# Übertragungsschicht

Andere Begriffe dafür:
- Transport
- Transmission
- Übertragung

## Transmission Control

[TCP](https://de.wikipedia.org/wiki/Transmission_Control_Protocol) auf Wikipedia.  
"TCP" ist eine *Implementierung der Transportschicht*.  
Weiters: TCP-Pakete *sind* IP Pakete.

Diese "Schichte" sorgt für zweierlei Dinge:

1. Unversehrtheit der Übertragung: Die Daten kommen beim Empfänger unversehrt an (Prüfsummen) oder werden von diesem verworfen.

2. Der Empfänger quittiert den Erhalt jeden Paketes ("ACK": acknowledge), meistens eingebettet in das nächste Paket, das dieser zurücksendet.

## TCP genauer
- Verbindungs**aufbau**phase: `SYN` Paket
- **verbindung**sphase: "normale" Pakete, jeweils vom anderen mit `ACK` quittiert.
- Verbindungs**abbau**phase: `FIN`

## Unterricht:
- wireshark TCP herzeigen
