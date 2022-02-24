<template>
  <div>
    <div class="container">
      <div class="avatar">
        <img src="https://fakeimg.pl/140x140/?text=avatar" alt="" class="avatar__pic" />
      </div>
      <div class="tweet-content">
        <div class="title">
          <h4 class="title__name">Devon Lane</h4>
          <h4 class="title__id">@DL</h4>
          <h4 class="title__formNow">．{{'2022-02-12T10:18:26.000Z' | fromNow }}</h4>
        </div>
        <p class="description">
          Ipsum quis id non et. Est voluptate dolor officiis. Nam nulla maiores sed.
        </p>
        <div class="icon">
          <img src="../assets/reply.png" class="icon__reply" alt="" />
          <h5>5</h5>
          <img src="../assets/icon_heart_pk.png" class="icon__like" alt="" />
          <h5 class="icon__like-quantity">23</h5>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="avatar">
        <img src="https://fakeimg.pl/140x140/?text=avatar" alt="" class="avatar__pic" />
      </div>
      <div class="tweet-content">
        <div class="title">
          <h4 class="title__name">Devon Lane</h4>
          <h4 class="title__id">@DL</h4>
          <h4 class="title__formNow">．{{'2022-02-12T10:18:26.000Z' | fromNow }}</h4>
        </div>
        <p class="description">
          Ipsum quis id non et. Est voluptate dolor officiis. Nam nulla maiores sed.
        </p>
        <div class="icon">
          <img src="../assets/reply.png" class="icon__reply" alt="" />
          <h5>5</h5>
          <img src="../assets/icon_heart_pk.png" class="icon__like" alt="" />
          <h5 class="icon__like-quantity">23</h5>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="avatar">
        <img src="https://fakeimg.pl/140x140/?text=avatar" alt="" class="avatar__pic" />
      </div>
      <div class="tweet-content">
        <div class="title">
          <h4 class="title__name">Devon Lane</h4>
          <h4 class="title__id">@DL</h4>
          <h4 class="title__formNow">．{{'2022-02-12T10:18:26.000Z' | fromNow }}</h4>
        </div>
        <p class="description">
          Ipsum quis id non et. Est voluptate dolor officiis. Nam nulla maiores sed.
        </p>
        <div class="icon">
          <img src="../assets/reply.png" class="icon__reply" alt="" />
          <h5>5</h5>
          <img src="../assets/icon_heart_pk.png" class="icon__like" alt="" />
          <h5 class="icon__like-quantity">23</h5>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="avatar">
        <img src="https://fakeimg.pl/140x140/?text=avatar" alt="" class="avatar__pic" />
      </div>
      <div class="tweet-content">
        <div class="title">
          <h4 class="title__name">Devon Lane</h4>
          <h4 class="title__id">@DL</h4>
          <h4 class="title__formNow">．{{'2022-02-12T10:18:26.000Z' | fromNow }}</h4>
        </div>
        <p class="description">
          Ipsum quis id non et. Est voluptate dolor officiis. Nam nulla maiores sed.
        </p>
        <div class="icon">
          <img src="../assets/reply.png" class="icon__reply" alt="" />
          <h5>5</h5>
          <img src="../assets/icon_heart_pk.png" class="icon__like" alt="" />
          <h5 class="icon__like-quantity">23</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  name: 'LikesContent',
  filters: {
    fromNow(dateTime) {
      return dateTime ? moment(dateTime).fromNow() : "-";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 600px;
  min-height: 100px;
  display: flex;
  border-top: 1px #e6ecf0 solid;
  margin-bottom: 5px;
  .description {
    font-size: 15px;
  }
  .tweet-content {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    .title {
      margin-bottom: 6px;
      font-size: 15px;
      display: flex;
      &__name {
        margin-right: 5px;
        font-weight: bold;
      }
      &__id,
      &__formNow {
        color: #657786;
        font-weight: 500;
      }
    }
  }
  .avatar {
    .avatar__pic {
      margin-right: 10px;
      margin-top: 15px;
      margin-left: 10px;
      height: 50px;
      width: 50px;
      border-radius: 100%;
    }
  }

  .icon {
    margin-top: 0.5rem;
    display: flex;
    h5 {
      font-size: 13px;
      margin-left: 5px;
      margin-right: 50px;
    }
    &__reply,
    &__like {
      height: 15px;
      width: 15px;
      margin-top: 3px;
    }
    &__like-quantity{
      color:#E0245E
    }
  }
}
</style>
