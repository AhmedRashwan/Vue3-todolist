export default {
    //language=HTML
    template: `
        <form class="container mx-auto py-4" @submit.prevent="add" class="bg-white p-6 rounded-lg shadow-md">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                    new Assignment
                </label>
                <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        v-model="newAssignment"
                        placeholder="assignment..."
                />
            </div>
            <div class="flex justify-end">
                <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"

                >
                    Submit
                </button>
            </div>
        </form>`,
    data() {
        return {
            newAssigment: {
                type: String,
                default: ""
            }
        }
    },
    methods: {
        add() {
            this.$emit('addNewAssignment', this.newAssignment);
        }
    }

}