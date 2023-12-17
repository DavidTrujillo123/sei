<script>
    import { getProduct } from "../../controller/product.controller";
    import { onMount } from "svelte";
    import NavBar from "../components/NavBar.svelte";
    import Table from "../components/Table.svelte";
    import {
      isAutenticated,
      navigateLogin,
    } from "../../controller/autenticated.controller";
  
    let userCredentials = isAutenticated();
    if (!userCredentials) {
      navigateLogin();
    }
  
    let res = [];
    let data1 = [];
    async function getDataProducts() {
      res = await getProduct();
      data1 = res.response;
    }
    onMount(() => {
      getDataProducts();
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
      "Categoria ID",
      "Name Product",
      "Price",
      "Stock",
      "img",
      "Description",
      "Acciones",
    ];
  
    let obj_par = [
      "cat_id",
      "pro_name",
      "pro_price",
      "pro_stock",
      "pro_img",
      "pro_description",
    ];
  </script>
  
  {#if isAutenticated}
  <NavBar tablas={cat} />
  
  <Table
    dataObj={data1}
    rows_name={filas}
    rows_data={obj_par}
    name_componented={"Admin_Product"}
  />
  {/if}