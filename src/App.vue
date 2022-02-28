<template>
  <div id="app">
    <router-view @after-login="handleLogin" :current-user="currentUser" />
  </div>
</template>

<script>
export default {
  name: "APP",
  data() {
    return {
      currentUser: {},
    };
  },
  methods: {
    handleLogin(user) {
      this.currentUser = user;
      console.log(user);
    },
  },
};
</script>
