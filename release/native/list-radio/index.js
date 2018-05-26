// { "framework": "Vue"} 

!function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=113)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(6);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(a).default}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={search:"",reload:"","arrow-down":"","arrow-up":"","arrow-right":"","arrow-left":"",down:"",up:"",right:"",left:"","warning-circle":"","warning-circle-o":"","close-circle":"","close-circle-o":"","check-circle":"","check-circle-o":"",check:"","clock-circle":"","clock-circle-o":"",ellipsis:"",loading:""};e.default=i},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(a).default}})},function(t,e,n){var i,a,r=[];r.push(n(4)),i=n(5);var o=n(10);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-49b3ea8f",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},function(t,e){t.exports={"am-nav-bar":{alignItems:"center",height:"90",backgroundColor:"#108ee9",flexDirection:"row"},"am-nav-bar-left":{flex:1,alignItems:"center",flexDirection:"row"},"am-nav-bar-title":{flex:1,alignItems:"center",flexDirection:"row",textAlign:"center",justifyContent:"center",fontSize:"36",whiteSpace:"nowrap",color:"#ffffff"},"am-nav-bar-right":{flex:1,alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},"am-nav-bar-btn":{height:"90",minWidth:"90",paddingLeft:"23",paddingRight:"23",alignItems:"center",justifyContent:"center","backgroundColor:active":"#0e80d2"},"am-nav-bar-btn-icon":{color:"#ffffff"},"am-nav-bar-btn-text":{fontSize:"32",color:"#ffffff"},"am-nav-bar-light":{backgroundColor:"#ffffff",color:"#108ee9"},"am-nav-bar-light-title":{color:"#000000"},"am-nav-bar-light-btn":{"backgroundColor:active":"#dddddd"},"am-nav-bar-light-btn-icon":{color:"#000000"},"am-nav-bar-light-btn-text":{color:"#000000"}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=i(a),o=weex.requireModule("navigator");e.default={name:"am-nav-bar",props:{mode:{type:String,default:"dark"},title:{type:String,default:null},leftBtn:{type:Array,default:function(){return[{is:"icon",type:"left",onClick:function(){o.pop({},function(t){})}}]}},rightBtn:{type:Array,default:function(){return[]}}},components:{AmIcon:r.default},computed:{navBarClass:function(){return["am-nav-bar-"+this.mode]},titleClass:function(){return["am-nav-bar-"+this.mode+"-title"]},left:function(){return this.makeBtn(this.leftBtn)},right:function(){return this.makeBtn(this.rightBtn)}},methods:{makeBtn:function(t){return t.map(function(t){var e=t;return"string"==typeof t&&(e={is:"icon",type:t}),e})},handleClick:function(t){"function"==typeof t.onClick?t.onClick():this.$emit("click",t.key||t.type||t.text||t.src)}}}},function(t,e,n){var i,a,r=[];r.push(n(7)),i=n(8);var o=n(9);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-cc094c2e",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},function(t,e){t.exports={"am-icon-xxs":{fontSize:"30",lineHeight:"30"},"am-icon-xs":{fontSize:"36",lineHeight:"36"},"am-icon-sm":{fontSize:"42",lineHeight:"42"},"am-icon-md":{fontSize:"44",lineHeight:"44"},"am-icon-lg":{fontSize:"72",lineHeight:"72"}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=i(a),o=weex.requireModule("dom");e.default={name:"am-icon",props:{type:{type:String,default:null},size:{type:[String,Number],default:"md"},color:{type:String,default:null},fontFamily:{type:String,default:"AMUIIconFont"}},data:function(){return{Icon:r.default}},computed:{iconClass:function(){return isNaN(this.size)?["am-icon-"+this.size]:null},iconStyle:function(){var t={color:this.color,fontFamily:this.fontFamily};return isNaN(this.size)||(t.fontSize=this.size+"px",t.lineHeight=this.size+"px"),t}},beforeCreate:function(){o.addRule("fontFace",{fontFamily:"AMUIIconFont",src:"url('https://at.alicdn.com/t/font_666184_6i47o5l7pbiysyvi.ttf')"})}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.type?n("text",{staticClass:["am-icon"],class:t.iconClass,style:t.iconStyle},[t._v(t._s(t.Icon[t.type]||t.type))]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["am-nav-bar","am-nav-bar-"+t.mode]},[n("div",{staticClass:["am-nav-bar-left"]},[t._t("left",t._l(t.left,function(e,i){return n("div",{key:i,class:["am-nav-bar-btn","am-nav-bar-"+t.mode+"-btn"],on:{click:function(n){t.handleClick(e)}}},["icon"===e.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+t.mode+"-btn-icon"],attrs:{type:e.type}}):"text"===e.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+t.mode+"-btn-text"]},[t._v(t._s(e.text))]):t._e()],1)}))],2),t._t("title",[n("text",{class:["am-nav-bar-title","am-nav-bar-"+t.mode+"-title"],on:{click:function(e){t.handleClick({key:"title"})}}},[t._v(t._s(t.title))])]),n("div",{staticClass:["am-nav-bar-right"]},[t._t("right",t._l(t.right,function(e,i){return n("div",{key:i,class:["am-nav-bar-btn","am-nav-bar-"+t.mode+"-btn"],on:{click:function(n){t.handleClick(e)}}},["icon"===e.is?n("am-icon",{class:["am-nav-bar-btn-icon","am-nav-bar-"+t.mode+"-btn-icon"],attrs:{type:e.type}}):"text"===e.is?n("text",{class:["am-nav-bar-btn-text","am-nav-bar-"+t.mode+"-btn-text"]},[t._v(t._s(e.text))]):t._e()],1)}))],2)],2)},staticRenderFns:[]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a={isWeb:function(){var t=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":i(window))&&"web"===t.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var t=weex.config.env.deviceHeight;return a.env.isWeb()?"undefined"!=typeof window&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):a.env.isIOS()&&2436===t},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},makeClassList:function(t){return this.isWeb()||Array.isArray(t)?t:Object.keys(t).filter(function(e){return t[e]})}};e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={computed:{_isFirstChild:function(){return"_isFirstChild"in this.$parent?this.$parent._isFirstChild:this.$parent.$slots.default&&this.$parent.$slots.default[0]===this.$vnode},_isLastChild:function(){return"_isLastChild"in this.$parent?this.$parent._isLastChild:this.$parent.$slots.default&&this.$parent.$slots.default[this.$parent.$slots.default.length-1]===this.$vnode}}};e.default=i},function(t,e,n){var i,a,r=[];r.push(n(25)),i=n(26);var o=n(27);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-329a2e47",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return{title:{type:String,default:null},titleNumber:{type:Number,default:0},titleDisabled:{type:Boolean,default:!1},extra:{type:String,default:null},arrow:{type:String,default:"horizontal"},thumb:{type:String,default:null},thumbStyle:{type:Object,default:function(){return{}}},brief:{type:String,default:null},tapActive:{type:Boolean,default:!0},align:{type:String,default:"middle"}}};e.default=i},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(21);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(a).default}})},function(t,e,n){var i,a,r=[];r.push(n(22)),i=n(23);var o=n(24);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-72c9a3ce",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},function(t,e){t.exports={"am-list-header":{paddingTop:"30",paddingRight:"30",paddingBottom:"18",paddingLeft:"30",fontSize:"28",color:"#888888",boxSizing:"border-box",backgroundColor:"#f5f5f9"},"am-list-footer":{paddingTop:"18",paddingRight:"30",paddingBottom:"30",paddingLeft:"30",fontSize:"28",color:"#888888",backgroundColor:"#f5f5f9"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"am-list",props:{header:{type:String,default:null},footer:{type:String,default:null},headerStyle:{type:Object,default:function(){return{}}},footerStyle:{type:Object,default:function(){return{}}}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["am-list"]},[t._t("header",[t.header?n("text",{staticClass:["am-list-header"],style:t.headerStyle},[t._v(t._s(t.header))]):t._e()]),t._t("default"),t._t("footer",[t.footer?n("text",{staticClass:["am-list-footer"],style:t.footerStyle},[t._v(t._s(t.footer))]):t._e()])],2)},staticRenderFns:[]}},function(t,e){t.exports={"am-list-extra":{color:"#888888",fontSize:"32"},"am-list-item":{position:"relative",paddingLeft:"30",backgroundColor:"#ffffff",flexDirection:"row",alignItems:"center"},"am-list-item-tap":{"backgroundColor:active":"#dddddd"},"am-list-item-first":{borderColor:"#dddddd",borderTopWidth:1},"am-list-item-last":{borderColor:"#dddddd",borderBottomWidth:1},"am-list-line":{flexDirection:"row",alignItems:"center",flex:1,paddingRight:"30",paddingTop:"20",paddingBottom:"18",borderBottomColor:"#dddddd",borderBottomWidth:1,minHeight:"88"},"am-list-line-last":{borderBottomWidth:0},"am-list-line-align-top":{alignItems:"flex-start"},"am-list-line-align-middle":{alignItems:"center"},"am-list-line-align-bottom":{alignItems:"flex-end"},"am-list-thumb":{marginRight:"30",width:"44",height:"44"},"am-list-content":{flex:1,marginRight:"10"},"am-list-content-text":{color:"#000000",fontSize:"34",lineHeight:"51"},"am-list-content-text-disabled":{color:"#bbbbbb"},"am-list-content-text-2":{maxWidth:"68"},"am-list-content-text-3":{maxWidth:"102"},"am-list-content-text-4":{maxWidth:"136"},"am-list-content-text-5":{maxWidth:"170"},"am-list-content-text-6":{maxWidth:"204"},"am-list-content-text-7":{maxWidth:"238"},"am-list-content-brief":{color:"#888888",fontSize:"30",lineHeight:"51"},"am-list-arrow":{width:"30",height:"30",marginLeft:"16"},"am-list-arrow-vertical":{transform:"rotate(90deg)"},"am-list-arrow-vertical-up":{transform:"rotate(270deg)"}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),r=i(a),o=n(19),l=i(o),s=n(12),c=i(s);e.default={name:"am-list-item",mixins:[c.default],props:(0,l.default)(),data:function(){return{arrowUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABnUlEQVRYR82XTW7CMBCFZzRehFW5SYlKkbwq3ABOULgBPQm9QekJ4AbQDUioKHCTsCKLRFMZRJVWceKfRG2WiZ332TOeN0YoeaIoaidJtiCil14vPJSNdf2GuolK/HxOV4jYYYYYkUdSPq5dhXTztADb7eccAJ5/TsSJlA/qfW1P6Q4kSboEwKcmIbQAN9Gmd6ISQIEUQ8Bcyu7ENxZGAE1CGAM0BWEFUAKxDgIahWEY24bEGkAJbDb7KSLP8mLMfGi1xMAWwgnguhP7MQC/+UI4A5RBCCEmpqXbC0APAbEQNDCB8AbwhagFIAfxCgB3t7wwMbHaAJTobhd1sixTjvkNcYXRm1jtAGmarRChbWpgtQGoY8nMs1/iJwAelvURtQAU1QQAOBFRv+okeAP4iF+yw7Z258drxI9ENK5a+e0/zgA68SCgvo0fOAEUmREAHG3FnUJQ3B3xRxCIoc3KnUKgac3epeyOXXPJOARNiBuHoClxI4A/a8vzVzPTuu6SB//9anax1ntV16tMxWX1lTlwvZ6nSyIxNS2ttiBf02PsISPWB9wAAAAASUVORK5CYII="}},computed:{showArrow:function(){return this.arrow&&"empty"!==this.arrow},itemClass:function(){return r.default.makeClassList({"am-list-item-tap":this.tapActive,"am-list-item-first":this._isFirstChild,"am-list-item-last":this._isLastChild})},lineClass:function(){return r.default.makeClassList({"am-list-line-align-top":"top"===this.align,"am-list-line-align-middle":"middle"===this.align,"am-list-line-align-bottom":"bottom"===this.align,"am-list-line-last":this._isLastChild})},arrowClass:function(){return r.default.makeClassList({"am-list-arrow-vertical":"down"===this.arrow,"am-list-arrow-vertical-up":"up"===this.arrow})},contentTextClass:function(){return r.default.makeClassList({"am-list-content-text-disabled":this.titleDisabled})}},methods:{handleClick:function(t){this.$emit("click",t)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["am-list-item"],class:t.itemClass,on:{click:t.handleClick}},[t._t("thumb",[t.thumb?n("image",{staticClass:["am-list-thumb"],style:t.thumbStyle,attrs:{src:t.thumb}}):t._e()]),n("div",{staticClass:["am-list-line"],class:t.lineClass},[t.title?n("div",{class:["am-list-content","am-list-content-text-"+t.titleNumber]},[n("text",{staticClass:["am-list-content-text"],class:t.contentTextClass},[t._v(t._s(t.title))]),t._t("brief",[t.brief?n("text",{staticClass:["am-list-content-brief"]},[t._v(t._s(t.brief))]):t._e()])],2):t._e(),t._t("extra",[t.extra?n("text",{staticClass:["am-list-extra"]},[t._v(t._s(t.extra))]):t._e()]),t.showArrow?n("image",{staticClass:["am-list-arrow"],class:t.arrowClass,attrs:{src:t.arrowUrl}}):t._e()],2)],2)},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(68);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(a).default}})},function(t,e,n){var i,a,r=[];r.push(n(69)),i=n(70);var o=n(71);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-f640b008",a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i},function(t,e){t.exports={"am-radio":{marginRight:"16",transform:"rotate(45deg)"},"am-radio-inner":{width:"16",height:"32",borderStyle:"solid",borderRightWidth:"3",borderBottomWidth:"3",borderColor:"#108ee9",boxSizing:"content-box"},"am-radio-inner-disabled":{borderColor:"#bbbbbb"}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),r=i(a),o=n(12),l=i(o),s=n(13),c=i(s);e.default={name:"am-list-radio",components:{Item:c.default},mixins:[l.default],props:{checked:{type:Boolean,default:!1},title:{type:String,default:null},thumb:{type:String,default:null},thumbStyle:{type:Object,default:function(){return{}}},brief:{type:String,default:null},align:{type:String,default:"middle"},disabled:{type:Boolean,default:!1},color:{type:String,default:null}},data:function(){return{}},computed:{innerClass:function(){return r.default.makeClassList({"am-radio-inner":!0,"am-radio-inner-disabled":this.disabled})},innerStyle:function(){var t={};return this.color&&!this.disabled&&(t.borderColor=this.color),t}},methods:{handleClick:function(t){this.disabled||this.$emit("change",t)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("item",{attrs:{arrow:"",title:t.title,thumb:t.thumb,thumbStyle:t.thumbStyle,titleDisabled:t.disabled,tapActive:!t.disabled,brief:t.brief,align:t.align},on:{click:t.handleClick}},[n("template",{slot:"thumb"},[t._t("thumb")],2),n("template",{slot:"brief"},[t._t("brief")],2),t.checked?n("div",{staticClass:["am-radio"],attrs:{slot:"extra"},slot:"extra"},[n("div",{class:t.innerClass,style:t.innerStyle})]):t._e()],2)},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var i,a,r=[];i=n(114);var o=n(115);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a.style=a.style||{},r.forEach(function(t){for(var e in t)a.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(a._scopeId,r),t.exports=i,t.exports.el="true",new Vue(t.exports)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(67),r=i(a),o=n(20),l=i(o),s=n(2),c=i(s);e.default={components:{AmNavBar:c.default,AmList:l.default,AmListRadio:r.default},data:function(){return{value:0,value2:[1],list:Array.from(new Array(3)).map(function(t,e){return{value:e,name:"Radio "+e}})}},methods:{handleChange:function(t){var e=this.value2.indexOf(t.value);e>-1?this.value2.splice(e,1):this.value2.push(t.value)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("am-nav-bar",{attrs:{title:"am-list-redio"}}),n("scroller",{staticClass:["scroller"]},[n("div",[n("am-list",{attrs:{header:"单选",footer:"value="+t.value}},[t._l(t.list,function(e){return n("am-list-radio",{key:e.value,attrs:{title:e.name,checked:e.value===t.value},on:{change:function(n){t.value=e.value}}})}),n("am-list-radio",{attrs:{title:"自定义颜色(color=red)",color:"red",checked:5===t.value},on:{change:function(e){t.value=5}}}),n("am-list-radio",{attrs:{title:"标题",brief:"说明一下",align:"top",checked:6===t.value},on:{change:function(e){t.value=6}}}),n("am-list-radio",{attrs:{title:"禁用(不能点击)",brief:"value=1",checked:1===t.value,disabled:!0},on:{change:function(e){t.value=1}}})],2),n("am-list",{attrs:{header:"其实也可以把他变成多选",footer:"value="+JSON.stringify(t.value2)}},t._l(t.list,function(e){return n("am-list-radio",{key:e.value,attrs:{title:e.name,checked:t.value2.indexOf(e.value)>-1},on:{change:function(n){t.handleChange(e)}}})}))],1)])],1)},staticRenderFns:[]}}]);