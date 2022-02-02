<template>
    <div id="coursSlideItem" class="rounded-full round">

        <div ref="title" class="absolute -top-4 w-full h-5/6 text-white
                         dark:bg-myDark-100 dark:text-myWhite
                        flex-center cursor-pointer titre rounded-lg filter brightness-75"
                        @click="changeRoute(); openSearch()">
        </div>

        <h1 class="text-white font-beVietnam7 text-lg lg:text-2xl filter brightness-200 absolute top-36 right-20">{{ title }}</h1>
        <div ref="level" class="absolute -bottom-0 w-1/2 text-white
                        bg-myBlue-500 dark:text-myWhite
                        flex-center
                        h-16 rounded-l-lg">
                    <h1 class="font-beVietnam6 text-lg lg:text-xl  ">{{ level }}</h1>

        </div>

        <div class="absolute bottom-0 right-0 w-1/2 text-white
                        bg-myYellow-500 dark:text-myWhite
                        flex-center
                        h-16 rounded-r-lg">
                    <h1 class="font-beVietnam6 text-lg lg:text-xl  ">{{ time }}</h1>

        </div>

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
            time: String,
            level: String,
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
            openSearch(){
                if(this.title === 'Rechercher un cours'){

                }
            }
        },
        mounted(){
            //Image du cours
            this.titleId = uniqueId('title_');
            this.$refs.title.id = this.titleId;
            let title = document.querySelector(`#${this.titleId}`);
            title.style.backgroundImage = `url('${this.img}')`;
            //Niveau du cours
            this.levelId = uniqueId('level_');
            this.$refs.level.id = this.levelId;
            let level = document.querySelector(`#${this.levelId}`);
            // level.style.backgroundColor = "";
            switch(this.level){
                case 'Débutant':
                    level.style.backgroundColor = this.green;
                    break;

                case 'Moyen':
                    level.style.backgroundColor = this.blue;
                    break;

                case 'Confirmé':
                    level.style.backgroundColor = "black";
                    break;
            }
        }

    }
</script>

<style lang="css" scoped>
.titre{
    background: no-repeat center center/cover;

}

</style>