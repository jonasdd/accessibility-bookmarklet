// on liste les urls des stylesheet et on les mets dans un tableau
var url1 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-aide-saisie.css";
var url2 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-focus.css";
var url3 = "https://cdn.rawgit.com/DISIC/rgaa_methodologie/master/Check-css/check-heading.css";

var styleSheetArray = [url1, url2, url3];
//select1 = document.getElementById('monSelect');

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
