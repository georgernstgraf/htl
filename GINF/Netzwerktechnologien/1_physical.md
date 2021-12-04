# Layer 1 - physical

# Begriffe der Signalübertragung

## Simplex (One-Way, Einbahn)
- Telefon klingelt
- Sirene schrillt
- Sonne scheint

## Halb Duplex
Simplex ist hier in beide Richtungen möglich.
- menschlicher Dialog. Einer redet während andere hört. Oder umgekehrt.
- Wlan. Wenn einer funkt, müssen alle anderen still sein.
- CB Funk

## Voll Duplex
- Senden und Empfangen gleichzeitig bei jeder Gegenstelle.
- modernes Cat5(6,7) Ethernet

## Multiplex
Mehrere Vollduplex Kanäle in einem Medium, z.B. einem Glasfaserbündel oder mehrere "Channels" bei NVME (M.2) SSDs.

# physical Layer (Layer 1)

## (Kupfer)draht
[`Thinnet`](https://de.wikipedia.org/wiki/10BASE2) - lesen  
`Ethernet`: [Twisted-Pair-Kabel](https://de.wikipedia.org/wiki/Twisted-Pair-Kabel#Kategorie_5)
- Standard späte '80er und '90er Jahre: 10BaseT (10Mb/s; halbduplex)
- dann 100BaseTX (RJ45/Cat5 - Twisted Pair; 100Mb/s, Vollduplex)
- Verbreitet heute: CAT6 (1Gb/s)
- schnellstes dzt: CAT8 (40Gb/s)
- max. Länge der Kabel ca. 150 Meter

## Lichtleiter
[wikipedia LWL](https://de.wikipedia.org/wiki/Lichtwellenleiter)
- max. Kabellänge je nach Art bis zu 120km!

## Radiowellen
[WLAN](https://de.wikipedia.org/wiki/Wireless_Local_Area_Network)  
Wichtig:
- Standards in der Norm `IEEE 802.11`
- Frequenzen: 2,4 und 5GHz Übertragungsmedien
- Reichweite: Nur wenig Duzend Meter

Richtfunk:
- 2-stelliger GHz Bereich
- Max. Distanz etwa 100km bei 1Gb/s
- Probleme: Dämpfung durch Nebel und Regen
- Vorteil: Keine Pufferung, daher näher an Echtzeit (Bsp: Börsen London - Frankfurt sind mit RF verbunden)

## Komponenten
- Hub (Billigst-Segment, quasi ein Ethernet-Repeater)
- Switch
- Router
- Wlan-'Modem'
