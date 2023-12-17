<script>
  import { getUsers } from "../../controller/selectUser.controller";
  import { onMount } from "svelte";
  import { getSession, removeSession } from "../../Model/Session.js";

  const storedUser = getSession("user");
  let params = storedUser.user.us_id;
  let res = [];
  let data1 = [];
  async function getDataUsers() {
    res = await getUsers();
    data1 = res.response;
  }
  onMount(() => {
    getDataUsers();
  });

  const edit = getSession("obj_edit");
  const labels = getSession("labels");

  let combined = Object.keys(edit).map((key, index) => ({ key, label: labels[index] }));
  console.log(edit);

  function handleSubmit() {
    // Llamar a la función y pasar formData como argumento
    enviarDatos(edit);
  }

  function enviarDatos(data) {
    // Aquí puedes hacer lo que necesites con los datos, por ejemplo, enviarlos a través de una API
    console.log('Datos enviados:', data);

    console.log(data);

    
    // Ejemplo de cómo enviar los datos a través de una API fetch
    /*
    fetch('tu_url', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      // Manejar la respuesta
    }).catch(error => {
      // Manejar errores
    });
    */
  }

</script>

<body>
  <div class="login">
    <div class="form-container">
      <h1 class="title">Edit User</h1>
      <form action="" class="form" on:submit|preventDefault={handleSubmit}>
        <div>
            {#each combined as { key, label }}
            <div>
                <label for={key}>{label}</label>
              <!-- {#if typeof edit[key] === "string" || typeof edit[key] === "number"} -->
                <input
                  type="text"
                  id={key}
                  bind:value={edit[key]}
                  class="input input-name"
                />
              <!-- {/if} -->
            </div>
          {/each}
          <!-- 

                    <label for="name" class="label">Name User</label>
                    <input type="text" name="" id="name"
                    placeholder="Example"
                    class="input input-name">

                    <label for="name" class="label">SurName</label>
                    <input type="text" name="" id="name"
                    placeholder="Example"
                    class="input input-name">
    
                    <label for="email" class="label">Email</label>
                    <input type="email" name="" id="email"
                    placeholder="example@example.com"
                    class="input input-email">    -->
        </div>

        <input type="submit" value="Save" class="primary-button login-button" />
      </form>
    </div>
  </div>
</body>

<style>
  body {
    font-family: "Quicksand", sans-serif;
    margin: 0;
  }
  .login {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  }
  .form-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 300px;
  }
  .title {
    font-size: var(--lg);
    margin-bottom: 36px;
    text-align: start;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .form div {
    display: flex;
    flex-direction: column;
  }
  .label {
    font-size: var(--sm);
    font-weight: bold;
    margin-bottom: 4px;
  }
  .input {
    background-color: var(--text-input-field);
    border: none;
    border-radius: 8px;
    height: 32px;
    font-size: var(--md);
    padding: 4px;
    margin-bottom: 12px;
  }
  .input-name,
  .input-email .input-password {
    margin-bottom: 24px;
  }
  .primary-button {
    background-color: var(--hospital-green);
    border-radius: 8px;
    border: none;
    color: var(--white);
    width: 100%;
    height: 48px;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
  }
  .login-button {
    margin-top: 14px;
    margin-bottom: 32px;
  }
  @media (max-width: 640px) {
    .form-container {
      height: 100%;
    }
    .form {
      height: 100%;
      justify-content: space-between;
    }
  }
</style>
