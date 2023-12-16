import Product from '../Model/Product.mjs';
import { getSession } from '../Model/Session.js';

let user_data = getSession('user');
const products = new Product();

export async function getProduct() {
    let data = await products.getProduct(user_data.user.us_id);   
    return data;
}

export async function deleteProduct(obj_data) {
    let data = await products.deleteProduct(obj_data);   
    return data;
}

export async function postProduct(obj_data) {
    let data = await products.postProduct(obj_data);   
    return data;
}

export async function updateProduct(obj_data) {
    let data = await products.updateProduct(obj_data);   
    return data;
}