import{o as j,n as H,b as o,s as W,_ as F,M as G,p as b,q as V,j as a,t as K,v as P,w as U,a4 as q,K as C,d as J,c as E,e as _}from"./index-MvMXq-n0.js";import{P as z}from"./PriceSidebar-aPHY00Eq.js";import{S as Y}from"./Stepper-DLGzd-_Q.js";import{s as Z}from"./cartAction-DfolnGH-.js";import{M as Q}from"./MetaData-9cgP_bKj.js";import{L as w,T as h,I as $,S as k}from"./TextField-CrKy420b.js";import{F as R}from"./FormControl-qVIzL6n1.js";import{B as X}from"./ButtonBase-C1Kn2UJM.js";import{u as D}from"./useSelector-SRzZOS-t.js";import"./createSvgIcon-SQw11Wbz.js";import"./createSvgIcon-C4GUxbwI.js";import"./useIsFocusVisible-GM2u4gWw.js";import"./index-ChNJcHXo.js";const L=j("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),O=j("MuiListItemIcon",["root","alignItemsFlexStart"]),A=j("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function ee(e){return H("MuiMenuItem",e)}const v=j("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),ae=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],te=(e,s)=>{const{ownerState:r}=e;return[s.root,r.dense&&s.dense,r.divider&&s.divider,!r.disableGutters&&s.gutters]},se=e=>{const{disabled:s,dense:r,divider:i,disableGutters:n,selected:u,classes:l}=e,d=U({root:["root",r&&"dense",s&&"disabled",!n&&"gutters",i&&"divider",u&&"selected"]},ee,l);return b({},l,d)},ne=K(X,{shouldForwardProp:e=>q(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:te})(({theme:e,ownerState:s})=>b({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!s.disableGutters&&{paddingLeft:16,paddingRight:16},s.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:C.alpha(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:C.alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${v.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:C.alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:C.alpha(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${v.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${L.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${L.inset}`]:{marginLeft:52},[`& .${A.root}`]:{marginTop:0,marginBottom:0},[`& .${A.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!s.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},s.dense&&b({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),T=o.forwardRef(function(s,r){const i=W({props:s,name:"MuiMenuItem"}),{autoFocus:n=!1,component:u="li",dense:l=!1,divider:p=!1,disableGutters:d=!1,focusVisibleClassName:m,role:S="menuitem",tabIndex:f,className:I}=i,x=F(i,ae),y=o.useContext(w),c=o.useMemo(()=>({dense:l||y.dense||!1,disableGutters:d}),[y.dense,l,d]),g=o.useRef(null);G(()=>{n&&g.current&&g.current.focus()},[n]);const N=b({},i,{dense:c.dense,divider:p,disableGutters:d}),t=se(i),B=V(g,r);let M;return i.disabled||(M=f!==void 0?f:-1),a.jsx(w.Provider,{value:c,children:a.jsx(ne,b({ref:B,role:S,tabIndex:M,component:u,focusVisibleClassName:P(t.focusVisible,m),className:P(t.root,I)},x,{ownerState:N,classes:t}))})}),oe=[{code:"AN",name:"Andaman and Nicobar Islands"},{code:"AP",name:"Andhra Pradesh"},{code:"AR",name:"Arunachal Pradesh"},{code:"AS",name:"Assam"},{code:"BR",name:"Bihar"},{code:"CG",name:"Chandigarh"},{code:"CH",name:"Chhattisgarh"},{code:"DH",name:"Dadra and Nagar Haveli"},{code:"DD",name:"Daman and Diu"},{code:"DL",name:"Delhi"},{code:"GA",name:"Goa"},{code:"GJ",name:"Gujarat"},{code:"HR",name:"Haryana"},{code:"HP",name:"Himachal Pradesh"},{code:"JK",name:"Jammu and Kashmir"},{code:"JH",name:"Jharkhand"},{code:"KA",name:"Karnataka"},{code:"KL",name:"Kerala"},{code:"LD",name:"Lakshadweep"},{code:"MP",name:"Madhya Pradesh"},{code:"MH",name:"Maharashtra"},{code:"MN",name:"Manipur"},{code:"ML",name:"Meghalaya"},{code:"MZ",name:"Mizoram"},{code:"NL",name:"Nagaland"},{code:"OR",name:"Odisha"},{code:"PY",name:"Puducherry"},{code:"PB",name:"Punjab"},{code:"RJ",name:"Rajasthan"},{code:"SK",name:"Sikkim"},{code:"TN",name:"Tamil Nadu"},{code:"TS",name:"Telangana"},{code:"TR",name:"Tripura"},{code:"UP",name:"Uttar Pradesh"},{code:"UK",name:"Uttarakhand"},{code:"WB",name:"West Bengal"}],xe=()=>{const e=J(),s=E(),{enqueueSnackbar:r}=_(),{cartItems:i}=D(t=>t.cart),{shippingInfo:n}=D(t=>t.cart),[u,l]=o.useState(n.address),[p,d]=o.useState(n.city),[m,S]=o.useState("IN"),[f,I]=o.useState(n.state),[x,y]=o.useState(n.pincode),[c,g]=o.useState(n.phoneNo),N=t=>{if(t.preventDefault(),c.length<10||c.length>10){r("Invalid Phone Number",{variant:"error"});return}e(Z({address:u,city:p,country:m,state:f,pincode:x,phoneNo:c})),s("/order/confirm")};return a.jsxs(a.Fragment,{children:[a.jsx(Q,{title:"Flipkart: Shipping Details"}),a.jsx("main",{className:"w-full mt-20",children:a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7 overflow-hidden",children:[a.jsx("div",{className:"flex-1",children:a.jsx(Y,{activeStep:1,children:a.jsx("div",{className:"w-full bg-white",children:a.jsxs("form",{onSubmit:N,autoComplete:"off",className:"flex flex-col justify-start gap-3 w-full sm:w-3/4 mx-1 sm:mx-8 my-4",children:[a.jsx(h,{value:u,onChange:t=>l(t.target.value),fullWidth:!0,label:"Address",variant:"outlined",required:!0}),a.jsxs("div",{className:"flex gap-6",children:[a.jsx(h,{value:x,onChange:t=>y(t.target.value),type:"number",label:"Pincode",fullWidth:!0,variant:"outlined",required:!0}),a.jsx(h,{value:c,onChange:t=>g(t.target.value),type:"number",label:"Phone No",fullWidth:!0,variant:"outlined",required:!0})]}),a.jsxs("div",{className:"flex gap-6",children:[a.jsx(h,{value:p,onChange:t=>d(t.target.value),label:"City",fullWidth:!0,variant:"outlined",required:!0}),a.jsx(h,{label:"Landmark (Optional)",fullWidth:!0,variant:"outlined"})]}),a.jsxs("div",{className:"flex gap-6",children:[a.jsxs(R,{fullWidth:!0,children:[a.jsx($,{id:"country-select",children:"Country"}),a.jsx(k,{labelId:"country-select",id:"country-select",defaultValue:m,disabled:!0,label:"Country",children:a.jsx(T,{value:"IN",children:"India"})})]}),a.jsxs(R,{fullWidth:!0,disabled:!m,children:[a.jsx($,{id:"state-select",children:"State"}),a.jsx(k,{labelId:"state-select",id:"state-select",value:f,label:"State",onChange:t=>I(t.target.value),required:!0,children:oe.map(t=>a.jsx(T,{value:t.code,children:t.name},t.code))})]})]}),a.jsx("button",{type:"submit",className:"bg-primary-orange w-full sm:w-1/3 my-2 py-3.5 text-sm font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none",children:"save and deliver here"})]})})})}),a.jsx(z,{cartItems:i})]})})]})};export{xe as default};
