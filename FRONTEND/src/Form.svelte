<!-- <script>
    import Login from '../Model/Login.mjs';
  
  let us_email = '';
  let us_password = '';
  async function login(){
      const user = new Login();
      let response = await user.isUser(us_email, us_password);
      console.log(response);
  }

</script> -->


<!-- <div>
  <h1>Inicio</h1>
  <form on:submit|preventDefault={login}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={us_email} />
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={us_password} />
    <button type="submit">Enviar</button>
  </form>
</div> -->


<!-- <script>
  let formData = {
    us_email: '',
    us_password: ''
  };

  async function handleSubmit() {
    try {
      const response = await fetch('http://localhost:3000/isUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Manejar la respuesta de la API
      const data = await response.json();
      console.log(data); // Puedes realizar acciones con la respuesta aquí
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    EMAIL:
    <input type="text" bind:value={formData.us_email} />
  </label>

  <label>
    Password:
    <input type="password" bind:value={formData.us_password} />
  </label>

  <button type="submit">Enviar</button>
</form> -->