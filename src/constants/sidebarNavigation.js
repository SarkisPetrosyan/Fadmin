import Vitrina from "../components/Vitrina";

const routs = [
    {
        path: '/Продажи',
        component: null,
        name: "Продажи",
        imageClassName: 'shopping-bag-icon',
        
    },
    {
        path: '/Склад', 
        component: null,
        name: "Склад",
        imageClassName: 'store-icon',
    },    
    {
        path: '/Расходы',
        component: null,
        name: "Расходы",
        imageClassName: 'costs-icon',

    },
    {
        path: '/Клиенты',
        component: null,
        name: "Клиенты",
        imageClassName: 'clients-icon',
    },
    {
        path: '/Календарь заказов',
        component: null,
        name: "Календарь заказов",
        imageClassName: 'calendar-icon',

    },
    {
        path: '/Витрина',
        component: Vitrina,
        name: "Витрина",
        imageClassName: 'vitrinal-icon',

    },
    {
        path: '/Сводка',
        component: null,
        name: "Сводка",
        imageClassName: 'summary-icon',

    }

];

export default routs;
