<script>
    import { getUsers,deleteUser } from '../../controller/selectUser.controller';
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
    async function getDataUsers() {
      res = await getUsers();
      data1 = res.response
    }

    
    onMount(() => {
      getDataUsers();
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
      "Rol ID",
      "User ID",
      "Name User",
      "SurName",
      "Email",
      "Password", 
      "Acciones" 
    ];

    let obj_par = [
      'rol_id',
      'us_id',
      'us_name',
      'us_surname',
      'us_email',
      'us_password'
    ]
  </script>
  <NavBar tablas={cat}/> 
  
  <Table dataObj={data1}  rows_name={filas} rows_data={obj_par} name_componented={'Admin_Users'} />
