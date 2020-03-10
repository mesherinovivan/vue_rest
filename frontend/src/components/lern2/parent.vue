<template>
    <div class="hello">
        {{msg}}
        {{counter}}
        <button @click="inc">inc</button>
        <my-component is="childView" v-on:inc-me="inc">
            <p>Это Слот детка</p>
            <label for="title" slot="title_slot">{{title}}</label>    
        </my-component>
    </div>
</template>
<script>
import childView  from './child.vue'
export default {
    name: 'hello',
    data(){
        return {
            msg:'welcome to Vue App!',
            counter : 0,
            title:"Тут могла быть ваша реклама"
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