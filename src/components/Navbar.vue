<template>
  <nav>
    <div id="logo">
      <router-link to="/main">
        <img src="../assets/Logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="menu">
      <ul>
        <li :class="{ active: currentStatus.isIndex }">
          <router-link to="/main" class="menu__item">
            <img src="../assets/icon_index.png" alt="index" class="index" />
            <span class="menu__item__title">首頁</span>
          </router-link>
        </li>
        <li :class="{ active: currentStatus.isUser }">
          <router-link
            :to="{ name: 'user', params: { id: currentUser.UserId } }"
            class="menu__item"
          >
            <img src="../assets/icon_user.png" alt="index" class="user" />
            <span class="menu__item__title">個人資料</span>
          </router-link>
        </li>
        <li :class="{ active: currentStatus.isSetting }">
          <router-link to="/profile/setting" class="menu__item">
            <img src="../assets/icon_cog.png" alt="index" class="setting" />
            <span class="menu__item__title">設定</span>
          </router-link>
        </li>
      </ul>
    </div>
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

const dummyUser = {
  UserId: 1,
  account: "root",
  password: "12345678",
  name: "root",
  email: "root@example.com",
  role: "admin",
  avatar: "https://loremflickr.com/140/140/people?random=100",
  introduction:
    "Voluptatem ex asperiores doloribus et ullam sit sit quisquam. Officiis et ad eligendi architecto acc",
  cover: "https://loremflickr.com/600/200/nature?random=100",
};

export default {
  name: "Navbar",
  components: {
    Modal,
  },
  props: {
    initialCurrentStatus: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.fetchCurrentUser();
    this.fetchCurrentStatus();
  },
  data() {
    return {
      showModal: false,
      currentUser: {},
      currentStatus: {
        isIndex: true,
        isUser: false,
        isSetting: false,
      },
    };
  },
  methods: {
    afterCreateTweetModal(payload) {
      this.$emit("after-create-tweet-modal", payload);
      console.log(payload);
    },
    fetchCurrentUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser,
      };
    },
    fetchCurrentStatus() {
      this.currentStatus = this.initialCurrentStatus;
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
      align-items: center;
      color: $mainColor;
      font-weight: 700;
      margin-top: 35px;
      &__title {
        margin-left: 20px;
      }
    }
  }
  .active {
    .menu__item {
      .user {
        filter: invert(47%) sepia(15%) saturate(7114%) hue-rotate(358deg)
          brightness(98%) contrast(110%);
      }
      .index {
        filter: invert(47%) sepia(15%) saturate(7114%) hue-rotate(358deg)
          brightness(98%) contrast(110%);
      }
      .setting {
        filter: invert(47%) sepia(15%) saturate(7114%) hue-rotate(358deg)
          brightness(98%) contrast(110%);
      }
      &__title {
        color: $orange;
      }
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
