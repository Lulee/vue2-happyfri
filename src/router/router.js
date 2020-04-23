// import App from '../App'
import HomePage from '../components/pages/HomePage'
// const HomePage = () => import('../components/pages/HomePage')
// const QuestionPage = () => import('../components/pages/QuestionPage') 
// const ResultPage = () => import( '../components/pages/ResultPage')


// const routers= [{
//     path: '/',
//     component: App,
//     children: [{
//         path: '/home',
//         name: 'home',
//         component: HomePage
//     }, {
//         path: '/question',
//         name:"question",
//         component: QuestionPage
//     }, {
//         path: '/result',
//         component: ResultPage
//     }]
// }]


const routers = [
    {
        path: '/', component: HomePage 
    }
    // {
    //     path: '/question',
    //     component: QuestionPage
    // }, 
    // {
    //     path: '/result',
    //     component: ResultPage   
    // }
]

export default routers