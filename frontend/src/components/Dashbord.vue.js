"use strict";
id;
"board";
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
"wrapper" >
    !--Sidebar;
-- >
    id;
"sidebar";
var default_2 = (function () {
    function default_2() {
    }
    return default_2;
}());
"{active: isOpen}" >
    (function () {
        function class_1() {
        }
        return class_1;
    }());
"sidebar-header" >
    /h3>
    < /div>
    < ul;
var default_3 = (function () {
    function default_3() {
    }
    return default_3;
}());
"list-unstyled components" >
    /p>
    < li;
var default_4 = (function () {
    function default_4() {
    }
    return default_4;
}());
"active" >
    href;
"#homeSubmenu";
data - toggle;
"collapse";
aria - expanded;
"false" >
    -link;
to = "/dashboard/post/" > Home < /router-link>
    < /a>
    < /li>
    < /ul>
    < /nav>
    < !--Page;
Content-- >
    id;
"content";
var default_5 = (function () {
    function default_5() {
    }
    return default_5;
}());
"{active: isOpen}" >
    (function () {
        function class_2() {
        }
        return class_2;
    }());
"navbar navbar-expand-lg navbar-light bg-light" >
    (function () {
        function class_3() {
        }
        return class_3;
    }());
"container-fluid" >
    type;
"button";
id = "sidebarCollapse";
var default_6 = (function () {
    function default_6() {
    }
    return default_6;
}());
"btn btn-info";
"toggle()" >
    (function () {
        function class_4() {
        }
        return class_4;
    }());
"fas fa-align-left" > /i>
    < font - awesome - icon;
icon = "bars" /  >
    /button>
    < button;
var default_7 = (function () {
    function default_7() {
    }
    return default_7;
}());
"btn btn-dark d-inline-block d-lg-none ml-auto";
type = "button";
data - toggle;
"collapse";
data - target;
"#navbarSupportedContent";
aria - controls;
"navbarSupportedContent";
aria - expanded;
"false";
aria - label;
"Toggle navigation" >
    (function () {
        function class_5() {
        }
        return class_5;
    }());
"fas fa-align-justify" > /i>
    < /button>
    < div;
var default_8 = (function () {
    function default_8() {
    }
    return default_8;
}());
"collapse navbar-collapse";
id = "navbarSupportedContent" >
    (function () {
        function class_6() {
        }
        return class_6;
    }());
"nav navbar-nav ml-auto" >
    (function () {
        function class_7() {
        }
        return class_7;
    }());
"nav-item" >
    (function () {
        function class_8() {
        }
        return class_8;
    }());
"nav-link";
href = "#" > Page < /a>
    < /li>
    < li;
var default_9 = (function () {
    function default_9() {
    }
    return default_9;
}());
"nav-item" >
    /li>
    < /ul>
    < /div>
    < /div>
    < /nav>
    < div;
id = "app_content" >
    -view;
var default_10 = (function () {
    function default_10() {
    }
    return default_10;
}());
"view" > /router-view>
    < /div>
    < /div>
    < /div>
    < /template>
    < script >
;
var vue_1 = require('vue');
var bootstrap_vue_1 = require('bootstrap-vue');
require('../assets/css/style.css');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap-vue/dist/bootstrap-vue.css');
var fontawesome_svg_core_1 = require('@fortawesome/fontawesome-svg-core');
var free_solid_svg_icons_1 = require('@fortawesome/free-solid-svg-icons');
var vue_fontawesome_1 = require('@fortawesome/vue-fontawesome');
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faBars);
vue_1.default.component('font-awesome-icon', vue_fontawesome_1.FontAwesomeIcon);
vue_1.default.use(bootstrap_vue_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'app',
    data: function () {
        return {};
    },
    computed: {
        mapState: function (_a) {
            var state = _a.isOpen, state = _a.state, sidebar = _a.sidebar, isOpen = _a.isOpen;
        },
    },
    methods: {
        toggle: function () {
            this.$store.dispatch('sidebar/toggleSideBar');
        }
    }
}
    < /script>
    < style >
;
board;
{
    font - family;
    'Avenir', Helvetica, Arial, sans - serif;
    -webkit - font - smoothing;
    antialiased;
    -moz - osx - font - smoothing;
    grayscale;
    color: ;
    2;
    c3e50;
}
/style>;
