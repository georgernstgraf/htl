# Layer 2 - Data-Link

# Netzwerktopologien

Wortherkunft aus dem Griechischen
- Topos, der Ort, der Raum
- Logos, das Wort, das Verständnis

## Bustopologie
- 10BaseT
- USB bis 2.0

## Ringtopologie
- Token Ring (historisch)

## Sterntopologie
- In heutigen LANs, jedes Endgerät mit Switches verbunden, diese haben wiederum Uplinks zu anderen Switches und Routern

## Mesh (Maschen) - Topologie
- Mesh - Funknetze
- Routingprotokolle (!!)
- Internet Backbone und Redundanz: Mehrere Routen (=Wege) führen zum Ziel. Router tauschen sich gegenseitig aus über Qualität, Preis und Verfügbarkeit ihrer Routen. Sie verwenden dazu sogenannte Routingprotokolle.

# LAN - Local Area Networks

## Ethernet - gängige Technologie für lokale Netzwerke
- Ethernet ist logisch gesehen eine Bustopologie, aber tatsächlich physisch eine Sterntopologie. Jeder PC hat ein ein Kabel zum Switch, dieser also ist die Mitte des Sternes.
-  historisch ist Ethernet die Technologie des 10BaseT Busses mit seinen Collision (Kollissions-)Problemen, was heute von Switches gelöst wird. **Nicht jeder hört mehr alles** auf diesem Pseudo-Bus, weil der Switch am Layer 2 (MAC-Adresse = Ethernetadresse = Hardwareadresse) die entsprechenden Switch-Ports zuordnen kann. (Siehe auch [Wikipedia Ethernet](https://de.wikipedia.org/wiki/Ethernet#Broadcast_und_Sicherheit))
- Ethernet Frames werden von der Netzwerkkarte ausgesendet und empfangen

# WIFI
- Da wir in der Funkwelt sind, darf immer nur eine\* reden, somit **halbduplex**.
- Auch hier gibt es Ethernet-Frames und MAC Adressen.
