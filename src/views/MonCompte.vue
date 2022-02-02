<template>
    <div id="monCompte">
        <div class="flex-center w-screen h-headmin">
            <button class="h-24 w-24 bg-myBlue-500 mx-5" @click="log">Verifier json et user vueX</button>
            <button class="h-24 w-24 bg-myGreen-500 mx-5" @click="log2">Créer un array avec les data</button>
            <button class="h-24 w-24 bg-myRed-500 mx-5" @click="log3">Comparer user avec Usernames JSON</button>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

    export default {
        name:"MonCompte",
        data(){
            return{
                datas: {},
                jsonUsers: {},
                arrJsonUsers : [],
                arrUsernames:[],
                user: "",
                userPass: "",
                auth: false
            }

        },
        methods:{
            log(){

                this.user = this.datas.user;
                this.userPass = this.datas.userPass

                console.log(this.user);
                console.log(this.userPass)
                console.log(this.jsonUsers)
            },
            log2(){
                this.arrJsonUsers = Object.values(this.jsonUsers);
                for(let i=0; i < this.arrJsonUsers.length ; i++){
                    this.arrUsernames.push(this.arrJsonUsers[i].username);
                }
                console.log(this.arrUsernames)

            },
            log3(){
                let usernames = this.arrUsernames;
                let x = usernames.indexOf(this.user);
                console.log(x);

                if( x === -1){
                    alert('Vous n\'êtes pas encore inscrit !');
                } else {
                    alert(`Bienvenue sur votre compte ${this.user}`)
                }
            }
        },
        mounted(){

            this.datas = this.$store.getters.getUser;

            axios
                .get('https://jsonplaceholder.typicode.com/users')
                // on met le resultat dans jsonUsers
                .then(res => {this.jsonUsers = res.data })

                console.log('Axios OK')
        }
    }
</script>

<style lang="css" scoped>

</style>