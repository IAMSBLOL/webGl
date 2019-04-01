import loadable from '@loadable/component'

// const LoadableComponent = (importComponent) => {
//     return Loadable({
//         loader: importComponent,
//         loading: () => '....'
//     });
// }

/**
 * 路由配置
 */
const routes = [
    {
        path: '/',
        component: loadable(() => import('./view/home/layout'), {
            fallback: 'Loading',
        }),
        routes: [
            {
                path: '/home/resume',
                component: loadable(() => import('./view/home/resume')),
            },
            {
                path: '/home/discribtion',
                component: loadable(() => import('./view/home/discribtion')),
            }
        ]
    },
    {
        path: '/project',
        component: loadable(() => import('./view/project/layout'))
    }
]

export default routes;
