<template>
  <li class="col-sm-6 col-md-4 col-lg-3 p-2">
    <div class="repo p-2 bg-white rounded-2 shadow">
      {{ repo.name }}
    </div>
  </li>
</template>

<script>
export default {
  name: "RepoItem",
  props: ["repo"],
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.repo {
  min-height: 200px;
}
</style>
