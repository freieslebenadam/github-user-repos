<template>
  <SearchForm />

  <div class="mx-auto text-center my-5">
    <div class="container">
      <FadeTransition>
        <LoadingSpinner v-if="loading" text="Loading Repos" />
        <ErrorPanel v-else-if="error" />
      </FadeTransition>
    </div>
  </div>
</template>

<script>
import SearchForm from "./SearchForm.vue";
import ErrorPanel from "./ErrorPanel.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import FadeTransition from "@/components/Transitions/FadeTransition.vue";

export default {
  name: "Home",
  components: { SearchForm, ErrorPanel, LoadingSpinner, FadeTransition },
  computed: {
    error() {
      return this.$store.state.error;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>
