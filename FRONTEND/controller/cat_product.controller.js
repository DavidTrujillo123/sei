import Cat_Product from '../Model/Cat_Product.mjs';
import { getSession } from '../Model/Session.js';

let user_data = getSession('user');
const catproducts = new Cat_Product ();

export async function getCatProduct() {
    let data = await catproducts.getCatProduct(user_data.us_id);   
    return data;
}

export async function deleteCatProduct(obj_data) {
    let data = await catproducts.deleteCatProduct(obj_data);   
    return data;
}

export async function postCatProduct(obj_data) {
    let data = await catproducts.postCatProduct(obj_data);   
    return data;
}

export async function updateCatProduct(obj_data) {
    let data = await catproducts.updateCatProduct(obj_data);   
    return data;
}