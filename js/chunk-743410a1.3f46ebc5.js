(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-743410a1"],{"14e3":function(t,s,a){"use strict";a("9662")},2708:function(t,s,a){"use strict";a.d(s,"a",(function(){return l}));var l={filters:{emptyImage:function(t){return t||"https://via.placeholder.com/350x220/DFDFDF?text=No+Image"}}}},"6f77":function(t,s,a){"use strict";a.r(s);var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("FollowStatusTabs",{attrs:{status:t.status}}),a("FollowCards",t._g({attrs:{followings:t.followings,status:t.status}},t.$listeners))],1)},o=[],i=a("b865"),e=a("c29f"),n={name:"Following",components:{FollowStatusTabs:i["a"],FollowCards:e["a"]},props:{followings:{type:Array,required:!0}},data:function(){return{status:{followings:!0,followers:!1}}}},r=n,c=a("2877"),u=Object(c["a"])(r,l,o,!1,null,null,null);s["default"]=u.exports},9662:function(t,s,a){},"9ab4":function(t,s,a){"use strict";a("f877")},b865:function(t,s,a){"use strict";var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("ul",{staticClass:"tabs"},[a("router-link",{attrs:{to:{name:"user-followers",params:{id:this.$route.params.id}}}},[a("li",{staticClass:"tabs__followers",class:{active:t.status.followers}},[t._v(" 跟隨者 ")])]),a("router-link",{attrs:{to:{name:"user-followings",params:{id:this.$route.params.id}}}},[a("li",{staticClass:"tabs__following",class:{active:t.status.followings}},[t._v(" 正在跟隨 ")])])],1)])},o=[],i={name:"FollowStatusTabs",props:{status:{type:Object,required:!0}}},e=i,n=(a("9ab4"),a("2877")),r=Object(n["a"])(e,l,o,!1,null,"4ef77afd",null);s["a"]=r.exports},c29f:function(t,s,a){"use strict";var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[t.status.followings?a("div",[t.followings[0]?t._l(t.followings,(function(s){return a("div",{key:s.followingId,staticClass:"container"},[a("router-link",{attrs:{to:{name:"user",params:{id:s.followingId}}}},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"avatar__pic",attrs:{src:t._f("emptyImage")(s.avatar),alt:""}})])]),a("div",{staticClass:"tweet-content"},[a("div",{staticClass:"title"},[a("h4",{staticClass:"title__name"},[t._v(t._s(s.name))]),a("h4",{staticClass:"title__id"},[t._v("@"+t._s(s.account))])]),a("p",{staticClass:"description"},[t._v(" "+t._s(s.introduction)+" ")]),a("div",{staticClass:"follow-btn"},[a("button",{staticClass:"follow-btn__follow",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.removeFollowship(s.followingId)}}},[t._v(" 正在跟隨 ")])])])],1)})):a("div",{staticClass:"empty"},[t._v("目前沒有追蹤者")])],2):t.status.followers?a("div",[t.followers[0]?t._l(t.followers,(function(s){return a("div",{key:s.followerId,staticClass:"container"},[a("router-link",{attrs:{to:{name:"user",params:{id:s.followerId}}}},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"avatar__pic",attrs:{src:s.avatar,alt:""}})])]),a("div",{staticClass:"tweet-content"},[a("div",{staticClass:"title"},[a("h4",{staticClass:"title__name"},[t._v(t._s(s.name))]),a("h4",{staticClass:"title__id"},[t._v("@"+t._s(s.account))])]),a("p",{staticClass:"description"},[t._v(" "+t._s(s.introduction)+" ")]),a("div",{staticClass:"follow-btn"},[s.isFollowed?a("button",{staticClass:"follow-btn__follow",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteFollowship(s.followerId)}}},[t._v(" 正在跟隨 ")]):a("button",{staticClass:"follow-btn__unfollow",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addFollowship(s.followerId)}}},[t._v(" 跟隨 ")])])])],1)})):a("div",{staticClass:"empty"},[t._v("目前沒有跟隨者")])],2):t._e()])},o=[],i=a("2708"),e={name:"FollowCards",props:{followings:{type:Array,default:null},followers:{type:Array,default:null},status:{type:Object,required:!0}},mixins:[i["a"]],methods:{removeFollowship:function(t){this.$emit("after-remove-followship",t)},deleteFollowship:function(t){this.$emit("after-del-followship",t)},addFollowship:function(t){this.$emit("after-add-followship",t)}}},n=e,r=(a("14e3"),a("2877")),c=Object(r["a"])(n,l,o,!1,null,"2a58d5a3",null);s["a"]=c.exports},f877:function(t,s,a){}}]);
//# sourceMappingURL=chunk-743410a1.3f46ebc5.js.map