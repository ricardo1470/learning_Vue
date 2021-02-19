Vue.component('boton', {
    props: {
        color: String,
        link: {
            type: String,
            default: "http://ricardo1470.tech/"
        },
        anchorText: String
    },
    template: `<a class="boton" :style="'background-color:' + color" :href="link">{{ anchorText }}</a>`,
});

new Vue({
    el: "#app",
    data: {
        botones: [
            {link: "https://github.com/ricardo1470", anchorText: "github", color: "black"},
            {link: "https://twitter.com/RICARDO1470", anchorText: "twitter", color: "red"},
            {link: "http://ricardo1470.tech", anchorText: "Ricardo.tech", color: "blue"},
        ]
    }
});
Vue.config.devtools = true;