<script lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { productsQuery } from '../graphql/queries/products.query'

export default {
  name: 'App',
  setup () {
    const { result, loading, error } = useQuery(productsQuery)
    return {
      result, loading, error
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Products</h1>
    <div v-if="error">Something went wrong...</div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col" v-if="loading">Loading...</div>
      <div class="item col-2 col-md-4" v-else v-for="product in result.products.items" :key="product.sku">
        <div class="card mb-4">
          <img class="card-img-top" v-bind:src="product.thumbnail.url" v-bind:alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.sku }}</p>
            <p class="card-text text-end fs-3">{{ $filters.currencyUSD(product.price_range.minimum_price.regular_price.value) }}</p>
            <button class="btn btn-primary">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>