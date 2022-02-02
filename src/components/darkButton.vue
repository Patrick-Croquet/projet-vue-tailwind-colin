<template>

        <button id='darkbtn' class='relative p-3 px-6
                    hidden
                    flex-center
                    transition duration-50
                    dark:bg-myDark-200 dark:text-white
                    w-full font-beVietnam7
                    border-2 border-myWhite
                    rounded-tl-lg rounded-tr-lg rounded-br-lg
                    transform hover:translate-y-1
                    '>
                <div ref='tri' class="absolute left-0 bottom-0 tri
                    w-0 h-0
                    border-solid border-t-.8r border-r-0 border-b-0 border-l-1r border-transparent
                    "></div>

            <slot>Default</slot>
        </button>

</template>

<script>
import uniqueId from 'lodash.uniqueid';

    export default {
        name:'darkBtn',
        data(){
            return{
                id: ''
            }
        },
        props: {
            color: String,

        },
        mounted(){
            //Créer un id sur l'élément
            this.id = uniqueId('darkBtn_');
            // l'attribuer à l'élément ciblé grace a $refs
            this.$refs.tri.id = this.id;
            let triangle = document.querySelector(`#${this.id}`);
            triangle.style.borderLeftColor = this.color
        },

    }
</script>

<style scoped>
.tri{
border-color:transparent transparent transparent transparent;
}


</style>