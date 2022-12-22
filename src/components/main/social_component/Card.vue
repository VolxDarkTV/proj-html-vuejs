<script>
    export default{
        props:['item']
    }
</script>

<template>
    <div>
        <div>

            <!-- Img -->
            <div class="my_image">

                <img :src="item.img" alt="">

                <!-- Play -->
                <a href="#" class="my_card_play">
                    <div class="my_circle d-flex justify-content-center align-items-center bg-white rounded-circle p-4">
                        <font-awesome-icon class="my_play fs-5" icon="fa-solid fa-play" />
                    </div>
                </a>
                
            </div>
        
            <!-- info -->
            <div class="d-flex flex-column align-items-center p-3">
                <h5>{{ item.title }}</h5>
                <span class="my_paragraph">{{ item.subTitle }}</span>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../../styles/general.scss' as *;

.my_image{
    width: 400px;
    border-bottom-right-radius: 40px;
    position: relative;

    & img{
        border-bottom-right-radius: 40px;
    }
    & .my_card_play{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
.my_paragraph{
    color: $brandPrimary;
}

.my_circle{
    width: 25px;
    height: 25px;
}
.my_play{
    color: $brandPrimary;
}
</style>