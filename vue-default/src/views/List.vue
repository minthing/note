<template>
    <div>
        <select name="select" v-model="city">
            <option v-for="(city, index) in options" :key="index" v-bind:value="city.tel">{{city.name}}</option>
        </select>
    </div>
</template>

<script>
export default {
    data(){
        return {
            options:[
                {name:"서울", tel:"02"},
                {name:"부산", tel:"21"},
                {name:"제주", tel:"064"}
            ],
            city:"064"
        }
    }   
}
</script>

<style scoped>

</style>