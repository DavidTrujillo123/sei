<script>
    import { getShop_Cart } from "../../controller/shop_cart.controller";
    import { onMount } from "svelte";
    import NavBar from "../components/NavBar.svelte";
    import Table from "../components/Table.svelte";
    import { navigateLogin, redirectWithRol} from "../../controller/autenticated.controller"
    import { getSession } from "../../Model/Session.js"
    let  userCredentials = getSession('user');
    
    if (!userCredentials) {
      navigateLogin();
    }
    else if(userCredentials.rol_id != 1){
      redirectWithRol(userCredentials.rol_id)
    }
  
    let res = [];
    let data1 = [];
    async function getDataShop_Cart() {
      res = await getShop_Cart();
      data1 = res.response;
    }
    onMount(() => {
      getDataShop_Cart();
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
      "Price",
      "State",
      "Date",
      
    ];
  
    let obj_par = [
      "so_id",
      "so_price",
      "so_state",
      "so_date",
      
    ];
  </script>
  
  {#if userCredentials && userCredentials.rol_id == 1}
  <NavBar tablas={cat} />
  
  <Table
    dataObj={data1}
    rows_name={filas}
    rows_data={obj_par}
    name_componented={"Admin_ShopCart"}
  />
  {/if}