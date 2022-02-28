import { apiHelper } from "../utils/helper";
const getToken = () => localStorage.getItem('token')

export default {
  //main.vue首頁拿所有推文的api ok
  getTweets() {
    return apiHelper.get('/tweets',
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
  },
  //新增一則推文 failure 
  createTweet({ tweet }) {
    return apiHelper.post('/tweets', { tweet }, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  //推文可以加入like ok
  addLike({ tweetId }) {
    return apiHelper.post(`tweets/${tweetId}/like`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  //推文可以移除like ok
  deleteLike({ tweetId }) {
    return apiHelper.post(`tweets/${tweetId}/unlike`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
}