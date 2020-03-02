"use strict";
lang;
"html" >
    -container;
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
"bv-example-row" >
    -row >
    (function () {
        function class_1() {
        }
        return class_1;
    }());
"post" >
    -card;
title = "Адресная книга";
tag = "article";
style = "max-width: 250rem;";
var default_2 = (function () {
    function default_2() {
    }
    return default_2;
}());
"mb-2"
    >
        -card - text >
    /UserList>
    < /b-card-text>
    < /b-card>
    < /div>
    < /b-row>
    < /b-container>
    < /template>
    < script >
;
var userList_1 = require('./userList');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    data: function () {
        return {
            post: null,
        };
    },
    components: {
        UserList: userList_1.default
    },
}
    < /script>;
