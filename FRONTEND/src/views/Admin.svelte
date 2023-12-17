<script>
    import NavBar from "./NavBar.svelte";
    let  cat = [
            "Usuarios",
            "Producto",
            "Categorias Producto",
            "Rol",
            "Carrito de Compras",
            "Detalle Carrito de Compras",
        ];
</script>

<NavBar tablas={cat}/>
