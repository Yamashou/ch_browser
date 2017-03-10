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
  }if(userAgent.match(/Twitter/)){
    $("#ch-id").text("OUTTTTTT");
  }
});
