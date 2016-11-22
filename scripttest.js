// on liste les urls des stylesheet et on les mets dans un tableau
    var url1 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-aide-saisie.css";
    var url2 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-focus.css";
    var url3 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-heading.css";
    
    var styleSheetArray = [url1, url2, url3];
    // on cree le select
    var body = document.getElementsByTagName('body')[0];
    var select = document.createElement('SELECT');
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
    function loadCss(event) {
      var selectedCss = event.target.value;
      var selectedArrPos = styleSheetArray.indexOf('https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/'+selectedCss+'.css');
      var url =  styleSheetArray[selectedArrPos];
      // todo > sup dernier stylesheet
      addCss(url);
    }
    function addCss(fileName) {
      var head = document.head
        , link = document.createElement('link')
        //link.type = 'text/css'
        link.href = fileName
        link.rel = 'stylesheet'
        head.appendChild(link)
    }
