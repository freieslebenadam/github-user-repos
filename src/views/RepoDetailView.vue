<template>
  <div>REPO DETAIL VIEW {{ id }}</div>
</template>

<script>
export default {
  name: "RepoDetailView",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
