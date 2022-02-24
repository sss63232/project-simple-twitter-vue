<template>
  <div class="main">
    <ul class="tabs">
      <router-link to="/user/:id/followers">
        <li class="tabs__followers active">
          跟隨者
        </li>
      </router-link>
       <router-link to="/user/:id/following">
        <li class="tabs__following">
          正在跟隨
        </li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import './../styles/variables.scss' ;
.main {
  width: 100%;
  margin-top:1rem;
  .tabs{
    display: flex;
    li {
      width: 130px;
      height: 3rem;
      text-align: center;
      line-height: 3rem;
      font: {
        size:15px;
        weight: 700;
      }
      color: $secondaryTextColor;
    }
    .active{
        border-bottom: 2px solid $orange;
        color: $orange;
      }
  }
}
</style>
