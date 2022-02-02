
<template>
<div id="swiper-coverflow">
    <div class="flex flex-col justify-center items-center h-headmin w-screen bg-white-dark">
        <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'3'" :coverflowEffect='{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true
        }' :pagination="false" class="mySwiper">
        <swiper-slide><Video1 title=Liziki-Video /></swiper-slide>
        <swiper-slide><Video1 title=UnautreVideo /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide>
        <swiper-slide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide>
        </swiper>


    </div>
</div>

</template>


<script>

// #region Import Swiper

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

//Swiper styles
import 'swiper/swiper-bundle.min.css';
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);

//#endregion


import Video1 from '@/components/videoSlideItem.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Video1
  },
  data() {
    return {
    }
  },
  methods: {

  }

}
</script>

<style scoped>

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


</style>