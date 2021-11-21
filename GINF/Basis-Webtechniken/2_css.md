## CSS: style (Designelemente) (WEBStack, Teil II)

### Inline (Element-Attribute)
Fast jedes Container-Element versteht das `<style="...">` Attribut, von `<body>` abwärts.  
Beispiel:  `<section style="background: aqua">Blindtext</section>`

Hier wird halt Inhalt und Gestaltung vermischt im html-Dokument und es wird unübersichtlich. Außerdem, wenn bestimmte Gestaltungen immer wieder vorkommen sollten, muß es jedes Mal von Neuem ausgeschrieben werden. Nachträgliche Gestaltungsänderungen werden dann quälend mühsam.

Vorteil in Einzelfällen kann es sein, ein bestimmtes Element anders zu gestalten als alle anderen.

### style-Block zu Beginn des bodys
Was alles kann einen Style bekommen:
- Elemente wie `<title>, <p>, <h2>, <h3>, <section>, <article>, <div>, <span>` .. etc. Dann haben zB alle `<p>` Elemente die gleiche Gestaltung.
  - zB `p { color = "red"; }`
- CSS-Klassen, **"."**
  - zB `.myarticle { }`
- eine "id" **"#"**
  - `#foobar { .. }`
- Attribute, **"[]"**,
  - `[type='radio'] { margin: 20px; }`  

Weiters können Variablen gesetzt werden, sowohl innerhalb der Blöcke als auch im `root: { ..}` Context.

Media-Query zB `@media (max-width: 350px) { .. }`

### CSS Klassen
Im `<style>` - Block wird eine Klasse definiert

clockwise notation
absolute vs. relativ
Vererbung: von außen nach innen. Was weiter innen ist, gilt.
Was weiter unten im "style" definiert wird, zieht eher.
ID ist "very specific".
inline ist "most specific"
css-Variablen
das `root:` - Element kann Variablen haben  
d

![image](rgb.png)



# CSS: Selektoren
# JavaScript: Interaktivität
# CMS