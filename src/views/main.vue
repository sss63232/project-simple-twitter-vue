<template>
  <div class="container">
    <Navbar @after-create-tweet-modal="afterCreateTweetModal" />
    <div class="main-page">
      <Tweet @after-create-tweet="afterCreateTweet" />
      <Posts :initial-post="post" v-for="post in posts" :key="post.UserId" />
    </div>
    <Popular />
  </div>
</template>

<script>
import Tweet from "../components/tweet.vue";
import Posts from "../components/posts.vue";
import Navbar from "../components/Navbar.vue";
import Popular from "../components/PopularUsers.vue";

const dummyUser = {
  userId: 1,
  account: "root",
  password: "12345678",
  name: "root",
  email: "root@example.com",
  role: "admin",
  avatar: "https://i.imgur.com/aVE1Jo0.png",
  introduction:
    "Voluptatem ex asperiores doloribus et ullam sit sit quisquam. Officiis et ad eligendi architecto acc",
  cover: "https://loremflickr.com/320/240/nature?random=100",
};
const dummyData = [
  {
    name: 121,
    UserId: 1,
    description: "quis aut qui",
    avatar: "https://i.imgur.com/Asq10RE.jpg",
    replyCount: 0,
    likeCount: 0,
    liked: false,
    createdAt: "2022-02-22T10:18:27.000Z",
    updatedAt: "2022-02-22T10:17:28.000Z",
  },
  {
    name: 120,
    UserId: 2,
    description: "consectetur",
    avatar: "https://loremflickr.com/320/240/nature?random=100",
    replyCount: 0,
    likeCount: 0,
    liked: false,
    createdAt: "2022-02-12T10:18:26.000Z",
    updatedAt: "2022-02-22T10:17:28.000Z",
  },
  {
    name: 119,
    UserId: 3,
    description:
      "Ipsum quis id non et. Est voluptate dolor officiis. Nam nulla maiores sed.",
    avatar: "https://loremflickr.com/320/240/nature?random=100",
    replyCount: 0,
    likeCount: 0,
    liked: false,
    createdAt: "2022-02-11T10:18:25.000Z",
    updatedAt: "2022-02-22T10:17:28.000Z",
    User: {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "12345678",
      avatar: "https://i.imgur.com/RviCPVp.png",
      introduction: "new introduction",
      role: "",
      account: "user1",
      cover: "https://i.imgur.com/L9ZtBAb.png",
      createdAt: "2022-02-15T13:50:02.000Z",
      updatedAt: "2022-02-20T10:18:28.000Z",
    },
  },
];

export default {
  components: {
    Tweet,
    Posts,
    Navbar,
    Popular,
  },
  data() {
    return {
      user: dummyUser,
      posts: dummyData,
    };
  },
  methods: {
    afterCreateTweet(payload) {
      const { tweetId, text } = payload;
      this.posts.unshift({
        tweetId,
        id: this.user.id,
        name: this.user.name,
        avatar: this.user.avatar,
        account: this.user.account,
        description: text,
        replyCount: 0,
        likeCount: 0,
        createdAt: new Date(),
      });
    },
    afterCreateTweetModal(payload) {
      const { tweetId, text } = payload;
      this.posts.unshift({
        tweetId,
        id: this.user.id,
        name: this.user.name,
        avatar: this.user.avatar,
        account: this.user.account,
        description: text,
        replyCount: 0,
        likeCount: 0,
        createdAt: new Date(),
      });
    },
    addLike() {},
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
