<template>
  <div class="mx-auto text-center my-5 container">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">{{ text ? text : "Loading" }}</span>
    </div>
    <h2 v-if="text" class="fs-3 fw-medium text-primary mt-2">{{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: "LoadingPanel",
  props: ["text"],
};
</script>
