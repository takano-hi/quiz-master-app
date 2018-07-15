import api from './api';

/* eslint-disable arrow-body-style */
export default {
  getQuizzes: ({ commit }, params = {}) => {
    return api.get('/v1/quizzes', params).then((data) => {
      commit('setMyQuizzes', data);
    });
  },
  createQuizzes: ({ commit }, { quiz }) => {
    return api.post('/v1/quizzes', { quiz }).then((data) => {
      commit('addMyQuizzes', data);
    });
  },
  signUp: ({ commit }, { form }) => new Promise((resolve, reject) => {
    api.submit('/v1/users/sign_up', form).then((data) => {
      commit('signIn', data);
      resolve(data);
    }).catch((error) => {
      reject(error);
    });
  }),
  signIn: ({ commit }, { form }) => new Promise((resolve, reject) => {
    api.submit('/v1/users/login', form).then((data) => {
      commit('signIn', data);
      resolve(data);
    }).catch((error) => {
      reject(error);
    });
  }),
  getMe: ({ commit }) =>
    api.get('/v1/users/me').then((data) => {
      commit('signIn', data);
    }),
  signOut: ({ commit }) => {
    commit('signIn', {});
  },
};
/* eslint-enable */
