<template>
  <section class="my-5">
    <div class="container">
      <ul class="row p-0">
        <RepoItem v-for="repo in repos" :key="repo.id" :repo="repo" />
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
};
</script>
