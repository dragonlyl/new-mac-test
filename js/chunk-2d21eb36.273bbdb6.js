(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eb36"],{d74a:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rr-web-test"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.test,expression:"test"}],staticStyle:{background:"yellow"},domProps:{value:t.test},on:{input:function(e){e.target.composing||(t.test=e.target.value)}}}),n("button",{on:{click:t.save}},[t._v("点击提交"+t._s(t.events.length))]),n("br"),n("button",{on:{click:t.stop}},[t._v("停止录制")]),n("button",{staticStyle:{position:"absolute",top:"100px"},on:{click:t.show}},[t._v("演示")]),n("div",{staticStyle:{width:"400px",height:"400px"},attrs:{id:"replaycontent"}})])},o=[],a=(n("99af"),n("b1f2")),i=(n("2a00"),n("c1c8")),c={data:function(){return{events:[[]],test:"",target:null}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.target=Object(a["a"])({emit:function(e,n){n&&t.events.push([]);var s=t.events[t.events.length-1];s.push(e)},checkoutEveryNms:1e4})},stop:function(){this.target()},show:function(){var t=window.localStorage.getItem("name1"),e=JSON.parse(t).events;new i["a"]({target:document.getElementById("replaycontent"),data:{events:e}})},save:function(){var t=this.events.length,e=this.events[t-2].concat(this.events[t-1]);console.log(e,"event");var n=JSON.stringify({events:e});window.localStorage.setItem("name1",n)}}},r=c,l=n("2877"),u=Object(l["a"])(r,s,o,!1,null,"5c42c6b8",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21eb36.273bbdb6.js.map