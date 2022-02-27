<template>
  <div class="container">
    <Navbar :current-status="currentStatus" :current-user="currentUser" />
    <div>
      <a @click="$router.go(-1)" class="previous-page">
        <img src="./../assets/arrow.png" alt="" />
        <h4>推文</h4>
      </a>
      <Post
        :initial-tweet="reply"
        @after-create-reply-modal="afterCreateReplyModal"
      />
      <ReplyList
        :name="reply.name"
        :reply="item"
        v-for="item in reply.Replies"
        :key="item.replyId"
      />
    </div>
    <Popular />
  </div>
</template>

<script>
const dummyCurrentUser = {
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
const Reply = {
  UserId: 2,
  description: "magni",
  image: "https://loremflickr.com/320/240/nature?random=100",
  createdAt: "2022-02-27T04:18:49.000Z",
  updatedAt: "2022-02-27T04:18:49.000Z",
  tweetId: 2,
  name: "user1",
  account: "user1",
  avatar: "https://loremflickr.com/140/140/people?random=100",
  isLiked: true,
  LikesCount: 3,
  RepliesCount: 3,
  Replies: [
    {
      UserId: 5,
      comment: "Quia omnis illo ad est tempore explicabo. Et aperi",
      createdAt: "2022-02-27T04:18:50.000Z",
      updatedAt: "2022-02-27T04:18:50.000Z",
      tweetId: 2,
      replyId: 4,
      name: "user4",
      account: "user4",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
    {
      UserId: 3,
      comment: "Ut a doloribus facilis explicabo inventore deserun",
      createdAt: "2022-02-27T04:18:50.000Z",
      updatedAt: "2022-02-27T04:18:50.000Z",
      tweetId: 2,
      replyId: 5,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
    {
      UserId: 2,
      comment: "sapiente voluptates voluptatem",
      createdAt: "2022-02-27T04:18:50.000Z",
      updatedAt: "2022-02-27T04:18:50.000Z",
      tweetId: 2,
      replyId: 6,
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  ],
};
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
      currentUser: dummyCurrentUser,
      reply: {},

      currentStatus: {
        isIndex: true,
        isUser: false,
        isSetting: false,
      },
    };
  },
  created() {
    this.fetchReply();
  },
  methods: {
    fetchReply() {
      //tweets/:id
      this.reply = Reply;
    },
    afterCreateReplyModal(payload) {
      const { replyId, comment } = payload;
      this.reply.Replies.unshift({
        UserId: this.currentUser.userId,
        comment,
        createdAt: new Date(),
        tweetId: this.tweetId,
        replyId,
        name: this.currentUser.name,
        account: this.currentUser.account,
        avatar: this.currentUser.avatar,
      });
    },
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
    cursor: pointer;
    img {
      width: 17px;
      height: 14px;
      margin-right: 2.5rem;
    }
    h4 {
      margin-right: 5rem;
      font-size: 18px;
      // font-weight: bold;
    }
  }
}
</style>
