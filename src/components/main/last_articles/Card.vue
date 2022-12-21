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
            <div>

                <!-- Img -->
                <div class="my_image">
                    <img :src="item.img" alt="">
                </div>

                <!-- info -->
                <div class="p-3">
                    <h5>{{item.title}}</h5>
                    <span class="my_paragraph">{{item.subTitle}}</span>
                </div>

            </div>
        </div>

    </div>
     
</template>

<style lang="scss" scoped>
@use '../../../styles/general.scss' as *;

// Card css
.my_image{
    width: 400px;
}
.my_paragraph{
    color: #9d929b;
}
</style>