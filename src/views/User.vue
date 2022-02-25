<template>
  <div class="container">
    <div class="navbar">
      <Navbar :initial-current-status="currentStatus" />
    </div>
    <div class="main">
      <header class="header">
        <button>
          <router-link to="/main"
            ><img
              src="./../assets/arrow.png"
              alt="backarrow"
              class="previous-btn"
            />
          </router-link>
        </button>
        <div class="title">
          <p class="user-name">John Doe</p>
          <p class="user-tweet">25 推文</p>
        </div>
      </header>
      <div class="user-page-body">
        <router-view />
      </div>
    </div>
    <div class="popular-users">
      <PopularUsers />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";

export default {
  name: "User",
  components: {
    Navbar,
    PopularUsers,
  },
  data() {
    return {
      currentStatus: {
        isIndex: false,
        isUser: true,
        isSetting: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.container {
  display: grid;
  grid-template-columns: 210px 600px 350px;
  column-gap: 30px;
}
.main {
  width: 100%;
  border: {
    left: 1px solid #e6ecf0;
    right: 1px solid #e6ecf0;
  }
}
.header {
  width: 100%;
  height: 55px;
  display: flex;
  align-content: center;
  .previous-btn {
    width: 17px;
    height: 14px;
    margin: 20px;
  }
  .title {
    margin-left: 1rem;
    .user-name {
      font-weight: 900;
      font-size: 19px;
    }
    .user-tweet {
      font-weight: 500;
      font-size: 13px;
      color: $secondaryTextColor;
    }
  }
}
</style>
