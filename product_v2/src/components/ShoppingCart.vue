<template>
  <div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart">Cart ({{ numInCart }})</button>

    <div id="shoppingCart" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Shopping cart</h5>
            <button class="close"  @click="removeAll(inCart)" data-dismiss="modal">
             &times;
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <tbody>
             
                   <tr v-for="(item, index) in cart" :key="item.id"> 
                  <td>{{ item.name }}</td>
                  <td>{{ item.price  }} &#8377;</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th>{{ total }} </th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
            <button class="btn btn-primary">Check out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'shoppingCart',
  product :[],
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
    
    cart() {
      this.created;
      return this.$store.getters.inCart.map((cartItem) => {
        console.log(this.todos);
        return this.todos.find((forSaleItem) => {
          return cartItem === forSaleItem.id;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
  async created() {
     try {
      const res = await axios.get(`http://localhost:3000/products`)

      this.todos = res.data;
      return this.todos;
    } catch(e) {
      console.error(e)
    }
   },
  
  methods: {
    removeFromCart(index) { 
      axios.delete('http://localhost:3000/products/' + index)
      this.$store.dispatch('removeFromCart', index); 
      
      }
  },
};
</script>
