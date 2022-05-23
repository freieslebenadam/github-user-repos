<template>
  <div class="mx-auto text-center my-5">
    <div class="container">
      <LoadingSpinner text="Loading Repos" />
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: "LoadingPanel",
  components: { LoadingSpinner },
};
</script>
