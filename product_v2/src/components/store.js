import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { id: 1, name: 'Zandu Balm', image: '//placehold.it/200', price: 56 },
      { id: 2, name: 'Crocin', image: '//placehold.it/200', price: 14 },
      { id: 3, name: 'Dolo - 650', image: '//placehold.it/200', price: 49 },
      { id: 4, name: 'Amrutanzan', image: '//placehold.it/200', price: 29 },
      { id: 5, name: 'Cetirizine', image: '//placehold.it/200', price: 99 },
      { id: 6, name: 'Azithromycin', image: '//placehold.it/200', price: 149 },
      { id: 7, name: 'Paracetamol', image: '//placehold.it/200', price: 49 },
      { id: 8, name: 'Disprin', image: '//placehold.it/200', price: 30 },
      { id: 9, name: 'Aspirin', image: '//placehold.it/200', price: 299 },
    ],
    inCart: [], 
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, id) { state.inCart.push(id); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, id) { context.commit('ADD_TO_CART', id); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});
