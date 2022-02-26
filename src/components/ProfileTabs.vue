<template>
  <div class="main">
    <ul class="tabs">
      <router-link to="/user/:id/tweets">
        <li class="tabs__posts" :class="{ active: status.tweets }">推文</li>
      </router-link>
      <router-link to="/user/:id/replies">
        <li class="tabs__replies" :class="{ active: status.replies }">
          推文與回覆
        </li>
      </router-link>
      <router-link to="/user/:id/likes">
        <li class="tabs__likes" :class="{ active: status.likes }">
          喜歡的內容
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProfileTabs",
  props: {
    status: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../styles/variables.scss";
.main {
  width: 100%;
  margin-top: 1rem;
  .tabs {
    display: flex;
    li {
      width: 130px;
      height: 3rem;
      text-align: center;
      line-height: 3rem;
      font: {
        size: 15px;
        weight: 700;
      }
      color: $secondaryTextColor;
    }
    .active {
      border-bottom: 2px solid $orange;
      color: $orange;
    }
  }
}
</style>
