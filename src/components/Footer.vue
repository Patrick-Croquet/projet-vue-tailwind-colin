<template>
    <footer>
        <div id="footer" class="flex justify-around items-center
                                 w-screen bg-myDark-100 p-5 text-white
                                list-none font-beVietnam6 border-t border-myBlue-500">

            <div class="hidden sm:flex sm:flex-col items-start">

                <label id="label">Rechercher un cours</label>
                <!-- @focus=changeLabel -->
                <input class="rounded-lg my-3 px-2 text-blue-500 py-2" type="text" @focus=openSearch>

            </div>

            <div class="">
                <li><router-link to="/quisommesnous" href="">Qui sommes nous ?</router-link></li>
                <li><a href="mailto:contact@levietnamien.fr">contact@levietnamien.fr</a></li>
                <li> le-vietnamien.fr©</li>
            </div>
        </div>
        <transition name="fadeMask">
            <Mask v-if=showMask show=true @disableShow="show=false" />
        </transition>

    </footer>
</template>

<script>
import Mask from '@/components/Mask.vue';

    export default {
        name:'Footer',
        data(){
            return{
                showMask: null,
            }
        },
        components: {
            Mask
        },
        methods: {
            changeLabel(){
                document.querySelector('#label').textContent = "Entrée pour valider";
            },
            initialLabel(){
                document.querySelector('#label').textContent = "Rechercher un cours";
            },
            scroll(){
                window.scrollTo({
                        top: 100,
                        left: 0,
                        behavior: 'smooth'
                    })
            },
            openSearch(){
                this.scroll();
                this.$store.commit('togMaskActive');
            }
        },
        mounted(){
        this.$store.watch((state) => state.maskActive,
        () =>{
        this.showMask = this.$store.state.maskActive;
        });
        }

    }
</script>

<style lang="css" scoped>

</style>