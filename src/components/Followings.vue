<template>
  <div>
    <FollowStatusTabs :status="status" />
    <FollowCards :initial-followings="initialFollowings" :status="status" />
  </div>
</template>

<script>
import FollowStatusTabs from "./FollowStatusTabs.vue";
import FollowCards from "./FollowCards.vue";

export default {
  name: "Following",
  components: {
    FollowStatusTabs,
    FollowCards,
  },
  props: {
    initialFollowings: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      status: {
        followings: true,
        followers: false,
      },
    };
  },
};
</script>
