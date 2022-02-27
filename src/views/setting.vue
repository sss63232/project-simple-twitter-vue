<template>
  <div id="setting">
    <div class="navbar">
      <navbar page="normal" />
      <Navbar :current-status="currentStatus" :current-user="currentUser" />
    </div>
    <div class="setting-account">
      <div class="title">
        <h1>帳戶設定</h1>
      </div>
      <!--       form block -->
      <form class="setting-form">
        <div class="form-label-group">
          <label for="account">帳號</label>
          <!--           待綁定 -->
          <input
            id="account"
            v-model="account"
            type="text"
            class="form-control"
            autocomplete="userame"
            required
            autofocus
          />
        </div>
        <div class="form-label-group">
          <label for="name">名稱</label>
          <!--           待綁定 -->
          <input
            id="name"
            v-model="name"
            type="text"
            class="form-control"
            autocomplete="userame"
            required
            autofocus
          />
        </div>
        <div class="form-label-group">
          <label for="email">Email</label>
          <!--           待綁定 -->
          <input
            id="email"
            v-model="email"
            type="text"
            class="form-control"
            autocomplete="email"
            required
          />
        </div>
        <div class="form-label-group">
          <label for="password">密碼</label>
          <!--           待綁定 -->
          <input
            id="password"
            v-model="password"
            type="text"
            class="form-control"
            autocomplete="new-password"
          />
        </div>
        <div class="form-label-group">
          <label for="password-check">密碼確認</label>
          <!--           待綁定 -->
          <input
            id="password-check"
            v-model="passwordCheck"
            type="text"
            class="form-control"
            autocomplete="new-password"
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
import Navbar from "../components/Navbar.vue";
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
  margin-left: 23.625rem;
  padding: 0 0 0 1rem;
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