<script>

</script>

<template>
    <section class="my_jumbo">

        <!-- Demos & Price -->
        <div class="my_demos_price d-flex flex-column gap-3">
            <!-- Demos -->
            <div class="my_demos_price_boxs d-flex flex-column align-items-center justify-content-center gap-2 p-2">
                <font-awesome-icon class="text-dark fs-1" icon="fa-solid fa-window-restore" />
                <span>Demos</span>
            </div>
            <!-- Price -->
            <div class="my_demos_price_boxs d-flex flex-column align-items-center justify-content-center gap-2 p-2">
                <span class="my_price fs-2 fw-bold"> 
                    <span class="my_price_dolar fs-5">$</span> 
                    39
                </span>
                <span>On Sale</span>
            </div>
        </div>

        <div class="d-flex justify-content-between container">

            <!-- Left -->
            <div class="my_left_container container d-flex justify-content-start">
    
                <!-- info -->
                <div class="d-flex flex-column gap-4">
                    <!-- PreTitle -->
                    <span class="my_pretitle fw-bold">Certified fitness professional</span>
    
                    <!-- Title -->
                    <h2 class="text-white fw-bold fs-1">Thake control of your health</h2>
    
                    <!-- Wave -->
                    <span>Wave</span>
    
                    <!-- SubTitle -->
                    <p class="my_paragraph fw-bold">
                        Curabitur non nulla sit amet nisI tempus convallis quis ac lectus dolor sit amet.
                    </p>
    
                    <!-- Buttons -->
                    <div class="d-flex gap-3">
                        <button class="my_yt_button rounded-pill ps-4 pe-4">Visit my YouTube channel</button>
                        <button class="my_buy_button rounded-pill ps-4 pe-4">
                            Buy Avada today
                            <font-awesome-icon class="fw-bold" icon="fa-solid fa-angle-right" />
                        </button>
                    </div>
                </div>
    
            </div>
    
            <!-- Right -->
            <div class="my_right_container d-flex justify-content-end">
    

                <!-- Play -->
                <a href="#" class="my_card_play">
                    <div class="my_circle d-flex justify-content-center align-items-center bg-white rounded-circle p-5">
                        <font-awesome-icon class="my_play fs-3" icon="fa-solid fa-play" />
                    </div>
                </a>

    
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
// Demos & Price
.my_demos_price{
    width: 100px;
    position: absolute;
    top: 50px;
    right: 20px;

    & .my_demos_price_boxs{
        width: 100px;
        height: 100px;
        background-color: #fff;
        border-radius: 20px;
    }

}
// Price
.my_price{
    position: relative;
    color: #65bc7b;
}
.my_price_dolar{
    position: absolute;
    left: -15px;
    top: 0;
}

.my_jumbo{
    position: relative;
    padding-top: 100px;
    padding-bottom: 200px;
    background: linear-gradient(to right, rgb(0, 0, 0, 0.95) 40%, rgb(0, 0, 0, 0)) , url(../../../public/images/slider82x-scaled.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}

// Left
.my_pretitle{
    color: $brandSecondary;
}
.my_paragraph{
    color: $paragraphBrand;
}

// Buttons
.my_yt_button{
    background-color: $brandPrimary;
}
.my_yt_button:hover{
    background-color: $brandSecondary;
}
.my_buy_button{
    background-color: #000;
}
.my_buy_button:hover{
    background-color: #fff;
    color: #000;
}

// Right
.my_right_container{
    width: 100%;
    position: relative;
}

// Play BTN
.my_card_play{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.my_circle{
    width: 25px;
    height: 25px;
}
.my_play{
    color: $brandPrimary;
}
</style>