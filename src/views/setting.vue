<template>
  <div id="setting">
    <div class="navbar">
      <Navbar :current-status="currentStatus" :current-user="currentUser" />
    </div>
    <div class="setting-account">
      <div class="title">
        <h1>帳戶設定</h1>
      </div>
      <form class="setting-form" @submit.stop.prevent="handleSubmit">
        <div class="form-label-group">
          <label for="account">帳號</label>
          <input
            id="account"
            v-model="user.account"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-label-group">
          <label for="name">名稱</label>
          <input
            id="name"
            v-model="user.name"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-label-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="user.email"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-label-group">
          <label for="password">密碼</label>
          <input
            id="password"
            v-model="user.password"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-label-group">
          <label for="password-check">密碼確認</label>
          <input
            id="password-check"
            v-model="user.checkPassword"
            type="text"
            class="form-control"
          />
        </div>
        <div class="setting-block">
          <button class="btn" type="submit" :disabled="isProcessing">
            儲存
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Navbar from "./../components/Navbar.vue";
import { Toast } from "./../utils/helper";

const dummyUser = {
  id: 14,
  name: "user1",
  email: "user1@example.com",
  avatar: "https://loremflickr.com/140/140/people?random=100",
  introduction:
    "Sint amet reprehenderit et eligendi est harum. Quis facere placeat. Quia molestiae error optio dolor",
  role: "",
  account: "user1",
  cover: "https://loremflickr.com/600/200/nature?random=100",
  createdAt: "2022-02-26T03:59:35.000Z",
  updatedAt: "2022-02-26T03:59:35.000Z",
};
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      user: {
        account: "",
        name: "",
        email: "",
        password: "",
        checkPassword: "",
      },
      isProcessing: false,
      currentUser: dummyUser,
      currentStatus: {
        isIndex: false,
        isUser: false,
        isSetting: true,
      },
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const { account, name, email } = dummyUser;
      this.user = {
        ...this.user,
        account,
        name,
        email,
      };
    },
    handleSubmit() {
      const { account, name, email, password, checkPassword } = this.user;
      if (
        account.trim().length ||
        name.trim().length ||
        email.trim().length ||
        password.trim().length ||
        checkPassword.trim().length === 0
      ) {
        Toast.fire({
          icon: "error",
          title: "不得留白",
        });
        return;
      } else if (password !== checkPassword) {
        return;
      } else if (email.indexOf("@") === -1) {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/variables.scss";
#setting {
  width: 100%;
  display: flex;
}
.navbar {
  margin-left: 6.438rem;
}

.title {
  border-bottom: 1px solid $borderColor;
  margin-left: -1rem;
  margin-right: -1rem;
}

h1 {
  color: $mainColor;
  font-size: 19px;
  margin-left: 2rem;
}

.setting-account {
  flex: 1;
  flex-grow: 1;
  border-left: 1px solid $borderColor;
}

.setting-form {
  padding: 1.875rem 25.3125rem 0 1rem;
  margin-bottom: 40rem;
}
.form-label-group {
  position: relative;
  label {
    position: absolute;
    left: 0.625rem;
    top: 0.313rem;
    color: $secondaryTextColor;
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
  }
  input {
    width: 40.125rem;
    height: 3.25rem;
    border-radius: 4px;
    background-color: $formBgColor;
    padding: 1.25rem 0 0.25rem 0.625rem;
    margin-bottom: 1.875rem;
    color: $mainColor;
    font-size: 19px;
    font-weight: 500;
    border: none;
    border-bottom: 2px solid $secondaryTextColor;
  }
}
.setting-block {
  width: 40.125rem;
  display: inline-flex;
  justify-content: flex-end;
}
.btn {
  border-radius: 50px;
  background-color: $orange;
  font-size: 18px;
  font-weight: 700;
  color: $white;
  margin-top: 0.625rem;
  padding: 0.625rem 2.5rem;
  border: none;
}
</style>