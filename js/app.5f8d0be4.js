(function(e){function t(t){for(var r,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-21bf94a0":"64498d2b","chunk-1abace43":"be3b9a02","chunk-37828cc2":"03adf682","chunk-63a6bb2f":"cf4b73b4","chunk-26d1d985":"aab60ebb","chunk-50c5ac72":"6aa643bd","chunk-25cbb9fc":"f8c052bc","chunk-4a2a2531":"03d87372","chunk-7428063c":"51155b55","chunk-3bbeeebc":"83054d3f","chunk-3f0eee98":"02a2b865","chunk-5efe6e7a":"3708f17e","chunk-611f0dca":"699044f7","chunk-61c6196e":"8b209e97","chunk-662ebe74":"99e4ff62","chunk-7fbd0935":"fb694464","chunk-9952e30c":"84445447"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1abace43":1,"chunk-37828cc2":1,"chunk-63a6bb2f":1,"chunk-26d1d985":1,"chunk-50c5ac72":1,"chunk-25cbb9fc":1,"chunk-4a2a2531":1,"chunk-7428063c":1,"chunk-3bbeeebc":1,"chunk-3f0eee98":1,"chunk-5efe6e7a":1,"chunk-611f0dca":1,"chunk-61c6196e":1,"chunk-662ebe74":1,"chunk-7fbd0935":1,"chunk-9952e30c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-21bf94a0":"31d6cfe0","chunk-1abace43":"04b28910","chunk-37828cc2":"86fd14e0","chunk-63a6bb2f":"ee423ffb","chunk-26d1d985":"da3cfaea","chunk-50c5ac72":"52003115","chunk-25cbb9fc":"97aef6bb","chunk-4a2a2531":"742600b9","chunk-7428063c":"a1561528","chunk-3bbeeebc":"f7c3f3d8","chunk-3f0eee98":"2ccfb51a","chunk-5efe6e7a":"ec2c9940","chunk-611f0dca":"73a03420","chunk-61c6196e":"c0ffbbb3","chunk-662ebe74":"ec2c9940","chunk-7fbd0935":"2ba45a13","chunk-9952e30c":"3057ceff"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/project-simple-twitter-vue/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16f4":function(e,t,n){e.exports=n.p+"img/404.cb516925.png"},"479d":function(e,t,n){},"4cce":function(e,t,n){"use strict";var r=n("c968");const a=()=>localStorage.getItem("token");t["a"]={get({userId:e}){return r["c"].get("/users/"+e,{headers:{Authorization:"Bearer "+a()}})},getTweets({userId:e}){return r["c"].get(`/users/${e}/tweets`,{headers:{Authorization:"Bearer "+a()}})},getReplies({userId:e}){return r["c"].get(`/users/${e}/replied_tweets`,{headers:{Authorization:"Bearer "+a()}})},getLikes({userId:e}){return r["c"].get(`/users/${e}/likes`,{headers:{Authorization:"Bearer "+a()}})},getTopUser(){return r["c"].get("/users/top",{headers:{Authorization:"Bearer "+a()}})},getFollowers({userId:e}){return r["c"].get(`/users/${e}/followers`,{headers:{Authorization:"Bearer "+a()}})},getFollowings({userId:e}){return r["c"].get(`/users/${e}/followings`,{headers:{Authorization:"Bearer "+a()}})},update({userId:e,formData:t}){return r["c"].put("/users/"+e,t,{headers:{Authorization:"Bearer "+a()}})},removeFollowship({userId:e}){return r["c"].delete("/followships/"+e,{headers:{Authorization:"Bearer "+a()}})},addFollowship({formData:e}){return r["c"].post("/followships",e,{headers:{Authorization:"Bearer "+a()}})},getCurrentUser(){return r["c"].get("/user",{headers:{Authorization:"Bearer "+a()}})}}},"4f4d":function(e,t,n){},5171:function(e,t,n){"use strict";n("4f4d")},"56d7":function(e,t,n){"use strict";n.r(t);var r,a,o=n("2b0e"),c=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e._v(" gh-pages version! "),t("router-view")],1)},s=[],i=(n("5171"),n("2877")),u={},l=Object(i["a"])(u,c,s,!1,null,null,null),d=l.exports,h=n("8c4f"),p=function(){var e=this;e._self._c;return e._m(0)},f=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"not-found container"},[t("h1",[e._v("404 Page Not Found")]),t("img",{staticClass:"img",attrs:{src:n("16f4"),alt:"404"}})])}],m=(n("a41b"),{}),b=Object(i["a"])(m,p,f,!1,null,"2d078e03",null),g=b.exports,k={},v=Object(i["a"])(k,r,a,!1,null,null,null),w=v.exports,A=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"admin"}},[t("img",{staticClass:"admin-logo",attrs:{src:n("bca0"),alt:""}}),t("h1",[e._v("後台登入")]),t("form",{staticClass:"admin-form",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"account"}},[e._v("帳號")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],staticClass:"form-control",class:{invalid:e.error.account},attrs:{id:"account",name:"account",type:"text",autocomplete:"username",placeholder:"帳號",required:"",autofocus:""},domProps:{value:e.account},on:{input:function(t){t.target.composing||(e.account=t.target.value)}}}),e.error.account?t("div",{staticClass:"invalid-message"},[e._v("帳號不得空白！")]):e._e()]),t("div",{staticClass:"form-label-group"},[t("label",{attrs:{for:"password"}},[e._v("密碼")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",class:{invalid:e.error.password},attrs:{id:"password",name:"password",type:"password",autocomplete:"new-password",placeholder:"密碼",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.error.password?t("div",{staticClass:"invalid-message"},[e._v("密碼不得空白！")]):e._e()]),t("button",{staticClass:"btnLogin",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" 登入 ")]),t("div",{staticClass:"text-link"},[t("router-link",{staticClass:"btnFontLogin",attrs:{to:"/login"}},[e._v("前台登入")])],1)])])},y=[],P=(n("d9e2"),n("14d9"),n("7696")),C=n("c968"),S={name:"admin",data(){return{account:"",password:"",isProcessing:!1,error:{password:!1,account:!1}}},methods:{async handleSubmit(){try{if(this.isProcessing=!0,!this.account)return this.error.account=!0,this.password="",void(this.isProcessing=!1);if(!this.password)return this.error.password=!0,void(this.isProcessing=!1);const e=await P["a"].adminLogin({account:this.account,password:this.password}),{data:t}=e;if("error"===t.status)throw new Error(t.message);C["a"].fire({title:"管理員，歡迎您！"}),localStorage.setItem("token",t.token),this.$router.push("/admin/main")}catch(e){C["b"].fire({title:"請確認您輸入的帳號密碼"}),this.isProcessing=!1,console.log("error",e)}}},watch:{password(){this.password&&(this.error.password=!1)},account(){this.account&&(this.error.account=!1)}}},U=S,x=(n("d674"),Object(i["a"])(U,A,y,!1,null,"7a5a6f01",null)),B=x.exports,I=n("2f62"),O=n("4cce");o["a"].use(I["a"]);var E=new I["a"].Store({state:{currentUser:{account:"",avatar:"",cover:"",createdAt:"",email:"",id:-1,image:"",introduction:"",isAdmin:!1,name:"",role:"",updateAt:""},isAuthenticated:!1},mutations:{setCurrentUser(e,t){e.currentUser={...e.currentUser,...t},e.isAuthenticated=!0}},actions:{async fetchCurrentUser({commit:e}){try{const{data:t}=await O["a"].getCurrentUser(),{account:n,avatar:r,cover:a,createdAt:o,email:c,id:s,image:i,introduction:u,isAdmin:l,name:d,role:h,updateAt:p}=t;e("setCurrentUser",{account:n,avatar:r,cover:a,createdAt:o,email:c,id:s,image:i,introduction:u,isAdmin:l,name:d,role:h,updateAt:p})}catch(t){console.log("error",t),console.error("can not fetch user information")}}},modules:{}});o["a"].use(h["a"]);const j=[{path:"/",name:"root",redirect:"/login"},{path:"/main",name:"main",component:()=>Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-1abace43"),n.e("chunk-63a6bb2f")]).then(n.bind(null,"7f94"))},{path:"/main/tweet",name:"mainTweet",component:w},{path:"/tweet",name:"tweet",component:()=>n.e("chunk-61c6196e").then(n.bind(null,"4287"))},{path:"/reply/modal",name:"reply/modal",component:()=>Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-50c5ac72"),n.e("chunk-7428063c")]).then(n.bind(null,"8f8e"))},{path:"/reply/:id",name:"reply",component:()=>Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-1abace43"),n.e("chunk-37828cc2")]).then(n.bind(null,"7d91"))},{path:"/login",name:"login",component:()=>n.e("chunk-3bbeeebc").then(n.bind(null,"dd7b"))},{path:"/register",name:"register",component:()=>n.e("chunk-611f0dca").then(n.bind(null,"7803"))},{path:"/user/:id",name:"user",component:()=>n.e("chunk-3f0eee98").then(n.bind(null,"1511")),redirect:"/user/:id/tweets",children:[{path:"tweets",name:"user-tweets",component:()=>Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-50c5ac72"),n.e("chunk-7428063c")]).then(n.bind(null,"8f8e"))},{path:"replies",name:"user-replies",component:()=>Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-50c5ac72"),n.e("chunk-25cbb9fc")]).then(n.bind(null,"942f"))},{path:"likes",name:"user-likes",component:()=>Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-50c5ac72"),n.e("chunk-4a2a2531")]).then(n.bind(null,"43a0"))},{path:"followers",name:"user-followers",component:()=>n.e("chunk-662ebe74").then(n.bind(null,"cd53"))},{path:"followings",name:"user-followings",component:()=>n.e("chunk-5efe6e7a").then(n.bind(null,"6f77"))}]},{path:"/profile/setting",name:"setting",component:()=>n.e("chunk-7fbd0935").then(n.bind(null,"79d9"))},{path:"/admin",name:"admin-root",redirect:"/admin/signin"},{path:"/admin/signin",name:"admin-signin",component:B},{path:"/admin/main",name:"admin-main",component:()=>Promise.all([n.e("chunk-21bf94a0"),n.e("chunk-26d1d985")]).then(n.bind(null,"cd21"))},{path:"/admin/users",name:"admin-users",component:()=>n.e("chunk-9952e30c").then(n.bind(null,"9d5c"))},{path:"*",name:"not-found",component:g}],z=new h["a"]({routes:j});z.beforeEach((e,t,n)=>{"login"!==e.name&&"register"!==e.name&&E.dispatch("fetchCurrentUser"),n()});var L=z;n("fb98");o["a"].config.productionTip=!1,new o["a"]({router:L,store:E,render:e=>e(d)}).$mount("#app")},7696:function(e,t,n){"use strict";var r=n("c968");t["a"]={login({account:e,password:t}){return r["c"].post("/signin",{account:e,password:t})},register(e){return r["c"].post("/users",e)},adminLogin({account:e,password:t}){return r["c"].post("/admin/signin",{account:e,password:t})}}},a41b:function(e,t,n){"use strict";n("d12f")},bca0:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgB7ZhbctMwFIZ/pbeB4aE7wKygsIKSFUBX0HRogbemKyBZQdM3rtN2BYQVNN1BsgOzgzxDsfl1rCSObMeS7aeOv5k0qS3L+nUuOhLQ0tLS0tLS8nhQaJC4h31s4yW28AYxXvMT8A37yU3M+XeKDj8x7tVXjNEgjQgRAbs45wD7y4GXE/Jzgz+4VTfyuxa1hcRnFAAMPATYhJyAofpGUTWoJSR+j0t+9bM3MKELzRCJG4Xm2j5d7i1/HfIT5HQ3ortdoCKVhdAS13y6Z/V2g390le8UUvScdsMdseC5dSukkBeoyDYqYCzRS10KOfsntoD4lAGvOPt/MVnEAb910PfZh/7+tGzcQRc18LYILdHjU9epS2M8pYiRDCxp02Pm2qFYRSErBpzx4VpfH3An2Y2WVF9wghp4CeEAA2anOyx8PBI36llttIi73OCP0E1bLf7IfiK2pTXU53qZq+PVehfHWAXqOEdEUCgieVvakpDBxziyReh+xPIe+AlZxUXIJy/sl4u1NqfhQOImBdPuNNNqj7GjcCmJwRFnIfE7SZ2BeSrrCnsSuEFpR0r6KX6PnpBYJiypEhxxt0jHzKQOzBxXMC8vR7F82UQSg4u2G0WvD8+95YHpfJi5t5dKo+UERS5jqoQgdekQzsNzJaKZ61pjwU7WBaUfXeqkUQ6uanAXooOYq3bmup81NOGGALct1Xywk3lu6RGvZyGHN+av4HG9us9HyMS+YNwhgDvDwoUvyq1+53DER8gsc2XLPT1yxq9YogwK7z9IpTy3npnCEZ8Y+ZnztKsPTxkX/Y3d62JS4Zd1eQZH3IU8wW9UQ1cBR3k3pNZKY7tXVLwdsHEWkq5uVyMpLfSmrIxf5cWF7Gcia8Fbd69Q/XDf1/vWWmtIFlMFs8aYoIiuPQF6MVxuyuL1Vd6412LBvYXPWOCJHojZHCX/J6X4AKtVeMr/r/JStSksdaytkoRV2ks7XflucTPmUdr7C9HV6wPN7nHyUXLKEvIkpVv3JKXSIkQxekDzspMPY61jh2Oi3K2yD9UPH04poiPupHP9bBn4Sg7lnpsVP4APFMzJuUIF6h0HnWGUcxpSsTPGVclas4l6WUu/OJZDgxBVSdLtRR0RMhY0gImFHn+m9/QlD0mq1Sl6lLtGedLoIbZGtsTbEh8HZg+zOsRWtJzCPbcDYzxj2dKAgJaWlpaWlpbHyH+U4CVKFk5n+wAAAABJRU5ErkJggg=="},c968:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n("bc3a"),a=n.n(r),o=n("3d20"),c=n.n(o);const s="https://twitter-clone-api.fly.dev/api",i=a.a.create({baseURL:s}),u=c.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,imageUrl:"https://i.imgur.com/Mip3qeP.jpg"});const l=c.a.mixin({toast:!0,position:"top-end",timer:3e3,showConfirmButton:!1,imageUrl:"https://i.imgur.com/Bc63ZDR.png"})},d12f:function(e,t,n){},d674:function(e,t,n){"use strict";n("479d")},fb98:function(e,t,n){}});
//# sourceMappingURL=app.5f8d0be4.js.map