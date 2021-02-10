const vm = new Vue({
    created() {
        var url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(replyTo => replyTo.json())
            .then(replyTo => this.users = replyTo);
    },
    el: "#app",
    data: {
        users: [],
    },
});
Vue.config.devtools = true;