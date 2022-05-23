<template>
  <SearchForm />

  <FadeTransition>
    <LoadingPanel v-if="loading" />
    <ErrorPanel v-else-if="error" />
    <ReposList v-else-if="repos && repos.length" :repos="repos" />
    <div v-else class="container">
      <p
        class="text-center fs-4 text-primary-800 bg-white rounded shadow p-5 mt-5"
      >
        This user doesn't have any public repositories...
      </p>
    </div>
  </FadeTransition>
</template>

<script>
import FadeTransition from "@/components/Transitions/FadeTransition.vue";
import SearchForm from "./SearchForm.vue";
import ErrorPanel from "./ErrorPanel.vue";
import LoadingPanel from "./LoadingPanel.vue";
import ReposList from "./Repos/ReposList.vue";

export default {
  name: "Home",
  components: {
    SearchForm,
    ErrorPanel,
    LoadingPanel,
    FadeTransition,
    ReposList,
  },
  computed: {
    error() {
      return this.$store.state.error;
    },
    loading() {
      return this.$store.state.loading;
    },
    repos() {
      return this.$store.state.repos;
    },
  },
};
</script>
