# accessibility-bookmarklet
## Pour qui

Pour ceux qui serraient ammenés à auditer l'accessibilité web en suivant la méthodologie https://github.com/DISIC/rgaa_methodologie, des css de tests sont fournis.
Cette bookmarklet vous permettra de naviguer parmi ces css très rapidement (sélecteur rapide en pied de page) (fig1).

### fig1
![Screenshot](https://github.com/jonasdd/accessibility-bookmarklet/blob/master/sel-capture.jpg)

## Générer la bookmarklet
Github ne me permet pas de générer directement le lien à copier dans vos favoris.
Vous devez donc suivre ces trois étapes :

0. Utilisez un générateur de bookmarklet pour générer le lien de favori ! Vous pouvez utiliser http://bookmarklets.org/maker/ 
0. Veuillez décocher : 
 0. URL-encode
 0. jQuery
0. Copier/coller le code ci-dessous dans le générateur

````javascript
// on liste les urls des stylesheet et on les mets dans un tableau
var url1 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-aide-saisie.css",
url2 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-focus.css",
url3 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-heading.css",
url4 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-indication-erreur-AA.css",
url5 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-indication-erreur.css",
url6 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-indication-obligatoire.css",
url7 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-jargon.css",
url8 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-label-IE.css",
url9 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-label.css",
url10 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-landmark-aria.css",
url11 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-list.css",
url12 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-target-new-window.css",
url13 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check_hidden_content.css",
url14 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check_presentation.css",
url15 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check_structure.css";

var styleSheetArray = [url1, url2, url3, url4, url5, url6, url7, url8, url9, url10, url11, url12, url13, url14, url15],
body = document.getElementsByTagName('body')[0],
select = document.createElement('SELECT');

document.body.appendChild(select);
select.setAttribute("id","monSelect");
select.setAttribute("onchange","loadCss(event);");
select.setAttribute("style","position:fixed;background:white;bottom:0;");
select1 = document.getElementById('monSelect');

// on ajoute autant d'option de css
styleSheetArray.forEach(function(element) {
    var filename = element.substring(element.lastIndexOf("/") + 1, element.lastIndexOf("."));
    var opt = document.createElement('option');
    opt.innerHTML = filename;
    select1.appendChild(opt);
});

var inlineScript = "https://cdn.rawgit.com/jonasdd/accessibility-bookmarklet/master/script-bookmarklet-rgaa-0.3.js";

var head = document.head
  , scriptLink = document.createElement('script')
  scriptLink.src = inlineScript
  head.appendChild(scriptLink)
```

Il ne vous reste ensuite qu'à glisser/déposer le lien dans vos favoris.

# Utilisation

Naviguer vers la page à auditer. Cliquer sur votre favori. C'est tout !

# License

The MIT Licence (MIT)
