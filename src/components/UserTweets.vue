<template>
  <div class="profile-main">
    <ProfileCard/>
    <ProfileTabs/>
    <Posts/>
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import ProfileTabs from './ProfileTabs.vue';
import Posts from './posts.vue';

export default {
  name: 'UserTweets',
  components: {
    ProfileCard,
    ProfileTabs,
    Posts,
  },
}
</script>
