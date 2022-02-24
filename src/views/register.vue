<template>
  <div id="register">
    <form class="w-100 text-align">
      <!-- @submit.prevent.stop="handleSubmit" -->
      <div class="register-top d-flex flex-column align-items-center">
        <img class="register-logo" src="../assets/Logo.png" />
        <h1>建立你的帳號</h1>
      </div>
      <div class="form-label-group">
        <label for="account">帳號</label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          class="form-control"
          autocomplete="username"
          placeholder="帳號"
          required
          autofocus
        />
      </div>
      <div class="form-label-group">
        <label for="name">名稱</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          autocomplete="username"
          placeholder="名稱"
          required
          autofocus
        />
      </div>
      <div class="form-label-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          autocomplete="email"
          placeholder="email"
          required
        />
      </div>
      <div class="form-label-group">
        <label for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="密碼"
          autocomplete="new-password"
          required
        />
      </div>
      <div class="form-label-group">
        <label for="password-check">密碼確認</label>
        <input
          id="password-check"
          v-model="checkPassword"
          name="checkPassword"
          type="password"
          class="form-control"
          placeholder="密碼確認"
          autocomplete="new-password"
          required
        />
      </div>
      <button class="btn" type="submit" :disabled="isProcessing">註冊</button>
      <div class="text-center">
        <p>
          <router-link to="/login" class="btnCancel">取消</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isProcessing: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./../styles/variables.scss";
#register {
  max-width: 540px; 
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
  align-items: center;
  display: flex;
}
.register-top {
  .regitser-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 0.313rem;
    margin: 3.75rem 0 1.25rem 0;
  }
}
h1 {
  font-size: 23px;
  font-weight: 700;
  line-height: 33px;
  margin-bottom: 2.5rem;
}
.form-label-group {
  position: relative;
  label {
    position: absolute;
    padding-left: 11px;
    top: 5px;
    color: $secondaryTextColor;
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
  }
  input {
    width: 540px;
    height: 54px;
    border-radius: 4px;
    background-color: $bgColor;
    padding: 1.25rem 0 0.313rem 0.625rem;
    margin-bottom: 1.875rem;
    font-size: 19px;
    border: none;
    border-bottom: 2px solid $secondaryTextColor;
  }
}
.btn {
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  background-color: $orange;
  font-size: 18px;
  font-weight: 700;
  color: $white;
  margin: 0.625rem 0 1.25rem 0;
  padding: 0.625rem 15.75rem;
}
.btnCancel {
  font-size: 18px;
  font-weight: 700;
  color: $blue;
  text-decoration-line: underline;
}
</style>