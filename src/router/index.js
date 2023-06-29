import Item from '../components/Item'

const router = [
    {
        patch: '/', 
        component: Item,
    },
    {
        patch: '/:data', 
        component: Item,
    },
    // {
    //     patch: '/beach', 
    //     component: Item,
    //     data: 'beach'
    // },
    // {
    //     patch: '/bird', 
    //     component: Item,
    //     data: 'bird'
    // },
    // {
    //     patch: '/food', 
    //     component: Item,
    //     data: 'food'
    // },
];

export default router;