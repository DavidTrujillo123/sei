<script>
  import { Router, Link, Route } from "svelte-routing";
  import Form from "./Form.svelte";
  import Email_send from "./Email_send.svelte";
  import Page from "./Page.svelte";
  import Audit from "./Audit.svelte";

  
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
        <h1>Seguridad<span> SEI</span> </h1>
        <nav>
            <Router>
                <div class="link"><Link to="/">Formulario</Link></div> 
				<div class="link"><Link to="/login">Login</Link></div>
				<div class="link"><Link to="/perfil">Perfil</Link></div>                
            </Router>
        </nav>
    </header>

    <main>
        <Router>
            <Route path="/">
				<Form></Form>
				  </Route>
			<Route path="/emalsend">
				<Email_send></Email_send>
			</Route>
            <Route path="/page">
                <Page></Page>
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

h1 span {
    font-size: 0.8em; /* Ajusta el tamaño de la fuente del span según sea necesario */
    margin-left: 15px; /* Ajusta el margen según sea necesario */
	color: #fff;
 }
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

