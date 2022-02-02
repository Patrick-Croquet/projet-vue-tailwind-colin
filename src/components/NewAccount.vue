<template>
<div id="newaccount" class="transition-1000 absolute top-24 flex-center w-screen h-headmin+ bg-myDark-500 opacity-100 pt-5 pb-5">
    <!-- Le container -->
    <div id="modal-1" aria-hidden="true" class="h-80vh w-11/12 sm:w-4/6 lg:w-3/6 bg-white-dark rounded-lg shadow-customWhite">

    <!-- Superposition-->
    <div tabindex="-1" data-micromodal-close >

        <!-- [3] -->
        <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >


        <header class="relative">
            <h2 id="modal-1-title" class="text-center">
            <p class="text-h2">Créer un compte</p>
            </h2>

            <!-- [4] -->
            <button aria-label="Close modal" data-micromodal-close id="close" class="h-8 w-8 absolute -top-12 -left-4" @click=closeModal></button>
        </header>

        <div id="modal-1-content" class="h-60vh w-full flex-center ">
            <div class="w-5/6 h-full flex flex-col items-center">
                <form class="flex flex-col h-3/5">
                <input type="text" class="my-4 py-3 outline-none text-myBlue-500 font-beVietnam5 border-b-2 border-myBlue-500 bg-white-dark" placeholder="Pseudo ( optionnel )" >
                <input type="text" class="my-4 py-3 outline-none text-myBlue-500 font-beVietnam5 border-b-2 border-myBlue-500 bg-white-dark" placeholder="Adresse e-mail" >
                <input type="password" class="my-4 py-3 outline-none text-myBlue-500 font-beVietnam5 border-b-2 border-myBlue-500 bg-white-dark" placeholder="Choisir un mot de passe">
                <input type="password" class="my-4 py-3 outline-none text-myBlue-500 font-beVietnam5 border-b-2 border-myBlue-500 bg-white-dark" placeholder="Répéter le mot de passe">
                </form>

                <div class="h-2/5 w-full flex flex-col justify-end items-center">
                <div class="w-5/6 sm:w-3/5 hidden dark:block">
                <DarkBtn :color="blue" class="hover:shadow-customBlue">Créer un compte</DarkBtn>
                </div>
                <LightBtn class="dark:hidden bg-myBlue-500 hover:shadow-customBlue">Créer un compte</LightBtn>
                </div>

            </div>

        </div>

        </div>
    </div>
    </div>
</div>
</template>

<script>

import MicroModal from 'micromodal';
import LightBtn from '@/components/lightButton.vue';
import DarkBtn from '@/components/darkButton.vue';
import colors from '@/js/baseColors';
import '../style/transitions.css';

    export default {
        name:'NewAccount',
        components: {
            DarkBtn,
            LightBtn
        },
        data(){
            return{
                blue: colors.blue,
                yellow: colors.yellow,
                green: colors.green,
                red: colors.red,
                idDarkBtn: []
            }
        },
        methods:{
            closeModal(){
                this.$emit('closeModal')
            }
        },
        mounted(){
        MicroModal.show('modal-1');
        }
    }
</script>

<style lang="css" scoped>


#close{
    background: url('../assets/icons/close-circle-wr.svg') no-repeat center center/contain;
}


</style>