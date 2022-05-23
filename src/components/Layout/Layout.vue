<template>
  <div class="layout bg-light text-dark">
    <Header />

    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Layout",
  components: { Header },
};
</script>

<style lang="scss">
.layout {
  min-height: 100vh;
}
</style>
