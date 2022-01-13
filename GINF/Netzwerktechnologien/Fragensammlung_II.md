# Fragensammlung Netzwerktechnologien Teil 2

## Whois

Welche Informationen können mittels "whois" abgefragt werden?

## Organisationen

Welche Organsiation verwaltet die Vergabe von IP-Ranges (Subnets) in Europa?  
Ein Land beschließt, keine Sommerzeit mehr zu machen. Welche Organisation muß die Verwaltung dieses Landes
informieren?

## NTP

Wofür steht NTP?  
Was bedeutet "Stratum" im Zusammenhang mit NTP?  
Ist ein niedrieger oder ein hoher Stratum-Wert Anzeichen einer sehr guten Zeitquelle?  
Was ist eine Zeitquelle und welche kennen Sie?  
Welche Zeitgenauigkeiten ermöglicht NTP für Endgeräte üblicherweise? (Minuten, Sekunden, ms (Millisekunden), µs (Mikrosekunden) ns (Nanosekunden))  
Wie viele Millisekunden dauert eine Sekunde?  
Wie viele Millisekunden dauert eine Minute?  
Wie viele Mikrosekunden dauert eine Sekunde?  
Wie viele Nanosekunden dauert eine Millisekunde?  
Wie wird die Umstellung von Winterzeit auf Sommerzeit in NTP durchgeführt?  
Gibt es in der NTP-Zeit Sommerzeit, Winterzeit, und Schaltjahre?  
Gibt es in der NTP-Zeit *Sprünge*?  
Die NTP-Zeit ist ja im ganzen Internet überall die gleiche. Wodurch ist es trotzdem möglich, daß unsere Rechner und Handys die europäische Zeit haben,
obwohl sie ja mit NTP synchronisiert sind?  


## IP / UDP / TCP

Was versteht man unter einem Socket?  
Wie viele Sockets werden für eine Netzwerkverbindung benötigt?  
Was versteht man unter einem *socketpair*? Begründen Sie Ihre Antwort!
Was verstehen Sie unter einem *UDP Port*? Erläutern Sie!  
Was verstehen Sie unter einem *TCP Port*?  Erläutern Sie!  
Wie lautet die größtmögliche IP-Port-Nummer?  
Was kann man mit dem Programm *wireshark* machen?

## DNS

Was ist der Unterschied zwischen einem "autoritativen" und einem "rekursiven" DNS-Server?  
Beim Verbinden Ihres Handys mit einem WLAN kriegt es u.A. die IP-Adresse eines DNS-Servers. Ist dieser
*rekursiv* oder *autoritativ*?  
Was versteht man unter einem DNS-Root-Server?  
Ist ein DNS-Root-Server *rekursiv* oder *autoritativ*?  
Erklären Sie, warum man DNS als eine *hierarchische Datenbank* bezeichnet!  
Was verstehen Sie unter dem Begiff "Delegation" im Zusammenhang mit DNS?  

## Fragen zu VPN

- Nennen Sie eine typische Problemstellung, für welche VPN eine Lösung ist.
- Was wird in RFC 1918 festgelegt?

## Fragen zu NAT

- Wofür seht das Kürzel?
- Erklären Sie in einigen Sätzen die Funktionsweise von NAT
- Was versteht man unter "reverse NAT"? Erklären Sie in eigenen Worten!

## Crypto

- Wodurch unterscheidet sich symmetrische von asymmetrischer Kryptographie?
- Welches Problem löst das Diffie-Helman Verfahren?
- Ist das Diffie-Helman Verfahren der symmetrischen oder asymmetrischen Kryptographie zuzuordnen?
- Welche Informationen sind in Digitalen Zertifikaten enthalten?
- Welche besondere Eigenschaft hat ein Root-Zertifikat?
- Kann ein Zertifikat abgelaufen sein (also nicht mehr gültig)?
- Unter welchen Umständen ist ein nicht abgelaufenes Zertifikat ungültig?
- Was ist eine Certificate Chain?
- Was ist ein Hash-Algorithmus?
- Was versteht man unter einer CA?
- Welche Aufgaben hat eine CA?

