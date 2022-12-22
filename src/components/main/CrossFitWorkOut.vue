<script>

</script>

<template>
    <section class="my_image">
        <div class="container d-flex flex-column align-items-center gap-2">

            <!-- Play -->
            <a href="#">
                <div class="my_circle d-flex justify-content-center align-items-center bg-white rounded-circle p-5">
                    <font-awesome-icon class="my_play fs-4" icon="fa-solid fa-play" />
                </div>
            </a>

            <!-- Title -->
            <h1 class="text-white">Crossfit workout of the day</h1>

            <!-- Data -->
            <h2 class="my_data fw-bold">November 15th, 2019</h2>

            <!-- All Videos -->
            <a href="#" class="text-white">
                View all videos &rarr;
            </a>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
.my_image{
    padding: 200px;
    background-image:linear-gradient(140deg, rgba(0, 0, 179, 0.7), rgba(161, 0, 70, 0.55)), url(../../../public/images/banner14-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.my_circle{
    width: 50px;
    height: 50px;
}
.my_play{
    color: $brandPrimary;
}
.my_data{
    color: $yellowBrand;
}
</style>