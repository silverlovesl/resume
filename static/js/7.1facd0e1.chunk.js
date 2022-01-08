(this["webpackJsonpresume-react"]=this["webpackJsonpresume-react"]||[]).push([[7],{250:function(e,a,t){},251:function(e,a,t){"use strict";var n=t(255),l=t(120),r=t(0),s=t.n(r),c=t(158),i=t.n(c),m={min:0,interval:1,nameTextStyle:{fontSize:14},axisLine:{show:!0,onZero:!1,lineStyle:{width:2}},axisTick:{lineStyle:{width:2}},splitLine:{lineStyle:{type:"dashed"}},axisLabel:{fontSize:14},scale:!0},o={show:!0,formatter:function(e){return"{mark|\u25cf}{label|".concat(e.name,"}")},position:"bottom",rich:{label:{fontSize:12,color:"#141414",fontWeight:"bold"},mark:{fontSize:18}}};a.a=function(e){var a,t;console.log(JSON.stringify(e.dataSource));var c=[20,20],g=(new Date).getFullYear(),u=Object(r.useState)({title:{text:e.title||"\u8a00\u8a9e\u30de\u30c3\u30d7"},legend:{right:100,top:35},grid:{containLabel:!1,top:70,bottom:20},xAxis:Object(n.a)({name:(null===(a=e.axis)||void 0===a?void 0:a.xLabel)||"\u7d4c\u9a13\u5e74\u6570",max:g-2010},m),yAxis:Object(n.a)({name:(null===(t=e.axis)||void 0===t?void 0:t.yLabel)||"\u719f\u7df4\u5ea6",max:10},m),color:["#f5222d","#1890ff","#fadb14","#52c41a","#8c8c8c"],tooltip:{formatter:function(a){var t,n;console.log(a);var l=a.data.value[0],r=a.data.value[1];return"".concat(a.data.name,"<br/>").concat((null===(t=e.axis)||void 0===t?void 0:t.xLabel)||"\u7d4c\u9a13\u5e74\u6570",": ").concat(l,"\u5e74<br/>").concat((null===(n=e.axis)||void 0===n?void 0:n.yLabel)||"\u719f\u7df4\u5ea6",": ").concat(r,"P")}},series:["Frontend","Backend","Framework","Database"].map((function(a){var t=[];switch(a.toLowerCase()){case"frontend":t=e.dataSource.frontend;break;case"backend":t=e.dataSource.backend;break;case"framework":t=e.dataSource.framework;break;case"database":t=e.dataSource.database}return{name:a,type:"scatter",data:t.map((function(e){return{name:e.name,value:e.value,symbol:"image://./images/programming-language/".concat(e.icon),symbolSize:e.iconSize||c,label:Object(n.a)({},o)}}))}}))}),d=Object(l.a)(u,1)[0];return s.a.createElement(i.a,{option:d,style:{height:"720px"}})}},252:function(e){e.exports=JSON.parse('{"skills":{"frontend":[{"name":"tailwind.css","value":[2,9],"icon":"tailwindcss.svg"},{"name":"Vue","value":[4,9.5],"icon":"vue.svg"},{"name":"React","value":[4,8],"icon":"react.svg"},{"name":"Angular","value":[3,6.5],"icon":"angular.svg"},{"name":"Polymer","value":[0.5,2],"icon":"polymer.svg"},{"name":"jQuery","value":[10,8],"icon":"jQuery.svg","iconSize":[45,20]},{"name":"Typescript","value":[5,8.5],"icon":"typescript.svg"},{"name":"Sass","value":[4,10],"icon":"sass.svg"},{"name":"iOS","value":[3,5],"icon":"ios.svg"},{"name":"Android","value":[1,3],"icon":"android.svg"},{"name":"Flutter","value":[1.5,7],"icon":"flutter.svg"}],"backend":[{"name":"Java","value":[7,8],"icon":"java.svg"},{"name":"C#","value":[8,6.5],"icon":"c-sharp.svg"},{"name":"Golang","value":[5.5,8.8],"icon":"gopher.svg","iconSize":[20,25]},{"name":"Swift","value":[4,5.8],"icon":"swift.svg"},{"name":"Kotlin","value":[1,4],"icon":"kotlin.svg"},{"name":"PHP","value":[2,6.4],"icon":"php.svg","iconSize":[45,20]},{"name":"Rust","value":[1,1],"icon":"rust.svg"}],"database":[{"name":"Mysql","value":[5,8],"icon":"mysql.svg"},{"name":"Oracle","value":[3,4],"icon":"oracle.svg","iconSize":[45,20]},{"name":"PostgreSQL","value":[6,7.5],"icon":"postgresql.svg"},{"name":"Sqlserver","value":[7,5],"icon":"sqlserver.svg","iconSize":[30,30]}],"framework":[{"name":"Ant Design","value":[4,9.5],"icon":"ant-design.svg"},{"name":"Spring","value":[2,3],"icon":"spring.svg"},{"name":"Primefaces","value":[3,8],"icon":"primefaces.svg","iconSize":[25,25]},{"name":"Primeng","value":[5,9],"icon":"primeng.svg","iconSize":[25,25]},{"name":"BootStrap","value":[8,10],"icon":"bootstrap.svg"}],"other":[{"name":"AWS","value":[4,3],"icon":"aws.svg","iconSize":[30,20]},{"name":"Jenkins","value":[2,5],"icon":"jenkins.svg","iconSize":[30,40]},{"name":"Shell","value":[10,9],"icon":"shell.svg","iconSize":[25,20]},{"name":"Docker","value":[4.5,6],"icon":"docker.svg","iconSize":[25,20]}]},"rankings":[{"name":"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9","score":90},{"name":"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9","score":75},{"name":"\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0","score":25},{"name":"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9","score":60},{"name":"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30c7\u30b6\u30a4\u30f3","score":70},{"name":"\u30a4\u30f3\u30d5\u30e9","score":35},{"name":"UI/UX","score":88},{"name":"\u7d44\u8fbc\u7cfb","score":15},{"name":"\u30c4\u30fc\u30eb","score":40},{"name":"\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3","score":99}],"frameworks":[],"others":[{"name":"Amazon Cloud Service","contents":["AWS\u306bSaas\u578b\u30b5\u30fc\u30d3\u30b9\u306e\u69cb\u7bc9\u7d4c\u9a13\u6709\u308a"],"avatar":"aws.svg","tags":["API Gateway","EC2","Cloud Front","Router53","ALB","CloudWatch","CodeDeploy","AWS Elastic Cache","Lambda","S3","SES"]},{"name":"Jenkins","contents":["\u81ea\u52d5\u30c6\u30b9\u30c8\u74b0\u5883\u69cb\u7bc9\u7d4c\u9a13\u6709\u308a","\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4\u74b0\u5883\u69cb\u7bc9\u7d4c\u9a13\u6709\u308a"],"avatar":"jenkins.svg","tags":["Jenkins"]},{"name":"GitHub","contents":["\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u7ba1\u7406","CI/CD"],"avatar":"github.svg","tags":["git","git actions"]},{"name":"Atlassian","contents":["\u30a2\u30b8\u30e3\u30a4\u30eb\u30d7\u30ed\u30bb\u30b9\u7ba1\u7406","\u30bf\u30b9\u30af\u9032\u6357\u7ba1\u7406","\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u7ba1\u7406","\u30bd\u30fc\u30b9\u7ba1\u7406"],"avatar":"atlassian.svg","tags":["JIRA","Confluence","Bit Bucket"]},{"name":"Docker","contents":["\u5404\u7a2e\u958b\u767a\u74b0\u5883\u69cb\u7bc9\u7d4c\u9a13\u6709\u308a"],"avatar":"docker.svg","tags":["Docker image","Docker composer"]},{"name":"Slack","contents":["\u65e5\u5e38\u4ed5\u4e8b\u306e\u3084\u308a\u53d6\u308a\u6642\u4f7f\u7528"],"avatar":"slack.svg","tags":["Slack","Slack API\u9023\u643a"]}]}')},751:function(e,a,t){e.exports=t.p+"static/media/avatar.1f343b33.jpeg"},752:function(e,a,t){},755:function(e){e.exports=JSON.parse('{"skillPoints":[{"lang":"Golang","icon":"gopher.svg","desc":["RestfulAPI\u6846\u67b6: gin,echo","ORM\u6846\u67b6: xorm, gorm","go-redis","RPC\u6846\u67b6: go-thrift,Google protobuf","\u9ad8\u5e76\u53d1\u7cfb\u7edf\u6784\u5efa"]},{"lang":"Java","icon":"java.svg","desc":["J2EE","RestfulAPI\u6846\u67b6: SpringBoot2","ORM\u6846\u67b6: MyBatis,Herbinate","DI: Spring, EJB"]},{"lang":"MySQL","icon":"mysql.svg","desc":["\u9ad8\u6027\u53ef\u6269\u5bb9\u6027\u6570\u636e\u5e93\u8bbe\u8ba1","\u5343\u4e07\u7ea7\u6570\u636e\u5e93\u6027\u80fd\u4f18\u5316","SQL\u6027\u80fd\u4f18\u5316"]},{"lang":"React","icon":"react.svg","desc":["\u72b6\u6001\u7ba1\u7406: Mobx, Redux","SSR/SSG: Nextjs","UI\u6846\u67b6: Ant Desing, Material UI"]},{"lang":"Vue","icon":"vue.svg","desc":["\u72b6\u6001\u7ba1\u7406: Vuex","SSR/SSG: Nuxtjs","UI\u6846\u67b6: Ant Desing, Element UI","\u73af\u5883: Vite"]},{"lang":"Angular","icon":"angular.svg","desc":["\u901a\u4fe1: RxJS","UI\u6846\u67b6: Primeng"]},{"lang":"Flutter","icon":"flutter.svg","desc":["OS: iOS,Android","\u72b6\u6001\u7ba1\u7406: Provider, Riverpod"]},{"lang":"Rust","icon":"rust.svg","desc":["RestfulAPI: actix-web,rocket","ORM: diesel","rust-redis"]},{"lang":"Docker","icon":"docker.svg","desc":["CLI","Container","Image"]}]}')},756:function(e){e.exports=JSON.parse('{"projects":[{"id":-1,"title":"WellnessAile","url":"","image":"./images/portfolios/wellness-aile/wellness-aile.png","description":"","detail":["\u67d0\u8fd0\u52a8\u5065\u5eb7App \u540e\u53f0\u7ba1\u7406\u7cfb\u7edf","App\u7aef\u8bb0\u5f55\u7528\u6237\u6d3b\u52a8\u7ec6\u5fc3,\u540e\u53f0\u7ba1\u7406\u754c\u9762\u5b9e\u73b0\u7528\u6237\u7ba1\u7406\uff0c\u6d88\u606f\u63a8\u9001\u901a\u77e5\uff0c\u7528\u6237\u6d3b\u8dc3\u6027\u6570\u636e\u53ef\u89c6\u5316\u7b49\u529f\u80fd"],"frontend":"Echarts ,React, Ant design, tailwind.css, iOS(Swift), Android(Kotlin)","backend":"Serverless","database":"MySQL","CI":"github actions","other":"AWS","basicDesign":true,"detailedDesign":true,"implementation":true,"unitTest":true,"integrationTest":true,"release":true},{"id":0,"title":"OralFit","url":"","image":"./images/portfolios/oralfit/oralfit.png","description":"\u4e00\u6b3e\u53e3\u8154\u73af\u5883\u8bad\u7ec3\u7684App","detail":["\u65e5\u672cLION\u516c\u53f8\u63a8\u51fa\u7684\u4e00\u6b3e\u9762\u5411\u4e2d\u8001\u5e74\u7528\u6237\u53e3\u8154\u73af\u5883\u6539\u5584\u7684App\u3002","\u4e2a\u4eba\u627f\u63a5\u5f00\u53d1\u76f4\u81f3\u4e0a\u7ebf\u3002","UI\u8981\u6c42\u8f83\u9ad8\u4e14\u9700\u8981\u5feb\u901f\u8fed\u4ee3\u6240\u4ee5\u9009\u62e9Flutter\u6765\u5f00\u53d1"],"frontend":"Flutter 2.6","backend":".net core 5","database":"MySQL","CI":"github actions","other":"AWS","basicDesign":true,"detailedDesign":true,"implementation":true,"unitTest":true,"integrationTest":false,"release":true},{"id":1,"title":"Grow","url":"https://i-globalsociety.com/about/","image":"./images/portfolios/grow/p1.png","description":"\u901a\u8fc7AI\u6765\u505a\u4e2a\u4eba\u7684\u6027\u683c\u63a8\u65ad\uff0c\u6c14\u8d28\u5206\u6790\u3002\u4e3a\u4f01\u4e1a\u518d\u62db\u52df\u65b0\u4eba\u662f\u63d0\u4f9b\u53ef\u89c6\u5316\u7684\u5224\u65ad\u4f9d\u636e","detail":["\u516c\u53f8\u5185\u90e8SaaS\u578b\u4ea7\u54c1","\u4f5c\u4e3a\u6280\u672fLeader\u5e26\u9886\u56e2\u961f\u5f00\u53d1\u3002\u4e3b\u8981\u8d1f\u8d23\u9879\u76ee\u67b6\u6784\u642d\u5efa\u3001\u6280\u672f\u6307\u5bfc\u3001\u8fdb\u5ea6\u4e0e\u54c1\u63a7","\u521d\u671f\u5f00\u53d1\u9636\u6bb5MVC\u6a21\u5f0f\u5355\u4f53All in one API\u3002\u540e\u671f\u968f\u7740\u9879\u76ee\u6269\u5927\u5e76\u53d1\u6570\u91cf\u589e\u52a0\uff0c\u8fd0\u7528gRPC\u6280\u672f\u5c06\u9879\u76ee\u62c6\u5206\u4e3a\u5fae\u670d\u52a1\u3002"],"frontend":"Vue2.0, typescript, VantUI, Ant Design, fabricjs, ECharts","backend":"Golang, Echo, Xorm, gRPC, Python, scikit-learn, redis, RabbitMQ","database":"MySQL","CI":"github actions","other":"AWS, Chrome Headless ","basicDesign":true,"detailedDesign":true,"implementation":true,"unitTest":true,"integrationTest":false,"release":true},{"id":-1,"title":"MINT","url":"","image":"./images/portfolios/mint/mint.jpg","description":"","detail":["\u65e5\u672c\u95e8\u8bca\u95f4\u75c5\u4f8b\u4ecb\u7ecd\u7ba1\u7406\u7cfb\u7edf","\u533b\u751f\u901a\u8fc7\u8bfb\u53d6\u4e13\u4e1a\u7684\u5361\u6765\u9a8c\u8bc1\u4ece\u533b\u8d44\u8d28,\u5f00\u5177\u4ecb\u7ecd\u4fe1\u65f6\u4f7f\u7528\u7535\u5b50\u7b7e\u540d\u9a8c\u8bc1","\u6574\u4f53\u91c7\u7528\u5fae\u670d\u52a1\u67b6\u6784,\u4f7f\u5404\u6a21\u5757\u89e3\u8026"],"frontend":"Vue, Ant design","backend":"golang, gRPC,Java(\u7535\u5b50\u7b7e\u540d\u6a21\u5757)","database":"MySQL","CI":"github actions","other":"AWS","basicDesign":true,"detailedDesign":true,"implementation":true,"unitTest":true,"integrationTest":true,"release":true},{"id":2,"title":"ParkCinema 1000","url":"","image":"./images/portfolios/parkcinema/p2.png","description":"\u4e3a\u5e94\u5bf9\u65b0\u51a0\u75ab\u60c5\u4e25\u91cd\u7535\u5f71\u9662\u65e0\u6cd5\u5f00\u653e\u95ee\u9898\u800c\u5f00\u53d1\u7684\u6c7d\u8f66\u7535\u5f71\u9662\u8ba2\u7968\u7cfb\u7edf","detail":["\u4e3b\u8981\u8d1f\u8d23\u524d\u6bb5\u9875\u9762\u5f00\u53d1","\u4ea4\u4ed8\u671f\u77ed\uff0c\u4ea7\u54c1\u8d28\u91cf\u8981\u6c42\u9ad8"],"frontend":"Vue,typescript,vuex","backend":"C#, .NetCore, Clean Architecture","database":"MySQL","CI":"bitbucket pipeline","other":"AWS,eks","basicDesign":false,"detailedDesign":false,"implementation":true,"unitTest":true,"integrationTest":false,"release":true},{"id":3,"title":"Koko","url":"https://koko-net.jp/","image":"./images/portfolios/koko/p2.png","description":"\u4e0d\u540c\u56fd\u5bb6\u7684\u5b69\u5b50\u5728\u6e38\u4e50\u8bbe\u65bd\u4e2d\uff0c\u901a\u8fc7Beacon\u6765\u4e86\u89e3\u5b69\u5b50\u7684\u4eb2\u5bc6\u5ea6","detail":["\u505a\u4e00\u4e2a\u6700\u7ec8\u6570\u636e\u53ef\u89c6\u5316\u7684\u62a5\u8868"],"frontend":"Vue2.0, typescript","backend":"Golang, echo, xorm","database":"MySQL","CI":"","other":"AWS,ecs","basicDesign":false,"detailedDesign":false,"implementation":true,"unitTest":true,"integrationTest":false,"release":true},{"id":4,"title":"\u591a\u8bed\u8a00\u56fd\u9645\u5316\u7ba1\u7406\u5de5\u5177","url":"https://lang-resource.grow-360.com/login","image":"./images/portfolios/resource-dashboard/p1.png","description":"\u9879\u76ee\u9700\u8981\u591a\u56fd\u8bed\u8a00\uff0c\u5f00\u53d1\u7ec4\u4e0e\u7ffb\u8bd1\u7ec4\u5171\u4eabJSON\u6587\u4ef6\u65f6\u5e38\u53d1\u751f\u51b2\u7a81\u548c\u9057\u6f0f","detail":["\u4e1a\u4f59\u65f6\u95f4\u5f00\u53d1\u7684\u4e00\u4e2a\u591a\u8bed\u8a00\u7ba1\u7406\u5de5\u5177","\u671f\u521d\u5728\u5f00\u7ec4\u5185\u90e8\u4f7f\u7528\uff0c\u540e\u63a8\u5e7f\u5230\u8fd0\u7ef4\uff0c\u7ffb\u8bd1\u7ec4\u5e7f\u6cdb\u4f7f\u7528"],"frontend":"Angular 6.0, Primeng","backend":"Golang, echo, xorm","database":"MySQL","CI":"","other":"AWS","basicDesign":true,"detailedDesign":false,"implementation":true,"unitTest":true,"integrationTest":false,"release":true},{"id":5,"title":"\u6c38\u65fa\u5356\u573a\u5185\u95e8\u5e97\u79fb\u52a8\u652f\u4ed8\u7cfb\u7edf","url":"","image":"./images/portfolios/ion-waon-card/p1.jpg","description":"\u79fb\u52a8\u7aef\u8bbe\u5907\u901a\u8fc7 Card Reader \u8bfb\u53d6\u4fe1\u7528\u5361\u4fe1\u606f\u5b8c\u6210\u79fb\u52a8\u652f\u4ed8\u7ed3\u7b97","detail":["\u4e3b\u8981\u8d1f\u8d23 iOS\u7aef\u5f00\u53d1(\u504f\u5d4c\u5165\u5f0f)\u4ee5\u53ca\u670d\u52a1\u7aef\u73af\u5883\u642d\u5efa"],"frontend":"iOS(Objective-C),Android(Java), Cordova","backend":"Java, Spring Boot2, Spring ORM","database":"Oracle 10g","CI":"","other":"Linux, Glassfish, Credit Card Reader SDK","basicDesign":false,"detailedDesign":false,"implementation":true,"unitTest":true,"integrationTest":false,"release":false}]}')},765:function(e,a,t){"use strict";t.r(a);var n=t(120),l=t(767),r=t(745),s=t(746),c=t(772),i=t(766),m=t(760),o=t(773),g=t(775),u=t(768),d=t(363),p=t(0),E=t.n(p),b=t(751),v=t.n(b),f=t(251),S=(t(250),t(784)),k=t(785),y=t(786),h=t(787),x=t(788),I=t(789),N=t(790),A=t(791),C=(t(752),l.a.Title),w=l.a.Text;a.default=function(e){var a=t(252),b=t(755),j=Object(p.useState)(a.skills),O=Object(n.a)(j,1)[0],R=Object(p.useState)(b.skillPoints),D=Object(n.a)(R,1)[0],L={marginTop:"1.5rem",paddingBottom:"0.5rem"},z=Object(p.useState)([]),P=Object(n.a)(z,2),T=P[0],M=P[1],G={width:window.innerWidth<576?"50%":"25",textAlign:"center",height:window.innerWidth<576?160:"auto"};return Object(p.useEffect)((function(){var e=t(756);M(e.projects)}),[]),E.a.createElement("article",{className:"resume-pdf-view"},E.a.createElement(l.a,null,E.a.createElement(C,null,"\u4e2a\u4eba\u7b80\u5386")),E.a.createElement(r.a,{className:"g-mt-sm"},E.a.createElement(s.a,{span:24},E.a.createElement(c.a.Ribbon,{text:"\u57fa\u672c\u4fe1\u606f",placement:"start"},E.a.createElement(i.a,{bodyStyle:L},E.a.createElement(r.a,null,E.a.createElement(s.a,{lg:5,xs:24,sm:5,md:5,className:"g-text-center"},E.a.createElement(m.a,{shape:"square",src:v.a,size:130})),E.a.createElement(s.a,{lg:19,xs:24,sm:19,md:19},E.a.createElement(o.b,null,E.a.createElement(o.b.Item,{label:"\u59d3\u540d"},"\u590f \u6654 (xi\xe0 y\xe8)"),E.a.createElement(o.b.Item,{label:"\u6027\u522b"},"\u7537"),E.a.createElement(o.b.Item,{label:"\u51fa\u751f\u5e74\u6708"},"1987-06-05"),E.a.createElement(o.b.Item,{label:"\u51fa\u751f\u5730"},"\u4e0a\u6d77"),E.a.createElement(o.b.Item,{label:"\u7535\u8bdd"},"17521134477"),E.a.createElement(o.b.Item,{label:"\u90ae\u7bb1"},"541075770@qq.com"),E.a.createElement(o.b.Item,{label:"\u5fae\u4fe1"},"yin1037"),E.a.createElement(o.b.Item,{label:"\u5de5\u4f5c\u5e74\u9650"},"9\u5e74"),E.a.createElement(o.b.Item,{label:"\u6c42\u804c\u5c97\u4f4d"},"\u5168\u6808")))))))),E.a.createElement(r.a,{className:"g-mt-sm"},E.a.createElement(s.a,{span:24},E.a.createElement(c.a.Ribbon,{text:"\u81ea\u6211\u4ecb\u7ecd",placement:"start",color:"#434343"},E.a.createElement(i.a,{bodyStyle:L},E.a.createElement("ul",null,E.a.createElement("li",null,"\u8ba1\u7b97\u673a\u57fa\u7840\u624e\u5b9e\uff0c\u5f00\u53d1\u7ecf\u9a8c\u4e30\u5bcc",E.a.createElement("span",{className:"fc-danger"},"(\u975e\u5916\u6d3e\u7c7b)")),E.a.createElement("li",null,"\u65c5\u5c45\u65e5\u672c\u591a\u5e74\uff0c\u65e5\u8bed\u63a5\u8fd1\u6bcd\u8bed\u6c34\u5e73\uff0c\u6709\u591a\u5e74\u4e0e\u65e5\u65b9\u5546\u52a1\u8c08\u5224\u7ecf\u9a8c"),E.a.createElement("li",null,"\u5f00\u53d1\u7ecf\u4e30\u5bcc\uff0c\u5728\u56e2\u961f\u4e00\u76f4\u62c5\u5f53Tech Leader"),E.a.createElement("li",null,"\u6280\u672f\u5168\u9762\u5355\u6311\u5b9e\u529b\u5f3a\uff0c\u72ec\u7acb\u548c\u65e5\u672c\u5ba2\u6237\u8c08\u9879\u76ee\u4e00\u4e2a\u4eba\u53ef\u4ee5\u5b8c\u6210\u6574\u4e2a\u9879\u76ee\u7684\u5f00\u53d1\uff0c\u6d4b\u8bd5\uff0c\u4e0a\u7ebf"),E.a.createElement("li",null,"\u6c38\u8fdc\u5bf9\u6280\u672f\u5145\u6ee1\u597d\u5947\u5fc3\u4ee5\u53ca\u5b66\u4e60\u70ed\u60c5\uff0c\u638c\u63e1\u5e02\u9762\u4e0a\u5927\u90e8\u5206\u4e3b\u6d41\u5f00\u53d1\u6280\u672f(C++\u9664\u5916)"),E.a.createElement("li",null,"\u624b\u901f\u5feb\uff0c\u5f00\u53d1\u6548\u7387\u5947\u9ad8\uff0c\u4e00\u4e2a\u6708\u540c\u65f6\u5e72\u8fc74\u4e2a\u9879\u76ee"),E.a.createElement("li",null,"\u6709\u8fc7\u6280\u672f\u8bb2\u5e08\u7ecf\u9a8c\uff0c\u7406\u89e3\u65b0\u4eba\u5e38\u89c1\u95ee\u9898\u4ee5\u53ca\u75db\u70b9")))))),E.a.createElement(r.a,{className:"g-mt-sm"},E.a.createElement(s.a,{span:24},E.a.createElement(c.a.Ribbon,{text:"\u6559\u80b2\u30fb\u804c\u5386",placement:"start",color:"lime"},E.a.createElement(i.a,{bodyStyle:L},E.a.createElement(g.a,null,E.a.createElement(g.a.Item,{dot:E.a.createElement(S.a,null)},"2018.6 ~ 2021.10 (\u65e5) \u682a\u5f0f\u4f1a\u793eInstitution for a Global Society(\u5df2\u4e0a\u5e02)"),E.a.createElement(g.a.Item,{dot:E.a.createElement(S.a,null)},"2013.6 ~ 2018.5\u3000(\u65e5) \u682a\u5f0f\u4f1a\u793ePowerStar"),E.a.createElement(g.a.Item,{dot:E.a.createElement(S.a,null)},"2010.4 ~ 2013.6\u3000(\u4e2d) \u4e0a\u6d77NCS\u8ba1\u7b97\u673a\u4fe1\u606f\u6709\u9650\u516c\u53f8"),E.a.createElement(g.a.Item,{dot:E.a.createElement(k.a,{className:"force-fc-danger"})},"2009.3 ~ 2010.3\u3000\u65e5\u672c\u5927\u962a\u65e5\u8bed\u7814\u4fee"),E.a.createElement(g.a.Item,{dot:E.a.createElement(k.a,{className:"force-fc-danger"})},"2008.1 ~ 2009.1\u3000\u5728\u6821\u671f\u95f4\u8f6f\u4ef6\u5f00\u53d1\u57f9\u8bad"),E.a.createElement(g.a.Item,{dot:E.a.createElement(k.a,{className:"force-fc-danger"})},"2005.9 ~ 2008.7\u3000\u4e0a\u6d77\u5efa\u5cf0\u804c\u4e1a\u6280\u672f\u5b66\u9662(\u5927\u4e13)\u5546\u52a1\u65e5\u8bed\u4e13\u4e1a")))))),E.a.createElement(r.a,{className:"g-mt-sm"},E.a.createElement(s.a,{span:24},E.a.createElement(c.a.Ribbon,{text:"\u8bed\u8a00\u80fd\u529b",placement:"start",color:"magenta"},E.a.createElement(i.a,{bodyStyle:L},E.a.createElement(r.a,{gutter:[16,16]},E.a.createElement(s.a,{lg:8,xs:24,sm:8,md:8,className:"g-text-center"},E.a.createElement(m.a,{size:24,src:"./images/flag/china.svg"}),E.a.createElement("ul",{className:"g-text-left"},E.a.createElement("li",null,"\u6bcd\u8bed"),E.a.createElement("li",null,"2\u5e74\u516c\u53f8\u5185\u90e8\u57f9\u8bad\u8bb2\u5e08\u7ecf\u9a8c"))),E.a.createElement(s.a,{lg:8,xs:24,sm:8,md:8,className:"g-text-center"},E.a.createElement(m.a,{size:24,src:"./images/flag/japan.svg",className:"g-mr-xs-force"}),E.a.createElement("ul",{className:"g-text-left"},E.a.createElement("li",null,"\u65e5\u8bed1\u7ea7\uff0c\u5927\u5b66\u65f6\u53c2\u52a0\u8fc7\u65e5\u8bed\u914d\u97f3\u6d3b\u52a8"),E.a.createElement("li",null,"\u65e5\u672c\u8fd110\u5e74\u751f\u6d3b\u7ecf\u9a8c\uff0c\u63a5\u8fd1\u6bcd\u8bed\u6c34\u5e73"),E.a.createElement("li",null,"\u53ef\u72ec\u7acb\u5904\u7406\u65e5\u5e38\u751f\u6d3b\u4ee5\u53ca\u5546\u52a1\u8c08\u5224"))),E.a.createElement(s.a,{lg:8,xs:24,sm:8,md:8,className:"g-text-center"},E.a.createElement(m.a,{size:24,src:"./images/flag/united-states.svg",className:"g-mr-xs-force"}),E.a.createElement("ul",{className:"g-text-left"},E.a.createElement("li",null,"\u719f\u7ec3\u8bfb\u5199\u5f00\u53d1\u7c7b\u6280\u672f\u6587\u6863"),E.a.createElement("li",null,"\u7b80\u5355\u65e5\u5e38\u4f1a\u8bdd"),E.a.createElement("li",null,"Github\uff0cStack Overflow \u5e38\u5ba2")))))))),E.a.createElement(r.a,{className:"g-mt-sm page-break"},E.a.createElement(s.a,{span:24},E.a.createElement(c.a.Ribbon,{text:"\u4f18\u52bf&\u6280\u672f\u7279\u957f",placement:"start",color:"volcano"},E.a.createElement(i.a,null,E.a.createElement("div",{className:"g-py-sm"},E.a.createElement(i.a,{title:"\u4f18\u52bf",size:"small"},E.a.createElement(i.a.Grid,{style:G},E.a.createElement(y.a,{className:"g-fs-56",style:{color:"#fa8c16"}}),E.a.createElement("div",{className:"g-pt-sm"},"\u72ec\u7acb\u5f00\u53d1\u8005\uff0c\u81ea\u6211\u5b66\u4e60\uff0c\u5f00\u62d3\u80fd\u529b")),E.a.createElement(i.a.Grid,{style:G},E.a.createElement(h.a,{className:"g-fs-56",style:{color:"#595959"}}),E.a.createElement("div",{className:"g-pt-sm"},"\u547d\u4ee4\u884c\u73a9\u5f97\u6e9c")),E.a.createElement(i.a.Grid,{style:G},E.a.createElement(x.a,{className:"g-fs-56",style:{color:"#eb2f96"}}),E.a.createElement("div",{className:"g-pt-sm"},"UI\u8bbe\u8ba1\u5f00\u53d1")),E.a.createElement(i.a.Grid,{style:G},E.a.createElement(I.a,{className:"g-fs-56",style:{color:"#1890ff"}}),E.a.createElement("div",{className:"g-pt-sm"},"\u67b6\u6784\u8bbe\u8ba1\uff0c\u5f00\u53d1")),E.a.createElement(i.a.Grid,{style:G},E.a.createElement(N.a,{className:"g-fs-56",style:{color:"#f5222d"}}),E.a.createElement("div",{className:"g-pt-sm"},"\u6027\u80fd\u4f18\u5316")),E.a.createElement(i.a.Grid,{style:G},E.a.createElement(A.a,{className:"g-fs-56",style:{color:"#52c41a"}}),E.a.createElement("div",{className:"g-pt-sm"},"\u6570\u636e\u53ef\u89c6\u5316")))),E.a.createElement(u.b,{itemLayout:"horizontal",dataSource:D,renderItem:function(e){return E.a.createElement(u.b.Item,null,E.a.createElement(u.b.Item.Meta,{avatar:E.a.createElement("img",{src:"./images/programming-language/".concat(e.icon),style:{width:"30px"}}),title:E.a.createElement("b",{className:"g-fs-16"},e.lang),description:e.desc.map((function(e){return E.a.createElement(d.a,null,e)}))}))}}))))),E.a.createElement(r.a,{className:"g-mt-sm page-break"},E.a.createElement(s.a,{span:24,className:"page-break"},E.a.createElement(c.a.Ribbon,{text:"\u9879\u76ee\u7ecf\u9a8c",placement:"start",color:"orange"},E.a.createElement(i.a,{bodyStyle:L},E.a.createElement(u.b,{itemLayout:"vertical",size:"large",dataSource:T,renderItem:function(e,a){return E.a.createElement(u.b.Item,{key:e.id,extra:E.a.createElement("img",{loading:"lazy",src:e.image,style:{maxWidth:"272px",height:"200px"},alt:e.title})},E.a.createElement(u.b.Item.Meta,{avatar:E.a.createElement(m.a,{shape:"square",src:"./images/project-career.svg"}),description:e.description,title:E.a.createElement("span",null,"".concat(a+1,". ").concat(e.title))}),E.a.createElement("ul",{className:"project-list-view__teck-list"},E.a.createElement("li",null,E.a.createElement("label",null,"\u8be6\u7ec6:"),E.a.createElement("p",{className:"project-list-view__teck-project-detail",dangerouslySetInnerHTML:{__html:e.detail.join("<br/>")||""}})),E.a.createElement("li",null,E.a.createElement("label",null,"Frontend:"),E.a.createElement("span",null,e.frontend)),E.a.createElement("li",null,E.a.createElement("label",null,"Backend: "),E.a.createElement("span",null,e.backend)),E.a.createElement("li",null,E.a.createElement("label",null,"DB: "),E.a.createElement("span",null,e.database)),e.CI?E.a.createElement("li",null,E.a.createElement("label",null,"CI: "),E.a.createElement("span",null,e.CI)):null,e.other?E.a.createElement("li",null,E.a.createElement("label",null,"Other: "),E.a.createElement("span",null,e.other)):null))}}))))),E.a.createElement(r.a,{className:"g-mt-sm page-break"},E.a.createElement(s.a,{span:24},E.a.createElement(c.a.Ribbon,{text:"\u6280\u80fd\u6811",placement:"start",color:"purple"},E.a.createElement(i.a,{bodyStyle:L},E.a.createElement(f.a,{title:"\u8bed\u8a00\u6280\u80fd\u56fe",dataSource:O,axis:{xLabel:"\u4f7f\u7528\u5e74\u6570",yLabel:"\u719f\u7ec3\u5ea6"}}))))),E.a.createElement(r.a,{className:"g-mt-sm page-break"},E.a.createElement(s.a,{span:24},E.a.createElement(c.a.Ribbon,{text:"\u751f\u6d3b\u7231\u597d",placement:"start",color:"#13c2c2"},E.a.createElement(i.a,{bodyStyle:L},E.a.createElement(r.a,null,E.a.createElement(s.a,{lg:8,xs:24,sm:8,md:8,className:"g-text-center"},E.a.createElement(C,{level:3},"\u64b8\u94c1"),E.a.createElement(w,{mark:!0},"\u5367\u63a8: 150kg\u3000\u6df1\u8e72: 140kg\u3000\u786c\u62c9: 180kg"),E.a.createElement("div",{className:"g-mt-sm"}),E.a.createElement(m.a,{shape:"square",src:"./images/life/muscle.jpg",size:240})),E.a.createElement(s.a,{lg:8,xs:24,sm:8,md:8,className:"g-text-center"},E.a.createElement(C,{level:3},"\u5199\u7a0b\u5e8f"),E.a.createElement(w,{mark:!0},"\u7528HHKB\u6ca1\u6709\u83dc\u9e1f\uff0c\u61c2\u5f97\u81ea\u7136\u61c2"),E.a.createElement("div",{className:"g-mt-sm"}),E.a.createElement(m.a,{shape:"square",src:"./images/life/coding.jpg",size:240})),E.a.createElement(s.a,{lg:8,xs:24,sm:8,md:8,className:"g-text-center"},E.a.createElement(C,{level:3},"\u6e38\u620f"),E.a.createElement(w,{mark:!0},"\u62b5\u5236\u76d7\u7248\uff0c\u8fd9\u662f\u4e00\u79cd\u6001\u5ea6"),E.a.createElement("div",{className:"g-mt-sm"}),E.a.createElement(m.a,{shape:"square",src:"./images/life/game.jpg",size:240}))))))))}}}]);
//# sourceMappingURL=7.1facd0e1.chunk.js.map