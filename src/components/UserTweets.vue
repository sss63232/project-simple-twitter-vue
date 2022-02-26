<template>
  <div class="profile-main">
    <ProfileCard :initial-user="initialUser" />
    <ProfileTabs :status="status" />
    <UserTweetsPosts :initial-post="initialPost" />
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import ProfileTabs from "./ProfileTabs.vue";
import UserTweetsPosts from "./UserTweetsPosts.vue";

export default {
  name: "UserTweets",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    initialPost: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProfileCard,
    ProfileTabs,
    UserTweetsPosts,
  },
  data() {
    return {
      posts: this.initialPost,
      status: {
        tweets: true,
        replies: false,
        likes: false,
      },
    };
  },
};
</script>
