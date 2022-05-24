<template>
  <section class="mt-4">
    <div class="container">
      <form
        @submit.prevent="fetchRepos"
        class="p-2 bg-white rounded-1 shadow row ms-0 me-0"
      >
        <div class="col-sm-9 col-md-10 d-flex align-items-center">
          <label for="searchbar" class="ps-3 pe-1">
            <span class="fs-4 text-primary">
              <i class="bi bi-search"></i>
            </span>
          </label>
          <input
            id="searchbar"
            type="text"
            class="border-0 shadow-none p-3 w-100 text-dark fw-medium"
            placeholder="Search GitHub username..."
            spellcheck="false"
            v-model="searchText"
            autocomplete="off"
          />
        </div>
        <button
          class="btn btn-primary text-primary-50 fw-bold shadow-none py-3 col-sm mt-2 mt-sm-0"
          :disabled="loading"
        >
          {{ !loading ? "Find repos" : "Finding..." }}
        </button>
      </form>
    </div>
  </section>
</template>

<script>
// TODO: Form input validation
export default {
  name: "SearchForm",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    fetchRepos() {
      this.$store.dispatch("fetchRepos", {
        username: this.searchText,
      });
    },
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>
