<template>
  <div class="text-center my-5">
    <div class="container">
      <div
        class="error-message bg-white rounded-1 shadow py-4 text-danger fs-5 d-flex align-items-center justify-content-center fw-medium"
      >
        <span class="me-3 fs-4 text-danger">
          <i class="bi bi-exclamation-triangle-fill"></i>
        </span>
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Fix responsivity
export default {
  name: "ErrorPanel",
  computed: {
    errorMessage() {
      return this.$store.state.error;
    },
  },
};
</script>
