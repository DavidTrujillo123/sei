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
  <h1>Login</h1>
  <form on:submit|preventDefault={doSubmit}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={obj_data.us_email} />
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={obj_data.us_password} />
    <button type="submit">Enviar</button>
  </form>

</div>


<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

form {
    max-width: 400px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
}

label {
    display: block;
    margin-bottom: 8px;
    color: #555;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #45a049;
}
</style>
