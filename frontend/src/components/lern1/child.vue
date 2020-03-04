<template>
    <div>
        <button v-on:click="childInc">ChildInc</button>
        </div>
</template>
<script>

export default {
    name: 'child',
    methods:{
        childInc(){
            this.$emit('inc-me');
        }
    }
    
}
</script>
<style scoped>

</style>

