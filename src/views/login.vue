<template>
  <div id="login">
    <img class="login-logo" src="../assets/Icon.png" alt="" />
    <h1>登入Alphitter</h1>

    <form class="login-form" @submit.prevent.stop="handleSubmit">
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
          :class="{ invalid: error.account }"
        />
        <div v-if="error.account" class="invalid-message">帳號不得空白！</div>
      </div>
      <div class="form-label-group">
        <label for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          autocomplete="new-password"
          placeholder="密碼"
          required
          :class="{ invalid: error.password }"
        />
        <div v-if="error.password" class="invalid-message">密碼不得空白！</div>
      </div>
      <button class="btnLogin" type="submit" :disabled="isProcessing">
        登入
      </button>
      <div class="text-link">
        <router-link to="/register" class="btnRegister"
          >註冊Alphitter</router-link
        ><span class="seperater">・</span
        ><router-link to="/admin" class="btnAdmin">後台登入</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast2 } from "./../utils/helper";

export default {
  name: "login",
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false,
      error: {
        password: false,
        account: false,
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.account) {
          this.error.account = true;
          return;
        } else if (!this.password) {
          this.error.password = true;
          return;
        }
        this.isProcessing = true;
        const { data } = await authorizationAPI.login({
          account: this.account,
          password: this.password,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 將 token 放到 localStorage
        localStorage.setItem("token", data.token);
        // 將資料傳到 Vuex
        this.$store.commit("setCurrentUser", data.user);
        // 成功登入後轉址到餐廳首頁
        this.$router.push("/main");
      } catch (error) {
        this.isProcessing = false;
        this.password = "";
        Toast2.fire({
          title: "輸入的帳號密碼有誤",
        });
      }
    },
  },
};
</script>



<style lang="scss" scoped>
@import "./../styles/variables.scss";
#login {
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-logo {
  width: 40px;
  height: 40px;
}

h1 {
  margin-top: 25px;
  font-weight: bold;
  color: $mainColor;
  font-size: 23px;
}
.login-form {
  margin-top: 40px;
  position: relative;
}
.form-label-group {
  position: relative;
}
label {
  display: none;
}
.placeholder {
  position: absolute;
  left: 0.625rem;
  top: 0.313rem;
  color: $secondaryTextColor;
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
}
.invalid {
  border-bottom: 2px solid #fc5a5a;
}
input {
  width: 540px;
  height: 52px;
  border-radius: 4px;
  background-color: $formBgColor;
  margin-bottom: 2em;
  padding: 1.3em 0 0 1em;
  font-size: 19px;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid $secondaryTextColor;
  &:focus,
  &:hover {
    border-bottom: 2px solid #50b5ff;
  }
}
.invalid-message {
  position: absolute;
  top: 50px;
  left: 2px;
  font: {
    weight: 500;
    size: 15px;
  }
  color: #fc5a5a;
}
.btnRegister {
  text-decoration-line: underline;
  color: $blue;
}
.btnAdmin {
  text-decoration-line: underline;
  color: $blue;
}

.btnLogin {
  width: 540px;
  height: 50px;
  border-radius: 50px;
  background-color: $orange;
  font-size: 18px;
  font-weight: 700;
  color: $white;
  margin-top: 2em;
  padding: 0.625rem 2.5rem;
  border: none;
}
.text-link {
  position: absolute;
  bottom: -46px;
  right: 0;
  font-weight: 700;
  color: $blue;
}
</style>