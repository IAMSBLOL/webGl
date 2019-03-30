import Loadable from '@loadable/component'

const LoadableComponent = (importComponent) => {
    return Loadable({
        loader: importComponent,
        loading: () => '....'
    });
}

/**
 * 路由配置
 */
const routes = [
    {
        path: '/',
        component: LoadableComponent(() => import('./view/home'))
    },
    {
        path: '/react',
        component: LoadableComponent(() => import('./view/imagesFlow'))
    }
]

export default routes;
