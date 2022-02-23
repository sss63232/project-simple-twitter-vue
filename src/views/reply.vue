<template>
  <div class="container">
    <div class="previous-page">
      <img src="./../assets/arrow.png" alt="" />
      <h1>推文</h1>
    </div>
    <post />
    <replyList />
  </div>
</template>

<script>
import post from "../components/post.vue";
import replyList from "../components/replyList.vue";

export default {
  components: {
    post,
    replyList,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 600px;
  flex-direction: column;
  border-right: 1px #e6ecf0 solid;
  border-left: 1px #e6ecf0 solid;
  .previous-page {
    display: flex;
    align-items: center;
    padding: 10px;
    img {
      width: 17px;
      height: 14px;
      margin-right: 2.5rem;
    }
    h1 {
      margin-right: 5rem;
      font-size: 18px;
    }
  }
}
</style>
