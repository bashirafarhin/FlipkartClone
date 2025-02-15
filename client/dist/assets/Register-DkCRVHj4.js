import{d as C,c as R,e as A,b as l,f as D,j as e,L as k,i as q}from"./index-BaBGcf6h.js";import{B as L}from"./BackdropLoader-_7FkJ6Ta.js";import{M as P}from"./MetaData-B8UWhWlB.js";import{F as E}from"./FormSidebar-BlljNVZL.js";import{T as o}from"./TextField-CxC_mZCU.js";import{R as M,F as g,a as w}from"./RadioGroup-Cdj9PnF5.js";import{A as U}from"./Avatar-DgPKXOGi.js";import{u as T}from"./useSelector-CPCrgtAa.js";import"./CircularProgress-BoRCXypQ.js";import"./createSvgIcon-Bd0Qo9-2.js";import"./FormControl-CUgvVXfl.js";import"./isMuiElement-ChrkIa7o.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C-88r63n.js";import"./List-B4PIK8yC.js";import"./Typography-CZMKvVwK.js";import"./useThemeProps-ftdQFjV8.js";import"./ButtonBase-weDzDRuO.js";import"./useIsFocusVisible-Ds9XIFIg.js";const se=()=>{const n=C(),d=R(),{enqueueSnackbar:t}=A(),{loading:v,isAuthenticated:u,error:m}=T(r=>r.user),[c,j]=l.useState({name:"",email:"",gender:"",password:"",cpassword:""}),{name:p,email:f,gender:b,password:i,cpassword:x}=c,[h,y]=l.useState(),[N,F]=l.useState("preview.png"),S=r=>{if(r.preventDefault(),i.length<8){t("Password length must be atleast 8 characters",{variant:"warning"});return}if(i!==x){t("Password Doesn't Match",{variant:"error"});return}if(!h){t("Select Avatar",{variant:"error"});return}const a=new FormData;a.set("name",p),a.set("email",f),a.set("gender",b),a.set("password",i),a.set("avatar",h),n(q(a))},s=r=>{if(r.target.name==="avatar"){const a=new FileReader;a.onload=()=>{a.readyState===2&&(F(a.result),y(a.result))},a.readAsDataURL(r.target.files[0])}else j({...c,[r.target.name]:r.target.value})};return l.useEffect(()=>{m&&(t(m,{variant:"error"}),n(D())),u&&d("/")},[n,m,u,d,t]),e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"Register | Flipkart"}),v?e.jsx(L,{}):e.jsx("main",{className:"w-full mt-12 sm:pt-20 sm:mt-0",children:e.jsxs("div",{className:"flex md:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg",children:[e.jsx(E,{title:"Looks like you're new here!",tag:"Sign up with your mobile number to get started",className:"sm:hidden"}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx("form",{onSubmit:S,encType:"multipart/form-data",className:"p-5 sm:p-10",children:e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsxs("div",{className:"flex flex-col w-full justify-between sm:flex-col gap-3 items-center",children:[e.jsx(o,{fullWidth:!0,id:"full-name",label:"Full Name",name:"name",value:p,onChange:s,required:!0}),e.jsx(o,{fullWidth:!0,id:"email",label:"Email",type:"email",name:"email",value:f,onChange:s,required:!0})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx("h2",{className:"text-md",children:"Your Gender :"}),e.jsx("div",{className:"flex items-center gap-6",id:"radioInput",children:e.jsxs(M,{row:!0,"aria-labelledby":"radio-buttons-group-label",name:"radio-buttons-group",children:[e.jsx(g,{name:"gender",value:"male",onChange:s,control:e.jsx(w,{required:!0}),label:"Male"}),e.jsx(g,{name:"gender",value:"female",onChange:s,control:e.jsx(w,{required:!0}),label:"Female"})]})})]}),e.jsxs("div",{className:"flex flex-col w-full justify-between sm:flex-row gap-3 items-center",children:[e.jsx(o,{id:"password",label:"Password",type:"password",name:"password",value:i,onChange:s,required:!0}),e.jsx(o,{id:"confirm-password",label:"Confirm Password",type:"password",name:"cpassword",value:x,onChange:s,required:!0})]}),e.jsxs("div",{className:"flex flex-col w-full justify-between sm:flex-row gap-3 items-center",children:[e.jsx(U,{alt:"Avatar Preview",src:N,sx:{width:56,height:56}}),e.jsxs("label",{className:"rounded font-medium bg-gray-400 text-center cursor-pointer text-white w-full py-2 px-2.5 shadow hover:shadow-lg",children:[e.jsx("input",{type:"file",name:"avatar",accept:"image/*",onChange:s,className:"hidden"}),"Choose File"]})]}),e.jsx("button",{type:"submit",className:"text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium",children:"Signup"}),e.jsx(k,{to:"/login",className:"hover:bg-gray-50 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium",children:"Existing User? Log in"})]})})})]})})]})};export{se as default};
