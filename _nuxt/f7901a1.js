(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{179:function(e,t,n){"use strict";var r=n(3),l=(n(37),n(36),n(18),n(39),n(19),n(40),n(64),n(186)),o=n.n(l),c={data:function(){return{}},computed:{data:function(){return this.$store.state.data},item:function(){for(var e=this.$route.name,t=Object.keys(this.$route.params),i=0;i<t.length;i++)e+=this.$route.params[t[i]];return this.$store.state.data[e]},members:function(){return this.$store.state.data.members}},head:function(){return{title:this.getMetaTitle(),meta:[{hid:"description",name:"description",content:this.getMetaDesc()},{hid:"keyword",name:"keyword",content:this.getMetaKeywords()},{property:"og:description",content:this.getMetaDesc(),vmid:"og:description"},{property:"og:title",content:this.getMetaTitle(),vmid:"og:title"},{property:"og:image",content:this.getMetaImage(),vmid:"og:image"}]}},methods:{linkify:function(e){return e?"http"!==e.substring(0,4)?"http://".concat(e):e:"/"},shuffle:function(e){var t,n,i=e.length;if(0==i)return e;for(;--i;)t=Math.floor(Math.random()*(i+1)),n=e[i],e[i]=e[t],e[t]=n;return e},checkForIdentity:function(){return!!this.$store.state.data.identity||(console.warn("[base] no identity loaded"),!1)},getMetaTitle:function(){return this.$store.state.meta.title},getMetaDesc:function(){if(this.checkForIdentity())return this.$store.state.data.identity.short_description},getMetaImage:function(){if(this.checkForIdentity())return this.$store.state.data.identity.default_image.data.full_url},getMetaKeywords:function(){if(this.checkForIdentity())return this.$store.state.data.identity.keywords},handleError:function(e){console.log("error",e)}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l,c,m,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.store,r=e.route,e.params,e.query,e.env,e.isDev,e.isHMR,e.redirect,e.error,console.log("[store] route name",r.name),n.state.routes){t.next=5;break}return console.warn("[store] store has no API routes defined"),t.abrupt("return",{});case 5:if(l=n.state.routes[r.name]){t.next=9;break}return console.warn("[store] no route config for",r.name),t.abrupt("return",{});case 9:for(c=[],m=function(i){var e=l.list[i],t=n.state.api[e],m="list"===t.type,d="item"===t.type,v=e,f=t.url;if(d)for(var h=0;h<Object.keys(r.params).length;h++){var x=Object.keys(r.params)[h];f=f.replace(":".concat(x),r.params[x]),v+=r.params[x]}if(t){var M=new Promise((function(t,r){void 0!==n.state.data[v]?(console.log("[store] already have",e),t(n.state.data[v])):o.a.get(f).then((function(e){var data=m?e.data.data:e.data.data[0];if(console.log("[store]",v,f),n.commit("set",{key:v,data:data}),void 0===n.state.data[v]){var l="could not load API data into store";n.commit("set",{key:v,data:{error:!0,msg:l}}),r(l)}else if(data)t(n.state.data[v]);else{var o="no data was found for this";n.commit("set",{key:v,data:{error:!0,msg:o}}),r(o)}})).catch((function(e){console.error("[store]","could not get",f),r(e)}))}));c.push(M)}else console.warn("no api endpoint for",name)},i=0;i<l.list.length;i++)m(i);return t.abrupt("return",Promise.all(c).then((function(){})).catch((function(e){console.log(e)})));case 13:case"end":return t.stop()}}),t)})))()},components:{},mounted:function(){}},m=n(8),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"base"}},[e._v(e._s(e.data))])}),[],!1,null,null,null);t.a=component.exports},202:function(e,t,n){e.exports=n.p+"img/mask.36f23da.png"},223:function(e,t,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("2c82739c",content,!0,{sourceMap:!1})},256:function(e,t,n){"use strict";n(223)},257:function(e,t,n){var r=n(62)(!1);r.push([e.i,".diagonal{overflow:auto;height:100vh;width:100vw;position:fixed;transform-origin:0 0;transform:rotate(-10deg)}.diagonal .diagonal-inner .text{padding:8em 0;display:block;height:6000px;overflow:hidden;width:100vw;transform:rotate(10deg);transform-origin:0 0}.diagonal .diagonal-inner .text .text-inner{display:inline;font-size:2em}.diagonal .diagonal-inner .text .text-shape-A{float:left;display:block;shape-outside:polygon(0 0,100% 100%,0 100%);width:50%;height:6000px}.diagonal .diagonal-inner .text .text-shape-B{float:right;display:block;shape-outside:polygon(0 0,100% 100%,100% 0);width:50%;height:6000px}",""]),e.exports=r},269:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"diagonal",attrs:{id:"homepage"}},[r("div",{staticClass:"diagonal-inner"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"text"},[r("div",{staticClass:"text-shape-A"}),r("div",{staticClass:"text-shape-B"}),r("div",{staticClass:"text-inner"},[r("span",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas consequat ligula, vitae suscipit felis mollis vel. Vestibulum vel orci elit. Donec vitae ligula sit amet arcu pulvinar finibus. Aenean dignissim tincidunt metus, vitae tincidunt orci sodales luctus. In hac habitasse platea dictumst. Pellentesque augue enim, rutrum id tempor ac, interdum eget ante. Vivamus eu augue sed sapien egestas sodales. Sed sed mi aliquam, aliquet dolor at, ultrices diam. Cras id urna in urna tempus condimentum. Vivamus nibh nibh, mollis ut purus sed, mollis maximus libero. Nam ac metus molestie ex finibus sollicitudin. Curabitur tincidunt lacinia diam ut rutrum. In ac neque sit amet libero tristique dignissim. Phasellus id orci diam. Pellentesque vel convallis quam. Aliquam fringilla metus mi, in tincidunt justo efficitur in. Integer dapibus elementum rhoncus. Sed sit amet venenatis lacus. Nulla at porttitor elit. Aenean in pulvinar lectus. Duis nec luctus tellus. Pellentesque non libero id eros imperdiet vestibulum non vitae urna. Fusce felis nisi, elementum nec ex non, posuere molestie quam. Pellentesque nec sodales erat. Sed a tellus commodo, viverra felis at, tincidunt nunc. Proin at metus sed ante maximus gravida. Cras facilisis eleifend convallis. Pellentesque nec ultrices dui. In hac habitasse platea dictumst. Morbi condimentum, quam in vehicula faucibus, leo nisi condimentum dui, ut ultrices leo orci at elit. Donec a varius elit, nec molestie mauris. Phasellus vitae tempor turpis, non hendrerit nunc. Sed finibus ac magna non dignissim. Vivamus bibendum ornare faucibus. Suspendisse in nisi at purus suscipit vehicula. Ut vitae ligula non nulla gravida dignissim non venenatis enim. Ut ut ullamcorper mi, eget faucibus felis. Mauris et molestie erat, at convallis felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ut risus a orci sollicitudin congue. Nulla at arcu sollicitudin, tempor augue sit amet, mattis sapien. Nulla porttitor dignissim rhoncus. Integer gravida, lacus vel eleifend aliquet, ipsum lectus pretium ipsum, a vestibulum arcu orci eu felis. Etiam bibendum augue at purus euismod, at tincidunt mi auctor. Morbi eget tellus ex. In et nibh lectus. Proin sed felis arcu. Aliquam et ligula nulla. Cras non quam efficitur, ornare erat viverra, pretium massa. Morbi vitae auctor neque, ut varius enim. Quisque a ex ac lorem egestas tristique. Sed elit urna, semper id ex eu, consectetur porta nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi fermentum rutrum ex ut fermentum. Quisque volutpat risus vel imperdiet porttitor. Nunc ut laoreet massa, sed vestibulum nulla. Etiam ipsum libero, faucibus a urna sit amet, tempus gravida lacus. Proin dui est, consectetur a scelerisque a, consequat non odio. Maecenas venenatis mollis velit, nec blandit mauris fermentum id. Nullam vehicula augue a pulvinar rhoncus. Phasellus ut lacus id ipsum maximus semper vitae a magna. Mauris venenatis dolor ultricies, molestie tellus sit amet, consectetur lectus. Mauris euismod libero massa, a sollicitudin massa auctor non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas consequat ligula, vitae suscipit felis mollis vel. Vestibulum vel orci elit. Donec vitae ligula sit amet arcu pulvinar finibus. Aenean dignissim tincidunt metus, vitae tincidunt orci sodales luctus. In hac habitasse platea dictumst. Pellentesque augue enim, rutrum id tempor ac, interdum eget ante. Vivamus eu augue sed sapien egestas sodales. Sed sed mi aliquam, aliquet dolor at, ultrices diam. Cras id urna in urna tempus condimentum. Vivamus nibh nibh, mollis ut purus sed, mollis maximus libero. Nam ac metus molestie ex finibus sollicitudin. Curabitur tincidunt lacinia diam ut rutrum. In ac neque sit amet libero tristique dignissim. Phasellus id orci diam. Pellentesque vel convallis quam. Aliquam fringilla metus mi, in tincidunt justo efficitur in. Integer dapibus elementum rhoncus. Sed sit amet venenatis lacus. Nulla at porttitor elit. Aenean in pulvinar lectus. Duis nec luctus tellus. Pellentesque non libero id eros imperdiet vestibulum non vitae urna. Fusce felis nisi, elementum nec ex non, posuere molestie quam. Pellentesque nec sodales erat. Sed a tellus commodo, viverra felis at, tincidunt nunc. Proin at metus sed ante maximus gravida. Cras facilisis eleifend convallis. Pellentesque nec ultrices dui. In hac habitasse platea dictumst. Morbi condimentum, quam in vehicula faucibus, leo nisi condimentum dui, ut ultrices leo orci at elit. Donec a varius elit, nec molestie mauris. Phasellus vitae tempor turpis, non hendrerit nunc. Sed finibus ac magna non dignissim. Vivamus bibendum ornare faucibus. Suspendisse in nisi at purus suscipit vehicula. Ut vitae ligula non nulla gravida dignissim non venenatis enim. Ut ut ullamcorper mi, eget faucibus felis. Mauris et molestie erat, at convallis felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ut risus a orci sollicitudin congue. Nulla at arcu sollicitudin, ")]),r("img",{attrs:{src:n(202)}}),r("span",[e._v("tempor augue sit amet, mattis sapien. Nulla porttitor dignissim rhoncus. Integer gravida, lacus vel eleifend aliquet, ipsum lectus pretium ipsum, a vestibulum arcu orci eu felis. Etiam bibendum augue at purus euismod, at tincidunt mi auctor. Morbi eget tellus ex. In et nibh lectus. Proin sed felis arcu. Aliquam et ligula nulla. Cras non quam efficitur, ornare erat viverra, pretium massa. Morbi vitae auctor neque, ut varius enim. Quisque a ex ac lorem egestas tristique. Sed elit urna, semper id ex eu, consectetur porta nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi fermentum rutrum ex ut fermentum. Quisque volutpat risus vel imperdiet porttitor. Nunc ut laoreet massa, sed vestibulum nulla. Etiam ipsum libero, faucibus a urna sit amet, tempus gravida lacus. Proin dui est, consectetur a scelerisque a, consequat non odio. Maecenas venenatis mollis velit, nec blandit mauris fermentum id. Nullam vehicula augue a pulvinar rhoncus. Phasellus ut lacus id ipsum maximus semper vitae a magna. Mauris venenatis dolor ultricies, molestie tellus sit amet, consectetur lectus. Mauris euismod libero massa, a sollicitudin massa auctor non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas consequat ligula, vitae suscipit felis mollis vel. Vestibulum vel orci elit. Donec vitae ligula sit amet arcu pulvinar finibus. Aenean dignissim tincidunt metus, vitae tincidunt orci sodales luctus. In hac habitasse platea dictumst. Pellentesque augue enim, rutrum id tempor ac, interdum eget ante. Vivamus eu augue sed sapien egestas sodales. Sed sed mi aliquam, aliquet dolor at, ultrices diam. Cras id urna in urna tempus condimentum. Vivamus nibh nibh, mollis ut purus sed, mollis maximus libero. Nam ac metus molestie ex finibus sollicitudin. Curabitur tincidunt lacinia diam ut rutrum. In ac neque sit amet libero tristique dignissim. Phasellus id orci diam. Pellentesque vel convallis quam. Aliquam fringilla metus mi, in tincidunt justo efficitur in. Integer dapibus elementum rhoncus. Sed sit amet venenatis lacus. Nulla at porttitor elit. Aenean in pulvinar lectus. Duis nec luctus tellus. Pellentesque non libero id eros imperdiet vestibulum non vitae urna. Fusce felis nisi, elementum nec ex non, posuere molestie quam. Pellentesque nec sodales erat. Sed a tellus commodo, viverra felis at, tincidunt nunc. Proin at metus sed ante maximus gravida. Cras facilisis eleifend convallis. Pellentesque nec ultrices dui. In hac habitasse platea dictumst. Morbi condimentum, quam in vehicula faucibus, leo nisi condimentum dui, ut ultrices leo orci at elit. Donec a varius elit, nec ")]),r("img",{attrs:{src:n(202)}}),r("span",[e._v("molestie mauris. Phasellus vitae tempor turpis, non hendrerit nunc. Sed finibus ac magna non dignissim. Vivamus bibendum ornare faucibus. Suspendisse in nisi at purus suscipit vehicula. Ut vitae ligula non nulla gravida dignissim non venenatis enim. Ut ut ullamcorper mi, eget faucibus felis. Mauris et molestie erat, at convallis felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ut risus a orci sollicitudin congue. Nulla at arcu sollicitudin, tempor augue sit amet, mattis sapien. Nulla porttitor dignissim rhoncus. Integer gravida, lacus vel eleifend aliquet, ipsum lectus pretium ipsum, a vestibulum arcu orci eu felis. Etiam bibendum augue at purus euismod, at tincidunt mi auctor. Morbi eget tellus ex. In et nibh lectus. Proin sed felis arcu. Aliquam et ligula nulla. Cras non quam efficitur, ornare erat viverra, pretium massa. Morbi vitae auctor neque, ut varius enim. Quisque a ex ac lorem egestas tristique. Sed elit urna, semper id ex eu, consectetur porta nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi fermentum rutrum ex ut fermentum. Quisque volutpat risus vel imperdiet porttitor. Nunc ut laoreet massa, sed vestibulum nulla. Etiam ipsum libero, faucibus a urna sit amet, tempus gravida lacus. Proin dui est, consectetur a scelerisque a, consequat non odio. Maecenas venenatis mollis velit, nec blandit mauris fermentum id. Nullam vehicula augue a pulvinar rhoncus. Phasellus ut lacus id ipsum maximus semper vitae a magna. Mauris venenatis dolor ultricies, molestie tellus sit amet, consectetur lectus. Mauris euismod libero massa, a sollicitudin massa auctor non.")])])])])])])}],l={extends:n(179).a,components:{}},o=(n(256),n(8)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),r,!1,null,null,null);t.default=component.exports}}]);