import{b as n,n as T,o as $,s as j,_ as w,p as u,j as b,t as k,v as G,D as U,w as H}from"./index-Br3W-CJe.js";import{i as F}from"./isMuiElement-CJt_OsMT.js";function ee({props:e,states:r,muiFormControl:i}){return r.reduce((o,t)=>(o[t]=e[t],i&&typeof e[t]>"u"&&(o[t]=i[t]),o),{})}const _=n.createContext(void 0);function te(){return n.useContext(_)}function D(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function P(e,r=!1){return e&&(D(e.value)&&e.value!==""||r&&D(e.defaultValue)&&e.defaultValue!=="")}function J(e){return e.startAdornment}function K(e){return T("MuiFormControl",e)}$("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const O=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Q=e=>{const{classes:r,margin:i,fullWidth:o}=e,t={root:["root",i!=="none"&&`margin${U(i)}`,o&&"fullWidth"]};return H(t,K,r)},X=k("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},r)=>u({},r.root,r[`margin${U(e.margin)}`],e.fullWidth&&r.fullWidth)})(({ownerState:e})=>u({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),re=n.forwardRef(function(r,i){const o=j({props:r,name:"MuiFormControl"}),{children:t,className:z,color:d="primary",component:x="div",disabled:l=!1,error:f=!1,focused:v,fullWidth:c=!1,hiddenLabel:m=!1,margin:B="none",required:p=!1,size:g="medium",variant:C="outlined"}=o,L=w(o,O),y=u({},o,{color:d,component:x,disabled:l,error:f,fullWidth:c,hiddenLabel:m,margin:B,required:p,size:g,variant:C}),V=Q(y),[S,q]=n.useState(()=>{let a=!1;return t&&n.Children.forEach(t,s=>{if(!F(s,["Input","Select"]))return;const R=F(s,["Select"])?s.props.input:s;R&&J(R.props)&&(a=!0)}),a}),[W,A]=n.useState(()=>{let a=!1;return t&&n.Children.forEach(t,s=>{F(s,["Input","Select"])&&(P(s.props,!0)||P(s.props.inputProps,!0))&&(a=!0)}),a}),[E,h]=n.useState(!1);l&&E&&h(!1);const M=v!==void 0&&!l?v:E;let N;const I=n.useMemo(()=>({adornedStart:S,setAdornedStart:q,color:d,disabled:l,error:f,filled:W,focused:M,fullWidth:c,hiddenLabel:m,size:g,onBlur:()=>{h(!1)},onEmpty:()=>{A(!1)},onFilled:()=>{A(!0)},onFocus:()=>{h(!0)},registerEffect:N,required:p,variant:C}),[S,d,l,f,W,M,c,m,N,p,g,C]);return b.jsx(_.Provider,{value:I,children:b.jsx(X,u({as:x,ownerState:y,className:G(V.root,z),ref:i},L,{children:t}))})});export{re as F,_ as a,ee as f,P as i,te as u};
