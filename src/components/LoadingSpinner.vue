<template>
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <h2 v-if="text" class="fs-3 fw-medium text-primary mt-2">{{ text }}</h2>
</template>

<script>
export default {
  name: "LoadingSpinner",
  props: ["text"],
};
</script>
