import{r as p,a as f,g as h,j as e}from"./index-MvMXq-n0.js";import{r as j}from"./createSvgIcon-SQw11Wbz.js";import{u as c}from"./useSelector-SRzZOS-t.js";var n={},i;function N(){if(i)return n;i=1;var s=p();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var m=s(j()),t=f();return n.default=(0,m.default)((0,t.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),n}var g=N();const b=h(g),I=({activeStep:s,children:m})=>{const{user:t}=c(r=>r.user),{shippingInfo:a,cartItems:x}=c(r=>r.cart),o=`${a.address}, ${a.city}, ${a.state} - ${a.pincode}`,u=[{label:"LOGIN",desc:e.jsxs("p",{className:"font-medium text-sm",children:[t.name," ",e.jsx("span",{className:"text-sm font-normal",children:t.email})]})},{label:"DELIVERY ADDRESS",desc:e.jsxs("p",{className:"font-medium text-sm",children:[t.name," ",e.jsx("span",{className:"text-sm font-normal",children:o})]})},{label:"ORDER SUMMARY",desc:e.jsxs("p",{className:"font-medium text-sm",children:[x.length," Item"]})},{label:"PAYMENT OPTIONS",desc:e.jsx("p",{className:"font-medium text-sm",children:"Paytm"})}];return e.jsx("div",{className:"flex flex-col gap-4",children:u.map((r,l)=>e.jsx(e.Fragment,{children:s===l?e.jsxs("div",{className:"flex flex-col shadow rounded-sm",children:[e.jsxs("div",{className:"flex items-center rounded-t-sm bg-primary-blue px-6 py-2 gap-4",children:[e.jsx("span",{className:"h-5 w-5 flex items-center justify-center text-xs font-medium bg-white rounded-sm text-primary-blue",children:l+1}),e.jsx("h2",{className:"font-medium text-white",children:r.label})]}),m]},l):e.jsx(e.Fragment,{children:s>l?e.jsx(d,{isDesc:!0,...r,index:l}):e.jsx(d,{isDesc:!1,...r,index:l})})}))})},d=({isDesc:s,label:m,desc:t,index:a})=>e.jsxs("div",{className:"flex bg-white shadow px-4 py-3 pb-4 rounded-sm",children:[e.jsx("span",{className:"mt-2 ml-2 mr-4 h-5 w-5 flex items-center justify-center text-xs font-medium bg-gray-100 rounded-sm text-primary-blue",children:a+1}),e.jsxs("div",{className:"flex flex-col mt-1 gap-0.5",children:[e.jsxs("h2",{className:"font-medium text-gray-500 flex items-center gap-2",children:[m,s&&e.jsx("span",{className:"text-primary-blue mb-1",children:e.jsx(b,{sx:{fontSize:"20px"}})})]}),s&&t]})]});export{I as S};
