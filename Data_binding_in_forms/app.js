const vm = new Vue({
    mounted() {
        if (window.localStorage.getItem('form'))
            this.form = JSON.parse(window.localStorage.getItem('form'));
    },
    el: "#app",
    data: {
        form: {
            name: '',
            lastName: '',
            message: '',
            contact: '',
            products: '',
            accepts: false,
        }
    },
});

vm.$watch('form', (recent, former) => {
    window.localStorage.setItem('form', JSON.stringify(recent));
}, { deep: true })
Vue.config.devtools = true;
