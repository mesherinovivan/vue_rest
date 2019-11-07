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
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
"btn btn-primary" > Save < /button>
    < /div>
    < /template>
    < script >
;
var vuex_1 = require('vuex');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    data: function () {
        return {};
    },
    computed: vuex_1.mapState({
        users: function (state) { return state.users.users; }
    }),
    created: function () {
        this.$store.dispatch('users/getUsers');
    }
}
    < /script>;
