(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var a=n(7),o=n(6),c=n(8),r=n(2),s=n(3),l=n(5),i=n(4),u=n(1),d=n(10),f=n.n(d),j=(n(16),n(17),n(0)),p=function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={label:""},t.onLabelChange=function(e){var n=e.target.value;" "!==n&&t.setState({label:n})},t.onSubmit=function(e){e.preventDefault(),t.props.AddItem(t.state.label),t.setState({label:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:"form-input",onSubmit:this.onSubmit,children:[Object(j.jsx)("input",{className:"new-todo",onChange:this.onLabelChange,placeholder:"What needs to be done?",autoFocus:!0,value:this.state.label,required:!0}),Object(j.jsx)("button",{className:"btn btn-outline-secondary",children:"Add Item"})]})}}]),n}(u.Component),b=n(26),h=(n(19),n(11)),m=n.n(h),g=function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={newText:t.props.label,oldValue:t.props.label},t.handleInputChange=function(e){var n=e.target.value;t.setState({newText:n})},t.handleOnBlur=function(e){console.log(e);var n=t.props,a=n.successEdit,o=n.id;a(""!==t.state.newText?t.state.newText:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",o)},t.handleKeyDown=function(e){var n=t.state,a=n.newText,o=n.oldValue,c=t.props,r=c.successEdit,s=c.id,l=c.onDeleted;"Enter"===e.key&&e.key.trim()&&(""===a&&l(s),e.preventDefault(),r(a,s),t.setState({oldValue:a}),e.target.focus()),"Escape"===e.key&&(r(o,s),t.setState({newText:o}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.newText,e=this.props,n=e.label,a=e.onDeleted,o=e.isEditing,c=e.completed,r=e.toggleStateOfTask,s=e.onEdited,l=e.currentStatus,i=e.created,u=m()({editing:o,completed:c,hidden:c&&"active"===l||"completed"===l&&!c});return Object(j.jsxs)("li",{className:u,children:[Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("input",{className:"toggle",type:"checkbox",readOnly:!0,checked:c,onClick:r}),Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{className:"description",children:n}),Object(j.jsxs)("span",{className:"created",children:["created ",Object(b.a)(i,{includeSeconds:!0})," ago"]})]}),Object(j.jsx)("button",{className:"icon icon-edit",onClick:s}),Object(j.jsx)("button",{className:"icon icon-destroy",onClick:a})]}),Object(j.jsx)("input",{type:"text",className:"edit",value:t,onKeyUp:this.handleKeyDown,onChange:this.handleInputChange,ref:function(t){return t&&t.focus()},onBlur:this.handleOnBlur})]})}}]),n}(u.Component);g.defaultProps={label:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430",completed:!1,id:1e4*Math.random(),created:new Date,currentStatus:"all",isEditing:!1,onChange:function(){},onDeleted:function(){},onEdited:function(){},toggleStateOfTask:function(){},successEdit:function(){}};n(20);var O=function(t){var e=t.todos,n=t.currentStatus,a=t.successEdit,c=t.onDeleted,r=t.toggleStateOfTask,s=t.onEdited,l=e.map((function(t){return Object(j.jsx)(g,Object(o.a)(Object(o.a)({},t),{},{onEdited:function(){return s(t.id)},onDeleted:function(){return c(t.id)},currentStatus:n,successEdit:a,toggleStateOfTask:function(){return r(t.id)}}),t.id)}));return Object(j.jsx)("ul",{className:"todo-list",children:l})};O.defaultProps={todos:[],item:{},currentStatus:"all",toggleStateOfTask:function(){},successEdit:function(){},onDeleted:function(){},onEdited:function(){}};var S=O,v=(n(21),function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.deleteCompleted,n=t.currentStatus,a=t.handleToggleFilter;return Object(j.jsxs)("ul",{className:"filters",children:[Object(j.jsx)("li",{children:Object(j.jsx)("button",{name:"all",className:"all"===n?"selected":"",onClick:function(t){return a(t.target.name)},children:"All"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{name:"active",className:"active"===n?"selected":"",onClick:function(t){return a(t.target.name)},children:"Active"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{name:"completed",className:"completed"===n?"selected":"",onClick:function(t){return a(t.target.name)},children:"Completed"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:e,children:"Clear completed"})})]})}}]),n}(u.Component));v.defaultProps={currentStatus:"all",deleteCompleted:function(){},handleToggleFilter:function(){}};n(22);var D=function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.completedCount,n=t.deleteCompleted,a=t.todos,c=t.handleToggleFilter,r=t.currentStatus;return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsxs)("span",{className:"todo-count",children:[e," items left"]}),Object(j.jsx)(v,Object(o.a)(Object(o.a)({},a),{},{handleToggleFilter:c,currentStatus:r,deleteCompleted:n}))]})}}]),n}(u.Component);D.defaultProps={completedCount:0,deleteCompleted:function(){},todos:[],handleToggleFilter:function(){},currentStatus:"all"};n(23);var x=function(t){Object(l.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={toDoData:[t.createItem("Completed task"),t.createItem("Editing task"),t.createItem("Active task")],currentStatus:"all"},t.onEdited=function(e){t.setState((function(n){var a=n.toDoData;return{toDoData:t.toggleProperty(a,e,"isEditing")}}))},t.addNewItem=function(e){t.setState((function(n){var a=n.toDoData,o=t.createItem(e);return{toDoData:[].concat(Object(c.a)(a),[o])}}))},t.toggleStateOfTask=function(e){t.setState((function(n){var a=n.toDoData;return{toDoData:t.toggleProperty(a,e,"completed")}}))},t.deleteItem=function(e){t.setState((function(t){return{toDoData:t.toDoData.filter((function(t){return t.id!==e}))}}))},t.deleteCompleted=function(){t.setState((function(t){var e=t.toDoData.filter((function(t){return!0!==t.completed}));return console.log(e),{toDoData:e}}))},t.handleToggleFilter=function(e){t.setState({currentStatus:e})},t.successEdit=function(e,n){t.setState((function(t){return{toDoData:t.toDoData.map((function(t){return n===t.id&&(t.label=e,t.isEditing=!0===t.isEditing?!t.isEditing:t.isEditing),t}))}}))},t}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){localStorage.setItem("dataState",JSON.stringify(this.state.toDoData)),localStorage.setItem("dataStatus",JSON.stringify(this.state.currentStatus))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("dataState")),e=JSON.parse(localStorage.getItem("dataStatus"));null===t&&null===e||this.setState({toDoData:t,currentStatus:e})}},{key:"toggleProperty",value:function(t,e,n){var r=t.findIndex((function(t){return t.id===e})),s=t[r],l=Object(o.a)(Object(o.a)({},s),{},Object(a.a)({},n,!s[n]));return[].concat(Object(c.a)(t.slice(0,r)),[l],Object(c.a)(t.slice(r+1)))}},{key:"createItem",value:function(t){return{label:t,completed:!1,id:1e4*Math.random(),isEditing:!1,created:Date.now()}}},{key:"render",value:function(){console.log(this.state);var t=this.state,e=t.currentStatus,n=t.toDoData,a=n.filter((function(t){return!1===t.completed})).length;return Object(j.jsxs)("section",{className:"todoapp",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"todos"}),Object(j.jsx)(p,{AddItem:this.addNewItem})]}),Object(j.jsxs)("section",{className:"main",children:[Object(j.jsx)(S,{todos:n,currentStatus:e,onEdited:this.onEdited,onDeleted:this.deleteItem,toggleStateOfTask:this.toggleStateOfTask,successEdit:this.successEdit}),Object(j.jsx)(D,{completedCount:a,currentStatus:e,todos:n,deleteCompleted:this.deleteCompleted,handleToggleFilter:this.handleToggleFilter})]})]})}}]),n}(u.Component);f.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.7c9dd822.chunk.js.map