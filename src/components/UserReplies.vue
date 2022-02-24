<template>
  <div class="profile-main">
    <ProfileCard/>
    <ProfileTabs/>
    <ReplyList/>
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import ProfileTabs from './ProfileTabs.vue';
import ReplyList from './replyList.vue';

export default {
  name: 'UserReplies',
  components: {
    ProfileCard,
    ProfileTabs,
    ReplyList,
  },
}
</script>
