<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-wrapper">
      <form class="modal-container" @submit.stop.prevent="handleSubmit">
        <div class="modal-header">
          <button name="header" @click="$emit('close')">
            <img src="../assets/X.png" alt="" />
          </button>
        </div>
        <div class="reply-container">
          <div class="avatar">
            <img
              src="https://i.imgur.com/KvZWl8z.png"
              alt=""
              class="avatar__pic"
            />
            <div class="divider">
              <div class="divider__a"></div>
              <div class="divider__b"></div>
            </div>
          </div>
          <div class="tweet-content">
            <div class="title">
              <router-link to="" class="title__name">Mary Jane</router-link>
              <router-link to="" class="title__id">@mjjane</router-link>
              <router-link to="" class="title__formNow">．3小時</router-link>
            </div>
            <p class="description">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat
              irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
              exercitation incididunt a
            </p>
            <div class="hashtag">
              <router-link to="" class="hashtag__reply">回覆</router-link>
              <router-link to="" class="hashtag__userid">@apple</router-link>
            </div>
          </div>
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
          <button class="modal-default-button" @click="handleSubmit">
            回覆
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.text.length > 140) {
        return alert("字數超過140個");
      }
      if (this.text.length === 0) {
        return alert("不可空白");
      }
      this.$emit("after-create-reply-modal", {
        replyId: uuidv4(),
        comment: this.text,
      });
      this.text = "";
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.reply-container {
  padding: 15px;
  padding-bottom: 0;
  display: flex;
  .avatar {
    height: 50px;
    width: 50px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    .divider {
      display: flex;
      margin-top: 5px;
      &__a {
        width: 25px;
        height: 150px;
        min-height: 2.5rem;
        max-height: 6rem;
        border-right: 3.7px red solid;
      }
      &__b {
        width: 25px;
        height: 100%;
      }
    }
  }
  .tweet-content {
    display: flex;
    flex-direction: column;
    .description {
      width: 500px;
      margin-top: 5px;
      font-size: 15px;
    }
    .title {
      font-size: 15px;
      display: flex;
      &__name {
        color: #1c1c1c;
        margin-right: 5px;
        font-weight: bold;
      }
      &__id,
      &__formNow {
        color: #657786;
        font-weight: 500;
      }
    }
    .hashtag {
      font-size: 15px;
      margin: 10px 0 5px 0;
      &__reply {
        color: #657786;
      }
      &__userid {
        color: #ff6600;
      }
    }
  }
}
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
  min-height: 300px;
  margin: 0 auto;
  // padding: 15px;
  background-color: #ffffff;
  border-radius: 14px;
  // transition: all 0.3s ease;
}

.modal-header {
  display: flex;
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
    display: flex;
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
