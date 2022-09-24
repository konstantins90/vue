<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/">Home</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/products">Products</router-link></li>
        <li class="nav-item"><router-link class="nav-link" active-class="active" to="/login">Login</router-link></li>
      </ul>
    </header>
  </div>
  <router-view/>
</template>