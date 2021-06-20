<template>
    <div>
        <h1 v-if="render">
            render is true
        </h1>
        <h1 v-else>render is false</h1>
        <div v-if="type==`cute`"><img src="https://64.media.tumblr.com/fd4e11a48eac07460308e9c83b81792c/57d64f62795cc14f-20/s400x600/b4d7104677ea83f5f4d2fa113a4255f962cb5307.png" alt=""></div>
        <div v-else-if="type==`cool`"><img src="https://64.media.tumblr.com/8a2fad6e63cbf06511f86d443bef3436/57d64f62795cc14f-b4/s400x600/b6cce6c8aabf88c83f5afecf6cef7470cbe1736a.png" alt=""></div>
        <div v-show="render">hello world!</div>
        <!-- else가 존재하지 않음 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            render:true,
            type:"cute"
        }
    }
}
</script>

<style scoped>

</style>