<template>
      <!-- #region Réseaux Sociaux - Version Mobile -->
      <aside id="socials" class="relative w-24 h-48 bg-myBlue-500 -mt-24 z-10000
                          transition-1000 ease-in-out transform -translate-x-20
                          border-white border-2 rounded-xl
                          flex flex-col justify-around items-center
                          sm:hidden
                          ">
          <!-- Bouton Fermer  -->
          <div id="closeSocials" class="closeSocials absolute -right-6 top-0 w-8 h-8 cursor-pointer" @click=translateSocials></div>

          <a href="https://www.facebook.com/LeVietnamien" target="_blank">
              <div id="r1" class="h-8 w-8"></div>
          </a>
          <a href="https://m.me/Levietnamien" target="_blank">
              <div id="r2" class="h-8 w-8"></div>
          </a>
          <a href="https://api.whatsapp.com/send?phone=0782194327" target="_blank">
              <div id="r3" class="h-8 w-8"></div>
          </a>
      </aside>
      <!-- #endregion -->
</template>

<script>
    export default {
        name:"Reseaux",
        data: function(){
            return {
                dispSocials: false
            }
        },
        watch: {
            dispSocials: function(){
                let socials = document.querySelector('#socials');
                let close = document.querySelector('#closeSocials');

                socials.classList.toggle('transform');
                close.classList.toggle('closeSocials');
                close.classList.toggle('closeSocials-clicked')

            },
        },
        methods: {
            translateSocials(){
            this.dispSocials = !this.dispSocials
            }
        },

    }
</script>

<style lang="css" scoped>

.closeSocials {
    background: url('../assets/icons/arrow-right-wr.svg') no-repeat center center/contain;
}
.closeSocials-clicked {
    background: url('../assets/icons/close-circle-wr.svg') no-repeat center center/contain;
}
#r1 {
    background: url('../assets/icons/facebook-w2.svg') no-repeat center center/contain;
}

#r2 {
    background: url('../assets/icons/messenger-w2.svg') no-repeat center center/contain;
}

#r3 {
    background: url('../assets/icons/whatsapp-w3.svg') no-repeat center center/contain;
}

</style>