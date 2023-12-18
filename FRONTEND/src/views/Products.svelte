<script>
    import { getProduct } from "../../controller/product.controller";
    import { onMount } from "svelte";
    import NavBar from "../components/NavBar.svelte";
    import ProductDetail from "../components/Product_detail.svelte";
    import { navigateLogin, redirectWithRol} from "../../controller/autenticated.controller"
    import { getSession } from "../../Model/Session.js"

    let  userCredentials = getSession('user');
  if (!userCredentials) {
    navigateLogin();
  }
  else if(userCredentials.rol_id != 3){
      redirectWithRol(userCredentials.rol_id)
    }

    let query = [];
    let data = [];
    let productoSeleccionado = null;

    const products = async () => {
        query = await getProduct();
        data = query.response;
    };
    
    onMount(() => {
        products();
    });
    
    export const isClicked = (product) => {
        if (productoSeleccionado != null) {
            productoSeleccionado = null;
        } else {
            productoSeleccionado = product;
        }
    }

    let  cat = [
        "All",
        "Clothes",
        "Electronics",
        "Furnitures",
        "Toys",
    ];
</script>

{#if userCredentials && userCredentials.rol_id == 3}
<NavBar tablas={cat} flag_Cart={true}/>
<section class="main container">
    <div class="cards-container">
        {#if data != [] && data != undefined }
            {#each data as product}
                <div on:click={() => isClicked(product)} class="product-card">
                    <img src={product.pro_img} alt={product.pro_name}/>
                    <div class="product-info">
                        <div>
                            <p>${product.pro_price.toFixed(2)}</p>
                            <p>{product.pro_name}</p>
                        </div>
                        <figure>
                            <img
                                src="../public/resource/bt_add_to_cart.svg"
                                alt="products"
                            />
                        </figure>
                    </div>
                </div>
            {/each}
            
            {#if productoSeleccionado !== null}
                <ProductDetail det_pro={productoSeleccionado}/>
            {/if}
        {/if}
    </div>
</section>
{/if}

<style>
    .cards-container {
        --card-size: 240px;
        display: grid;
        grid-template-columns: repeat(auto-fill, var(--card-size));
        gap: 28px;
        place-content: center;
    }
    .product-card {
        width: var(--card-size);
    }
    .product-card img {
        width: var(--card-size);
        height: var(--card-size);
        border-radius: 20px;
        object-fit: cover;
    }
    .product-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
    }
    .product-info figure {
        margin: 0;
    }
    .product-info figure img {
        width: 36px;
        height: 36px;
    }
    .product-info div p:nth-child(1) {
        font-weight: bold;
        font-size: var(--md);
        margin-top: 0;
        margin-bottom: 4px;
    }
    .product-info div p:nth-child(2) {
        font-size: var(--sm);
        margin-top: 0;
        margin-bottom: 0;
        color: var(--very-light-pink);
    }
    @media (max-width: 640px) {
        .cards-container {
            --card-size: 140px;
        }
    }
</style>
