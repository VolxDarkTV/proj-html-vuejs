<script>
import Card from './social_component/Card.vue';
    export default{
        components:{
            Card,
        },
        data(){
            return{
                cardInfo: [
                    {
                        img: '../../public/images/video2-2x.jpg',
                        title: 'Things & glute workout',
                        subTitle: 'Increase your mobility',

                    },
                    {
                        img: '../../public/images/video7-2x.jpg',
                        title: 'Lisft Firm & perk up',
                        subTitle: 'Feel young again',

                    },
                    {
                        img: '../../public/images/video9-2x.jpg',
                        title: 'Slim & trim your waist',
                        subTitle: 'Shed those extra prouds',

                    },
                ]
            }
        },
    }
</script>

<template>
    <section>

        <div class="d-flex justify-content-end">
            <!-- Left Image -->
            <div class="my_left_image d-flex align-items-center justify-content-center">
                <!-- <img src="../../../public/images/service15-2x.jpg" alt=""> -->
                <!-- Play -->
                <a href="#">
                    <div class="my_circle d-flex justify-content-center align-items-center bg-white rounded-circle p-5">
                        <font-awesome-icon class="my_play fs-4" icon="fa-solid fa-play" />
                    </div>
                </a>
            </div>
    
            <!-- Right Text -->
            <div class="my_right_text d-flex flex-column align-items-center">

                <div class="d-flex flex-column gap-3">

                    <!-- PreTitle -->
                    <span class="my_pre_title">Tune up your workout</span>
    
                    <!-- Title -->
                    <h2>The best health & fitness <br> advice online</h2>
    
                    <!-- Social button -->
                    <div class="d-flex align-items-center gap-2">
                        <!-- img/logo -->
                        <div class="my_yt_logo">
                            <img src="../../../public/images/unnamed.jpg" alt="">
                        </div>
    
                        <!-- preTitle & Button -->
                        <div class="d-flex flex-column gap-1">
                            <span class="my_yt_pre_title">ThemeFusion</span>
                            <!-- YT BTN -->
                            <div class="my_youtube_button d-flex align-items-center gap-1">
                                <p class="fw-bold">YouTube</p>
                                <span>999+</span>
                            </div>
                        </div>
    
                    </div>
    
                    <!-- SubTitle -->
                    <div class="my_sub_title">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod aspernatur consequuntur, ducimus deserunt rerum fuga id hic doloribus similique ut? Dolorem animi sequi porro debitis praesentium, non aliquam hic?
                        </p>
                    </div>

                    <!-- Button YouTube Channel -->
                    <div>
                        <button class="my_yt_button rounded-pill">
                            Visit my YouTube channel
                        </button>
                    </div>

                </div>

            </div>
        </div>

    </section>





    <!-- Card -->
    <section>
        <div class="my_container container">

            <div class="d-flex flex-column gap-4">

                <!-- Mini Title -->
                <div class="d-flex justify-content-between">
                    <!-- Sub Title -->
                    <h5>Lastest articles</h5>
    
                    <!-- More Articles -->
                    <a href="#" class="text-dark">
                        Read all articles 
                        <font-awesome-icon class="fw-bold" icon="fa-solid fa-angle-right" />
                    </a>
                </div>

                <div class="d-flex justify-content-between gap-5">
                    <!-- Card to Component -->
                    
                    <Card v-for="(card, index) in cardInfo" :key="index" :item="card"/>

                </div>
                
            </div>


        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;

// Left
.my_left_image{
    width: 50%;
    border-bottom-right-radius: 40px;
    background-image: url(../../../public/images/service15-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    top: -40px;

    & img {
        border-bottom-right-radius: 40px;
    }
}
.my_circle{
    width: 50px;
    height: 50px;
}
.my_play{
    color: $brandPrimary;
}

// Right
.my_right_text{
    width: 50%;
    padding: 100px;
}
.my_pre_title{
    color: $brandPrimary;
}

.my_yt_logo{
    width: 25px;
}
.my_yt_pre_title{
    font-size: 10px;
    color: $paragraphBrand;
}
.my_youtube_button{
    width: 65px;
    height: 15px;
    background: linear-gradient(to right, red 60%, #fff 40%);
    border: solid $paragraphBrand 0.5px;
    cursor: pointer;
    padding: 2px;

    & p{
        font-size: 8px;
        color: #fff;
    }

    & span{
        font-size: 8px;
        color: $paragraphBrand;
    }
}
.my_sub_title{
    color: $paragraphBrand;
}
.my_yt_button{
    background-color: red;
}
.my_yt_button:hover{
    background-color: $brandSecondary;
}

// My card
.my_container{
    padding: 100px 0;
}
</style>