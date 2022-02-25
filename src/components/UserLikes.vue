<template>
  <div class="profile-main">
    <ProfileCard :initial-user="initialUser" />
    <ProfileTabs :status="status" />
    <LikesContent :initial-likes="initialLikes" />
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
    initialUser: {
      type: Object,
      required: true,
    },
    initialLikes: {
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
