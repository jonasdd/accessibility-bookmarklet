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
