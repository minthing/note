<template>
    <div>
        <select>
            <option v-bind:value="name.value" :key="i" v-for="(name, i) in nameList">{{name.name}}</option>
        </select>
        <input type="text">
        <button type="submit">search</button>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    data(){
        return{
            nameList : [{
                "value":"johnny", "name": "죠니 죠스타"
            },{
                "value":"gyro", "name": "쟈이로 체펠리"
            },{
                "value":"diego", "name": "디에고 브란도"
            }]
        }
    }
}
</script>

<style scoped>

</style>