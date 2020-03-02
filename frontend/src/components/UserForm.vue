<template>
  <div>
      <b-modal ref="addUserModal"
                :id="form_id"
                title="Add a new user"
                hide-footer>
        <b-form @submit="onSubmit"  class="w-100">
        <b-form-group id="form-title-group"
                        label="UserName:"
                        label-for="form-user-input">
            <b-form-input id="form-user-input"
                            type="text"
                            v-model="addUserForm.username"
                            required
                            placeholder="Enter username">
            </b-form-input>
            </b-form-group>
            <b-form-group id="form-author-group"
                        label="E-Mail:"
                        label-for="form-email-input">
                <b-form-input id="form-email-input"
                            type="text"
                            v-model="addUserForm.email"
                            required
                            placeholder="Enter email">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-modal>
      
  </div>
</template>
<script>
 

export default {
    props:{
        form_id : String,
    },
    data() {
        return {
            addUserForm: {
                username: '',
                email: '',
            },
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            this.$refs.addUserModal.hide();            
            const payload = {
                username: this.addUserForm.username,
                email: this.addUserForm.email,
            };
            this.$store.dispatch('users/addUsers',payload)
        },
    }
}
</script>