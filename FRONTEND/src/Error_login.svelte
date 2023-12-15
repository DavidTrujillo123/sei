<script>
  export let flag;
  import Form from "./Form.svelte";
</script>

<main>
 <div class="contain_error_login">
    { #if flag == 1}
    <div class="message_error">Error en el Usuario o en la Contrasenia</div>
    {:else}
    <div class="message_error">Realice el captcha</div>
    {/if}
     
   </div>
</main>


<style>
.message_error {
 font-size: 20px;
 font-weight: 700;
 color: #e8eaee;
 text-align: center;
 font-family: 'Karla', sans-serif;
}
.contain_error_login{
 display: block;
 background-color: rgb(156, 53, 53);
 padding: 20px;
 margin-left: 20%;
 margin-right: 20%;
}
</style>