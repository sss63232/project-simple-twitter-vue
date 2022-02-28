<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-wrapper">
      <form class="modal-container" @submit.stop.prevent="handleSubmit">
        <div class="modal-header">
          <button name="header" @click="$emit('close')">
            <img src="../assets/X.png" alt="" />
          </button>
        </div>
        <div class="modal-body">
          <img src="https://i.imgur.com/aVE1Jo0.png" alt="" class="avatar" />
          <textarea
            class="tweet"
            name="tweet"
            id=""
            cols="30"
            rows="10"
            placeholder="有什麼新鮮事?"
            v-model="text"
          ></textarea>
        </div>
        <div class="modal-footer">
          <button class="modal-default-button">推文</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from "uuid";
import tweetsAPI from "../apis/tweets.js";
import { Toast } from "./../utils/helper";

const currentUser = {
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
  props: {
    show: Boolean,
  },
  data() {
    return {
      text: "",
      currentUser: currentUser,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const { data } = await tweetsAPI.createTweet({
          image: this.currentUser.avatar,
          description: this.text,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
      } catch (error) {
        Toast({
          icon: "error",
          title: "目前無法推文",
        });
      }
      if (this.text.length > 140) {
        return alert("字數超過140個");
      }
      if (this.text.length === 0) {
        return alert("不可空白");
      }
      this.$emit("after-create-tweet-modal", {
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
      this.text = "";
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: table;
  /* transition: opacity 0.3s ease; */
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.modal-container {
  width: 600px;
  height: 300px;
  margin: 0 auto;
  // padding: 15px;
  background-color: #ffffff;
  border-radius: 14px;
  // transition: all 0.3s ease;
}

.modal-header {
  padding: 15px;
  margin-top: 0;
  color: #42b983;
  border-bottom: 1px #e6ecf0 solid;
}

.modal-body {
  padding: 0 10px 0 10px;
  margin: 20px 0;
  display: flex;
  .avatar {
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }
  .tweet {
    font-size: 25px;
    resize: none;
    width: 510px;
    height: 149px;
    border: none;
  }
  .tweet::-webkit-input-placeholder {
    font-size: 18px;
    font: #9197a3;
  }
}
.modal-footer {
  .modal-default-button {
    margin: 0 15px 20px 0;
    float: right;
    width: 66px;
    height: 38px;
    font-size: 18px;
    color: #ffffff;
    background-color: #ff6600;
    border-radius: 100px;
  }
}

/* .modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */
</style>
