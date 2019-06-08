import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Money from './components/Money';
import Plus from './components/Plus';

const routes = [
    {
        path: '/money',
        name: 'Money',
        component: Money
    },
    {
        path: '/plus',
        name: 'Plus',
        component: Plus
    },
    {
        path: '',
        redirect: {
            name: 'Money'
        }
    },
    {
        path: '*',
        redirect: {
            name: 'Money'
        }
    }
];

export const router = new VueRouter ({
    mode: 'history',
    routes
})