<template>
  <div class="container">
    <Navbar :current-status="currentStatus" :current-user="currentUser" />
    <div>
      <a @click="$router.go(-1)" class="previous-page">
        <img src="./../assets/arrow.png" alt="" />
        <h4>推文</h4>
      </a>
      <Post
        :initial-tweet="tweet"
        @after-create-reply-modal="afterCreateReplyModal"
      />
      <ReplyList :reply="reply" v-for="reply in replies" :key="reply.replyId" />
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
const dummyTweet = {
  tweetId: 11,
  createdAt: "2022-02-25T04:07:26.000Z",
  description: "quaerat doloribus minus",
  image: "https://loremflickr.com/320/240/nature?random=100",
  LikesCount: 2,
  RepliesCount: 2,
  isLiked: false,
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
      user: dummyUser,
      tweet: dummyTweet,
      replies: dummyReply,
      currentUser: dummyCurrentUser,
      currentStatus: {
        isIndex: true,
        isUser: false,
        isSetting: false,
      },
    };
  },
  methods: {
    afterCreateReplyModal(payload) {
      const { replyId, comment } = payload;
      this.replies.unshift({
        replyId,
        comment,
        createdAt: new Date(),
        Tweet: {
          tweetId: this.tweetId,
          description: this.description,
          image: this.image,
        },
        User: {
          id: this.user.userId,
          name: this.user.name,
          account: this.user.account,
          avatar: this.user.avatar,
        },
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
