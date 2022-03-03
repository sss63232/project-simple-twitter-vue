<template>
  <nav>
    <div id="logo">
      <router-link to="/admin/main">
        <img src="../assets/Logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="menu">
      <div class="menu__item">
        <img src="../assets/atIndex@2x.png" alt="index" class="index" />

        <router-link to="/admin/main" class="menu__item__title">
          <p :class="{ active: tweets }" id="routerTweets">推文清單</p>
        </router-link>
      </div>

      <div class="menu__item">
        <img src="../assets/atUser.png" alt="index" class="user" />

        <router-link to="/admin/users" class="menu__item__title">
          <p :class="{ active: users }" id="routerUsers">使用者列表</p>
        </router-link>
      </div>
    </div>
    <div id="log-out" @click.stop.prevent="onLogOut">
      <div>
        <img src="./../assets/Vector.png" alt="logoOut" class="icon" />
      </div>
      <p>登出</p>
    </div>
  </nav>
</template>
<script>
export default {
  name: "adminNavbar",
  methods: {
    onLogOut() {
      localStorage.removeItem("token");
      this.$router.push("/admin/signin");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../styles/variables.scss";
nav {
  position: relative;
  height: 100%;
  margin-top: 1rem;
  #logo {
    width: 50px;
    height: 50px;
  }
  .menu {
    margin-top: 51px;
    &__item {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
    }
    p {
      margin-left: 1rem;
      font-weight: 700;
    }
  }

  .index,
  .user {
    width: 24px;
  }

  #log-out {
    position: fixed;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
    .icon {
      display: inline-block;
      width: 18px;
      height: 16px;
    }
    p {
      margin-left: 23px;
      font-weight: 700;
    }
  }
}
</style>