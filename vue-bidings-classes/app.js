let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150
        }
    },
    computed: {
        circleClasses() {
            return this.isPurple == true ? 'purple':'';
        },
        compStyle() {
            return {
                width: this.size + 'px', 
                height: this.size + 'px', 
                lineHeight: this.size + 'px'
            }
        },
        transformStyle() {
            return `transform: rotate(${this.size}deg)`;
        }
    },
    methods: {
        onToggle() {
            this.isPurple = !this.isPurple;
        }
    },
}).mount('#app')