<script>
  import { login, redirect } from '../controller/login.controller.js';
  let obj_data = {
    us_email: '',
    us_password: '',
  }

  async function doSubmit() {
    const res = await login(obj_data);
    redirect(res);
    // console.log(res);
  }
</script>

<div>
  <h1>Inicio</h1>
  <form on:submit|preventDefault={doSubmit}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={obj_data.us_email} />
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={obj_data.us_password} />
    <button type="submit">Enviar</button>
  </form>
</div>


