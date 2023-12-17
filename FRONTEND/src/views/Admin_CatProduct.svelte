<script>
    import { getCatProduct } from "../../controller/cat_product.controller";
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
    async function getDataCatProducts() {
      res = await getCatProduct();
      data1 = res.response;
    }
    onMount(() => {
      getDataCatProducts();
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
      "Category Product",
      
    ];
  
    let obj_par = [
      "cat_id",
      "cat_name",
      
    ];
  </script>
  
  {#if isAutenticated}
  <NavBar tablas={cat} />
  
  <Table
    dataObj={data1}
    rows_name={filas}
    rows_data={obj_par}
    name_componented={"Admin_CatProduct"}
  />
  {/if}