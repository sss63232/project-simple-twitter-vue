import { apiHelper } from "../utils/helper";

export default {
  // login
  signIn({ account, password }) {
    return apiHelper.post("/signin", {
      account,
      password,
    });
  },
};
