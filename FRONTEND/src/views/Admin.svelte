<script>
    import NavBar from "../components/NavBar.svelte";
    import {navigateLogin, redirectWithRol} from "../../controller/autenticated.controller"
    import { getSession } from "../../Model/Session.js"

    let  userCredentials = getSession('user');
    
    if(!userCredentials){
        navigateLogin();
    }
    else if (userCredentials.rol_id != 1){
        redirectWithRol(userCredentials.rol_id)
    }
    let  cat = [
            "Usuarios",
            "Producto",
            "Categorias Producto",
            "Rol",
            "Carrito de Compras",
            "Detalle Carrito de Compras",
        ];
</script>

{#if userCredentials && userCredentials.rol_id == 1}
<NavBar tablas={cat}/>
<h1 class="title">Welcome Admin</h1>
{/if}

<style>
    .title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    }
    h1 {
        text-align: center;
    }
</style>