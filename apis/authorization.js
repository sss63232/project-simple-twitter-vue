import { apiHelper } from './../utils/helpers'

export default {
  login({ email, password }) {
    return apiHelper.post("/login", {
      email,
      password,
    })
  },
  register(data) {
    return apiHelper.post("/users", { ...data })
  },
  adminLogin({ email, password }) {
    return apiHelper.post("/admin/signin", {
      email,
      password,
    })
  }
}