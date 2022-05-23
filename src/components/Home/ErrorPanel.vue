<template>
  <div class="alert alert-danger">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: "ErrorPanel",
  computed: {
    errorMessage() {
      return this.$store.state.error;
    },
  },
};
</script>
