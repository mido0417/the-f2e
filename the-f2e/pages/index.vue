<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        the-f2e
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <a href="https://github.com/mido0417/" target="_blank" class="button--grey">
        MyGitHub</a>
      <div class="links">
        <nuxt-link to="/todolist" class="button--green" target="_blank">01.TodoList</nuxt-link>
        <nuxt-link to="/filter" class="button--green" target="_blank">02.Filter</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  },

  head: () => ({
    title: "Mido的The-F2E挑戰 in Nuxt"
  })
};
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
a{
  text-decoration: none;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  a{
    margin: 10px;
  }
}
</style>
