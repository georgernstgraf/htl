# Layer 3 - Network

## neues Feature: Routing

Routing ermöglich Datenpaketen, daß sie das Ursprungsnetz verlassen und so auf die Reise gehen. Ein Ethernet-Frame **kann das nicht**. Auf dem Layer 3 beginnt IP (Internet Protocol) bedeutsam zu werden.

siehe [Video](https://youtu.be/qJsjizuuDB4). Nerdig, unterhaltsam, informativ

## Netzadresse, Netzmaske und die dazugehörigen Rechnereien:

## IP Subnetting

`ip route`

DHCP - dynamic host configuration protocol
DNS

## Werkzeuge
Windows: `Rechner` im Modus "Programmierer"  
Linux: `Calculator` ebenfalls "Programming Mode"  
[Online Quiz](https://www.2cram.com/online-subnet-quiz) (Prüfungsvorbereitung)  

## Basics

### IP Adresse
Eine IP Adresse wird aus **4 Oktetten** (Bytes zu 8bit) gebildet, zB. "137.208.16.32". Somit ist eine IP Adresse `4*8=32` Bit lang.

### Netzmaske
Eine Netzmaske ist **auch 32bit lang**. Besondere Eigenschaft: Links die Einsen, Rechts die Nullen.  
- Beispiel: `11111111.11111111.11110000.00000000`,  
- andere Schreibweise: `255.255.240.0` (11110000 = 240)  
- noch anders: `/20` (20 Einsen von links)

### Netz-Adresse
