import express from 'express';

import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/Registration/user.route';
import { TaskRoutes } from '../modules/Task/task.route';

const router = express.Router();

const modulerRoutes = [
    {
        path: '/auth',
        route: UserRoutes,
    },
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/tasks',
        route: TaskRoutes,
    },
];

modulerRoutes.forEach(route => router.use(route.path, route.route));

export default router;