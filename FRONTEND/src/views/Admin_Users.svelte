<script>
  import {
    getUsers,
    getUsersByState,
  } from "../../controller/selectUser.controller";
  import NavBar from "../components/NavBar.svelte";
  import Table from "../components/Table.svelte";
  import ComboBox from "../components/ComboBox.svelte";

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

{#if isAutenticated}
<NavBar tablas={cat} />
<ComboBox {comboItems} on:option={responseComboBox} />
<Table
  dataObj={data1}
  rows_name={filas}
  rows_data={obj_par}
  name_componented={"Admin_Users"}
/>
{/if}
