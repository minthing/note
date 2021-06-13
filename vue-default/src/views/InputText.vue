<template>
    <div>
        <input type="text" v-model="value">
        <p>{{value}}</p>
        <input type="number" v-model.number="number">
        <textarea v-model="value"></textarea>
    </div>
</template>

<script>
// v-model 디렉티브를 사용하여 폼 input과 textarea 엘리먼트에 양방향 데이터 바인딩을 생성할 수 있습니다.
export default {
    data() {
        return {
            value:'south korea',
            number:2
        }
    },
    mounted() {
        console.log(this.number) // v-model.number로 해야 숫자 타입으로 받을 수 있음
    },
}
</script>

<style scoped>

</style>