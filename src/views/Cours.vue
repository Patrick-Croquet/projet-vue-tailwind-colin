<template>
<div id="cours">

    <div class="flex-col-center h-headmin w-screen bg-white-dark">

        <swiper :effect="'coverflow'" :centeredSlides="true" :slidesPerView="'3'"
        :coverflowEffect='{"rotate": 60,"stretch": 0, "depth": 100,"modifier": 1,"slideShadows": false}'
        :pagination="false" :mousewheel="true" :keyboard="true" :navigation="swipNav" :breakpoints="swipBP" ref="mySwiper" class="mySwiper transition-200">

        <swiper-slide><CoursSlideItem title="Rechercher un cours"
        img="https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" @click="openSearch()" /></swiper-slide>

        <swiper-slide><CoursSlideItem title="Cours Vidéos" img="https://images.pexels.com/photos/6325978/pexels-photo-6325978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></swiper-slide>
        <swiper-slide><CoursSlideItem title="Vie Quotidienne" img="https://images.pexels.com/photos/2977435/pexels-photo-2977435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></swiper-slide>
        <swiper-slide><CoursSlideItem title="Vocabulaire" img="https://images.pexels.com/photos/544115/pexels-photo-544115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></swiper-slide>
        <swiper-slide><CoursSlideItem title="Prononciation" img="https://images.pexels.com/photos/4387718/pexels-photo-4387718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></swiper-slide>
        <swiper-slide><CoursSlideItem title="Culture Vietnamienne" img="https://images.pexels.com/photos/2044773/pexels-photo-2044773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></swiper-slide>
        <swiper-slide><CoursSlideItem title="Cuisine" img="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" /></swiper-slide>
                <!-- <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div> -->
                <div class="prev absolute left-5
                      h-20 w-10 z-10000 sm:hidden  font-beVietnam7 cursor-pointer
                      dark:text-myWhite text-myBlue-500">&lt;--</div>
                <div class="next absolute right-5
                      h-20 w-10 z-10000 sm:hidden font-beVietnam7 cursor-pointer
                      dark:text-myWhite text-myBlue-500">--&gt;</div>
        </swiper>

    </div>

    <transition name="fadeMask">
            <Mask v-if=showMask show=true @disableShow="show=false" />
    </transition>

    <Footer />
</div>

</template>

<script>
    import Mask from '@/components/Mask.vue';
    import Footer from '@/components/Footer.vue';
    import CoursSlideItem from '@/components/coursSlideItem.vue';

// Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
//Swiper styles
    import 'swiper/swiper-bundle.min.css';
    import "swiper/components/effect-coverflow/effect-coverflow.min.css";
    // import "swiper/components/pagination/pagination.min.css"
    // import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
    import SwiperCore, {EffectCoverflow, Mousewheel, Keyboard, Navigation} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Mousewheel, Keyboard, Navigation]);

//#endregion
export default {
    data(){
        return{
          showMask: null,
          //Swiper's Data
          swipBP: {
            0 : {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10
            }
          },
          swipNav:{
            // prevEl: ".swiper-cust-prev",
            // nextEl: ".swiper-cust-next",
            prevEl: ".prev",
            nextEl: ".next",
          }
        }
    },
    components: {
                Footer,
                Swiper,
                SwiperSlide,
                CoursSlideItem,
                Mask
    },
    methods: {
      openSearch(){
        this.$store.commit('togMaskActive');
      },
    },
    watch: {
      showMask(){
        if(this.showMask == false){
          document.querySelector('.swiper-container').style.opacity = "1";
        } else if (this.showMask == true){
          document.querySelector('.swiper-container').style.opacity = "0";
        }
      }
    },
    mounted(){
      this.$store.watch((state) => state.maskActive,
       () =>{
        this.showMask = this.$store.state.maskActive;
      })
    }
}
</script>

<style lang="css" scoped>

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img{
  display: block;
  width: 100%;
  height:100%;
}

.swiper-slide div{
    border-radius: 100%;
}

.swiper-button-prev{
  color: #4893bd;
}

.swiper-button-next{
  color: #4893bd;
  margin-right: 1rem;
}

/*
.fade-enter-active{
  transition: opacity .5s linear ;
}

.fade-leave-active{
  transition: opacity 2s ease;
}

.fade-enter-from{
  opacity: 0;
}

.fade-enter-to{
  opacity:0.5;
}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
} */
</style>