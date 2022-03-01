<template>
  <div id="AdminTweet">
    <template>
      <!-- adminNavbar.vue -->
      <adminNavbar />
      <!-- adminTweetList.vue -->
      <div class="adminTweetPanel">
        <div class="title">
          <h1>推文清單</h1>
        </div>
        <adminTweetList
          v-for="tweet in tweets"
          :key="tweet.id"
          :tweet="tweet"
          @after-delete-tweet="afterDeleteTweet"
        />
      </div>
    </template>
  </div>
</template>
<script>
import adminNavbar from "./../components/adminNavbar";
import adminTweetList from "./../components/adminTweetList";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";
export default {
  name: "adminTweet",
  components: {
    adminNavbar,
    adminTweetList,
  },
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweet();
  },
  methods: {
    async fetchTweet() {
      try {
        const { data } = await tweetsAPI.deleteTweed({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweedId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將此推文移除，請稍候再試",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
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