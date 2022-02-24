<template>
  <div class="main">
    <ul class="tabs">
      <li class="tabs__posts">推文</li>
      <li class="tabs__replies">推文與回覆</li>
      <li class="tabs__likes">喜歡的內容</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  margin-top:1rem;
  .tabs{
    display: flex;
    li {
      width: 130px;
    }
  }
}
</style>
