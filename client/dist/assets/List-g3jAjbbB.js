import{b as d,n as x,o as L,s as f,_ as P,p as i,j as u,t as C,v,w as j}from"./index-Br3W-CJe.js";const M=d.createContext({});function R(s){return x("MuiList",s)}L("MuiList",["root","padding","dense","subheader"]);const U=["children","className","component","dense","disablePadding","subheader"],_=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return j({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},R,e)},w=C("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:s})=>i({listStyle:"none",margin:0,padding:0,position:"relative"},!s.disablePadding&&{paddingTop:8,paddingBottom:8},s.subheader&&{paddingTop:0})),N=d.forwardRef(function(e,t){const o=f({props:e,name:"MuiList"}),{children:a,className:r,component:l="ul",dense:n=!1,disablePadding:p=!1,subheader:g}=o,b=P(o,U),h=d.useMemo(()=>({dense:n}),[n]),c=i({},o,{component:l,dense:n,disablePadding:p}),m=_(c);return u.jsx(M.Provider,{value:h,children:u.jsxs(w,i({as:l,className:v(m.root,r),ref:t,ownerState:c},b,{children:[g,a]}))})});export{M as L,N as a};
