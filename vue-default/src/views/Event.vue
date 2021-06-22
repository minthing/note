<template>
    <div>
        <button class="button" @click="plus(), one()">plus</button> <!--v-on:click == @click -->
        <p>the count is : {{count}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        plus(){
            this.count++;
        },
        one(){
            alert("hello world")
        }
    }
}
</script>

<style scoped>

</style>