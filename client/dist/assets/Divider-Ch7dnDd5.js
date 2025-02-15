import{a$ as w,b0 as A,b,aM as D,ab as N,_ as C,j as m,p as a,v as B,o as I,aB as L,aO as T,b1 as $,s as M,t as R,w as W,K as _}from"./index-BaBGcf6h.js";import{g as j}from"./dividerClasses-DndMHDY7.js";const E=["className","component"];function P(e={}){const{themeId:t,defaultTheme:i,defaultClassName:o="MuiBox-root",generateClassName:s}=e,l=w("div",{shouldForwardProp:r=>r!=="theme"&&r!=="sx"&&r!=="as"})(A);return b.forwardRef(function(c,p){const d=D(i),h=N(c),{className:g,component:v="div"}=h,f=C(h,E);return m.jsx(l,a({as:v,ref:p,className:B(g,s?s(o):o),theme:t&&d[t]||d},f))})}const V=I("MuiBox",["root"]),k=$(),K=P({themeId:T,defaultTheme:k,defaultClassName:V.root,generateClassName:L.generate}),y=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],S=e=>{const{absolute:t,children:i,classes:o,flexItem:s,light:l,orientation:n,textAlign:r,variant:c}=e;return W({root:["root",t&&"absolute",c,l&&"light",n==="vertical"&&"vertical",s&&"flexItem",i&&"withChildren",i&&n==="vertical"&&"withChildrenVertical",r==="right"&&n!=="vertical"&&"textAlignRight",r==="left"&&n!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",n==="vertical"&&"wrapperVertical"]},j,o)},U=R("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,i.orientation==="vertical"&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&i.orientation==="vertical"&&t.withChildrenVertical,i.textAlign==="right"&&i.orientation!=="vertical"&&t.textAlignRight,i.textAlign==="left"&&i.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>a({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:_.alpha(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>a({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>a({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}}),({theme:e,ownerState:t})=>a({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}}),({ownerState:e})=>a({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),z=R("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,i.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>a({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),F=b.forwardRef(function(t,i){const o=M({props:t,name:"MuiDivider"}),{absolute:s=!1,children:l,className:n,component:r=l?"div":"hr",flexItem:c=!1,light:p=!1,orientation:d="horizontal",role:h=r!=="hr"?"separator":void 0,textAlign:g="center",variant:v="fullWidth"}=o,f=C(o,y),x=a({},o,{absolute:s,component:r,flexItem:c,light:p,orientation:d,role:h,textAlign:g,variant:v}),u=S(x);return m.jsx(U,a({as:r,className:B(u.root,n),role:h,ref:i,ownerState:x},f,{children:l?m.jsx(z,{className:u.wrapper,ownerState:x,children:l}):null}))});F.muiSkipListHighlight=!0;export{K as B,F as D};
