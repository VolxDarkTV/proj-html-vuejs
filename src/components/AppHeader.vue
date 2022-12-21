<script>
export default{
    data(){
        return{
            links:[
                {
                    linkName: 'Home',
                    url: '#',
                },
                {
                    linkName: 'Service',
                    url: '#',
                },
                {
                    linkName: 'About',
                    url: '#',
                },
                {
                    linkName: 'Videos',
                    url: '#',
                },
                {
                    linkName: 'Blog',
                    url: '#',
                },
                {
                    linkName: 'Store',
                    url: '#',
                },
            ]
        }
    }
}
</script>

<template>
    <section class="my_header d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between w-100">

            <!-- Logo -->
            <div class="my_logo">
                <a href="#">
                    <img src="../../public/images/logo.png" alt="logo">
                </a>
            </div>

            <!-- Nav Bar Container -->
            <div class="d-flex align-items-center gap-5">
                <!-- Nav Bar -->
                <nav class="d-flex align-items-center">
                    <ul class="d-flex gap-5 align-items-center">
                        <li v-for="link in links" class="text-white d-flex align-items-center gap-2">
                            <span class="fw-bold ">{{link.linkName}}</span>
                            <!-- New Link Condition -->
                            <div class="my_new_link d-flex justify-content-center align-items-center text-dark" v-if="link.linkName === 'Store'">
                                <span>new</span>
                            </div>
                        </li>
                    </ul>
                </nav>
    
                <!-- Button -->
                <button class="my_button rounded-pill">Schedule a workout</button>
    
                <!-- Icon Input -->
                <div class="text-white d-flex gap-4">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.my_header{
    width: 100%;
    height: 100px;
    background-color: #060607;
}
.my_logo{
    width: 200px;
}
.my_new_link{
    padding: 5px;
    border-radius: 5px;
    background-color: #fff941;
}
.my_button{
    background-color: #4154ff;
}
.my_button:hover{
    background-color: #ff414b;
}
</style>
