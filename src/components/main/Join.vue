<script>

</script>

<template>
    <section class="my_image my_container">

        <div class="container d-flex justify-content-start">

            <div class="d-flex flex-column gap-3">
                <!-- Pre Title -->
                <span class="text-danger fw-bold">Join our mailing list today</span>

                <!-- Title -->
                <h2 class="text-white fs-1">Insider offers & flash sales in your <br> inbox every week.</h2>

                <!-- Input -->
                <div class="d-flex gap-4">
                    <input class="my_input bg-white rounded-pill border-0 p-3" type="text" placeholder="Insert Your email...*">

                    <button class="my_button rounded-pill ps-5 pe-5">Subscribe</button>
                </div>

                <!-- Subtitle -->
                <div>
                    <p class="my_paragraph">
                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur <br> adipiscing elit sed porttitor lectus
                    </p>
                </div>
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;

.my_image{
    background-image:linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35), rgba(161, 0, 70, 0.0)), url(../../../public/images/banner1-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.my_container{
    padding: 150px 0;
}
.my_input{
    width: 500px;
}
.my_input::placeholder{
    color: #000;
}
.my_button{
    background-color: #4154ff;
}
.my_paragraph{
    color: #9d929b;
}
</style>