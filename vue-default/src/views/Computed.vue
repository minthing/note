<template>
    <div>
        <h1>Hello, {{getFullname()}}</h1>
        <p>연산을 호출할 때마다 반복한다 / 변화를 감지하면 무조건 호출됨 computed 값이 변경되어도 얘도 바뀜</p>
        <!-- <h1>Hello {{fullname}}</h1>
        <p>연산을 한번만 한다</p> -->
        <div>
            <input type="text" v-model="firstName">
            <input type="text" v-model="lastName">
        </div>
        <button class="button" @click="plus()">plus</button> <!--v-on:click == @click -->
        <p>the count is : {{count}}</p>
        <button class="button" @click="number()">plus</button> <!--v-on:click == @click -->
        <p>the count is : {{num}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            firstName:'Jonathan',
            lastName:'Joestar',
            count:0,
            num:0
        }
    },
    computed:{
        fullname(){
            return this.firstName + ' ' + this.lastName
        },
        number(){
            return this.num;
        }
    },
    methods:{
        getFullname(){
            return this.firstName + ' ' + this.lastName
        },
        plus(){
           this.count++;
        },
    }
}
</script>

<style scoped>

</style>