<script>
    import NavBar from "./NavBar.svelte";
    import {isAutenticated, navigateLogin} from "../../controller/autenticated.controller"

    let  userCredentials = isAutenticated();
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