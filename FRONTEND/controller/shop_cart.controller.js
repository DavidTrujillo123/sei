import Shop_Cart from '../Model/Shop_Cart.mjs';
import { getSession } from '../Model/Session.js';

let user_data = getSession('user');
const shopcart = new Shop_Cart();

export async function getShop_Cart() {
    let data = await shopcart.getShop_Cart(user_data.us_id);   
    return data;
}

export async function deleteShop_Cart(obj_data) {
    let data = await shopcart.deleteShop_Cart(obj_data);   
    return data;
}

export async function postShop_Cart(obj_data) {
    let data = await shopcart.postShop_Cart(obj_data);   
    return data;
}

export async function updateShop_Cart(obj_data) {
    let data = await shopcart.updateShop_Cart(obj_data);   
    return data;
}