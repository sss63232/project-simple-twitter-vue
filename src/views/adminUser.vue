<template>
  <div id="AdminUser">
    <template>
      <AdminNavbar />
      <div class="AdminUserPanel">

        <div class="admin-user-card">
          <AdminUserCard v-for="user in users" :key="user.id" :user="user" />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import AdminNavbar from "./../components/adminNavbar";
import AdminUserCard from "./../components/adminUserCard";
import { Toast2 } from "./../utils/helper";
import adminAPI from "../apis/admin";

export default {
  name: "AdminUser",
  components: {
    AdminNavbar,
    AdminUserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    //抓所有user的資料
    async fetchUser() {
      try {
        const { data } = await adminAPI.users.get();
        this.users = data;
      } catch (error) {
        Toast2.fire({
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../styles/variables.scss";
#AdminUser {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}
.adminUserPanel {
  flex: 1;
}
.admin-user-card {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
}

</style>