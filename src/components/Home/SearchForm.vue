<template>
  <section class="mt-4">
    <div class="container">
      <form
        @submit.prevent="fetchRepos"
        class="p-2 bg-white rounded-1 shadow d-flex flex-column flex-sm-row align-items-center"
      >
        <label
          for="searchbar"
          class="ps-3 pe-1 flex-grow-1 d-flex align-items-center"
        >
          <span class="fs-4 text-primary">
            <i class="bi bi-search"></i>
          </span>
          <input
            id="searchbar"
            type="text"
            class="border-0 shadow-none p-3 w-100 text-dark fw-medium"
            placeholder="Search GitHub username..."
            spellcheck="false"
            v-model="searchText"
            autocomplete="off"
          />
        </label>
        <button
          class="btn btn-primary text-primary-50 fw-bold shadow-none py-3 px-5"
        >
          Find repos
        </button>
      </form>
    </div>
  </section>
</template>

<script>
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

      console.log(this.$store.repos);
    },
  },
};
</script>
