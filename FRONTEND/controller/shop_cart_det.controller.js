import Shop_Cart_Detail from '../Model/Shop_Cart_Detail.mjs';
import { getSession } from '../Model/Session.js';

let user_data = getSession('user');
const shopcartdet = new Shop_Cart_Detail();

export async function getShop_Cart_Detail() {
    let data = await shopcartdet.getShop_Cart_Detail(user_data.us_id);   
    return data;
}

export async function deleteShop_Cart_Detail(obj_data) {
    let data = await shopcartdet.deleteShop_Cart_Detail(obj_data);   
    return data;
}

export async function postShop_Cart_Detail(obj_data) {
    let data = await shopcartdet.postShop_Cart_Detail(obj_data);   
    return data;
}

export async function updateShop_Cart_Detail(obj_data) {
    let data = await shopcartdet.updateShop_Cart_Detail(obj_data);   
    return data;
}