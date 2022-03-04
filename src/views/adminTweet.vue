<template>
  <div id="AdminTweet">
    <template>
      <!-- adminNavbar.vue -->
      <AdminNewNavbar :status="status" />
      <!-- adminTweetList.vue -->
      <div class="adminTweetPanel">
        <div class="title">
          <h1>推文清單</h1>
        </div>
        <adminTweetList />
      </div>
    </template>
  </div>
</template>
<script>
import AdminNewNavbar from "./../components/AdminNewNavbar.vue";
import adminTweetList from "./../components/adminUserCard.vue";

export default {
  name: "adminTweet",
  components: {
    AdminNewNavbar,
    adminTweetList,
  },
  data() {
    return {
      status: {
        tweets: true,
        users: false,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./../styles/variables.scss";
#adminTweet {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: auto;
}

.adminTweetPanel {
  flex: 1;
  min-height: 100vh;
}

.title {
  height: 55px;
  border-bottom: 1px solid $borderColor;
}

.title h1 {
  font-size: 18px;
  font-weight: 700;
  padding: 13px 0 14px 23px;
  margin: 0;
  color: $mainColor;
}
</style>