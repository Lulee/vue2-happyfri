import Vue from "vue"
import Vuex from "vuex"
import questions from "./modules/questions"
import scores from "./modules/scores"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        questions,
        scores
    }
  });

