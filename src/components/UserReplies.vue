<template>
  <div class="profile-main">
    <ProfileCard :initial-user="initialUser" />
    <ProfileTabs :status="status" />
    <UserRepliesPosts :initial-replies="initialReplies" />
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
    initialUser: {
      type: Object,
      required: true,
    },
    initialReplies: {
      type: Array,
      required: true,
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
