<template>
    <div id="coursSlideItem" class="rounded-full round">

        <div ref="title" class="absolute -top-4 w-full h-full text-white
                         dark:bg-myDark-100 dark:text-myWhite
                        flex-center cursor-pointer titre rounded-lg filter brightness-75"
                        @click="changeRoute()">
        </div>

        <h1 class="text-white font-beVietnam7 text-md lg:text-2xl filter brightness-200
                absolute top-56 right-5
                lg:right-10">{{ title }}</h1>


    </div>
</template>

<script>

import colors from '../js/baseColors';
import uniqueId from 'lodash.uniqueid';

    export default {
        name: 'coursSlideItem',
        data(){
            return{
                blue: colors.blue,
                yellow: colors.yellow,
                green: colors.green,
                red: colors.red,
                titleId: '',
                routes: {
                    a: '/cours/C_Videos',
                    b: '/cours/C_VieQuotidienne',
                    c: '/cours/C_Vocab',
                    d: '/cours/C_Prononciation',
                    e: '/cours/C_Culture',
                    f: '/cours/C_Cuisine'
                }
            }
        },
        props: {
            title: String,
            img: String
        },
        methods: {
            changeRoute(){
                switch(this.title){
                    case 'Cours Vidéos':
                        console.log(this.title)
                        this.$router.push(this.routes.a);
                        break;

                    case 'Vie Quotidienne':
                        this.$router.push(this.routes.b);
                        break;

                    case 'Vocabulaire':
                        this.$router.push(this.routes.c);
                        break;

                    case 'Prononciation':
                        this.$router.push(this.routes.d);
                        break;

                    case 'Culture Vietnamienne':
                        this.$router.push(this.routes.e);
                        break;

                    case 'Cuisine':
                        this.$router.push(this.routes.f);
                        break;
                }
            },
        },
        mounted(){
            //Image du cours
            this.titleId = uniqueId('title_');
            this.$refs.title.id = this.titleId;
            let title = document.querySelector(`#${this.titleId}`);
            title.style.backgroundImage = `url('${this.img}')`;
        }

    }
</script>

<style lang="css" scoped>
.titre{
    background: no-repeat center center/cover;

}

</style>