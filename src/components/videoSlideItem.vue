<template>
    <div id="videoSlideItem" class="h-full">

            <iframe width="100%" height="315" src="https://www.youtube.com/embed/fhkE3e7lT_g?autoplay=1" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay" allowfullscreen>
            </iframe>
            <!--  -->



            <div class="absolute -bottom-4 w-full text-white
                        bg-black dark:bg-myDark-100 dark:text-myWhite
                        flex-center
                        h-12">
                    <h1 class="font-beVietnam7 text-2xl  ">{{ title }}</h1>

            </div>

    </div>
</template>

<script>
    export default {
        name: 'videoItem',
        data(){
            return {

            }
        },
        props: {
            title: String
        },
        mounted(){
            console.log(this.title)
        }

    }
</script>

<style lang="css" scoped>

</style>