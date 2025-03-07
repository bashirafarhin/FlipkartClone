import{b as a,aX as Ie,p as X,_ as ee,aK as W,aY as ue,v as E,j as N,o as me,s as be,aS as Ue,t as te,al as ne,n as _e,q as ce,O as H,w as ze}from"./index-Br3W-CJe.js";import{u as Oe}from"./useIsFocusVisible-CXnvPnDT.js";function Ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,s){var r=function(t){return s&&a.isValidElement(t)?s(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function Xe(e,s){e=e||{},s=s||{};function r(f){return f in s?s[f]:e[f]}var l=Object.create(null),n=[];for(var t in e)t in s?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in s){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<n.length;o++)c[n[o]]=r(n[o]);return c}function F(e,s,r){return r[s]!=null?r[s]:e.props[s]}function Ye(e,s){return oe(e.children,function(r){return a.cloneElement(r,{onExited:s.bind(null,r),in:!0,appear:F(r,"appear",e),enter:F(r,"enter",e),exit:F(r,"exit",e)})})}function Ae(e,s,r){var l=oe(e.children),n=Xe(s,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in s,u=t in l,p=s[t],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:F(o,"exit",e),enter:F(o,"enter",e)}):!u&&c&&!f?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:F(o,"exit",e),enter:F(o,"enter",e)}))}}),n}var We=Object.values||function(e){return Object.keys(e).map(function(s){return e[s]})},He={component:"div",childFactory:function(s){return s}},ie=function(e){Ie(s,e);function s(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Ke(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var r=s.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},s.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ye(n,c):Ae(n,o,c),firstRender:!1}},r.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ue.Provider,{value:u},p):W.createElement(ue.Provider,{value:u},W.createElement(t,c,p))},s}(W.Component);ie.propTypes={};ie.defaultProps=He;function qe(e){const{className:s,classes:r,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=E(s,r.ripple,r.rippleVisible,l&&r.ripplePulsate),T={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=E(r.child,f&&r.childLeaving,l&&r.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),N.jsx("span",{className:b,style:T,children:N.jsx("span",{className:h})})}const m=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Ge=["center","classes","className"];let q=e=>e,pe,de,fe,he;const Z=550,Je=80,Qe=ne(pe||(pe=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ze=ne(de||(de=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),et=ne(fe||(fe=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),tt=te("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),nt=te(qe,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,Qe,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,Ze,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,et,({theme:e})=>e.transitions.easing.easeInOut),ot=a.forwardRef(function(s,r){const l=be({props:s,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,Ge),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),T=Ue(),h=a.useRef(null),R=a.useRef(null),U=a.useCallback(d=>{const{pulsate:M,rippleX:x,rippleY:S,rippleSize:I,cb:z}=d;p(y=>[...y,N.jsx(nt,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:x,rippleY:S,rippleSize:I},f.current)]),f.current+=1,g.current=z},[t]),$=a.useCallback((d={},M={},x=()=>{})=>{const{pulsate:S=!1,center:I=n||M.pulsate,fakeElement:z=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const y=z?null:R.current,B=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,D,w;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)v=Math.round(B.width/2),D=Math.round(B.height/2);else{const{clientX:L,clientY:V}=d.touches&&d.touches.length>0?d.touches[0]:d;v=Math.round(L-B.left),D=Math.round(V-B.top)}if(I)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const L=Math.max(Math.abs((y?y.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((y?y.clientHeight:0)-D),D)*2+2;w=Math.sqrt(L**2+V**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{U({pulsate:S,rippleX:v,rippleY:D,rippleSize:w,cb:x})},T.start(Je,()=>{h.current&&(h.current(),h.current=null)})):U({pulsate:S,rippleX:v,rippleY:D,rippleSize:w,cb:x})},[n,U,T]),_=a.useCallback(()=>{$({},{pulsate:!0})},[$]),j=a.useCallback((d,M)=>{if(T.clear(),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,T.start(0,()=>{j(d,M)});return}h.current=null,p(x=>x.length>0?x.slice(1):x),g.current=M},[T]);return a.useImperativeHandle(r,()=>({pulsate:_,start:$,stop:j}),[_,$,j]),N.jsx(tt,X({className:E(m.root,t.root,o),ref:R},c,{children:N.jsx(ie,{component:null,exit:!0,children:u})}))});function it(e){return _e("MuiButtonBase",e)}const st=me("MuiButtonBase",["root","disabled","focusVisible"]),rt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],at=e=>{const{disabled:s,focusVisible:r,focusVisibleClassName:l,classes:n}=e,o=ze({root:["root",s&&"disabled",r&&"focusVisible"]},it,n);return r&&l&&(o.root+=` ${l}`),o},lt=te("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${st.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),dt=a.forwardRef(function(s,r){const l=be({props:s,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:T="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:$,onFocus:_,onFocusVisible:j,onKeyDown:d,onKeyUp:M,onMouseDown:x,onMouseLeave:S,onMouseUp:I,onTouchEnd:z,onTouchMove:y,onTouchStart:B,tabIndex:v=0,TouchRippleProps:D,touchRippleRef:w,type:L}=l,V=ee(l,rt),O=a.useRef(null),C=a.useRef(null),ge=ce(C,w),{isFocusVisibleRef:se,onFocus:Re,onBlur:Me,ref:xe}=Oe(),[k,Y]=a.useState(!1);p&&k&&Y(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[G,ye]=a.useState(!1);a.useEffect(()=>{ye(!0)},[]);const Ce=G&&!f&&!p;a.useEffect(()=>{k&&b&&!f&&G&&C.current.pulsate()},[f,b,k,G]);function P(i,ae,je=g){return H(le=>(ae&&ae(le),!je&&C.current&&C.current[i](le),!0))}const Ee=P("start",x),Te=P("stop",U),ve=P("stop",$),Ve=P("stop",I),Pe=P("stop",i=>{k&&i.preventDefault(),S&&S(i)}),Be=P("start",B),De=P("stop",z),we=P("stop",y),Se=P("stop",i=>{Me(i),se.current===!1&&Y(!1),h&&h(i)},!1),Le=H(i=>{O.current||(O.current=i.currentTarget),Re(i),se.current===!0&&(Y(!0),j&&j(i)),_&&_(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),ke=H(i=>{b&&!Q.current&&k&&C.current&&i.key===" "&&(Q.current=!0,C.current.stop(i,()=>{C.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),d&&d(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),Fe=H(i=>{b&&i.key===" "&&C.current&&k&&!i.defaultPrevented&&(Q.current=!1,C.current.stop(i,()=>{C.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let A=u;A==="button"&&(V.href||V.to)&&(A=T);const K={};A==="button"?(K.type=L===void 0?"button":L,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Ne=ce(r,xe,O),re=X({},l,{centerRipple:t,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:k}),$e=at(re);return N.jsxs(lt,X({as:A,className:E($e.root,c),ownerState:re,onBlur:Se,onClick:R,onContextMenu:Te,onFocus:Le,onKeyDown:ke,onKeyUp:Fe,onMouseDown:Ee,onMouseLeave:Pe,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:De,onTouchMove:we,onTouchStart:Be,ref:Ne,tabIndex:p?-1:v,type:L},K,V,{children:[o,Ce?N.jsx(ot,X({ref:ge,center:t},D)):null]}))});export{dt as B};
