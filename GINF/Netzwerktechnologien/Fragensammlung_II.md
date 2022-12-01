# Fragensammlung Netzwerktechnologien Teil 2

## Whois

Welche Informationen können mittels "whois" abgefragt werden? (Daten zu einer Person einer Domain. Eigentümer, Standort,
Nameserver, Registrar. Ebenso IP Adressen)

Was bedeutet das Kürzel "AS" (Autonomes System)


## Organisationen

Welche Organsiation verwaltet die Vergabe von IP-Ranges (Subnets) in Europa? (RIPE)
Ein Land beschließt, keine Sommerzeit mehr zu machen. Welche Organisation muß die Verwaltung dieses Landes informieren? (IANA)

## NTP

Wofür steht NTP? (Network Time Protocol)
Wofür steht UTC? (Universal Time Coordinated)
Welche Ports werden von NTP verwendet (TCP + UDP 123)
Was bedeutet "Stratum" im Zusammenhang mit NTP? ("Abstand" .. wieviele Hops zur Atomuhr) 
Ist ein niedrieger oder ein hoher Stratum-Wert Anzeichen einer sehr guten Zeitquelle?  (niedrig)
Was ist eine Zeitquelle und welche kennen Sie? (GPS, Atomuhr) 
NTP ermöglicht eine Genauigkeit von welcher Größenordnung typischerweise für Endgeräte? (Minuten, Sekunden, ms (Millisekunden), µs (Mikrosekunden) ns (Nanosekunden))  (Millisekunden)
Wie viele Millisekunden dauert eine Sekunde? (1000) 
Wie viele Millisekunden dauert eine Minute? (60_000) 
Wie viele Mikrosekunden dauert eine Sekunde? (1_000_000) 
Wie viele Nanosekunden dauert eine Millisekunde? (1000)
Wie wird die Umstellung von Winterzeit auf Sommerzeit in NTP durchgeführt? (gar nicht!)
Gibt es in der NTP-Zeit Sommerzeit, Winterzeit, und Schaltjahre? (nein!) 
Gibt es in der NTP-Zeit *Sprünge*? Und falls ja, welche? (Ja, Schaltsekunde, alle 2-5 Jahre nötig) 
Die NTP-Zeit ist ja im ganzen Internet überall die gleiche. Wodurch ist es trotzdem möglich, daß unsere Rechner und Handys die europäische Zeit haben, obwohl sie ja mit NTP synchronisiert sind? (Zeitzonen Dateien)

## IP / UDP / TCP

Was versteht man unter einem Socket? Wofür braucht man das? (Kombination IP:Portnummer)
Wie viele Sockets werden für eine Netzwerkverbindung benötigt? (2) 
Was versteht man unter einem *socketpair*? Begründen Sie Ihre Antwort! (Wenn sich 2 Sockets verbinden)
Was verstehen Sie beim Thema IP unter einem *Port*? Erläutern Sie! (Adresse eines Dienstes) 
Wodurch unterscheiden sich UDP und TCP im Wesentlichen? (TCP ist sicherer und gibt Garantien, UDP ist schneller)
Wie lautet die größtmögliche IP-Port-Nummer? (256^2-1 oder 0xFFFF oder 65535) 
Was kann man mit dem Programm *wireshark* machen? (Netzwerktraffic analysieren)
Welche Organisation verwaltet Standard-Portnummern? (IANA) 
Was bedeutet das Kürzel IANA? (Internet Assigned Numbers Authority)

## DNS

Was ist der Unterschied zwischen einem "autoritativen" und einem "rekursiven" DNS-Server?  
Beim Verbinden Ihres Handys mit einem WLAN kriegt es u.A. die IP-Adresse eines DNS-Servers. Ist dieser *rekursiv* oder *autoritativ*?  
Was versteht man unter einem DNS-Root-Server?  
Ist ein DNS-Root-Server *rekursiv* oder *autoritativ*?  
Erklären Sie, warum man DNS als eine *hierarchische Datenbank* bezeichnet!  
Was verstehen Sie unter dem Begiff "Delegation" im Zusammenhang mit DNS?  
Auf welchem Standard-Port ist das DNS-Service erreichbar?  

## Fragen zu VPN

Nennen Sie eine typische Problemstellung, für welche VPN eine Lösung ist.
Was wird in RFC 1918 festgelegt?

## Fragen zu NAT

Wofür seht das Kürzel NAT?
Erklären Sie in einigen Sätzen die Funktionsweise von NAT
Was versteht man unter "reverse NAT"? Erklären Sie in eigenen Worten!

## Sicherheit

Was bedeutet Authentisierung? (System weiß, wer man ist, wer Du bist)
Was bedeutet Autorisierung? (System erlaubt bestimmte Aktionen)

Wodurch unterscheidet sich symmetrische von asymmetrischer Kryptographie?
Welches Problem löst das Diffie-Helman Verfahren?
Ist das Diffie-Helman Verfahren der symmetrischen oder asymmetrischen Kryptographie zuzuordnen?
Welche Informationen sind in Digitalen Zertifikaten enthalten?
Welche besondere Eigenschaft hat ein Root-Zertifikat?
Kann ein Zertifikat abgelaufen sein (also nicht mehr gültig)?
Unter welchen Umständen ist ein nicht abgelaufenes Zertifikat ungültig?
Was ist eine Certificate Chain?
Was ist ein Hash-Algorithmus?
Was versteht man unter einer CA?
Welche Aufgaben hat eine CA?
Woher kann man ein digitales Zertifikat bekommen?
Wie heißt das wichtigste Opensource-Werkzeug rund um das Thema Kryptographie?  
Könnte man theoretisch mit openssl eine Certificate Authority implementieren?  
Was versteht man unter dem Terminus "security by obscurity"?  
