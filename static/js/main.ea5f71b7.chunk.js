(this.webpackJsonptaxi_schedule=this.webpackJsonptaxi_schedule||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(33),c=n.n(i),o=(n(106),n(5)),s=(n(107),n(19)),d=n(152),l=n(172),u=n(21),j=n(43),b=Object(j.c)({name:"editDailyScheduleModal",initialState:{open:!1},reducers:{setEditDailyScheduleModalSliceState:function(e,t){return Object(u.a)(Object(u.a)({},e),t.payload)}}}),h=b.actions.setEditDailyScheduleModalSliceState,f=b.reducer,v=n(61),O=n(167),x=n(168),m=n(173),p=n(174),g=n(175),S=n(176),C=n(164),y=n(169),D=n(177),I=n(178),k=n(4),w=Object(d.a)((function(e){return{formControl:{"&:not(:last-child)":{marginBottom:12}}}}));function M(e){var t=e.date,n=e.selectedDriverId,a=void 0===n?null:n,r=e.driverOptions,i=e.selectedStatusId,c=void 0===i?null:i,o=e.statusOptions,s=e.onDriverChange,d=e.onStatusChange,l=Object(v.a)(e,["date","selectedDriverId","driverOptions","selectedStatusId","statusOptions","onDriverChange","onStatusChange"]),j=w(),b=function(e){return function(t){switch(e){case"driver":s&&s(t.target.value);break;case"status":d&&d(t.target.value)}}};return Object(k.jsxs)(O.a,Object(u.a)(Object(u.a)({},l),{},{children:[Object(k.jsxs)(x.a,{children:["\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043d\u0430 ",Object(k.jsx)("u",{children:t.format("LL")})]}),Object(k.jsx)(m.a,{children:Object(k.jsxs)(p.a,{children:[Object(k.jsxs)(g.a,{className:j.formControl,children:[Object(k.jsx)(S.a,{children:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c"}),Object(k.jsx)(C.a,{value:a,onChange:b("driver"),children:r&&r.map((function(e){return Object(k.jsx)(y.a,{value:e.id,children:e.name},e.id)}))})]}),Object(k.jsxs)(g.a,{children:[Object(k.jsx)(S.a,{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(k.jsx)(C.a,{value:c,onChange:b("status"),children:o&&o.map((function(e){return Object(k.jsx)(y.a,{value:e.id,children:e.name},e.id)}))})]})]})}),Object(k.jsxs)(D.a,{children:[Object(k.jsx)(I.a,{variant:"contained",color:"primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(k.jsx)(I.a,{onClick:function(){return l.onClose&&l.onClose({},"backdropClick")},children:"\u041d\u0430\u0437\u0430\u0434"})]})]}))}var N=n(16),z=n.n(N);var T=function(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return e})),a=n.editDailyScheduleModal,r=n.schedule;return Object(k.jsx)(M,Object(u.a)({date:z()(a.selectedDate),selectedDriverId:a.selectedDriverId,selectedStatusId:a.selectedStatusId,driverOptions:r.drivers,statusOptions:r.statuses,open:a.open,onDriverChange:function(e){t(h({selectedDriverId:e}))},onStatusChange:function(e){t(h({selectedStatusId:e}))},onClose:function(){t(h({open:!1}))}},e))},W=n(179),L=n(180),R=n(181),A=n(157),B=n(170),F=n(182),E=n(183),P=n(171),V=n(158),Y=n(184),J=n(59),_=n.n(J);Object(d.a)((function(e){return{root:{height:"100%",display:"flex",cursor:"pointer",backgroundColor:function(e){var t;return"".concat(null===(t=e.status)||void 0===t?void 0:t.color," !important")}},wrapper:{display:"flex",flex:1,flexFlow:"column",transition:"background-color .2s ease !important",backgroundColor:"".concat(e.palette.grey[300]," !important"),"&:hover":{backgroundColor:"".concat(e.palette.grey[500]," !important"),"& .driver":{background:e.palette.grey[300]}}},driverNameRow:{height:32,"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400])},display:"flex",justifyContent:"center",alignItems:"center"},selectedText:{padding:"0 4px",borderRadius:4,fontWeight:500,transition:"all .2s ease",background:e.palette.grey[500],whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",maxWidth:70},status:{width:10,height:"100%"}}}));var q=n(159),G=Object(d.a)((function(e){return{root:{padding:"20px 0",marginLeft:function(e){return e.vehicleNameCellWidth},position:"relative","& .MuiTableCell-root":{borderBottom:"none"}},tableRoot:{tableLayout:"fixed"},headerCell:{textAlign:"center",fontSize:"inherit",whiteSpace:"nowrap",width:function(e){return"calc(100% / ".concat(e.renderDaysCount,")")}},cell:{height:114,boxSizing:"border-box",padding:8,position:"relative",fontSize:"inherit"},divider:{borderLeft:"1px solid ".concat(e.palette.grey[500]),"&:before":{content:"attr(data-month)",position:"absolute",top:-12,fontWeight:500,textTransform:"capitalize"}},vehicleNameCell:{position:"absolute",width:function(e){return e.vehicleNameCellWidth},height:114,boxSizing:"border-box",padding:8,right:"100%",textAlign:"left"},vehicleNameContainer:{backgroundColor:"".concat(e.palette.grey[300]," !important"),height:"100%",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},fab:{position:"absolute",right:e.spacing(2),bottom:e.spacing(2)},skeleton:{transform:"none !important"}}}));function H(e){for(var t=e.scheduleScheme,n=e.vehicles,a=e.drivers,r=e.statuses,i=e.startDate,c=e.renderDaysCount,s=void 0===c?7:c,d=(e.onEditDateClick,e.onReturnToTodayClick),l=G(e),u=z()().subtract(2*s,"days"),j=z()().add(s,"days"),b=i.isBefore(u)||i.isAfter(j),h=z()(i).add(s,"days"),f=[],v=z()(i);v.isBefore(h);v.add(1,"day"))f.push(z()(v));return Object(k.jsx)("div",{className:l.root,children:Object(k.jsxs)(W.a,{children:[Object(k.jsxs)(L.a,{className:l.tableRoot,children:[Object(k.jsxs)(R.a,{children:[Object(k.jsx)(A.a,{className:l.vehicleNameCell}),f.map((function(e){return Object(k.jsxs)(A.a,{className:l.headerCell,children:[Object(k.jsxs)("span",{children:[e.format("DD, dd")," "]}),e.isSame(z()(),"day")&&Object(k.jsx)(B.a,{label:"\u0441\u0435\u0433\u043e\u0434\u043d\u044f",size:"small",color:"secondary"})]})}))]}),Object(k.jsx)(F.a,{children:(n||[{id:0,name:""},{id:1,name:""},{id:2,name:""}]).map((function(e,n){return Object(k.jsxs)(E.a,{children:[Object(k.jsxs)("th",{className:l.vehicleNameCell,children:[Object(k.jsx)(P.a,{className:l.skeleton,height:"100%"}),!1]}),f.map((function(i){var c,s=null===t||void 0===t||null===(c=t.find((function(e){return z()(e.date).isSame(i,"day")})))||void 0===c?void 0:c.schedule.find((function(t){return t.vehicleId===e.id})),d=1===i.date();null===a||void 0===a||a.find((function(e){return e.id===(null===s||void 0===s?void 0:s.driverId)})),null===r||void 0===r||r.find((function(e){return e.id===(null===s||void 0===s?void 0:s.statusId)}));return Object(k.jsxs)(A.a,{"data-month":0===n?i.format("MMMM"):"",className:_()(l.cell,Object(o.a)({},l.divider,d)),children:[Object(k.jsx)(P.a,{className:l.skeleton,height:"100%"}),!1]})}))]},e.id)}))})]}),Object(k.jsx)(V.a,{in:b,children:Object(k.jsx)(Y.a,{className:l.fab,color:"secondary",style:{position:"absolute"},onClick:d,children:Object(k.jsx)(q.a,{})})})]})})}var K=n(27),Q=n(160),U=n(80),X=n.n(U),Z=n(91),$={vehicles:[{id:0,name:"Volkswagen Polo"},{id:1,name:"Volkswagen Polo"},{id:2,name:"Volkswagen Passat"}],drivers:[{id:0,name:"Driver 1"},{id:1,name:"Driver 2"}],statuses:[{id:0,name:"\u0412\u044b\u0445\u043e\u0434",color:"#4caf50"},{id:1,name:"\u041f\u0440\u043e\u0441\u0442\u043e\u0439",color:"#f44336"},{id:2,name:"\u0420\u0435\u043c\u043e\u043d\u0442",color:"#ff9800"}],scheduleScheme:[{date:"2021-02-25",schedule:[{driverId:0,vehicleId:0,statusId:0,isMainDriver:Math.random()<.5}]},{date:"2021-02-26",schedule:[{driverId:1,vehicleId:1,statusId:1,isMainDriver:Math.random()<.5}]},{date:"2021-02-27",schedule:[{driverId:1,vehicleId:2,statusId:2,isMainDriver:Math.random()<.5}]},{date:"2021-02-28",schedule:[{driverId:0,vehicleId:0,statusId:0,isMainDriver:Math.random()<.5},{driverId:1,vehicleId:2,statusId:0,isMainDriver:Math.random()<.5}]},{date:"2021-03-1",schedule:[{driverId:1,vehicleId:2,statusId:2,isMainDriver:Math.random()<.5}]}]},ee={selectedDate:z()().toISOString()},te=Object(j.b)("schedule/fetchTableData",function(){var e=Object(Z.a)(X.a.mark((function e(t){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout((function(){return e($)}),3e3)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ne=Object(j.c)({name:"schedule",initialState:ee,reducers:{setScheduleSliceState:function(e,t){return Object(u.a)(Object(u.a)({},e),t.payload)}},extraReducers:function(e){e.addCase(te.fulfilled,(function(e,t){return Object(u.a)(Object(u.a)({},e),t.payload)}))}}),ae=ne.actions.setScheduleSliceState,re=ne.reducer;var ie=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.schedule})),n=t.selectedDate,a=t.vehicles,r=t.drivers,i=t.statuses,c=t.scheduleScheme,o=Object(K.a)(),d=7,l=200;return Object(Q.a)(o.breakpoints.down("lg"))&&(d=5),Object(Q.a)(o.breakpoints.down("md"))&&(d=3,l=150),Object(Q.a)(o.breakpoints.down("sm"))&&(d=2,l=100),Object(k.jsx)(H,{vehicles:a,drivers:r,statuses:i,scheduleScheme:c,renderDaysCount:d,vehicleNameCellWidth:l,startDate:z()(n),onEditDateClick:function(t,n,a,r){e(h({open:!0,selectedDate:t.toISOString(),selectedVehicleId:n,selectedDriverId:a,selectedStatusId:r}))},onReturnToTodayClick:function(){e(ae({selectedDate:z()().toISOString()}))}})},ce=n(161),oe=n(162),se=n(163),de=Object(d.a)((function(e){return{root:{display:"flex",justifyContent:"center"}}}));function le(e){var t=de(),n=e.onArrowClick,a=function(e){return function(){n&&n({direction:e})}};return Object(k.jsx)("div",{className:t.root,children:Object(k.jsxs)(ce.a,{display:"flex",justifyContent:"space-between",width:150,children:[Object(k.jsx)(I.a,{variant:"contained",onClick:a("prev"),children:Object(k.jsx)(oe.a,{})}),Object(k.jsx)(I.a,{variant:"contained",onClick:a("next"),children:Object(k.jsx)(se.a,{})})]})})}var ue=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.schedule.selectedDate}));return Object(k.jsx)(le,{onArrowClick:function(n){var a=z()(t);"prev"===n.direction?a.subtract(1,"day"):a.add(1,"day"),e(ae({selectedDate:a.toISOString()}))}})},je=n(92),be=n.n(je),he=Object(d.a)((function(e){return{root:{display:"flex",flexWrap:"nowrap",background:e.palette.grey[300],borderRadius:4},dateString:{display:"flex",justifyContent:"center",alignItems:"center",width:120,textAlign:"center",cursor:"default",textTransform:"capitalize",fontWeight:500}}}));function fe(e){var t=e.date,n=void 0===t?z()():t,a=e.onDateChange,r=he(),i=function(e){return function(){var t;t="prev"===e?z()(n).subtract(1,"month").set("date",1):z()(n).add(1,"month").set("date",1),a&&a(t)}};return Object(k.jsxs)("div",{className:r.root,children:[Object(k.jsx)(I.a,{onClick:i("prev"),children:Object(k.jsx)(oe.a,{})}),Object(k.jsx)(be.a,{className:r.dateString,date:n,format:"MMMM, YYYY"}),Object(k.jsx)(I.a,{onClick:i("next"),children:Object(k.jsx)(se.a,{})})]})}var ve=Object(d.a)((function(e){return{root:Object(o.a)({display:"flex",alignItems:"center"},e.breakpoints.down("sm"),{flexFlow:"column"}),title:Object(o.a)({fontSize:20,fontWeight:600,marginRight:10},e.breakpoints.down("md"),{fontSize:14}),button:{fontSize:"inherit !important"},selector:Object(o.a)({marginLeft:"auto"},e.breakpoints.down("sm"),{marginLeft:"unset",marginTop:32})}}));function Oe(e){var t=ve(),n=e.date,a=e.onDateChange;return Object(k.jsxs)("div",{className:t.root,children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("span",{className:t.title,children:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0439"}),Object(k.jsx)(I.a,{className:t.button,variant:"contained",color:"secondary",children:"\u0421\u043f\u0438\u0441\u0430\u0442\u044c \u0430\u0440\u0435\u043d\u0434\u0443"})]}),Object(k.jsx)("div",{className:t.selector,children:Object(k.jsx)(fe,{date:n,onDateChange:a})})]})}var xe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.schedule.selectedDate}));return Object(k.jsx)(Oe,{date:z()(t),onDateChange:function(t){e(ae({selectedDate:t.toISOString()}))}})},me=Object(d.a)((function(e){return{root:{display:"flex",flex:1,flexFlow:"column",padding:20,maxWidth:"100%",boxSizing:"border-box"}}}));function pe(){var e=me();return Object(k.jsxs)(l.a,{elevation:3,className:e.root,children:[Object(k.jsx)(xe,{}),Object(k.jsx)(ie,{}),Object(k.jsx)(ue,{}),Object(k.jsx)(T,{fullWidth:!0})]})}var ge=function(){var e=Object(s.b)();return Object(a.useEffect)((function(){e(te({startDate:z()(),endDate:z()()}))}),[]),Object(k.jsx)(pe,{})},Se=Object(d.a)((function(e){return{root:Object(o.a)({display:"flex",width:"100%",boxSizing:"border-box",padding:20,maxWidth:1200},e.breakpoints.down("md"),{fontSize:12})}}));var Ce=function(){var e=Se();return Object(k.jsx)("div",{className:e.root,children:Object(k.jsx)(ge,{})})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},De=(n(119),n(31)),Ie=Object(De.c)({schedule:re,editDailyScheduleModal:f}),ke=Object(j.a)({reducer:Ie});c.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(s.a,{store:ke,children:Object(k.jsx)(Ce,{})})}),document.getElementById("root")),ye()}},[[120,1,2]]]);
//# sourceMappingURL=main.ea5f71b7.chunk.js.map