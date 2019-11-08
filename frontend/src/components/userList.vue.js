"use strict";
v - ;
for ( = "(user,key) in users"; ; )
    : key = "key" > {};
{
    user.username;
}
/li>
    < /ul>
    < button;
type = "button";
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
"btn btn-success btn-sm";
v - b - modal.user - modal > Add;
User < /button>
    < UserForm_1.default;
form_id = "form_name" > /user_form>
    < /div>
    < /template>
    < script >
;
var vuex_1 = require('vuex');
var UserForm_1 = require('./UserForm');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    data: function () {
        return {
            form_name: 'user-modal'
        };
    },
    computed: vuex_1.mapState({
        users: function (state) { return state.users.users; }
    }),
    created: function () {
        this.$store.dispatch('users/getUsers');
    },
    components: {
        user_form: UserForm_1.default
    },
    watch: {
        '$route': function () {
            this.$store.dispatch('users/getUsers');
        }
    }
}
    < /script>;
