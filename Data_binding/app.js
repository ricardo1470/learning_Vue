new Vue({
    el: "#app",
    data: {
        logged: true,
        messages: {
            in: "Logged as @Ricardo1470.",
            out: "You have been disconnected."
        },
        claseBase: 'user-info'
    },
    computed: {
        message() {
            return this.logged ? this.messages.in : this.messages.out;
        },
        styles() {
            return `logged-${this.logged ? 'in' : 'out'}`;
        }
    }
});
Vue.config.devtools = true;