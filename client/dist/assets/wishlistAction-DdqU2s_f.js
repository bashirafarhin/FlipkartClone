import{r as o,a as u,g as c,az as n,R as l,aA as p}from"./index-Br3W-CJe.js";import{r as d}from"./createSvgIcon-7u55HdvA.js";var s={},i;function m(){if(i)return s;i=1;var e=o();Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var r=e(d()),a=u();return s.default=(0,r.default)((0,a.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),s}var S=m();const v=c(S),f={headers:{"Content-Type":"application/json"},withCredentials:!0},I=e=>async(r,a)=>{const{data:t}=await l.get(`http://localhost:3000/api/v1/product/${e}`,f);r({type:p,payload:{product:t.product._id,name:t.product.name,price:t.product.price,cuttedPrice:t.product.cuttedPrice,image:t.product.images[0].baseurl,ratings:t.product.ratings,reviews:t.product.numOfReviews}}),localStorage.setItem("wishlistItems",JSON.stringify(a().wishlist.wishlistItems))},w=e=>async(r,a)=>{r({type:n,payload:e}),localStorage.setItem("wishlistItems",JSON.stringify(a().wishlist.wishlistItems))};export{v as S,I as a,w as r};
