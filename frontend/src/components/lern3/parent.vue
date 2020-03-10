<template>
    <div class="app">
        <button @click="cycle">Переключить</button>
        <h1>
            <component :is="currentView"></component>
        </h1>
    </div>
</template>
<script>
import BookView  from './book.vue'
import FormView  from './form.vue'
import ListView  from './list.vue'
export default {
    name: 'hello',
    data(){
        return {
           currentView: BookView
        }
    },
    methods:{
        cycle(){
            if (this.currentView === ListView){
                this.currentView = BookView
            }
            else{
                this.currentView = this.currentView === BookView ? FormView : ListView;
            }
        }
    },
    components:{'book-component':BookView,
                'list-component':FormView,
                'form-component':ListView,
    }
}
</script>
<style scoped>

</style>