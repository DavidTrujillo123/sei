<script>
    import { getUsers,deleteUser } from '../../controller/selectUser.controller';
    import { onMount } from "svelte";
    import NavBar from "./NavBar.svelte";   
    import Table from "./Table.svelte";    
  
    let res = []
    let data1 = [];

    async function getDataUsers() {
      res = await getUsers();
      data1 = res.response;
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
      "User ID",
      "Rol",
      "Name User",
      "SurName",
      "Estado",
      "Email",
      "Password", 
      "Acciones" 
    ];

    let obj_par = [
      'us_id',
      'rol_name',
      'us_name',
      'us_surname',
      'us_state',
      'us_email',
      'us_password'
    ]
  </script>
  <NavBar tablas={cat}/> 
  
  <Table dataObj={data1}  rows_name={filas} rows_data={obj_par} name_componented={'Admin_Users'} />
