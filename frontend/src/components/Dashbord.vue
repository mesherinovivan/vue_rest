<template>
<div id="board" class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar" :class="{active: isOpen}">
            <div class="sidebar-header">
                <h3></h3>
            </div>

            <ul class="list-unstyled components">
                <p></p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" >
                        <router-link to="/dashboard/post/">Home</router-link>
                    </a>
                </li>
                <button @click="get_users()">Тестовая кнопка</button>
            </ul>
        </nav>

        <!-- Page Content  -->
        <div id="content" :class="{active: isOpen}">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button type="button" id="sidebarCollapse" class="btn btn-info" @click="toggle()" >
                        <i class="fas fa-align-left"></i>
                        <font-awesome-icon icon="bars" />

                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                <div id="app_content">
                    <router-view class="view"></router-view>
                </div>
        </div>
    </div>
</template>
<script>
 
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
import { mapState} from 'vuex';

export default {
    name: 'app',
    data(){
        return {

        }
    },
    computed: {
        ...mapState({
            isOpen: state => state.sidebar.isOpen,
        }),
    },
    methods:{
        toggle(){
            this.$store.dispatch('sidebar/toggleSideBar');
        },
        get_users() {
             alert(12);
          this.$store.dispatch('users/getUsers');
	    }
    }
}
</script>

<style>
    #board {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
    }
</style>