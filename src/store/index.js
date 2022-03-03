import Vue from "vue";
import Vuex from "vuex";
import usersAPI from './../apis/users'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      account: '',
      avatar: '',
      cover: '',
      createdAt: '',
      email: "",
      id: -1,
      image: "",
      introduction: '',
      isAdmin: false,
      name: "",
      role: '',
      updateAt: '',
    },
    isAuthenticated: false,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser,
      };
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true;
    },
  },
  actions: {
    //把currentUser放到vuex用
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        const {
          account,
          avatar,
          cover,
          createdAt,
          email,
          id,
          image,
          introduction,
          isAdmin,
          name,
          role,
          updateAt,
        } = data
        commit('setCurrentUser', {
          account,
          avatar,
          cover,
          createdAt,
          email,
          id,
          image,
          introduction,
          isAdmin,
          name,
          role,
          updateAt,
        })
      } catch (error) {
        console.log('error', error)
        console.error('can not fetch user information')
      }
    }
  },
  modules: {},
});
