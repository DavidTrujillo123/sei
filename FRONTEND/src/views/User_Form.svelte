<script>
    import { getUsers } from '../../controller/selectUser.controller';
    import { onMount } from "svelte";
    import { getSession } from '../../Model/Session.js';

    const storedUser = getSession("user");
    let params = storedUser.user.us_id;
    let res = []
    let data1 = []
    async function getDataUsers() {
      res = await getUsers();
      data1 = res.response
    }
    onMount(() => {
        getDataUsers();
    });
</script>

<body>
    <div class="login">
        <div class="form-container">
            <h1 class="title">Edit User</h1>
            <form action="" class="form">
                <div>
                    <label for="name" class="label">Name User</label>
                    <input type="text" name="" id="name"
                    placeholder="Example"
                    class="input input-name">

                    <label for="name" class="label">SurName</label>
                    <input type="text" name="" id="name"
                    placeholder="Example"
                    class="input input-name">
    
                    <label for="email" class="label">Email</label>
                    <input type="email" name="" id="email"
                    placeholder="example@example.com"
                    class="input input-email">   
                   
                </div>
                
                <input type="submit" 
                value="Save" class="primary-button login-button">
            </form>
        </div>
    </div>
</body>
<style>
    
    body{
        font-family: 'Quicksand', sans-serif;
        margin: 0;
    }
    .login{
        width: 100%;
        height: 100vh;
        display: grid;
        place-items: center;
    }
    .form-container{
        display: grid;
        grid-template-rows: auto 1fr auto;
        width: 300px;
    }
    .title{
        font-size: var(--lg);
        margin-bottom: 36px;
        text-align: start;
    }
    .form{
        display: flex;
        flex-direction: column;
    }
    .form div{
        display: flex;
        flex-direction: column;
    }
    .label{
        font-size: var(--sm);
        font-weight: bold;
        margin-bottom: 4px;
    }
    .input{
        background-color: var(--text-input-field);
        border: none;
        border-radius: 8px;
        height: 32px;
        font-size: var(--md);
        padding: 4px;
        margin-bottom: 12px;
    }
    .input-name, 
    .input-email
    .input-password{
        margin-bottom: 24px;
    }
    .primary-button{
        background-color: var(--hospital-green);
        border-radius: 8px;
        border: none;
        color: var(--white);
        width: 100%;
        height: 48px;
        cursor: pointer;
        font-size: var(--md);
        font-weight: bold;
    }
    .login-button{
        margin-top: 14px;
        margin-bottom: 32px;
    }
    @media (max-width: 640px){
        .form-container{
            height: 100%; 
        }
        .form{
            height: 100%;
            justify-content: space-between;
        }
    }
</style>