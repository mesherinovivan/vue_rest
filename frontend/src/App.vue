<template>
    <div id="app">
    <hr/>
    <h3>Users on Database</h3>
    <p v-if="users.length === 0">No Messages</p>
    <div class="msg" v-for="(user, index) in users" :key="index">
        <p class="msg-index">[{{user.id}}]</p>
        <p class="msg-subject" v-html="user.username"></p>
        <input type="submit" @click="deleteUser(user.id)" value="Delete" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Users",
  data() {
    return {
      subject: "",
      msgBody: "",
    };
  },
  computed: mapState({
    users: state => state.users.users
  }),
  methods: mapActions('users', [
    'addUser',
    'deleteUser'
  ]),
  created() {
    this.$store.dispatch('users/getUsers')
  }
};
</script>