(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b24ee96","chunk-61c6196e"],{1511:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"navbar"},[e("Navbar",{attrs:{"current-status":t.currentStatus},on:{"after-create-tweet-modal":t.afterCreateTweetModal}})],1),e("div",{staticClass:"main"},[e("header",{staticClass:"header"},[e("button",[e("router-link",{attrs:{to:"/main"}},[e("img",{staticClass:"previous-btn",attrs:{src:s("c5d4"),alt:"backarrow"}})])],1),e("div",{staticClass:"title"},[e("p",{staticClass:"user-name"},[t._v(t._s(t.user.name))]),e("p",{staticClass:"user-tweet"},[t._v(t._s(t.tweets.length)+" 推文")])])]),e("div",{staticClass:"user-page-body"},[e("router-view",{attrs:{user:t.user,tweets:t.tweets,likes:t.likes,followers:t.Followers,followings:t.Followings,replies:t.replyTweets},on:{"after-like":t.handleAddLike,"after-delete-like":t.handleDeleteLike,"after-update":t.handleUpdate,"after-delete-on-like":t.handleDeleteLikePost,"after-remove-followship":t.handleRemoveFollowship,"after-add-followship":t.handleAddFollowship,"after-del-followship":t.handleDelFollowship,"after-cancel-cover":t.handleCancelCover,"after-create-reply-modal":t.handleReplyModal}})],1)]),e("div",{staticClass:"popular-users"},[e("PopularUsers",{attrs:{"change-top-user":t.topUsers},on:{"after-remove-pop":t.handleRemovePop,"after-add-pop":t.handleAddPop}})],1)])},r=[],o=(s("d9e2"),s("d178")),i=s("f963"),l=s("4cce"),n=s("6783"),c=s("c968"),A=s("2f62"),d={name:"User",components:{Navbar:o["a"],PopularUsers:i["a"]},computed:{...Object(A["b"])(["currentUser","isAuthenticated"])},created(){const t=this.$route.params.id;this.fetchUser(t),this.fetchTweets(t),this.fetchLikes(t),this.fetchReplies(t),this.fetchFollowers(t),this.fetchFollowings(t),this.$watch(()=>this.$route.params,(t,e)=>{if(t.id!==e.id){const e=t.id;this.fetchUser(e),this.fetchTweets(e),this.fetchLikes(e),this.fetchReplies(e),this.fetchFollowers(e),this.fetchFollowings(e)}})},data(){return{currentStatus:{isIndex:!1,isUser:!0,isSetting:!1},user:{id:-1,name:"",avatar:"",introduction:"",account:"",cover:"",followersLength:0,followingsLength:0},tweets:[],replyTweets:[],likes:[],Followers:[],Followings:[],topUsers:[],isLoading:!0}},methods:{async fetchUser(t){try{this.isLoading=!0;const{data:e}=await l["a"].get({userId:t});"Error: 帳號不存在！"===e.message&&(console.log("error",e.message),c["b"].fire({title:"無此帳號，請稍後再試"}));const{id:s,name:a,avatar:r,introduction:o,account:i,cover:n,Followers:A,Followings:d}=e;this.user={id:s,name:a,avatar:r,introduction:o,account:i,cover:n,followersLength:A?A.length:0,followingsLength:d?d.length:0},this.isLoading=!1}catch(e){console.log("error",e),c["b"].fire({title:"無法取得資料，請稍後再試"})}},async fetchTweets(t){try{const{data:e}=await l["a"].getTweets({userId:t});if(e.isEmpty)return void(this.tweets=[]);if("Error: User has no tweets"===e.message)return console.log("error",e.message),c["b"].fire({title:"目前沒有推文內容"}),void(this.tweets=[]);this.tweets=e}catch(e){console.log("error",e),c["b"].fire({title:"無法取得資料，請稍後再試"})}},async fetchReplies(t){try{const{data:e}=await l["a"].getReplies({userId:t});if(e.isEmpty)return void(this.replyTweets=[]);if("Error: No replies"===e.message)return console.log("error",e.message),c["b"].fire({title:"目前沒有推文及回覆內容"}),void(this.replyTweets=[]);this.replyTweets=e}catch(e){console.log("error",e),c["b"].fire({title:"無法取得資料，請稍後再試"})}},async fetchLikes(t){try{const{data:e}=await l["a"].getLikes({userId:t});if("TypeError: Cannot read properties of null (reading 'Likes')"===e.message)return c["b"].fire({title:"目前沒有喜歡的內容"}),void(this.likes=[]);if(e.isEmpty)return console.log("error",e.message),c["b"].fire({title:"目前沒有喜歡的內容"}),void(this.likes=[]);this.likes=e}catch(e){console.log("error",e),c["b"].fire({title:"無法取得資料，請稍後再試"}),this.likes=[]}},async fetchFollowers(t){try{const{data:e}=await l["a"].getFollowers({userId:t});if(e.isEmpty)return console.log("error",e.isEmpty),void(this.Followers=[]);this.Followers=e}catch(e){console.log("error",e),c["b"].fire({title:"無法取得資料，請稍後再試"})}},async fetchFollowings(t){try{const{data:e}=await l["a"].getFollowings({userId:t});if(e.isEmpty)return void(this.Followings=[]);this.Followings=e}catch(e){console.log("error",e),c["b"].fire({title:"無法取得該Followings資料，請稍後再試"})}},async fetchTopUsers(){try{const{data:t}=await l["a"].getTopUser();this.topUsers=t}catch(t){console.log("error",t),c["b"].fire({title:"無法取得資料，請稍後再試"})}},async handleAddLike(t){try{const{data:e}=await n["a"].addLike({tweetId:t});if("error"===e.status)throw new Error(e.message);this.tweets=this.tweets.map(e=>e.tweetId===t?{...e,LikesCount:e.LikesCount+1,isLiked:!0}:e)}catch(e){console.log("error",e),c["b"].fire({title:"無法新增喜歡，請稍後再試"})}},async handleDeleteLike(t){try{const{data:e}=await n["a"].deleteLike({tweetId:t});if("error"===e.status)throw new Error(e.message);this.tweets=this.tweets.map(e=>e.tweetId===t?{...e,LikesCount:e.LikesCount-1,isLiked:!1}:e)}catch(e){console.log("error",e),c["b"].fire({title:"無法取消喜歡，請稍後再試"})}},async handleDeleteLikePost(t){try{const{data:e}=await n["a"].deleteLike({tweetId:t});if("error"===e.status)throw new Error(e.message);this.likes=this.likes.filter(e=>e.TweetId!==t),c["a"].fire({title:"成功取消喜歡！"})}catch(e){console.log("error",e),c["b"].fire({title:"無法取消喜歡，請稍後再試"})}},async handleRemoveFollowship(t){try{const{data:e}=await l["a"].removeFollowship({userId:t});if("Error: Cannot unfollow yourself!"===e.message)return console.log("error",e.message),void c["b"].fire({title:"不能取消跟隨自己"});if("Error: You have not followed this user.!"===e.message)return console.log("error",e.message),void c["b"].fire({title:"已經取消跟隨"});c["a"].fire({title:"成功取消跟隨！"}),this.Followings=this.Followings.filter(e=>e.followingId!==t),this.followingsLength,this.fetchTopUsers()}catch(e){console.log("error",e),c["b"].fire({icon:"error",title:"無法取消跟隨，請稍後再試"})}},async handleAddFollowship(t){try{const e={id:t},{data:s}=await l["a"].addFollowship({formData:e});if("Error: You are already following this user."===s.message)return void c["b"].fire({title:"已經跟隨該用戶"});"Error: Cannot follow yourself!"===s.message&&c["b"].fire({title:"無法跟隨此用戶"}),this.Followers=this.Followers.map(e=>e.followerId===t?{...e,isFollowed:!0}:e),c["a"].fire({title:"成功跟隨此用戶"}),this.fetchFollowings(this.user.id),this.followingsLength,this.fetchTopUsers()}catch(e){console.log("error",e),c["b"].fire({title:"無法新增跟隨，請稍後再試"})}},async handleDelFollowship(t){try{const{data:e}=await l["a"].removeFollowship({userId:t});if("Error: Cannot unfollow yourself!"===e.message)return console.log("error",e.message),void c["b"].fire({title:"不能取消跟隨自己"});if("Error: You have not followed this user.!"===e.message)return console.log("error",e.message),void c["b"].fire({title:"已經取消跟隨"});c["a"].fire({title:"成功取消跟隨！"}),this.Followers=this.Followers.map(e=>e.followerId===t?{...e,isFollowed:!1}:e),this.followingsLength,this.fetchTopUsers()}catch(e){console.log("error",e),c["b"].fire({title:"無法取消跟隨，請稍後再試"})}},handleUpdate(t){const{name:e,avatar:s,cover:a,introduction:r}=t;this.user={...this.user,name:e,avatar:s,cover:a,introduction:r},this.fetchTweets(this.user.id),this.fetchUser(this.user.id),this.fetchTopUsers(),this.fetchLikes(this.user.id),this.fetchReplies(this.user.id)},handleRemovePop(){this.user.followingsLength},handleAddPop(){this.user.followingsLength},afterCreateTweetModal(t){const{UserId:e,name:s,image:a,account:r,description:o,createdAt:i,LikesCount:l,RepliesCount:n}=t,c={createdAt:i,description:o,image:a,LikesCount:l,RepliesCount:n,User:{id:e,name:s,account:r,avatar:a},isLiked:!1};this.tweets.unshift(c)},handleCancelCover(){this.user.cover=""},handleReplyModal({id:t,status:e}){"tweets"===e?this.tweets=this.tweets.map(e=>e.tweetId===t.tweetId?{...e,RepliesCount:e.RepliesCount+1}:e):"likes"===e&&(this.likes=this.likes.map(e=>(e.TweetId===t.tweetId&&e.Tweet.repliesCount++,e)))}}},h=d,u=(s("19e4"),s("2877")),g=Object(u["a"])(h,a,r,!1,null,"1a2189a0",null);e["default"]=g.exports},"19e4":function(t,e,s){"use strict";s("7652")},"1e84":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM2SURBVHgB7ZlLThtBEIYL20gRDwnEBgkQkxvADewTROyyizlB4ATgG2SbFWaZHTlBnBuYXXbphS17FyPbC8uv/L/jWIk10109D0Mif9LIzXRNd//d1TXVg8iaNYnIS0bsgYODg7c7OztBr9f7JhmxIRlwdHRUzuVyN9PpNJh1srFhJpNJpdlsViVlUhVwfHxcxM8NrmJoZxkISUWAa+Ah1Eaj0WW73TaSkEQCDg8Pg0KhcCf6gf8FXKw6Ho8rSYTEEsANuru7Sx+/khRIIsRLAAeOqPIeRQ58T9LnFq517yNELQB+Th/PauALfDe6U8BySFwVWiGRAmJElkygELjVdavVegitX77xUgYeQmjoXQhgSMzn8zdQXJYXzHLEWgg4OTn5vmo/jwvdqtvtnndAjjewUc/+lcETjnV7eztgeSZgc3PT4Kb5w6ZGlZIQtrnUbirtsIzoVGd5JsAY04FflVBxjT9LjUajhBD2VWIw7+waKfQ+OnnNi2Xcu4wrBpP5yHbwe8G2+/3++aIu6iFEo1v5FY18Bn+Pxq/om2H1QRDsDYfDDxjIO/Gjgkm9DasoSPRgDDoSLbCvY5bKNhuuNH7KmJxT8QjT8I56VF3O8lxdPEAnFx7mFQ9bQXjvRNVFCuDGFj01nwQM7lDjM1p77CH/FZgvd6TyJR7FH+0znag9RWwuRIwoOxF/tM9YXdkqABtTNUvY7KfiCdrWPvNkq7QK8HiZFcUTpOhFpWmiFTCigK/2eRargmcMbepiC6HEtQfUoRSrdceM1mVHGx6QRIkthBKrAJ9QyhmF/RebCCaNtPFJHG0hlDhftXCNH+J5DmbOjlzqM2baYMCdwWBwhvKbGGeNDt4Z+zaDgrgxuM7EAw4US19mGacouoHExOnCrj2gDqUZ8eQycApI41yQgFRWwMgz4QqhxClAPLPSNHGFUOIU4JmVpoorhBKnAM+sNE2sWehvNC5EjKweleuqBDxTKHWGUKISgM208o2MSXvQ2KkEIA2oygr3AUM3QmhNY6sSwI2MRkuyGhHs40J7xlYnKfgW2d7a2vqEN/M+rgC3Xkm6cOAf+QUan9Iz+7/ymjX/Gz8BDJO12uOTf7IAAAAASUVORK5CYII="},2708:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));const a={filters:{emptyImage(t){return t||"https://via.placeholder.com/350x220/DFDFDF?text=No+Image"}}}},"3bd9":function(t,e,s){"use strict";s("b5eb")},4287:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return t.show?e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("form",{staticClass:"modal-container",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"modal-header"},[e("button",{attrs:{name:"header"},on:{click:function(e){return t.$emit("close")}}},[e("img",{attrs:{src:s("aac3"),alt:""}})])]),e("div",{staticClass:"modal-body"},[e("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(t.currentUser.avatar),alt:""}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"tweet",attrs:{name:"tweet",id:"",cols:"30",rows:"10",placeholder:"有什麼新鮮事?"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),e("div",{staticClass:"modal-footer"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.textToMuch,expression:"textToMuch"}],staticClass:"warn"},[t._v("字數不可超過140字")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noSpace,expression:"noSpace"}],staticClass:"warn__2"},[t._v("內容不可空白")]),e("button",{staticClass:"modal-default-button",attrs:{disabled:t.isLoading}},[t._v(" 推文 ")])])])])]):t._e()},r=[],o=(s("d9e2"),s("6783")),i=s("c968"),l=s("2f62"),n=s("2708"),c={mixins:[n["a"]],props:{show:Boolean},data(){return{text:"",isLoading:!1,textToMuch:!1,noSpace:!1}},computed:{...Object(l["b"])(["currentUser","isAuthenticated"])},methods:{async handleSubmit(){if(this.isLoading=!0,this.text.trim().length>140)return this.isLoading=!1,this.noSpace=!1,this.textToMuch=!0;if(0===this.text.trim().length)return this.textToMuch=!1,this.isLoading=!1,this.noSpace=!0;try{const{data:t}=await o["a"].createTweet({image:this.currentUser.avatar,description:this.text});if(i["a"].fire({title:"推文發送成功"}),this.$emit("after-create-tweet-modal",{userAvatar:this.currentUser.avatar,UserId:this.currentUser.id,name:this.currentUser.name,image:this.currentUser.avatar,account:this.currentUser.account,description:this.text,RepliesCount:0,LikesCount:0,createdAt:new Date}),this.textToMuch=!1,this.noSpace=!1,this.text="",this.$emit("close"),this.isLoading=!1,"error"===t.status)throw this.isLoading=!1,new Error(t.message)}catch(t){Object(i["b"])({title:"目前無法推文"})}}}},A=c,d=(s("4b81"),s("2877")),h=Object(d["a"])(A,a,r,!1,null,"5b46823d",null);e["default"]=h.exports},4293:function(t,e,s){},"44e1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJASURBVHgB7ZmLbdswEIa/dgJvUHYCOxOUG9QbVN0gGyQbtBvEnSDNBFYnaDOBlQncTtDwIhk4yY4kPvQAog/4ARogrTvyRB5PsLAQxTvSs3LaOq2rtvDX6dEpdyqYKWLsN6ej0/8W3TkZZoZxOtBuuNaBRE6kCCHjtKduUO70QBk6gqzOZyer+hROV6rPZEhInGZWwmfb0jejHmL3TIyhHhrbHmNsY4xlQvTs33mM26lx35kQ/eJaj3GWethNwibSCP0ufCCQ94RjVPsP/uSqfUUgqRx4xJ9/qr0ikBgH9END9vJCtQ2BxDgwC2Ic0LMeEgKxK/hCjAOFaq/xZ/3Kf42GzKA+UY3HWBMxNil7/DNMQ/0A9DnBz4jNRuUwEyd0POdOvyjjWsf2uupvG//xkYkvORn97wFax2rsLDDUw6lL0ndDAlLfiQ2lYaJmfvNEGSo/mcElZiEVQ5RVTiG0ol5WKSqFZK6DIkZmlC9mV0nltPvcM4MdSAy/oZ/RbeWVGyIIDSHL6wWqgjJMZNfRZRXZlTYtY75Sv+QMhszYpbC4pX8qcc3lQljUavShafyxMiaUjHNHBnOiafyeNFmk4fwUT+7EtvGAHenZMWDBSy/znuFopufBl31Nhn/OH4oYrLflWxKgZz9jeK5JWLWz1Gd/LPQq2LaOXZd6XW3OGY8fXLbhjC4HdOXggfHIVdu0dexy4Em1PzEO8iJ/Ub8LIrCEJ2qp1OejSSs7YCrjk338yJx+w2iGH4jLsRYW3gzPczpIIlWW9TAAAAAASUVORK5CYII="},"4b81":function(t,e,s){"use strict";s("4293")},"58f6":function(t,e,s){"use strict";s("5bb8")},"5bb8":function(t,e,s){},"657c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMMSURBVHgB7VnRcdswDH3N9T/pBGY3cCcoO0E8gjaoN7A2sDuBtIGSCZxOkG5gd4KkE6TiRTpBEAFSFu04F7873FkmHwgRIABJwAUXTMInHAdZLbe13DTXz7Xc11LizOEMfqzlRZBHdDd1liggG99KgTOF21lq6KYW20jOxt7MC7aWZWOQ9Yy1Bm49XBpaC0Hv0qM3CW4ao3g47GoxzRwaPr4wKcn4uvnPCHoLJPRS6GA6eWLXC48eG+Ac7cBXGO5OqSy8UXSFeHx8i4mwTGFOxgz67nc7uozQmeE19KiRloznbE2LCcgRl/4OcfUNZF4J/6YN8Bnx+KeMPWM8NM4LEsEioTsjYVKvSeN88qEaud4uNDmmmTNM0ReEQ8ZxXCqdNdd/a7mrZR/guTPxRK6/RnCiQHO2dmAN/IWplQpd4ZP4NKtNgjPU7eIacS6dI1ycWsPmih6qo8DrGRiV5dzkSlg8FzgGQ+OdJ9r+pvLchBF0LSF3sVE3IrUNpcKhBjov+XbYYFjAJGwgtxcqMg+hdaMEwzhGmTtnc2fKXBe+JYZnKlM4vZ3MEQfq8ruI+dSgmNbDYSOtccUm0hh7QBzMSM69wNVAjb6mA1d45+A3QAvULeKwH8n5LnBjOVpPNjjELl7dIV4oHMM48xFzjTLXNmvzrJghACmNrhUOPZg7wbA5+mm0UvQVODCNOriDXAoKpKxhMCxkFbpCxlOhVsgyTCxk9EYsuxmtP0nVSlAvufS5QIJnY2rYTJlnILch7ZkyCp++W4pq5o7dTpvmeo83bKdj+5dU2KZczyI+7aWCZWtabXKoElvyu0Sip6MAHmr5Bb8NA6RoJbTXIyGehGskgkXfnSs2xgtYFqHzJ/pZjWemFUaEUAx4ESrQf8wcU7E1XoFhBa6QAIe83LUePYsAx9c2JH1DXUIvTPSho/DooLvb7qzj7gS9UcaP/chn0bUBf9B/gFkQw9zYN8bdovPMD8bV9J4M/BPTCt0nJh77yUIjNbQ+SAuvs8HJP7Oe6kP3vpbfeAcfui/4cPgP3DPsRt9uv/kAAAAASUVORK5CYII="},6783:function(t,e,s){"use strict";var a=s("c968");const r=()=>localStorage.getItem("token");e["a"]={getTweets(){return a["c"].get("/tweets",{headers:{Authorization:"Bearer "+r()}})},getTweet({tweetId:t}){return a["c"].get("/tweets/"+t,{headers:{Authorization:`Bearer ${r()} `}})},createTweet({image:t,description:e}){return a["c"].post("/tweets",{image:t,description:e},{headers:{Authorization:`Bearer ${r()} `}})},addLike({tweetId:t}){return a["c"].post(`tweets/${t}/like`,null,{headers:{Authorization:"Bearer "+r()}})},deleteLike({tweetId:t}){return a["c"].post(`tweets/${t}/unlike`,null,{headers:{Authorization:"Bearer "+r()}})}}},"6d23":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACbSURBVHgBvZThDcAQEIVfOoERbvN2A93AKEYwgmp6ElEOUX3J++X5DjkHPKJgE+yCfcOa81VRJyi1k6CaQ0ewgizinOcbFRWrEvqkklOKwNqJLLt3T3WRGOTxBpaKiEDKYIQB5UCagZWAFmMtlNpuWKDlV56G/tI2OXSoseNgaP3jtIgINLy4o/1WinN3/pQqfjq+IlR3gowEuwDXfn/CSY55ogAAAABJRU5ErkJggg=="},7652:function(t,e,s){},aac3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACvSURBVHgBpZPLEcMgDER3qYRW0omP6SJt+JhO3EoqCTGCJHwkYMa6wIx4D4RGDHd4vLHB4ckdLyxEyTjZAI9zPSSxBh+Z2Vy0gHKzn0kK2AsTX/1LhDMRBI6JW1tOBzOdYXXAkFhwzLG7pZFIwoA7gSpJocKqQJHAgmM4WBGMfRN6CWXNSeBhdIdDmPkTBy3mCK7aaEg4g6sLFAlX4JHkO0xTWJ6753/5z87Gq+P8AWvcmeyQzGyUAAAAAElFTkSuQmCC"},b5eb:function(t,e,s){},c5d4:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABTSURBVHgBrdLRCQAgCATQo0ncfylHKRTqQwrM88Cojx6UYl6iqlNEvDLBCwBQQyJg5y+kChyEARxhAUc2UC27P9CRlufYQn/s3tAtZqH+sY9QFlmZh9qG/+G4HQAAAABJRU5ErkJggg=="},d178:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("nav",[e("div",{attrs:{id:"logo"}},[e("router-link",{attrs:{to:"/main"}},[e("img",{attrs:{src:s("bca0"),alt:"logo"}})])],1),e("div",{staticClass:"menu"},[e("ul",[e("li",{class:{active:t.currentStatus.isIndex}},[e("router-link",{staticClass:"menu__item",attrs:{to:"/main"}},[e("img",{staticClass:"index",attrs:{src:s("1e84"),alt:"index"}}),e("span",{staticClass:"menu__item__title"},[t._v("首頁")])])],1),e("li",{class:{active:t.currentStatus.isUser}},[e("router-link",{staticClass:"menu__item",attrs:{to:{name:"user",params:{id:t.currentUser.id}}}},[e("img",{staticClass:"user",attrs:{src:s("44e1"),alt:"index"}}),e("span",{staticClass:"menu__item__title"},[t._v("個人資料")])])],1),e("li",{class:{active:t.currentStatus.isSetting}},[e("router-link",{staticClass:"menu__item",attrs:{to:"/profile/setting"}},[e("img",{staticClass:"setting",attrs:{src:s("657c"),alt:"index"}}),e("span",{staticClass:"menu__item__title"},[t._v("設定")])])],1)])]),e("button",{staticClass:"twit-button",on:{click:function(e){t.showModal=!0}}},[t._v("推文")]),e("Modal",{attrs:{show:t.showModal},on:{close:function(e){t.showModal=!1},"after-create-tweet-modal":t.afterCreateTweetModal}}),e("div",{attrs:{id:"log-out"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.logOut.apply(null,arguments)}}},[t._m(0),e("p",[t._v("登出")])])],1)},r=[function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"icon",attrs:{src:s("6d23"),alt:"logoOut"}})])}],o=(s("14d9"),s("4287")),i=s("2f62"),l={name:"Navbar",components:{Modal:o["default"]},computed:{...Object(i["b"])(["currentUser","isAuthenticated"])},props:{currentStatus:{type:Object,required:!0}},data(){return{showModal:!1}},methods:{afterCreateTweetModal(t){this.$emit("after-create-tweet-modal",t)},logOut(){localStorage.removeItem("token"),this.$router.push("/login")}}},n=l,c=(s("58f6"),s("2877")),A=Object(c["a"])(n,a,r,!1,null,"3a59062b",null);e["a"]=A.exports},f963:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"popular-users"}},[e("p",{staticClass:"title"},[t._v("Popular")]),e("div",{staticClass:"users-list"},t._l(t.topUsers,(function(s){return e("div",{key:s.id,staticClass:"item"},[e("router-link",{staticClass:"image",attrs:{to:{name:"user",params:{id:s.id}}}},[e("img",{attrs:{src:t._f("emptyImage")(s.avatar),alt:"avatar"}})]),e("div",{staticClass:"info"},[e("p",{staticClass:"name"},[t._v(t._s(s.name))]),e("span",{staticClass:"account"},[t._v("@"+t._s(s.account))])]),s.isFollowing?e("button",{staticClass:"following-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.removeFollowing(s.id)}}},[t._v(" 正在跟隨 ")]):e("button",{staticClass:"follow-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFollowing(s.id)}}},[t._v(" 跟隨 ")])],1)})),0)])},r=[],o=(s("d9e2"),s("4cce")),i=s("c968"),l=s("2708"),n={name:"PopularUsers",mixins:[l["a"]],props:{changeTopUser:{type:Array}},created(){this.fetchTopUsers()},data(){return{topUsers:[]}},methods:{async fetchTopUsers(){try{const{data:t}=await o["a"].getTopUser();this.topUsers=t}catch(t){console.log("error",t),i["b"].fire({title:"無法取得Top使用者資料，請稍後再試"})}},async removeFollowing(t){try{const{data:e}=await o["a"].removeFollowship({userId:t});if("error"===e.status)throw new Error(e.message);this.topUsers=this.topUsers.map(e=>e.id===t?{...e,isFollowing:!1}:e),this.$emit("after-remove-pop",t)}catch(e){console.log("error",e),i["b"].fire({title:"無法取消追蹤，請稍後再試"})}},async addFollowing(t){try{const e={id:t},{data:s}=await o["a"].addFollowship({formData:e});if("error"===s.status)throw new Error(s.message);this.topUsers=this.topUsers.map(e=>e.id===t?{...e,isFollowing:!0}:e),this.$emit("after-add-pop",t)}catch(e){console.log("error",e),i["b"].fire({title:"無法新增追蹤，請稍後再試"})}}},watch:{changeTopUser(){return this.topUsers={...this.topUsers,...this.changeTopUser}}}},c=n,A=(s("3bd9"),s("2877")),d=Object(A["a"])(c,a,r,!1,null,"585829a2",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-9b24ee96.9ad849b4.js.map