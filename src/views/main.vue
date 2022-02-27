<template>
  <div class="container">
    <Navbar
      @after-create-tweet-modal="afterCreateTweetModal"
      :current-status="currentStatus"
      :current-user="currentUser"
    />
    <div class="main-page">
      <Tweet @after-create-tweet="afterCreateTweet" />
      <Posts :initial-post="post" v-for="post in posts" :key="post.id" />
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
    id: 5,
    UserId: 2,
    description:
      "Suscipit quo illum saepe dolores atque. Eos similique laborum. Error ea distinctio. Aperiam totam ei",
    image: "https://loremflickr.com/320/240/nature?random=100",
    createdAt: "2022-02-27T04:18:50.000Z",
    updatedAt: "2022-02-27T04:18:50.000Z",
    name: "user1",
    account: "user1",
    isLiked: true,
    LikesCount: 3,
    RepliesCount: 3,
  },
  {
    id: 6,
    UserId: 2,
    description: "est",
    image: "https://loremflickr.com/320/240/nature?random=100",
    createdAt: "2022-02-27T04:18:50.000Z",
    updatedAt: "2022-02-27T04:18:50.000Z",
    name: "user1",
    account: "user1",
    isLiked: false,
    LikesCount: 1,
    RepliesCount: 3,
  },
  {
    id: 7,
    UserId: 2,
    description:
      "Placeat architecto et quaerat. Fugiat fuga labore et quod illum molestiae quia sit. Laboriosam volup",
    image: "https://loremflickr.com/320/240/nature?random=100",
    createdAt: "2022-02-27T04:18:50.000Z",
    updatedAt: "2022-02-27T04:18:50.000Z",
    name: "user1",
    account: "user1",
    isLiked: false,
    LikesCount: 1,
    RepliesCount: 3,
  },
];

export default {
  //main是保留字，會報錯
  // name: "main",
  components: {
    Tweet,
    Posts,
    Navbar,
    Popular,
  },
  data() {
    return {
      currentUser: dummyUser,
      posts: [],
      currentStatus: {
        isIndex: true,
        isUser: false,
        isSetting: false,
      },
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.posts = dummyData;
    },
    afterCreateTweet(payload) {
      const { tweetId, text } = payload;
      this.posts.unshift({
        tweetId,
        UserId: this.user.userId,
        name: this.user.name,
        image: this.user.avatar,
        account: this.user.account,
        description: text,
        RepliesCount: 0,
        LikesCount: 0,
        createdAt: new Date(),
      });
    },
    afterCreateTweetModal(payload) {
      const { tweetId, text } = payload;
      this.posts.unshift({
        tweetId,
        UserId: this.user.userId,
        name: this.user.name,
        image: this.user.avatar,
        account: this.user.account,
        description: text,
        RepliesCount: 0,
        LikesCount: 0,
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
