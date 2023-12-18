<script>
    import { getCatProduct } from "../../controller/cat_product.controller";
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
  
  {#if userCredentials && userCredentials.rol_id == 1}
  <NavBar tablas={cat} />
  
  <Table
    dataObj={data1}
    rows_name={filas}
    rows_data={obj_par}
    name_componented={"Admin_CatProduct"}
  />
  {/if}