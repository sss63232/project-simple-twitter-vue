<template>
  <div id="app">
    <router-view @after-login="handleLogin" :current-user="currentUser" />
  </div>
</template>

