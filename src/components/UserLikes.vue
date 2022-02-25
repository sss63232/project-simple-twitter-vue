<template>
  <div class="profile-main">
    <ProfileCard/>
    <ProfileTabs/>
    <LikesContent/>
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import ProfileTabs from './ProfileTabs.vue';
import LikesContent from './LikesContent.vue';

export default {
  name: 'UserLikes',
  components: {
    ProfileCard,
    ProfileTabs,
    LikesContent,
  },
}
</script>
