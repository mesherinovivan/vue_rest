<template>
  <div>
    <div class="card">
        <div class="card-header">
            Документы
        </div>
        <div class="card-body">
            <h5 class="card-title">Шаблон документа</h5>
            <p class="card-text">
                <select v-model="selectedForm" style="width: 18rem;">
                    <option :key="template.title" :value="template.id"  v-for="template in templates">{{template.title}}</option>
                </select>
            </p>
            <p class="card-text">
               <button @click="onDownloadClick">Download</button> 
            </p>
            <component ref="htmlFormComponent" v-if="htmlForm" :is="formComponent">

            </component>
            
        </div>
    </div>
  </div>
</template>
<script>
import { mapState} from 'vuex';
import FormView from './form';

export default {
    name: 'docsView',
    data() {
      // данные приложения
      return {
        selectedForm: null,
        msg: "dd"
      }
    },
    methods:{
        onDownloadClick () {
            let data = this.$refs.htmlFormComponent.$refs;
            let post_values = []
            let param = {}
            // формируем строку параметров get запроса
            Object.keys(data).map(function (key) {
                param[key] = data[key].value
                post_values.push(param);
            });
            this.$store.dispatch('docs/download',[`${this.selectedForm}`,param]).then(() => {
                window.open(this.$store.state.docs.link);
            })
        }
    },

    computed: {
        ...mapState({
            templates: state => state.docs.templates,            
            htmlForm: state => state.docs.htmlForm,            
            link: state => state.docs.link,            
        }),
        formComponent() {
            return {
                // пришлось обернуть в div, так как шаблон
                // может иметь только один корневой тэг
                template: `<div>${this.$store.state.docs.htmlForm}</div>`,
            }
        },
        
    },
    created(){
        this.$store.dispatch('docs/getTemplates');
    },
    watch: {
        selectedForm() {
            this.$store.dispatch('docs/getHtmlForm',`${this.selectedForm}`);           
        }
    },
    components:{'my-com':FormView}
}
</script>
<style scoped>

</style>