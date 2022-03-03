<template>
  <div class="container">
    <div class="card">
      <div class="background-img">
        <img :src="user.cover" class="card-img-background" alt="" />
      </div>
      <div class="avatar">
        <img :src="user.avatar" class="card-img-avatar" alt="" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">@{{ user.account }}</p>
        <div class="click-on-condition row">
          <div class="reply-count">
            <img src="../assets/reply2.png" alt="" class="reply__card" />
            {{ user.TweetsCount }}
          </div>
          <div class="like-count">
            <img src="../assets/like2.png" alt="" class="like__card" />
            {{ user.TweetsLikedCount }}
          </div>
        </div>
        <div class="follow-condition row">
          <div class="following-count">
            <span class="following-count__number"
              >{{ user.FollowingsCount }}個</span
            >跟隨中
          </div>
          <div class="follows-count">
            <span class="follows-count__number"
              >{{ user.FollowersCount }}位</span
            >跟隨者
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "adminUserCard",
  props: {
    User: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.User,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 245px;
  height: 314px;
  margin: 0;
  background-color: #f6f7f8;
  margin-right: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .card-img-background {
      width: 245px;
      height: 140px;
      border-radius: 10px 10px 0px 0px;
    }
    .card-img-avatar {
      width: 100px;
      height: 100px;
      position: absolute;
      border-radius: 100%;
      border: 4px white solid;
      top: 68px;
      right: 72.5px;
    }
    .card-body {
      text-align: center;
      .card-title {
        margin-top: 30px;
        font-size: 15px;
        font-weight: 900;
      }
      .card-text {
        margin-top: 2px;
        color: #657786;
        font-size: 15px;
      }
      .click-on-condition {
        margin-top: 12px;
        display: flex;
        justify-content: center;
        font-size: 15px;
        font-weight: 500;
        .reply-count {
          display: flex;
          margin-right: 16.95px;
        }
        .like-count {
          display: flex;
        }
        .reply__card {
          width: 19.75px;
          height: 19.75px;
          margin-right: 7.15px;
          margin-top: 2px;
        }
        .like__card {
          width: 19.75px;
          height: 19.75px;
          margin-top: 2px;
          margin-right: 7.15px;
        }
      }
      .follow-condition {
        margin-top: 12px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        .following-count {
          color: #657786;
          margin-right: 5px;
          &__number {
            color: #1c1c1c;
          }
        }
        .follows-count {
          color: #657786;
          &__number {
            color: #1c1c1c;
          }
        }
      }
    }
  }
}
</style>