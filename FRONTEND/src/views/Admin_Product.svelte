<script>
  import { getProduct } from "../../controller/product.controller";
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
  async function getDataProducts() {
    res = await getProduct();
    data1 = res.response;
  }
  onMount(() => {
    getDataProducts();
  });

  let label_edit_product =[
    "ID",
    "Categoria",
    "Nombre",
    "Categoria",
    "Precio",
    "Cantidad",
    "Imagen",
    "Descripcion",
    "Estado"
  ]

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

{#if userCredentials}
<NavBar tablas={cat} />

<Table
  dataObj={data1}
  rows_name={filas}
  rows_data={obj_par}
  name_componented={"Admin_Product"}
  labels={label_edit_product}
/>
{/if}