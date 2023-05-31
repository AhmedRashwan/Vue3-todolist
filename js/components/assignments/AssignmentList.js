import AssignmentTags from "./AssignmentTags.js"

export default {
    components: {
        AssignmentTags
    },
    // language=HTML
    template: `
        <div class="container mx-auto py-4">
            <div class="container mx-auto py-4" v-show="assignmentList.length">
                <h1 class="text-2xl font-bold mb-4">{{title}} ({{assignmentList.length}}) </h1>
                <AssignmentTags :tagsList="assignmentList.map((assignment)=> assignment.tag)"
                                v-model:currenTag="currentTag"

                ></AssignmentTags>
                <ul class="border border-gray-200 p-4">
                    <li class="flex items-center mb-2" v-for="assignment in filterAssignment" :key="assignment.id">
                        <label class="text-gray-800" for="assignmentItem">
                            <input class="form-checkbox h-4 w-4 text-gray-600 rounded-sm mr-2" id="assignmentItem"
                                   type="checkbox" v-model="assignment.complete"/>
                            {{assignment.name}}
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    `,
    props: {
        assignmentList: {
            type: Array, default: []
        },
        title: String
    },
    data() {
        return {
            currentTag: 'math'
        }
    },
    computed: {
        filterAssignment() {
            if (this.currentTag === 'all') {
                console.log(this.currentTag)
                return this.assignmentList;
            }
            return this.assignmentList.filter((assignment) => assignment.tag === this.currentTag)
        }
    }
}