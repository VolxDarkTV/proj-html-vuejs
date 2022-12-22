<script>
   
</script>

<template>
    <section class="my_image my_container">

        <div class="container d-flex justify-content-start">

            <div class="d-flex flex-column gap-3">
                <!-- Pre Title -->
                <span class="my_text_join fw-bold">Join our mailing list today</span>

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

    <!-- Card container -->
    <section class="my_container">
        <div class="container">

            <!-- Component with card -->
            <div class="d-flex justify-content-between gap-5">

                <div class="my_card rounded-1 d-flex flex-column align-items-center gap-2 p-5">
                    <!-- Icon -->
                    <font-awesome-icon class="text-white fs-1" icon="fa-solid fa-heart-pulse" />
                    <!-- Title -->
                    <h2 class="text-white">Team training</h2>

                    <!-- Subtitle -->
                    <span class="my_subtitle">Find a partner</span>

                    <!-- Paragraph -->
                    <p class="my_paragraph text-center pt-5 pb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veritatis provident recusandae reprehenderit, odio, harum, atque est quidem inventore expedita omnis eum. Porro earum autem commodi saepe laboriosam sint fugiat.
                    </p>

                    <!-- Link -->
                    <a href="#" class="text-white">
                        Find a partner
                        <font-awesome-icon class="fw-bold" icon="fa-solid fa-angle-right" />
                    </a>
                </div>

                <div class="my_card rounded-1 d-flex flex-column align-items-center gap-2 p-5">
                    <!-- Icon -->
                    <font-awesome-icon class="text-white fs-1" icon="fa-solid fa-dumbbell" />
                    <!-- Title -->
                    <h2 class="text-white">Crossfit workout</h2>

                    <!-- Subtitle -->
                    <span class="my_subtitle">Push your limits</span>

                    <!-- Paragraph -->
                    <p class="my_paragraph text-center pt-5 pb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veritatis provident recusandae reprehenderit, odio, harum, atque est quidem inventore expedita omnis eum. Porro earum autem commodi saepe laboriosam sint fugiat.
                    </p>

                    <!-- Link -->
                    <a href="#" class="text-white">
                        Find a partner
                        <font-awesome-icon class="fw-bold" icon="fa-solid fa-angle-right" />
                    </a>
                </div>

                <div class="my_card rounded-1 d-flex flex-column align-items-center gap-2 p-5">
                    <!-- Icon -->
                    <font-awesome-icon class="text-white fs-1" icon="fa-solid fa-weight-scale" />
                    <!-- Title -->
                    <h2 class="text-white">Weight loss plan</h2>

                    <!-- Subtitle -->
                    <span class="my_subtitle">Shed those pounds</span>

                    <!-- Paragraph -->
                    <p class="my_paragraph text-center pt-5 pb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veritatis provident recusandae reprehenderit, odio, harum, atque est quidem inventore expedita omnis eum. Porro earum autem commodi saepe laboriosam sint fugiat.
                    </p>

                    <!-- Link -->
                    <a href="#" class="text-white">
                        Find a partner
                        <font-awesome-icon class="fw-bold" icon="fa-solid fa-angle-right" />
                    </a>
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
.my_text_join{
    color: $brandSecondary;
}
.my_container{
    padding: 150px 0;
    background-color: #000;
}
.my_input{
    width: 500px;
    color: #000;
}
.my_input::placeholder{
    color: #000;
}
.my_button{
    background-color: $brandPrimary;
}

// Card container
.my_card{
    width: calc(100% / 3 - 3rem);
    border: solid $brandPrimary 2px;
}
.my_paragraph{
    color: $paragraphBrand;
}
.my_subtitle{
    color: $yellowBrand;
}

</style>