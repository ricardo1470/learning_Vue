const app = new Vue({
    el: "#app",
    data: {
        enlace: "http://www.vuejs.org",
        baseUrl: 'https://placekitten.com',
        width: 50,
        width: 50,
    },
    computed: {
        urlcomplete() {
            return `${this.baseUrl}/${this.width * 5}/${this.width * 5}`;
        }
    }
});
Vue.config.devtools = true;