<template>
	<div class="row">
        <b-form @submit="onSubmit"  class="w-100">
        <b-form-group id="form-title-group"
                        label="Username"
                        label-for="form-user-input">
            <b-form-input id="form-user-input"
                            type="text"
                            v-model="username"
                            required
                            placeholder="Enter username">
            </b-form-input>
            </b-form-group>
            <b-form-group id="form-author-group"
                        label="E-Mail:"
                        label-for="form-password-input">
                <b-form-input id="form-password-input"
                            type="text"
                            v-model="password"
                            required
                            placeholder="Password">
                </b-form-input>
            </b-form-group>
            <div v-if="invalidCredentials" class="form-group">
					<small class="text-danger">Invalid credentials</small>
			</div>
            <b-button type="submit" @click.prevent="onSubmit"  class="btn btn-primary">Login</b-button>
        </b-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
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
