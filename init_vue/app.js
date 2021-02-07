new Vue ({
    el: "#app",
    data: {
        newTask: '',
        tasks: [],
    },
    methods: {
        saveTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        }
    }
});