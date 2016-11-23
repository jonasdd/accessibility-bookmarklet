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
    select = document.createElement('SELECT'),
    currentCss;

    function loadCss(event) {
      var selectedCss = event.target.value;
      var selectedArrPos = styleSheetArray.indexOf('https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/'+selectedCss+'.css');
      var url =  styleSheetArray[selectedArrPos];
      if (currentCss){
        element = document.getElementById('addedCss');
        element.parentNode.removeChild(element);
      }
      currentCss=selectedCss+".css";
      addCss(url);
    }
    function addCss(fileName) {
      var head = document.head, link = document.createElement('link');
      link.href = fileName;
      link.rel = 'stylesheet';
      link.setAttribute('id','addedCss');
      head.appendChild(link);
    }
