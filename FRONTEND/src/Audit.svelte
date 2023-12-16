<script>
  import {audit} from '../controller/audit.controller';
  import { onMount } from "svelte";

  let params = 1
  console.log(params);
  let res = []
  let data1 = []
  async function getDataAudit() {
    res = await audit(params);
    data1 = res.response
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
            <th>Auditor ID</th>
            <th>Usuario ID</th>
            <th>Tabla</th>
            <th>Accion</th>
            <th>Regitro ID</th>
            <th>Fecha de Accion</th>
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