<template>
<div class="login-overlay">
    <div class="login-wrapper border border-light">
        <form class="form-signin" @submit="onSubmit">
            <h2 class="form-signin-heading">Авторизация</h2>
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <label for="" class="sr-only">User name</label>
            <input v-model="username" required class="form-control sm"  placeholder="Enter username">
            <label for="inputPassword" class="sr-only">Password</label>
            <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <b-button type="submit" @click.prevent="onSubmit"  class="btn btn-lg btn-primary btn-block">Войти</b-button>
        </form>

	</div>
</div>
</template>

<script>
	export default {
		data() {
			return {
				username:"",
				password: '',
				invalidCredentials: false,
			}
		},
		methods: {
			onSubmit() {
				let formData = {
					username: this.username,
					password: this.password,
				}
                this.$store.dispatch('auth/login', formData).then(() => this.$router.push('/post'))
			}
		}
	}
</script>
<style lang="css" scoped>
.login-overlay {
  background: #605B56 !important;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.login-wrapper {
  background: #fff;
  width: 40%;
  margin: 12% auto;
  animation: fadein 0.6s;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>