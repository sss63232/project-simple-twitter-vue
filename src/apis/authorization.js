import { apiHelper } from "../utils/helper";

export default {
  // login
  login({ account, password }) {
    return apiHelper.post("/signin", {
      account,
      password,
    });
  },
  register(data) {
    return apiHelper.post("/users", { ...data });
  },
  adminLogin({ account, password }) {
    return apiHelper.post("/admin/signin", {
      account,
      password,
    });
  },
};
