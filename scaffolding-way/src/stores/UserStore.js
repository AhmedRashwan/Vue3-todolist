import {reactive} from "vue";

export const assignments = reactive([
        {
            id: 1,
            name: 'assignment 1',
            completed: false
        },
        {
            id: 2,
            name: 'assignment 2',
            completed: false
        },
        {
            id: 3,
            name: 'assignment 3',
            completed: false
        },
        {
            id: 4,
            name: 'assignment 4',
            completed: true
        }
    ],
);

export const userDetails = reactive({
    name: "Ahmed Rashwan",
    email: "Ahmed.Rashwan2014@yahoo.com",
    phone: "+201026569478"
});
