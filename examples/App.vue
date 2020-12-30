<template>
  <div id="app">
    <loading :loading='true'></loading>
  </div>
</template>

<script>
import loading from "~/Loading/index.vue";

export default {
  name: 'App',
  components: {
    loading
  }
}
</script>
