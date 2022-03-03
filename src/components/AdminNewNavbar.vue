<template>
  <nav>
    <div id="logo">
      <router-link to="/admin/main">
        <img :src="logo" alt="logo" />
      </router-link>
    </div>
    <div class="menu">
      <div class="menu__item">
        <img
          :src="index"
          alt="index"
          class="index"
          :class="{ 'active-img': status.tweets }"
        />

        <router-link to="/admin/main" class="menu__item__title">
          <p :class="{ active: tweets }" id="routerTweets">推文清單</p>
        </router-link>
        <p
          :class="{ active: status.tweets }"
          id="routerTweets"
          @click.stop.prevent="onClickTweets"
        >
          推文清單
        </p>
      </div>

      <div class="menu__item">
        <img
          :src="user"
          alt="index"
          class="user"
          :class="{ 'active-img': status.users }"
        />

        <router-link to="/admin/users" class="menu__item__title">
          <p :class="{ active: users }" id="routerUsers">使用者列表</p>
        </router-link>
        <p
          :class="{ active: status.users }"
          id="routerUsers"
          @click.stop.prevent="onClickUsers"
        >
          使用者列表
        </p>
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
  name: "adminNewNavbar",
  data() {
    return {
      logo: require("@/assets/Logo.png"),
      index: require("@/assets/icon_index.png"),
      user: require("@/assets/icon_user.png"),
      status: {
        tweets: true,
        users: false,
      },
    };
  },
  methods: {
    onLogOut() {
      localStorage.removeItem("token");
      this.$router.push("/admin/signin");
    },
    onClickTweets() {
      this.status.tweets = true;
      this.status.users = false;
      this.$router.push({ path: "/admin/main" });
      console.log("e");
    },
    onClickUsers() {
      this.status.tweets = false;
      this.status.users = true;
      this.$router.push({ path: "/admin/users" });
      console.log("u");
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
      cursor: pointer;
    }
    p {
      margin-left: 1rem;
      font-weight: 700;
    }
  }
  .active {
    color: $orange;
  }
  .active-img {
    filter: invert(52%) sepia(67%) saturate(4553%) hue-rotate(360deg)
      brightness(101%) contrast(106%);
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