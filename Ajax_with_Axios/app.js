new Vue({
    el: "#app",
    mounted() {
        axios.get(this.url)
            .then(replyTo => this.tasks = replyTo.data)
            .catch(error => console.error(error));
    },
    data: {
        newTask: '',
        url: 'https://jsonplaceholder.typicode.com/todos',
        tasks: [],
    },
    methods: {
        saveTask() {
            axios.post(this.url, {
                title: this.newTask,
                userId: Math.floor(Math.random() * 10) + 1,
            })
            .then(replyTo => {
                console.log(replyTo);
                this.tasks.unshift({
                    title: this.newTask,
                });
                this.newTask = '';
            })
            .catch(error => console.error(error));
        }
    }
});
Vue.config.devtools = true;