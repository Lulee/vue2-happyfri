import App from '../App'
// import HomePage from '../components/pages/HomePage'
// import QuestionPage from '../components/pages/QuestionPage'
// import ResultPage from '../components/pages/ResultPage'


// export default [{
//     path: '/',
//     component: App,
//     children: [{
//         path: '',
//         component: HomePage
//     }, {
//         path: '/question',
//         component: QuestionPage
//     }, {
//         path: '/result',
//         component: ResultPage
//     }]
// }]

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../components/pages/HomePage')), 'home')
    }, {
        path: '/question',
        component: r => require.ensure([], () => r(require('../components/pages/QuestionPage')), 'question')
    }, {
        path: '/result',
        component: r => require.ensure([], () => r(require('../components/pages/ResultPage')), 'result')
    }]
}]

