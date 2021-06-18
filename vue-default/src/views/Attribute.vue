<template>
    <div>
        <img v-bind:src="url" alt="">
        <br>
        <input type="text" v-model="textValue">
        <button v-bind:disabled="textValue==''">click</button>
        <!-- <div class="container" v-bind:class="{'active':isActive, 'text-colored':isColored}">hello world</div> -->
        <div class="container" v-bind:class="[active, color]">hello world</div> 
        <div class="style" v-bind:style="style">또잉</div>
        <div class="style" v-bind:style="[bindstyle]">또잉</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url:"https://64.media.tumblr.com/fd4e11a48eac07460308e9c83b81792c/57d64f62795cc14f-20/s400x600/b4d7104677ea83f5f4d2fa113a4255f962cb5307.png",
            textValue:"hello",
            // isActive:true,
            // isColored:true
            active:'active',
            color:'text-colored',
            style:{ // 여기서 할 땐 카멜 케이스
                backgroundColor:'tan',
                color:'blue',
                fontWeight:'bold',
                height:'100px',
                width:'50px'
            },
            bindstyle:'background-color:yellow;width:100px;height:100px'
        }
    },
}
</script>

<style scoped>
.container{
    width:100px;
    height:100px;
    background-color:aliceblue;
    margin: 0 auto;
}

.active{
    font-weight: bold;
    background-color: antiquewhite;
}

.text-colored{
    color: brown;
}
</style>