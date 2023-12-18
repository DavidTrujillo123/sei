<script>
  import {audit, auditCont} from '../../controller/audit.controller';
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import { navigateLogin, redirectWithRol} from "../../controller/autenticated.controller"
  import { getSession } from "../../Model/Session.js"
    import NavBar from '../components/NavBar.svelte';
    import ComboBox from '../components/ComboBox.svelte';

  let  userCredentials = getSession('user');    
    if(!userCredentials){
      navigateLogin();
  }
    else if(userCredentials.rol_id != 4){
      redirectWithRol(userCredentials.rol_id)
  }

    const storedUser = getSession("user");
  let params = storedUser.us_id;
  console.log(params);
  let res = []
  let resQuery = []
  let data1 = []
  let dataCountSelect = []
  let selectedOperation = "";
  let myChart;
  
  //Obtencion de la Data
  async function getDataAudit() {
    res = await audit(params);
    data1 = res.response;
    console.log(data1,'dsad');
  }

  async function getAuditCont(query) {
    resQuery = await auditCont(query);
    return resQuery;
  }

  onMount(() => {
    getDataAudit();
    
  });
  
  //Cambio de vistas en el div dependiendo del combobox
  function mostrarDiv(event) {
    selectedOperation = event.target.value;
    console.log(selectedOperation);
    if(selectedOperation == "SELECT"){
      grapic_key(selectedOperation,'GraficaSelect','pie');
    }else if(selectedOperation == "UPDATE"){
      grapic_key(selectedOperation,"GraficaUpdate",'bar');
    }else if(selectedOperation == "DELETE"){
      grapic_key(selectedOperation,"GraficaDelete", 'line');
    }else if(selectedOperation == "INSERT"){
      grapic_key(selectedOperation,"GraficaInsert", 'doughnut');
    }else if(selectedOperation == "LOGIN:TRUE"){
      grapic_key(selectedOperation,"GraficaLogin", 'doughnut');
    }
  }

  async function grapic_key(query,location, typeGraph){
    if (myChart) {
        myChart.destroy();
    }
    dataCountSelect = await getAuditCont(query)
    let nombres = dataCountSelect.map(dato => dato.us_name);
    let conteos = dataCountSelect.map(dato => dato.count);
    console.log(nombres);
    console.log(conteos);
    const canvas = document.getElementById(location);
    if (canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Crear el gráfico de pastel
        myChart =  new Chart(ctx, {
          type: typeGraph,
          data: {
            labels: nombres,
            datasets: [{
              data: conteos,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#7e0b87','#270e0e','#3a4f30','#00ff22'],
            }],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Recuento de '+query+'s por usuario'
              }
            }
          }
        });
      } else {
        console.error('Unable to get 2D context from canvas element.');
      }
    } else {
      console.error('Canvas element not found.');
    }
  }


</script>

{#if userCredentials && userCredentials.rol_id == 4 }
<main>
  <NavBar />
  <div class="form">
    <!-- <ComboBox comboItems={['alltable','SELECT','UPDATE','DELETE', 'LOGIN:TRUE']} on:option={mostrarDiv}/> -->
    <label for="operacion">Selecciona una opción:</label>
  <select class="select" id="operacion" on:change={mostrarDiv} >
    <option value="selectone"></option>
    <option value="alltable">All Table</option>
    <option value="SELECT">Select</option>
    <option value="UPDATE">Update</option>
    <option value="DELETE">Delete</option>
    <option value="INSERT">Insert</option>
    <option value="LOGIN:TRUE">Login</option>
  </select>
  </div>
  
  <div id="alltable" class:hidden={selectedOperation !== 'alltable'}>
    <div class="container_table_audit">
      <h3>Tabla de Auditoria</h3>
      <table class="table_audit" >
          <thead>
              <tr>
              <th>Auditor ID</th>
              <th>Usuario ID</th>
              <th>Usuario Nombre</th>
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
                  <td>{data.us_name}</td>
                  <td>{data.au_table}</td>
                  <td>{data.au_action}</td>
                  <td>{data.au_register_id}</td>
                  <td>{data.au_date}</td>
                  </tr>
              {/each}
              {/if}
          </tbody>
          </table>
  
    </div>
  </div>
  
  <div id="select" class:hidden={selectedOperation !== 'SELECT'}>
    <h1>Gráfica del Select</h1>
    <div class="select_graph">
      <canvas id="GraficaSelect" ></canvas>
    </div>
    
  </div>
  
  <div id="update" class:hidden={selectedOperation !== 'UPDATE'}>
    <h1>Gráfica del Update</h1>
    <div class="update_graph">
      <canvas id="GraficaUpdate" ></canvas>
    </div>
  </div>
  
  <div id="delete" class:hidden={selectedOperation !== 'DELETE'}>
    <h1>Gráfica del Delete</h1>
    <div class="delete_graph">
      <canvas id="GraficaDelete" ></canvas>
    </div>
  </div>
  
  <div id="insert" class:hidden={selectedOperation !== 'INSERT'}>
    <h1>Gráfica del Insert</h1>
    <div class="insert_graph">
      <canvas id="GraficaInsert" ></canvas>
    </div>
  </div>
  <div id="login" class:hidden={selectedOperation !== 'LOGIN:TRUE'}>
    <h1>Gráfica del Login</h1>
    <div class="login_graph">
      <canvas id="GraficaLogin" ></canvas>
    </div>
  </div>
</main>
{/if}
<style>

.select_graph,
.update_graph,
.insert_graph,
.delete_graph,
.login_graph{
  display: block;
    box-sizing: border-box;
    height: 800px;
    width: 800px;
}


.form {
  padding-bottom: 25px;
  color: black;
  background: var(--verylight-pink);
}

.select {
  width: 225px;
  height: 40px;
  cursor: pointer;
  background-color: white;
  box-shadow: 0 2px 0 white;
  border-radius: 7px;
  font-size: 15px;

}
  .hidden {
    display: none;
  }
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
table {
  background: #2f383a;
  border-radius: 0.25em;
  border-collapse: collapse;
  margin: 2em;
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
  transition: background 0.10s ease;
}
tbody tr:hover {
  background: #000000;
}


</style>