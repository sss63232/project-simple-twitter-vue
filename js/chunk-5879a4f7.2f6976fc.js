(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5879a4f7"],{"846b":function(s,t,e){},"942f":function(s,t,e){"use strict";e.r(t);var r=function(){var s=this,t=s._self._c;return t("div",{staticClass:"profile-main"},[t("ProfileCard",s._g({attrs:{user:s.user,followers:s.followers}},s.$listeners)),t("ProfileTabs",{attrs:{status:s.status}}),t("UserRepliesPosts",{attrs:{replies:s.replies}})],1)},a=[],i=e("07c2"),l=e("9a2f"),n=function(){var s=this,t=s._self._c;return t("div",{staticClass:"main"},[s.replies[0]?s._l(s.replies,(function(e){return t("router-link",{key:e.replyId,staticClass:"router-to-reply",attrs:{tag:"div",to:{name:"reply",params:{id:e.Tweet.tweetId}}}},[t("div",{staticClass:"container"},[t("div",{staticClass:"avatar"},[t("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t("img",{staticClass:"avatar__pic",attrs:{src:s._f("emptyImage")(e.User.avatar),alt:""}})])],1),t("div",{staticClass:"tweet-content"},[t("div",{staticClass:"title"},[t("router-link",{staticClass:"title__name",attrs:{to:{name:"user",params:{id:e.User.id}}}},[s._v(s._s(e.User.name))]),t("router-link",{staticClass:"title__id",attrs:{to:{name:"user",params:{id:e.User.id}}}},[s._v("@"+s._s(e.User.account))]),t("div",{staticClass:"title__formNow"},[s._v("．"+s._s(s._f("fromNow")(e.createdAt)))])],1),t("div",{staticClass:"hashtag"},[t("span",{staticClass:"hashtag__reply"},[s._v("回覆")]),t("router-link",{staticClass:"hashtag__userid",attrs:{to:{name:"user",params:{id:e.Tweet.TweetUserId}}}},[s._v("@"+s._s(e.Tweet.TweetUserAccount))])],1),t("p",{staticClass:"description"},[s._v(s._s(e.comment))])])])])})):t("div",{staticClass:"empty"},[s._v("目前沒有推文及回覆內容")])],2)},o=[],c=e("c1df"),p=e.n(c),u=e("2708");p.a.locale("zh-tw");var d={name:"UserRepliesPosts",mixins:[u["a"]],props:{replies:{type:Array,required:!0}},filters:{fromNow(s){return s?p()(s).fromNow():"-"}}},_=d,f=(e("c349"),e("2877")),m=Object(f["a"])(_,n,o,!1,null,"3e80c103",null),v=m.exports,w={name:"UserReplies",components:{ProfileCard:i["a"],ProfileTabs:l["a"],UserRepliesPosts:v},props:{user:{type:Object,required:!0},replies:{type:Array,required:!0},followers:{type:Array}},data(){return{status:{tweets:!1,replies:!0,likes:!1}}}},C=w,y=Object(f["a"])(C,r,a,!1,null,null,null);t["default"]=y.exports},c349:function(s,t,e){"use strict";e("846b")}}]);
//# sourceMappingURL=chunk-5879a4f7.2f6976fc.js.map