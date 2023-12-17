<script>
  import { onMount } from "svelte";
  import { getSession } from "../../Model/Session.js";
  import { getUsers, deleteUser } from "../../controller/selectUser.controller";
  export let dataObj;
  export let rows_name;
  export let rows_data;
  export let name_componented;
  import { navigate } from "svelte-routing";

  const storedUser = getSession("user");
  let params = storedUser.user.us_id;
  async function delete_data(rowData) {
    const confirmation = confirm(
      `¿Estás seguro de eliminar al usuario ${rowData.us_name}?`,
    );
    if (confirmation) {
      let object = {
        us_id_p: rowData.us_id,
        us_id_created: params,
      };
      const result = await deleteUser(object);

      if (result.success) {
        location.reload();
      } else {
        console.error("Error al eliminar usuario:", result.error);
      }
    }
  }

  export const edit_data = () => {
    if (name_componented == "Admin_Users") {
      navigate("/User_Form");
    } else if (name_componented == "Admin_Product") {
      navigate("/User_Form");
    }
  };
</script>

<main>
  <div class="header-container">
    <h3>Table</h3>
    <button class="new-user-button">Crear Nuevo</button>
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
              	
                {#if category.includes("img")}
                  <td><img class="pro_img" src={data[category]} /> </td>
                {:else}
                  <td> {data[category]}</td>
                {/if}
            {/each}
            <td>
              <button on:click={edit_data}>Editar</button>
              <button on:click={() => delete_data(data)} class="delete"
                >Eliminar</button
              >
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</main>

<style>
  *,
  *:before,
  *:after {
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
    color: var(--white);
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
    background: #012b39;
    border-radius: 0.25em;
    border-collapse: collapse;
    margin: 1em;
  }
  th {
    border-bottom: 1px solid #364043;
    color: #e2b842;
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
  .pro_img {
    width: 100px; /* Establece el ancho deseado */
    height: 75px; /* Establece la altura deseada */
    object-fit: cover; /* Ajusta la imagen manteniendo las proporciones y cubriendo el contenedor */
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
