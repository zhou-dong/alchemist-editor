(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{263:function(e,_,t){var a={"./readme.md":264};function o(e){var _=r(e);return t(_)}function r(e){var _=a[e];if(!(_+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return _}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id=263},264:function(e,_,t){"use strict";t.r(_),_.default="### Algorithms and Data Structures\n---\n\n#### Index<T>\n\n- createStack<T>(size?: number, id?: string)\n- createQueue<T>(size?: number, id?: string)\n\n#### Queue<T>\n\n- offer(t: T): void\n- poll(): T\n- peek(): T\n- size(): number\n- isEmpty(): boolean\n\n#### Stack<T>\n\n- push(t: T): void\n- pop(): T\n- peek(): T\n- size(): number\n- isEmpty(): boolean\n"},265:function(e,_,t){"use strict";t.r(_);var a=t(0),o=t.n(a),r=t(81),n=t.n(r),l=(t(94),t(82));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(l.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(26),_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(28),_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(27),_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(29),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(95),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_pages__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(88),demo="// Queue Example\n\nconst capacity = 5;\nconst queue = new Queue(capacity);\n\nfor(let i = 0; i < capacity; i++){\n  queue.offer(i + 1);\n}\n\nfor(let i = 0; i < capacity; i++) {\n  queue.poll();\n}\n\nqueue.start(1000);\n";function onChange(e){demo=e}var execute=function execute(){var parentHTML=document.getElementById("display");parentHTML.innerHTML="",__webpack_require__.e(3).then(__webpack_require__.t.bind(null,266,7)).then(function(alchemist){var Index=function(e){function _(){return Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__.a)(this,Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.a)(_).call(this,parentHTML))}return Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(_,e),_}(alchemist.Index),Stack=function(e){function _(e,t){return Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__.a)(this,Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.a)(_).call(this,parentHTML,e,t))}return Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(_,e),_}(alchemist.Stack),Queue=function(e){function _(e,t){return Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__.a)(this,Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.a)(_).call(this,parentHTML,e,t))}return Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(_,e),_}(alchemist.Queue);try{eval(demo)}catch(error){console.error(error.message)}})},App=function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_pages__WEBPACK_IMPORTED_MODULE_6__.a,{onChange:onChange,fontSize:14,defaultValue:demo,execute:execute}))};__webpack_exports__.a=App},88:function(e,_,t){"use strict";var a=t(0),o=t.n(a),r={backgroundColor:"#073642",textAlign:"center"},n=function(){return o.a.createElement("header",{style:r})},l={backgroundColor:"#073642",textAlign:"center"},s=function(){return o.a.createElement("footer",{style:l},"ALGORITHMS AND DATA STRUCTERS VISUALIZATION ONLINE EDITOR")},c=t(25),u=t(24),i=Object(c.a)({},{flex:1,order:-1,height:"100%",overflow:"hidden"},{backgroundColor:"#002B36"}),d=function(){return o.a.createElement(u.a,{enable:{right:!0}},o.a.createElement("nav",{style:i},"Queue Stack"))},p=t(16),m=t.n(p),h=t(42),E=t.n(h),b=t(85),O=t.n(b),f=t(86),M=t.n(f),D=t(83),P=t.n(D),k=(t(104),t(106),function(e){return o.a.createElement(P.a,{width:"100%",height:"100%",mode:"javascript",theme:"solarized_dark",onChange:e.onChange,defaultValue:e.defaultValue,fontSize:e.fontSize,editorProps:{$blockScrolling:!1},setOptions:{fontFamily:"'Courier New', Menlo, Monaco, monospace",dragEnabled:!0,dragDelay:100}})}),C={layout:{flex:1,height:"100%",overflow:"hidden",backgroundColor:"#002B36"},icon:{width:20,height:20},chip:{color:"#93A1A1",backgroundColor:"transparent",fontFamily:"'Courier New', Menlo, Monaco, monospace"},nav:{borderBottom:"1px solid #586e75",minWidth:"500px"}},w=function(e){return o.a.createElement(u.a,{enable:{left:!0}},o.a.createElement("aside",{style:C.layout},o.a.createElement("nav",{style:C.nav},o.a.createElement(m.a,{avatar:o.a.createElement(E.a,{style:C.icon}),label:"code.js",style:C.chip}),o.a.createElement(m.a,{avatar:o.a.createElement(E.a,{style:C.icon}),label:"README.md",style:C.chip}),o.a.createElement(m.a,{avatar:o.a.createElement(O.a,{style:C.icon}),label:"",style:C.chip}),o.a.createElement(m.a,{avatar:o.a.createElement(M.a,{style:C.icon}),label:"",style:C.chip,onClick:e.execute})),o.a.createElement(k,e)))},T=t(87),U=t.n(T),A=t(263)("./readme.md"),y=Object(c.a)({},{flex:1,overflow:"hidden"},{backgroundColor:"#586e75",color:"palegoldenrod"}),z=function(){return o.a.createElement("section",{style:y,id:"display"},o.a.createElement(U.a,{source:A.default}))},g={display:"flex",flex:1},I=function(e){return o.a.createElement("div",{style:g},o.a.createElement(d,null),o.a.createElement(z,null),o.a.createElement(w,e))},L={display:"flex",minHeight:"100vh",flexDirection:"column"};_.a=function(e){return o.a.createElement("div",{style:L},o.a.createElement(n,null),o.a.createElement(I,e),o.a.createElement(s,null))}},89:function(e,_,t){e.exports=t(265)},94:function(e,_,t){},95:function(e,_,t){}},[[89,1,2]]]);
//# sourceMappingURL=main.dd59b92f.chunk.js.map