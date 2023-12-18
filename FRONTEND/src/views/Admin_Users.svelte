<script>
  import {
    getUsers,
    getUsersByState,
  } from "../../controller/selectUser.controller";
  import NavBar from "../components/NavBar.svelte";
  import Table from "../components/Table.svelte";
  import ComboBox from "../components/ComboBox.svelte";
  import { getSession } from "../../Model/Session.js"
  import {navigateLogin, redirectWithRol} from "../../controller/autenticated.controller"

  let  userCredentials = getSession('user');
  if (!userCredentials) {
    navigateLogin();
  }
  else if(userCredentials.rol_id != 1){
      redirectWithRol(userCredentials.rol_id)
    }

  let res = [];
  let data1 = [];

  let optionComboBox = "";

  function responseComboBox(event) {
    optionComboBox = event.detail;
    getData();
  }

  async function getDataUsers() {
    res = await getUsers();
    data1 = res.response;
  }

  async function getDataUsersByStatus() {
    res = await getUsersByState();
    data1 = res.response;
  }

  function getData() {
    if (optionComboBox == "Activo") {
      getDataUsersByStatus();
    } else {
      getDataUsers();
    }
  }

  let cat = [
    "Usuarios",
    "Producto",
    "Categorias Producto",
    "Rol",
    "Carrito de Compras",
    "Detalle Carrito de Compras",
  ];

  let filas = [
    "User ID",
    "Rol",
    "Name User",
    "SurName",
    "Estado",
    "Email",
    "Password",
    "Acciones",
  ];

  let obj_par = [
    "us_id",
    "rol_name",
    "us_name",
    "us_surname",
    "us_state",
    "us_email",
    "us_password",
  ];

  let comboItems = ["Activo", "Inactivo"];
</script>

{#if userCredentials && userCredentials.rol_id == 1}
<NavBar tablas={cat} />
<ComboBox {comboItems} on:option={responseComboBox} />
<Table
  dataObj={data1}
  rows_name={filas}
  rows_data={obj_par}
  name_componented={"Admin_Users"}
/>
{/if}
