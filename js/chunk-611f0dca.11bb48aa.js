(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-611f0dca"],{"2a84":function(t,e,s){"use strict";s("ecf9")},7803:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),t._m(1),e("registerForm",{attrs:{isRegister:t.isRegister}})],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:s("a136"),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h1",[t._v("建立你的帳號")])])}],i=function(){var t=this,e=t._self._c;return e("form",{attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit()}}},[e("div",{staticClass:"row"},[e("label",{attrs:{for:"account"}},[t._v("帳號")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.account,expression:"form.account"}],attrs:{id:"account",name:"account",type:"text",required:"",maxlength:"50"},domProps:{value:t.form.account},on:{input:function(e){e.target.composing||t.$set(t.form,"account",e.target.value)}}})]),e("div",{staticClass:"row"},[e("label",{attrs:{for:"name"}},[t._v("名稱")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],class:{invalid:t.error.length},attrs:{id:"name",name:"name",type:"text",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t.error.name?e("div",{staticClass:"note"},[t._v("名稱不得空白")]):t._e(),t.error.length?e("div",{staticClass:"note"},[t._v("名稱長度不得大於 50 字元")]):t._e()]),e("div",{staticClass:"row"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{id:"email",name:"email",type:"email",maxlength:"50",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),e("div",{staticClass:"row"},[e("label",{attrs:{for:"password"}},[t._v("密碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],attrs:{id:"password",name:"password",type:"password",required:"",maxLength:"12"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),e("div",{staticClass:"row"},[e("label",{attrs:{for:"passwordCheck"}},[t._v("密碼確認")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.checkPassword,expression:"form.checkPassword"}],attrs:{id:"passwordCheck",name:"passwordCheck",type:"password",required:""},domProps:{value:t.form.checkPassword},on:{input:function(e){e.target.composing||t.$set(t.form,"checkPassword",e.target.value)}}})]),t.isRegister?[e("div",{staticClass:"row mt-4"},[e("button",{staticClass:"btn submit",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"註冊中..":"註冊")+" ")])]),e("div",{staticClass:"row"},[e("router-link",{attrs:{to:"/login"}},[e("button",{staticClass:"btn cancel"},[t._v("取消")])])],1)]:[e("div",{staticClass:"row"},[t.isSaved?e("button",{staticClass:"btn update",attrs:{disabled:""}},[t._v("已儲存")]):e("button",{staticClass:"btn update",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"儲存中..":"儲存")+" ")])])]],2)},o=[],n=(s("14d9"),s("c968")),c=s("7696"),m={name:"registerForm",props:{isRegister:{type:Boolean,default:!0}},data(){return{form:{name:"",account:"",email:"",password:"",checkPassword:""},isProcessing:!1,error:{length:!1,name:!1}}},methods:{handleSubmit(){this.formDataCheck()?this.handleSignUpSubmit():this.isProcessing=!1},formDataCheck(){this.isProcessing=!0;let t=!1;return this.form.account?this.form.name?this.form.email?-1===this.form.email.trim().indexOf("@")?(n["b"].fire({title:"請填寫正確的 Email！"}),t):this.form.password?this.form.password.length>12||this.form.password.length<4?(n["b"].fire({title:"密碼長度不得小於 4 或超過 12！"}),t):this.form.checkPassword?this.form.password!==this.form.checkPassword?(n["b"].fire({title:"密碼不相符！"}),t):(console.log("Data check passed"),!0):(n["b"].fire({title:"請填寫密碼確認！"}),t):(n["b"].fire({title:"請填寫密碼！"}),t):(n["b"].fire({title:"請填寫 Email！"}),t):(n["b"].fire({title:"請填寫名稱！"}),t):(this.error.name=!0,t)},async handleSignUpSubmit(){try{this.isProcessing=!0;const t={name:this.form.name,account:this.form.account,email:this.form.email,password:this.form.password,checkPassword:this.form.checkPassword},{data:e}=await c["a"].register(t);if("Error: email 已重複註冊！"===e.message)return n["b"].fire({title:"email 已重複註冊！"}),void(this.isProcessing=!1);if("Error: account 已重複註冊！"===e.message)return n["b"].fire({title:"帳號已重複註冊！"}),void(this.isProcessing=!1);if("Error: Passwords do not match!"===e.message)return n["b"].fire({title:"密碼不一致"}),void(this.isProcessing=!1);n["a"].fire({title:"註冊成功！"}),this.$router.push("/login")}catch(t){console.log("error",t),n["b"].fire({title:"暫時無法註冊，請稍後再試"})}}},watch:{"form.name":{handler(){this.form.name&&(this.error.name=!1),this.form.name.trim().length>50?this.error.length=!0:this.error.length=!1}}}},l=m,d=(s("2a84"),s("2877")),u=Object(d["a"])(l,i,o,!1,null,"1b788ae0",null),f=u.exports,g={name:"register",components:{registerForm:f},data(){return{isRegister:!0}}},h=g,p=(s("ceb8"),Object(d["a"])(h,r,a,!1,null,"2cf12671",null));e["default"]=p.exports},a136:function(t,e){t.exports="data:image/png;base64,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"},ceb8:function(t,e,s){"use strict";s("cf1ed")},cf1ed:function(t,e,s){},ecf9:function(t,e,s){}}]);
//# sourceMappingURL=chunk-611f0dca.11bb48aa.js.map