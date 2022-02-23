<template>
  <div>
    <div class="container">
      <div class="avatar">
        <img src="https://i.imgur.com/KvZWl8z.png" alt="" class="avatar__pic" />
      </div>
      <div class="tweet-content">
        <div class="title">
          <router-link to="#" class="title__name">Mary Jane</router-link>
          <router-link to="#" class="title__id">@mjjane</router-link>
          <router-link to="#" class="title__formNow">．3小時</router-link>
        </div>
        <div class="hashtag">
          <router-link to="#" class="hashtag__reply">回覆</router-link>
          <router-link to="#" class="hashtag__userid">@apple</router-link>
        </div>
        <p class="description">Good Job!</p>
      </div>
    </div>
    <div class="container">
      <div class="avatar">
        <img src="https://i.imgur.com/KvZWl8z.png" alt="" class="avatar__pic" />
      </div>
      <div class="tweet-content">
        <div class="title">
          <router-link to="#" class="title__name">Mary Jane</router-link>
          <router-link to="#" class="title__id">@mjjane</router-link>
          <router-link to="#" class="title__formNow">．3小時</router-link>
        </div>
        <div class="hashtag">
          <router-link to="#" class="hashtag__reply">回覆</router-link>
          <router-link to="#" class="hashtag__userid">@apple</router-link>
        </div>
        <p class="description">Good Job!</p>
      </div>
    </div>
    <div class="container">
      <div class="avatar">
        <img src="https://i.imgur.com/KvZWl8z.png" alt="" class="avatar__pic" />
      </div>
      <div class="tweet-content">
        <div class="title">
          <router-link to="#" class="title__name">Mary Jane</router-link>
          <router-link to="#" class="title__id">@mjjane</router-link>
          <router-link to="#" class="title__formNow">．3小時</router-link>
        </div>
        <div class="hashtag">
          <router-link to="#" class="hashtag__reply">回覆</router-link>
          <router-link to="#" class="hashtag__userid">@apple</router-link>
        </div>
        <p class="description">Good Job!</p>
      </div>
    </div>
  </div>
</template>

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
  .hashtag {
    font-size: 15px;
    margin: 0 0 5px 0;
    &__reply {
      color: #657786;
    }
    &__userid {
      color: #ff6600;
    }
  }
}
</style>
