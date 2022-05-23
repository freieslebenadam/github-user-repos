import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    repos: [],
    loading: false,
    error: null,
  },
  getters: {},
  mutations: {
    setRepos(state, payload) {
      state.repos = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    fetchRepos: async ({ commit }, { username }) => {
      commit("setLoading", true);
      commit("setError", null);

      try {
        const { data } = axios.get(
          `https://api.github.com/users/${username}/repos`
        );

        commit("setRepos", data);
        commit("setLoading", false);
      } catch (error) {
        switch (error.response.status) {
          case 404:
            commit("setError", "Couldn't find this GitHub user");
            break;
          case 403:
            commit(
              "setError",
              "You don't have permission to view this user's repos"
            );
            break;
          case 401:
            commit(
              "setError",
              "You need to be authorized to view this user's repos"
            );
            break;
          default:
            commit("setError", "Something went wrong");
            break;
        }
      }
    },
  },
  modules: {},
});
