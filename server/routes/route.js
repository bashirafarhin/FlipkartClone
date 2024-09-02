import express from "express"
import { userSignUp,userLogin } from "../controller/userController.js"
import { getProducts,getProductById } from "../controller/productController.js"
import { paymentGateway, paytmCallback } from "../controller/paymentController.js"

const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogin);
router.get('/products',getProducts);
router.get('/product/:id',getProductById);
router.get('/payment',paymentGateway);
router.post('/callback',paytmCallback);

export default router;