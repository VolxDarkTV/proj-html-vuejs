<script>
import { def } from '@vue/shared';
import Card from './training_card/Card.vue';

export default{
    components:{
        Card,
    },
    data(){
            return{
                cardInfo: [
                    {
                        img: '../../../public/images/service6-2x.jpg',
                        title: 'The best protein shake',
                        subTitle: 'By admin | November 26th, 2019 | Gym',

                    },
                    {
                        img: '../../public/images/box1-2x.jpg',
                        title: 'Ultimate cardio workout',
                        subTitle: 'By admin | November 26th, 2019 | Gym',

                    },
                    {
                        img: '../../public/images/box3-2x.jpg',
                        title: 'New juices aviable now',
                        subTitle: 'By admin | November 26th, 2019 | Gym',

                    },
                ]
            }
        },
}
</script>

<template>
    <section class="my_back position-relative">

        <!-- Card Component -->
        <div class="my_card_container container d-flex justify-content-center gap-5">
            
            <Card v-for="(card, index) in cardInfo" :key="index" :item="card"/>

        </div>



        <div class="container d-flex flex-column align-items-center gap-2">
            <!-- Conversation -->
            <h2 class="text-white text-center">
                "How you respond to the challenge in the second half <br> will determine what you become after the game, <br> whether you are a winner or a loser"
            </h2>

            <!-- Wave -->
            <span class="my_data fw-bold">WAVE</span>

            <!-- Profile -->
            <div class="d-flex align-items-center gap-3">

                <!-- img -->
                <div class="my_profile_img rounded-circle">
                    <img class="rounded-circle" src="../../../public/images/avatar-1-2x.jpg" alt="">
                </div>

                <!-- Name -->
                <div>
                    <span class="fw-bold text-white">Brad Jhonson</span>
                </div>

                <!-- Location -->
                <div>
                    <span class="my_paragraph fw-bold">Las Vegas</span>
                </div>

            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
.my_card_container{
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
}
// Card
.my_paragraph{
    color: $brandPrimary;
}
.my_back{
    padding: 200px 0;
    padding-top: 400px;
    background:linear-gradient(150deg, rgba(0, 0, 203, 1), rgb(201, 1, 23, 1));
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.my_data{
    color: $yellowBrand;
}
.my_profile_img{
    width: 50px;
}

.my_paragraph{
    color: $paragraphBrand;
}
</style>