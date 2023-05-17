<template>
  <div class="profile-main">
    <ProfileCard :user="user" v-on="$listeners" :followers="followers" />
    <ProfileTabs :status="status" />
    <UserRepliesPosts :userReplies="replies" />
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import ProfileTabs from "./ProfileTabs.vue";
import UserRepliesPosts from "./UserRepliesPosts.vue";

export default {
  name: "UserReplies",
  components: {
    ProfileCard,
    ProfileTabs,
    UserRepliesPosts,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },

    replies: {
      type: Array,
      required: true,
    },
    followers: {
      type: Array,
    },
  },
  data() {
    return {
      status: {
        tweets: false,
        replies: true,
        likes: false,
      },
    };
  },
};
</script>
