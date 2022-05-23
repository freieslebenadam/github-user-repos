<template>
  <li class="col-md-6 col-lg-4 col-xl-3 p-3">
    <router-link :to="{ nameadamfre: 'repo', params: { id: this.repo.id } }">
      <div
        class="repo p-2 bg-white rounded-3 shadow d-flex flex-column p-4 overflow-hidden"
      >
        <h3 class="fs-4 fw-semibold text-gray-600 text-capitalize">
          {{ nameWithoutDashes }}
        </h3>
        <h4 class="fs-6 fw-semibold font-mono text-primary">
          {{ repo.owner.login }}
        </h4>
        <p class="text-gray-500 fs-7 fw-medium flex-grow-1 pt-3">
          {{ limitedDescription }}
        </p>
        <p class="text-gray-400 fw-medium m-0 fs-6">Updated {{ updatedAgo }}</p>
      </div>
    </router-link>
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
      return this.repo.name.replace(/-/g, " ");
    },
    limitedDescription() {
      if (this.repo.description) {
        if (this.repo.description.length > 50) {
          return `${this.repo.description.substring(0, 100)}...`;
        } else {
          return this.repo.description;
        }
      } else {
        return "No description...";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;

  .repo {
    position: relative;
    min-height: 16rem;
    transition: 120ms ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 2rem;
      height: 4rem;
      background: linear-gradient(to left, white, white, transparent);
    }
  }
}
</style>
