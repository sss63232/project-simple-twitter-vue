<template>
  <div>
    <div class="container">
      <div class="avatar">
        <img
          src="https://fakeimg.pl/140x140/?text=avatar"
          alt=""
          class="avatar__pic"
        />
      </div>
      <div class="tweet-content">
        <div class="title">
          <h4 class="title__name">Laure</h4>
          <h4 class="title__id">@LaureBill</h4>
        </div>
        <p class="description">
          sjiofihg kodjfi hidif iojgio uij iojfiouroie vmkoiujgaoi9u83r oidjugpa
          p jifjio ufk dfj osidfkpodfk fpokpoaopgiapkgpk
        </p>
        <div class="follow-btn">
          <button class="follow-btn__follow d-none">正在跟隨</button>
          <button class="follow-btn__unfollow">跟隨</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="avatar">
        <img
          src="https://fakeimg.pl/140x140/?text=avatar"
          alt=""
          class="avatar__pic"
        />
      </div>
      <div class="tweet-content">
        <div class="title">
          <h4 class="title__name">Laure</h4>
          <h4 class="title__id">@LaureBill</h4>
        </div>
        <p class="description">
          sjiofihg kodjfi hidif iojgio uij iojfiouroie vmkoiujgaoi9u83r oidjugpa
          p jifjio ufk dfj osidfkpodfk fpokpoaopgiapkgpk
        </p>
        <div class="follow-btn">
          <button class="follow-btn__follow d-none">正在跟隨</button>
          <button class="follow-btn__unfollow">跟隨</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="avatar">
        <img
          src="https://fakeimg.pl/140x140/?text=avatar"
          alt=""
          class="avatar__pic"
        />
      </div>
      <div class="tweet-content">
        <div class="title">
          <h4 class="title__name">Laure</h4>
          <h4 class="title__id">@LaureBill</h4>
        </div>
        <p class="description">
          sjiofihg kodjfi hidif iojgio uij iojfiouroie vmkoiujgaoi9u83r oidjugpa
          p jifjio ufk dfj osidfkpodfk fpokpoaopgiapkgpk
        </p>
        <div class="follow-btn">
          <button class="follow-btn__follow">正在跟隨</button>
          <button class="follow-btn__unfollow d-none">跟隨</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../styles/variables.scss";

.container {
  width: 600px;
  min-height: 100px;
  display: flex;
  border-top: 1px #e6ecf0 solid;
  margin-bottom: 5px;
  position: relative;
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
      &__id {
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
  .follow-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    &__follow {
      width: 90px;
      height: 25px;
      border-radius: 100px;
      background-color: $orange;
      font: {
        weight: 700;
        size: 15px;
      }
      color: $white;
      text-align: center;
    }
    &__unfollow {
      width: 62px;
      height: 25px;
      border-radius: 100px;
      border: 1px solid $orange;
      font: {
        weight: 700;
        size: 15px;
      }
      color: $orange;
      text-align: center;
    }
  }
}
</style>
