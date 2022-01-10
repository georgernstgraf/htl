# Layers 5, 6 und 7 (Salami Pizza Away)

Grundsätzlich: Layer 5,6,7 sind in den meisten Fällen in einem Software-Produkt
(z.b. Webbrowser) zusammengebündelt implementiert, d.h. dieser erledigt alle Aufgaben, welche diese 3 Layer betreffen. Nun im Einzelnen:

## Layer 5 – Sitzungsschicht

Andere Benennungen:

- Session Layer
- Sitzungsschicht
- Kommunikationsschicht
- Kommunikationssteuerungsschicht

Kommunikation zwischen zwei Systemen wird organisiert. Eine Session ist z.b. eine Videokonferenz. z.B. die Synchronisation zwischen
Gesicht und Lippen ist ein "Service" des Layer 5. Man kann "wiedereinsteigen". Ebenso kann man Browser-Cookies oder Session-ID's als Elemente des Layer 5 betrachten.

### Weitere Services im Layer 5:

- Authentisierung (authentication): Feststellung, daß jemand tatsächlich derjenige ist, der behauptet wird, es zu sein.
- Authorisierung: Definition was ein Benutzer einer Applikation machen darf oder nicht. Beispiel in einem CMS unterschiedliche Rollen: Leser / Autor / Admin. Merkhilfe: You are not authorized. Also: DU darfst das nicht. Das, WER Du bist, wurde bereits festgestellt.
- L2TP (ist gleich VPN - Virtual private Network)
- RPC / XML-RPC Remote Procedure Call / json / 

## Layer 6 - Präsentation

Wie bekommt die Applikation (L7) die Daten zu sehen, wie werden sie präsentiert? Fragen des

- Zeichensatzes, aber auch der
- Verschlüsselung und
- Komprimierung

des Datenstroms gehören hier dazu.

## Layer 7 - Application

Hier endlich sind die Applikationen, die wir kennen, wie:

- ein Webbrowser und die Web-Andendungen auf Websites
- ein Mailprogramm
- remote-console Programme wie putty oder Windows Remote-Console

Jedoch auch Applikationen die unsichtbar sind ("headless").

- Mail Server untereinander
- Applikationsserver zu Datenbankserver
- Zeit-Synchronisationsdienste
- tausende anderer Services

### Themen zur Vertiefung, Auswahl

- Crypto (Zertifikate!!), Authorities, Überprüfung, ...
- VPN
- Mail-Routing
