import api from '../../api/api'
import http from '../../api/fetchData'
//import axios from 'axios'

const state = {
    correctAnswers: [], //正确答案，从后台获取
    tips: '', //分数提示语
    scores: 0 //分数

}

const getters = {
    correctAnswers: state => state.correctAnswers,
    tips: state => state.tips,
    scores: state => state.scores
}

const mutations = {
    setCorrectAnswers: (state, correctAnswers) => state.correctAnswers = correctAnswers,
    computeScores: (state, uAnswers) => {
        uAnswers.forEach((element, index) => {
            if (element === state.correctAnswers[index]) {
                state.scores += 20;
            }
        });
    
        switch (state.scores) {
            case 0:
                state.tips = '兄die，你故意的吧';
                break;
            case 20:
                state.tips = '你说，是不是把知识都还给小学老师了？';
                break;
            case 40:
                state.tips = '还不错，但还需要继续加油哦！';
                break;
            case 60:
                state.tips = '不要嘚瑟还有进步的空间!';
                break;
            case 80:
                state.tips = '智商离爆表只差一步了！';
                break;
            case 100:
                state.tips = '你也太聪明啦，葡萄之家欢迎你！';
                break;
            default:
                break;

        }
    }
}

const actions = {
    async fetchAnswers({
        commit
    }) {
        const response = await http.get(api.getAnswers);
        commit('setCorrectAnswers', response);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}