<template>
  <div id="popular-users">
    <p class="title">Popular</p>
    <div class="users-list">
      <div class="item" v-for="user in topUsers" :key="user.id">
        <!-- 點頭像可以連結至該使用者頁面 -->
        <router-link
          :to="{ name: 'user', params: { id: user.id } }"
          class="image"
        >
          <!-- 缺少頭像 -->
          <img src="https://fakeimg.pl/50/" alt="avatar" />
        </router-link>
        <div class="info">
          <p class="name">{{ user.name }}</p>
          <span class="account">@p{{ user.account }}</span>
        </div>

        <button class="following-btn" v-if="user.isFollowing">正在跟隨</button>
        <button class="follow-btn" v-else>跟隨</button>
      </div>
    </div>
  </div>
</template>
<script>
const dummyData = [
  {
    id: 2,
    name: "user1",
    account: "user1",
    createdAt: "2022-02-26T03:49:30.000Z",
    followedCount: 3,
    isFollowing: false,
  },
  {
    id: 5,
    name: "user4",
    account: "user4",
    createdAt: "2022-02-26T03:49:30.000Z",
    followedCount: 3,
    isFollowing: true,
  },
  {
    id: 6,
    name: "user5",
    account: "user5",
    createdAt: "2022-02-26T03:49:30.000Z",
    followedCount: 3,
    isFollowing: false,
  },
  {
    id: 3,
    name: "user2",
    account: "user2",
    createdAt: "2022-02-26T03:49:30.000Z",
    followedCount: 2,
    isFollowing: true,
  },
  {
    id: 4,
    name: "user3",
    account: "user3",
    createdAt: "2022-02-26T03:49:30.000Z",
    followedCount: 1,
    isFollowing: false,
  },
  {
    id: 1,
    name: "root",
    account: "root",
    createdAt: "2022-02-26T03:49:30.000Z",
    followedCount: 0,
    isFollowing: false,
  },
];
export default {
  name: "PopularUsers",
  created() {
    this.fetchTopUsers();
  },
  data() {
    return {
      topUsers: [],
    };
  },
  methods: {
    fetchTopUsers() {
      this.topUsers = dummyData;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/variables.scss";
#popular-users {
  min-width: 350px;
  width: 350px;
  height: auto;
  background-color: $formBgColor;
  border-radius: 14px;
  margin-top: 15px;
  margin-left: 30px;
  padding: 10px 15px;
  .title {
    font-weight: 700;
  }
  .users-list {
    margin-top: 20px;
  }
  .item {
    margin-top: 10px;
    width: 100%;
    height: 70px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e6ecf0;
    .image {
      display: inline-block;
      width: 50px;
      height: 50px;
      img {
        border-radius: 50%;
      }
    }
    .info {
      position: absolute;
      top: 18px;
      left: 60px;
      font-size: 15px;
      line-height: 15px;
      font-weight: 700;
      .account {
        color: $secondaryTextColor;
      }
    }
    .following-btn {
      width: 90px;
      height: 35px;
      background-color: $orange;
      border-radius: 100px;
      color: $white;
      font-size: 15px;
      font-weight: 700;
    }
    .follow-btn {
      width: 60px;
      height: 35px;
      border: 1px solid $orange;
      border-radius: 100px;
      color: $orange;
      font-size: 15px;
      font-weight: 700;
    }
  }
}
</style>
