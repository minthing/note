<template>
    <div>
        <input type="text" v-model.number="x">
        <input type="text" v-model.number="y">
        <!-- <button @click="plus">plus</button> -->
        <input type="text" v-model="z">
    </div>
</template>

<script>
export default {
    data(){
        return{
            x:0,
            y:0,
            z:0
        }
    },
    computed:{// - computed는 computed에 새로운 프로퍼티를 추가해 주어야한다. data에 선언된 거 사용xx
    },
    methods:{
        plus(){
            this.z = this.x + this.y;
        }
    },
    watch:{ // 데이터에 미리 입력한 것을 사용할 수 있음
    // vue 공식 문서에, computed와 watch 둘다 가능 한 것은 computed를 쓰라고 명시되어 있다.
        x(){
            this.z = this.x + this.y;
        },
        y(){
            this.z = this.x + this.y;
        }
    }
}
</script>

<style scoped>

</style>