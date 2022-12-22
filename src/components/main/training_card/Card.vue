<script>
    export default{
        props:['item']
    }
</script>

<template>
    <div>
        <div>

            <!-- Card -->
            <!-- Img -->
            <div class="my_image">

                <img :src="item.img" alt="">

                

                <!-- info -->
                <div class="my_card_info d-flex flex-column p-4">
                    <h5 class="text-white fw-bold">Crossfit workout</h5>
                    <span class="my_card_sub fw-bold"> SubTitle </span>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/general.scss' as *;

// Card
.my_image{
    width: 400px;
    border-bottom-right-radius: 40px;
    position: relative;

    & img{
        border-bottom-right-radius: 40px;
    }
   
}
.my_image:hover:after{
    content:'';
    position:absolute;
    left:0; 
    top:0;
    width:100%; 
    height:100%;
    border-bottom-right-radius: 40px;
    background: linear-gradient(to bottom, rgba(0,47,75,0) 0%,rgba(0, 0, 0, 0.7) 100%)
    // mask-image: linear-gradient(to bottom, rgb(145, 0, 203), rgba(161, 0, 113, 0.7));
}

// In Card
.my_card_info{
    position: absolute;
    bottom: 0;
    z-index: 10;
}
.my_card_sub{
    color: $yellowBrand;
}


</style>