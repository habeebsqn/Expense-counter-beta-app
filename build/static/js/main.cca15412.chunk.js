(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),l=(n(19),n(5)),s=n(2),i=n(1),r=(n(20),n(21),n(0)),u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},o=(n(8),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{onChange:function(t){var n=t.target.value;e.onRecieveSelectedYear(n)},value:e.defaultValue,children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),j=(n(23),n(24),n(25),function(e){var t=e.date.toLocaleString("en-US",{month:"short"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__day",children:n}),Object(r.jsx)("div",{className:"expense-date__year",children:a})]})}),d=function(e){var t=e.date,n=e.title,a=e.amount;return Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(j,{date:t}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:n}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",a]})]})]})};var b=function(e){return 0===e.filtered.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"No expenses found"}):Object(r.jsx)("div",{children:e.filtered.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},x=n(10),v=(n(26),n(27),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})},f=function(e){var t,n=[{label:"jan",value:0},{label:"feb",value:0},{label:"mar",value:0},{label:"apr",value:0},{label:"may",value:0},{label:"jun",value:0},{label:"jul",value:0},{label:"aug",value:0},{label:"sep",value:0},{label:"oct",value:0},{label:"nov",value:0},{label:"dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(r.jsx)(O,{dataPoints:n})},h=function(e){var t=Object(i.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(o,{onRecieveSelectedYear:function(e){c(e)},defaultValue:a}),Object(r.jsx)(f,{expenses:l}),Object(r.jsx)(b,{filtered:l})]})},m=n(6);n(28),n(29);var p=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),u=Object(s.a)(l,2),o=u[0],j=u[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+o,date:new Date(x)};console.log(n),e.onSaveExpenseData(n),c(""),j(""),v("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",required:!0,value:a,onChange:function(e){var t=e.target.value;c(t)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",required:!0,value:o,onChange:function(e){var t=e.target.value;j(t)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",required:!0,value:x,onChange:function(e){var t=e.target.value;v(t)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.cancelButton,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})};var N=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{type:"button",onClick:function(){c(!0)},children:"Add new Expense"}),a&&Object(r.jsx)(p,{onSaveExpenseData:function(t){var n=Object(m.a)(Object(m.a)({},t),{},{id:Math.random().toString()});e.onAddNewExpense(n),c(!1)},cancelButton:function(){c(!1)}})]})},_=[{id:"e2",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e1",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var g=function(){var e=Object(i.useState)(_),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),u=Object(s.a)(c,2),o=u[0],j=u[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){j(!1)}),1500);return function(){clearTimeout(e)}}),[n]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{style:{textAlign:"center",color:"#f8dfff"},children:"BETA EXPENSE COUNTER APP"}),Object(r.jsx)(N,{onAddNewExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))})),j(!0)}}),o&&Object(r.jsx)("h2",{style:{textAlign:"center",color:"#f8dfff"},children:"EXPENSE ADDED!"}),Object(r.jsx)(h,{items:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(g,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.cca15412.chunk.js.map