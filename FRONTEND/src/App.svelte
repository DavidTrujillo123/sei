<script>
  import { Router, Link, Route } from "svelte-routing";
  import Login from "./views/Login.svelte";
  import Email_send from "./views/Email_send.svelte";
  import Products from "./views/Products.svelte";
  import Audit from "./views/Audit.svelte";

  
</script>

<!-- <main>
  <h1>Seguridad</h1>
  <Router>
		<nav>
			<Link to="/">Formulario</Link>
			<Link to="/login">Login</Link>
			<Link to="/perfil">Perfil</Link>
		</nav>

		<Route path="/">
      		<Form></Form>
		</Route>
		<Route path="/emalsend">
      		<Email_send></Email_send>
	  	</Route>
		<Route path="/page">
			<Page></Page>
		</Route>
	</Router>
</main> -->

<body>
    <header>
        <!-- <h1>Seguridad<span> SEI</span> </h1> -->
        <!-- <nav>
            <Router>
                <div class="link"><Link to="/">Formulario</Link></div> 
				<div class="link"><Link to="/login">Login</Link></div>
				<div class="link"><Link to="/perfil">Perfil</Link></div>                
            </Router>
        </nav> -->
    </header>

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
        </Router>
    </main>
</body>

<style>


header {
    background-color: #050a0e;
    color: #fff;
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;      
    border-radius: 30px;     

}

nav {
    display: flex;
	
}
h1 {
    display: flex;
    align-items: center;
}

.link {
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    margin-left: 5px;
}

/*h1 span {
    font-size: 0.8em; 
    margin-left: 15px; 
	color: #fff;
 }*/
/* .sveltekit-link  {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-right: 20px;
    transition: color 0.3s;
}

.sveltekit-link:hover {
    color: #4caf50;
} */


</style>

