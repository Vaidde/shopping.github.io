//home的store

import { reqCategoryList } from '@/api';
const state = {
    //依照伺服器返回的是物件還是陣列用{}或[]
    categoryList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
};
const actions = {
    //連結API
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }

    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}