(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63a6bb2f"],{"06f7":function(t,e,s){"use strict";s("08de")},"08de":function(t,e,s){},"6c05":function(t,e,s){"use strict";s("b695")},"7f94":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("Navbar",{attrs:{"current-status":t.currentStatus},on:{"after-create-tweet-modal":t.afterCreateTweetModal}}),e("div",{staticClass:"main-page"},[e("Tweet",{on:{"after-create-tweet":t.afterCreateTweet}}),t._l(t.posts,(function(t){return e("Posts",{key:t.tweetId,attrs:{"initial-post":t}})}))],2),e("Popular")],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h1",{staticClass:"home"},[t._v("首頁")]),e("form",{staticClass:"form",attrs:{action:""},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(t.currentUser.avatar),alt:""}}),e("div",{staticClass:"right-place"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textarea",attrs:{name:"tweet",id:"",cols:"30",rows:"10",placeholder:"有什麼新鮮事?"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),e("div",{staticClass:"submit-group"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.textToMuch,expression:"textToMuch"}],staticClass:"warn"},[t._v("字數不可超過140字")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noSpace,expression:"noSpace"}],staticClass:"warn__2"},[t._v("內容不可空白")]),e("button",{staticClass:"btn-tweet",attrs:{type:"submit",disabled:t.isLoading}},[t._v(" 推文 ")])])])]),e("div",{staticClass:"divide"})])},o=[],n=(s("d9e2"),s("6783")),c=s("c968"),l=s("2f62"),u=s("2708"),d={mixins:[u["a"]],data(){return{text:"",isLoading:!1,textToMuch:!1,noSpace:!1}},computed:{...Object(l["b"])(["currentUser","isAuthenticated"])},methods:{async handleSubmit(){if(this.isLoading=!0,this.text.trim().length>140)return this.isLoading=!1,this.noSpace=!1,this.textToMuch=!0;if(0===this.text.trim().length)return this.textToMuch=!1,this.isLoading=!1,this.noSpace=!0;try{const{data:t}=await n["a"].createTweet({image:this.currentUser.avatar,description:this.text});if(this.textToMuch=!1,this.noSpace=!1,c["a"].fire({title:"發文成功"}),this.isLoading=!1,"error"===t.status)throw this.isLoading=!1,new Error(t.message);this.$emit("after-create-tweet",{userAvatar:this.currentUser.avatar,UserId:this.currentUser.id,name:this.currentUser.name,image:this.currentUser.avatar,account:this.currentUser.account,description:this.text,RepliesCount:0,LikesCount:0,createdAt:new Date})}catch(t){c["b"].fire({title:"無法推文"})}this.text=""}}},p=d,h=(s("06f7"),s("2877")),m=Object(h["a"])(p,r,o,!1,null,"3b612d4f",null),f=m.exports,w=function(){var t=this,e=t._self._c;return e("div",[e("router-link",{staticClass:"router-to-reply",attrs:{tag:"div",to:{name:"reply",params:{id:t.post.tweetId}}}},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"avatar",attrs:{to:{name:"user-tweets",params:{id:t.post.UserId}}}},[e("img",{staticClass:"avatar__pic",attrs:{src:t._f("emptyImage")(t.post.userAvatar),alt:""}})]),e("div",{staticClass:"tweet-content"},[e("div",{staticClass:"title"},[e("router-link",{staticClass:"title__name",attrs:{to:{name:"user-tweets",params:{id:t.post.UserId}}}},[t._v(t._s(t.post.name))]),e("router-link",{staticClass:"title__id",attrs:{to:{name:"user-tweets",params:{id:t.post.UserId}}}},[t._v("@"+t._s(t.post.account)+"．")]),e("h4",{staticClass:"title__formNow"},[t._v(t._s(t._f("fromNow")(t.post.createdAt)))])],1),e("p",{staticClass:"description"},[t._v(" "+t._s(t.post.description)+" ")]),e("div",{staticClass:"icon"},[e("router-link",{attrs:{to:""}},[e("img",{staticClass:"icon__reply",attrs:{src:s("cbbc"),alt:""},on:{click:function(e){t.showModal=!0}}}),e("Modal",{attrs:{show:t.showModal,post:t.post},on:{close:function(e){t.showModal=!1},"after-create-reply-modal":t.afterCreateReplyModal}})],1),e("h5",[t._v(t._s(t.post.RepliesCount))]),t.post.isLiked?e("img",{staticClass:"icon__like",attrs:{src:s("bf15"),alt:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike(t.post.tweetId)}}}):e("img",{staticClass:"icon__like",attrs:{src:s("eee5"),alt:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike(t.post.tweetId)}}}),e("h5",[t._v(t._s(t.post.LikesCount))])],1)])],1)])],1)},v=[],C=s("c1df"),_=s.n(C),g=s("2797"),b={components:{Modal:g["a"]},mixins:[u["a"]],props:{initialPost:{type:Object,required:!1}},data(){return{post:this.initialPost,showModal:!1}},watch:{initialPost(){this.post=this.initialPost}},methods:{afterCreateReplyModal(){this.post.RepliesCount+=1},async addLike(t){try{const{data:e}=await n["a"].addLike({tweetId:t});if("error"===e.status)throw new Error(e.message);this.post={...this.post,isLiked:!0},this.post.LikesCount+=1}catch(e){c["b"].fire({title:"目前無法加入愛心"})}},async deleteLike(t){try{const{data:e}=await n["a"].deleteLike({tweetId:t});if("error"===e.status)throw new Error(e.message);this.post={...this.post,isLiked:!1},this.post.LikesCount-=1}catch(e){c["b"].fire({title:"目前無法移除愛心"})}}},filters:{fromNow(t){return t?_()(t).fromNow():"-"}}},k=b,x=(s("6c05"),Object(h["a"])(k,w,v,!1,null,"58341f40",null)),L=x.exports,y=s("d178"),I=s("f963"),U={components:{Tweet:f,Posts:L,Navbar:y["a"],Popular:I["a"]},computed:{...Object(l["b"])(["currentUser","isAuthenticated"])},data(){return{posts:[],currentStatus:{isIndex:!0,isUser:!1,isSetting:!1}}},created(){this.fetchPosts()},methods:{async fetchPosts(){try{const{data:t}=await n["a"].getTweets();"error"===t.status&&console.log("error",t.message),this.posts=t}catch(t){c["b"].fire({title:"無法取得該推文資料，請稍後再試"})}},async afterCreateTweet(t){const{UserId:e,name:s,image:a,account:i,description:r,RepliesCount:o,LikesCount:n,createdAt:c,userAvatar:l}=t;this.posts.unshift({UserId:e,name:s,image:a,account:i,description:r,RepliesCount:o,LikesCount:n,createdAt:c,userAvatar:l})},async afterCreateTweetModal(t){try{const{data:e}=await n["a"].createTweet({tweet:t});console.log(e);const{tweetId:s,UserId:a,name:i,image:r,account:o,description:c,RepliesCount:l,LikesCount:u,createdAt:d,userAvatar:p}=t;this.posts.unshift({tweetId:s,UserId:a,name:i,image:r,account:o,description:c,RepliesCount:l,LikesCount:u,createdAt:d,userAvatar:p})}catch(e){c["b"].fire({title:"目前無法推文，請稍後再試"})}}}},M=U,T=(s("cda9"),Object(h["a"])(M,a,i,!1,null,"5e77957d",null));e["default"]=T.exports},b26c:function(t,e,s){},b695:function(t,e,s){},cda9:function(t,e,s){"use strict";s("b26c")}}]);
//# sourceMappingURL=chunk-63a6bb2f.cf4b73b4.js.map