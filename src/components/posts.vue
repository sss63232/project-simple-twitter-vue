<template>
  <div>
    <div class="container">
      <div class="avatar">
        <img :src="post.avatar" alt="" class="avatar__pic" />
      </div>
      <div class="tweet-content">
        <div class="title">
          <h4 class="title__name">{{ post.name }}</h4>
          <h4 class="title__id">@{{ post.UserId }}</h4>
          <h4 class="title__formNow">．{{ post.createdAt | fromNow }}</h4>
        </div>
        <p class="description">
          {{ post.description }}
        </p>
        <div class="icon">
          <button @click="showModal = true">
            <img src="../assets/reply2.png" class="icon__reply" alt="" />
          </button>
          <Modal
            :show="showModal"
            @close="showModal = false"
            @after-create-reply-modal="afterCreateReplyModal"
          />
          <h5>{{ post.replyCount }}</h5>
          <img
            src="../assets/likedx2.png"
            class="icon__like"
            alt=""
            v-if="post.liked"
            @click.stop.prevent="deleteLike"
          />
          <img
            src="../assets/like2.png"
            class="icon__like"
            alt=""
            v-else
            @click.stop.prevent="addLike"
          />

          <h5>{{ post.likeCount }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import Modal from "./ReplyModal.vue";

export default {
  components: {
    Modal,
  },
  props: {
    initialPost: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      post: this.initialPost,
      showModal: false,
    };
  },
  watch: {
    initialPost() {
      this.post = this.initialPost;
    },
  },
  methods: {
    afterCreateReplyModal(payload) {
      console.log(payload);
    },
    addLike() {
      this.post = {
        ...this.post,
        liked: true,
      };
      this.post.likeCount += 1;
    },
    deleteLike() {
      this.post = {
        ...this.post,
        liked: false,
      };
      this.post.likeCount -= 1;
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
  border-right: 1px #e6ecf0 solid;
  border-left: 1px #e6ecf0 solid;
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
      margin-right: 10px;
    }
  }
}
</style>
