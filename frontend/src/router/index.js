import Router from 'vue-router';
import Vue from 'vue';
import Dashbord from '../components/Dashbord.vue';
import LoginForm from '../components/auth/LoginForm.vue';
import Parent from '../components/lern1/parent.vue';
import ParentSlots from '../components/lern2/parent.vue';
import ParentDymanic from '../components/lern3/parent.vue';
import DocsView from '../components/docs/docsView.vue';

Vue.use(Router);


const router = new Router({
  mode: 'history',
  routes: [
    { 
      path: '/dashboard',
      name: 'dashboard',
      component: Dashbord,
      meta: {
        requiresAuth: true,
      },
      children:[{
        path: 'counter',
        name: 'counter',
        component: Parent 
      },
      {
        path: 'slots_lern',
        name: 'slots_lern',
        component: ParentSlots 
      },
      {
        path: 'dynamic_lern',
        name: 'dynamic_lern',
        component: ParentDymanic 
      },
      {
        path: 'docs',
        name: 'docs',
        component: DocsView 
      },
    ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
    },
    {
      path: '*',
      name: 'dashboard',
      component: Dashbord,
      meta: {
        requiresAuth: true,
      },
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