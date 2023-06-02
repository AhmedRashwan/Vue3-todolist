// named slots
export default {
    // language=HTML
    template: `
        <div class="container mx-auto py-4">
            <div class="container mx-auto py-4">
                <h5 class="text-2xl font-bold mb-4">
                    <slot v-if="$slots.title" name="title">
                    </slot>
                </h5>
                <slot/>
                <ul class="border border-gray-200 p-4">
                    <li v-for="task in tasks" class="flex items-center mb-2">
                        <input type="checkbox" class="form-checkbox h-4 w-4 text-gray-600 rounded-sm mr-2">
                        <label class="text-gray-800">
                            {{task.name}}
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    `
    , props: {
        tasks: Array
    }
}