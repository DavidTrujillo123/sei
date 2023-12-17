<script>
  import { Router, Link, Route } from "svelte-routing";
  import Login from "./views/Login.svelte";
  import Email_send from "./views/Email_send.svelte";
  import Products from "./views/Products.svelte";
  import Audit from "./views/Audit.svelte";
  import Admin_Users from "./views/Admin_Users.svelte";
  import Admin from "./views/Admin.svelte";
  import User_Form from "./views/User_Form.svelte";
  import Table from "./views/Table.svelte";
  import Admin_Product from "./views/Admin_Product.svelte";
  
</script>

<body>
    <main>
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
        </Router>
    </main>
</body>


