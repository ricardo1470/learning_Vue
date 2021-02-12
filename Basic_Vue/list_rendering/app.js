const app = new Vue({
    el: "#app",
    data: {
        user: {
            username: 'Ricardo',
            role: 'dev'
        },
        tasks: [
            {name: 'Learn modern JavaScript', time: 3},
            {name: 'Learn Vue.js', time: 7},
            {name: 'learn nodejs', time: 22},
            {name: 'improve as a developer', time: 16},
            {name: 'learn English', time: 12},
            {name: 'travel more', time: 9},
            {name: 'Take a course', time: 14},
        ]
    },
});
Vue.config.devtools = true;