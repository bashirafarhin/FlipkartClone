import{d as U,c as k,e as E,b as s,f as C,k as D,U as R,j as e,L as A,m as L}from"./index-BaBGcf6h.js";import{B as q}from"./BackdropLoader-_7FkJ6Ta.js";import{M as T}from"./MetaData-B8UWhWlB.js";import{T as v}from"./TextField-CxC_mZCU.js";import{R as G,F as j,a as b}from"./RadioGroup-Cdj9PnF5.js";import{A as M}from"./Avatar-DgPKXOGi.js";import{u as w}from"./useSelector-CPCrgtAa.js";import"./CircularProgress-BoRCXypQ.js";import"./createSvgIcon-Bd0Qo9-2.js";import"./FormControl-CUgvVXfl.js";import"./isMuiElement-ChrkIa7o.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C-88r63n.js";import"./List-B4PIK8yC.js";import"./Typography-CZMKvVwK.js";import"./useThemeProps-ftdQFjV8.js";import"./ButtonBase-weDzDRuO.js";import"./useIsFocusVisible-Ds9XIFIg.js";const re=()=>{const l=U(),d=k(),{enqueueSnackbar:i}=E(),{user:r}=w(a=>a.user),{error:o,isUpdated:c,loading:y}=w(a=>a.profile),[u,p]=s.useState(""),[x,f]=s.useState(""),[n,m]=s.useState(""),[N,h]=s.useState(""),[S,g]=s.useState(""),F=a=>{a.preventDefault();const t=new FormData;t.set("name",u),t.set("email",x),t.set("gender",n),t.set("avatar",N),l(L(t))},P=a=>{const t=new FileReader;h(""),t.onload=()=>{t.readyState===2&&(g(t.result),h(t.result))},t.readAsDataURL(a.target.files[0])};return s.useEffect(()=>{r&&(p(r.name),f(r.email),m(r.gender),g(r.avatar.url)),o&&(i(o,{variant:"error"}),l(C())),c&&(i("Profile Updated Successfully",{variant:"success"}),l(D()),d("/account"),l({type:R}))},[l,o,r,c,d,i]),e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Update Profile | Flipkart"}),y&&e.jsx(q,{}),e.jsx("main",{className:"w-full mt-12 sm:pt-20 sm:mt-0",children:e.jsxs("div",{className:"flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg",children:[e.jsxs("div",{className:"loginSidebar bg-primary-blue px-9 py-10 hidden sm:flex flex-col gap-4 w-2/5",children:[e.jsx("h1",{className:"font-medium text-white text-3xl",children:"Looks like you're new here!"}),e.jsx("p",{className:"text-gray-200 text-lg pr-2",children:"Sign up with your mobile number to get started"})]}),e.jsxs("div",{className:"flex-1 overflow-hidden",children:[e.jsx("h2",{className:"text-center text-2xl font-medium mt-6 text-gray-800",children:"Update Profile"}),e.jsx("form",{onSubmit:F,encType:"multipart/form-data",className:"p-5 sm:p-10",children:e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsxs("div",{className:"flex flex-col w-full justify-between sm:flex-col gap-3 items-center",children:[e.jsx(v,{fullWidth:!0,label:"Full Name",name:"name",value:u,onChange:a=>p(a.target.value),required:!0}),e.jsx(v,{fullWidth:!0,label:"Email",type:"email",name:"email",value:x,onChange:a=>f(a.target.value),required:!0})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("h2",{className:"text-md",children:"Your Gender :"}),e.jsx("div",{className:"flex items-center gap-6",id:"radioInput",children:e.jsxs(G,{row:!0,"aria-labelledby":"radio-buttons-group-label",name:"radio-buttons-group",children:[e.jsx(j,{name:"gender",value:"male",checked:n==="male",onChange:a=>m(a.target.value),control:e.jsx(b,{required:!0}),label:"Male"}),e.jsx(j,{name:"gender",value:"female",checked:n==="female",onChange:a=>m(a.target.value),control:e.jsx(b,{required:!0}),label:"Female"})]})})]}),e.jsxs("div",{className:"flex flex-col w-full justify-between sm:flex-row gap-3 items-center",children:[e.jsx(M,{alt:"Avatar Preview",src:S,sx:{width:56,height:56}}),e.jsxs("label",{className:"rounded font-medium bg-gray-400 text-center cursor-pointer text-white w-full py-2 px-2.5 shadow hover:shadow-lg",children:[e.jsx("input",{type:"file",name:"avatar",accept:"image/*",onChange:P,className:"hidden"}),"Choose File"]})]}),e.jsx("button",{type:"submit",className:"text-white py-3 w-full bg-primary-orange shadow rounded-sm font-medium hover:shadow-lg",children:"Update"}),e.jsx(A,{className:"hover:bg-gray-100 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium",to:"/account",children:"Cancel"})]})})]})]})})]})};export{re as default};
