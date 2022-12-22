<script>
import { store } from '../store';
export default{
    data(){
        return{
            store,
            brandInfo:
                {
                    info: 'Ac aliquam neque sagittis diam faucibus vitae purus turnis chasellus Pellentesque consectetur amot nurus iltricos mauris',
                },
            
            recentPosts:[
                {
                    name: 'The best protein shake',
                },
                {
                    name: 'Ultimate cardio workout',
                },
                {
                    name: 'New iuices available now',
                },
                {
                    name: 'Tips to find training partners',
                },
                {
                    name: '20 best healthy recipes',
                },
            ]
        }
    }
}
</script>

<template>
    <section class="my_footer">

        <div class="container my_container_footer">

            <!-- Footer -->
            <div class="d-flex justify-content-between">
    
                <!-- Brand Info -->
                <div class="my_logo d-flex flex-column align-items-center gap-4">

                    <div class="d-flex flex-column gap-4">
                        
                        <!-- logo -->
                        <a href="#">
                            <img src="../../public/images/logo.png" alt="logo">
                        </a>
                        <!-- Paragraph -->
                        <p class="my_paragraph text-center">
                            {{ brandInfo.info }}
                        </p>

                    </div>

                    <!-- Socials -->
                    <div>
                        <ul class="my_brads d-flex gap-3" >
                            <li>
                                <a href="#">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <font-awesome-icon :icon="['fab', 'twitter']" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <font-awesome-icon :icon="['fab', 'youtube']" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <font-awesome-icon :icon="['fab', 'instagram']" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
                <!-- Recent Posts -->
                <div class="d-flex flex-column align-items-center gap-3">

                    <!-- Title -->
                    <h5 class="text-white">RECENT POSTS</h5>

                    <!-- List -->
                    <ul class="d-flex flex-column align-items-center gap-4">
                        <li v-for="(recentPost, index) in recentPosts" :key="index">

                            <font-awesome-icon class="fw-bold text-white" icon="fa-solid fa-angle-right" />

                            <span class="text-white ps-1">
                                {{ recentPost.name }}
                            </span>

                        </li>
                    </ul>

                </div>

                <!-- Contact Us -->
                <div class="d-flex flex-column align-items-center">

                    <!-- Title -->
                    <h5 class="text-white">CONTACT INFORMATIONS</h5>

                    <!-- Address -->
                    <span class="my_address p-4">{{ store.Address }}</span>

                    <!-- Mobile -->
                    <span class="text-white">
                        <span class="fw-bold">Mobile:</span>
                        {{ store.Mobile }}
                    </span>

                    <!-- Email -->
                    <span class="text-white">
                        <span class="fw-bold">Email:</span>
                        {{ store.Email }}
                    </span>

                </div>
    
            </div>
            
            
            
        </div>
        <!-- Copiright -->
        <div class="d-flex align-items-center justify-content-center border-top border-dark p-3">
            <p class="my_copyright">
                &copy; Copyright 2012 - 2020 | Avada theme by <span class="text-white">ThemeFusion</span> | All rights reserved | Powered by <span class="text-white">WordPress</span>
            </p>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.my_footer{
    background-color: #060607;
}
.my_container_footer{
    padding: 100px 0;
}
.my_logo{
    width: 200px;
}
.my_paragraph{
    color: #99989b;
}
.my_brads li a{
    color: $brandSecondary;
}
.my_address{
    color: #c4c3c6;
}
.my_copyright{
    color: #717789;
}
</style>
