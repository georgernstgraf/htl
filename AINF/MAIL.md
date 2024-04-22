# Internet Email

## Email versenden

Das Protokoll heißt "SMTP" (Simple Mail Transfer Protocol) und wird u.A. durch
folgende RFC's definiert:

-   [RFC 788](https://www.rfc-editor.org/rfc/rfc788.html) (obsolet, aus 1981)
-   [RFC 821](https://www.rfc-editor.org/rfc/rfc821.html) (August 1982)
-   [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321) (Okt. 2008, dzt. aktuell)
-   [RFC 7504](https://www.rfc-editor.org/rfc/rfc7504) (enth. updates zu 5321,
    Juni 2015)
-   [RFC 8314](https://www.rfc-editor.org/rfc/rfc8314) (enth. updates zu 5321,
-   u.v.a.

Ein SMTP-Server ist ein "Postamt" - es wird Post dorthin geliefert. Mails können
auch von Postamt zu Postamt überstellt werden!

Ports aus `/etc/services`:

```code
smtp         25/tcp  mail
submissions  465/tcp ssmtp smtps urd # Submission over TLS [RFC8314]
```

Um das richtige Postamt für eine Domain zu finden, wird im DNS der sog. MX
(Mail-eXchanger) record verwendet. Beispiel:

```code
$ dig mx spengergasse.at | egrep -v '^(;|$)'
spengergasse.at.          267   IN      MX      1   mailgate.spengergasse.at.
mailgate.spengergasse.at. 267   IN      A           10.50.5.55

$ dig mx gmail.com | egrep -v '^(;|$|.*AAAA)'
gmail.com.              99      IN      MX      5 gmail-smtp-in.l.google.com.
gmail.com.              99      IN      MX      10 alt1.gmail-smtp-in.l.google.com.
gmail.com.              99      IN      MX      20 alt2.gmail-smtp-in.l.google.com.
gmail.com.              99      IN      MX      40 alt4.gmail-smtp-in.l.google.com.
gmail.com.              99      IN      MX      30 alt3.gmail-smtp-in.l.google.com.
alt4.gmail-smtp-in.l.google.com. 99 IN  A       74.125.200.27
alt2.gmail-smtp-in.l.google.com. 99 IN  A       142.251.9.26
alt3.gmail-smtp-in.l.google.com. 99 IN  A       142.250.150.27
alt1.gmail-smtp-in.l.google.com. 99 IN  A       142.250.153.26
```

Beachte die vorletzte Spalte (Priority!) Höchste Priorität: Kleinste Zahl. Wenn
ein Server nicht erreichbar ist, wird die Zustellung auf den mit geringerer
Priorität versucht.

Die Mail-Übertragung über Port 25 ist oft, aber nicht zwingend verschlüsselt.

## Email abholen / empfangen

In der Metapher des Postamts dienen `pop3` sowie `imap` zum Abholen der Mails
von einem Server. Pop3 ist kaum noch zu finden, denn es unterstützt serverseitig
keine "Mail-Ordner". Auch imap2 ohne SSL ist kaum mehr üblich, weil Klartext.

```code
$ egrep -i 'pop[^p]|imap' /etc/services | sort
imap2           143/tcp         imap            # Interim Mail Access P 2 and 4
imaps           993/tcp                         # IMAP over SSL
pop3            110/tcp         pop-3           # POP version 3
pop3s           995/tcp                         # POP-3 over SSL
```

Die Protokolle sind - natürlich - ebenso in Internet RFC's definiert.

-   [POP3](https://www.rfc-editor.org/rfc/rfc1939.html) (Mai '96, viele Updates)
-   [IMAP4rev1](https://www.rfc-editor.org/rfc/rfc2060) (Dez. 96, viele Updates
    und Extensions)
