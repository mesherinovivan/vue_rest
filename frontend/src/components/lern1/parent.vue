<template>
    <div class="hello">
        {{msg}}
        {{counter}}
        <button @click="inc">inc</button>
        <my-component v-on:inc-me="inc"></my-component>
    </div>
</template>
<script>
import childView  from './child.vue'
export default {
    name: 'hello',
    data(){
        return {
            msg:'welcome to Vue App!',
            counter : 0
        }
    },
    methods:{
        inc(){
            this.counter++
        }
    },
    components:{'my-component':childView}
}
</script>
<style scoped>

</style>