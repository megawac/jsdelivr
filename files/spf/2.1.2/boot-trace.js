/*
SPF 21 (v2.1.2)
(c) 2012-2014 Google, Inc.
License: MIT
*/
/**
 * https://github.com/google/tracing-framework
 * Copyright 2013 Google, Inc. All Rights Reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found at https://github.com/google/tracing-framework/blob/master/LICENSE.
 */
(function(){function aa(a){return a};function f(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}}function ba(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);document.dispatchEvent(c)}}function ca(){};function k(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function l(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function da(a,b){if(a.filter)return a.filter(b,void 0);var c=[];k(a,function(a,e,g){b.call(void 0,a,e,g)&&c.push(a)});return c}function m(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]};function ea(a,b){var c=b||document;return c.querySelectorAll?c.querySelectorAll(a):[]}function fa(a,b){var c=a||"",d=document,e=d.createElement("iframe");e.id=c;e.src='javascript:""';e.style.display="none";b&&(e.onload=f(b,null,e));d.body.appendChild(e);return e};function q(a,b){return s[a]=b}var s=window._spf_state||{};window._spf_state=s;function t(a,b){a&&b&&(a in u||(u[a]=[]),u[a].push(b))}function ga(a,b){a in u&&b&&l(u[a],function(a,d,e){return a==b?(e[d]=null,!1):!0})}function ha(a){a in u&&k(u[a],function(a,c,d){d[c]=null;a&&a()})}var u={};"ps-s"in s||q("ps-s",u);u=s["ps-s"];var ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};var v={};"config"in s||q("config",v);v=s.config;var ja=!!this.wtf&&2==this.wtf.trace.API_VERSION,ka=ja?this.wtf.trace.instrument:aa;function la(a){return a}var w=!window._spf_tracing_runtime_disabled&&ja?ka:la;function x(a,b,c){var d=y[a];return a&&b?(d||(d=y[a]=z()),a=ma(b,c||0),d.items.push(a)):d&&d.items.length||0}function A(a,b){var c=y[a];if(c){var d=!!c.b||!!c.a;0<c.c&&(b||!d)&&B(a,b)}}function na(a){(a=y[a])&&a.c--}function oa(a,b){var c=y[a];c&&(c.c++,A(a,b))}function pa(a){var b=y[a];b&&(qa(b),delete y[a])}function ra(a,b){var c=a||"",d;for(d in y)b!=d&&0==d.lastIndexOf(c,0)&&pa(d)}function sa(a){var b=parseInt(s.uid,10)||0;b++;return a["spf-key"]||(a["spf-key"]=""+q("uid",b))}
function B(a,b){var c=y[a];if(c&&(qa(c),0<c.c&&c.items.length)){var d=c.items[0];if(d){var e=f(function(a,b){b();a()},null,f(B,null,a,b));b?(c.items.shift(),e(d.e)):ta(c,d,e)}}}function ta(a,b,c){b.d?(c=f(c,null,ca),a.a=setTimeout(c,b.d),b.d=0):(a.items.shift(),c=f(c,null,b.e),(b=(b=v["advanced-task-scheduler"])&&b.addTask)?a.b=b(c):a.a=setTimeout(c,0))}function qa(a){if(a.b){var b=v["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.b);a.b=0}a.a&&(clearTimeout(a.a),a.a=0)}
function z(){return{items:[],b:0,a:0,c:1}}function ma(a,b){return{e:a,d:b}}var y={},x=w(x,"spf.tasks.add"),A=w(A,"spf.tasks.run"),na=w(na,"spf.tasks.suspend"),oa=w(oa,"spf.tasks.resume"),pa=w(pa,"spf.tasks.cancel"),ra=w(ra,"spf.tasks.cancelAllExcept"),sa=w(sa,"spf.tasks.key"),B=w(B,"spf.tasks.do_"),z=w(z,"spf.tasks.createQueue_"),ma=w(ma,"spf.tasks.createTask_");function ua(a){var b=document.createElement("a");b.href=a;b.href=b.href;return b.href.split("#")[0]};var va;function wa(a,b,c,d){var e=a==C;b=D(a,b);var g=c||"^"+b,h=F(a,g),n;c&&(n=G(a,c))&&b!=n&&(ba(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:c,url:n}),xa(a,c,n),t(h,f(ya,null,a,c,n)));e=F(a,b);if((e=H[e])&&g!=e){I(a,e);var r=F(a,b);delete H[r];(r=F(a,e))&&h&&r in u&&(u[h]=(u[h]||[]).concat(u[r]),delete u[r])}r=F(a,b);H[r]=g;J(a,g,b);t(h,d);d=f(K,null,a);L(a,b)?(e&&g!=e&&(a=za(a,b))&&a.setAttribute("name",c||""),d()):(a=M(a,b,d,void 0,void 0,n))&&c&&a.setAttribute("name",c)}
function Aa(a,b){var c=G(a,b);xa(a,b,c);ya(a,b,c)}function xa(a,b,c){I(a,b);c&&(c=F(a,c),delete H[c]);a=F(a,b);delete u[a]}function ya(a,b,c){var d=a==C;c&&(ba(d?"spfjsunload":"spfcssunload",{name:b,url:c}),N(a,c))}function K(a){var b=F(a,""),c;for(c in u)0==c.indexOf(b)&&l(c.substring(b.length).split("|"),f(O,null,a))&&ha(c)}
function M(a,b,c,d,e,g){function h(){L(a,b,e)&&P(Q,a,b,e);n&&p&&p.parentNode&&r==document&&p.parentNode.removeChild(p);c&&setTimeout(c,0);return null}var n=a==C;b=D(a,b);P(Ba,a,b,e);var r=d||document,p=r.createElement(n?"script":"link");if(!b)return h();var E=R(b);p.className=F(a,E);"onload"in p?p.onerror=p.onload=h:p.onreadystatechange=function(){/^c|loade/.test(p.readyState)&&h()};E=r.getElementsByTagName("head")[0];n?(p.async=!0,p.src=b,E.insertBefore(p,E.firstChild)):(p.rel="stylesheet",p.href=
b,(d=g&&za(a,g,d))?E.insertBefore(p,d):E.appendChild(p));return p}function N(a,b,c){b=D(a,b);(c=za(a,b,c))&&c.parentNode&&c.parentNode.removeChild(c);Ca(a,b)}function za(a,b,c){b=R(b);a=F(a,b);return ea("."+a,c)[0]}
function Da(a){var b=a==C,c=[];k(ea(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href,e=D(a,e);if(!L(a,e)){P(Q,a,e);var g=R(e),g=F(a,g);if(d.classList)d.classList.add(g);else{var h;a:if(d.classList)h=d.classList.contains(g);else{h=d.classList?d.classList:d.className&&d.className.match(/\S+/g)||[];for(var n=0,r=h.length;n<r;n++)if(h[n]==g){h=!0;break a}h=!1}h||(d.className+=" "+g)}if(g=d.getAttribute("name"))h=F(a,e),H[h]=g,J(a,g,e);c.push(d)}});return c}
function Ea(a,b){if(b&&(b=D(a,b),!L(a,b))){var c=R(b),d=F(a,c),e=F(a,"prefetch"),c=document.getElementById(e);if(!c)c=fa(e,function(a){a.title=e;A(e,!0)});else if(c.contentWindow.document.getElementById(d))return;d=f(Fa,null,c,a,b,d,e);c.title?d():x(e,d)}}
function Fa(a,b,c,d,e){var g=b==Ga;a=a.contentWindow.document;b==C?(b=a.createElement("object"),Ha?a.createElement("script").src=c:b.data=c,b.id=d,a.body.appendChild(b)):g?(b=M(b,c,null,a,e),b.id=d):(b=a.createElement("img"),b.src=c,b.id=d,a.body.appendChild(b))}
function Ia(a,b,c){for(var d=a==C,e=G(a,c),g=b.replace(/\s/g,""),g=g||"",h=0,n=0,r=g.length;n<r;++n)h=31*h+g.charCodeAt(n),h%=4294967296;g="hash-"+h;J(a,c,g);!S(a,g)&&(b=Ja(a,b))&&(P(Q,a,g),b&&!d&&(d=R(g),d=F(a,d),b.className=d,b.setAttribute("name",c)),(e=e&&e[0])&&N(a,e))}
function Ja(a,b){b=ia(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body,d;a==C?(d=document.createElement("script"),d.text=b,c.appendChild(d),c.removeChild(d)):(d=document.createElement("style"),c.appendChild(d),"styleSheet"in d?d.styleSheet.cssText=b:d.appendChild(document.createTextNode(b)));return d}function Ka(a,b){q("rsrc-p-"+a,b)}
function D(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=s[c]||"";if("[object String]"==Object.prototype.toString.call(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);b=0>b.indexOf("."+a)?b+"."+a:b;b=ua(b)}else 0==d&&(b=ua(b))}return b}function F(a,b,c){return a+"-"+b+(c?"-"+c:"")}function R(a){return a?String(a).replace(/[^\w]/g,""):""}function P(a,b,c,d){b=F(b,c,d);T[b]=a}function L(a,b,c){a=F(a,b,c);return T[a]}
function Ca(a,b){var c=F(a,b);delete T[c]}function S(a,b){var c=L(a,b);return""==b||c==Q}function J(a,b,c){a=F(a,b);U[a]=c}function G(a,b){var c=F(a,b);return U[c]}function I(a,b){var c=F(a,b);delete U[c]}function O(a,b){var c=G(a,b);return void 0!=c&&S(a,c)}var T={},H={},U={},Ha=-1!=navigator.userAgent.indexOf(" Trident/"),Ba=1,Q=2,Ga="css",C="js";"rsrc-s"in s||q("rsrc-s",T);T=s["rsrc-s"];"rsrc-n"in s||q("rsrc-n",H);H=s["rsrc-n"];"rsrc-u"in s||q("rsrc-u",U);U=s["rsrc-u"];wa=w(wa,"spf.net.resource.load");
Aa=w(Aa,"spf.net.resource.unload");va=w(va,"spf.net.resource.unload_");K=w(K,"spf.net.resource.check");M=w(M,"spf.net.resource.create");N=w(N,"spf.net.resource.destroy");Da=w(Da,"spf.net.resource.discover");Ea=w(Ea,"spf.net.resource.prefetch");Fa=w(Fa,"spf.net.resource.prefetch_");Ia=w(Ia,"spf.net.resource.eval");Ja=w(Ja,"spf.net.resource.exec");Ka=w(Ka,"spf.net.resource.path");D=w(D,"spf.net.resource.canonicalize");F=w(F,"spf.net.resource.key");R=w(R,"spf.net.resource.label");P=w(P,"spf.net.resource.status.set");
L=w(L,"spf.net.resource.status.get");Ca=w(Ca,"spf.net.resource.status.clear");S=w(S,"spf.net.resource.status.loaded");J=w(J,"spf.net.resource.url.set");G=w(G,"spf.net.resource.url.get");I=w(I,"spf.net.resource.url.clear");O=w(O,"spf.net.resource.url.loaded");function V(a,b,c){wa(C,a,b,c)}function La(a){Aa(C,a)}function Ma(){Da(C)}function Na(a,b){M(C,a,b)}function Oa(a){a=m(a);k(a,function(a){Ea(C,a)})}function W(a,b,c){a=m(a);a=da(a,function(a){return!!a});var d=[];k(a,function(a){void 0==G(C,a)&&d.push(a)});var e=!d.length;if(b){var g=l(a,f(O,null,C));e&&g?b():(a=F(C,a.sort().join("|")),t(a,b))}c&&!e&&c(d)}function Pa(a){J(C,a,"");K(C)}function Qa(a,b){a=m(a);var c=F(C,a.sort().join("|"));ga(c,b)}
function X(a,b){a=m(a);k(a,function(a){if(a){var b=Y[a]||a,b=D(C,b),e=G(C,a);e&&b!=e&&Z(a)}});W(a,b,Ra)}function Ra(a){k(a,function(a){function c(){V(e,a)}var d=$[a],e=Y[a]||a;d?X(d,c):c()})}function Z(a){a=m(a);k(a,function(a){var c=[],d;for(d in $){var e=$[d],e=m(e);k(e,function(e){e==a&&c.push(d)})}k(c,function(a){Z(a)});La(a)})}function Sa(a,b){Ia(C,a,b)}function Ta(a,b){if(a){for(var c in a)$[c]=a[c];if(b)for(c in b)Y[c]=b[c]}}function Ua(a){Ka(C,a)}var $={};"js-d"in s||q("js-d",$);
var $=s["js-d"],Y={};"js-u"in s||q("js-u",Y);Y=s["js-u"];V=w(V,"spf.net.script.load");La=w(La,"spf.net.script.unload");Ma=w(Ma,"spf.net.script.discover");Na=w(Na,"spf.net.script.get");Oa=w(Oa,"spf.net.script.prefetch");W=w(W,"spf.net.script.ready");Pa=w(Pa,"spf.net.script.done");Qa=w(Qa,"spf.net.script.ignore");X=w(X,"spf.net.script.require");Ra=w(Ra,"spf.net.script.require_");Z=w(Z,"spf.net.script.unrequire");Sa=w(Sa,"spf.net.script.eval");Ta=w(Ta,"spf.net.script.declare");Ua=w(Ua,"spf.net.script.path");var Va={script:{load:V,get:Na,ready:W,done:Pa,require:X,declare:Ta,path:Ua}},Wa=this.spf=this.spf||{},Xa;for(Xa in Va)Wa[Xa]=Va[Xa];})();