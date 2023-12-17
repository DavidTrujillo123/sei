<script>
    import { isVerifiedEmail, redirectByRole } from "../../controller/smtp.controller.js";
    import {
        isAutenticated,
        navigateLogin,
    } from "../../controller/autenticated.controller";

    let userCredentials = isAutenticated();
    if (!userCredentials) {
        navigateLogin();
    }
    let codigo = "";
    let cont = 0;
    const doSubmit = () => {
        if (codigo.trim()) {
            let flag = isVerifiedEmail(codigo);
            if(flag) {
                redirectByRole();
            }
            else{
                if(cont < 5){
                    cont++;
                    alert('Error! ingrese nuevamente el código. Intentos: '+cont);
                }
                else{
                    cont = 0;
                    navigateLogin();
                }
            }
        }
    };
</script>

{#if userCredentials}
    <div class="container_email">
        <h1>Código de Seguridad</h1>
        <form on:submit|preventDefault={doSubmit}>
            <h2>Código de Verificación</h2>
            <label for="codigo"></label><br />
            <input id="codigo" type="text" bind:value={codigo} required />
            <input type="submit" value="Submit" />
        </form>
    </div>
{/if}

<style>
    .container_email {
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

    h2 {
        color: #333;
    }

    label {
        display: block;
        margin-bottom: 8px;
        color: #555;
    }

    input[type="text"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    input[type="submit"] {
        background-color: #4caf50;
        color: #fff;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    input[type="submit"]:hover {
        background-color: #45a049;
    }
</style>
