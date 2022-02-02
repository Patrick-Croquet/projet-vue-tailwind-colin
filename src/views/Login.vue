
<template>
    <div id="login">
    <div class='h-headmin dark:bg-myDark-200 dark:text-white mt-5'>

        <div id="ctnrFormLogin" class="h-5/6 w-screen
                                    flex-center dark:bg-myDark-200">
            <div class="border-2 border-gray-200 rounded-lg h-5/6 w-11/12 sm:w-5/6 lg:w-5/12
                        flex-center
                        shadow-lg overflow-y-auto
                        min-h-15r
                        dark:bg-myDark-100
                       ">

                <!-- // voir _imgLogin.scss -->
                <div id="imgLogin" class=" hidden sm:block h-full w-2/6 border-r-2 border-gray-300"></div>

                <form id="loginDesktop" class="dark:bg-myDark-100 h-full sm:w-4/6 flex flex-col justify-start items-center"
                @submit.prevent>
                    <div class="h-1/2 w-full flex flex-col justify-center items-center ">

                        <input id='inputLogin' class="border-b-2 border-gray-300
                        outline-none mt-10 pb-2 text-blue-500 dark:bg-myDark-100
                        font-beVietnam6 cursor-pointer" type="text " placeholder="Pseudo ou e-mail" maxlength="30"
                        v-model="input.username" @keydown.enter.prevent="onEnterLog();" @focus="onFocus" @blur="onBlur();" @keyup="onKeyUp">
                        <span id='errLog' class="mb-10 text-myRed-500 text-xs font-beVietnam5 mr-12"></span>

                        <div class="relative bg-blue-500 p-0 h-2 ">
                            <div class="absolute right-0 w-7 h-5 ">
                                <!-- cf togglePass.js -->
                                <div class="togglePass w-7 h-5 cursor-pointer" style="background: url( '../assets/icons/eye-solid.svg') no-repeat center center/contain; "></div>
                            </div>

                            <input id="inputPass" class="pass cursor-pointer border-b-2
                            border-gray-300 outline-none mb-5 pb-1 text-blue-500 dark:bg-myDark-100
                            font-beVietnam6" type="password" placeholder="Mot de passe"
                            v-model="input.password" @keydown.enter.prevent="login" @focus="isLog(); onFocus()" @blur="onBlur" @keyup="onKeyUp">
                        </div>

                        <span id='errPass' class="mt-6 mb-5 text-myRed-500 font-beVietnam5 text-xs mr-12"></span>


                        <button class="text-xs text-right mb-5 ml-20 text-yellow-400 font-beVietnam4"> Mot de passe oublié ? </button>
                    </div>
                    <!-- Version Light -->
                    <div class="h-1/2 w-full flex flex-col justify-center items-center dark:hidden">
                        <button id="loginSubmit" class="w-11/12 sm:w-1/2 my-8 py-2 px-2 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-myBlue-500 hover:shadow-customBlue font-beVietnam7 text-white"
                         @click.prevent='login'> Se connecter </button>

                        <button class="w-11/12 sm:w-1/2 py-2 px-2 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-myGreen-500
                        hover:shadow-customGreen font-beVietnam7 text-white" @click=initModal> Créer un compte </button>
                    </div>

                    <!-- Version Dark  -->
                    <div class="hidden dark:flex h-1/2 w-full flex-col justify-center items-center ">
                        <div class="w-11/12 sm:w-1/2 py-4">
                            <DarkBtn class="w-24 hover:shadow-customBlue" :color="blue" @click.prevent='login'>Se connecter</DarkBtn>
                        </div>

                        <div class="w-11/12 sm:w-1/2 py-4">
                            <DarkBtn class="w-24 hover:shadow-customGreen" :color="green" data-micromodal-trigger="modal-1" @click=initModal>Créer un compte</DarkBtn>
                        </div>


                    </div>
                </form>

            </div>
        </div>
    </div>
    <transition name="fadeMask">
    <NewAccount v-if=showModal @closeModal="closeModal" />
    </transition>


    <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import DarkBtn from '@/components/darkButton.vue';
import colors from '../js/baseColors';
import NewAccount from '@/components/NewAccount.vue';


    export default {
        name:'Login',
        data(){
            return{
                //Colors
                blue: colors.blue,
                yellow: colors.yellow,
                green: colors.green,
                red: colors.red,
                idDarkBtn: [],
                // Selecteurs
                targ: {
                errLog: null,
                errPass: null,
                inputLogin: null,
                inputPass: null,
                },
                input: {
                    username: '',
                    password: '',
                },
                // Toggle
                tog: {
                    isLog: false,
                    isAt: false,
                    isAtOk: false,
                    // isPseudo : false,
                    isPseudoOk: false,
                    userLength: false,
                    passLength: false,
                },
                //Form Data
                focused : document.activeElement,
                fLength: null,
                errMsg: {
                    length: 'Ce champ doit contenir 8 caractères minimum',
                    noString: 'Ce champ est obligatoire',
                    mailNoOk: 'Cette adresse e-mail n\'est pas valide',
                    pseudoMaj: 'Le pseudo doit contenir au moins une majuscule'
                },
                //Modal
                showModal: false


            }
        },
        methods: {
        //#region ***Modal Window Control ***
            initModal(){
                this.showModal = true;
            },
            closeModal(){
                this.showModal = false;
            },
        //#endregion

        //#region ***Gestion Events ***
            onKeyUp(){
                this.fLength = this.focused.value.length;
            },
            onFocus(){
                this.focused = document.activeElement;
            },
            onBlur(){
                this.isLog();
                this.isLongOk();
                this.isMail();
                this.isMailOk(this.input.username);
                this.isPseudoOk(this.input.username);
            },
            onEnterLog(){
                this.isLog();
                this.isLongOk();
                this.isMail();
                this.isMailOk(this.input.username);
                this.isPseudoOk(this.input.username);
                this.focusPass();
            },
        //#endregion

        //#region ***Gestion Erreurs ***
            logErr(msg){
                this.targ.errLog.textContent = msg;
            },
            logErrPass(msg){
                this.targ.errPass.textContent = msg;
            },
            toRed(){
                let f = this.focused;
                f.style.borderColor = this.red;
                f.style.color = this.red;
            },
        //#endregion

        //#region *** Verifications Login ***
            isLog(){
                //Si pas de login : border rouge + message 'champ obligatoire + focus sur log
                let user = this.fLength;
                // Si rien n'est entré
                if(user === null || user === 0){
                    this.targ.inputLogin.style.borderColor = this.red;
                    this.logErr(this.errMsg.noString);
                    this.targ.inputLogin.focus();
                    this.tog.isLog = false;
                    }
                else{
                    this.tog.isLog = true;
                }
            },
            isLongOk(){
                if(this.tog.isLog){
                    if(this.tog.userLength){
                        // userLength géré par le watch
                        this.logErr('');
                    } else if(!this.tog.userLength){
                        this.logErr(this.errMsg.length);
                        this.toRed();
                    }
                }
            },
            isMail(){
                if(this.tog.isLog){
                    let regArobase = /@/i;
                    if(this.input.username.match(regArobase)){
                        this.tog.isAt = true;
                        this.tog.isPseudo = true;
                    } else if (!(this.input.username.match(regArobase))){
                        this.tog.isAt = false;
                    }
                }else{
                    return
                }
            },
            isMailOk(email){
                if(this.tog.isAt){
                    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    let isOk = regex.test(String(email).toLowerCase());
                    console.log(email)
                    if(isOk){
                        this.tog.isAtOk = true;
                        this.logErr('');
                    }else if(!isOk){
                        this.tog.isAtOk = false;
                        this.logErr(this.errMsg.mailNoOk);
                        this.toRed();
                    }
                }
            },
            isPseudoOk(pseudo){
                if(this.tog.userLength && !this.tog.isAt){
                    const regex = /[A-Z]/;
                    let isOk = regex.test(String(pseudo))
                    if(isOk){
                        this.tog.isPseudoOk = true;
                        this.logErr('');
                    }else if(!isOk){
                        this.tog.isPseudoOk = false;
                        this.logErr(this.errMsg.pseudoMaj);
                        this.toRed();
                    }
                }
            },
            focusPass(){
                let d = this.tog;
                if(d.isLog && d.userLength){
                    if(d.isPseudoOk || d.isAtOk){
                        this.targ.inputPass.focus()
                    }
                }else{
                    return
                }
            },
    //#endregion

        //#region *** Verifications Mdp ***
        isPassLongOk(){
            if(this.tog.passLength){
                // passLength géré par le watch
                this.logErr('');
            } else if(!this.tog.passLength){
                this.logErrPass(this.errMsg.length);
                this.toRed();
            }
        },
        // #endregion


            login(){
                this.$store.commit('setUser', {
                    user: this.input.username,
                    userPass: this.input.password
                });
                this.$router.push('/monCompte')
            },

        },
        watch: {
            // Change la couleur de bordure bottom et du text input
            // en fonction de la longueur de string
            fLength: function(){
                //S'il y a un login d'entré
                // if(this.tog.isLog){
                    let f = this.focused;
                    this.logErr('');
                    if(this.fLength > 7){
                        if( f.id === 'inputLogin'){
                            this.tog.userLength = true;
                            f.style.borderColor = this.green;
                            f.style.color = this.green;
                        }
                        else if( f.id === 'inputPass'){
                            this.tog.passLength= true;
                            f.style.borderColor = this.green;
                            f.style.color = this.green;
                        }
                    }
                    else if(this.fLength > 0 && this.fLength < 8){
                        if( f.id === 'inputLogin'){
                            this.tog.userLength = false;
                            f.style.borderColor = 'rgba(209, 213, 219, 1)';
                            this.targ.errLog.textContent = '';
                            f.style.color = this.blue;
                        }
                        else if( f.id === 'inputPass'){
                            this.tog.passLength= false;
                            f.style.borderColor = this.blue;
                            f.style.color = this.blue;
                        }
                    }
                // }

            },
            focused: function(){
                // console.log(this.focused)
            }
        },
        components: {
            Footer,
            DarkBtn,
            NewAccount,
            // MicroModal
        },
        mounted(){
            this.targ.errLog = document.querySelector('#errLog');
            this.targ.errPass = document.querySelector('#errPass');
            this.targ.inputLogin = document.querySelector('#inputLogin');
            this.targ.inputPass = document.querySelector('#inputPass');
        }
    }
</script>

<style lang="css" scoped>

#imgLogin{
   background: url('../assets/imgs/pex53-web.jpg') no-repeat center center/cover;
}


#modal-1 {
  display: none;
}

.modal.is-open {
  display: block;
}


</style>