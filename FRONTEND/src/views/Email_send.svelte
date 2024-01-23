<script>
    import { isVerifiedEmail, redirectByRole } from "../../controller/smtp.controller.js";
    import {
        navigateLogin,
    } from "../../controller/autenticated.controller";
    import ErrorLogin from "../components/Error_login.svelte";
    import { codeSaver, userSaver } from "../store.js";
    import { setSession } from "../../Model/Session.js"


    let flag = true;
    // $userSaver == null || $userSaver.state == false
    if($userSaver == null){
        flag = false;
        navigateLogin();
    }

    let codigo = "";
    let cont = 5;
    let flag_error = false;
    
console.log($codeSaver);

    const doSubmit = () => {
        if (codigo.trim()) {
            let flag = isVerifiedEmail($codeSaver, codigo);
            if(flag) {
                setSession('user',$userSaver.userData);
                redirectByRole($userSaver.userData.rol_id);
            }
            else{
                flag_error = true;
                if(cont > 1){
                    cont--;
                }
                else{
                    navigateLogin();
                }
            }
        }
    };
    
</script>
{#if flag}
    <div class="container_email">
        <div class="container_form">    
            {#if flag_error}
        	<ErrorLogin message={'Error en el código por favor ingrese otra vez. Intentos: '+cont}/>
        {/if}
            <img src="../public/resource/logos/favicon_yard_sale.svg" alt="" srcset="">
            <h1>Verificación de correo</h1>
            <form on:submit|preventDefault={doSubmit}>
                <h2>Código de Verificación</h2>
                <label for="codigo"></label><br />
                <input id="codigo" type="text" bind:value={codigo} required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
{/if}

<style>
    .container_email {
        display: grid;
        place-items: center;
        height: 100vh;
        margin: 0 auto;
        /* background-color: #f4f4f4; */
    }
    img{
        height: 45px;
        margin-right: 20px;
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
        display: inline-block;
        color: #333;
    }

    h2 {
        color: var(--black);
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
