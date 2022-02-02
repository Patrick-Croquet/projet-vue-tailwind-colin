<template>
  <!-- <div id="Index" :class="(mode == 'dark') ? 'dark' : 'light'"> -->
  <div id="Index" class="dark:bg-myDark-200 dark:text-myWhite">

    <!-- <button @click=log> Log </button> -->
    <!-- #region Swiper-->

    <swiper id="swiper"
        :slides-per-view="1"
        :space-between="0"
        :initialSlide='1'
        loop
        autoplay
        :speed="4000"
        effect="fade"
    >

        <swiper-slide id="sl1"><Img1 :key="imgKey" /></swiper-slide>
        <swiper-slide id="sl2"><Img2 :key="imgKey" /></swiper-slide>
        <swiper-slide id="sl3"><Img3 :key="imgKey" /></swiper-slide>

    </swiper>

    <!-- #endregion  -->

    <Slogan>Apprends le Vietnamien a la maison</Slogan>

    <Reseaux></Reseaux>

    <Blueshape></Blueshape>

    <main>
      <!-- #region Contenu 1 -->
      <section>
          <div class="w-full flex-center my-10">
              <div class="w-5/6 flex flex-col justify-center text-justify font-beVietnam4 lg:w-5/6 text-lg">
                  <h2 class="text-h2 ">Pourquoi apprendre le vietnamien chez soi ?</h2>


                  <p class="text-p">Quelles que soient vos motivations pour apprendre cette magnifique langue, le vietnamien reste profondément différent du français. Rempli de symboles, et de subtilités, il n’est pas toujours judicieux de commencer l’apprentissage
                      en immersion. Déjà parce que vous ne comprendrez rien, pas même les phrases les plus basiques, mais aussi car vous perdrez beaucoup de temps dans vos précieux voyages.</p>
                  <p>Le vietnamien étant une langue tonale, comprendre sa structure, s’exercer à prononcer correctement ses mots sont deux choses essentielles pour bien démarrer.</p>
              </div>
          </div>

      </section>
      <!-- #endregion -->

      <!-- #region Contenu 2 -->
      <section>
          <div class="w-full flex-center mb-10">
              <div class="w-5/6">
                  <h2 class="text-h2">Plusieurs objectifs, un seul site</h2>
                  <div class="flex-center">
                      <div class="width-full border border-double border-gray-800 shadow-xl rounded-md overflow-hidden my-16">
                          <iframe class='max-w-full' width="560" height="315" src="https://www.youtube.com/embed/oPDhQKBrVN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                              encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                      </iframe>
                      </div>
                  </div>
                  <p class="my-8 text-p"> Le site est né en 2021, après avoir moi-même fait mes premiers pas en vietnamien. Il a pour but de fournir un outil efficace pour apprendre le vietnamien. Quand j'ai commencé à apprendre la langue je me suis vite rendu compte que
                      peu de ressources sont disponibles en Français. Ou alors de vieux livres, de l'époque coloniale. Très intéressants, mais peu efficaces pour apprendre la langue <em>vivante</em> d'aujourd'hui.
                  </p>
                  <p class="text-p">
                      Le vietnamien.fr est donc un lieu pour apprendre la langue via des cours et exercices qui seront le plus interactif possible. Au programme, des exercices audios ( puisque la prononciation est indissociable de la langue), des vidéos interactives, des quizzs.
                      Vous aurez aussi la possibilté de prendre contact avec des professeurs particuliers, des vietnamiens locaux. Un système de mentorat est aussi possible avec d'autres apprenants qui ont un niveau plus élevé en vietnamien.
                  </p>
              </div>
          </div>
      </section>
      <!-- #endregion -->
    </main>

    <Footer/>
  </div>
</template>

<script>

  import Slogan from '@/components/Slogan.vue';

  //Swiper
  import SwiperCore, { Autoplay, EffectFade } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';

  //Swiper styles
  import 'swiper/swiper-bundle.min.css';
  import 'swiper/components/effect-fade/effect-fade.min.css';

  SwiperCore.use([Autoplay, EffectFade]);

  //Images responsives
  import Img1 from '../components/imgsCarousel/Img1.vue';
  import Img2 from '../components/imgsCarousel/Img2.vue';
  import Img3 from '../components/imgsCarousel/Img3.vue';

  // Shape version Tablet, Desktop
  import Blueshape from '../components/blueShape.vue';
  // Bulle Réseaux Sociaux, Version Mobile
  import Reseaux from '../components/Reseaux.vue';
  //Footer
  import Footer from '@/components/Footer.vue';

  export default {
    name: 'Index',
    components:{
        Slogan,
        Img1, Img2, Img3,
        Swiper, SwiperSlide,
        Blueshape, Reseaux,
        Footer,
    },
    data(){
        return{
          image1: '<img class="swip-img" src="@/assets/imgs/1920/1-1920.jpg">',
          show: '',
          imgKey: 0
        }
    },
    methods: {
      reloadSwip(){
        this.imgKey += 1;
      },
    },
    mounted(){
      window.onresize = this.reloadSwip;
    }
  }
</script>

<style lang="css" scoped>

</style>