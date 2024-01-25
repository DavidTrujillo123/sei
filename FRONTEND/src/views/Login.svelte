<script>
  import {
    redirect,
    validateRecaptcha,
  } from "../../controller/login.controller.js";
  import Error_login from "../components/Error_login.svelte";
  import { onMount } from "svelte";
  import { userSaver } from "../store.js";
  import { sineOut } from "svelte/easing";

  onMount(() => {
    createRecaptcha();
  });

  function createRecaptcha() {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  let flagcapcha;
  let flag_user;
  let flag_data = false;
  let obj_data = {
    us_email: "",
    us_password: "",
  };
  let cont = 1;

  async function doSubmit() {
    if (obj_data.us_email == "" && obj_data.us_password == "") {
      flag_data = false;
    } else if(
      !isValidEmail 
      // || !hasLowercase ||
      // !hasMinChar || !hasNumbers ||
      // !hasLowercase || !hasSpecialChar
      ){
      flag_data = false;
      alert("Cumpla con las normas solicitadas")
    }
    else{

      flag_data = true;
      flagcapcha = validateRecaptcha();
      flag_user = await redirect(obj_data, flagcapcha);
    }
  }

  let isValidEmail = false;
  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    isValidEmail = emailPattern.test(obj_data.us_email);
  };



  let hasNumbers = false;
  let hasUppercase = false;
  let hasLowercase = false;
  let hasMinChar = false;
  let hasSpecialChar = false;

  const validatePassword = () => {
    const numberPattern = /^.*\d+.*$/;
    const uppercasePattern = /^.*[A-Z]+.*$/;
    const lowercasePattern = /^.*[a-z]+.*$/;
    const mincharPattern = /^.{8,}$/;
    const hasspecialcharPattern = /^.*[!,@,#,$,^,&,*]+.*$/;

    hasNumbers = numberPattern.test(obj_data.us_password);
    hasUppercase = uppercasePattern.test(obj_data.us_password);
    hasLowercase = lowercasePattern.test(obj_data.us_password);
    hasMinChar = mincharPattern.test(obj_data.us_password);
    hasSpecialChar = hasspecialcharPattern.test(obj_data.us_password);
  };
</script>

<div class="login">
  <p>email: cristian181996@gmail.com - contraseña: admin</p>
  <div class="form-container">
    <img
      src="../public/resource/logos/logo_yard_sale.svg"
      alt="logo"
      class="logo"
    />
    {#if flag_data == true}
      {#if flagcapcha == true}
        {#if flag_user == false}
          <Error_login message={"Error en el usuario o contraseña"} />
        {/if}
      {:else}
        <Error_login message={"Por favor realize el Captcha"} />
      {/if}
    {/if}
    <form on:submit|preventDefault={doSubmit} class="form">
      <label for="email" class="label">Email address</label>
      <input
        type="email"
        name=""
        id="email"
        placeholder="example@example.com"
        class="input input-email"
        required
        bind:value={obj_data.us_email}
        on:input={validateEmail}
      />
      {#if isValidEmail}
        <p style="color: green; margin-top: -10px">Correo electrónico válido</p>
      {:else}
        <p style="color: red; margin-top: -10px">
          Correo electrónico no válido
        </p>
      {/if}
      <label for="password" class="label">Password</label>
      <input
        type="password"
        name=""
        id="password"
        placeholder="************"
        class="input input-password"
        required
        bind:value={obj_data.us_password}
        on:input={validatePassword}
      />
      <p>Debe contener:</p>

      {#if hasNumbers}
        <p style="color: green; margin-top: -10px">Al menos 1 numero</p>
      {:else}
        <p style="color: red; margin-top: -10px">
          Al menos 1 numero
        </p>
      {/if}

      {#if hasUppercase}
        <p style="color: green; margin-top: -10px">Al menos 1 mayuscula</p>
      {:else}
        <p style="color: red; margin-top: -10px">
          Al menos 1 mayuscula
        </p>
      {/if}

      {#if hasLowercase}
        <p style="color: green; margin-top: -10px">Al menos 1 minuscula</p>
      {:else}
        <p style="color: red; margin-top: -10px">
          Al menos 1 minuscula
        </p>
      {/if}

      {#if hasMinChar}
        <p style="color: green; margin-top: -10px">Al menos 8 caracteres</p>
      {:else}
        <p style="color: red; margin-top: -10px">
          Al menos 8 caracteres
        </p>
      {/if}

      {#if hasSpecialChar}
        <p style="color: green; margin-top: -10px">Al menos 1 caracter especial: ! @ # $ ^ & *</p>
      {:else}
        <p style="color: red; margin-top: -10px">
          Al menos 1 caracter especial: ! @ # $ ^ & *
        </p>
      {/if}

      <div
        class="g-recaptcha"
        data-sitekey="6LcGyjApAAAAAH5ysd4UFBjdsxH60jPpy4GmKl0o"
      ></div>
      <input type="submit" value="Log in" class="primary-button login-button" />
      <!-- <a href="">Forgot my password</a> -->
    </form>
    <!-- <button
      class="secondary-button
      signup-button">Sign up</button
    > -->
  </div>
</div>

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
