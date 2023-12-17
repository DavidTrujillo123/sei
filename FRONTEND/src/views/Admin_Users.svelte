<script>
    import { getUsers, getUsersByState } from '../../controller/selectUser.controller';
    import { onMount } from "svelte";
    import NavBar from "./NavBar.svelte";   
    import Table from "./Table.svelte"; 
    import ComboBox from "./ComboBox.svelte";

    let table = 0;
    const ejem = () => {
      console.log('Activo');    
    }

  const ejem2 = () => {
    console.log('Inactivo');
  }

    let res = []
    let data1 = [];


    async function getDataUsers() {
      res = await getUsers();
      data1 = res.response;
    }

    async function getDataUsersByStatus() {
      let res = await getUsersByState();
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

    let comboItems = [
      "Activo",
      "Inactivo"
    ]
  </script>
  <NavBar tablas={cat}/> 
  <ComboBox comboItems={comboItems} {ejem} {ejem2}/>
  <Table dataObj={data1}  rows_name={filas} rows_data={obj_par} name_componented={'Admin_Users'}/>

  