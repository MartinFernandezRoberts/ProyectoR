var e=Object.defineProperty,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,t=(n,r,a)=>r in n?e(n,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[r]=a,o=(e,o)=>{for(var i in o||(o={}))r.call(o,i)&&t(e,i,o[i]);if(n)for(var i of n(o))a.call(o,i)&&t(e,i,o[i]);return e};import{o as i,c as l,a as s,E as c,F as d,r as u,d as p,b as m,f as g,t as h,h as b,i as f,j as x,s as y,m as v,n as k,q as w,u as B,x as C,y as I,z as D,g as j,k as A,Q as S,v as F,l as E,p as $,e as U,w as z,H as O,I as q,M as _}from"./vendor.5bda7e88.js";import{d as M,e as P,V,_ as G,a as R,b as T,c as L,f as H,g as N}from"./IsotipoIcon.6c8e2631.js";const W={name:"Panel",components:{SandwichIcon:M,IsotipoIcon:P},data:()=>({links:["items","banners"],menu:!1}),methods:{capitalize:e=>e.charAt(0).toUpperCase()+e.slice(1)}},Q={class:"\r\n            flex flex-wrap flex-col\r\n            md:flex-row\r\n            justify-between\r\n            md:items-center\r\n            bg-black\r\n            p-4\r\n            md:p-6\r\n            text-white\r\n        "},J={class:"flex items-center"},K={href:"/"},X=s("span",{class:"text-pink-600 font-bold mx-1"}," >",-1),Y=g("Panel de Control "),Z={key:0,class:"mx-2 hidden md:inline"},ee=s("span",{class:"mr-4 h-px flex-1 md:hidden bg-pink-600"},null,-1);W.render=function(e,n,r,a,t,o){const b=p("IsotipoIcon"),f=p("router-link"),x=p("SandwichIcon"),y=p("router-view");return i(),l(d,null,[s("nav",Q,[s("div",J,[s("a",K,[s(b,{class:"w-12 text-white"})]),s(f,{class:"text-sm md:text-base",to:"/panel"},{default:c((()=>[X,Y])),_:1}),s(x,{class:"ml-auto h-4 md:hidden cursor-pointer",onClick:n[1]||(n[1]=e=>t.menu=!t.menu)})]),s("nav",{class:["mt-4 md:mt-0 md:block",{hidden:!t.menu}]},[(i(!0),l(d,null,u(t.links,((e,r)=>(i(),l("div",{key:r,class:"flex items-center md:inline"},[r>0?(i(),l("span",Z,"|")):m("",!0),ee,s(f,{to:`/panel/${e}`,"active-class":"text-pink-600 font-bold",onClick:n[2]||(n[2]=e=>t.menu=!1)},{default:c((()=>[g(h(o.capitalize(e)),1)])),_:2},1032,["to"])])))),128))],2)]),s(y)],64)};const ne={name:"EstadoMenu",props:{id:String,estado:String},emits:["cargar"],methods:{cambiarEstado(e){b.post(`http://localhost:3000/api/items/${this.id}/cambiarEstado`,{estado:e}).then((e=>{console.log(e.data),this.$emit("cargar")})).catch((e=>{console.error(e)}))},eliminar(){b.delete(`http://localhost:3000/api/items/${this.id}`).then((e=>{console.log(e.data),this.$emit("cargar")})).catch((e=>{console.error(e)}))}}};ne.render=function(e,n,r,a,t,o){return i(),l("div",null,[f(s("button",{class:"\r\n                px-4\r\n                py-2\r\n                rounded-lg\r\n                bg-blue-300\r\n                text-white\r\n                font-bold\r\n                transition-colors\r\n                duration-200\r\n                ease-out\r\n            ",type:"button",onClick:n[1]||(n[1]=e=>o.cambiarEstado("publicado"))}," Publicar ",512),[[x,"publicado"!==r.estado]]),f(s("button",{class:"\r\n                px-4\r\n                py-2\r\n                rounded-lg\r\n                bg-yellow-500\r\n                text-gray-700\r\n                font-bold\r\n                transition-colors\r\n                duration-200\r\n                ease-out\r\n            ",type:"button",onClick:n[2]||(n[2]=e=>o.cambiarEstado("bajado"))}," Bajar ",512),[[x,"bajado"!==r.estado]]),s("button",{class:"\r\n                px-4\r\n                py-2\r\n                rounded-lg\r\n                bg-red-700\r\n                font-bold\r\n                text-white\r\n                transition-colors\r\n                duration-200\r\n                ease-out\r\n            ",type:"button",onClick:n[3]||(n[3]=(...e)=>o.eliminar&&o.eliminar(...e))}," Eliminar ")])};const re={name:"InfoForm",props:{info:Object,errores:Object},emits:["update","update:detalles"],data:()=>({tipos:{Casa:"Casa",Wheels:"Vehículo",Otro:"Otro"},comunas:[]}),created(){b("https://apis.digital.gob.cl/dpa/comunas").then((e=>this.comunas=e.data.map((e=>e.nombre))))}},ae={class:"\r\n            px-4\r\n            py-2\r\n            flex flex-col\r\n            border-r border-b border-l-2 border-gray-500\r\n            text-gray-700\r\n            space-y-2\r\n        "},te={class:"flex flex-col space-y-1.5"},oe=s("label",{class:"text-sm font-bold",for:"tipo"},"Categoría",-1),ie=s("option",{value:"",disabled:"",selected:"",hidden:""}," Selecciona una categoría ",-1),le={class:"flex flex-col space-y-1.5"},se=s("label",{class:"text-sm font-bold",for:"titulo"},"Título",-1),ce={class:"flex flex-col space-y-1.5"},de=s("label",{class:"text-sm font-bold",for:"descripcion"}," Descripción ",-1),ue={class:"flex flex-col space-y-1.5"},pe=s("label",{class:"text-sm font-bold",for:"comuna"},"Comuna",-1),me={id:"lista-comuna"};re.render=function(e,n,r,a,t,o){return i(),l("form",ae,[s("div",te,[oe,s("select",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"text-gray-400":!r.info.tipo}],id:"tipo",value:r.info.tipo,onChange:n[1]||(n[1]=n=>(e.$emit("update","info","tipo",n.target.value),e.$emit("update:detalles")))},[ie,(i(!0),l(d,null,u(t.tipos,((e,n)=>(i(),l("option",{key:n,class:"text-gris",value:n},h(e),9,["value"])))),128))],42,["value"]),f(s("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-red-400\r\n                    text-center text-white\r\n                "},h(r.errores.tipo),513),[[x,r.errores.tipo]])]),s("div",le,[se,s("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-red-400":r.errores.titulo}],type:"text",id:"titulo",placeholder:"Título",value:r.info.titulo,onInput:n[2]||(n[2]=n=>e.$emit("update","info","titulo",n.target.value))},null,42,["value"]),f(s("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-red-400\r\n                    text-center text-white\r\n                "},h(r.errores.titulo),513),[[x,r.errores.titulo]])]),s("div",ce,[de,s("textarea",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-red-400":r.errores.descripcion}],id:"descripcion",placeholder:"Descripción",value:r.info.descripcion,onInput:n[3]||(n[3]=n=>e.$emit("update","info","descripcion",n.target.value))},null,42,["value"]),f(s("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-red-400\r\n                    text-center text-white\r\n                "},h(r.errores.descripcion),513),[[x,r.errores.descripcion]])]),s("div",ue,[pe,s("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-red-400":r.errores.comuna}],type:"text",id:"comuna",placeholder:"Comuna",list:"lista-comuna",value:r.info.comuna,onInput:n[4]||(n[4]=n=>e.$emit("update","info","comuna",n.target.value))},null,42,["value"]),s("datalist",me,[(i(!0),l(d,null,u(t.comunas,((e,n)=>(i(),l("option",{key:n,value:e},null,8,["value"])))),128))]),f(s("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-red-400\r\n                    text-center text-white\r\n                "},h(r.errores.comuna),513),[[x,r.errores.comuna]])])])},y(v);const ge={ubicacion:k().required(),orientacion:k().nullable(),area:w().required().positive(),construido:w().nullable().positive(),wc:w().required().positive(),estacionamiento:w().nullable().positive(),dormitorio:w().required().positive(),piso:w().required().positive(),gastosComunes:w().nullable().positive(),bodega:B().nullable(),mascotas:B().nullable(),calefaccion:B().nullable(),cocina:B().nullable(),terraza:B().nullable(),balcon:B().nullable(),piscina:B().nullable(),quincho:B().nullable(),edificio:B().nullable(),lavanderiaE:B().nullable(),eventosE:B().nullable()},he={marca:k().required(),transmision:k().required(),combustible:k().required(),categoria:k().nullable(),color:k().nullable(),year:w().required(),km:w().required(),cilindrada:w().required(),rendimiento:w().nullable(),abs:B().nullable(),airbag:B().nullable(),ac:B().nullable(),alarma:B().nullable(),vidriosElectricos:B().nullable()},be=new V({info:C({tipo:k().required(),titulo:k().required(),descripcion:k().nullable(),comuna:k().nullable()}),imagenes:C({archivos:I().required().of(D().test("fileSize","Archivo demasiado pesado. Peso máximo: 3 MB.",(e=>e.size<=3072e3)).test("fileFormat","Formato no soportado. Debe ser una imagen.",(e=>e.type.includes("image")))).min(1),borrar:I().nullable().of(k())}),detalles:C().when("info.tipo",((e,n)=>{switch(e){case"Casa":return n.required().shape(ge);case"Wheels":return n.required().shape(he);default:return n.nullable()}})),docs:C().nullable(),bases:C({bases:B().required()})}),fe=new V(o(o({},ge),he)),xe={name:"ChevronIcon"},ye={viewBox:"0 0 8 8"},ve=s("polyline",{points:"1,2 4,6 7,2",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"},null,-1);xe.render=function(e,n,r,a,t,o){return i(),l("svg",ye,[ve])};const ke={name:"HeaderAcordeon",components:{ChevronIcon:xe},props:{seccion:String,actual:Boolean,error:Boolean}},we={class:"px-2 pt-1 bg-gray-500"};ke.render=function(e,n,r,a,t,o){const c=p("ChevronIcon");return i(),l("button",{type:"button",class:["flex justify-between items-end text-left font-bold border-b-2  border-gray-500",r.error?"text-red-700":"text-gray-500"]},[g(h(r.seccion)+" ",1),s("div",we,[s(c,{class:["h-3 bg-gray-500 text-white",{"transform rotate-180":r.actual}]},null,8,["class"])])],2)};const Be={name:"Slideshow",components:{FlechaCirculoIcon:G},props:{imagenes:Array},data:()=>({index:0}),created(){setInterval((()=>this.slide(1)),3e3)},methods:{urlDev:e=>"http://localhost:3000/"+e,slide(e){(e+=this.index)<0?e=this.imagenes.length-1:e===this.imagenes.length&&(e=0),this.index=e}}},Ce={class:"relative"},Ie={key:0,class:"\r\n                absolute\r\n                inset-0\r\n                flex\r\n                justify-between\r\n                items-center\r\n                text-white\r\n                opacity-20\r\n                hover:opacity-50\r\n                transition-opacity\r\n                duration-200\r\n                ease-out\r\n            "},De={class:"self-end pb-1 flex space-x-1"};Be.render=function(e,n,r,a,t,o){const c=p("FlechaCirculoIcon");return i(),l("div",Ce,[s("img",{class:"w-full h-full object-cover",src:o.urlDev(r.imagenes[t.index]),alt:""},null,8,["src"]),r.imagenes.length>1?(i(),l("div",Ie,[s(c,{class:"mx-2 w-6 z-10 cursor-pointer",transform:"scale(-1,1)",onClick:n[1]||(n[1]=e=>o.slide(-1))}),s("div",De,[(i(!0),l(d,null,u(r.imagenes,((e,n)=>(i(),l("svg",{key:n,viewBox:"0 0 10 10",class:"w-3 z-10 cursor-pointer",onClick:e=>t.index=n},[s("circle",{cx:"5",cy:"5",r:"4",stroke:"white",fill:n===t.index?"white":"none"},null,8,["fill"])],8,["onClick"])))),128))]),s(c,{class:"mx-2 w-6 z-10 cursor-pointer",onClick:n[2]||(n[2]=e=>o.slide(1))})])):m("",!0)])};const je={name:"DetalleItem",components:{Slideshow:Be,HeaderAcordeon:ke,InfoForm:re,ImagenesItemForm:R,DetallesItemForm:T,DocsItemForm:L,EstadoMenu:ne},props:{item:Object},emits:["cerrar","cargar"],data(){return{seccionActual:"",form:{info:{tipo:this.item.tipo,titulo:this.item.titulo,descripcion:this.item.descripcion,comuna:this.item.comuna},imagenes:{archivos:this.item.imagenes,borrar:[]},detalles:this.item.item,docs:this.item.docs||{}},errores:{info:{},imagenes:{},detalles:{},docs:{}},validado:!1,enviando:!1,errorServidor:""}},methods:{urlDev:e=>"http://localhost:3000/"+e,toggleSeccion(e){this.seccionActual===e?this.seccionActual="":this.seccionActual=e},tieneErrores(e){return Object.values(this.errores[e]).some((e=>e))},async actualizarDetalles(){this.form.detalles={},this.errores.detalles={},this.validado&&this.submit()},async actualizarInput(e,n,r){this.form[e][n]=r,this.validado&&("detalles"===e?this.errores.detalles[n]=await fe.validate(n,r):this.errores[e][n]=await be.validateNested(e,n,r))},async guardar(){console.log("enviar datos para guardar como borrador")},async submit(){console.log(be.schema);const e=await be.validateAll(this.form);if(e.valid&&!this.enviando){this.enviando=!0;let e=new FormData;for(const[n,r]of Object.entries(this.form.info))e.set(`info[${n}]`,r);for(const[n,r]of Object.entries(this.form.detalles))e.set(`detalles[${n}]`,r);this.form.imagenes.archivos.forEach((n=>{e.append("imagenes",n)})),this.form.imagenes.borrar.forEach((n=>{e.append("borrar",n)})),Object.values(this.form.docs).forEach((n=>{e.append("docs",n)})),b.post(this.urlDev("api/items"),e).then((e=>console.log(e.data))).catch((e=>console.error(e))),this.enviando=!1}else{for(const[n,r]of Object.entries(e.errors)){const e=n.split(".");e.length>1?this.errores[e[0]][e[1]]=r.substring(e[0].length+1):this.errores[e[0]]=r}console.log("validación fallida")}this.validado=!0}}},Ae={class:"\r\n                w-11/12\r\n                md:w-3/4\r\n                h-3/4\r\n                flex flex-col\r\n                rounded-lg\r\n                bg-gray-200\r\n                text-black\r\n                overflow-auto\r\n            "},Se={class:"flex-1 pl-4 py-2 text-xl font-bold"},Fe={class:"p-2 bg-white text-xs text-gray-500 underline"},Ee={class:"flex-1 p-2 flex flex-col justify-center space-y-1"},$e={class:"flex flex-col"},Ue={class:"flex flex-col"},ze={class:"flex flex-col"},Oe={key:0,class:"flex flex-col"},qe={class:"flex flex-col"};je.render=function(e,n,r,a,t,o){const c=p("Slideshow"),d=p("HeaderAcordeon"),u=p("EstadoMenu"),g=p("InfoForm"),b=p("ImagenesItemForm"),y=p("DetallesItemForm"),v=p("DocsItemForm");return i(),l("div",{class:"\r\n            fixed\r\n            z-30\r\n            inset-0\r\n            flex\r\n            justify-center\r\n            items-center\r\n            bg-black bg-opacity-75\r\n        ",onClick:n[10]||(n[10]=j((n=>e.$emit("cerrar")),["self"]))},[s("div",Ae,[s("div",{id:"cabecera",class:"flex bg-gray-500 text-white cursor-pointer",onClick:n[1]||(n[1]=e=>t.seccionActual="")},[s("h3",Se,h(r.item.titulo),1),s("p",Fe,h(r.item.tipo),1)]),f(s(c,{class:"h-48",imagenes:r.item.imagenes},null,8,["imagenes"]),[[x,""===t.seccionActual]]),s("div",Ee,[s("section",$e,[s(d,{seccion:"Estado",actual:"Estado"===t.seccionActual,error:!1,onClick:n[2]||(n[2]=e=>o.toggleSeccion("Estado"))},null,8,["actual"]),f(s(u,{class:"\r\n                            px-4\r\n                            py-2\r\n                            flex flex-col\r\n                            border-r border-b border-l-2 border-gray-500\r\n                            text-gray-700\r\n                            space-y-2\r\n                        ",id:r.item._id,estado:r.item.estado,onCargar:n[3]||(n[3]=n=>e.$emit("cargar"))},null,8,["id","estado"]),[[x,"Estado"===t.seccionActual]])]),s("section",Ue,[s(d,{seccion:"Información general",actual:"Información general"===t.seccionActual,error:o.tieneErrores("info"),onClick:n[4]||(n[4]=e=>o.toggleSeccion("Información general"))},null,8,["actual","error"]),f(s(g,{info:t.form.info,errores:t.errores.info,onUpdate:o.actualizarInput,"onUpdate:detalles":o.actualizarDetalles},null,8,["info","errores","onUpdate","onUpdate:detalles"]),[[x,"Información general"===t.seccionActual]])]),s("section",ze,[s(d,{seccion:"Imágenes",actual:"Imágenes"===t.seccionActual,error:o.tieneErrores("imagenes"),onClick:n[5]||(n[5]=e=>o.toggleSeccion("Imágenes"))},null,8,["actual","error"]),f(s(b,{class:"\r\n                            px-4\r\n                            py-2\r\n                            flex flex-col\r\n                            border-r border-b border-l-2 border-gray-500\r\n                            text-gray-700\r\n                            space-y-2\r\n                        ",imagenes:t.form.imagenes,errores:t.errores.imagenes,onUpdate:o.actualizarInput},null,8,["imagenes","errores","onUpdate"]),[[x,"Imágenes"===t.seccionActual]])]),t.form.info.tipo&&"Otro"!==t.form.info.tipo?(i(),l("section",Oe,[s(d,{seccion:"Detalles",actual:"Detalles"===t.seccionActual,error:o.tieneErrores("detalles"),onClick:n[6]||(n[6]=e=>o.toggleSeccion("Detalles"))},null,8,["actual","error"]),f(s(y,{class:"\r\n                            px-4\r\n                            py-2\r\n                            flex flex-col\r\n                            border-r border-b border-l-2 border-gray-500\r\n                            text-gray-700\r\n                            space-y-2\r\n                        ",tipo:t.form.info.tipo,detalles:t.form.detalles,errores:t.errores.detalles,onUpdate:o.actualizarInput},null,8,["tipo","detalles","errores","onUpdate"]),[[x,"Detalles"===t.seccionActual]])])):m("",!0),s("section",qe,[s(d,{seccion:"Documentos",actual:"Documentos"===t.seccionActual,error:o.tieneErrores("docs"),onClick:n[7]||(n[7]=e=>o.toggleSeccion("Documentos"))},null,8,["actual","error"]),f(s(v,{class:"\r\n                            px-4\r\n                            py-2\r\n                            flex flex-col\r\n                            border-r border-b border-l-2 border-gray-500\r\n                            text-gray-700\r\n                            space-y-2\r\n                        ",id:r.item._id,docs:t.form.docs,errores:t.errores.docs,onUpdate:o.actualizarInput,onReset:n[8]||(n[8]=e=>t.form.docs={})},null,8,["id","docs","errores","onUpdate"]),[[x,"Documentos"===t.seccionActual]])])]),s("button",{class:"\r\n                    mt-auto\r\n                    px-4\r\n                    py-2\r\n                    border-t border-gray-500\r\n                    text-right\r\n                    font-bold\r\n                    text-gray-700\r\n                    hover:bg-pink-700 hover:text-white\r\n                ",type:"button",onClick:n[9]||(n[9]=(...e)=>o.submit&&o.submit(...e))}," Guardar ")])])};const _e={name:"MiniItem",props:{item:Object},methods:{urlDev:e=>"http://localhost:3000/"+e}},Me={class:"flex flex-col bg-gray-100 rounded-lg shadow"},Pe={id:"info",class:"p-4"},Ve={class:"text-lg text-center text-gray-700 font-bold"};_e.render=function(e,n,r,a,t,o){return i(),l("div",Me,[s("img",{src:o.urlDev(r.item.imagenes[0]),alt:"imagen item",class:"h-48 object-cover rounded-t-lg"},null,8,["src"]),s("div",Pe,[s("h3",Ve,h(r.item.titulo),1)])])};const Ge={name:"GestorItems",components:{FlechaCirculoIcon:G,MiniItem:_e,DetalleItem:je},data:()=>({menu:!0,seccionActual:"pendiente",secciones:["pendiente","publicado","sorteado","borrador","bajado"],items:[],filtrado:[],itemActual:{},modal:!1,parche:{numerosComprados:"132",valoracion:"3.5",fechaSorteo:new Date("2021-10-30T18:00:00-0400"),precioBoleto:5e3},cargando:!0}),created(){this.cargar()},methods:{cargar(){b("http://localhost:3000/api/items/todo").then((e=>{this.items=e.data,this.filtrar(this.seccionActual),this.cargando=!1})).catch((e=>{console.error(e)})),this.modal=!1},filtrar(e){this.filtrado=this.items.filter((n=>n.estado===e))},setSeccion(e){this.cargando=!0,this.seccionActual=e,this.filtrar(e),this.cargando=!1,this.menu=!1},capitalize:e=>e.charAt(0).toUpperCase()+e.slice(1)}},Re={class:"flex-1"},Te={class:"mb-4 text-xl text-center font-bold text-gray-700"};Ge.render=function(e,n,r,a,t,c){const g=p("FlechaCirculoIcon"),b=p("MiniItem"),f=p("DetalleItem");return i(),l("div",Re,[s(g,{class:["h-6 m-1 sticky top-0 z-10 hover:text-pink-600 cursor-pointer transition-colors duration-200 ease-out",t.menu?"text-white":"text-black"],transform:t.menu?"scale(-1,1)":"",onClick:n[1]||(n[1]=e=>t.menu=!t.menu)},null,8,["class","transform"]),s("div",{id:"menu",class:["h-full flex flex-col justify-center inset-0 bg-black text-center text-white",t.menu?"fixed":"hidden"],onClick:n[2]||(n[2]=j((e=>t.menu=!1),["self"]))},[s("ul",null,[(i(!0),l(d,null,u(t.secciones,((e,n)=>(i(),l("li",{key:n,class:["cursor-pointer hover:text-pink-600 transition-colors duration-200 ease-out",{"font-bold text-pink-600":t.seccionActual===e}],onClick:n=>c.setSeccion(e)},h(c.capitalize(e)),11,["onClick"])))),128))])],2),s("h2",Te,h(c.capitalize(t.seccionActual)),1),s("div",{class:["container 3xl:w-3/4 mx-auto px-4 grid gap-4 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",{"opacity-20 filter blur-sm":t.cargando}]},[(i(!0),l(d,null,u(t.filtrado,((e,n)=>(i(),l(b,{key:n,class:"cursor-pointer",item:o(o({},e),t.parche),onClick:n=>{t.itemActual=e,t.modal=!0}},null,8,["item","onClick"])))),128))],2),t.modal?(i(),l(f,{key:0,item:t.itemActual,onCerrar:n[3]||(n[3]=e=>t.modal=!1),onCargar:c.cargar},null,8,["item","onCargar"])):m("",!0)])};const Le="http://localhost:3000/api/banners/";class He{static async index(){return await b.get(Le).then((e=>e.data)).catch((e=>console.error(e)))}static async create(e){return await b.post(Le,e).then((e=>console.log(e))).catch((e=>console.error(e)))}static async update(e,n){return await b.post(`${Le}${e}/editar`,n).then((e=>console.log(e))).catch((e=>console.error(e)))}static async delete(e){return await b.delete(`${Le}${e}`).then((e=>{console.log(e)})).catch((e=>{console.error(e)}))}}const Ne={name:"ImgDropSingle",components:{UploadIcon:H},props:["image"],emits:["update"],data(){return{preview:this.urlDev(this.image),dragging:!1,hovering:!1}},methods:{urlDev:e=>"http://localhost:3000/"+e,drop(e){this.addFile(e.dataTransfer.files[0]),this.dragging=!1},addFile(e){this.preview=URL.createObjectURL(e),this.$emit("update",e)}}},We={class:"relative"},Qe=s("p",null,"Haz click o arrastra tu imagen aquí",-1);Ne.render=function(e,n,r,a,t,o){const c=p("UploadIcon");return i(),l("div",{id:"upload",class:["relative w-full h-full mx-auto p-6 bg-gray-50 border-4 border-dashed border-gray-300 rounded-lg transition-colors duration-200 ease-out",{" border-blue-200":t.dragging}],onDragover:n[4]||(n[4]=j((e=>t.dragging=t.hovering=!0),["prevent"])),onDragleave:n[5]||(n[5]=j((e=>t.dragging=t.hovering=!1),["prevent"])),onDrop:n[6]||(n[6]=j((e=>o.drop(e)),["prevent"]))},[s("input",{class:"w-full h-full opacity-0 absolute inset-0 z-20 cursor-pointer",type:"file",accept:"image/*",onChange:n[1]||(n[1]=e=>o.addFile(e.target.files[0])),onMouseenter:n[2]||(n[2]=e=>t.hovering=!0),onMouseleave:n[3]||(n[3]=e=>t.hovering=!1)},null,32),s("div",We,[s("img",{class:"w-full object-contain rounded-lg shadow-inner",src:t.preview,alt:""},null,8,["src"]),s("div",{class:["flex flex-col justify-center items-center text-center rounded-lg transition-all duration-300 ease-out",t.preview?" absolute inset-0 z-10 bg-black text-gray-200"+(t.hovering?" opacity-100 bg-opacity-50":" opacity-0"):" text-gray-500"]},[s(c,{class:"w-36"}),Qe],2)])],34)};const Je={name:"BannerForm",components:{ImgDropSingle:Ne},props:{banner:{type:Object,default:function(){return{tituloBanner:"",imagenBanner:"",urlBanner:""}}},guardando:Boolean},emits:["close","guardar"],data(){return{tituloBanner:this.banner.tituloBanner,imagenBanner:this.banner.imagenBanner,urlBanner:this.banner.urlBanner}},methods:{handleSubmit(){let e=new FormData;e.set("file",this.imagenBanner),e.set("tituloBanner",this.tituloBanner),e.set("urlBanner",this.urlBanner),e.set("info[tipo]","banners"),this.$emit("guardar",e)}}},Ke={class:"mb-4"},Xe=s("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"tituloBanner"}," Título ",-1),Ye={class:"mb-4"},Ze=s("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"urlBanner"}," Url ",-1),en={class:"float-right space-x-2"};Je.render=function(e,n,r,a,t,o){const c=p("ImgDropSingle");return i(),l("form",{class:["bg-white shadow rounded px-8 pt-6 pb-8 mb-4 flow-root",{"mx-auto w-1/2":0===r.banner.tituloBanner.length}]},[s("div",Ke,[Xe,f(s("input",{class:"\r\n                    appearance-none\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    w-full\r\n                    py-1\r\n                    px-2\r\n                    text-gray-700\r\n                    leading-tight\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",id:"tituloBanner",type:"text",placeholder:"Título","onUpdate:modelValue":n[1]||(n[1]=e=>t.tituloBanner=e)},null,512),[[A,t.tituloBanner]])]),s("div",null,[s(c,{class:"mb-6",image:t.imagenBanner,onUpdate:n[2]||(n[2]=e=>t.imagenBanner=e)},null,8,["image"])]),s("div",Ye,[Ze,f(s("input",{class:"\r\n                    appearance-none\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    w-full\r\n                    py-1\r\n                    px-2\r\n                    text-gray-700\r\n                    leading-tight\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",id:"urlBanner",type:"text",placeholder:"Url","onUpdate:modelValue":n[3]||(n[3]=e=>t.urlBanner=e)},null,512),[[A,t.urlBanner]])]),s("div",en,[s("button",{class:"\r\n                    bg-gray-400\r\n                    hover:bg-gray-600\r\n                    text-white\r\n                    font-bold\r\n                    py-2\r\n                    px-4\r\n                    rounded\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",type:"button",onClick:n[4]||(n[4]=n=>e.$emit("close"))}," Cancelar "),s("button",{class:["bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-200",{"animate-pulse":r.guardando}],type:"button",onClick:n[5]||(n[5]=(...e)=>o.handleSubmit&&o.handleSubmit(...e))}," Guardar ",2)])],2)};const nn="http://localhost:3000/api/agenda/";class rn{static async index(){return await b.get(nn).then((e=>e.data)).catch((e=>console.error(e)))}static async create(e){return await b.post(nn,e).then((e=>console.log(e))).catch((e=>console.error(e)))}static async delete(e){return await b.delete(`${nn}${e}`).then((e=>{console.log(e)})).catch((e=>{console.error(e)}))}}const an={name:"EventoForm",components:{DatePicker:S},props:{idBanner:String,agenda:{type:Object,default:function(){return{ubicacion:"",fechaIni:"",fechaFin:"",horario:!1,recurrencia:"",iteracion:""}}},guardando:Boolean},emits:["cerrar","guardar"],data(){return{ubicaciones:[],recurrencias:["continuado","semanal"],ubicacion:this.agenda.ubicacion,fechas:{start:new Date(this.agenda.fechaIni),end:new Date(this.agenda.fechaFin)},datePickerConfig:{start:{timeAdjust:"00:00:00"},end:{timeAdjust:"23:55:00"}},horario:this.agenda.horario,recurrencia:this.agenda.recurrencia,iteracion:this.agenda.iteracion}},created(){b("http://localhost:3000/api/ubicaciones").then((e=>this.ubicaciones=e.data)).catch((e=>console.error(e)))},methods:{handleSubmit(){let e={ubicacion:this.ubicacion,idBanner:this.idBanner,fechaIni:this.fechas.start.toISOString(),fechaFin:this.fechas.end.toISOString(),horario:this.horario,recurrencia:this.recurrencia,iteracion:this.iteracion};this.$emit("guardar",e)}}},tn={class:"bg-white shadow rounded px-8 pt-6 pb-8 mb-4 flow-root"},on={class:"mb-4"},ln=s("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"ubicacion"}," Ubicación ",-1),sn=s("option",{value:"",disabled:"",selected:"",hidden:""}," Selecciona una ubicación ",-1),cn={class:"mb-4"},dn=s("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"fechas"}," Rango de fechas ",-1),un={class:"mb-4"},pn=s("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"horario"}," Aplicar horario cada día ",-1),mn={class:"mb-4"},gn=s("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"recurrencia"}," Recurrencia ",-1),hn=s("option",{value:"",disabled:"",selected:"",hidden:""}," Selecciona un tipo de recurrencia ",-1),bn={class:"mb-4"},fn=s("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"iteracion"}," Repeticiones ",-1),xn={class:"float-right space-x-2"};an.render=function(e,n,r,a,t,o){const c=p("DatePicker");return i(),l("form",tn,[s("div",on,[ln,f(s("select",{class:["border rounded border-pink-200 w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-200",t.ubicacion?"text-gray-700":"text-gray-400"],id:"ubicacion","onUpdate:modelValue":n[1]||(n[1]=e=>t.ubicacion=e)},[sn,(i(!0),l(d,null,u(t.ubicaciones,((e,n)=>(i(),l("option",{class:"text-gray-700",key:n,value:e},h(`${e[0].toUpperCase()}${e.slice(1)}`),9,["value"])))),128))],2),[[F,t.ubicacion]])]),s("div",cn,[dn,s(c,{id:"fechas",mode:"dateTime","is-range":"","minute-increment":5,"min-date":new Date,color:"pink","model-config":t.datePickerConfig,modelValue:t.fechas,"onUpdate:modelValue":n[2]||(n[2]=e=>t.fechas=e)},null,8,["min-date","model-config","modelValue"])]),s("div",un,[f(s("input",{class:"\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    h-4\r\n                    w-4\r\n                    text-gray-700\r\n                    focus:ring-2 focus:ring-pink-200\r\n                ",id:"horario",type:"checkbox","onUpdate:modelValue":n[3]||(n[3]=e=>t.horario=e)},null,512),[[E,t.horario]]),pn]),s("div",mn,[gn,f(s("select",{class:["border rounded border-pink-200 w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-200",t.recurrencia?"text-gray-700":"text-gray-400"],id:"recurrencia","onUpdate:modelValue":n[4]||(n[4]=e=>t.recurrencia=e)},[hn,(i(!0),l(d,null,u(t.recurrencias,((e,n)=>(i(),l("option",{class:"text-gray-700",key:n,value:e},h(`${e[0].toUpperCase()}${e.slice(1)}`),9,["value"])))),128))],2),[[F,t.recurrencia]])]),f(s("div",bn,[fn,f(s("input",{class:"\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    w-full\r\n                    py-1\r\n                    px-2\r\n                    text-gray-700\r\n                    leading-tight\r\n                    focus:outline-none focus:ring-2 focus:ring-pink-200\r\n                ",id:"iteracion",type:"number",placeholder:"Número de repeticiones","onUpdate:modelValue":n[5]||(n[5]=e=>t.iteracion=e)},null,512),[[A,t.iteracion]])],512),[[x,t.recurrencia&&"continuado"!==t.recurrencia]]),s("div",xn,[s("button",{class:"\r\n                    bg-gray-400\r\n                    hover:bg-gray-600\r\n                    text-white\r\n                    font-bold\r\n                    py-2\r\n                    px-4\r\n                    rounded\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",type:"button",onClick:n[6]||(n[6]=n=>e.$emit("cerrar"))}," Cancelar "),s("button",{class:["bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-200",{"animate-pulse":r.guardando}],type:"button",onClick:n[7]||(n[7]=(...e)=>o.handleSubmit&&o.handleSubmit(...e))}," Guardar ",2)])])};const yn={name:"BannerAgenda",components:{EventoForm:an,DeleteIcon:N},props:{idBanner:String,agenda:Array},emits:["cargarBanners"],data:()=>({nuevo:!1,guardando:!1,eliminando:"",error:""}),methods:{formatFecha:e=>new Date(e).toLocaleString(),async agendar(e){this.guardando=!0;try{await rn.create(e),this.nuevo=!1,this.$emit("cargarBanners")}catch(n){console.error(n)}this.guardando=!1},async eliminarEvento(e){if(this.eliminando=e,window.confirm("¿Eliminar evento?"))try{await rn.delete(e),this.$emit("cargarBanners")}catch(n){console.error(n)}this.eliminando=""}}},vn=z();$("data-v-5d8dee7a");const kn={class:"divide-y"},wn=g(" Ubicación: "),Bn=g(" Fecha de inicio: "),Cn=g(" Fecha de fin: "),In=g(" Con horario: "),Dn=g(" Recurrencia: "),jn={key:0},An=g(" Semanas restantes: "),Sn={class:"mt-auto flex justify-end pt-3 space-x-2"};U();const Fn=vn(((e,n,r,a,t,o)=>{const c=p("EventoForm"),g=p("DeleteIcon");return i(),l(d,null,[t.nuevo?(i(),l(c,{key:1,idBanner:r.idBanner,guardando:t.guardando,onGuardar:o.agendar,onCerrar:n[2]||(n[2]=e=>t.nuevo=!1)},null,8,["idBanner","guardando","onGuardar"])):(i(),l("button",{key:0,class:"\r\n            mb-5\r\n            px-4\r\n            py-2\r\n            bg-pink-400\r\n            text-white\r\n            font-bold\r\n            rounded\r\n            hover:bg-pink-600\r\n        ",onClick:n[1]||(n[1]=e=>t.nuevo=!0)}," Agregar Evento ")),(i(!0),l(d,null,u(r.agenda,((e,n)=>(i(),l("div",{key:n,class:"bg-white shadow rounded px-8 py-6 mb-4"},[s("ul",kn,[s("li",null,[wn,s("span",null,h(e.ubicacion),1)]),s("li",null,[Bn,s("span",null,h(o.formatFecha(e.fechaIni)),1)]),s("li",null,[Cn,s("span",null,h(o.formatFecha(e.fechaFin)),1)]),s("li",null,[In,s("span",null,h(e.horario?"Sí":"No"),1)]),s("li",null,[Dn,s("span",null,h(e.recurrencia),1)]),"semanal"===e.recurrencia?(i(),l("li",jn,[An,s("span",null,h(e.iteracion),1)])):m("",!0)]),s("div",Sn,[s(g,{class:["text-red-500",t.eliminando==e._id?"animate-bounce":"cursor-pointer"],onClick:n=>o.eliminarEvento(e._id)},null,8,["class","onClick"])])])))),128)),s("button",{class:"\r\n            mt-auto\r\n            px-4\r\n            py-2\r\n            bg-gray-400\r\n            text-white\r\n            font-bold\r\n            rounded\r\n            hover:bg-gray-600\r\n        ",type:"button",onClick:n[3]||(n[3]=n=>e.$emit("cerrar"))}," Volver ")],64)}));yn.render=Fn,yn.__scopeId="data-v-5d8dee7a";const En={name:"EditIcon"},$n={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Un=s("path",{d:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"},null,-1),zn=s("path",{d:"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"},null,-1);En.render=function(e,n,r,a,t,o){return i(),l("svg",$n,[Un,zn])};const On={name:"CalendarIcon"},qn={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-calendar"},_n=s("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},null,-1),Mn=s("path",{d:"M16 2v4M8 2v4M3 10h18"},null,-1);On.render=function(e,n,r,a,t,o){return i(),l("svg",qn,[_n,Mn])};const Pn={name:"BannerList",components:{BannerForm:Je,BannerAgenda:yn,EditIcon:En,DeleteIcon:N,CalendarIcon:On},props:{banners:Array},emits:["cargarBanners"],data:()=>({edit:"",guardando:!1,eliminando:"",error:"",agenda:""}),methods:{urlDev:e=>"http://localhost:3000/"+e,async actualizarBanner(e){this.guardando=!0;try{await He.update(this.edit,e),this.edit="",this.$emit("cargarBanners")}catch(n){console.error(n)}this.guardando=!1},async borrarBanner(e){if(this.eliminando=e,window.confirm("¿Eliminar banner?"))try{await He.delete(e),this.$emit("cargarBanners")}catch(n){console.error(n)}this.eliminando=""}}},Vn={key:0,class:"error"},Gn={class:"grid grid-cols-3 gap-4"},Rn={class:"text-xl mb-2"},Tn={key:2,class:"flex-grow flex flex-col justify-between text-center"},Ln={class:"mt-auto flex justify-end pt-3 space-x-2"};Pn.render=function(e,n,r,a,t,o){const c=p("BannerForm"),g=p("BannerAgenda"),b=p("CalendarIcon"),f=p("EditIcon"),x=p("DeleteIcon");return i(),l(d,null,[t.error?(i(),l("p",Vn,h(t.error),1)):m("",!0),s("div",Gn,[(i(!0),l(d,null,u(r.banners,(r=>(i(),l("div",{key:r._id,class:"flex flex-col border rounded p-5 bg-gray-100 shadow"},[s("h2",Rn,h(r.tituloBanner),1),t.edit==r._id?(i(),l(c,{key:0,banner:r,guardando:t.guardando,onClose:n[1]||(n[1]=e=>t.edit=""),onGuardar:o.actualizarBanner},null,8,["banner","guardando","onGuardar"])):t.agenda===r._id?(i(),l(g,{key:1,idBanner:r._id,agenda:r.agenda,onCerrar:n[2]||(n[2]=e=>t.agenda=""),onCargarBanners:n[3]||(n[3]=n=>e.$emit("cargarBanners"))},null,8,["idBanner","agenda"])):(i(),l("div",Tn,[s("div",null,[s("img",{class:"mb-2 mx-auto rounded-lg",src:o.urlDev(r.imagenBanner),alt:r.tituloBanner},null,8,["src","alt"]),s("a",{href:r.urlBanner},h(r.urlBanner),9,["href"])]),s("div",Ln,[s(b,{class:"text-blue-400 cursor-pointer",onClick:e=>t.agenda=r._id},null,8,["onClick"]),s(f,{class:"text-yellow-400 cursor-pointer",onClick:e=>t.edit=r._id},null,8,["onClick"]),s(x,{class:["text-red-500",t.eliminando==r._id?"animate-bounce":"cursor-pointer"],onClick:e=>o.borrarBanner(r._id)},null,8,["class","onClick"])])]))])))),128))])],64)};const Hn={name:"BannerMain",components:{BannerForm:Je,BannerList:Pn},data:()=>({banners:[],nuevo:!1,guardando:!1,error:""}),created(){this.cargarBanners()},methods:{async cargarBanners(){try{this.banners=await He.index()}catch(e){this.error=e.message}},async crearBanner(e){this.guardando=!0,await He.create(e),this.guardando=!1,this.nuevo=!1,this.cargarBanners()}}},Nn={class:"container mx-auto pb-10"},Wn={key:0,class:"text-center bg-red-200 mb-5 p-4 rounded shadow"};Hn.render=function(e,n,r,a,t,o){const c=p("BannerForm"),d=p("BannerList");return i(),l("div",Nn,[t.error?(i(),l("div",Wn,h(t.error),1)):m("",!0),t.nuevo?(i(),l(c,{key:2,guardando:t.guardando,onClose:n[2]||(n[2]=e=>t.nuevo=!1),onGuardar:o.crearBanner},null,8,["guardando","onGuardar"])):(i(),l("button",{key:1,class:"\r\n                w-full\r\n                border border-pink-600\r\n                rounded\r\n                mb-5\r\n                px-5\r\n                hover:bg-pink-600 hover:shadow\r\n                text-pink-600\r\n                hover:text-white\r\n                text-xl\r\n                uppercase\r\n                font-bold\r\n            ",onClick:n[1]||(n[1]=e=>t.nuevo=!0)}," Nuevo Banner ")),s(d,{banners:t.banners,onCargarBanners:o.cargarBanners},null,8,["banners","onCargarBanners"])])};const Qn={name:"BannerTest",data:()=>({banners:{principal:"",ladito:""}}),created(){b(this.urlDev("api/banners/principal")).then((e=>this.banners.principal=this.urlDev(e.data.imagenBanner))).catch((e=>console.error(e))),b(this.urlDev("api/banners/ladito")).then((e=>this.banners.ladito=this.urlDev(e.data.imagenBanner))).catch((e=>console.error(e)))},methods:{urlDev:e=>"http://localhost:3000/"+e}},Jn={class:"container mx-auto flex flex-col items-center"},Kn=s("h1",{class:"mb-14 text-3xl"},"Serial Experiments Banners",-1),Xn={class:"mb-2 text-xl capitalize"};Qn.render=function(e,n,r,a,t,o){return i(),l("div",Jn,[Kn,(i(!0),l(d,null,u(t.banners,((e,n)=>(i(),l("figure",{key:n,class:"mb-10"},[s("figcaption",Xn,h(n),1),s("img",{src:e,alt:`banner ${n}`,width:"336"},null,8,["src","alt"])])))),128))])};const Yn={name:"Inicio",components:{IsotipoIcon:P}},Zn={class:"flex-1 flex flex-col justify-center items-center"},er=s("h1",{class:"mb-2 text-3xl font-bold border-b-2 border-pink-700"}," Panel de Control ",-1),nr=s("p",{class:"text-gray-700"},"Bienvenidx al Panel de Control de RifasApp",-1);Yn.render=function(e,n,r,a,t,o){const c=p("IsotipoIcon");return i(),l("div",Zn,[s(c,{class:"w-32 text-black"}),er,nr])};const rr=[{path:"/panel/items",component:Ge},{path:"/panel/banners",component:Hn},{path:"/panel/banner_test",component:Qn},{path:"/panel",component:Yn}],ar=O({history:q(),routes:rr});_(W).use(ar).mount("body");