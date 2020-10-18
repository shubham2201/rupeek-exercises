<template>
  <div>
    <Navbar />
    <div class="container my-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: 'App',
  components : {
  Navbar,
},
}

</script>

<style>

</style>


