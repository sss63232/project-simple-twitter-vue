<template>
  <div class="container">
    <Navbar />
    <div>
      <div class="previous-page">
        <img src="./../assets/arrow.png" alt="" />
        <h1>推文</h1>
      </div>
      <Post :tweet="tweet" />
      <ReplyList :reply="reply" v-for="reply in replies" :key="reply.replyId" />
    </div>
    <Popular />
  </div>
</template>

<script>
const dummyTweet = {
  tweetId: 11,
  createdAt: "2022-02-25T04:07:26.000Z",
  description: "quaerat doloribus minus",
  image: "https://loremflickr.com/320/240/nature?random=100",
  LikesCount: 2,
  RepliesCount: 2,
  User: {
    id: 3,
    name: "user2",
    account: "user2",
    avatar: "https://loremflickr.com/140/140/people?random=100",
  },
};
const dummyReply = [
  {
    replyId: 1,
    comment: "sed sint eveniet",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 11,
      description:
        "Aliquam qui harum.\nAut deleniti rerum eius quos error labore fuga sint consequatur.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 2,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 4,
    comment: "Exercitationem commodi ut qui. Architecto tenetur ",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 11,
      description:
        "Quod voluptas non et sunt a asperiores. Reiciendis maxime similique in sapiente voluptatem facere cu",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 2,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
];

import Post from "../components/post.vue";
import ReplyList from "../components/replyList.vue";
import Navbar from "../components/Navbar.vue";
import Popular from "../components/PopularUsers.vue";

export default {
  components: {
    Post,
    ReplyList,
    Navbar,
    Popular,
  },
  data() {
    return {
      tweet: dummyTweet,
      replies: dummyReply,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  width: 600px;
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
