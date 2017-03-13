1. userAgentによって、line,facebook,twitterのアプリ内ブラウザであるかどうかを判定をしてそうだった場合、警告文表示します
```
判定方法
line      : userAgent内に"Line"の文字列が含まれるかどうか
facebooke : userAgent内に"FBAV"の文字列が含まれるかどうか
twitter   : userAgent内に"Twitter"の文字列が含まれるかどうか
```
2. android,iosでどちらかの判定をして、出すテキストを変えています　（この条件分岐はなくてもandrodi,iosの分岐がなくなるが、動作はする）
```
判定方法
android   : userAgent内にandroidとmobileの文字列が含まれるかどうか
ios       : userAgent内にiphone,ipadのどちらかの文字列が含まれているかを判定
```
3. userAgentがandroidでありかつ、遷移元のurlが文字列"://t.co/"を含んでいるかどうかで判定を行います。
androidのtwitterのuserAgentは"Twitter"の文字列を含んでいないためandroidのtwitterだけ別で条件分岐させています
