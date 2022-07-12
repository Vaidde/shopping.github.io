import Vue from 'vue';
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);

//引入小倉庫
import home from './home';
import search from './search';

export default new Vuex.Store({
    //實現Vuex倉庫模塊式開發存儲數據
    modules: {
        home,
        search
    }
});



