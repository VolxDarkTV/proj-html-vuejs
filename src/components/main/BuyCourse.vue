<script>

</script>

<template>
    <section class="my_image">
        <div class="container">
            
            <div class="d-flex flex-column align-items-center gap-5">

                <!-- Title -->
                <div>
                    <h1 class="text-white text-center">
                        "I've failed over and over again in my life. <br> And that is why i succeded."
                    </h1>
                </div>

                <!-- Paragraph -->
                <div>
                    <p class="fs-4 text-white text-center">
                        Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed massa <br> in ipsum eros, tristique. Gravida suspendisse etiam in iaculis
                    </p>
                </div>

                
                <!-- Button -->
                <button class="my_button w-25 rounded-pill">
                    Buy Avada today 
                    <font-awesome-icon class="fw-bold" icon="fa-solid fa-angle-right" />
                </button>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;

.my_image{
    padding: 300px;
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.0), rgba(0, 0, 0, 0.95)), url(../../../public/images/banner2-2x.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.my_button{
    background-color: #4154ff;
}
.my_button:hover{
    color: black;
    background-color: #ffffff;
}
</style>