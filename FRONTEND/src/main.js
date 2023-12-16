import './app.css'
// @ts-ignore
import App from './App.svelte';
// import Error from './Error_login.svelte';

const app = new App({
  target: document.getElementById('app'),
})

// const error = new Error({
//   target: document.getElementById('err'),
// });
export default app
