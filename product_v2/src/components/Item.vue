<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-text">{{ price  }} &#8377;</div>
        <div class="row justify-content-end">
          <button class="btn btn-primary" @click="addToCart(id)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'item',
  props: ['id', 'name', 'image', 'price'],

  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id);
    },
  },
};
</script>
