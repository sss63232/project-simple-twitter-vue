<template>
  <div>
    <div class="container" v-for="like in likes" :key="like.id">
      <div class="avatar">
        <img :src="like.Tweet.image" alt="" class="avatar__pic" />
      </div>
      <div class="tweet-content">
        <div class="title">
          <!-- 缺少name資料 -->
          <h4 class="title__name">Devon Lane</h4>
          <!-- 缺少account資料 -->
          <h4 class="title__id">@DL</h4>
          <h4 class="title__formNow">．{{ like.createdAt | fromNow }}</h4>
        </div>
        <p class="description">
          {{ like.Tweet.description }}
        </p>
        <div class="icon">
          <img src="../assets/reply.png" class="icon__reply" alt="" />
          <!-- 缺少留言數 -->
          <h5>5</h5>
          <img src="../assets/icon_heart_pk.png" class="icon__like" alt="" />
          <!-- 缺少按讚數 -->
          <h5 class="icon__like-quantity">23</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "LikesContent",
  props: {
    likes: {
      type: Array,
      required: true,
    },
  },
  filters: {
    fromNow(dateTime) {
      return dateTime ? moment(dateTime).fromNow() : "-";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
  min-height: 100px;
  display: flex;
  border-top: 1px #e6ecf0 solid;
  margin-bottom: 5px;
  .description {
    font-size: 15px;
  }
  .tweet-content {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    .title {
      margin-bottom: 6px;
      font-size: 15px;
      display: flex;
      &__name {
        margin-right: 5px;
        font-weight: bold;
      }
      &__id,
      &__formNow {
        color: #657786;
        font-weight: 500;
      }
    }
  }
  .avatar {
    .avatar__pic {
      margin-right: 10px;
      margin-top: 15px;
      margin-left: 10px;
      height: 50px;
      width: 50px;
      border-radius: 100%;
    }
  }

  .icon {
    margin-top: 0.5rem;
    display: flex;
    h5 {
      font-size: 13px;
      margin-left: 5px;
      margin-right: 50px;
    }
    &__reply,
    &__like {
      height: 15px;
      width: 15px;
      margin-top: 3px;
    }
    &__like-quantity {
      color: #e0245e;
    }
  }
}
</style>
