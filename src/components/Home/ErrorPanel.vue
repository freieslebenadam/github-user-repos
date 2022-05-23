<template>
  <div class="text-center my-5">
    <div class="container">
      <div class="alert alert-danger">
        {{ errorMessage }}
      </div>
    </div>
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
