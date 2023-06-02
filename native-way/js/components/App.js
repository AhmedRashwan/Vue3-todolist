import AppButton from "./AppButton.js";
import AppVehicles from "./AppVehicles.js";
import Assignments from "./assignments/Assigments.js";

export default {
    components: {
        AppButton,
        AppVehicles,
        Assignments
    },
    // language=HTML
    template: `
        <Assignments/>
        <!--    <h1> TEST 1 </h1>-->
        <!--    <input type="text" v-model="greeting">-->
        <!--    <p>{{greeting}} {{greeting.length}}</p>-->
        <!--    <button>Click me</button>-->
        <!--        <section id="vehicles">-->
        <!--            <app-vehicles>-->
        <!--                <slot></slot>-->
        <!--            </app-vehicles>-->
        <!--        </section>-->


        <!--        <app-button><p>HELLO</p></app-button>-->
        <!--        <pre>{{assignments}}</pre>-->

    `,
    data() {
        return {
            newAssignment: "new assignment"
        }
    },
    methods: {
        hello() {
            alert(this.newAssignment);
        }
    }
};