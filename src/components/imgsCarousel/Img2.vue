<template>
<img v-show="isDesktop" class="swip-img filter brightness-75" src="@/assets/imgs/1920/2-1920.jpg">
<img v-show="isTablet" class="swip-img filter brightness-75" src="@/assets/imgs/720/2-720.jpg">
<img v-show="isMobile" class="swip-img filter brightness-75" src="@/assets/imgs/540/2-540.jpg">

</template>



<script>


export default {
    name: 'Img1',
    data: function(){
        return{
            isDesktop: false,
            isTablet: false,
            isMobile: false
        }
    },
    methods:{
        chooseImgs(){
            // console.log(" ma fenetre fait .. " + window.innerWidth);
            if(window.matchMedia("(min-width: 1024px)").matches){
                // console.log('isDesktop is true !!!');
                this.isDesktop = true;
            }
            else if (window.matchMedia('(min-width: 540px)').matches && window.matchMedia('(max-width: 1024px)').matches){

                this.isTablet = true;
                // console.log("is Tablet ? = " + this.isTablet)
            }
            else if (window.matchMedia('(min-width: 100px)').matches && window.matchMedia('(max-width: 540px)').matches){

                this.isMobile = true;
                // console.log("is Mobile ? = " + this.isMobile)
            }
        }

    },
    created: function(){
        this.chooseImgs()
        }
}
</script>


<style lang="css" scoped>
.swip-img{
    width: 100vw;
    height: auto;
}
</style>