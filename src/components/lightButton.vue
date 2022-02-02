<template>

        <button ref='lightbtn' class='relative p-3 px-6
                    flex-center
                    dark:hidden
                    text-white font-beVietnam7
                    rounded-tl-lg rounded-tr-lg rounded-br-lg
                    '>
            <slot>Default</slot>
        </button>

</template>

<script>
import uniqueId from 'lodash.uniqueid';

    export default {
        name:'lightBtn',
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
            this.id = uniqueId('lightBtn_');
            // l'attribuer à l'élément ciblé grace a $refs
            this.$refs.lightbtn.id = this.id;
            let myBtn = document.querySelector(`#${this.id}`);
            myBtn.style.backgroundColor = this.color;
        }
    }
</script>