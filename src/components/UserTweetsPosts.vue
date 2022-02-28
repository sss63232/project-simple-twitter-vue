<template>
  <div>
    <router-link
      class="router-to-reply"
      tag="div"
      :to="{ name: 'reply', params: { id: tweet.tweetId } }"
      v-for="tweet in tweets"
      :key="tweet.tweetId"
    >
      <div class="container">
        <router-link
          class="avatar"
          :to="{ name: 'user', params: { id: tweet.User.id } }"
        >
          <img :src="tweet.User.avatar" alt="" class="avatar__pic" />
        </router-link>
        <div class="tweet-content">
          <div class="title">
            <router-link
              :to="{ name: 'user', params: { id: tweet.User.id } }"
              class="title__name"
              >{{ tweet.User.name }}</router-link
            >
            <router-link
              :to="{ name: 'user', params: { id: tweet.User.id } }"
              class="title__id"
              >@{{ tweet.User.account }}．</router-link
            >
            <h4 class="title__formNow">{{ tweet.createdAt | fromNow }}</h4>
          </div>
          <p class="description">
            {{ tweet.description }}
          </p>
          <div class="icon">
            <!-- Todo: reply hover的地方要修正 -->
            <router-link :to="{ name: 'user', params: { id: tweet.User.id } }">
              <img
                src="../assets/reply2.png"
                class="icon__reply"
                alt=""
                @click="showModal = true"
              />
              <Modal
                :show="showModal"
                @close="showModal = false"
                @after-create-reply-modal="afterCreateReplyModal"
              />
            </router-link>
            <h5>{{ tweet.RepliesCount }}</h5>
            <!-- Todo: 愛心hover的地方要修正 -->
            <img
              src="../assets/icon_heart_pk.png"
              class="icon__like"
              alt=""
              v-if="tweet.isLiked"
              @click.stop.prevent="deleteLike(tweet.tweetId)"
            />
            <img
              src="../assets/like2.png"
              class="icon__like"
              alt=""
              v-else
              @click.stop.prevent="addLike(tweet.tweetId)"
            />
            <h5>{{ tweet.LikesCount }}</h5>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import moment from "moment";
import Modal from "./ReplyModal.vue";

export default {
  name: "UserTweetsPosts",
  components: {
    Modal,
  },
  props: {
    tweets: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    afterCreateReplyModal(payload) {
      console.log(payload);
    },
    addLike(tweetId) {
      this.$emit("after-like", tweetId);
    },
    deleteLike(tweetId) {
      this.$emit("after-delete-like", tweetId);
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
// Todo: 最下方缺少空白間隔
.router-to-reply {
  z-index: 1;
}
.container {
  &:hover {
    background-color: rgb(240, 240, 240);
  }
  width: 600px;
  min-height: 100px;
  display: flex;
  border-top: 1px #e6ecf0 solid;
  border-right: 1px #e6ecf0 solid;
  border-left: 1px #e6ecf0 solid;
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
        &:hover {
          text-decoration: underline;
        }
      }
      &__id {
        color: #657786;
        font-weight: 500;
      }
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
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .icon {
    margin-top: 0.5rem;
    display: flex;
    position: relative;
    h5 {
      font-size: 13px;
      margin-left: 5px;
      margin-right: 50px;
      z-index: 5;
    }
    &__reply,
    &__like {
      &:hover {
        background-color: rgb(189, 189, 189);
      }
      z-index: 5;
      height: 15px;
      width: 15px;
      margin-top: 3px;
      margin-right: 10px;
    }
  }
}
</style>