import{c as o,j as e,b as l}from"./index-Br3W-CJe.js";import{C as n}from"./CartItem-sY8jjEip.js";import{P as p,a as c}from"./Policy-BFItNLKM.js";import{S as d}from"./Stepper-xkmnxUgL.js";import{M as x}from"./MetaData-LX1NH3aX.js";import{u as r}from"./useSelector-NGf-tHxd.js";import"./cartAction-DWY5Wbgu.js";import"./functions-wGAcNyKq.js";import"./Container-Co8KoB6z.js";import"./useThemeProps-CJ845tct.js";import"./List-g3jAjbbB.js";import"./isMuiElement-CJt_OsMT.js";import"./isHostComponent-DVu5iVWx.js";import"./ButtonBase-1GGwDSII.js";import"./useIsFocusVisible-CXnvPnDT.js";import"./Typography-D1NxXccX.js";import"./createSvgIcon-7u55HdvA.js";import"./createSvgIcon-CPjUyy1Y.js";const D=()=>{const m=o(),{cartItems:t}=r(s=>s.cart),{user:i}=r(s=>s.user);return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Flipkart: Order Confirmation"}),e.jsx("main",{className:"w-full mt-20",children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs(d,{activeStep:2,children:[e.jsx("div",{className:"w-full bg-white",children:t==null?void 0:t.map((s,a)=>l.createElement(n,{...s,inCart:!1,key:a}))}),e.jsxs("div",{className:"flex justify-between items-center mt-4 bg-white px-6 py-3 rounded-b-sm",children:[e.jsxs("p",{className:"text-sm",children:["Order confirmation email will be sent to ",e.jsx("span",{className:"font-medium",children:i.email})]}),e.jsx("button",{onClick:()=>{m("/process/payment")},className:"bg-primary-orange px-6 py-2 text-white font-medium rounded-sm shadow hover:shadow-lg uppercase",children:"continue"})]})]}),e.jsx(p,{})]}),e.jsx(c,{cartItems:t})]})})]})};export{D as default};
