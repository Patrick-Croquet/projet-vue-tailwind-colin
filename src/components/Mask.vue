<template>
  <div v-if=show>

          <div id="mask" class="absolute top-24 h-screen+ w-screen bg-myDark-400 filter brightness-50 z-10000 opacity-75"></div>



              <!-- Conteneur ecran  -->
          <div id="searchWindow" class="absolute top-28 h-80vh w-screen flex-center">

              <!-- Container  -->
              <div class="absolute h-5/6 w-1/2 bg-white-dark dark:text-white z-11000 rounded-xl flex flex-col justify-around items-center">
                  <!-- Bouton close -->
                  <div id="close"  @click=close class="absolute -top-0 -right-10 h-8 w-8 bg-myRed-500 z-11000 cursor-pointer"></div>
                  <!-- Rechercher  -->
                  <input type="text" placeholder="Rechercher un cours" class="w-1/2
                  font-beVietnam6 bg-white-dark text-myBlue-500 border-b-2 outline-none border-myBlue" @blur=close @keydown.enter.prevent="search">
                  <!-- Auto-completion  -->
                  <div id="results" class="h-auto"></div>
              </div>
          </div>
  </div>

</template>

<script>
  export default {
      name:'Mask',
      data(){
          return{
              targ: {
                  mask: null,
                  searchWindow: null,
                  results: null,

              }
          }
      },
      props: {
        show: Boolean
      },
      methods:{
          close(){
          this.$emit('disableShow', false)
          this.$store.commit('togMaskActive');
          }
      }
  }
</script>

<style lang="css" scoped>

#close{
    background: url('../assets/icons/close-circle-wr.svg') no-repeat center center/contain;
}
</style>