import{r as d,a as h,g as f,d as u,j as e,L as g,b as j}from"./index-Br3W-CJe.js";import{M as v}from"./MetaData-LX1NH3aX.js";import{M as w}from"./MinCategory-Dq_xbLph.js";import{S as b}from"./Sidebar-DruwNDfo.js";import{g as N}from"./functions-wGAcNyKq.js";import{r as y}from"./createSvgIcon-7u55HdvA.js";import{S as D,r as S}from"./wishlistAction-DdqU2s_f.js";import{u as M}from"./useSelector-NGf-tHxd.js";import"./ExpandMore-DQS_Sl5R.js";import"./PowerSettingsNew-DECypulB.js";import"./createSvgIcon-CPjUyy1Y.js";import"./isMuiElement-CJt_OsMT.js";import"./useIsFocusVisible-CXnvPnDT.js";var r={},n;function q(){if(n)return r;n=1;var a=d();Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=a(y()),t=h();return r.default=(0,s.default)((0,t.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),r}var E=q();const k=f(E),z=a=>{const{product:s,name:t,price:i,cuttedPrice:l,image:m,ratings:c,reviews:o}=a,x=u(),p=()=>{x(S(s))};return e.jsxs("div",{className:"flex gap-4 border-b p-4 sm:pb-8 w-full group overflow-hidden",children:[e.jsx("div",{className:"w-1/6 h-28 flex-shrink-0",children:e.jsx("img",{loading:"lazy",draggable:"false",className:"h-full w-full object-contain",src:m,alt:t})}),e.jsxs("div",{className:"flex flex-col gap-5 w-full p-1",children:[e.jsxs("div",{className:"flex justify-between items-start sm:pr-5",children:[e.jsxs(g,{to:`/product/${s}`,className:"flex flex-col gap-0.5",children:[e.jsx("p",{className:"group-hover:text-primary-blue w-56 sm:w-full truncate",children:t.length>85?`${t.substring(0,85)}...`:t}),e.jsxs("span",{className:"text-sm text-gray-500 font-medium flex gap-2 items-center",children:[e.jsxs("span",{className:"text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5",children:[c," ",e.jsx(D,{sx:{fontSize:"14px"}})]}),e.jsxs("span",{children:["(",o.toLocaleString(),")"]})]})]}),e.jsx("button",{onClick:p,className:"text-gray-400 hover:text-red-500",children:e.jsx("span",{children:e.jsx(k,{})})})]}),e.jsxs("div",{className:"flex items-center gap-2 text-2xl font-medium",children:[e.jsxs("span",{children:["₹",i.toLocaleString()]}),e.jsxs("span",{className:"text-sm text-gray-500 line-through font-normal mt-1",children:["₹",l.toLocaleString()]}),e.jsxs("span",{className:"text-sm text-primary-green mt-1",children:[N(i,l),"% off"]})]})]})]})},V=()=>{const{wishlistItems:a}=M(s=>s.wishlist);return e.jsxs(e.Fragment,{children:[e.jsx(v,{title:"Wishlist | Flipkart"}),e.jsx(w,{}),e.jsx("main",{className:"w-full mt-12 sm:mt-0",children:e.jsxs("div",{className:"flex gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7",children:[e.jsx(b,{activeTab:"wishlist"}),e.jsx("div",{className:"flex-1 shadow bg-white",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("span",{className:"font-medium text-lg px-4 sm:px-8 py-4 border-b",children:["My Wishlist (",a.length,")"]}),a.length===0&&e.jsxs("div",{className:"flex items-center flex-col gap-2 m-6",children:[e.jsx("img",{loading:"lazy",draggable:"false",className:"object-contain",src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/mywishlist-empty_39f7a5.png",alt:"Empty Wishlist"}),e.jsx("span",{className:"text-lg font-medium mt-6",children:"Empty Wishlist"}),e.jsx("p",{children:"You have no items in your wishlist. Start adding!"})]}),a.map((s,t)=>j.createElement(z,{...s,key:t})).reverse()]})})]})})]})};export{V as default};
