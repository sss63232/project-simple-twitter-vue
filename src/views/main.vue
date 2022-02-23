<template>
  <div>
    <!-- navbar -->
    <div>
      <tweet />
      <posts />
    </div>
    <!-- popular -->
  </div>
</template>

<script>
import tweet from "../components/tweet.vue";
import posts from "../components/posts.vue";

export default {
  components: {
    tweet,
    posts,
  },
};
</script>
