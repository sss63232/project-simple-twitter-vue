(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d346fdba"],{"061b":function(t,e,a){"use strict";var s=a("c968"),r=function(){return localStorage.getItem("token")};e["a"]={createReply:function(t){var e=t.tweetId,a=t.comment;return s["c"].post("/tweets/".concat(e,"/replies"),{tweetId:e,comment:a},{headers:{Authorization:"Bearer ".concat(r()," ")}})}}},"0d28":function(t,e,a){},"43a0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile-main"},[a("ProfileCard",t._g({attrs:{user:t.user,followers:t.followers}},t.$listeners)),a("ProfileTabs",{attrs:{status:t.status}}),a("LikesContent",t._g({attrs:{likes:t.likes},on:{"after-create-reply-modal":t.afterCreateReplyModal}},t.$listeners))],1)},r=[],i=a("07c2"),n=a("9a2f"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[t.likes[0]?t._l(t.likes,(function(e){return s("router-link",{key:e.TweetId,staticClass:"router-to-reply",attrs:{tag:"div",to:{name:"reply",params:{id:e.TweetId}}}},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"avatar",attrs:{to:{name:"user",params:{id:e.Tweet.User.id}}}},[s("img",{staticClass:"avatar__pic",attrs:{src:t._f("emptyImage")(e.Tweet.User.avatar),alt:""}})]),s("div",{staticClass:"tweet-content"},[s("div",{staticClass:"title"},[s("router-link",{staticClass:"title__name",attrs:{to:{name:"user",params:{id:e.Tweet.User.id}}}},[t._v(t._s(e.Tweet.User.name))]),s("router-link",{staticClass:"title__id",attrs:{to:{name:"user",params:{id:e.Tweet.User.id}}}},[t._v("@"+t._s(e.Tweet.User.account)+"．")]),s("h4",{staticClass:"title__formNow"},[t._v(t._s(t._f("fromNow")(e.Tweet.createdAt)))])],1),s("p",{staticClass:"description"},[t._v(" "+t._s(e.Tweet.description)+" ")]),s("div",{staticClass:"icon"},[s("router-link",{attrs:{to:{name:"user-likes",params:{id:e.userId}}}},[s("img",{staticClass:"icon__reply",attrs:{src:a("cbbc"),alt:""},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.clickOnReply(e.TweetId)}}})]),s("h5",[t._v(t._s(e.Tweet.repliesCount))]),s("img",{staticClass:"icon__like",attrs:{src:a("cfc8"),alt:""},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteLike(e.TweetId)}}}),s("h5",{staticClass:"icon__quantity"},[t._v(t._s(e.Tweet.likesCount))])],1)])],1)])})):s("div",{staticClass:"empty"},[t._v("目前沒有喜歡的內容")]),s("Modal",t._g({attrs:{post:t.replyingPost,show:t.showModal},on:{close:function(e){t.showModal=!1}}},t.$listeners))],2)},c=[],l=(a("4de4"),a("d3b7"),a("c1df")),u=a.n(l),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("form",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[s("button",{attrs:{name:"header"},on:{click:function(e){return t.$emit("close")}}},[s("img",{attrs:{src:a("aac3"),alt:""}})])]),s("div",{staticClass:"reply-container"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"avatar__pic",attrs:{src:t._f("emptyImage")(t.post[0].image),alt:""}}),t._m(0)]),s("div",{staticClass:"tweet-content"},[s("div",{staticClass:"title"},[s("router-link",{staticClass:"title__name",attrs:{to:""}},[t._v(t._s(t.post[0].Tweet.User.name))]),s("router-link",{staticClass:"title__id",attrs:{to:""}},[t._v("@"+t._s(t.post[0].Tweet.User.account))]),s("router-link",{staticClass:"title__formNow",attrs:{to:""}},[t._v("．"+t._s(t._f("fromNow")(t.post[0].Tweet.createdAt)))])],1),s("p",{staticClass:"description"},[t._v(" "+t._s(t.post[0].Tweet.description)+" ")]),s("div",{staticClass:"hashtag"},[s("router-link",{staticClass:"hashtag__reply",attrs:{to:""}},[t._v("回覆")]),s("router-link",{staticClass:"hashtag__userid",attrs:{to:""}},[t._v("@"+t._s(t.post[0].Tweet.User.account))])],1)])]),s("div",{staticClass:"modal-body"},[s("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(t.currentUser.avatar),alt:""}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"tweet",attrs:{name:"tweet",id:"",cols:"30",rows:"10",placeholder:"有什麼新鮮事?"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),s("div",{staticClass:"modal-footer"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.textToMuch,expression:"textToMuch"}],staticClass:"warn"},[t._v("字數不可超過140字")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.noSpace,expression:"noSpace"}],staticClass:"warn__2"},[t._v("內容不可空白")]),s("button",{staticClass:"modal-default-button",attrs:{disabled:t.isLoading},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t._v(" 回覆 ")])])])])]):t._e()},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider"},[a("div",{staticClass:"divider__a"}),a("div",{staticClass:"divider__b"})])}],f=a("1da1"),A=a("5530"),m=(a("96cf"),a("498a"),a("d9e2"),a("c968")),w=a("061b"),v=a("2708"),C=a("2f62");u.a.locale("zh-tw");var h={name:"UserReplyModal",mixins:[v["a"]],props:{show:Boolean,post:{type:Array,required:!0}},computed:Object(A["a"])({},Object(C["b"])(["currentUser","isAuthenticated"])),data:function(){return{text:"",isLoading:!1,textToMuch:!1,noSpace:!1}},filters:{fromNow:function(t){return t?u()(t).fromNow():"-"}},methods:{handleSubmit:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isLoading=!0,!(t.text.trim().length>140)){e.next=5;break}return t.isLoading=!1,t.noSpace=!1,e.abrupt("return",t.textToMuch=!0);case 5:if(0!==t.text.trim().length){e.next=9;break}return t.textToMuch=!1,t.isLoading=!1,e.abrupt("return",t.noSpace=!0);case 9:return e.prev=9,e.next=12,w["a"].createReply({tweetId:t.post[0].TweetId,comment:t.text});case 12:if(a=e.sent,s=a.data,"error"!==s.status){e.next=16;break}throw new Error(s.message);case 16:t.textToMuch=!1,t.noSpace=!1,t.isLoading=!1,t.$emit("after-create-reply-modal",{tweetId:t.post[0].TweetId}),t.text="",t.$emit("close"),m["a"].fire({title:"回覆成功"}),e.next=29;break;case 25:e.prev=25,e.t0=e["catch"](9),console.log("error",e.t0),m["b"].fire({title:"目前無法回覆，請稍後再試"});case 29:case"end":return e.stop()}}),e,null,[[9,25]])})))()}}},g=h,k=(a("de0f"),a("2877")),_=Object(k["a"])(g,d,p,!1,null,"c2f75bf8",null),x=_.exports,I={name:"LikesContent",mixins:[v["a"]],components:{Modal:x},props:{likes:{type:Array}},data:function(){return{showModal:!1,replyingPost:[]}},methods:{clickOnReply:function(t){this.showModal=!0,this.replyingPost=this.likes.filter((function(e){return e.TweetId===t}))},deleteLike:function(t){this.$emit("after-delete-on-like",t)}},filters:{fromNow:function(t){return t?u()(t).fromNow():"-"}}},b=I,y=(a("a945"),Object(k["a"])(b,o,c,!1,null,"79f08932",null)),T=y.exports,B={name:"UserLikes",components:{ProfileCard:i["a"],ProfileTabs:n["a"],LikesContent:T},props:{user:{type:Object,required:!0},likes:{type:Array},followers:{type:Array}},data:function(){return{status:{tweets:!1,replies:!1,likes:!0}}},methods:{afterCreateReplyModal:function(t){this.$emit("after-create-reply-modal",{id:t,status:"likes"})}}},R=B,U=Object(k["a"])(R,s,r,!1,null,null,null);e["default"]=U.exports},"498a":function(t,e,a){"use strict";var s=a("23e7"),r=a("58a8").trim,i=a("c8d2");s({target:"String",proto:!0,forced:i("trim")},{trim:function(){return r(this)}})},5826:function(t,e,a){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var s=a("e330"),r=a("1d80"),i=a("577e"),n=a("5899"),o=s("".replace),c="["+n+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t){return function(e){var a=i(r(e));return 1&t&&(a=o(a,l,"")),2&t&&(a=o(a,u,"")),a}};t.exports={start:d(1),end:d(2),trim:d(3)}},a945:function(t,e,a){"use strict";a("5826")},c8d2:function(t,e,a){var s=a("5e77").PROPER,r=a("d039"),i=a("5899"),n="​᠎";t.exports=function(t){return r((function(){return!!i[t]()||n[t]()!==n||s&&i[t].name!==t}))}},cbbc:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATzSURBVHgB3VnNUhtHEO6eBSHggp8g4gkMlRxySGKc5JBb4JgTUDFUbtYlCoKDlosQ5BC4pCgRl8UTIJ9yoixXOUfH8hNYfoIoVcYSSJp2j7SSZle7+ln9bfmrosTM7K7209fdM/MNwCcChBHgl72jiJS0QgKXwAcMgIIQRvHPZCwPPuGLSNQ0l95/CG0h4o8EtMIP8UXACQIoChA5wtqzxXAle2qaxX7vHYiI+uVrBAn+yi0YMxQpBMwaCIfnqXih1/V9EVEKfCiFEvzwKEwBSGimT+KHXa+BHtj59WQFRO2Kf6OIxyVFgZglkO8IRAF8AEFGgIz7/Iw18A7TgoH40EudrkR2Y8lNiXDqkgMcu3RJKLJ/peI5GCEe7R2tqdBFgk2X4QIYMxsXLkXBk4giQQiZzhE6W5yvmIMkoh+ofKwCmS6EikzmoZMMejxkrUb03HFhQSJuj1qBXngUS0YRVYGxRUWRw2xVD7MOIlZleq7nhCIhusTnuKHyFDlPyZ6nhcr83WrGigzhvMkqr60bpk1C4eL3WJ6ksQH13GwhEiqFE82GTZGdvaMtIHqq97GEy9MkoePnWHJdIFzpfVYly9kVqavRBiIdBoWEwpOT/azkYqP31ax3bimiyh5qCa5CKn28vwwBw1bUXJqdC70FLfk5V+61FHGWOWI1IIDInJpFfjebKqHybFQLLVrXxooXqYMMBBTVcuVUbxPhZp1IYzbV6zS+gABDqcLvmNO6Ig1FeC9huxJlFgIP+UZv1YlwdYronYbPxd9EgcK2RGkQAfxM7yyHb33v1CaGmuwkQmDfombGvCAcBQxD2N5RwCcCK7TIxm6Ld4QQcNRq0vaODUUQ/tc7F+4WIhBw8JYiorfrRKQEW+JUZGUFAg6BtGZrW72OCiAeQOAh7uut1qJx57fkf9Ce3Yu8EFsOavVqbP7ordaV19dal9rAUogNOAgoas7tBsFli4hyRPRBNh4SQaxeSg3+WNP7hMBsi0jDVLAtxJb0rWRQIIke2zw2xIza/NkmRFbBtgdhwyy6G09uQkCg1HC6nWyAH1qfbfz78rqw+tW393jt9WWrk2D9i2++K7x6ef0Gpoi2u6NtN1iNdCpez+2OJcqT44OoI8SAJGR2Y0dTCzPlPXOVunK6O001rHYn1L44NDf3mjr93jy7FhuTNCQUiZtSSClhm6SJ3RPdLPS0TK1afeV8gHVbhu3+y/Mxu45uZmH929lPSKcOTFtftwcpZYy5WVMAPva4pIAg8pLkC1E/dcLWBBrmPc0w/rCXge5Got4PfUAZdzzpJMj7aMENrmZzL3Q7i/EioWBAH+Bqln/1z/XZ519//44rmgq1fibKsAAKc7V7Bn1Cmee3lZm/+d8fHENF/iF/Sh8fnHvdOwMD4CIVz/BHpnmGIQgfDKiSK5oqcE52qqDWUarAHHcvMAMRacKqFurPOseACH8hnzpJVsszn1yhnPabUlX5zS5Fhc7S9emgN3wR0WGVYvXXrHR9E1FzE2HVdPa3z2L2c9AnhibiB41zyepTdbTdOUpnCz5OxCZOxEsFBnu6uDGICjomRsQ6zvvDXQWRXZwvbw8z74ydSLeKBI2yup0+2Rvaoh0rEUkQuSnNvXY/ox9eBR1jVsTudCi0K9JeDkaICTuNqiLdrY7jiHsiye5nXhgUI1WkXL51iffxqaDjIwalMprALipxAAAAAElFTkSuQmCC"},cfc8:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF0SURBVHgBrZRdUsIwEIB30+pzb2A64DveAG6gb46jjJxAPQH0BOAJZNBxfNQTgDfouziNN+g7JWsWbCnQH6f0e2ma7n7ZZjZByCA4vWoBCQeiSLnqTWXGyEsJti0Bdeh+vfq733EruHF9jiiezNDZzNKMokUvXoAXRbKGJrW9CQFFQJ77/TzeE/80u30CGEA2IWHUWSWQPd1eeKvKwcl84iVi/i20jwMoJjSVhSZDFgUR6I47f5mJld0+GkI5Tpl0XSn2+Sn+XttQG9hKibP3rCJOWlw7sdiH+vATsWmzD6gJIvhMxAB6BnWxFKNEzH3HJwwOBBHHrhqrRMwQLh/gQPQCvXiciPkiMXvtQUU4N66Wwd0A1byZVjgwvpxPztITe31MkdXj2wr+C99skbjYncas2EDeSrT0tPRuYOlSdNJbAHkVMxzICSWV+3nS3IrTBI3uCBHu0nPmEDyafh0YaZiXVypeyc3WgKXv1xn6fd33xfwC0RmKFO+jYqcAAAAASUVORK5CYII="},de0f:function(t,e,a){"use strict";a("0d28")}}]);
//# sourceMappingURL=chunk-d346fdba.326c60a7.js.map