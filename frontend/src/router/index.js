import Router from 'vue-router';
import Vue from 'vue';
import Post from '../components/Post.vue';
import LoginForm from '../components/auth/LoginForm.vue';

Vue.use(Router);


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/Post',
      name: 'Post',
      component: Post,
      meta: {
        requiresAuth: true,
      },
    },
    /*{
      path: '*',
      redirect: '/dashboard',
    },*/
    {
      path: '/login',
      name: 'Login',
      component: LoginForm,
    },
    /*{
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },*/

  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const token = localStorage.getItem('JWT');
  
  if (!requiresAuth) {
		next();
  }
    
  if (requiresAuth && !token) {
    next('/login');
  } else if (requiresAuth && token) {
    next();
  } else {
    next();
  }
});

export default router;