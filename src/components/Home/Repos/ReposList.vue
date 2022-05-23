<template>
  <section class="my-5">
    <div class="container">
      <ul class="row p-0">
        <RepoItem
          v-for="repo in recentlyUpdatedRepos"
          :key="repo.id"
          :repo="repo"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import RepoItem from "./RepoItem.vue";

export default {
  name: "ReposList",
  props: ["repos"],
  components: { RepoItem },
  computed: {
    recentlyUpdatedRepos() {
      return [...this.repos].sort((a, b) =>
        b.updated_at.localeCompare(a.updated_at)
      );
    },
  },
};
</script>
