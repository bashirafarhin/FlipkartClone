import{g as x,I as ae,b2 as ue,aD as M,j as z}from"./index-MvMXq-n0.js";var F={exports:{}},D,V;function ce(){if(V)return D;V=1;var c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return D=c,D}var q,X;function se(){if(X)return q;X=1;var c=ce();function e(){}function i(){}return i.resetWarningCache=e,q=function(){function t(u,a,r,s,f,p){if(p!==c){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}t.isRequired=t;function o(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:o,element:t,elementType:t,instanceOf:o,node:t,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:i,resetWarningCache:e};return n.PropTypes=n,n},q}var Q;function fe(){return Q||(Q=1,F.exports=se()()),F.exports}var le=fe();const m=x(le);var k,J;function pe(){if(J)return k;J=1;function c(a){return a&&typeof a=="object"&&"default"in a?a.default:a}var e=ae(),i=c(e);function t(a,r,s){return r in a?Object.defineProperty(a,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[r]=s,a}function o(a,r){a.prototype=Object.create(r.prototype),a.prototype.constructor=a,a.__proto__=r}var n=!!(typeof window<"u"&&window.document&&window.document.createElement);function u(a,r,s){if(typeof a!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof r!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof s<"u"&&typeof s!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function f(p){return p.displayName||p.name||"Component"}return function(T){if(typeof T!="function")throw new Error("Expected WrappedComponent to be a React component.");var d=[],h;function A(){h=a(d.map(function(g){return g.props})),y.canUseDOM?r(h):s&&(h=s(h))}var y=function(g){o(S,g);function S(){return g.apply(this,arguments)||this}S.peek=function(){return h},S.rewind=function(){if(S.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var j=h;return h=void 0,d=[],j};var O=S.prototype;return O.UNSAFE_componentWillMount=function(){d.push(this),A()},O.componentDidUpdate=function(){A()},O.componentWillUnmount=function(){var j=d.indexOf(this);d.splice(j,1),A()},O.render=function(){return i.createElement(T,this.props)},S}(e.PureComponent);return t(y,"displayName","SideEffect("+f(T)+")"),t(y,"canUseDOM",n),y}}return k=u,k}var Te=pe();const de=x(Te);var U,Z;function me(){if(Z)return U;Z=1;var c=typeof Element<"u",e=typeof Map=="function",i=typeof Set=="function",t=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(n,u){if(n===u)return!0;if(n&&u&&typeof n=="object"&&typeof u=="object"){if(n.constructor!==u.constructor)return!1;var a,r,s;if(Array.isArray(n)){if(a=n.length,a!=u.length)return!1;for(r=a;r--!==0;)if(!o(n[r],u[r]))return!1;return!0}var f;if(e&&n instanceof Map&&u instanceof Map){if(n.size!==u.size)return!1;for(f=n.entries();!(r=f.next()).done;)if(!u.has(r.value[0]))return!1;for(f=n.entries();!(r=f.next()).done;)if(!o(r.value[1],u.get(r.value[0])))return!1;return!0}if(i&&n instanceof Set&&u instanceof Set){if(n.size!==u.size)return!1;for(f=n.entries();!(r=f.next()).done;)if(!u.has(r.value[0]))return!1;return!0}if(t&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(u)){if(a=n.length,a!=u.length)return!1;for(r=a;r--!==0;)if(n[r]!==u[r])return!1;return!0}if(n.constructor===RegExp)return n.source===u.source&&n.flags===u.flags;if(n.valueOf!==Object.prototype.valueOf&&typeof n.valueOf=="function"&&typeof u.valueOf=="function")return n.valueOf()===u.valueOf();if(n.toString!==Object.prototype.toString&&typeof n.toString=="function"&&typeof u.toString=="function")return n.toString()===u.toString();if(s=Object.keys(n),a=s.length,a!==Object.keys(u).length)return!1;for(r=a;r--!==0;)if(!Object.prototype.hasOwnProperty.call(u,s[r]))return!1;if(c&&n instanceof Element)return!1;for(r=a;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&n.$$typeof)&&!o(n[s[r]],u[s[r]]))return!1;return!0}return n!==n&&u!==u}return U=function(u,a){try{return o(u,a)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},U}var ve=me();const he=x(ve);var ye=ue();const ge=x(ye);var R={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(l).map(function(c){return l[c]});var v={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Ee=Object.keys(H).reduce(function(c,e){return c[H[e]]=e,c},{}),Ae=[l.NOSCRIPT,l.SCRIPT,l.STYLE],C="data-react-helmet",Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},Ce=function(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")},be=function(){function c(e,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,i,t){return i&&c(e.prototype,i),t&&c(e,t),e}}(),E=Object.assign||function(c){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(c[t]=i[t])}return c},Oe=function(c,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);c.prototype=Object.create(e&&e.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(c,e):c.__proto__=e)},K=function(c,e){var i={};for(var t in c)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(c,t)&&(i[t]=c[t]);return i},Pe=function(c,e){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:c},Y=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Re=function(e){var i=_(e,l.TITLE),t=_(e,N.TITLE_TEMPLATE);if(t&&i)return t.replace(/%s/g,function(){return Array.isArray(i)?i.join(""):i});var o=_(e,N.DEFAULT_TITLE);return i||o||void 0},we=function(e){return _(e,N.ON_CHANGE_CLIENT_STATE)||function(){}},B=function(e,i){return i.filter(function(t){return typeof t[e]<"u"}).map(function(t){return t[e]}).reduce(function(t,o){return E({},t,o)},{})},_e=function(e,i){return i.filter(function(t){return typeof t[l.BASE]<"u"}).map(function(t){return t[l.BASE]}).reverse().reduce(function(t,o){if(!t.length)for(var n=Object.keys(o),u=0;u<n.length;u++){var a=n[u],r=a.toLowerCase();if(e.indexOf(r)!==-1&&o[r])return t.concat(o)}return t},[])},I=function(e,i,t){var o={};return t.filter(function(n){return Array.isArray(n[e])?!0:(typeof n[e]<"u"&&Ne("Helmet: "+e+' should be of type "Array". Instead found type "'+Se(n[e])+'"'),!1)}).map(function(n){return n[e]}).reverse().reduce(function(n,u){var a={};u.filter(function(T){for(var d=void 0,h=Object.keys(T),A=0;A<h.length;A++){var y=h[A],g=y.toLowerCase();i.indexOf(g)!==-1&&!(d===v.REL&&T[d].toLowerCase()==="canonical")&&!(g===v.REL&&T[g].toLowerCase()==="stylesheet")&&(d=g),i.indexOf(y)!==-1&&(y===v.INNER_HTML||y===v.CSS_TEXT||y===v.ITEM_PROP)&&(d=y)}if(!d||!T[d])return!1;var S=T[d].toLowerCase();return o[d]||(o[d]={}),a[d]||(a[d]={}),o[d][S]?!1:(a[d][S]=!0,!0)}).reverse().forEach(function(T){return n.push(T)});for(var r=Object.keys(a),s=0;s<r.length;s++){var f=r[s],p=ge({},o[f],a[f]);o[f]=p}return n},[]).reverse()},_=function(e,i){for(var t=e.length-1;t>=0;t--){var o=e[t];if(o.hasOwnProperty(i))return o[i]}return null},Ie=function(e){return{baseTag:_e([v.HREF,v.TARGET],e),bodyAttributes:B(R.BODY,e),defer:_(e,N.DEFER),encode:_(e,N.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:B(R.HTML,e),linkTags:I(l.LINK,[v.REL,v.HREF],e),metaTags:I(l.META,[v.NAME,v.CHARSET,v.HTTPEQUIV,v.PROPERTY,v.ITEM_PROP],e),noscriptTags:I(l.NOSCRIPT,[v.INNER_HTML],e),onChangeClientState:we(e),scriptTags:I(l.SCRIPT,[v.SRC,v.INNER_HTML],e),styleTags:I(l.STYLE,[v.CSS_TEXT],e),title:Re(e),titleAttributes:B(R.TITLE,e)}},W=function(){var c=Date.now();return function(e){var i=Date.now();i-c>16?(c=i,e(i)):setTimeout(function(){W(e)},0)}}(),ee=function(e){return clearTimeout(e)},Le=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||W:global.requestAnimationFrame||W,Me=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:global.cancelAnimationFrame||ee,Ne=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},L=null,He=function(e){L&&Me(L),e.defer?L=Le(function(){te(e,function(){L=null})}):(te(e),L=null)},te=function(e,i){var t=e.baseTag,o=e.bodyAttributes,n=e.htmlAttributes,u=e.linkTags,a=e.metaTags,r=e.noscriptTags,s=e.onChangeClientState,f=e.scriptTags,p=e.styleTags,T=e.title,d=e.titleAttributes;G(l.BODY,o),G(l.HTML,n),xe(T,d);var h={baseTag:w(l.BASE,t),linkTags:w(l.LINK,u),metaTags:w(l.META,a),noscriptTags:w(l.NOSCRIPT,r),scriptTags:w(l.SCRIPT,f),styleTags:w(l.STYLE,p)},A={},y={};Object.keys(h).forEach(function(g){var S=h[g],O=S.newTags,P=S.oldTags;O.length&&(A[g]=O),P.length&&(y[g]=h[g].oldTags)}),i&&i(),s(e,A,y)},re=function(e){return Array.isArray(e)?e.join(""):e},xe=function(e,i){typeof e<"u"&&document.title!==e&&(document.title=re(e)),G(l.TITLE,i)},G=function(e,i){var t=document.getElementsByTagName(e)[0];if(t){for(var o=t.getAttribute(C),n=o?o.split(","):[],u=[].concat(n),a=Object.keys(i),r=0;r<a.length;r++){var s=a[r],f=i[s]||"";t.getAttribute(s)!==f&&t.setAttribute(s,f),n.indexOf(s)===-1&&n.push(s);var p=u.indexOf(s);p!==-1&&u.splice(p,1)}for(var T=u.length-1;T>=0;T--)t.removeAttribute(u[T]);n.length===u.length?t.removeAttribute(C):t.getAttribute(C)!==a.join(",")&&t.setAttribute(C,a.join(","))}},w=function(e,i){var t=document.head||document.querySelector(l.HEAD),o=t.querySelectorAll(e+"["+C+"]"),n=Array.prototype.slice.call(o),u=[],a=void 0;return i&&i.length&&i.forEach(function(r){var s=document.createElement(e);for(var f in r)if(r.hasOwnProperty(f))if(f===v.INNER_HTML)s.innerHTML=r.innerHTML;else if(f===v.CSS_TEXT)s.styleSheet?s.styleSheet.cssText=r.cssText:s.appendChild(document.createTextNode(r.cssText));else{var p=typeof r[f]>"u"?"":r[f];s.setAttribute(f,p)}s.setAttribute(C,"true"),n.some(function(T,d){return a=d,s.isEqualNode(T)})?n.splice(a,1):u.push(s)}),n.forEach(function(r){return r.parentNode.removeChild(r)}),u.forEach(function(r){return t.appendChild(r)}),{oldTags:n,newTags:u}},ne=function(e){return Object.keys(e).reduce(function(i,t){var o=typeof e[t]<"u"?t+'="'+e[t]+'"':""+t;return i?i+" "+o:o},"")},je=function(e,i,t,o){var n=ne(t),u=re(i);return n?"<"+e+" "+C+'="true" '+n+">"+Y(u,o)+"</"+e+">":"<"+e+" "+C+'="true">'+Y(u,o)+"</"+e+">"},Fe=function(e,i,t){return i.reduce(function(o,n){var u=Object.keys(n).filter(function(s){return!(s===v.INNER_HTML||s===v.CSS_TEXT)}).reduce(function(s,f){var p=typeof n[f]>"u"?f:f+'="'+Y(n[f],t)+'"';return s?s+" "+p:p},""),a=n.innerHTML||n.cssText||"",r=Ae.indexOf(e)===-1;return o+"<"+e+" "+C+'="true" '+u+(r?"/>":">"+a+"</"+e+">")},"")},oe=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,o){return t[H[o]||o]=e[o],t},i)},De=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,o){return t[Ee[o]||o]=e[o],t},i)},qe=function(e,i,t){var o,n=(o={key:i},o[C]=!0,o),u=oe(t,n);return[M.createElement(l.TITLE,u,i)]},ke=function(e,i){return i.map(function(t,o){var n,u=(n={key:o},n[C]=!0,n);return Object.keys(t).forEach(function(a){var r=H[a]||a;if(r===v.INNER_HTML||r===v.CSS_TEXT){var s=t.innerHTML||t.cssText;u.dangerouslySetInnerHTML={__html:s}}else u[r]=t[a]}),M.createElement(e,u)})},b=function(e,i,t){switch(e){case l.TITLE:return{toComponent:function(){return qe(e,i.title,i.titleAttributes)},toString:function(){return je(e,i.title,i.titleAttributes,t)}};case R.BODY:case R.HTML:return{toComponent:function(){return oe(i)},toString:function(){return ne(i)}};default:return{toComponent:function(){return ke(e,i)},toString:function(){return Fe(e,i,t)}}}},ie=function(e){var i=e.baseTag,t=e.bodyAttributes,o=e.encode,n=e.htmlAttributes,u=e.linkTags,a=e.metaTags,r=e.noscriptTags,s=e.scriptTags,f=e.styleTags,p=e.title,T=p===void 0?"":p,d=e.titleAttributes;return{base:b(l.BASE,i,o),bodyAttributes:b(R.BODY,t,o),htmlAttributes:b(R.HTML,n,o),link:b(l.LINK,u,o),meta:b(l.META,a,o),noscript:b(l.NOSCRIPT,r,o),script:b(l.SCRIPT,s,o),style:b(l.STYLE,f,o),title:b(l.TITLE,{title:T,titleAttributes:d},o)}},Ue=function(e){var i,t;return t=i=function(o){Oe(n,o);function n(){return Ce(this,n),Pe(this,o.apply(this,arguments))}return n.prototype.shouldComponentUpdate=function(a){return!he(this.props,a)},n.prototype.mapNestedChildrenToProps=function(a,r){if(!r)return null;switch(a.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:r};case l.STYLE:return{cssText:r}}throw new Error("<"+a.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(a){var r,s=a.child,f=a.arrayTypeChildren,p=a.newChildProps,T=a.nestedChildren;return E({},f,(r={},r[s.type]=[].concat(f[s.type]||[],[E({},p,this.mapNestedChildrenToProps(s,T))]),r))},n.prototype.mapObjectTypeChildren=function(a){var r,s,f=a.child,p=a.newProps,T=a.newChildProps,d=a.nestedChildren;switch(f.type){case l.TITLE:return E({},p,(r={},r[f.type]=d,r.titleAttributes=E({},T),r));case l.BODY:return E({},p,{bodyAttributes:E({},T)});case l.HTML:return E({},p,{htmlAttributes:E({},T)})}return E({},p,(s={},s[f.type]=E({},T),s))},n.prototype.mapArrayTypeChildrenToProps=function(a,r){var s=E({},r);return Object.keys(a).forEach(function(f){var p;s=E({},s,(p={},p[f]=a[f],p))}),s},n.prototype.warnOnInvalidChildren=function(a,r){return!0},n.prototype.mapChildrenToProps=function(a,r){var s=this,f={};return M.Children.forEach(a,function(p){if(!(!p||!p.props)){var T=p.props,d=T.children,h=K(T,["children"]),A=De(h);switch(s.warnOnInvalidChildren(p,d),p.type){case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:f=s.flattenArrayTypeChildren({child:p,arrayTypeChildren:f,newChildProps:A,nestedChildren:d});break;default:r=s.mapObjectTypeChildren({child:p,newProps:r,newChildProps:A,nestedChildren:d});break}}}),r=this.mapArrayTypeChildrenToProps(f,r),r},n.prototype.render=function(){var a=this.props,r=a.children,s=K(a,["children"]),f=E({},s);return r&&(f=this.mapChildrenToProps(r,f)),M.createElement(e,f)},be(n,null,[{key:"canUseDOM",set:function(a){e.canUseDOM=a}}]),n}(M.Component),i.propTypes={base:m.object,bodyAttributes:m.object,children:m.oneOfType([m.arrayOf(m.node),m.node]),defaultTitle:m.string,defer:m.bool,encodeSpecialCharacters:m.bool,htmlAttributes:m.object,link:m.arrayOf(m.object),meta:m.arrayOf(m.object),noscript:m.arrayOf(m.object),onChangeClientState:m.func,script:m.arrayOf(m.object),style:m.arrayOf(m.object),title:m.string,titleAttributes:m.object,titleTemplate:m.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=e.peek,i.rewind=function(){var o=e.rewind();return o||(o=ie({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},t},Be=function(){return null},Ye=de(Ie,He,ie)(Be),$=Ue(Ye);$.renderStatic=$.rewind;const Ge=({title:c})=>z.jsx($,{children:z.jsx("title",{children:c})});export{Ge as M,fe as r};
