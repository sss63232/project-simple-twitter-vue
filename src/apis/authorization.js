import { apiHelper } from "../utils/helper";

export default {
  // login
  login({ account, password }) {
    return apiHelper.post("/signin", {
      account,
      password,
    });
  },
  register(formData) {
    return apiHelper.post("/users", formData);
  },
  adminLogin({ account, password }) {
    return apiHelper.post("/admin/signin", {
      account,
      password,
    });
  },
};
