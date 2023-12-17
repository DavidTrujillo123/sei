<script>
    import { getProduct } from '../../controller/product.controller';
    import { onMount } from "svelte";
    import { getSession } from '../../Model/Session.js';
    import NavBar from "./NavBar.svelte";   
    import Table from "./Table.svelte";    
    import { navigate } from 'svelte-routing';
  
    function irAVista2() {
      navigate('/User_Form');
    }
    const storedUser = getSession("user");
    let params = storedUser.user.us_id;
    let res = []
    let data1 = [];
    let e = null;
    async function getDataProducts() {
      res = await getProduct();
      data1 = res.response
    }
    onMount(() => {
      getDataProducts();
    });

    let  cat = [
        "Usuarios",
        "Producto",
        "Categorias Producto",
        "Rol",
        "Carrito de Compras",
        "Detalle Carrito de Compras",
    ];
    
    let  filas = [
      "Categoria ID",
      "Name Product",
      "Price",
      "Stock",
      "img",
      "Description", 
      "Acciones" 
    ];

    let obj_par = [
      'cat_id',
      'pro_name',
      'pro_price',
      'pro_stock',
      'pro_img',
      'pro_description'
    ]
  </script>
  <NavBar tablas={cat}/> 
  
  <Table dataObj={data1}  rows_name={filas} rows_data={obj_par} name_componented={'Admin_Product'} />