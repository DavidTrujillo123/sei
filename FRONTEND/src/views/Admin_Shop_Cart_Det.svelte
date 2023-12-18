<script>
    import { getShop_Cart_Detail } from "../../controller/shop_cart_det.controller";
    import { onMount } from "svelte";
    import NavBar from "../components/NavBar.svelte";
    import Table from "../components/Table.svelte";
    import {
     
      navigateLogin,
    } from "../../controller/autenticated.controller";
    import { getSession } from "../../Model/Session.js"

let  userCredentials = getSession('user');
    if (!userCredentials) {
      navigateLogin();
    }
  
    let res = [];
    let data1 = [];
    async function getDataShop_Cart_Detail() {
      res = await getShop_Cart_Detail();
      data1 = res.response;
    }
    onMount(() => {
      getDataShop_Cart_Detail();
    });
  
    let cat = [
      "Usuarios",
      "Producto",
      "Categorias Producto",
      "Rol",
      "Carrito de Compras",
      "Detalle Carrito de Compras",
    ];
  
    let filas = [
      "Rol ID",
      "Quantity",
      "Price",
      
      
    ];
  
    let obj_par = [
      "det_id",
      "det_quantity",
      "det_price",
      
      
    ];
  </script>
  
  {#if userCredentials}
  <NavBar tablas={cat} />
  
  <Table
    dataObj={data1}
    rows_name={filas}
    rows_data={obj_par}
    name_componented={"Admin_Shop_Cart_Det"}
  />
  {/if}