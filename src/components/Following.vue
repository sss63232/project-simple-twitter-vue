<template>
  <div>
    <FollowStatusTabs />
    <FollowCards />
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
};
</script>
