# Shell
- Shell ist eine **Benutzerschnittstelle**, ein User Interface (UI).
  - im Gegensatz zu GUI (graphical user interface)
- Andere Bezeichnungen:
  - Terminal
    - physisch (serielle Leitung [RS232](https://de.wikipedia.org/wiki/RS-232) kaum noch in Verwendung), siehe Wikipedia: [VT100](https://de.wikipedia.org/wiki/VT100)
    - virtuell. Das Terminal ist *eine* Anwendung unter anderen, es ist keine eigene Hardware, sondern die Shell läuft in einem Fenster.
    - remote (putty bzw. ssh)
    - im Terminal gibt man shell-Befehle ein und liest deren Ausgaben. Weiters kann ein text-basierter Editor verwendet werden, um Dateien zu bearbeiten.
  - Command-Line (CLI: Command Line Interface)
  - Kommandofenster
- Shells Windows:
  - "cmd"
  - Powershell
- Shells Linux:
  - Bash (gründet auf der bourne-shell (sh), "Bourne Again SHell"), bei weitem die häufigste Shell, auch für Programmierung (*Shell-Scripting*)
  - csh, zsh, ksh und wohl viele andere
- shell kann man programmieren!
  - Windows: Kommandos in .bat Dateien
  - Linux: "shell-skript" (x-bit (executable) setzen reicht)

## Shell Kommandos
- Wichtigstes Kommando: "man"
- cat
- chmod
- chown
- cp
- date
- df
- echo
- fdisk
- file
- gpart
- grep
- gzip
- head
- hostname
- id
- ifconfig
- kill
- less
- ln
- ls
- md5sum
- mkdir
- mount
- mv
- ping
- ps
- pwd
- rm
- rmdir
- sha256, sha512
- shutdown
- sleep
- tail
- tar
- vi
- whoami

# Files
Ein File (dt: Datei) ist eine Abfolge von bytes.  
Ein File ist meistens auf einem Speichermedium persistiert.  
Ein File hat einen Namen.  
Ein File hat einen Dateipfad.  
Ein Ordner (engl: Directory) ist ein File.  
Ein Directory kann Files beinhalten.  
Files können unterschiedliche Formate haben.  
Jedes Fileformat ist eine jeweilige innere Struktur der Daten darin. Die Logik der Software "versteht" sozusagen diese Struktur.  
Man kann aus Files lesen (bekommt Bytes) und Bytes hineinschreiben.  
Dateiendungen (z.B. "docx" geben einen *Hinweis* auf das Dateiformat, dieser kann auch falsch sein, z.B. nach Umbenennung)  
Files können neu angelegt (touch), gelöscht (rm), verschoben und umbenannt (mv) werden.   
Files haben **Metadaten**:
- Wem gehört es?
- Wer darf was damit tun?
- wann angelegt / geändert / (zuletzt gelesen)?

"alles ist ein File" (wichtiges Konzept!)  
Typen von Files:
- regular
  - eine Textdatei kann in einem Terminal mit einem Text-Editor bearbeitet werden.
- dir
- fifo
- socket (Netzwerkverbindungen sind Files!!)
- device node
    
# Benutzer
- erfordert ein Multiuser Betriebssystem
- Prozesse "gehören" immer einem bestimmten User, sie laufen mit dessen Berechtigungen
- Auch Files "gehören" immer einem bestimmten User
- Benutzer anlegen / löschen .. 
- Gruppenzughörigkeit bestimmt ebenfalls über Berechtigungen
- Superuser (root) darf alles, *kann* aber nicht alles 
