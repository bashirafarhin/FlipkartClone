import express from "express"
import cors from "cors"
import env from "dotenv"
import bodyParser from "body-parser"
import "./Database/connect.js"
import defaultData from "./default.js"
import router from "./routes/route.js"
import { v4 as uuidv4 } from 'uuid';

const app=express();
const port = process.env.PORT || 3000 ;
const corsOption={
    origin: process.env.FRONTEND_URL
}


//middlewares
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    next();
});
app.use(cors(corsOption));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//calling function
defaultData();

//routes
app.use('/',router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuidv4();
paytmParams['CUSTOMER_ID'] = process.env.INDUSTRY_CUSTOMER_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = `${process.env.BACKEND_URL}/callback`;
paytmParams['EMAIL'] = 'farhinbashira@gmail.com';
paytmParams['MOBILE_NO'] = '8448899181';