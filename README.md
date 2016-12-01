# Accessibility-bookmarklet-rgaa
## Pour qui ?

Pour ceux qui seraient ammenés à auditer l'accessibilité web en suivant la méthodologie https://github.com/DISIC/rgaa_methodologie, cette bookmarklet permettra de naviguer rapidement parmi les css cités (et fourni dans le référentiel) grâce à un sélecteur rapide en pied de page - (fig1).

### fig1
![Screenshot](https://github.com/jonasdd/accessibility-bookmarklet/blob/master/sel-capture.jpg)

## Pourquoi ?

Accéder à une collection complète de feuilles de styles css en un clic.

**NOTE : dans l'absolu cette méthode d'injection de css dans une page web vous permettra de créer votre propre jeu de test. Il vous suffira de remplacer les urls du script (voir plus bas), par les vôtres.**

## Générer la bookmarklet
Github ne permet pas de générer directement le lien à copier dans vos favoris.
Vous devez donc suivre ces trois étapes :

0. Utilisez un générateur de bookmarklet pour générer le lien de favori. Utilisez par exemple : http://bookmarklets.org/maker/ 
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

// on cree le select
body = document.getElementsByTagName('body')[0],
select = document.createElement('SELECT');
document.body.appendChild(select);
select.setAttribute("id","monSelect");
select.setAttribute("onchange","loadCss(event);");
select.setAttribute("style","position:fixed;background:white;bottom:0;z-index: 1000000000000000000000000000000000;left:0");
select1 = document.getElementById('monSelect');

// on ajoute autant d'option que de feuille de style css
styleSheetArray.forEach(function(element) {
    var filename = element.substring(element.lastIndexOf("/") + 1, element.lastIndexOf("."));
    var opt = document.createElement('option');
    opt.innerHTML = filename;
    select1.appendChild(opt);
});

// on s'assure de la persistence du script gérant les évènements sur le select dans la page - voir lien
var inlineScript = "https://cdn.rawgit.com/jonasdd/accessibility-bookmarklet/master/script-bookmarklet-rgaa-0.3.js";

var head = document.head
  , scriptLink = document.createElement('script')
  scriptLink.src = inlineScript
  head.appendChild(scriptLink)
```

Il ne vous reste ensuite qu'à glisser/déposer le lien généré dans vos favoris.

# Utilisation

Naviguez vers la page à auditer. Cliquez sur votre favori. C'est tout !

# License

The MIT Licence (MIT)

# TODO

* Simplifier le script 
* Ajouter des scripts custom (ex: validation des images)

