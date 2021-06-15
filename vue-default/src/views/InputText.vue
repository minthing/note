<template>
    <div>
        <input type="text" v-model="value">
        <p>{{value}}</p>
        <input type="number" v-model.number="number">
        <textarea v-model="value"></textarea>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select>
        <!-- <label for=""><input type="checkbox" value="서울" name="" id="" v-model="checked">서울</label>
        <label for=""><input type="checkbox" value="부산" name="" id="" v-model="checked">부산</label>
        <label for=""><input type="checkbox" value="제주" name="" id="" v-model="checked">제주</label> -->

        <label for=""><input type="radio" v-bind:value="radio[0]" name="" id="" v-model="picked">서울</label>
        <label for=""><input type="radio" v-bind:value="radio[1]" name="" id="" v-model="picked">부산</label>
        <label for=""><input type="radio" v-bind:value="radio[2]" name="" id="" v-model="picked">제주</label>

        <span>체크한 지역 : {{picked}}</span>
    </div>
</template>



<script>
// v-model 디렉티브를 사용하여 폼 input과 textarea 엘리먼트에 양방향 데이터 바인딩을 생성할 수 있습니다.
export default {
    data() {
        return {
            value:'south korea',
            number:2,
            city:"064",
            checked:[],
            radio:['seoul', 'busan', 'jeju'],
            radio1:"seoul",
            radio2:"busan",
            radio3:"jeju",
            picked:""
        }
    },
    mounted() {
        console.log(this.number) // v-model.number로 해야 숫자 타입으로 받을 수 있음
    },
}
</script>

<style scoped>

</style>