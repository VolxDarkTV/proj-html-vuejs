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
        <div class="d-flex align-items-center justify-content-between w-100">

            <!-- Logo -->
            <div class="my_logo">
                <a href="#">
                    <img src="../../public/images/logo.png" alt="logo">
                </a>
            </div>

            <!-- Nav Bar -->
            <nav class="d-flex align-items-center">
                <ul class="d-flex gap-5 align-items-center">
                    <li v-for="link in links" class="text-white">
                        {{link.linkName}}
                    </li>
                </ul>
            </nav>

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
</style>
