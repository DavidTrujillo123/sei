<script>

</script>

<aside class="product-detail">
    <div class="title-container">
        <img src="../public/resource/iconos/flechita.svg" alt="arrow">
        <h1 class="title">Shopping cart</h1>
    </div>
        <div class="my-order-content">
        </div>
        <div class="shopping-card">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike">
            </figure>
            <p>Bike</p>
            <p>$120.00</p>
            <img src="../public/resource/iconos/icon_close.png" alt="close">
        </div>
        <div class="shopping-card">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike">
            </figure>
            <p>Bike</p>
            <p>$120.00</p>
            <img src="../public/resource/iconos/icon_close.png" alt="close">
        </div>
        <div class="shopping-card">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike">
            </figure>
            <p>Bike</p>
            <p>$120.00</p>
            <img src="../public/resource/iconos/icon_close.png" alt="close">
        </div>
        <div class="shopping-card">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike">
            </figure>
            <p>Bike</p>
            <p>$120.00</p>
            <img src="../public/resource/iconos/icon_close.png" alt="close">
        </div>
        <div class="order">
            <p>
                <span>Total</span>
            </p>
            <p>$560.00</p>
        </div>
        <button class="primary-button">
            Checkout
        </button>
</aside>

<style>
    .product-detail{
        background-color: white;
        box-sizing: border-box;
        width: 350px;
        padding:24px;
        position: absolute;
        right: 0;
        top: 55px;
    }
    .title{
        font-size: var(--lg);
        font-weight: bold;
    }
    .title-container{
        display: flex;

    }
    .title-container img{
        display: flex;  
        transform: rotate(180deg);
        margin-right: 14px; 
    }
    .my-order-content{
        display: flex;
        flex-direction: column;
    }
    .order{
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 16px;
        align-items: center;
        background-color: var(--text-input-field);
        margin-bottom: 24px;
        border-radius: 8px;
        padding: 0 24px ;
    }
    .order p:nth-child(1){
        display: flex;
        flex-direction: column;
        font-weight: bold;
    }
    .order p span:nth-child(1){
        font-size: var(--md);
    }
    .order p:nth-child(2){
        text-align: end;
        font-weight: bold;
    }
    .shopping-card{
        display: grid;
        grid-template-columns: auto 1fr auto auto auto;
        gap: 16px;
        margin-bottom: 24px;
        align-items: center;
    }
    .shopping-card p:nth-child(2){
        color: var(--very-light-pink)
    }
    .shopping-card p:nth-child(3){
        font-size: var(--md);
        font-weight: bold;
    }
    .shopping-card figure{
        margin: 0;
    }
    .shopping-card figure img{
        object-fit: cover;
        width: 70px;
        height: 70px;
        border-radius: 20px;
    }
    .primary-button{
        background-color:var(--hospital-green);
        border-radius: 8px;
        border: none;
        color: var(--white);
        width: 100%;
        height: 48px;
        cursor: pointer;
        font-size: var      (--md);
        font-weight: bold;
    }
    @media (max-width:640px){
    .product-detail{
        width: 100%;
    }
}
</style>