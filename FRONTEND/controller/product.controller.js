import Product from '../Model/Product.mjs';
import { getSession } from '../Model/Session.js';

async function getProductQuery(obj_data) {
    const products = new Product();
    
    let result = await products.getProduct(obj_data);
    return result;
}

export async function getProduct() {
    let obj_data = getSession('user');
    
    let data = await getProductQuery(obj_data.user.us_id);
    return data
}