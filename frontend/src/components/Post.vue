<template lang="html">
<b-container class="bv-example-row">
    <b-row>
      <div class="post">
            <b-card
                title="Card Title"

                tag="article"
                style="max-width: 250rem;"
                class="mb-2"
              >
                <b-card-text>
                  <UserList></UserList>
                </b-card-text>
                
              </b-card>
      </div>
    </b-row>
</b-container>
</template>
<script>
  import UserList from './userList';
  
  export default {
    data() {
      return {
        post: null,
      }
    },
    components: {
      UserList
    },
  }
</script>