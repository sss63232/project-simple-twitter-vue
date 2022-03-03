<template>
  <div class="main">
    <div class="item" v-for="tweet in tweets" :key="tweet.tweetId">
      <div class="avatar">
        <img :src="tweet.userAvatar | emptyImage" alt="avatar" />
      </div>
      <div class="tweet-info">
        <div class="title__formNow">
          {{ tweet.User.name }}
          <span
            >@{{ tweet.User.account }}・{{ tweet.createdAt | fromNow }}</span
          >
        </div>
        <p>{{ tweet.description }}</p>
      </div>
      <div class="delete" @click.stop.prevent="onClickDel(tweet.tweetId)">
        <img src="../assets/delete_list.png" alt="" class="delete__list" />
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { emptyImageFilter } from "./../utils/mixins";
moment.locale("zh-tw");
export default {
  name: "AdminTweetItem",
  mixins: [emptyImageFilter],
  props: {
    tweets: {
      type: Array,
    },
  },
  methods: {
    onClickDel(tweetId) {
      console.log("1");
      this.$emit("after-delete-tweet", tweetId);
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
@import "./../styles/variables.scss";

.item {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid $borderColor;
}
.avatar {
  margin-left: 15px;
  width: 50px;
  height: 80px;
  display: flex;
  align-items: center;

  img {
    height: 50px;
    border-radius: 50%;
  }
}
.tweet-info {
  margin-left: 1rem;
  .title__formNow {
    font: {
      weight: 700;
      size: 15px;
    }
    span {
      font-weight: 500;

      color: $secondaryTextColor;
    }
  }
  p {
    margin-top: 6px;
    font: {
      weight: 700;
      size: 15px;
    }
    word-break: break-all;
  }
}
.delete {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  &:hover {
    filter: invert(4%) sepia(4%) saturate(6670%) hue-rotate(22deg)
      brightness(89%) contrast(88%);
  }
}
</style>