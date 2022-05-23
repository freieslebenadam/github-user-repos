<template>
  <li class="col-sm-6 col-md-4 col-lg-3 p-3">
    <div class="repo p-2 bg-white rounded-3 shadow d-flex flex-column p-4">
      <h3 class="fs-4 fw-semibold text-gray-600 text-capitalize">
        {{ nameWithoutDashes }}
      </h3>
      <h4 class="fs-6 fw-semibold font-mono text-primary">
        {{ repo.owner.login }}
      </h4>
      <p class="text-gray-500 fs-7 fw-medium flex-grow-1 pt-3">
        {{ repo.description ? repo.description : "No description" }}
      </p>
      <p class="text-gray-400 fw-medium m-0 fs-6">Updated {{ updatedAgo }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "RepoItem",
  props: ["repo"],
  computed: {
    updatedAgo() {
      const ta = require("time-ago");
      return ta.ago(this.repo.updated_at);
    },
    nameWithoutDashes() {
      return this.repo.name.replace("-", " ");
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;

  .repo {
    min-height: 16rem;
    transition: 120ms ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }
  }
}
</style>
