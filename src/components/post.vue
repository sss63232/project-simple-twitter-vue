<template>
  <div>
    <div class="container">
      <div class="avatar">
        <img :src="tweet.User.avatar" alt="" class="avatar__pic" />
        <div class="title">
          <h4 class="title__name">{{ tweet.User.name }}</h4>
          <h4 class="title__id">@{{ tweet.User.id }}</h4>
        </div>
      </div>
      <div class="tweet-content">
        <p class="description">
          {{ tweet.description }}
        </p>
        <h5 class="create-time">{{ tweet.createdAt | fromNow }}</h5>
        <div class="count">
          <div class="count__number">{{ tweet.RepliesCount }}</div>
          <div class="count__unit">回覆</div>
          <div class="count__number">{{ tweet.LikesCount }}</div>
          <div class="count__unit">喜歡次數</div>
        </div>
        <div class="icon">
          <img
            src="./../assets/reply2.png"
            class="icon__reply"
            alt=""
            @click="showModal = true"
            @after-create-reply-modal="afterCreateReplyModal"
          />
          <Modal :show="showModal" @close="showModal = false" />
          <img src="./../assets/like2.png" class="icon__like" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./ReplyModal.vue";
import moment from "moment";
//換moment語言到中文
moment.locale("zh-tw");
export default {
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  filters: {
    fromNow(dateTime) {
      return dateTime ? moment(dateTime).format("aLT．LL") : "-";
    },
  },
  methods: {
    afterCreateReplyModal(payload) {
      console.log(payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  width: 600px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  border-top: 1px #e6ecf0 solid;
  margin-bottom: 5px;
  .description {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 34px;
  }
  .tweet-content {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
  .avatar {
    display: flex;
    .avatar__pic {
      margin-right: 10px;
      height: 50px;
      width: 50px;
      border-radius: 100%;
    }
    .title {
      margin-top: 5px;
      &__name {
        font-size: 15px;
        font-weight: bold;
      }
      &__id {
        font-weight: 500;
        font-size: 15px;
        color: #657786;
      }
    }
  }
  .create-time {
    color: #657786;
    margin: 1rem 0 1rem 0;
    font-weight: 500;
  }
  .count {
    display: flex;
    align-items: center;
    border-top: 1px #e6ecf0 solid;
    border-bottom: 1px #e6ecf0 solid;
    height: 68px;
    &__number {
      margin-right: 5px;
      font-weight: bold;
      font-size: 19px;
      color: #000000;
    }
    &__unit {
      margin-right: 20px;
      font-weight: bold;
      color: #657786;
    }
  }
  .icon {
    margin-top: 0.5rem;
    display: flex;
    &__reply,
    &__like {
      margin-right: 8rem;
      height: 25px;
      width: 25px;
      margin-top: 3px;
    }
  }
}
</style>
