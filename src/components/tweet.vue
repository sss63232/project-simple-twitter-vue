<template>
  <div class="container">
    <h1 class="home">首頁</h1>
    <form action="" class="form" @submit.stop.prevent="handleSubmit">
      <img src="https://i.imgur.com/aVE1Jo0.png" alt="" class="avatar" />
      <textarea
        name="tweet"
        id=""
        cols="30"
        rows="10"
        placeholder="有什麼新鮮事?"
        class="textarea"
        v-model="text"
      ></textarea>
      <button type="submit" class="btn-tweet" :disabled="isLoading">
        推文
      </button>
    </form>
    <div class="divide"></div>
  </div>
</template>
<script>
// import { v4 as uuidv4 } from "uuid";
import tweetsAPI from "../apis/tweets.js";
import { Toast } from "./../utils/helper";

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
export default {
  data() {
    return {
      text: "",
      currentUser: dummyUser,
      isLoading: false,
    };
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true;
      if (this.text.length > 140) {
        this.isLoading = false;
        return alert("字數超過140個");
      }
      if (this.text.trim().length === 0) {
        this.isLoading = false;
        return alert("不可空白");
      }
      try {
        const { data } = await tweetsAPI.createTweet({
          image: this.currentUser.avatar,
          description: this.text,
        });
        this.isLoading = false;
        if (data.status === "error") {
          this.isLoading = false;
          throw new Error(data.message);
        }
        this.$emit("after-create-tweet", {
          // tweetId: uuidv4(),
          UserId: this.currentUser.id,
          name: this.currentUser.name,
          image: this.currentUser.avatar,
          account: this.currentUser.account,
          description: this.text,
          RepliesCount: 0,
          LikesCount: 0,
          createdAt: new Date(),
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法推文",
        });
      }

      this.text = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
  display: flex;
  flex-direction: column;
  .home {
    opacity: 0.9;
    z-index: 995;
    position: fixed;
    top: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    width: 600px;
    height: 55px;
    font-size: 18px;
    border: 1px solid #e6ecf0;
    margin: 0;
    padding-left: 10px;
    font-weight: bold;
  }
  .form {
    margin-top: 55px;
    position: relative;
    border: 1px solid #e6ecf0;
    width: 600px;
    height: 120px;
    display: flex;
    .avatar {
      width: 50px;
      height: 50px;
      position: relative;
      margin-top: 10px;
      margin-left: 15px;
      border-radius: 100%;
    }
    textarea {
      margin-top: 20px;
      margin-left: 5px;
      resize: none;
      width: 600px;
      height: 94px;
      border: none;
      font-size: 25px;
    }
    textarea::-webkit-input-placeholder {
      font-size: 18px;
      font: #9197a3;
      font-family: "Noto Sans TC";
    }
    .btn-tweet {
      position: absolute;
      height: 38px;
      width: 66px;
      font-size: 18px;
      color: #ffffff;
      background-color: #ff6600;
      border-radius: 100px;
      left: 520px;
      top: 70px;
    }
  }
  .divide {
    height: 10px;
    width: 600px;
    background-color: #e6ecf0;
  }
}
</style>
