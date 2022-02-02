<template>
    <div class="hidden sm:block shapeCtnr relative">
        <svg class="shapeSvg h-10" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path class="shapePath" d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" ></path>
        </svg>

        <div class="absolute top-0 right-0
                    w-1/2 h-10 flex justify-around items-center">
            <a href="https://www.facebook.com/LeVietnamien" target="_blank">
                <img class="h-6" src="../assets/icons/facebook-w2.svg" alt="facebook"></a>
            <a href="https://api.whatsapp.com/send?phone=0782194327" target="_blank">
                <img class="h-6" src="../assets/icons/whatsapp-w3.svg" alt="whatsapp"></a>
            <a href="https://m.me/Levietnamien" target="_blank">
                <img class="h-6" src="../assets/icons/messenger-w2.svg" alt="messenger"></a>
        </div>
    </div>
</template>

<script>
export default {
    name:'Blueshape'
}
</script>

<style scoped>
.shapeCtnr {
    width: 100%;
}

.shapeSvg {
    width: 140%;
}

.shapePath {
    fill: #4893bd
}
</style>