<script>
  import { login, redirect } from '../controller/login.controller.js';
  import Error_login from "./Error_login.svelte";
  let obj_data = {
    us_email: '',
    us_password: '',
  }

  let res
  async function doSubmit() {
    res = await login(obj_data);
    redirect(res);
    // console.log(res);
  }
</script>

<div>
  <h1>Inicio</h1>
  {#if res!=undefined}
    { #if res.res = "FALSE"}
    <Error_login/>
    {/if}
  {/if}
  <form on:submit|preventDefault={doSubmit}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={obj_data.us_email} />
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={obj_data.us_password} />
    <button type="submit">Enviar</button>
  </form>
</div>
