new Vue({
    el: "#app",
    data: {
        password: null,
        status: "Enter New Password...",
        invalid: [
            "admin",
            "12345",
            "password"
        ],
    },
    watch: {
        password(recent, early) {
            if (this.invalid.indexOf(recent) > -1) {
                this.status = "Invalid password";
                return false;
            }

            if (recent.length < 5) {
                this.status = "The password must be at least 5 characters long";
                return false;
            }

            this.status = "Correct password";
        }
    }
});
Vue.config.devtools = true;