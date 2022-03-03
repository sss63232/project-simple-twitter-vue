import { apiHelper } from "./../utils/helper";
const getToken = () => localStorage.getItem("token");

export default {
  users: {
    get() {
      return apiHelper.get("/admin/users", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
    },
  },
  tweets: {
    // 取得使用者清單
    get() {
      return apiHelper.get("/admin/tweets", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
    delete({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
    },
  },
};
