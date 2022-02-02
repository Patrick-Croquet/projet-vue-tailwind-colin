<template>
    <div class="bg-white-dark w-100 h-headmin overflow-y-hidden mt-5">
        <div id="m-menu" class="bg-white-dark h-70vh w-screen sm:hidden flex-center mt-16 ">

            <div id="ctnr" class="dark:bg-myDark-100 h-70vh w-11/12 border border-gray-200 dark:border-gray-600 rounded-lg
                                flex flex-col justify-around items-center
                                shadow-lg dark:shadow-customWhite">


                <!-- Version Light -->
                <router-link to="/mentor" class="w-1/2"><LightBtn class="w-full hover:shadow-customRed" :color='red'>Contacter un mentor</LightBtn></router-link>

                <router-link to="/cours" class="w-1/2"><LightBtn class="w-full hover:shadow-customGreen" :color='green'>Les Cours</LightBtn></router-link>

                <router-link to="/exercices" class="w-1/2"><LightBtn class="w-full hover:shadow-customBlue" :color='blue'>Les Exercices</LightBtn></router-link>

                <router-link to="/forum" class="w-1/2"><LightBtn class="w-full hover:shadow-customYellow" :color='yellow'>Le Forum</LightBtn></router-link>



                <!-- Version Dark -->
                <router-link to="/mentor" class="hidden dark:block my-5 w-1/2"><div class="w-full hover:shadow-customRed rounded-lg">
                <DarkBtn :color='red'>Contacter un mentor</DarkBtn>
                </div></router-link>

                <router-link to="/cours" class="hidden dark:block my-5 w-1/2"><div class="w-full hover:shadow-customGreen rounded-lg">
                <DarkBtn :color='green'>Les cours</DarkBtn>
                </div></router-link>

                <router-link to="/exercices" class="hidden dark:block my-5 w-1/2"><div class="w-full hover:shadow-customBlue rounded-lg">
                <DarkBtn :color='blue'>Les Exercices</DarkBtn>
                </div></router-link>

                <router-link to="/forum" class="hidden dark:block my-5 w-1/2"><div class="w-full hover:shadow-customYellow rounded-lg">
                <DarkBtn :color='yellow'>Le Forum</DarkBtn>
                </div></router-link>

            </div>
        </div>

    </div>
</template>

<script>
import LightBtn from '@/components/lightButton.vue';
import DarkBtn from '@/components/darkButton.vue';
import colors from '@/js/baseColors';

    export default {
        name:'MMenu',
        data(){
            return{
                blue: colors.blue,
                yellow: colors.yellow,
                green: colors.green,
                red: colors.red,
                idDarkBtn: []
            }
        },
        methods: {

        },
        components: {
            DarkBtn, LightBtn,
        }
    }
</script>

<style lang="css" scoped>

</style>