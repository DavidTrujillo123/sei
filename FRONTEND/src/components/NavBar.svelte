<script>
    import { getSession } from "../../Model/Session.js";
    import Menu from "./Menu.svelte";
    import ShopingCart from "./Shoping_cart.svelte";
    export let tablas = [];
    export let flag_Cart=false;

    let  userCredentials = getSession('user');
    let flag_menu = false;
    
    let flag_shopping_cart = false;
    const doClickMenu = () => {
        if (flag_menu == true) flag_menu = false;
        else flag_menu = true;
    };

    const doClickShoppingCart = () => {
        if (flag_shopping_cart == true) flag_shopping_cart = false;
        else flag_shopping_cart = true;
    };     
</script>

<nav>
    <img
        src="../public/resource/iconos/icon_menu.svg"
        alt="menu"
        class="menu"
    />

    <div class="navbar-left">
        <img
            src="../public/resource/logos/logo_yard_sale.svg"
            alt="logo"
            class="logo"
        />
        <ul>
            {#each tablas as category (category)}
                <li><a href="/{category}">{category}</a></li>
            {/each}
        </ul>
    </div>
    <div class="navbar-right">
        <ul>
            <li class="navbar-email">
                {userCredentials.us_email}
                <img
                    src="../public/resource/iconos/flechita.svg"
                    alt="arrow"
                    on:click={doClickMenu}
                />
            </li>
            {#if flag_Cart}
            <li class="navbar-shopping-cart" on:click={doClickShoppingCart}>
                <img
                    src="../public/resource/iconos/icon_shopping_cart.svg"
                    alt="shopping-car"
                />
                <div>2</div>
            </li>
            {/if}
            {#if flag_menu}
                <Menu />
            {/if}
            {#if flag_shopping_cart}
                <ShopingCart />
            {/if}
        </ul>
    </div>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        height: 60px;
    }
    .menu {
        display: none;
        height: 20px;
    }
    .logo {
        width: 100px;
    }
    .navbar-left ul,
    .navbar-right ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        height: 60px;
    }
    .navbar-left {
        display: flex;
    }
    .navbar-left ul {
        margin-left: 12px;
    }
    .navbar-left ul li a,
    .navbar-right ul li a {
        text-decoration: none;
        color: var(--very-light-pink);
        border: 1px solid var(--white);
        border-radius: 8px;
        padding: 8px;
    }
    .navbar-left ul li a:hover,
    .navbar-right ul li a:hover {
        color: var(--hospital-green);
        border: 1px solid var(--hospital-green);
    }
    .navbar-email {
        color: var(--very-light-pink);
        font-size: var(--sm);
        margin-right: 12px;
    }
    .navbar-email img {
        margin-left: 10px;
        transform: rotate(90deg);
    }
    .navbar-shopping-cart {
        position: relative;
    }
    .navbar-shopping-cart div {
        width: 16px;
        height: 16px;
        background-color: var(--hospital-green);
        border-radius: 50%;
        font-size: var(--sm);
        font-weight: bold;
        position: absolute;
        top: -6px;
        right: -3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 640px) {
        .menu {
            display: block;
        }
        .navbar-left ul {
            display: none;
        }
        .navbar-email {
            display: none;
        }
    }
</style>
