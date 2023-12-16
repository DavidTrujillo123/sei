<script>
    import { getUsers } from '../../controller/selectUser.controller';
    import { onMount } from "svelte";
    import { getSession } from '../../Model/Session.js';
    import NavBar from "./NavBar.svelte";
  
  
    const storedUser = getSession("user");
    let params = storedUser.user.us_id;
    let res = []
    let data1 = []
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
    
  </script>
  <NavBar tablas={cat}/>
  <main>
      <h3>Tabla de Usuarios</h3>
      
      <table class="table_users">
          <thead>
              <tr>
              <th>Rol ID</th>
              <th>User ID</th>
              <th>Name User</th>
              <th>SurName</th>
              <th>Email</th>
              <th>Password</th>              
              </tr>
          </thead>
          <tbody>
              {#if data1.length == 0}
              <tr>
                  <th>Cargando...</th>
                  <th />
                  <th />
                  <th />
              </tr>
              {:else}
              {#each data1 as data}
                  <tr>
                  <td>{data.rol_id}</td>
                  <td>{data.us_id}</td>
                  <td>{data.us_name}</td>
                  <td>{data.us_surname}</td>
                  <td>{data.us_email}</td>
                  <td>{data.us_password}</td>
                  </tr>
              {/each}
              {/if}
          </tbody>
          </table>
          
  
  </main>
  
  <style>
  
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  
  table {
    background: #012B39;
    border-radius: 0.25em;
    border-collapse: collapse;
    margin: 1em;
  }
  th {
    border-bottom: 1px solid #364043;
    color: #E2B842;
    font-size: 0.85em;
    font-weight: 600;
    padding: 0.5em 1em;
    text-align: left;
  }
  td {
    color: #fff;
    font-weight: 400;
    padding: 0.65em 1em;
  }
  
  tbody tr {
    transition: background 0.25s ease;
  }
  tbody tr:hover {
    background: #014055;
  }
  
  
  </style>