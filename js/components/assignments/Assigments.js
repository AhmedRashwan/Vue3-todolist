import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
import Panel from "../Panel.js";

export default {
    components: {
        AssignmentList,
        AssignmentCreate,
        Panel
    },
    // language=HTML
    template: `
        <div>
            <AssignmentList :assignmentList="filter.inProgress" title="In-Progress"></AssignmentList>
            <AssignmentList :assignmentList="filter.completed" title="Completed"></AssignmentList>
            <AssignmentCreate @addNewAssignment="addNewAssignment"></AssignmentCreate>

            <!--             Named Slots-->
            <Panel :tasks="filter.inProgress">
                <template v-slot:title>
                    <h1>In Progress({{filter.inProgress.length}})</h1>
                </template>
                this is the default slot
            </Panel>
        </div>
    `,
    data() {
        return {
            greeting: 'hello worlds',
            assignments: [],
            tasks: ['Panel Task 2', 'Panel Task 2']
        }
    },
    created() {
        fetch('http://localhost:3001/assignments').then((res) => res.json()).then((data) => {
            console.log(data);
            return this.assignments = data
        })
    },
    computed: {
        filter() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        }
    },
    methods: {
        addNewAssignment(name) {
            this.assignments.push({
                id: this.assignments.length,
                name,
                complete: false,
                tag: 'new'
            })
        }
    }
}