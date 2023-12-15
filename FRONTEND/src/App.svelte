<script>
  import { Router, Link, Route } from "svelte-routing";
  import Form from "./Form.svelte";
  import Email_send from "./Email_send.svelte";

  
</script>

<main>
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
	</Router>
</main>





