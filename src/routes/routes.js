import React, { lazy } from 'react'
import { HomeRedirect } from './RouteUtils'
import RouteController from './RouteController'
const Dashboard = lazy(() => import('../components/views/Dashboard'))
const Login = lazy(() => import('../components/views/Login'))
const Home = lazy(() => import('../components/views/Home'))
const Registro = lazy(() => import('../components/views/Registro'))
const Lista = lazy(() => import('../components/views/Lista'))

const routes = [
    {
        path: "/",
        exact: true,
        component: HomeRedirect
    },
    {
        path: "/login",
        exact: true,
        render: props => <Login {...props} />
    },
    {
        path: "/app",
        render: props => <RouteController component={Home} {...props} />,
        routes: [
            {
                path: "/app",
                exact: true,
                render: props => <RouteController component={Dashboard} {...props} />
            }
        ]
    },
    {
        path: '/dashboard',
        render: props => <Dashboard {...props} />
    },
    {
        path: '/registro',
        render: props => <Registro {...props} />
    },
    {
        path: '/lista',
        render: props => <Lista {...props} />
    }
]

export default routes