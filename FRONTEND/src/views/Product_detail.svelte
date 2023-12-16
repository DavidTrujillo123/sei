<script>
    export let det_pro;

    const closeWindow = ()=>{
        det_pro = null;
    }
</script>

<aside class="product-detail">
    <div class="product-detail-close">
        <img src="../public/resource/iconos/icon_close.png" alt="close" />
    </div>
    <img
        src={det_pro.pro_img}
        alt={det_pro.pro_name}
    />
    <!-- <div class="circle">
        <div></div>
        <div></div>
        <div></div>
    </div> -->
    <div class="product-info">
        <p>{det_pro.pro_price}</p>
        <p>{det_pro.pro_name}</p>
        <p>
            {det_pro.pro_desciption}
        </p>
        <button class="primary-button add-to-cart-button" on:click={closeWindow}>
            <img src="../public/resource/iconos/bt_add_to_cart.svg" alt="add to cart" />
            Add to cart
        </button>
    </div>
</aside>

<style>
    .product-detail {
        width: 350px;
        padding-bottom: 24px;
        position: fixed;
        right: 0;
        background-color: var(--white);
    }
    .product-detail-close {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--white);
        width: 14px;
        height: 14px;
        position: absolute;
        top: 24px;
        left: 24px;
        z-index: 2;
        padding: 12px;
        border-radius: 50%;
    }
    .product-detail-close:hover {
        cursor: pointer;
    }
    .product-detail > img:nth-child(2) {
        width: 100%;
        height: 360px;
        object-fit: cover;
        border-radius: 0 0 20px 20px;
    }
    .circle {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circle div {
        width: 10px;
        height: 10px;
        background-color: var(--text-input-field);
        border-radius: 50%;
        margin-left: 10px;
    }
    .circle div:nth-child(1) {
        background-color: var(--very-light-pink);
    }
    .product-info {
        margin: 24px 24px 0 24px;
    }
    .product-info p:nth-child(1) {
        font-weight: bold;
        font-size: var(--md);
        margin-top: 0px;
        margin-bottom: 4px;
    }
    .product-info p:nth-child(2) {
        color: var(--very-light-pink);
        font-size: var(--md);
        margin-top: 0px;
        margin-bottom: 36px;
    }
    .product-info p:nth-child(3) {
        color: var(--very-light-pink);
        font-size: var(--sm);
        margin-top: 0px;
        margin-bottom: 36px;
    }
    .primary-button {
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
    .add-to-cart-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 640px) {
        .product-detail {
            width: 100%;
        }
    }
</style>
