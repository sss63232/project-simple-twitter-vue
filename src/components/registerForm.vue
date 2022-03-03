<template>
  <form @submit.prevent.stop="handleSubmit()" novalidate>
    <div class="row">
      <label for="account">帳號</label>
      <input
        id="account"
        name="account"
        type="text"
        v-model="form.account"
        required
        maxlength="50"
      />
    </div>

    <div class="row">
      <label for="name">名稱</label>
      <input
        id="name"
        name="name"
        type="text"
        v-model="form.name"
        required
        :class="{ invalid: error.length }"
      />
      <div class="note" v-if="error.name">名稱不得空白</div>

      <div class="note" v-if="error.length">名稱長度不得大於 50 字元</div>
    </div>

    <div class="row">
      <label for="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        v-model="form.email"
        maxlength="50"
        required
      />
    </div>

    <div class="row">
      <label for="password">密碼</label>
      <input
        id="password"
        name="password"
        type="password"
        v-model="form.password"
        required
        maxLength="12"
      />
    </div>
    <div class="row">
      <label for="passwordCheck">密碼確認</label>
      <input
        id="passwordCheck"
        name="passwordCheck"
        type="password"
        v-model="form.checkPassword"
        required
      />
    </div>

    <template v-if="isRegister">
      <div class="row mt-4">
        <button class="btn submit" type="submit" :disabled="isProcessing">
          {{ isProcessing ? "註冊中.." : "註冊" }}
        </button>
      </div>
      <div class="row">
        <router-link to="/login">
          <button class="btn cancel">取消</button>
        </router-link>
      </div>
    </template>
    <template v-else>
      <div class="row">
        <button
          v-if="!isSaved"
          class="btn update"
          type="submit"
          :disabled="isProcessing"
        >
          {{ isProcessing ? "儲存中.." : "儲存" }}
        </button>
        <button v-else class="btn update" disabled>已儲存</button>
      </div>
    </template>
  </form>
</template>
<script>
import { Toast, Toast2 } from "../utils/helper";
import authorizationAPI from "../apis/authorization";

export default {
  name: "registerForm",
  props: {
    isRegister: {
      // if signUp => signUp => API POST: /users
      // if not signUp => accountEdit => API PUT: /users/:id
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      form: {
        name: "",
        account: "",
        email: "",
        password: "",
        checkPassword: "",
      },
      isProcessing: false,
      error: {
        length: false,
        name: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      if (!this.formDataCheck()) {
        this.isProcessing = false;
        return;
      }
      this.handleSignUpSubmit();
    },
    formDataCheck() {
      this.isProcessing = true;
      let result = false;
      if (!this.form.account) {
        this.error.name = true;
        return result;
      }
      if (!this.form.name) {
        Toast2.fire({
          title: "請填寫名稱！",
        });
        return result;
      }
      if (!this.form.email) {
        Toast2.fire({
          title: "請填寫 Email！",
        });
        return result;
      }
      if (this.form.email.trim().indexOf("@") === -1) {
        Toast2.fire({
          title: "請填寫正確的 Email！",
        });
        return result;
      }
      if (!this.form.password) {
        Toast2.fire({
          title: "請填寫密碼！",
        });
        return result;
      }
      if (this.form.password.length > 12 || this.form.password.length < 4) {
        Toast2.fire({
          title: "密碼長度不得小於 4 或超過 12！",
        });
        return result;
      }
      if (!this.form.checkPassword) {
        Toast2.fire({
          title: "請填寫密碼確認！",
        });
        return result;
      }
      if (this.form.password !== this.form.checkPassword) {
        Toast2.fire({
          title: "密碼不相符！",
        });
        return result;
      }
      console.log("Data check passed");
      return true;
    },
    async handleSignUpSubmit() {
      try {
        this.isProcessing = true;
        const formData = {
          name: this.form.name,
          account: this.form.account,
          email: this.form.email,
          password: this.form.password,
          checkPassword: this.form.checkPassword,
        };
        // call api to post formData
        const { data } = await authorizationAPI.register(formData);
        // verify formData from backend
        if (data.message === "Error: email 已重複註冊！") {
          Toast2.fire({
            title: "email 已重複註冊！",
          });
          this.isProcessing = false;
          return;
        }
        if (data.message === "Error: account 已重複註冊！") {
          Toast2.fire({
            title: "帳號已重複註冊！",
          });
          this.isProcessing = false;
          return;
        }
        if (data.message === "Error: Passwords do not match!") {
          Toast2.fire({
            title: "密碼不一致",
          });
          this.isProcessing = false;
          return;
        }

        Toast.fire({
          title: "註冊成功！",
        });
        // 轉址
        this.$router.push("/login");
      } catch (error) {
        console.log("error", error);
        Toast2.fire({
          title: "暫時無法註冊，請稍後再試",
        });
      }
    },
  },
  watch: {
    "form.name": {
      handler() {
        if (this.form.name) {
          this.error.name = false;
        }
        if (this.form.name.trim().length > 50) {
          this.error.length = true;
        } else {
          this.error.length = false;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/variables.scss";
form {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 540px;
}
.row {
  width: 540px;
  margin: 10px 0;
  position: relative;
}
.row label {
  position: absolute;
  padding-left: 11px;
  color: $secondaryTextColor;
  font-size: 15px;
  font-weight: 500;
  display: block;
  width: 100%;
}
.row input {
  width: 540px;
  height: 52px;
  border-radius: 4px;
  background-color: $formBgColor;
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
.note {
  font-size: 15px;
  color: $orange;
  color: #fc5a5a;
}
.row .invalid {
  border-bottom: 2px solid #fc5a5a;
  &:focus,
  &:hover {
    border-bottom: 2px solid #fc5a5a;
  }
}
.btn {
  width: 540px;
  border-radius: 50px;
  height: 50px;
}
button.submit,
button.update {
  background-color: $orange;
  color: $white;
  font-size: 18px;
  font-weight: 700;
}
button.cancel {
  color: $blue;
  text-decoration: underline;
  font-size: 18px;
  font-weight: 700;
}
.row:last-child {
  position: relative;
  height: 50px;
}
button.update {
  position: absolute;
  right: 0;
  width: 122px;
  font-size: 18px;
}
</style>