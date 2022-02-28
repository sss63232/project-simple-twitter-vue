<template>
  <div class="container">
    <div class="card">
      <div class="background-img">
        <img :src="user.cover" class="card-img-top" alt="" />
      </div>
      <div class="avatar">
        <img :src="user.avatar" class="card-img-top" alt="" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">@{{ user.account }}</p>
        <div class="click-on-condition row">
          <div class="reply-count">
            <i class="far fa-comment"></i> {{ user.tweetCount }}
          </div>
          <div class="like-count">
            <i class="far fa-heart"></i> {{ user.likeCount }}
          </div>
        </div>
        <div class="follow-condition row">
          <div class="following-count">
            <span>{{ user.followingCount }}個</span>跟隨中
          </div>
          <div class="follows-count">
            <span>{{ user.followerCount }}位</span>跟隨者
          </div>
        </div>
      </div>
    </div>
  </div>
</template>