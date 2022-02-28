<template>
  <div class="profile-main">
    <ProfileCard />
    <ProfileTabs :status="status" />
    <LikesContent :likes="likes" v-on="$listeners" />
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import ProfileTabs from "./ProfileTabs.vue";
import LikesContent from "./LikesContent.vue";

export default {
  name: "UserLikes",
  components: {
    ProfileCard,
    ProfileTabs,
    LikesContent,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },

    likes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      status: {
        tweets: false,
        replies: false,
        likes: true,
      },
    };
  },
};
</script>
