Vue.component('gato', {
            template: `<img :src="urlcomplete">`,
            data() {
                return {
                    width: Math.floor(Math.random() * 600) + 100,
                    high: Math.floor(Math.random() * 600) + 100,
                }
            },
            computed: {
                urlcomplete() {
                    return `https://placekitten.com/${this.width}/${this.high}`
                }
            }
        });

        new Vue({
            el: "#app",
        });

        Vue.config.devtools = true;