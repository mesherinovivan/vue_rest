import Router from 'vue-router';
import Vue from 'vue';
import Dashbord from '../components/Dashbord.vue';
import LoginForm from '../components/auth/LoginForm.vue';
import Parent from '../components/lern1/parent.vue';


Vue.use(Router);


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'dashboard',
      component: Dashbord,
      meta: {
        requiresAuth: true,
      },
      children:[{
        path: 'counter',
        component: Parent 
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
    }
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const isLoggedIn = localStorage.getItem("JWT");
  window.console.log(isLoggedIn);
  if (!requiresAuth) {
		next();
  }

  if (requiresAuth && !isLoggedIn) {
    next('/login');
  } else if (requiresAuth && isLoggedIn) {
    next();
  } else {
    next();
  }
});

export default router;