import { writable } from 'svelte/store'
import {  Link, navigate } from "svelte-routing";
import Product from '../Model/Product.mjs';
import {user} from '../controller/login.controller';

async function getProductQuery(obj_data) {
    const products = new Product();
    let result = await products.getProduct(obj_data);
    return result;
}

// export function getProduct() {
//     let obj_data = unsubscribe;
//     return getProductQuery(obj_data);
// }

// const unsubscribe = user.subscribe(value => {
//     return value;
// });