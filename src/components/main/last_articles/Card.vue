<script>
    export default{
        props:['item'],
        data(){
            return{

            }
        },
    }
</script>

<template>
    

    <div>

        <!-- Card to Component -->

        <div>

            <!-- Img -->
            <div class="my_image">
                <img class="my_image_mask" :src="item.img" alt="">
            </div>

            <!-- info -->
            <div class="p-3">
                <h5>{{item.title}}</h5>
                <span class="my_paragraph">{{item.subTitle}}</span>
            </div>

        </div>


    </div>
     
</template>

<style lang="scss" scoped>
@use '../../../styles/general.scss' as *;

// Card css
.my_image{
    width: 400px;
    position: relative;
}
.my_image:hover:after{
    content:'';
    position:absolute;
    left:0; 
    top:0;
    width:100%; 
    height:100%;
    background: linear-gradient(to bottom, rgba(0,47,75,0) 0%,rgba(99, 24, 228, 0.7) 100%)
    // mask-image: linear-gradient(to bottom, rgb(145, 0, 203), rgba(161, 0, 113, 0.7));
}
.my_paragraph{
    color: $paragraphBrand;
}
</style>