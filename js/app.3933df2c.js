(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);A&&A(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({About:"About",Slider:"Slider"}[e]||e)+"."+{About:"33db2bbd",Slider:"3dd86200","chunk-035ce09c":"d305101c","chunk-0c16db04":"838f9375","chunk-2d0a4f5e":"972a3e7f","chunk-2d21f45d":"f77f52ad","chunk-90bd7fe8":"97e0e993","chunk-b656e4c0":"ad128f28","chunk-2d0f0b9f":"0f89a497","chunk-2d21eb36":"273bbdb6"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={Slider:1,"chunk-0c16db04":1,"chunk-b656e4c0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({About:"About",Slider:"Slider"}[e]||e)+"."+{About:"31d6cfe0",Slider:"c69c41e0","chunk-035ce09c":"31d6cfe0","chunk-0c16db04":"4863da9d","chunk-2d0a4f5e":"31d6cfe0","chunk-2d21f45d":"31d6cfe0","chunk-90bd7fe8":"31d6cfe0","chunk-b656e4c0":"eaa35a66","chunk-2d0f0b9f":"31d6cfe0","chunk-2d21eb36":"31d6cfe0"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var A=document.createElement("link");A.rel="stylesheet",A.type="text/css",A.onload=t,A.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],A.parentNode.removeChild(A),n(c)},A.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(A)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(A);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var A=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var A=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11a2":function(e,t,n){"use strict";n("bc06")},1733:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABUVJREFUeAHtW02IHEUU/mpmd2PWnxA0iYYYQRQCEiUeFiVCPAh6SRQPggh6SCAgCvEnorMmDOxujFEQRZCcBEUkgjHizyFGzSagEQUx5BSIIB5W1IgIrjqbbPm96e3p6Zne3lfVM7s9PwVNd1W99+q9r1+9qq6qNpgvvWaX4Rc8yOp7YbAJFlfzedl85C0vN7gdE+ZUTe7zdj9mcR5DeB9l82OtPONDIZF/1G6l8WdZ9yav+2j8dbwvnvFJSs3iVhYfQIV6jdoJlO1QEplrWTMAo/ZpGvwhBa13FbZI9EXqV8IMTmHCrsnaZhyAPfYBCn+JQk1WwW3nt+yWf+M4PWFtlrYiAMr2ClzE61mELQHvBnqCgLDOt+0IgAp2UsgqX0FLxmdxI+PCJOOCxCnnFAFgcL8zd34Yrqcqk/QEuTulCACLW5w480YsI5V4Qtne4KJaAID0f2C5C2NOadfNgbBBq1/oAS0ZU7WNtpluLUE4jj32Jk07IQAa2k6iWcMR7Ut2h5sXUtoXAEvBrtdCurS6fhU94Qt6wqY0wQNplbE6g584PdqBAZzgXLwSq9NkynaYY/ZWwnaQ5Cs0LC2guZKe8DlBuBtj5tskeS4e8DDGzTEv46Xlspnmx80hgvhMkiJtLFtJED7jPOG2pDZ0ABj8i3GcTBLgXDaIYyqeAgZjdIb+459W0POO0hM2N4rQAWBxCfZhdSOzV/4irlXxzVY/v+tJT9dnPJ4vpyd8gJK9pp5XB4BwTOMVHLTxt1IvSfMcfG+8oCFlV9nYQCdfqBJ4sySZ6r9TLyD46ivbqxgxf6uvSHw2OMfyr3j9l1ifVmhxGY26kybIwoomncE+EwehZF8m41Ma5lSaIkbCoOgGQKrUNlQabGPg/CgmuWR3MD/Oy38toIAXGdCfFbl5B+AcQ+EIR5A/RNlYKtv1DIt+izaD+JMyz4i8fAMQWDzJdcBtVPivGAAtyuiDYIsa9BCzhfHpG47jIx68C7J0ggdERhh8jAIOcXV4kl1jil5xIar0e+osAOI2Wnbgf+JFypzF7xxhqitI+m8BpexFJDMcUoe92jMRXyfEAC8btUx9ALRIdStdz3uAPggaDj4Wb3AYOsL7dC48wvD7wnKRBXiUd6+X6QLAk5yXv5oLw+NKHOUkSWaJpXixLqdFbYZLYbKUlc9k8JavYjoADIpsQEfrq0kWvgH/rXudUdK/Kng8i45t5Z3BLl/5+hgA7GdfkwWKE7zcF0R8NUznu5TVstJ8TzrZ/LUuAMiC1EMUJVfXJF0X6Bpzmw3pA9CMSW+V9D2gt953s7V9D2jGpLdK+h7QW++72dqe9wC3qXCWzdFm8LOXBBuuWzhFj215uwjWA2DwLnfiHsFOk+WggotuOlrZcq/gUxI3HX7QCNB3gWE8kTvjxULZMyziOY2xSTQ6AOSITAm/JgnIRVkRP/vqoQNAjsjsxR2+jbSdr4K7fNvQx4BZvI29djvXhk7S7dyPyflqmMYXHr0D/3HwPDyjB0AOI1+YO+FVsp7NpVnjUVeZO9/gwRqy6AEIOYJ7sKscL+vInC4GdKRpOqVDAPLRp3U6t4KqNpcJAAjO3/gdNmiFOosvYypsMvQAOS71Q1jYA/earREAFod7wPDARBPZGgEwVN37W/i0aKejZPA9xvBJaEYEQDCnfiys6Mq7TOkL/D3QmNo8JgJALB4z7zEW7OZTjaBrgBDjDXe1Gn6cSJ7QyM/TtvoXqd9R1PyhdprGb+f5hu8aVUsGQKiW+vf5Rk1d8qZ6gmWKL/FrGn6YR6uP1Lt9vaj/AVyYLz/jUOnWAAAAAElFTkSuQmCC"},"2d0e":function(e,t,n){"use strict";n("422f")},"2d14":function(e,t,n){"use strict";n("76ca")},3228:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d}));n("2ca0"),n("d3b7");var r=n("bc3a"),o=n.n(r),a=(n("ac1f"),n("841c"),window.location.href,window.location.protocol,window.location.host,window.location.port,window.location.pathname,window.location.search,window.location.hash,o.a.create({baseURL:"http://prod.xxx.com",timeout:1e4,headers:{get:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},post:{"Content-Type":"application/json;charset=utf-8"},common:{Authorization:"token"}},withCredentials:!0,transformRequest:[function(e){return e=JSON.stringify(e),e}],validateStatus:function(){return!0},transformResponse:[function(e){return"string"===typeof e&&e.startsWith("{")&&(e=JSON.parse(e)),e}]})),c=function(e){var t="";switch(e){case 400:t="请求错误(400)";break;case 401:t="未授权，请重新登录(401)";break;case 403:t="拒绝访问(403)";break;case 404:t="请求出错(404)";break;case 408:t="请求超时(408)";break;case 500:t="服务器错误(500)";break;case 501:t="服务未实现(501)";break;case 502:t="网络错误(502)";break;case 503:t="服务不可用(503)";break;case 504:t="网络超时(504)";break;case 505:t="HTTP版本不受支持(505)";break;default:t="连接出错(".concat(e,")!")}return"".concat(t,"，请检查网络或联系管理员！")};function i(e,t){return new Promise((function(n,r){a.get(e,{params:t}).then((function(e){n(e&&e.data)})).catch((function(e){r(e.data)}))}))}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){a({url:e,method:"post",data:t,params:n}).then((function(e){r(e.data)})).catch((function(e){o(e.data)}))}))}a.interceptors.request.use((function(e){return e}),(function(e){return e.data={},e.data.msg="服务器异常，请联系管理员！",Promise.resolve(e)})),a.interceptors.response.use((function(e){var t=e.status,n="";if(t<200||t>=300){n=c(t),"string"===typeof e.data?e.data={msg:n}:e.data.msg=n;var r=new Error(n);return r.data=e.data,Promise.reject(e)}return Promise.resolve(e)}),(function(e){return console.log(e,"===err"),e.data={},e.data.msg="请求超时或服务器异常，请检查网络或联系管理员！",Promise.reject(e)}));var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({url:"users/getUser",params:e})},l=function(e){return u({url:"users/save",data:e})},d=function(e){return u({url:"users/sendEmail",data:e})}},"358e":function(e,t,n){},3823:function(e,t){e.exports="data:image/png;base64,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"},3834:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABJ9JREFUeAHtW9uLTVEcdsZlmGE8GAxhSkQJTTKRa6G8jCkPmDySKRGFF+8yRXlR/gKKwihPchvEaJRoHpHJw8h1eHAZk/F921mrdfbMmf1ba+/ZZ505Z9XX3mut333/9tpnXU5mXJ4yODhYia4WoBloAOoAtqVV1mYymU6lDPa04f4zcBXtb1T7qFyhrAnoAQpZ1pjOwZBbWWMGcD0FTDL7Xe8rwowQfBxtN4AF4T5P6uNhx0mgE7bOjmtTTgAgcBcEngEycQWnwM/X8j5snhtHlw4ABNVA0Pk4wgrAuxQ6GYR5rrp1ACCgFZjpKqiAfIuhuwNBqHexwQzAThcBnvAszAaBV6tiBmClFad/xMwAZsIiG9OCAGTf/yk2jJ7ScixgEDg2iIrKgES+qSKNo0/ErwIHxmUSVSoAEtpiouHvg3sIwoooo10DMAjBtoiyJel+ftHuIgj8vZC32ASgB1K2AZX4LV5hC/BVA3uAb0BaZQYU3UEQVo+oEAS1QFTZOKIQYSeUHIhSlO3PNxcQsueQ9aGWI0+ZK82AX2B4qJhiXm8L+SeG6P6E6jbV6SDmZGpdmEkagMlgnBVmdqzPF/LVhehehuq21WlguI4gzDEZpQEgzzkwh5+KKSvyHvycb5yOJPxPsDxExxkqB944hQPjRVNAMOuDYbVo/Gh25Ll/jfbHwO88/SM1T0XnZiD8ZPPxdGOgzQkC7DwL4mP5GCzaGyG7S9MzAICPpUkbmb2BkfuB9zGN5epSUGwzQPGldWXG8Wl9CStEALhg47po0weZ3ZTpewBoYwewAwZ/ZyXpYjMIJq1bKm8TCJ/iiTdKGWzoiiEDTH9uonIZYFb0IisGzE6X+2ILgOkjP4k/zQaL+08IXj3pJ1gw+UbKh1flaJTmK4YxwNFHGVs5ALI4jV2qks8Am0HwL/LgAtAO/PAkJzi/4M/lg4D7w8SPDMlc4IgnTg8xA/Zzs9Sm5E78wBkVgH7QcE3AywLblth4D1odAGnacEdWSluIIDmfW5A6RbrDhfBMqPOokG4Imc0g2IbU4QLFA8BlQWSI8gQaqiGDg+B2V1nFPBdw9Zl8nAsEO+HSVyCOMq95ywHw+vGkYFw5A1IIstcqyhng9eNJwbhyBqQQZK9VlHwG2MwF+CTjbI6ORiZwQYQbJzlb3taKMMmJWg/gdPsSEGt73NowAQNsqgEeATZFrwcEKsApCUDsk9kCf5xIYP8GG+9BqwMgHQN4ROaDk3XpML1zVSMNAJfD1rsqSYFvaywdwlfgLei2AN6cKoUtVcBu4CtgU/Qr4Logwo1JH0pgv4MhekHE9jOodLkqVvzeXKVjgDcGJ22ICkB/0oI9l6cPXQYByJ6/cT1s4Lmvw5rXq1pVBrD+QjWWwFX7agbgWgk4rlzUvurRHB9RHmN9BQTr5YpyDF6fw6dVeO2DT7nOgOw4cGgMOmy6xJ/0rcp5dugAsIKOK7icAHz5oUOzkip0fi987DIF6lfAbMTrwP02/ovU9SiqKc6Hex613wfnn4WNGTYAJEIQuOXcAjQDDQBPeTtvQ4M3zcITLPzUPQE44LWbaY+6Lv8A8tK+cImjP/gAAAAASUVORK5CYII="},"422f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=n("2909"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("2f62")),u=n("8c4f"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home-wrapper"},[r("div",{staticClass:"test",staticStyle:{width:"40px",height:"40px",background:"yellow"}}),r("div",{staticClass:"test",class:{active:1===e.test},on:{click:function(t){return e.change(1)}}}),r("div",{staticClass:"test",class:{active:2===e.test},on:{click:function(t){return e.change(2)}}}),r("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img",error:n("afbe"),loading:n("afbe")},expression:"{ selector: 'img', error: require('@/assets/img/user-avatar.png'), loading: require('@/assets/img/user-avatar.png')}"}],staticClass:"outer"},[e._l(e.list,(function(e){return r("img",{key:e,attrs:{"data-src":e}})})),r("img",{attrs:{"data-src":n("fddc")}}),r("img",{attrs:{"data-src":n("fddc")}}),r("img",{attrs:{"data-src":n("fddc")}}),r("img",{attrs:{"data-src":n("fddc")}})],2),r("el-button",{staticStyle:{height:"34px","line-height":"34px",padding:"0 12px"},on:{click:e.post}},[e._v("测试")]),r("el-button",{staticStyle:{height:"34px","line-height":"34px",padding:"0 12px"},on:{click:e.tet}},[e._v("tet")]),r("my-button",{attrs:{data:e.aTest,disable:!0},on:{click:e.buttonClick}},[e._v("测试")])],1)},l=[],d=n("3228"),A=n("1157"),f=n.n(A),p={name:"Home",components:{},data:function(){return{test:1,list:[n("5f35"),n("fddc"),n("3823"),n("3834"),n("1733")],aTest:[{name:"tt"},{name:"jack",childrens:[{name:"aa"}]},{name:"lucy",childrens:[{name:"bb",childrens:[{name:"cc"}]}]}],aInfoList:[{key:"姓      名",value:"fff"},{key:"性      别",value:""},{key:"民      族",value:""},{key:"出      生",value:""},{key:"住      址",value:""},{key:"身份证号",value:""},{key:"签发机关",value:""},{key:"有效期限",value:""}]}},mounted:function(){},methods:{change:function(e){this.test=e},buttonClick:function(){console.log(111)},tet:function(){return new Promise((function(e,t){t(new Error("error"))}))},post:function(){f()(".test").animate({height:"70px"}),Object(d["c"])(this.aInfoList).then((function(e){console.log(e,"回调内容")})),console.log(window.parent,"parren")}}},m=p,g=(n("2d14"),n("2877")),h=Object(g["a"])(m,s,l,!1,null,"07c2589a",null),b=h.exports;r["default"].use(u["a"]);var w=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return n.e("About").then(n.bind(null,"f820"))}},{path:"/video",name:"UploadVideo",component:function(){return n.e("chunk-0c16db04").then(n.bind(null,"0b40"))}},{path:"/slider",name:"Slider",component:function(){return n.e("Slider").then(n.bind(null,"18bf"))}},{path:"/directive",name:"Directive",component:function(){return n.e("Slider").then(n.bind(null,"0fb8"))}},{path:"/download",name:"Download",component:function(){return n.e("chunk-035ce09c").then(n.bind(null,"3971"))}},{path:"/directive1",name:"Directive1",component:function(){return n.e("chunk-2d21f45d").then(n.bind(null,"d8b5"))}},{path:"/chen",name:"Chen",component:function(){return n.e("chunk-90bd7fe8").then(n.bind(null,"3f94"))}},{path:"/rrweb",name:"Rrweb",component:function(){return Promise.all([n.e("chunk-b656e4c0"),n.e("chunk-2d0f0b9f")]).then(n.bind(null,"9e30"))}},{path:"/rrweb-err",name:"RrwebRrr",component:function(){return Promise.all([n.e("chunk-b656e4c0"),n.e("chunk-2d21eb36")]).then(n.bind(null,"d74a"))}}],v=new u["a"]({routes:w});v.beforeEach((function(e,t,n){window.sessionStorage.setItem("name",111);var r=e.path;"/home"===r?n({path:"form"}):n()}));var k=v;function y(){return new Promise((function(e,t){e({list:[{path:"/components",name:"Components",component:function(){return n.e("chunk-2d0a4f5e").then(n.bind(null,"0954"))}}],name:"xxx"})}))}function B(){return new Promise((function(e,t){y().then((function(t){e(t.list)}))}))}r["default"].use(i["a"]);var D=new i["a"].Store({state:{routerType:"",meunList:[]},mutations:{SET_ROUTER_TYPE:function(e,t){e.routerType=t},SET_ROUTER_MENULIST:function(e,t){var n=[].concat(t);e.meunList=n,k.options.routes=n,k.addRoutes(Object(c["a"])(n))}},actions:{setMenuList:function(e){var t=e.commit;e.state;return new Promise((function(e,n){B().then((function(n){t("SET_ROUTER_TYPE",""),t("SET_ROUTER_MENULIST",n),e(n)}))}))}},modules:{}}),C={methods:{},created:function(){D.dispatch("setMenuList")}},I=C,O=(n("5c0b"),Object(g["a"])(I,o,a,!1,null,null,null)),S=O.exports,E=n("5c96"),x=n.n(E),T=(n("0fae"),n("358e"),n("caf9")),P=(n("159b"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"my-button",class:{disable:e.bDisable},on:{click:e.handleButton}},[e._l(e.data,(function(t){return n("div",{key:t.name},[t.childrens?n("my-button",{attrs:{data:t.childrens}},[e._v(" "+e._s(t.name)+" ")]):e._e()],1)})),e._t("default")],2)}),Q=[],Y={name:"MyButton",data:function(){return{}},props:{disable:{default:!1,type:Boolean},data:{default:function(){return[]},type:Array}},computed:{bDisable:function(){return this.disable}},methods:{handleButton:function(){console.log("button click"),this.$emit("click")}}},N=Y,U=Object(g["a"])(N,P,Q,!1,null,"15a8272c",null),V=U.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"my-selector"},[n("SelectInput",{attrs:{placeholder:e.placeholder}}),n("ul",{staticClass:"menu",staticStyle:{background:"grey"}},e._l(e.data,(function(t){return n("li",{key:t},[[e._v(" "+e._s(t)+" ")]],2)})),0)],1)},j=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-input"},[n("input",{attrs:{type:"text",placeholder:e.placeholder}})])},G=[],R={data:function(){return{}},props:{placeholder:{default:"",type:String},data:{default:function(){return[]},type:Array},value:{default:"",type:String}}},W=R,z=(n("11a2"),Object(g["a"])(W,M,G,!1,null,"021cf7d3",null)),L=z.exports,K={bind:function(e,t,n){function r(n){if(e.contains(n.target))return!1;console.log("不满足"),t.expression&&t.value(n)}e.__vueClickOutside__=r,document.addEventListener("click",r)},unbind:function(e,t){document.removeEventListener("click",e.__vueClickOutside__),delete e.__vueClickOutside__}},H={bind:function(e){console.log(e);var t=e.querySelector(".select-input"),n=t.querySelector("input");console.log(n);var r=e.querySelector(".menu");n.addEventListener("focus",(function(){r.style.display="block"}),!1),n.addEventListener("blur",(function(){r.style.display="none"}),!1)}},J={name:"MySelector",components:{SelectInput:L},props:{placeholder:{default:"",type:String},data:{default:function(){return[]},type:Array},value:{default:"",type:String}},directives:{clickOutside:K,focus:H},data:function(){return{iType:0}},methods:{handleFocus:function(e){this.iType=1,console.log(e)},handleBlur:function(e){this.iType=0,console.log(e)},handleInput:function(e){console.log(this.value,"value")},change:function(e,t){console.log(t,e)}}},X=J,Z=(n("2d0e"),Object(g["a"])(X,q,j,!1,null,"2e55be98",null)),F=Z.exports,_={},$=[V,F];_.install=function(e,t){if(console.log(t),t.components){var n=t.components;n.forEach((function(t){$.forEach((function(n){n.name===t&&e.component(n.name,n)}))}))}else $.forEach((function(t){e.component(t.name,t)}))};var ee=_;function te(e){var t=e.lineno,n=e.colno,r=e.error.stack,o=e.message,a=e.filename,c=window.btoa(JSON.stringify({lineno:t,colno:n,stack:r,message:o,filename:a}));console.log(t,n,r,o,a,"====="),console.log(window.atob(c),"str");var i="http://localhost:3000/test/error";(new Image).src="".concat(i,"?info=").concat(c)}r["default"].use(ee,{components:["MyButton","MySelector"]}),r["default"].use(T["a"],{}),r["default"].use(x.a),window.onerror=function(e,t,n,r,o){console.log(e,t,n,r,o,"on error"),te({lineno:n,colno:r,error:o,message:e,filename:t})},window.addEventListener("error",(function(e){console.log(e,"window error")})),r["default"].config.productionTip=!1,new r["default"]({router:k,store:D,render:function(e){return e(S)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5f35":function(e,t,n){e.exports=n.p+"img/test.e3b4117a.jpg"},"76ca":function(e,t,n){},"9c0c":function(e,t,n){},afbe:function(e,t){e.exports="data:image/png;base64,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"},bc06:function(e,t,n){},fddc:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.3933df2c.js.map