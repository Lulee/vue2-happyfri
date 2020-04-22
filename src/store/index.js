import Vue from "vue"
import Vuex from "vuex"
import * as questions from "./modules/questions"

Vue.use(Vuex)

export default {
    module:{
        questions
    }
}

