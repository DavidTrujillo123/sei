<script>
    import NavBar from "../components/NavBar.svelte";
    import {navigateLogin} from "../../controller/autenticated.controller"
    import { getSession } from "../../Model/Session.js"

    let  userCredentials = getSession('user');
    
    if(!userCredentials){
        navigateLogin();
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

{#if userCredentials}
<NavBar tablas={cat}/>
{/if}