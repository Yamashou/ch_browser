$(function() {
  //ユーザエージェント
  var userAgent = window.navigator.userAgent;
  //バージョン
  var appVersion = window.navigator.appVersion;
  //名前
  var appName = window.navigator.appName;
  //プラットフォームのタイプ
  var platform = window.navigator.platform;
  //コード名
  var appCodeName = window.navigator.appCodeName;
  var iframe = document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '1px';
  iframe.style.height = '1px';

  iframe.src = 'twitter://post?message=' + encodeURIComponent('ほげほげ #ふがふが');
  document.body.appendChild(iframe);

  iframe.onload = function() {
    window.location.href = 'market://details?id=com.twitter.android';
    iframe.parentNode.removeChild(iframe);
  };
  console.log(appVersion);
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
  if(userAgent.match(/IAB/)){
    $("#ch-id").text("OUTTTTTT");
  }
});
