<script>
    import NavBar from "./NavBar.svelte";
    import {isAutenticated, navigateLogin, redirectWithRol} from "../../controller/autenticated.controller.js";
    import { getSession } from '../../Model/Session.js';
    let  cat;
    let userSession = getSession('user');

    if(!isAutenticated(userSession)){
        navigateLogin();
    }
    else if (userSession.user.rol_id != 1){
        redirectWithRol(userSession.user.rol_id);
    }
    else{
        cat = [
            "Usuarios",
            "Producto",
            "Categorias Producto",
            "Rol",
            "Carrito de Compras",
            "Detalle Carrito de Compras",
        ];
    } 
</script>

<NavBar tablas={cat}/>
