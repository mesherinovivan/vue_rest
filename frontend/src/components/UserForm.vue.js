"use strict";
-modal;
ref = "addUserModal";
id = "form_id";
title = "Add a new user";
hide - footer >
    -form;
"onSubmit";
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
"w-100" >
    -form - group;
id = "form-title-group";
label = "UserName:";
label - ;
for ( = "form-user-input" >
    -form - input; id = "form-user-input"; type = "text")
    v - model;
"addUserForm.username";
required;
placeholder = "Enter username" >
    /b-form-input>
    < /b-form-group>
    < b - form - group;
id = "form-author-group";
label = "E-Mail:";
label - ;
for ( = "form-email-input" >
    -form - input; id = "form-email-input"; type = "text")
    v - model;
"addUserForm.email";
required;
placeholder = "Enter email" >
    /b-form-input>
    < /b-form-group>
    < b - button;
type = "submit";
variant = "primary" > Submit < /b-button>
    < b - button;
type = "reset";
variant = "danger" > Reset < /b-button>
    < /b-form>
    < /b-modal>
    < /div>
    < /template>
    < script >
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    props: {
        form_id: String,
    },
    data: function () {
        return {
            addUserForm: {
                username: '',
                email: '',
            },
        };
    },
    methods: {
        onSubmit: function (evt) {
            evt.preventDefault();
            this.$refs.addUserModal.hide();
            var payload = {
                username: this.addUserForm.username,
                email: this.addUserForm.email,
            };
            this.$store.dispatch('users/addUsers', payload);
        },
    }
}
    < /script>;
