<template>
  <div class="profile-main">
    <ProfileCard :initial-user="initialUser" />
    <ProfileTabs :status="status" />
    <Posts :initial-post="initialPost" />
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import ProfileTabs from "./ProfileTabs.vue";
import Posts from "./posts.vue";

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
    Posts,
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
