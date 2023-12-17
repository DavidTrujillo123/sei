<script>
  import { Router, Link, Route } from "svelte-routing";
  import Login from "./views/Login.svelte";
  import Email_send from "./views/Email_send.svelte";
  import Products from "./views/Products.svelte";
  import Audit from "./views/Audit.svelte";
  import Admin_Users from "./views/Admin_Users.svelte";
  import Admin from "./views/Admin.svelte";
  import User_Form from "./views/User_Form.svelte";
  import Admin_Product from "./views/Admin_Product.svelte";
  import Admin_CatProduct from "./views/Admin_CatProduct.svelte";
  import Admin_Rol from "./views/Admin_Rol.svelte";
  import Admin_Shop_Cart from "./views/Admin_ShopCart.svelte";
  import Admin_Shop_Cart_Det from "./views/Admin_Shop_Cart_Det.svelte";
  
</script>

<!-- <body>
    <main> -->
        <Router>
            <Route path="/">
				<Login></Login>
				  </Route>
			<Route path="/emalsend">
				<Email_send></Email_send>
			</Route>
            <Route path="/products">
                <Products></Products>
            </Route>
			<Route path="/audit">
                <Audit></Audit>
            </Route>
            <Route path="/Usuarios">
                <Admin_Users></Admin_Users>
            </Route>
            <Route path="/admin">
                <Admin></Admin>
            </Route>
            <Route path="/User_Form">
                <User_Form></User_Form>
            </Route>
            <Route path="/Producto">
                <Admin_Product></Admin_Product>
            </Route>
            <Route path="/Categorias%20Producto">
                <Admin_CatProduct></Admin_CatProduct>
            </Route>
            <Route path="/Rol">
                <Admin_Rol></Admin_Rol>
            </Route>
            <Route path="/Carrito%20de%20Compras">
                <Admin_Shop_Cart></Admin_Shop_Cart>
            </Route>
            <Route path="/Detalle%20Carrito%20de%20Compras">
                <Admin_Shop_Cart_Det></Admin_Shop_Cart_Det>
            </Route>
        </Router>
    <!-- </main>
</body> -->


