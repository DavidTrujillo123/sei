<script>
  import {audit} from '../../controller/audit.controller';
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import { getSession } from '../../Model/Session.js';
  
  const storedUser = getSession("user");
  let params = 1;//storedUser.user.us_id;
  let res = []
  let data1 = []
  let recuentoSelects = {};
  
  async function getDataAudit() {
    res = await audit(params);
    data1 = res.response
    contarSelectsPorUsuario();
    
  }
  onMount(() => {
    getDataAudit();
    grapic_key();
    
  });
  
  let selectedOperation = "";

  function mostrarDiv(event) {
    
    selectedOperation = event.target.value;
  }
   // Supongamos que tienes estos datos
   let datos = {
    labels: ['Categoría 1', 'Categoría 2', 'Categoría 3'],
    datasets: [{
      data: [10, 40, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
  };


  async function grapic_key(){
      
    let dataSelect = await contarSelectsPorUsuario();
    const canvas = document.getElementById('miGraficaPastel');
    console.log("aaaa",Object.keys(dataSelect));
    const recuentoSelectsJSON = JSON.stringify(dataSelect);

    let claves = [];

  // Llenar el array 'claves' con las claves del objeto usando un bucle for
  for (let clave in dataSelect) {
    if (dataSelect.hasOwnProperty(clave)) {
      claves.push(clave);
    }
  }
  console.log(claves);

    console.log('Objeto convertido a JSON:', recuentoSelectsJSON);
    if (canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // Crear el gráfico de pastel
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Object.keys(dataSelect),
            datasets: [{
              data: Object.values(dataSelect),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            }],
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: 'Recuento de SELECTs por usuario'
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


   // Función para contar SELECTs por usuario
   async function contarSelectsPorUsuario() {
    // Crear un objeto para almacenar el recuento de SELECTs por usuario

    // Iterar sobre los datos y contar SELECTs por usuario
    data1.forEach(entry => {
      if (entry.au_action === 'SELECT') {
        if (!recuentoSelects[entry.us_name]) {
          recuentoSelects[entry.us_name] = 1;
        } else {
          recuentoSelects[entry.us_name] += 1;
        }
      }
    });
    console.log(recuentoSelects);
    return recuentoSelects

    // Imprimir el recuento de SELECTs por usuario
   
  }

  // Llamar a la función para contar SELECTs por usuario
  



</script>

<main>
  <div class="form">
    <label for="operacion">Selecciona una opción:</label>
  <select class="select" id="operacion" on:change={mostrarDiv}>
    <option value="selectone"></option>
    <option value="alltable">All Table</option>
    <option value="select">Select</option>
    <option value="update">Update</option>
    <option value="delete">Delete</option>
    <option value="insert">Insert</option>
  </select>
  </div>
  
  <div id="alltable" class:hidden={selectedOperation !== 'alltable'}>
    <!-- Contenido para All Table -->
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
  
  <div id="select" class:hidden={selectedOperation !== 'select'}>
    <!-- Contenido para Select -->
    <h1>Gráfica de Pastel</h1>
    <div class="cake_graph">

      <canvas id="miGraficaPastel" ></canvas>
    </div>
    
  </div>
  
  <div id="update" class:hidden={selectedOperation !== 'update'}>
    <!-- Contenido para Update -->
    <p>Update</p>
  </div>
  
  <div id="delete" class:hidden={selectedOperation !== 'delete'}>
    <!-- Contenido para Delete -->
    <p>Delete</p>
  </div>
  
  <div id="insert" class:hidden={selectedOperation !== 'insert'}>
    <!-- Contenido para Insert -->
    <p>Insert</p>
  </div>


  
  
        

</main>

<style>

.cake_graph{
  display: block;
    box-sizing: border-box;
    height: 1106px;
    width: 1106px;
}


.form {
  width: 100%;
  height: 100%;
  padding-bottom: 75px;
  color: white;
  background: #2f383a;
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