<template>
  <div class="profile-main">
    <ProfileCard :initial-user="initialUser" />
    <ProfileTabs :status="status" />
    <ReplyList />
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import ProfileTabs from "./ProfileTabs.vue";
import ReplyList from "./replyList.vue";

export default {
  name: "UserReplies",
  components: {
    ProfileCard,
    ProfileTabs,
    ReplyList,
  },
  props: {
    initialUser: {
      type: Object,
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
