
(function(){
  "use strict";
  var WEP = window.Element.prototype;
  WEP.style = window.CSSStyleDeclaration.prototype;
  WEP.addClass = function(cl){
    let className = new String(cl);
    this.classList.add(className);
    return this;
  };
  WEP.removeClass = function(cl){
    let className = new String(cl);
    this.classList.remove(className);
    return this;
  };
  WEP.hasClass = function(cl){
    let clNum = this.classList.length;
    for(var i=0;i<clNum;i++){
      if(this.classList[i] === cl) return true;
    };
    return false;
  };
  WEP.toggleClass = function(cl){
    this.hasClass(cl) ? this.removeClass(cl) : this.addClass(cl);
  };
  WEP.find = function(str){
    return this.querySelectorAll(str);
  };
  WEP.text = function(txt){
    this.innerHTML = new String(txt);
    return this;
  };
  WEP.css = function(){
    let cssObj = cssStruct(this);
    if(arguments.length == 0) {
      return cssObj;
    };
    if(typeof arguments[0] === "string" && !arguments[1]){
      return cssObj[arguments[0]];
    }else{
      cssObj[arguments[0]] = arguments[1];
      this.style.cssText = cssObj2Str(cssObj);
      return this;
    };
    if(typeof arguments[0] === "object"){
      this.style.cssText += cssObj2Str(arguments[0]);
      return this;
    };
    function cssStruct(elem){
      let cssArr = elem.style.cssText.split(";");
      let cssObj = {};
      for(var i=0;i<cssArr.length;i++){
        let prop = cssArr[i].split(":");
        if(prop[0] != "") cssObj[prop[0]] = String(prop[1]).trim();
      };
      return cssObj;
    };
    function cssObj2Str(obj){
      return JSON.stringify(obj).replace(/^[{]|["]|[}]$/g,"").replace(/,/g,";")+";";
    };
  };
  WEP.width = function(){
    if(arguments.length){
      this.css("width", arguments[0] + "px");
      return this;
    };
    return this.clientWidth;
  };
  WEP.height = function(){
    if(arguments.length){
      this.css("height", arguments[0] + "px");
      return this;
    };
    return this.clientHeight;
  };
  console.log(WEP);
})();
