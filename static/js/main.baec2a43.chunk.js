(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,_,t){"use strict";t.r(_);var a=t(0),n=t.n(a),o=t(59),r=t.n(o),l=(t(75),t(60));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(l.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61),_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(68),_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(62),_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(69),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(76),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_pages__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(67),demo="// Basic stack operators\n\nconst stack = new Stack();\n\nstack.push(0);\nstack.push(1);\nstack.pop();\n\nstack.push(2);\nstack.pop();\n\nstack.push(3);\nstack.pop();\n\nstack.push(4);\nstack.push(4);\nstack.push(4);\n\nstack.pop();\nstack.pop();\nstack.pop();\nstack.pop();\n\nstack.play(500);\n";function onChange(e){demo=e}var execute=function execute(){var parentHTML=document.getElementById("display");parentHTML.innerHTML="",__webpack_require__.e(3).then(__webpack_require__.t.bind(null,166,7)).then(function(alchemist){var Queue=alchemist.Queue,Index=alchemist.Index,Stack=function(e){function _(){return Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__.a)(this,Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__.a)(_).call(this,parentHTML))}return Object(_Users_dozhou_workspace_dozhou_alchemist_editor_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(_,e),_}(alchemist.Stack);try{eval(demo)}catch(error){console.error(error.message)}})},App=function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_pages__WEBPACK_IMPORTED_MODULE_6__.a,{onChange:onChange,fontSize:14,defaultValue:demo,execute:execute}))};__webpack_exports__.a=App},67:function(e,_,t){"use strict";var a=t(0),n=t.n(a),o={backgroundColor:"#073642",textAlign:"center"},r=function(){return n.a.createElement("header",{style:o})},l={backgroundColor:"#073642",textAlign:"center"},c=function(){return n.a.createElement("footer",{style:l},"ALGORITHMS AND DATA STRUCTERS VISUALIZATION ONLINE EDITOR")},s=t(20),i=t(19),u=Object(s.a)({},{flex:1,order:-1,height:"100%",overflow:"hidden"},{backgroundColor:"#002B36"}),p=function(){return n.a.createElement(i.a,{enable:{right:!0}},n.a.createElement("nav",{style:u},"nav bar"))},d=t(13),m=t.n(d),E=t(28),h=t.n(E),b=t(65),k=t.n(b),O=t(66),f=t.n(O),M=t(63),D=t.n(M),w=(t(85),t(87),function(e){return n.a.createElement(D.a,{width:"100%",height:"100%",mode:"javascript",theme:"solarized_dark",onChange:e.onChange,defaultValue:e.defaultValue,fontSize:e.fontSize,editorProps:{$blockScrolling:!1},setOptions:{fontFamily:"'Courier New', Menlo, Monaco, monospace",dragEnabled:!0,dragDelay:100}})}),P={layout:{flex:1,height:"100%",overflow:"hidden",backgroundColor:"#002B36"},icon:{width:20,height:20},chip:{color:"#93A1A1",backgroundColor:"transparent",fontFamily:"'Courier New', Menlo, Monaco, monospace"},nav:{borderBottom:"1px solid #586e75",minWidth:"500px"}},C=function(e){return n.a.createElement(i.a,{enable:{left:!0}},n.a.createElement("aside",{style:P.layout},n.a.createElement("nav",{style:P.nav},n.a.createElement(m.a,{avatar:n.a.createElement(h.a,{style:P.icon}),label:"code.js",style:P.chip}),n.a.createElement(m.a,{avatar:n.a.createElement(h.a,{style:P.icon}),label:"README.md",style:P.chip}),n.a.createElement(m.a,{avatar:n.a.createElement(k.a,{style:P.icon}),label:"",style:P.chip}),n.a.createElement(m.a,{avatar:n.a.createElement(f.a,{style:P.icon}),label:"",style:P.chip,onClick:e.execute})),n.a.createElement(w,e)))},A=Object(s.a)({},{flex:1,overflow:"hidden"},{backgroundColor:"#586e75"}),g=function(){return n.a.createElement("section",{style:A,id:"display"},"section")},y={display:"flex",flex:1},I=function(e){return n.a.createElement("div",{style:y},n.a.createElement(p,null),n.a.createElement(g,null),n.a.createElement(C,e))},T={display:"flex",minHeight:"100vh",flexDirection:"column"};_.a=function(e){return n.a.createElement("div",{style:T},n.a.createElement(r,null),n.a.createElement(I,e),n.a.createElement(c,null))}},70:function(e,_,t){e.exports=t(165)},75:function(e,_,t){},76:function(e,_,t){}},[[70,1,2]]]);
//# sourceMappingURL=main.baec2a43.chunk.js.map