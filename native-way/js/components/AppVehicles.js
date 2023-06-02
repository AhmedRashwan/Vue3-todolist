export default {
    data() {
        return {
            cars: [{id: 1, name: "Cs5", model: "Cetreon"}, {id: 2, name: "E200", model: "Mercedes"}, {
                id: 3, name: "Sportage", model: "Kia"
            },], motorcycles: [{id: 1, name: "MX300", model: "Cetreon"}, {id: 2, name: "super30", model: "Mercedes"}, {
                id: 3, name: "Yonu", model: "Kia"
            },],
            type: 'primary'

        }
    }, template: `
    <ul :class="type">
    <li v-for="car in cars" :key="car.id">
    {{car.name}}
    </li>
    </ul>
`
}
