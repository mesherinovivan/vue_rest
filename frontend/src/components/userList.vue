<template>
  <div>
    <b-table small hover :items="users"></b-table>
    <button type="button" class="btn btn-success btn-sm" v-b-modal.user-modal>Add User</button>
    <user_form :form_id="form_name"></user_form>
  </div>
</template>


<script>
  import { mapState} from 'vuex';
  import user_form from './UserForm';

  export default {
    data() {
      return {
         form_name : 'user-modal'
      }
    },
    computed: mapState({
        users: state => state.users.users
    }),
    
    created() {
        this.$store.dispatch('users/getUsers')
    },
    components:{
        user_form
    },
    watch: {
      '$route' () {
          this.$store.dispatch('users/getUsers')
      }
    }
  
  }
</script>