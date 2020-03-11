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
                
            </p>
             <component ref="htmlFormComponent" v-if="htmlForm" :is="currentView"></component>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState} from 'vuex';
import HtmlComponent  from './form.vue'

export default {
    name: 'docsView',
    data() {
      // данные приложения
      return {
        selectedForm: null,
        currentView: HtmlComponent
      }
    },
    computed: {
        ...mapState({
            templates: state => state.docs.templates,
            htmlForm: state => state.docs.htmlForm,
        }),
    },
    created(){
        this.$store.dispatch('docs/getTemplates');
    },
    watch: {
        selectedForm() {
            this.$store.dispatch('docs/getHtmlForm',`${this.selectedForm}`);
            window.console.log(this.$refs.htmlFormComponent.$refs);
        }
    },
    components:{'formComponent':HtmlComponent}
}
</script>
<style scoped>

</style>