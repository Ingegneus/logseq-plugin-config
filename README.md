das ist mein setup für die plugins in logseq. die anweisungen sind nur für windows geschrieben, da ich das verwende und keine erfahrung mit den anderen OSes hab. du musst deinen `.logseq\` folder finden und dieses repo rein clonen.
der folder den du suchst ist bei
- Linux: `$HOME/.logseq`
- macOS: `$HOME/.logseq`
- Windows: `%USERPROFILE%\.logseq` (zB: `C:\Users\User\.logseq`)

nun öffnest du ein terminal und machst:  
`cd C:\Users\User\.logseq`  
danach  
`git clone https://github.com/Ingegneus/logseq-plugin-config.git`  

nun musst du den gesamten inhalt von `.\logseq-plugin-config` in `C:\Users\User\.logseq` verschieben. danach kannst du den ordner `.\logseq-plugin-config` löschen. 

damit die anki flashcards in anki richtig gerendert werden können (aufgrund der vielen KaTeX macros) musst du diesen code in `Browse > Notes > Manage Note Types > logseqModel > Cards > Front template` und dann ganz unten im code kopieren

```
<script>
MathJax.config.tex['macros'] = {
ftt: "{\\circ\\hspace{-.4em} - \\hspace{-.4em} - \\hspace{-.4em}\\bullet}",
ttf: "{\\bullet\\hspace{-.4em} - \\hspace{-.4em} - \\hspace{-.4em}\\circ}",
gdefred: "{\\definecolor{\\red}{rgb}{0.898, 0.282, 0.302}}",
gdefyellow: "{\\definecolor{\\yellow}{rgb}{0.898, 0.749, 0.204}}",
gdefgreen: "{\\definecolor{\\green}{rgb}{0.188, 0.643, 0.424}}",
gdefgray: "{\\definecolor{\\gray}{rgb}{0.439, 0.439, 0.439}}",
gdefblue: "{\\definecolor{\\blue}{rgb}{0, 0.569, 1}}",
gdefpurple: "{\\definecolor{\\purple}{rgb}{0.557, 0.306, 0.776}}",
gdefpink: "{\\definecolor{\\pink}{rgb}{0.839, 0.251, 0.624}}",
gdefc: "{\\gdefred \\gdefyellow \\gdefgreen \\gdefgray \\gdefblue \\gdefpurple \\gdefpink}",
bg: ["{\\gdefc \\hspace{-0.2em}\\colorbox{#1}{$\\displaystyle #2$} \\hspace{-0.2em}}",2],
opn: ["{\\operatorname*{#1}}",1],
oldvect: ["{\\stackrel{\\bm{\\rightharpoonup}}{#1}}",1],
vect: ["{\\overset\\rightharpoonup{#1}}",1],
dif: ["{\\frac{\\opn{d}}{\\opn{d}#1}}",1],
diff: ["{\\frac{\\opn{d}^2}{\\opn{d}#1^2}}",1],
pdif: ["{\\frac{\\partial}{\\partial #1}}",1],
pdiff: ["{\\frac{\\partial^2}{\\partial #1^2}}",1],
cc: ["{\\gdefc \\color{#1} \\cancel{\\color{white}{#2}} \\color{white}}",2]
};
if (typeof is_already_run == 'undefined') {
  is_already_run = true
  MathJax.startup.getComponents();
}
</script>
```
selbes auch für `Back Template`.  
wenn ein neues macro definiert wird muss es hier auch eingefügt werden. das mühsame ist, dass teilweise die KaTeX und MathJax unterschiedliches verhalten haben... daher müssen manchmal die macros angepasst werden

TODO nur die strikt notwendigen plugins drinnen lassen