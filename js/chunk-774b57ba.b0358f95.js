(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-774b57ba"],{"061b":function(t,e,a){"use strict";var s=a("c968");const i=()=>localStorage.getItem("token");e["a"]={createReply({tweetId:t,comment:e}){return s["c"].post(`/tweets/${t}/replies`,{tweetId:t,comment:e},{headers:{Authorization:`Bearer ${i()} `}})}}},"1e84":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM2SURBVHgB7ZlLThtBEIYL20gRDwnEBgkQkxvADewTROyyizlB4ATgG2SbFWaZHTlBnBuYXXbphS17FyPbC8uv/L/jWIk10109D0Mif9LIzXRNd//d1TXVg8iaNYnIS0bsgYODg7c7OztBr9f7JhmxIRlwdHRUzuVyN9PpNJh1srFhJpNJpdlsViVlUhVwfHxcxM8NrmJoZxkISUWAa+Ah1Eaj0WW73TaSkEQCDg8Pg0KhcCf6gf8FXKw6Ho8rSYTEEsANuru7Sx+/khRIIsRLAAeOqPIeRQ58T9LnFq517yNELQB+Th/PauALfDe6U8BySFwVWiGRAmJElkygELjVdavVegitX77xUgYeQmjoXQhgSMzn8zdQXJYXzHLEWgg4OTn5vmo/jwvdqtvtnndAjjewUc/+lcETjnV7eztgeSZgc3PT4Kb5w6ZGlZIQtrnUbirtsIzoVGd5JsAY04FflVBxjT9LjUajhBD2VWIw7+waKfQ+OnnNi2Xcu4wrBpP5yHbwe8G2+/3++aIu6iFEo1v5FY18Bn+Pxq/om2H1QRDsDYfDDxjIO/Gjgkm9DasoSPRgDDoSLbCvY5bKNhuuNH7KmJxT8QjT8I56VF3O8lxdPEAnFx7mFQ9bQXjvRNVFCuDGFj01nwQM7lDjM1p77CH/FZgvd6TyJR7FH+0znag9RWwuRIwoOxF/tM9YXdkqABtTNUvY7KfiCdrWPvNkq7QK8HiZFcUTpOhFpWmiFTCigK/2eRargmcMbepiC6HEtQfUoRSrdceM1mVHGx6QRIkthBKrAJ9QyhmF/RebCCaNtPFJHG0hlDhftXCNH+J5DmbOjlzqM2baYMCdwWBwhvKbGGeNDt4Z+zaDgrgxuM7EAw4US19mGacouoHExOnCrj2gDqUZ8eQycApI41yQgFRWwMgz4QqhxClAPLPSNHGFUOIU4JmVpoorhBKnAM+sNE2sWehvNC5EjKweleuqBDxTKHWGUKISgM208o2MSXvQ2KkEIA2oygr3AUM3QmhNY6sSwI2MRkuyGhHs40J7xlYnKfgW2d7a2vqEN/M+rgC3Xkm6cOAf+QUan9Iz+7/ymjX/Gz8BDJO12uOTf7IAAAAASUVORK5CYII="},2797:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return t.show?e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("form",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[e("button",{attrs:{name:"header"},on:{click:function(e){return t.$emit("close")}}},[e("img",{attrs:{src:a("aac3"),alt:""}})])]),e("div",{staticClass:"reply-container"},[e("div",{staticClass:"avatar"},[e("img",{staticClass:"avatar__pic",attrs:{src:t._f("emptyImage")(t.post.image),alt:""}}),t._m(0)]),e("div",{staticClass:"tweet-content"},[e("div",{staticClass:"title"},[e("router-link",{staticClass:"title__name",attrs:{to:""}},[t._v(t._s(t.post.name))]),e("router-link",{staticClass:"title__id",attrs:{to:""}},[t._v("@"+t._s(t.post.account))]),e("router-link",{staticClass:"title__formNow",attrs:{to:""}},[t._v("．"+t._s(t._f("fromNow")(t.post.createdAt)))])],1),e("p",{staticClass:"description"},[t._v(" "+t._s(t.post.description)+" ")]),e("div",{staticClass:"hashtag"},[e("router-link",{staticClass:"hashtag__reply",attrs:{to:""}},[t._v("回覆")]),e("router-link",{staticClass:"hashtag__userid",attrs:{to:""}},[t._v("@"+t._s(t.post.account))])],1)])]),e("div",{staticClass:"modal-body"},[e("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(t.currentUser.avatar),alt:""}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"tweet",attrs:{name:"tweet",id:"",cols:"30",rows:"10",placeholder:"有什麼新鮮事?"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),e("div",{staticClass:"modal-footer"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.textToMuch,expression:"textToMuch"}],staticClass:"warn"},[t._v("字數不可超過140字")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noSpace,expression:"noSpace"}],staticClass:"warn__2"},[t._v("內容不可空白")]),e("button",{staticClass:"modal-default-button",attrs:{disabled:t.isLoading},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[t._v(" 回覆 ")])])])])]):t._e()},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"divider"},[e("div",{staticClass:"divider__a"}),e("div",{staticClass:"divider__b"})])}],r=(a("d9e2"),a("c968")),A=a("061b"),o=a("c1df"),n=a.n(o),c=a("2708"),l=a("2f62");n.a.locale("zh-tw");var u={mixins:[c["a"]],props:{show:Boolean,post:{type:Object,required:!0}},computed:{...Object(l["b"])(["currentUser","isAuthenticated"])},data(){return{text:"",isLoading:!1,textToMuch:!1,noSpace:!1}},filters:{fromNow(t){return t?n()(t).fromNow():"-"}},methods:{async handleSubmit(){if(this.isLoading=!0,this.text.trim().length>140)return this.isLoading=!1,this.noSpace=!1,this.textToMuch=!0;if(0===this.text.trim().length)return this.textToMuch=!1,this.isLoading=!1,this.noSpace=!0;try{const{data:t}=await A["a"].createReply({tweetId:this.post.tweetId,comment:this.text});if(this.textToMuch=!1,this.noSpace=!1,this.isLoading=!1,this.$emit("after-create-reply-modal",{tweetId:this.post.tweetId,comment:this.text}),this.text="",this.$emit("close"),"error"===t.status)throw this.isLoading=!1,new Error(t.message);r["a"].fire({title:"回覆成功"})}catch(t){r["b"].fire({title:"回覆失敗，請稍後再試"})}}}},d=u,g=(a("76af"),a("2877")),m=Object(g["a"])(d,s,i,!1,null,"523f9202",null);e["a"]=m.exports},"3bd9":function(t,e,a){"use strict";a("b5eb")},4287:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return t.show?e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("form",{staticClass:"modal-container",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"modal-header"},[e("button",{attrs:{name:"header"},on:{click:function(e){return t.$emit("close")}}},[e("img",{attrs:{src:a("aac3"),alt:""}})])]),e("div",{staticClass:"modal-body"},[e("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(t.currentUser.avatar),alt:""}}),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"tweet",attrs:{name:"tweet",id:"",cols:"30",rows:"10",placeholder:"有什麼新鮮事?"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),e("div",{staticClass:"modal-footer"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.textToMuch,expression:"textToMuch"}],staticClass:"warn"},[t._v("字數不可超過140字")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noSpace,expression:"noSpace"}],staticClass:"warn__2"},[t._v("內容不可空白")]),e("button",{staticClass:"modal-default-button",attrs:{disabled:t.isLoading}},[t._v(" 推文 ")])])])])]):t._e()},i=[],r=(a("d9e2"),a("6783")),A=a("c968"),o=a("2f62"),n=a("2708"),c={mixins:[n["a"]],props:{show:Boolean},data(){return{text:"",isLoading:!1,textToMuch:!1,noSpace:!1}},computed:{...Object(o["b"])(["currentUser","isAuthenticated"])},methods:{async handleSubmit(){if(this.isLoading=!0,this.text.trim().length>140)return this.isLoading=!1,this.noSpace=!1,this.textToMuch=!0;if(0===this.text.trim().length)return this.textToMuch=!1,this.isLoading=!1,this.noSpace=!0;try{const{data:t}=await r["a"].createTweet({image:this.currentUser.avatar,description:this.text});if(A["a"].fire({title:"推文發送成功"}),this.$emit("after-create-tweet-modal",{userAvatar:this.currentUser.avatar,UserId:this.currentUser.id,name:this.currentUser.name,image:this.currentUser.avatar,account:this.currentUser.account,description:this.text,RepliesCount:0,LikesCount:0,createdAt:new Date}),this.textToMuch=!1,this.noSpace=!1,this.text="",this.$emit("close"),this.isLoading=!1,"error"===t.status)throw this.isLoading=!1,new Error(t.message)}catch(t){Object(A["b"])({title:"目前無法推文"})}}}},l=c,u=(a("4b81"),a("2877")),d=Object(u["a"])(l,s,i,!1,null,"5b46823d",null);e["default"]=d.exports},4293:function(t,e,a){},"44e1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJASURBVHgB7ZmLbdswEIa/dgJvUHYCOxOUG9QbVN0gGyQbtBvEnSDNBFYnaDOBlQncTtDwIhk4yY4kPvQAog/4ARogrTvyRB5PsLAQxTvSs3LaOq2rtvDX6dEpdyqYKWLsN6ej0/8W3TkZZoZxOtBuuNaBRE6kCCHjtKduUO70QBk6gqzOZyer+hROV6rPZEhInGZWwmfb0jejHmL3TIyhHhrbHmNsY4xlQvTs33mM26lx35kQ/eJaj3GWethNwibSCP0ufCCQ94RjVPsP/uSqfUUgqRx4xJ9/qr0ikBgH9END9vJCtQ2BxDgwC2Ic0LMeEgKxK/hCjAOFaq/xZ/3Kf42GzKA+UY3HWBMxNil7/DNMQ/0A9DnBz4jNRuUwEyd0POdOvyjjWsf2uupvG//xkYkvORn97wFax2rsLDDUw6lL0ndDAlLfiQ2lYaJmfvNEGSo/mcElZiEVQ5RVTiG0ol5WKSqFZK6DIkZmlC9mV0nltPvcM4MdSAy/oZ/RbeWVGyIIDSHL6wWqgjJMZNfRZRXZlTYtY75Sv+QMhszYpbC4pX8qcc3lQljUavShafyxMiaUjHNHBnOiafyeNFmk4fwUT+7EtvGAHenZMWDBSy/znuFopufBl31Nhn/OH4oYrLflWxKgZz9jeK5JWLWz1Gd/LPQq2LaOXZd6XW3OGY8fXLbhjC4HdOXggfHIVdu0dexy4Em1PzEO8iJ/Ub8LIrCEJ2qp1OejSSs7YCrjk338yJx+w2iGH4jLsRYW3gzPczpIIlWW9TAAAAAASUVORK5CYII="},"4b81":function(t,e,a){"use strict";a("4293")},"58f6":function(t,e,a){"use strict";a("5bb8")},"5bb8":function(t,e,a){},"657c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMMSURBVHgB7VnRcdswDH3N9T/pBGY3cCcoO0E8gjaoN7A2sDuBtIGSCZxOkG5gd4KkE6TiRTpBEAFSFu04F7873FkmHwgRIABJwAUXTMInHAdZLbe13DTXz7Xc11LizOEMfqzlRZBHdDd1liggG99KgTOF21lq6KYW20jOxt7MC7aWZWOQ9Yy1Bm49XBpaC0Hv0qM3CW4ao3g47GoxzRwaPr4wKcn4uvnPCHoLJPRS6GA6eWLXC48eG+Ac7cBXGO5OqSy8UXSFeHx8i4mwTGFOxgz67nc7uozQmeE19KiRloznbE2LCcgRl/4OcfUNZF4J/6YN8Bnx+KeMPWM8NM4LEsEioTsjYVKvSeN88qEaud4uNDmmmTNM0ReEQ8ZxXCqdNdd/a7mrZR/guTPxRK6/RnCiQHO2dmAN/IWplQpd4ZP4NKtNgjPU7eIacS6dI1ycWsPmih6qo8DrGRiV5dzkSlg8FzgGQ+OdJ9r+pvLchBF0LSF3sVE3IrUNpcKhBjov+XbYYFjAJGwgtxcqMg+hdaMEwzhGmTtnc2fKXBe+JYZnKlM4vZ3MEQfq8ruI+dSgmNbDYSOtccUm0hh7QBzMSM69wNVAjb6mA1d45+A3QAvULeKwH8n5LnBjOVpPNjjELl7dIV4oHMM48xFzjTLXNmvzrJghACmNrhUOPZg7wbA5+mm0UvQVODCNOriDXAoKpKxhMCxkFbpCxlOhVsgyTCxk9EYsuxmtP0nVSlAvufS5QIJnY2rYTJlnILch7ZkyCp++W4pq5o7dTpvmeo83bKdj+5dU2KZczyI+7aWCZWtabXKoElvyu0Sip6MAHmr5Bb8NA6RoJbTXIyGehGskgkXfnSs2xgtYFqHzJ/pZjWemFUaEUAx4ESrQf8wcU7E1XoFhBa6QAIe83LUePYsAx9c2JH1DXUIvTPSho/DooLvb7qzj7gS9UcaP/chn0bUBf9B/gFkQw9zYN8bdovPMD8bV9J4M/BPTCt0nJh77yUIjNbQ+SAuvs8HJP7Oe6kP3vpbfeAcfui/4cPgP3DPsRt9uv/kAAAAASUVORK5CYII="},6783:function(t,e,a){"use strict";var s=a("c968");const i=()=>localStorage.getItem("token");e["a"]={getTweets(){return s["c"].get("/tweets",{headers:{Authorization:"Bearer "+i()}})},getTweet({tweetId:t}){return s["c"].get("/tweets/"+t,{headers:{Authorization:`Bearer ${i()} `}})},createTweet({image:t,description:e}){return s["c"].post("/tweets",{image:t,description:e},{headers:{Authorization:`Bearer ${i()} `}})},addLike({tweetId:t}){return s["c"].post(`tweets/${t}/like`,null,{headers:{Authorization:"Bearer "+i()}})},deleteLike({tweetId:t}){return s["c"].post(`tweets/${t}/unlike`,null,{headers:{Authorization:"Bearer "+i()}})}}},"6d23":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACbSURBVHgBvZThDcAQEIVfOoERbvN2A93AKEYwgmp6ElEOUX3J++X5DjkHPKJgE+yCfcOa81VRJyi1k6CaQ0ewgizinOcbFRWrEvqkklOKwNqJLLt3T3WRGOTxBpaKiEDKYIQB5UCagZWAFmMtlNpuWKDlV56G/tI2OXSoseNgaP3jtIgINLy4o/1WinN3/pQqfjq+IlR3gowEuwDXfn/CSY55ogAAAABJRU5ErkJggg=="},"76af":function(t,e,a){"use strict";a("ba58")},aac3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACvSURBVHgBpZPLEcMgDER3qYRW0omP6SJt+JhO3EoqCTGCJHwkYMa6wIx4D4RGDHd4vLHB4ckdLyxEyTjZAI9zPSSxBh+Z2Vy0gHKzn0kK2AsTX/1LhDMRBI6JW1tOBzOdYXXAkFhwzLG7pZFIwoA7gSpJocKqQJHAgmM4WBGMfRN6CWXNSeBhdIdDmPkTBy3mCK7aaEg4g6sLFAlX4JHkO0xTWJ6753/5z87Gq+P8AWvcmeyQzGyUAAAAAElFTkSuQmCC"},b5eb:function(t,e,a){},ba58:function(t,e,a){},bf15:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAnCAYAAAB5XdqFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK0SURBVHgB1ZnfcdpAEMa/PfA7HRhNSCaPuAJDBcENYFKBTQVABcYVRNgFJB1YqSA8ZgZmkCsI74A2u8KA+COQZAHybwaEGN3x3d7u3d4CfBAoykOjYqOAPMrATF5UmLdkF7mcY/21XcRg9LVRxAwVsFdcfWsca2g7SCpUBZq8d8fAvdwWQrpwmLyeNXi29/ZValQI3AK4EvLImIh+eTnq7Bp8qNDXL/Vb9tANF7jREZHtTahpufZ4TaAO9oIfmLkRpR9R5DK4sznwnUJfS/WWWLGNuOiP5Ex1YRGdZpp5L2AUERMR1r4cPnUC9xsiP9fvmH1LJkPFTsyV//HC+5NE5AKxbNMaPnfn3QbwLTCVziNOdzjkkAqOOt3hjDlvrnSG8sFvzYx1yt8pUuGKzEoaFGjKP+RaXVr0zZojZBCGqZrl3cS7R1Zhr7YUKj51jYwiS9+1CdyXkVm47Av1t7WMY/BBWEa9W6qns6AciZVFZYFGdhmvhDK5yCzUXwqVffU3MopqCwSTcZBZjLOWlEhA/UMqe32KELnFQc9aW54k7B+RMcSSjl7X19GpSZ6HHgk9muh1Tej8GEEOMoIebxanha2difP0HRlhYU1lS6iOQJLes/tq0JrK7r1+ZtryPsa5kEgPWlPZKVR9VbLqDs4EY/tsv7cA4ZZuf0qzGk6ITvnloLcVJ3vTPJ5KYNEJc4AdU75gr9C5C9ANTuKvNOYcVcNqWQcTZ2tg95lME0dG6lfNfQW3SBm+iLVlez1acGnfh4pskcqOC0alelsatJAivsjhU/vQc7GEKmmKjSpSiS1USUNssAAWhURCldGnRo0MP4C5iFiQv5IcqjBvtcI7mNc/+SW6WOpL0nMTt5zut0QKHHYFtSI/RvXHnT0gJeZ/InhtYvomHlhYCmTu4cJ0k1gxyH985RjMSwHeSgAAAABJRU5ErkJggg=="},cbbc:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATzSURBVHgB3VnNUhtHEO6eBSHggp8g4gkMlRxySGKc5JBb4JgTUDFUbtYlCoKDlosQ5BC4pCgRl8UTIJ9yoixXOUfH8hNYfoIoVcYSSJp2j7SSZle7+ln9bfmrosTM7K7209fdM/MNwCcChBHgl72jiJS0QgKXwAcMgIIQRvHPZCwPPuGLSNQ0l95/CG0h4o8EtMIP8UXACQIoChA5wtqzxXAle2qaxX7vHYiI+uVrBAn+yi0YMxQpBMwaCIfnqXih1/V9EVEKfCiFEvzwKEwBSGimT+KHXa+BHtj59WQFRO2Kf6OIxyVFgZglkO8IRAF8AEFGgIz7/Iw18A7TgoH40EudrkR2Y8lNiXDqkgMcu3RJKLJ/peI5GCEe7R2tqdBFgk2X4QIYMxsXLkXBk4giQQiZzhE6W5yvmIMkoh+ofKwCmS6EikzmoZMMejxkrUb03HFhQSJuj1qBXngUS0YRVYGxRUWRw2xVD7MOIlZleq7nhCIhusTnuKHyFDlPyZ6nhcr83WrGigzhvMkqr60bpk1C4eL3WJ6ksQH13GwhEiqFE82GTZGdvaMtIHqq97GEy9MkoePnWHJdIFzpfVYly9kVqavRBiIdBoWEwpOT/azkYqP31ax3bimiyh5qCa5CKn28vwwBw1bUXJqdC70FLfk5V+61FHGWOWI1IIDInJpFfjebKqHybFQLLVrXxooXqYMMBBTVcuVUbxPhZp1IYzbV6zS+gABDqcLvmNO6Ig1FeC9huxJlFgIP+UZv1YlwdYronYbPxd9EgcK2RGkQAfxM7yyHb33v1CaGmuwkQmDfombGvCAcBQxD2N5RwCcCK7TIxm6Ld4QQcNRq0vaODUUQ/tc7F+4WIhBw8JYiorfrRKQEW+JUZGUFAg6BtGZrW72OCiAeQOAh7uut1qJx57fkf9Ce3Yu8EFsOavVqbP7ordaV19dal9rAUogNOAgoas7tBsFli4hyRPRBNh4SQaxeSg3+WNP7hMBsi0jDVLAtxJb0rWRQIIke2zw2xIza/NkmRFbBtgdhwyy6G09uQkCg1HC6nWyAH1qfbfz78rqw+tW393jt9WWrk2D9i2++K7x6ef0Gpoi2u6NtN1iNdCpez+2OJcqT44OoI8SAJGR2Y0dTCzPlPXOVunK6O001rHYn1L44NDf3mjr93jy7FhuTNCQUiZtSSClhm6SJ3RPdLPS0TK1afeV8gHVbhu3+y/Mxu45uZmH929lPSKcOTFtftwcpZYy5WVMAPva4pIAg8pLkC1E/dcLWBBrmPc0w/rCXge5Got4PfUAZdzzpJMj7aMENrmZzL3Q7i/EioWBAH+Bqln/1z/XZ519//44rmgq1fibKsAAKc7V7Bn1Cmee3lZm/+d8fHENF/iF/Sh8fnHvdOwMD4CIVz/BHpnmGIQgfDKiSK5oqcE52qqDWUarAHHcvMAMRacKqFurPOseACH8hnzpJVsszn1yhnPabUlX5zS5Fhc7S9emgN3wR0WGVYvXXrHR9E1FzE2HVdPa3z2L2c9AnhibiB41zyepTdbTdOUpnCz5OxCZOxEsFBnu6uDGICjomRsQ6zvvDXQWRXZwvbw8z74ydSLeKBI2yup0+2Rvaoh0rEUkQuSnNvXY/ox9eBR1jVsTudCi0K9JeDkaICTuNqiLdrY7jiHsiye5nXhgUI1WkXL51iffxqaDjIwalMprALipxAAAAAElFTkSuQmCC"},d178:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("nav",[e("div",{attrs:{id:"logo"}},[e("router-link",{attrs:{to:"/main"}},[e("img",{attrs:{src:a("bca0"),alt:"logo"}})])],1),e("div",{staticClass:"menu"},[e("ul",[e("li",{class:{active:t.currentStatus.isIndex}},[e("router-link",{staticClass:"menu__item",attrs:{to:"/main"}},[e("img",{staticClass:"index",attrs:{src:a("1e84"),alt:"index"}}),e("span",{staticClass:"menu__item__title"},[t._v("首頁")])])],1),e("li",{class:{active:t.currentStatus.isUser}},[e("router-link",{staticClass:"menu__item",attrs:{to:{name:"user",params:{id:t.currentUser.id}}}},[e("img",{staticClass:"user",attrs:{src:a("44e1"),alt:"index"}}),e("span",{staticClass:"menu__item__title"},[t._v("個人資料")])])],1),e("li",{class:{active:t.currentStatus.isSetting}},[e("router-link",{staticClass:"menu__item",attrs:{to:"/profile/setting"}},[e("img",{staticClass:"setting",attrs:{src:a("657c"),alt:"index"}}),e("span",{staticClass:"menu__item__title"},[t._v("設定")])])],1)])]),e("button",{staticClass:"twit-button",on:{click:function(e){t.showModal=!0}}},[t._v("推文")]),e("Modal",{attrs:{show:t.showModal},on:{close:function(e){t.showModal=!1},"after-create-tweet-modal":t.afterCreateTweetModal}}),e("div",{attrs:{id:"log-out"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.logOut.apply(null,arguments)}}},[t._m(0),e("p",[t._v("登出")])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"icon",attrs:{src:a("6d23"),alt:"logoOut"}})])}],r=(a("14d9"),a("4287")),A=a("2f62"),o={name:"Navbar",components:{Modal:r["default"]},computed:{...Object(A["b"])(["currentUser","isAuthenticated"])},props:{currentStatus:{type:Object,required:!0}},data(){return{showModal:!1}},methods:{afterCreateTweetModal(t){this.$emit("after-create-tweet-modal",t)},logOut(){localStorage.removeItem("token"),this.$router.push("/login")}}},n=o,c=(a("58f6"),a("2877")),l=Object(c["a"])(n,s,i,!1,null,"3a59062b",null);e["a"]=l.exports},eee5:function(t,e){t.exports="data:image/png;base64,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"},f963:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"popular-users"}},[e("p",{staticClass:"title"},[t._v("Popular")]),e("div",{staticClass:"users-list"},t._l(t.topUsers,(function(a){return e("div",{key:a.id,staticClass:"item"},[e("router-link",{staticClass:"image",attrs:{to:{name:"user",params:{id:a.id}}}},[e("img",{attrs:{src:t._f("emptyImage")(a.avatar),alt:"avatar"}})]),e("div",{staticClass:"info"},[e("p",{staticClass:"name"},[t._v(t._s(a.name))]),e("span",{staticClass:"account"},[t._v("@"+t._s(a.account))])]),a.isFollowing?e("button",{staticClass:"following-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.removeFollowing(a.id)}}},[t._v(" 正在跟隨 ")]):e("button",{staticClass:"follow-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFollowing(a.id)}}},[t._v(" 跟隨 ")])],1)})),0)])},i=[],r=(a("d9e2"),a("4cce")),A=a("c968"),o=a("2708"),n={name:"PopularUsers",mixins:[o["a"]],props:{changeTopUser:{type:Array}},created(){this.fetchTopUsers()},data(){return{topUsers:[]}},methods:{async fetchTopUsers(){try{const{data:t}=await r["a"].getTopUser();this.topUsers=t}catch(t){console.log("error",t),A["b"].fire({title:"無法取得Top使用者資料，請稍後再試"})}},async removeFollowing(t){try{const{data:e}=await r["a"].removeFollowship({userId:t});if("error"===e.status)throw new Error(e.message);this.topUsers=this.topUsers.map(e=>e.id===t?{...e,isFollowing:!1}:e),this.$emit("after-remove-pop",t)}catch(e){console.log("error",e),A["b"].fire({title:"無法取消追蹤，請稍後再試"})}},async addFollowing(t){try{const e={id:t},{data:a}=await r["a"].addFollowship({formData:e});if("error"===a.status)throw new Error(a.message);this.topUsers=this.topUsers.map(e=>e.id===t?{...e,isFollowing:!0}:e),this.$emit("after-add-pop",t)}catch(e){console.log("error",e),A["b"].fire({title:"無法新增追蹤，請稍後再試"})}}},watch:{changeTopUser(){return this.topUsers={...this.topUsers,...this.changeTopUser}}}},c=n,l=(a("3bd9"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,"585829a2",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-774b57ba.b0358f95.js.map