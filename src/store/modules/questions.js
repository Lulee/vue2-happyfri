// import api from '../../api/api'
// import http from '../../api/fetchData'
import axios from 'axios'

const state = {
    questions:[],
    answerIds:[],
    currentIndex: 1

}

const getters = {
    questions: state =>state.questions,
    currentIndex: state => state.currentIndex,
    answerIds: state => state.answerIds
}

const mutations = {
    setQuestions:(state,questions) => state.questions = questions,
    initialState:(state)=>{
        state.questions = [];
        state.answerIds = [];
        state.currentIndex = 1;
    },
    storeAnswer:(state,answerId)=>state.answerIds.push(answerId),
    increament:(state)=> ++state.currentIndex

}

const actions = {
    async fetchQuestions({ commit }) {
        const response = await axios.get('http://localhost:3000/questions')
        console.log('questions=',response)
        commit('setQuestions', response);
      }
}

export default {
    state,
    getters,
    mutations,
    actions
}