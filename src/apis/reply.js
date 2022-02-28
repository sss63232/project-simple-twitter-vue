import { apiHelper } from "../utils/helper";
const getToken = () => localStorage.getItem('token')

export default {
  //新增一則貼文  failure
  createReply({ tweetId, formData }) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, { formData }, {
      headers: {
        Authorization: `Bearer ${getToken()} `
      }
    })
  },
}