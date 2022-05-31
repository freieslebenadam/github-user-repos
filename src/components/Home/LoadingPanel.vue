<template>
  <div class="mx-auto text-center my-5 container">
    <LoadingSpinner text="Loading Repos" />
  </div>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: "LoadingPanel",
  components: { LoadingSpinner },
};
</script>
