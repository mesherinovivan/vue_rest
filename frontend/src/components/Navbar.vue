<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">{{title}}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
         <b-nav-item href="#" to="/post">Link</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
     props: {
        title: {
          type: String,
          required: false,
        },
    },
    data: function () {
      return {
        
      }
    },
}
</script>