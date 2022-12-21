<script>
import Card from './last_articles/Card.vue';
    export default{
        components:{
            Card,
        },
        data(){
            return{
                cardInfo: [
                    {
                        img: '../../public/images/blog4-2x.jpg',
                        title: 'The best protein shake',
                        subTitle: 'By admin | November 26th, 2019 | Gym',

                    },
                    {
                        img: '../../public/images/blog1-2x.jpg',
                        title: 'Ultimate cardio workout',
                        subTitle: 'By admin | November 26th, 2019 | Gym',

                    },
                    {
                        img: '../../public/images/blog3-2x.jpg',
                        title: 'New juices aviable now',
                        subTitle: 'By admin | November 26th, 2019 | Gym',

                    },
                ]
            }
        },
    }
</script>

<template>
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
.my_container{
    padding: 100px 0;
}
</style>