<script>
    // import { getUsers } from '../../controller/selectUser.controller';
    import { onMount } from 'svelte';
    export let dataObj;
    export let rows_name;
    export let rows_data;
    export let name_componented;
    import { navigate } from 'svelte-routing';

    
    export const delete_data = () =>{
        if(name_componented == 'Admin_Users'){

        }
    }

    export const edit_data = () =>{
         if(name_componented == 'Admin_Users'){
            navigate('/User_Form');
        }
    }

  </script>

  <main>
    <div class="header-container">
      <h3>Tabla de Usuarios</h3>
      <button class="new-user-button">Nuevo Usuario</button>
    </div>
      <table class="table_users">
          <thead>
              <tr>
                {#each rows_name as category (category)}
                    <th>{category}</th>
                {/each}
              </tr>
          </thead>
          <tbody>
              {#if dataObj.length == 0}
              <tr>
                  <th>Cargando...</th>
                  <th />
                  <th />
                  <th />
              </tr>
              {:else}
              {#each dataObj as data}

                  <tr>
                     {#each rows_data as category (category)}
                         <td>{data[category]}</td>
                    {/each}
                  <td>
                    <button on:click={edit_data} >Editar</button>
                    <button on:click={delete_data} class="delete">Eliminar</button>
                  </td>
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
  
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .new-user-button {
    background-color: #2196f3;
    color:var(--white);
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .new-user-button:hover {
    background-color: #0b7dda;
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
  button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}

/* Estilos específicos para el botón de Eliminar */
button.delete {
    background-color: #f44336;
}

button.delete:hover {
    background-color: #d32f2f;
}  
  
  </style>