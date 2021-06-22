<template>
    <div>
        <button class="button" @click="plus(), one()">plus</button> <!--v-on:click == @click -->
        <p>the count is : {{count}}</p>
        <select v-model="city" @change="select">
            <option value="seoul">서울</option>
            <option value="busan">부산</option>
            <option value="jeju">제주</option>
        </select>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count:0,
            city:""
        }
    },
    methods:{
        plus(){
            this.count++;
        },
        one(){
            alert("hello world")
        },
        select(){
            alert(this.city)
        }
    }
}
</script>

<style scoped>

</style>