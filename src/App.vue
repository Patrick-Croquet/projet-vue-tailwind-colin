<template>
  <div id="nav" class="h-24 transition-500 bg-myDark-100 flex p-1 sm:font-beVietnam6 text-xs lg:text-lg lg:font-beVietnam7 border-b dark:border-myBlue-500 shadow-customBlue">

      <router-link to="/" class="w-2/6 lg:w-1/6 flex justify-center">
        <div id="logo" class="w-full"></div>
      </router-link>

      <!-- #region Mobile -->
                <!-- to='/m-menu'  -->
      <router-link to='/m-menu' class='sm:hidden w-2/6 flex justify-center'>
        <div id="btn-m-menu" class="w-1/5"></div>
      </router-link>
      <router-link to='/login' class='sm:hidden w-2/6 flex justify-center'>
        <div id="btn-m-login" class="w-1/4"></div>
      </router-link>
      <BtnSwitchTheme ref="btnTh" :show="show" />
      <!-- #endregion -->

      <!-- #region Tablet-->
        <div id="sm-btns-header" class="hidden sm:grid lg:hidden  w-9/12 p-3 gap-3 m-2">

          <router-link to='/mentor' id="btn-men-tab1" class=" py-1
                                  flex-center
                                  text-white font-bold cursor-pointer
                                  shadow-customRed rounded">Contacter un mentor</router-link>

          <router-link to='/forum' id="btn-men-tab2" class=" py-1
                                  flex-center
                                  text-white font-bold cursor-pointer
                                  shadow-customYellow rounded">Forum</router-link>

          <router-link to='/login' id="btn-men-tab3" class=" py-1
                                  flex-center
                                  text-white font-bold cursor-pointer
                                  shadow-customRed rounded">Mon Compte</router-link>

          <router-link to='/cours' id="btn-men-tab4" class=" py-1
                                  flex-center
                                  text-white font-bold cursor-pointer
                                  shadow-customGreen rounded">Cours</router-link>

          <router-link to='/exercices' id="btn-men-tab5" class=" py-1
                                  flex-center
                                  text-white font-bold cursor-pointer
                                  shadow-customBlue rounded">Exercices</router-link>


          <BtnSwitchTheme ref="btnTh" :show="show" />


        </div>

      <!-- #endregion -->

      <!-- #region Desktop -->

      <div id="lg-btns-header" class="hidden lg:flex w-4/5 justify-around items-center list-none text-white ">

          <router-link to="/mentor"><li class="hover:text-myRed-500 cursor-pointer
                transition-200 transform hover:translate-y-2">Contacter un Mentor</li></router-link>

          <router-link to="/cours"><li class="hover:text-myBlue-500 cursor-pointer
                transition-200 transform hover:translate-y-2">Les Cours</li></router-link>

          <router-link to="/exercices"><li class="hover:text-myGreen-500 cursor-pointer
                transition-200 transform hover:translate-y-2">Les Exercices</li></router-link>

          <router-link to="/forum"><li class="hover:text-myYellow-500 cursor-pointer
                transition-200 transform hover:translate-y-2">Le Forum</li></router-link>

          <router-link to="login"><li class="hover:text-myRed-500 cursor-pointer
                transition-200 transform hover:translate-y-2">Mon compte</li></router-link>
          <BtnSwitchTheme ref="btnTh" :show="show" />
      </div>
      <!-- #endregion  -->
  </div>

  <div>
    <transition name="fade">
      <ScrollTop class="fixed bottom-10 right-5 h-24 w-10 cursor-pointer" v-show="obsIsVisible"/>
    </transition>
  </div>

    <!-- <transition name="slide">
  <router-view/>
    </transition> -->

  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <component :is="Component"/>
    </transition>
  </router-view>

</template>


<script>
import BtnSwitchTheme from '@/components/Btn-switch-theme.vue';
import ScrollTop from '@/components/ScrollTop.vue';

export default {
  data(){
    return{
      observer: null,
      obsIsVisible : false
    }
  },
  components:{
    BtnSwitchTheme,
    ScrollTop
  },
  methods:{
    observeHeader(entries){
      if(entries[0]['isIntersecting'] === false){
        this.obsIsVisible = true;
      } else if (entries[0]['isIntersecting'] === true){
        this.obsIsVisible = false;
      }
    }
  },
  created(){
    this.observer = new IntersectionObserver(
      this.observeHeader,
      {
        root: null,
        threshold: 1.0,
      }
    );
  },
  mounted(){
    this.observer.observe(document.querySelector('#nav'))
  }
}
</script>


<style lang="css" scoped>

/* #region *** Images *** */
  #logo{
    background: url('./assets/logos/logo.svg') no-repeat center center/contain;
  }
  #btn-m-menu{
      background: url('./assets/icons/menu.svg') no-repeat center center/contain;
  }
  #btn-m-login{
      background: url('./assets/icons/login.svg') no-repeat center center/contain;
  }
  #btn-men-tab3 {
      grid-area: 1 / 3 / 3 / 3;
  }
/* #endregion */

/*#region **** Transitions ***** */

@import './style/transitions.css';

/*#endregion */

</style>
