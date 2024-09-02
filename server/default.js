import { products } from "./constants/data.js"
import Product from "./Database/model/product.js"
const defaultData = async() => {
    try {
        await Product.deleteMany({}); //just so that if we are saving our file multiple times our data will be saved multiple times
        await Product.insertMany(products);
    } catch(err) {
        console.log("Error while inserting default data");
    }
}

export default defaultData;