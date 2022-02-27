<template>
  <div class="container">
    <Navbar
      @after-create-tweet-modal="afterCreateTweetModal"
      :current-status="currentStatus"
      :current-user="currentUser"
    />
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
  id: 14,
  name: "user1",
  email: "user1@example.com",
  avatar: "https://loremflickr.com/140/140/people?random=100",
  introduction:
    "Sint amet reprehenderit et eligendi est harum. Quis facere placeat. Quia molestiae error optio dolor",
  role: "",
  account: "user1",
  cover: "https://loremflickr.com/600/200/nature?random=100",
  createdAt: "2022-02-26T03:59:35.000Z",
  updatedAt: "2022-02-26T03:59:35.000Z",
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
  name: "main",
  components: {
    Tweet,
    Posts,
    Navbar,
    Popular,
  },
  data() {
    return {
      currentUser: dummyUser,
      posts: dummyData,
      currentStatus: {
        isIndex: true,
        isUser: false,
        isSetting: false,
      },
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
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
