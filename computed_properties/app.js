const app = new Vue({
    el: "#app",
    data: {
        time: 0,
        search: '',
        user: {
            username: 'Ricardo',
            role: 'dev'
        },
        tasks: [
            {name: 'Learn modern JavaScript', time: 30},
            {name: 'Learn Vue.js', time: 30},
            {name: 'learn nodejs', time: 22},
            {name: 'improve as a developer', time: 70},
            {name: 'learn English', time: 90},
            {name: 'travel more', time: 100},
            {name: 'Take a course', time: 20},
        ]
    },
    computed: {
        filterTasks() {
            return this.tasks.filter(task => {
                return task.time <= this.time && task.name.includes(this.search);
            })
        }
    }
});
Vue.config.devtools = true;