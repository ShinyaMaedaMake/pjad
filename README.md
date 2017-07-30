# pjad
jqueryのようにDOMにアクセスすることができる、必要最小限のライブラリー

## 概要
DOMにアクセスする為のライブラリーです。
Jqueryの使い方がわかれば使えるようになっていて、メソッドチェーンによってつなげて書くことができます。
DOMオブジェクトへのアクセス方法は、
jqueryであれば$（”XXX”）というようなjqueryオブジェクトとなりますが、
こちらのライブラリーではjavascriptで取得した生のDOMオブジェクトへのアクセスとなります。

例）
var div = document.getElementById("xxx") => div : &lt;div id="xxx"&gt;xxx&lt;/div&gt;  
この取得したdivに対してメソッドをつなげていきます。
　
## 使い方
メソッドを使うためには、読み込むjavascriptファイルよりも先に読み込むように記述すること。

## メソッド
1. addClass
2. removeClass
3. hasClass
4. toggleClass
5. find
6. text
7. css
8. width
9. height
