<script>
    import { getProduct } from "../controller/product.controller";
    import { onMount } from "svelte";
    let query = [];
    let data = []
    const products = async () => {
        query = await getProduct();
        data = query.response;
    };
    
    onMount(() => {
        products();
    });
    
</script>

<!-- <section class="main container">
    <div class="cards-container">
        <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>        
                    <p>Bike</p>
                </div>
                <figure>
                    <img src="
                    ../public/resource/bt_add_to_cart.svg"
                    alt="products">
                </figure>
            </div>
        </div>
        <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>        
                    <p>Bike</p>
                </div>
                <figure>
                    <img src="
                    ../public/resource/bt_add_to_cart.svg"
                    alt="products">
                </figure>
            </div>
        </div>
        <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>        
                    <p>Bike</p>
                </div>
                <figure>
                    <img src="
                    ../public/resource/bt_add_to_cart.svg"
                    alt="products">
                </figure>
            </div>
        </div>
    </div>   
</section> -->
<section class="main container">
    <div class="cards-container">
        {#if data != [] && data!= undefined }
            <!-- {console.log(data)} -->
            {#each data as product}
                <div class="product-card">
                    <img src={product.pro_img} alt={product.pro_name} />
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
        {/if}
    </div>
</section>

<style>
    :root {
        --white: #ffffff;
        --black: #000000;
        --very-light-pink: #c7c7c7;
        --text-input-field: #f7f7f7;
        --hospital-green: #acd9b2;
        --sm: 14px;
        --md: 16px;
        --lg: 18px;
    }
    /* body {
        font-family: "Quicksand", sans-serif;
        margin: 0;
    } */
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
