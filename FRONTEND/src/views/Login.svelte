<script>
  import {
    login,
    redirect,
    validateRecaptcha,
  } from "../../controller/login.controller.js";
  import Error_login from "../components/Error_login.svelte";
 
  let flag;
  let res;
  let obj_data = {
    us_email: "",
    us_password: "",
  };

  async function doSubmit() {
    flag = validateRecaptcha();
    res = await login(obj_data);
    redirect(res, flag);
  }

</script>
<!-- {#if flag_credentials} -->
<div class="login">
  <div class="form-container">
    <img src="../public/resource/logos/logo_yard_sale.svg" alt="logo" class="logo" />
    {#if res!=undefined}
      {#if flag == true}
        { #if res.res = "FALSE"}
          <Error_login flag = 1/>
        {/if}
      {:else}
         <Error_login flag = 2/>
      {/if}
    {/if}
    <form on:submit|preventDefault={ doSubmit} class="form">
      <label for="email" class="label">Email address</label>
      <input
        type="email"
        name=""
        id="email"
        placeholder="example@example.com"
        class="input input-email"
        bind:value={obj_data.us_email}
      />

      <label for="password" class="label">Password</label>
      <input
        type="password"
        name=""
        id="password"
        placeholder="************"
        class="input input-password"
        bind:value={obj_data.us_password}
      />
      <div class="g-recaptcha" data-sitekey="6LcGyjApAAAAAH5ysd4UFBjdsxH60jPpy4GmKl0o"></div>
      <input type="submit" value="Log in" class="primary-button login-button" />
      <!-- <a href="">Forgot my password</a> -->
    </form>
    <!-- <button
      class="secondary-button
      signup-button">Sign up</button
    > -->
  </div>
</div>
<!-- {/if} -->
<style>
 
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
  .logo {
    width: 150px;
    margin-bottom: 48px;
    justify-self: center;
  }
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .form a {
    color: var(--hospital-green);
    font-size: var(--sm);
    text-align: center;
    text-decoration: none;
    margin-bottom: 52px;
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
  .input-email {
    margin-bottom: 22px;
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
  .secondary-button {
    background-color: var(--white);
    border-radius: 8px;
    border: 1px solid var(--hospital-green);
    color: var(--hospital-green);
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
    .logo {
      display: block;
    }
    .secondary-button {
      width: 300px;
      position: absolute;
      bottom: 0;
      margin-bottom: 14px;
    }
  }
</style>
