<template>
    <transition name="slideRoll">
                <div id="img" class="absolute right-4 top-28 z-10000 w-8 h-8 cursor-pointer" @click="funcToggleTheme" v-show=show></div>
    </transition>
</template>


<script>

export default {
    name:'BtnSwitchTheme',
    data : function(){
        return{
            switchTo: 'Dark',
            show: false,
            show2: false,
            dark: this.$store.state.mode
        }
    },
    methods:{
        funcToggleTheme: function() {
            let htmlClass = document.querySelector('html').classList;
            let btn = document.querySelector('#img');
            let mode = this.$store.state.mode;

            this.$store.commit('toggleMode');
            // console.log(mode);

            if(mode === 'dark'){
                htmlClass.add('dark');
                // btn.classList.toggle('moon');
                btn.classList.remove('sun');
                btn.classList.add('moon');
            }else if(mode === 'light'){
                htmlClass.remove('dark')
                btn.classList.remove('moon');
                btn.classList.add('sun')
            }


        },
    },
    mounted(){
        // décalage de la transition du boutonSwitch par rapport à l'affichage principal
        let xhr = this;
        setTimeout(function(){
            xhr.show = true;
        }, 1000);

        let imgClass = document.querySelector('#img').classList;
        imgClass.add('sun')
    }
}
</script>

<style lang="css" scoped>
.moon{
    background: url('../assets/icons/moon-solid.svg') no-repeat center center/cover;
}
.sun{
    background: url('../assets/icons/sun-solid.svg') no-repeat center center/cover;
}
</style>