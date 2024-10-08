var e={series:[{name:"Old Patients",data:[30,35,35,30,45,25,36,54,36,29,49,42]},{name:"New Patients",data:[45,30,49,30,45,25,36,54,36,29,49,42]}],chart:{type:"bar",height:361,toolbar:{show:!1},dropShadow:{enabled:!1},stacked:!0},plotOptions:{bar:{columnWidth:"30%",borderRadiusApplication:"around",borderRadiusWhenStacked:"all",borderRadius:3}},stroke:{show:!0,curve:"smooth",lineCap:"butt",dashArray:0},grid:{borderColor:"#f5f4f4",strokeDashArray:5,yaxis:{lines:{show:!0}}},colors:["var(--primary-color)","rgba(227, 84, 212, 1)"],dataLabels:{enabled:!1},legend:{show:!0,position:"top",markers:{width:6,height:6,strokeWidth:0,strokeColor:"#fff",fillColors:void 0,radius:5,customHTML:void 0,onClick:void 0,offsetX:0,offsetY:0}},yaxis:{title:{style:{color:"#adb5be",fontSize:"14px",fontFamily:"Montserrat, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{formatter:function(o){return o.toFixed(0)+""}}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!1,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!1,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}}},t=new ApexCharts(document.querySelector("#statistics"),e);t.render();var a={series:[1754,1234],labels:["Male","Female"],chart:{height:260,type:"donut",dropShadow:{enabled:!0,enabledOnSeries:void 0,top:5,left:0,blur:3,color:"#525050",opacity:.1}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{show:!0,curve:"smooth",lineCap:"round",colors:"#fff",width:0,dashArray:0},plotOptions:{pie:{expandOnClick:!1,donut:{size:"80%",background:"transparent",labels:{show:!0,name:{show:!0,fontSize:"20px",color:"#495057",offsetY:-4},value:{show:!0,fontSize:"18px",color:void 0,offsetY:8,formatter:function(o){return o+"%"}},total:{show:!0,showAlways:!0,label:"Total",fontSize:"22px",fontWeight:600,color:"#495057"}}}}},colors:["var(--primary-color)","rgb(227, 84, 212)"]};document.querySelector("#patients-chart").innerHTML=" ";var r=new ApexCharts(document.querySelector("#patients-chart"),a);r.render();var e={series:[230,200,178,153],chart:{height:250,type:"polarArea"},colors:["var(--primary-color)","rgba(227, 84, 212, 1)","rgba(255, 93, 159, 1)","rgba(255, 142, 111, 1)"],labels:["Revenue","Income","Profit","Patients"],legend:{show:!1},stroke:{width:0},fill:{opacity:.8}},r=new ApexCharts(document.querySelector("#revenue-stats"),e);r.render();var e={series:[{type:"area",name:"Day Shift",data:[15,30,22,49,32,45,30,45,65,45,25,45]},{type:"line",name:"Night Shift",data:[8,40,15,32,45,30,20,35,28,43,30,40]}],chart:{type:"line",height:335,toolbar:{show:!1}},colors:["var(--primary-color)","rgba(227, 84, 212, 0.5)"],fill:{type:["gradient","solid"],gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1,stops:[0,90,100],colorStops:[[{offset:0,color:"var(--primary01)",opacity:50},{offset:75,color:"var(--primary01)",opacity:.5},{offset:100,color:"transparent",opacity:.5}],[{offset:0,color:"rgba(158, 92, 247, 0.1)",opacity:1},{offset:75,color:"rgba(158, 92, 247, 0.1)",opacity:.3},{offset:100,color:"transparent",opacity:1}]]}},dataLabels:{enabled:!1},legend:{show:!0,position:"top",offsetX:0,offsetY:8},stroke:{curve:"smooth",width:[2,2],lineCap:"round"},grid:{borderColor:"#edeef1",strokeDashArray:2},yaxis:{axisBorder:{show:!0,color:"rgba(158, 92, 247, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(158, 92, 247, 0.05)",width:6,offsetX:0,offsetY:0}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!1,color:"rgba(158, 92, 247, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!1,borderType:"solid",color:"rgba(158, 92, 247, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}}};document.getElementById("staff-work").innerHTML="";var s=new ApexCharts(document.querySelector("#staff-work"),e);s.render();