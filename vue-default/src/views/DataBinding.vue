<template>
    <div v-html="htmlString"></div>
</template>

<script>
export default {
    data() {
        return {
            htmlString:'<p style="color:red">this is red</p>'
        }
    },
}
</script>

<style scoped>

</style>