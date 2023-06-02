export default {
    //language=HTML
    template: `

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gap-2 focus:outline-none focus:shadow-outline"
                @click="$emit('update:currenTag',tag)" v-for="tag in tags" :key="tag"
                :class="{'text-green-500' : currenTag === tag}">{{ tag }}
        </button>
    `

    ,
    props: {
        tagsList: {
            type: Array
        },
        currenTag: 'all'
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.tagsList)];
        }
    }
}