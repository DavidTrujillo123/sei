<script>
  import {audit} from '../controller/audit.controller';
  import { onMount } from "svelte";
  let params = 1
  let res = []
  async function getDataAudit() {
    res = await audit(params);
    console.log(res.response);
  }
  onMount(() => {
    getDataAudit();
  });
</script>

<main>
    <h3>Tabla de Auditoria</h3>
    
    <table class="table_audit">
        <thead>
            <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Correo Electronico</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {#if res.length == 0}
            <tr>
                <th>Cargando...</th>
                <th />
                <th />
                <th />
            </tr>
            {:else}
            {#each res.response as data}
                <tr>
                <td>{data.au_id}</td>
                <td>{data.us_id}</td>
                <td>{data.au_table}</td>
                <td>{data.au_action}</td>
                <td>{data.au_register_id}</td>
                <td>{data.au_date}</td>
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


body {
  background: #105469;
  font-family: 'Open Sans', sans-serif;
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
.disabled td {
  color: #4F5F64;
}
tbody tr {
  transition: background 0.25s ease;
}
tbody tr:hover {
  background: #014055;
}


</style>