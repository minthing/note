<template>
    <div>
        <img v-bind:src="url" alt="">
        <br>
        <input type="text" v-model="textValue">
        <button v-bind:disabled="textValue==''">click</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url:"https://64.media.tumblr.com/fd4e11a48eac07460308e9c83b81792c/57d64f62795cc14f-20/s400x600/b4d7104677ea83f5f4d2fa113a4255f962cb5307.png",
            textValue:"hello"
        }
    },
}
</script>

<style>

</style>