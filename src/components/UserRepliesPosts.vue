<template>
  <div>
    <div class="container" v-for="reply in replies" :key="reply.replyId">
      <div class="avatar">
        <img :src="reply.User.avatar" alt="" class="avatar__pic" />
      </div>
      <div class="tweet-content">
        <div class="title">
          <router-link
            :to="{ name: 'user', params: { id: reply.User.id } }"
            class="title__name"
            >{{ reply.User.name }}</router-link
          >
          <router-link
            :to="{ name: 'user', params: { id: reply.User.id } }"
            class="title__id"
            >@{{ reply.User.account }}</router-link
          >
          <router-link
            :to="{ name: 'user', params: { id: reply.User.id } }"
            class="title__formNow"
            >．{{ reply.createdAt | fromNow }}</router-link
          >
        </div>

        <div class="hashtag">
          <span class="hashtag__reply">回覆</span>
          <!-- 這裡會需要一個reply to 的對象 -->
          <router-link to="#" class="hashtag__userid">@apple</router-link>
        </div>
        <p class="description">{{ reply.comment }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
//換moment語言到中文
moment.locale("zh-tw");
export default {
  name: "UserRepliesPosts",
  props: {
    initialReplies: {
      type: Array,
      required: true,
    },
  },
  filters: {
    fromNow(dateTime) {
      return dateTime ? moment(dateTime).fromNow() : "-";
    },
  },
  created() {
    this.fetchReplies();
  },
  data() {
    return {
      replies: [],
    };
  },
  methods: {
    fetchReplies() {
      this.replies = this.initialReplies;
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
        color: #1c1c1c;
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
  .hashtag {
    font-size: 15px;
    margin: 0 0 5px 0;
    &__reply {
      color: #657786;
    }
    &__userid {
      color: #ff6600;
    }
  }
}
</style>
