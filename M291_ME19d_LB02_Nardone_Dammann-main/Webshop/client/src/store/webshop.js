import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const baseURL = "http://localhost:3000/";
export default new Vuex.Store({
  state: {
    products: [
      {"name": "Early Bird Ticket", "price": 180.00},
      {"name": "Vier Tages Ticket", "price": 354.00},
      {"name": "Drei Tages Ticket", "price": 255.00},
      {"name": "OAForever Ticket-Upgrade", "price": 194.00},
      {"name": "1-Tages Ticket Mittwoch", "price": 119.00},
      {"name": "Zeltplatz", "price": 50.00}
    ],
    cart: []
  },
  getters: {
    /**
     * https://thecodebarbarian.com/javascript-reduce-in-5-examples.html
     * @param state
     * @returns {*}
     */
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        let product = state.products.find(p => p.name === item.name);
        return total + (product.price * item.quantity);
      }, 0);
    }
  },
  mutations: {
    //Daten vom Server werden dem state.products zugewiesen für Ausgabe
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if (index !== -1) {
        state.cart[index].quantity++;
      } else {
        state.cart.push({name: product.name, quantity: 1});
      }
    },
    removeFromCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if (index !== -1) {
        state.cart[index].quantity--;
        if (state.cart[index].quantity === 0) state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    loadProducts(context) {
      fetch(baseURL + "v1/products")
          .then((res) => {
            //Daten von Server werden in .json umgewandelt
            return res.json();
          })
          .then((data) => {
            //Daten werden in Store abgelegt -> Mutation
            context.commit('setProducts', data);
          }).catch(error => {
        console.error(error);
      });
    }
  },

})
