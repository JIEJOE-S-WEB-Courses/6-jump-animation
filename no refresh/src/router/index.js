import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path: '/page1',
            name: 'page1',
            component: () => import('../pages/page1.vue'),
        },
        {
            path: '/page2',
            name: 'page2',
            component: () => import('../pages/page2.vue'),
        },
    ]
});
export default router;

