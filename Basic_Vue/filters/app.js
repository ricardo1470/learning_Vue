new Vue({
    el: "#app",
    created() {
        fetch(this.url)
            .then(replyTo => replyTo.json())
                .then(replyTo => this.users = replyTo.results.map(user => user.name));
    },
    data: {
        url: 'https://randomuser.me/api/?results=100',
        users: [],
    },
    computed: {
        fullName() {
            return this.users.map(user => `Name: ${user.title}: ${user.first} ${user.last}`)
        }
    },
    filters: {
        capitalLetters(data) {
            return data.toUpperCase();
        },
        shortened(data, amount) {
            return data.substring(0, amount) + '...';
        }
    }
});
Vue.config.devtools = true;
