<script>
    import { getRol } from "../../controller/rol.controller";
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
    async function getDataRol() {
      res = await getRol();
      data1 = res.response;
    }
    onMount(() => {
      getDataRol();
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
      "Rol",
      
    ];
  
    let obj_par = [
      "rol_id",
      "rol_name",
      
    ];
  </script>
  
  {#if isAutenticated}
  <NavBar tablas={cat} />
  
  <Table
    dataObj={data1}
    rows_name={filas}
    rows_data={obj_par}
    name_componented={"Admin_Rol"}
  />
  {/if}