<script>
    import { removeSession } from "../../Model/Session.js";
    import { navigateLogin } from "../../controller/autenticated.controller.js";

    function handleSignOut() {
        removeSession('user');
        navigateLogin();
    }
</script>

<div class="desktop-menu">
    <ul>
        <!-- <li><a href="" class="title">My orders</a></li> -->
        <li><a href="" class="title">My account</a></li>
        <li><a href="" on:click={handleSignOut} class="title">Sing out</a></li>
    </ul>
</div>

<style>
    .desktop-menu {
        width: 100px;
        height: auto;
        border: 1px solid var(--very-light-pink);
        border-radius: 6px;
        padding: 20px 20px 0 20px;
        position: absolute;
        top: 46px;
        right: 50px;
        background-color: var(--white);
    }
    .desktop-menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .desktop-menu ul li {
        text-align: end;
    }

    .desktop-menu ul li:not(:last-child) {
        font-weight: bold;
    }
    .desktop-menu ul li a {
        display: inline-block;
        margin-bottom: 18px;
        color: var(--black);
        text-decoration: none;
    }
    .desktop-menu ul li:last-child {
        padding-top: 20px;
        border-top: 1px solid var(--very-light-pink);
    }
    .desktop-menu ul li:last-child a {
        color: var(--hospital-green);
        font-size: var(--sm);
    }
</style>
