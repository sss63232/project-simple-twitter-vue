<template>
  <div class="profile-main">
    <ProfileCard :user="user" v-on="$listeners" :followers="followers" />
    <ProfileTabs :status="status" />
    <UserTweetsPosts
      :tweets="tweets"
      @after-create-reply-modal="afterCreateReplyModal"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import ProfileTabs from "./ProfileTabs.vue";
import UserTweetsPosts from "./UserTweetsPosts.vue";

export default {
  name: "UserTweets",
  props: {
    user: {
      type: Object,
      required: true,
    },

    tweets: {
      type: Array,
      required: true,
    },
    followers: {
      type: Array,
    },
  },
  components: {
    ProfileCard,
    ProfileTabs,
    UserTweetsPosts,
  },
  data() {
    return {
      status: {
        tweets: true,
        replies: false,
        likes: false,
      },
    };
  },
  methods: {
    afterCreateReplyModal(tweetId) {
      console.log("reply1");
      this.$emit("after-create-reply-modal", {
        id: tweetId,
        status: "tweets",
      });
    },
  },
};
</script>
