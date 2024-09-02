import paytmchecksum from "../paytm/PaytmChecksum.js";
import { paytmParams, paytmMerchantKey } from "../index.js";
import formidable from "formidable";
import https from "https"

export const paymentGateway = async (req, res) => {
  try {
    const paytmCheckSum = await paytmchecksum.generateSignature(
      paytmParams,
      paytmMerchantKey
    );
    let params = {
      ...paytmParams,
      CHECKSUMHASH: paytmCheckSum,
    };
    res.status(200).json(params);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const paytmCallback = async (req, res) => {
  const form = new formidable.IncomingForm();
  const paytmCheckSum = req.body.CHECKSUMHASH;
  delete req.body.CHECKSUMHASH;

  var isVerifySignature = paytmchecksum.verifySignature( req.body, paytmMerchantKey, paytmCheckSum );
  if (isVerifySignature) {
    // console.log("Checksum Matched");
    let paytmParams = {};
    paytmParams['MID']=req.body.MID;
    paytmParams['ORDERID']=req.body.ORDERID;
    paytmCheckSum.generateSignature( paytmParams, paytmMerchantKey).then((checksum) => {
        paytmParams['CHECKSUMHASH']=checksum;
        const postData = JSON.stringify(paytmParams);
        const options = {
            hostname : "securegw-stage.paytm.in",
            port : 443,
            path : '/order/status',
            headers : {
                'Content-Type': 'application/json',
                'Content-Length': postData.length
            }
        }
        const res="";
        let postReq = https.request(options, (postRes) => {
            postRes.on('data',(chunk) => {
                res+=chunk;
            })
            postRes.on('end',() => {
                let result = JSON.parse(res);
                response.redirect(`${process.env.BACKEND_URL}/`)
            })
            postReq.write(postData);
            postReq.end();
        });
    })
  } else {
    console.log("Checksum Mismatched");
  }
};

export default paymentGateway;
