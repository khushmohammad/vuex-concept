<script>
import { useStore } from "vuex";
// declare the store variable

export default {
  created() {
    console.log(this.$store.state.count);
    console.log(this.$store.dispatch("fetchUsers"));
  },
  mounted() {},
};
</script>

<template>
  <main>
    {{ $store.state.count }}
    {{ $store.state.users }}
  </main>
</template>
