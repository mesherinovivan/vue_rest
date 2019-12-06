"use strict";
(function () {
    function class_1() {
    }
    return class_1;
}());
"login-overlay" >
    (function () {
        function class_2() {
        }
        return class_2;
    }());
"login-wrapper border border-light" >
    (function () {
        function class_3() {
        }
        return class_3;
    }());
"form-signin";
"onSubmit" >
    (function () {
        function class_4() {
        }
        return class_4;
    }());
"form-signin-heading" > Авторизация < /h2>
    < div;
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
"alert alert-danger";
v - ;
if ( = "error" > {}) {
    error;
}
/div>
    < label;
for ( = ""; (function () {
    function class_5() {
    }
    return class_5;
}()) = "sr-only" > User; name < /label>
    < input)
    v - model;
"username";
required;
var default_2 = (function () {
    function default_2() {
    }
    return default_2;
}());
"form-control sm";
placeholder = "Enter username" >
;
for ( = "inputPassword"; (function () {
    function class_6() {
    }
    return class_6;
}()) = "sr-only" > Password < /label>
    < input; v - model)
     = "password";
type = "password";
id = "inputPassword";
var default_3 = (function () {
    function default_3() {
    }
    return default_3;
}());
"form-control";
placeholder = "Password";
required >
    -button;
type = "submit";
"onSubmit";
var default_4 = (function () {
    function default_4() {
    }
    return default_4;
}());
"btn btn-lg btn-primary btn-block" > Войти < /b-button>
    < /form>
    < /div>
    < /div>
    < /template>
    < script >
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    data: function () {
        return {
            username: "",
            password: '',
            invalidCredentials: false,
        };
    },
    methods: {
        onSubmit: function () {
            var _this = this;
            var formData = {
                username: this.username,
                password: this.password,
            };
            this.$store.dispatch('auth/login', formData).then(function () { return _this.$router.push('/post'); });
        }
    }
}
    < /script>
    < style;
lang = "css";
scoped >
        .login - overlay;
{
    background: ;
    605;
    B56;
    important;
    position: absolute;
    width: 100 % ;
    height: 100 % ;
    top: 0;
    left: 0;
}
login - wrapper;
{
    background: ;
    fff;
    width: 40 % ;
    margin: 12 % auto;
    animation: fadein;
    0.6;
    s;
}
fadein;
{
    from;
    {
        opacity: 0;
    }
    to;
    {
        opacity: 1;
    }
}
form - signin;
{
    max - width;
    330;
    px;
    padding: 10 % 15;
    px;
    margin: 0;
    auto;
}
form - signin.form - signin - heading,
        .form - signin.checkbox;
{
    margin - bottom;
    10;
    px;
}
form - signin.checkbox;
{
    font - weight;
    normal;
}
form - signin.form - control;
{
    position: relative;
    height: auto;
    -webkit - box - sizing;
    border - box;
    box - sizing;
    border - box;
    padding: 10;
    px;
    font - size;
    16;
    px;
}
form - signin.form - control;
focus;
{
    z - index;
    2;
}
form - signin;
input[type = "email"];
{
    margin - bottom;
    -1;
    px;
    border - bottom - right - radius;
    0;
    border - bottom - left - radius;
    0;
}
form - signin;
input[type = "password"];
{
    margin - bottom;
    10;
    px;
    border - top - left - radius;
    0;
    border - top - right - radius;
    0;
}
/style>;
