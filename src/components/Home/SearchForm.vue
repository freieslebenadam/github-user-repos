<template>
  <section class="mt-4">
    <div class="container">
      <form
        @submit.prevent
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
            class="border-0 shadow-none px-3"
            placeholder="Search GitHub username..."
            spellcheck="false"
            v-model="searchText"
          />
        </label>
        <button
          class="btn btn-primary text-primary-50 fw-medium shadow-none py-3 px-5"
        >
          Find repos {{ searchText }}
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
};
</script>
