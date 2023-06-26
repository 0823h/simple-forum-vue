import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import CreatePage from './views/CreatePage';
import PostTable from './views/PostTable';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/home', component: HomePage},
        {path: '/posts/create', component: CreatePage},
        {path: '/login', component: LoginPage},
        {path: '/table', component: PostTable}
    ]
})

export default router;