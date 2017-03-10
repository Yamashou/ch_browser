$(function() {
  var userAgent = window.navigator.userAgent;
  var appVersion = window.navigator.appVersion;
  var appName = window.navigator.appName;
  var platform = window.navigator.platform;
  var appCodeName = window.navigator.appCodeName;
  console.log(appName);
  $("#box2").text(userAgent);
  $("#box3").text(appVersion);
  $("#box4").text(appName);
  $("#box5").text(platform);
  $("#box6").text(appCodeName);
  if(userAgent.match(/Line/)){
    $("#ch-id").text("LINE");
  }else
  if(userAgent.match(/FBAV/)){
    $("#ch-id").text("Facebook");
  }else
  if(userAgent.match(/Safari/)){
    $("#ch-id").text("Safari");
  }



  var ua = navigator.userAgent.toLowerCase();
var ver = navigator.appVersion.toLowerCase();

// IE(11以外)
var isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1);
// IE6
var isIE6 = isMSIE && (ver.indexOf('msie 6.') > -1);
// IE7
var isIE7 = isMSIE && (ver.indexOf('msie 7.') > -1);
// IE8
var isIE8 = isMSIE && (ver.indexOf('msie 8.') > -1);
// IE9
var isIE9 = isMSIE && (ver.indexOf('msie 9.') > -1);
// IE10
var isIE10 = isMSIE && (ver.indexOf('msie 10.') > -1);
// IE11
var isIE11 = (ua.indexOf('trident/7') > -1);
// IE
var isIE = isMSIE || isIE11;
// Edge
var isEdge = (ua.indexOf('edge') > -1);

// Google Chrome
var isChrome = (ua.indexOf('chrome') > -1) && (ua.indexOf('edge') == -1);
// Firefox
var isFirefox = (ua.indexOf('firefox') > -1);
// Safari
var isSafari = (ua.indexOf('safari') > -1) && (ua.indexOf('chrome') == -1);
// Opera
var isOpera = (ua.indexOf('opera') > -1);


// 使用例
if(isIE) {
    alert('IE');
}
if(isIE6) {
    alert('IE6');
}
if(isIE7) {
    alert('IE7');
}
if(isIE8) {
    alert('IE8');
}
if(isIE9) {
    alert('IE9');
}
if(isIE10) {
    alert('IE10');
}
if(isIE11) {
    alert('IE11');
}
if(isEdge) {
    alert('Edge');
}

if(isChrome) {
    alert('Google Chrome');
}
if(isFirefox) {
    alert('Firefox');
}
if(isSafari) {
    alert('Safari');
}
if(isOpera) {
    alert('Opera');
  }
});
