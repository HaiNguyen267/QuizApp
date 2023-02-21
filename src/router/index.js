import { createRouter, createWebHistory } from 'vue-router'
import QuizesView from '../views/QuizesView.vue'
import QuizView from '../views/QuizView.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'name',
            component: QuizesView
        },
        {
            path: '/quiz/:id',
            name: "quiz",
            component: QuizView
        }
    ]
})