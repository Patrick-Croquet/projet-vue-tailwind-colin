<template>
    <div id="scrollTop" class="transition-1000 cursor-pointer"
    @click="scroll"
    ></div>
</template>

<script>
    export default {
        name:"ScrollTop",
        // data(){
        //     return{

        //     }
        // },
        methods: {
            scroll(){
            window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    })
            }
        },
        // created(){
        // }

    }
</script>

<style lang="css" scoped>
#scrollTop {
    z-index: 1000;
    background: url('../assets/icons/fleche.svg') no-repeat center center/contain;
}
</style>