<template>
  <div class="z-10000 absolute top-48 sm:top-44 lg:top-32 lg:left-32
                  w-screen flex-center lg:justify-start">

          <div class="flex-center slogan tracking-wide
                      text-center lg:text-left max-w-xs text-white font-beVietnam7 uppercase
                      w-2/6 md:3/12 lg:w-1/6
                      text-4xl sm:text-5xl lg:text-6xl">

            <!-- <transition name="slideLeft"> -->
              <!-- v-if="show" -->
            <!-- <h1><slot></slot></h1>
            </transition> -->


                <transition name="slideRight">
                  <h1 v-if="show"><slot></slot></h1>
                </transition>


          </div>
  </div>
</template>

<script>
export default {
    name: 'Slogan',
    data(){
      return{
        show: false
      }
    },
    methods:{

    },
    mounted(){
       let xhr = this;
        setTimeout(function(){
            xhr.$data.show = true;
        }, 1000);
    }


}
</script>

<style lang="css" scoped>

</style>