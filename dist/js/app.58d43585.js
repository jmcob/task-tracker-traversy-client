(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4666:function(e,t,n){},5430:function(e,t,n){"use strict";n("d903")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"},c={key:0};function o(e,t,n,o,s,i){var u=Object(r["n"])("Header"),d=Object(r["n"])("AddTask"),l=Object(r["n"])("Tasks");return Object(r["j"])(),Object(r["d"])("div",a,[Object(r["g"])(u,{onToggleAddTask:i.toggleAddTask,title:"Task Tracker",showAddTask:s.showAddTask},null,8,["onToggleAddTask","showAddTask"]),s.showAddTask?(Object(r["j"])(),Object(r["d"])("div",c,[Object(r["g"])(d,{onAddTask:i.addTask},null,8,["onAddTask"])])):Object(r["c"])("",!0),Object(r["g"])(l,{onToggleReminder:i.toggleReminder,onDeleteTask:i.deleteTask,tasks:s.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])])}var s=n("5530"),i=n("2909"),u=n("1da1");n("96cf"),n("d3b7"),n("e9c4"),n("99af"),n("4de4"),n("d81d");function d(e,t,n,a,c,o){var s=Object(r["n"])("Button");return Object(r["j"])(),Object(r["d"])("header",null,[Object(r["e"])("h1",null,Object(r["o"])(n.title),1),Object(r["g"])(s,{onBtnClick:t[0]||(t[0]=function(t){return e.$emit("toggle-add-task")}),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"])])}function l(e,t,n,a,c,o){return Object(r["j"])(),Object(r["d"])("button",{onClick:t[0]||(t[0]=function(e){return o.onClick()}),style:Object(r["i"])({background:n.color}),class:"btn"},Object(r["o"])(n.text),5)}var f={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}},b=n("6b0d"),p=n.n(b);const k=p()(f,[["render",l]]);var m=k,j={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:m}};n("89fb");const O=p()(j,[["render",d],["__scopeId","data-v-5b98e394"]]);var h=O;function g(e,t,n,a,c,o){var s=Object(r["n"])("Task");return Object(r["j"])(),Object(r["d"])("div",null,[(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["m"])(n.tasks,(function(t){return Object(r["j"])(),Object(r["d"])("div",{key:t.id},[Object(r["g"])(s,{onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},onDeleteTask:function(n){return e.$emit("delete-task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128))])}function v(e,t,n,a,c,o){return Object(r["j"])(),Object(r["d"])("div",{onDblclick:t[1]||(t[1]=function(t){return e.$emit("toggle-reminder",n.task.id)}),class:Object(r["h"])([n.task.reminder?"reminder":"","task"])},[Object(r["e"])("h3",null,[Object(r["f"])(Object(r["o"])(n.task.text)+" ",1),Object(r["e"])("i",{onClick:t[0]||(t[0]=function(t){return e.$emit("delete-task",n.task.id)}),class:"fas fa-times"})]),Object(r["e"])("p",null,Object(r["o"])(n.task.day),1)],34)}var T={name:"Task",props:{task:Object}};n("5430");const y=p()(T,[["render",v]]);var x=y,w={name:"Tasks",props:{tasks:Array},components:{Task:x},emits:["delete-task","toggle-reminder"]};const A=p()(w,[["render",g]]);var R=A,S=function(e){return Object(r["l"])("data-v-e48bf1ae"),e=e(),Object(r["k"])(),e},P={class:"form-control"},_=S((function(){return Object(r["e"])("label",null,"Task",-1)})),D={class:"form-control"},C=S((function(){return Object(r["e"])("label",null,"Day & Time",-1)})),$={class:"form-control form-control-check"},M=S((function(){return Object(r["e"])("label",null,"Set Reminder",-1)})),B=S((function(){return Object(r["e"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1)}));function E(e,t,n,a,c,o){return Object(r["j"])(),Object(r["d"])("form",{onSubmit:t[3]||(t[3]=function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),class:"add-form"},[Object(r["e"])("div",P,[_,Object(r["r"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.text=e}),name:"text",placeholder:"Add Task"},null,512),[[r["q"],c.text]])]),Object(r["e"])("div",D,[C,Object(r["r"])(Object(r["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.day=e}),name:"day",placeholder:"Add Day & Time"},null,512),[[r["q"],c.day]])]),Object(r["e"])("div",$,[M,Object(r["r"])(Object(r["e"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.reminder=e}),name:"reminder"},null,512),[[r["p"],c.reminder]])]),B],32)}var J={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}};n("8d8a");const U=p()(J,[["render",E],["__scopeId","data-v-e48bf1ae"]]);var H=U,V={name:"App",components:{Header:h,Tasks:R,AddTask:H},data:function(){return{tasks:[],showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask},addTask:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,t.tasks=[].concat(Object(i["a"])(t.tasks),[a]);case 7:case"end":return n.stop()}}),n)})))()},deleteTask:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("api/tasks/".concat(e),{method:"DELETE"});case 2:r=n.sent,200===r.status?t.tasks=t.tasks.filter((function(t){return t.id!==e})):alert("Error deleting task");case 4:case"end":return n.stop()}}),n)})))()},toggleReminder:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchTask(e);case 2:return r=n.sent,a=Object(s["a"])(Object(s["a"])({},r),{},{reminder:!r.reminder}),n.next=6,fetch("api/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 6:return c=n.sent,n.next=9,c.json();case 9:o=n.sent,t.tasks=t.tasks.map((function(t){return t.id===e?Object(s["a"])(Object(s["a"])({},t),{},{reminder:o.reminder}):t}));case 11:case"end":return n.stop()}}),n)})))()},fetchTasks:function(){return Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},fetchTask:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/tasks/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTasks();case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};n("93fe");const q=p()(V,[["render",o]]);var I=q;Object(r["b"])(I).mount("#app")},"6a73":function(e,t,n){},"89fb":function(e,t,n){"use strict";n("b4b2")},"8d8a":function(e,t,n){"use strict";n("6a73")},"93fe":function(e,t,n){"use strict";n("4666")},b4b2:function(e,t,n){},d903:function(e,t,n){}});
//# sourceMappingURL=app.58d43585.js.map