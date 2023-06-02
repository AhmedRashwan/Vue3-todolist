export default {
    data() {
        return {
            "name": "Hello World"
        }
    },
    computed: {
        getButtonName() {
            return this.name;
        }
    },
    mounted() {
        console.log("Button Componenet mounted");
    },
    template: `
    <button class="bordered"><slot></slot></button>
    `
}