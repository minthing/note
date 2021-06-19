<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>40 yard dash</th>
                    <th>position</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(member, index) in members" v-bind:key="index">
                    <td>{{member.name}}</td>
                    <td>{{member.dash}}</td>
                    <td>{{member.position}}</td>
                </tr>
            </tbody>
        </table>
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
            city:"064",
            members:[
                {name:"hiruma yoichi", dash:"5.1", position:"QB"},
                {name:"Clifford D. Lewis", dash:"4.1", position:"QB"},
                {name:"Shien Mushanokoji", dash:"5.6", position:"QB"},
            ]
        }
    }   
}
</script>

<style scoped>

</style>