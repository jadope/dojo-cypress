(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-172dbdeb"],{3097:function(t,e,s){"use strict";var a=s("4636"),r=s.n(a);r.a},4636:function(t,e,s){},d176:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-navbar",{attrs:{toggleable:"lg",type:"dark",id:"navbarr"}},[s("b-navbar-brand",{attrs:{href:"/"}},[s("img",{attrs:{src:"https://http2.mlstatic.com/storage/developers-site-cms-admin/322394706358-logo--small-v2.png",width:"60px",alt:""}}),t._v(" Jerónimo's Shopping ")])],1),s("h1",{attrs:{id:"titulo"}},[t._v(t._s(t.item.title)+" ")]),s("div",{attrs:{id:"infoProduct"}},[s("img",{attrs:{src:t.photos[0].url}}),s("h3",[t._v("Precio: $"+t._s(t.item.price))]),s("h3",[t._v("Estado: "+t._s(t.item.condition))]),s("h3",[t._v(t._s(t.item.warranty))]),s("h3",[t._v("Productos disponibles: "+t._s(t.item.available_quantity))]),s("hr"),s("h2",[t._v("Información del vendedor:")]),s("h3",[t._v("Ubicación: "+t._s(t.seller.address.city)+", "+t._s(t.seller.address.state))]),s("h3",[t._v("Cantidad de ventas concretadas: "+t._s(t.seller.seller_reputation.transactions.completed))]),s("h3",[t._v("Cantidad de ventas canceladas: "+t._s(t.seller.seller_reputation.transactions.canceled))])])],1)},r=[],i=s("bc3a"),n=s.n(i),l={data:function(){return{urlItem:this.$route.params.Id,item:"",photos:[],sellerId:null,seller:null}},mounted:function(){var t=this;console.log(this.$route.params.itemId),n.a.get("https://api.mercadolibre.com/items/"+this.urlItem).then((function(e){t.item=e.data,t.photos=e.data.pictures,t.sellerId=t.item.seller_id,t.getSellerInfo()}))},methods:{getSellerInfo:function(){var t=this;n.a.get("https://api.mercadolibre.com/users/"+this.sellerId).then((function(e){t.seller=e.data}))}}},o=l,d=(s("3097"),s("2877")),c=Object(d["a"])(o,a,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-172dbdeb.87282934.js.map