<template>
  <nav>
    <div id="logo">
      <a href="#">
        <img src="../assets/Logo.png" alt="logo" />
      </a>
    </div>
    <div class="menu">
      <ul>
        <!-- 尚未設定路由 -->
        <li>
          <router-link to="/main" class="menu__item">
            <img src="../assets/icon_index.png" alt="index" class="index" />
            <span class="menu__item__title">首頁</span>
          </router-link>
        </li>
        <li>
          <router-link to="/profile" class="menu__item">
            <img src="../assets/icon_user.png" alt="index" class="user" />
            <span class="menu__item__title">個人資料</span>
          </router-link>
        </li>
        <li>
          <router-link to="/setting" class="menu__item active">
            <img src="../assets/icon_cog.png" alt="index" class="setting" />
            <span class="menu__item__title">設定</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 推文按鈕要可以彈出視窗 -->
    <button class="twit-button" @click="showModal = true">推文</button>
    <Modal
      :show="showModal"
      @close="showModal = false"
      @after-create-tweet-modal="afterCreateTweetModal"
    />
    <div id="log-out">
      <div>
        <img src="./../assets/Vector.png" alt="logoOut" class="icon" />
      </div>
      <p>登出</p>
    </div>
  </nav>
</template>
<script>
import Modal from "./TweetModal.vue";

export default {
  name: "Navbar",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    afterCreateTweetModal(payload) {
      this.$emit("after-create-tweet-modal", payload);
      console.log(payload);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/variables.scss";
nav {
  margin-right: 2rem;
  margin-top: 0.7rem;
  position: relative;
  // width:378px;
  height: 100%;
  #logo {
    width: 50px;
    height: 50px;
  }
  .menu {
    margin-top: 47.78px;
    &__item {
      display: flex;
      color: $mainColor;
      font-weight: 700;
      margin-top: 35px;
      &__title {
        margin-left: 20px;
      }
    }
    .active {
      color: $orange;
    }
  }
  .index,
  .user,
  .setting {
    width: 22.75px;
  }
  .twit-button {
    margin-top: 24px;
    width: 210px;
    height: 38px;
    background-color: $orange;
    border-radius: 100px;
    font-weight: 500;
    font-size: 1rem;
    color: $white;
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
