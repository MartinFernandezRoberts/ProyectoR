import{s as e,i as t,m as r,M as l,o as a,c as n,a as o,P as s,p as i,e as c,w as d,v as u,F as p,r as g,E as m,f as x,b as h,t as b,d as f,y,N as v}from"./vendor.7a3312fd.js";class k{constructor(l){e(t),this.schema=r().shape(l)}getErrors(e){const t={};let r="";return e.inner.forEach((e=>{const l=e.path;l!==r&&(r=l,t[l]=e.errors[0])})),t}async validateAll(e){const t={};return await this.schema.validate(e,{abortEarly:!1}).then((()=>t.valid=!0)).catch((e=>{t.valid=!1,t.errors=this.getErrors(e)})),t}async validate(e,t){let r="";return await this.schema.validateAt(e,{[e]:t}).catch((e=>{r=e.message})),r}async validateNested(e,t){return console.log(await l(this.schema,`${e}.${t}`)),"".substring(e.length+1)}}const w={name:"UploadIcon"},j={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor"},C=o("g",{"data-name":"Upload Image"},[o("g",{"data-name":"<Group>"},[o("g",{"data-name":"<Group>"},[o("g",{"data-name":"<Group>"},[o("circle",{"data-name":"<Path>",cx:"18.5",cy:"16.5",r:"5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"})]),o("path",{"data-name":"<Path>",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 15.5l2-2 2 2M18.5 13.5v6"})]),o("g",{"data-name":"<Group>",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[o("path",{"data-name":"<Path>",d:"M.6 15.42l5.4-5.4L8.98 13"}),o("path",{"data-name":"<Path>",d:"M17.16 11.68L12.5 7.02l-4.73 4.77"}),o("circle",{"data-name":"<Path>",cx:"8",cy:"6.02",r:"1.5"}),o("path",{"data-name":"<Path>",d:"M19.5 11.6V4A1.5 1.5 0 0018 2.5H2A1.5 1.5 0 00.5 4v11A1.5 1.5 0 002 16.5h11.5"})])])],-1);w.render=function(e,t,r,l,o,s){return a(),n("svg",j,[C])};const $={name:"DeleteIcon"},I={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},D=o("circle",{cx:"12",cy:"12",r:"10"},null,-1),E=o("path",{d:"M15 9l-6 6M9 9l6 6"},null,-1);$.render=function(e,t,r,l,o,s){return a(),n("svg",I,[D,E])};const M={name:"ZoomIcon"},S={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},F=o("circle",{cx:"11",cy:"11",r:"8"},null,-1),A=o("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},null,-1),O=o("line",{x1:"11",y1:"8",x2:"11",y2:"14"},null,-1),B=o("line",{x1:"8",y1:"11",x2:"14",y2:"11"},null,-1);M.render=function(e,t,r,l,o,s){return a(),n("svg",S,[F,A,O,B])};const z={name:"StarIcon"},U={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},L=o("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},null,-1);z.render=function(e,t,r,l,o,s){return a(),n("svg",U,[L])};const P={name:"MultiImgDrop",components:{UploadIcon:w,DeleteIcon:$,ZoomIcon:M,StarIcon:z},props:{images:{type:Array,default:function(){return[]}},paBorrar:{type:Array,default:function(){return[]}}},emits:["update:images","update:paBorrar"],data(){return{storedImages:this.images,previews:this.images.map((e=>this.urlDev(e))),dragging:!1,modal:!1,curSlide:0,featured:0,scrollbar:null}},computed:{notEmpty(){return this.previews.length>0}},mounted(){this.$nextTick((function(){this.scrollbar=new s("#previews"),this.$emit("update:images",[])}))},methods:{urlDev:e=>"http://localhost:3000/"+e,drop(e){this.addFiles(e.dataTransfer.files),this.dragging=!1},addFiles(e){const t=this.images,r=this;for(let l=0;l<e.length;l++){const a=e[l];r.previews.push(URL.createObjectURL(a)),t.push(a)}this.$emit("update:images",t),setTimeout((()=>{this.scrollbar.update()}),100)},rmFile(e){if(e<this.featured?this.featured--:e==this.featured&&(this.featured=0),e>=this.storedImages.length){const t=this.images;t.splice(e,1),this.$emit("update:images",t)}else{const t=this.paBorrar.concat(this.storedImages.splice(e,1));this.$emit("update:paBorrar",t)}this.previews.splice(e,1),this.$nextTick((function(){this.scrollbar.update()}))},clear(){this.previews.length=0,this.$emit("update:images",[])},openLightbox(e){this.curSlide=e,this.modal=!0},slide(e){(e+=this.curSlide)<0?e=this.previews.length-1:e==this.previews.length&&(e=0),this.curSlide=e}}},G=x();i("data-v-ad5f410c");const q={class:"\r\n                    flex flex-col\r\n                    justify-center\r\n                    items-center\r\n                    text-center text-gray-500\r\n                    rounded-lg\r\n                "},N=o("p",null,"Haz click o arrastra tus imágenes aquí",-1),T={class:"mt-4 border-2 rounded shadow-inner"},R={id:"previews",class:"relative px-3 py-4 z-20 flex h-52 flex-nowrap"},V={id:"controls",class:"\r\n                                absolute\r\n                                w-full\r\n                                h-full\r\n                                flex flex-col\r\n                                justify-around\r\n                                items-center\r\n                                opacity-0\r\n                                rounded\r\n                                bg-black bg-opacity-50\r\n                                hover:opacity-100\r\n                                transition-opacity\r\n                                duration-300\r\n                                ease-out\r\n                            "},H={id:"lightbox",class:"\r\n                fixed\r\n                z-20\r\n                inset-0\r\n                text-3xl\r\n                bg-black bg-opacity-75\r\n                flex\r\n                justify-between\r\n                items-center\r\n            "},Z={class:"w-4/5 h-full"};c();const _=G(((e,t,r,l,s,i)=>{const c=h("UploadIcon"),x=h("StarIcon"),b=h("ZoomIcon"),f=h("DeleteIcon");return a(),n("div",null,[o("div",{class:["relative p-6 bg-gray-50 border-4 border-dashed border-gray-300 rounded-lg transition-colors duration-200 ease-out",{" border-blue-200":s.dragging}],onDragover:t[3]||(t[3]=m((e=>s.dragging=!0),["prevent"])),onDragleave:t[4]||(t[4]=m((e=>s.dragging=!1),["prevent"])),onDrop:t[5]||(t[5]=m((e=>i.drop(e)),["prevent"]))},[d(o("button",{class:"\r\n                    relative\r\n                    px-2\r\n                    z-20\r\n                    border border-gray-300\r\n                    rounded\r\n                    text-gray-300\r\n                    font-bold\r\n                    hover:border-0 hover:bg-gray-300 hover:text-white\r\n                ",type:"button",onClick:t[1]||(t[1]=(...e)=>i.clear&&i.clear(...e))}," limpiar ",512),[[u,i.notEmpty]]),o("input",{class:"\r\n                    w-full\r\n                    h-full\r\n                    opacity-0\r\n                    absolute\r\n                    inset-0\r\n                    z-10\r\n                    cursor-pointer\r\n                ",type:"file",accept:"image/*",onChange:t[2]||(t[2]=e=>i.addFiles(e.target.files)),multiple:""},null,32),o("div",q,[o(c,{class:["stroke-current",i.notEmpty?"w-14":"w-36"]},null,8,["class"]),N]),d(o("div",T,[o("div",R,[(a(!0),n(p,null,g(s.previews,((e,t)=>(a(),n("div",{key:t,class:["relative h-full flex-none",{"rounded ring-4 ring-amarillo":s.featured==t,"ml-4":t>0}]},[o("div",V,[o(x,{class:["text-amarillo cursor-pointer",{"fill-current":s.featured===t}],onClick:e=>s.featured=t},null,8,["class","onClick"]),o(b,{class:"text-white cursor-pointer",onClick:e=>i.openLightbox(t)},null,8,["onClick"]),o(f,{class:"text-rojo cursor-pointer",onClick:e=>i.rmFile(t)},null,8,["onClick"])]),o("img",{class:"object-cover h-full rounded",src:e,alt:`imagen ${t}`},null,8,["src","alt"])],2)))),128))])],512),[[u,i.notEmpty]])],34),d(o("div",H,[o("span",{class:"\r\n                    text-white\r\n                    absolute\r\n                    top-12\r\n                    right-12\r\n                    font-bold\r\n                    cursor-pointer\r\n                    hover:text-gray-200\r\n                ",onClick:t[6]||(t[6]=e=>s.modal=!1)},"×"),o("a",{class:"cursor-pointer p-8 text-white font-bold",onClick:t[7]||(t[7]=e=>i.slide(-1))},"❮"),o("div",Z,[(a(!0),n(p,null,g(s.previews,((e,r)=>d((a(),n("img",{key:r,onClick:t[8]||(t[8]=e=>s.modal=!1),class:"w-full h-full object-contain cursor-pointer",src:e,alt:`imagen ${r}`},null,8,["src","alt"])),[[u,r==s.curSlide]]))),128))]),o("a",{class:"cursor-pointer p-8 text-white font-bold",onClick:t[9]||(t[9]=e=>i.slide(1))},"❯")],512),[[u,s.modal]])])}));P.render=_,P.__scopeId="data-v-ad5f410c";const K={name:"DetallesItemForm",components:{ImgDropMulti:P},props:{imagenes:Object,errores:Object},emits:["update"]},W={class:"flex flex-col space-y-1.5"};K.render=function(e,t,r,l,s,i){const c=h("ImgDropMulti");return a(),n("form",W,[o(c,{images:r.imagenes.archivos,paBorrar:r.imagenes.borrar,"onUpdate:images":t[1]||(t[1]=t=>e.$emit("update","imagenes","archivos",t)),"onUpdate:paBorrar":t[2]||(t[2]=t=>e.$emit("update","imagenes","borrar",t))},null,8,["images","paBorrar"]),d(o("small",{class:"block px-4 py-1 rounded-lg bg-rojo text-center text-white"},b(r.errores.archivos),513),[[u,r.errores.archivos]])])};const Q={name:"DetallesCasaForm",props:{detalles:Object,errores:Object},emits:["update"],data:()=>({orientaciones:["Oriente","Poniente","Norte","Sur","Nororiente","Norponiente","Suroriente","Surponiente"]})},J={class:"flex flex-col space-y-3"},X={class:"flex flex-col space-y-1.5"},Y=o("label",{class:"text-sm font-bold",for:"ubicacion"},"Ubicación",-1),ee={class:"flex flex-col space-y-1.5"},te=o("label",{class:"text-sm font-bold",for:"orientacion"},"Orientación",-1),re=o("option",{value:"",disabled:"",selected:"",hidden:""}," Selecciona una orientación ",-1),le={id:"numbers",class:"grid gap-x-6 gap-y-3 xl:grid-cols-2"},ae={class:"flex flex-col space-y-1.5"},ne=o("label",{class:"text-sm font-bold",for:"area"},[y("Área total (m"),o("sup",null,"2"),y(")")],-1),oe={class:"flex flex-col space-y-1.5"},se=o("label",{class:"text-sm font-bold",for:"construido"},[y("Superficie construida (m"),o("sup",null,"2"),y(")")],-1),ie={class:"flex flex-col space-y-1.5"},ce=o("label",{class:"text-sm font-bold",for:"wc"},"Baños",-1),de={class:"flex flex-col space-y-1.5"},ue=o("label",{class:"text-sm font-bold",for:"estacionamiento"},"Estacionamientos",-1),pe={class:"flex flex-col space-y-1.5"},ge=o("label",{class:"text-sm font-bold",for:"dormitorio"},"Dormitorios",-1),me={class:"flex flex-col space-y-1.5"},xe=o("label",{class:"text-sm font-bold",for:"piso"},"Pisos",-1),he={class:"flex flex-col space-y-1.5"},be=o("label",{class:"text-sm font-bold",for:"gastosComunes"},"Gastos comunes",-1),fe={id:"booleans",class:"pt-3 grid gap-3 grid-cols-2 md:grid-cols-3"},ye=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"bodega"}," Bodega ",-1),ve=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"mascotas"}," Mascotas ",-1),ke=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"calefaccion"}," Calefacción ",-1),we=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"cocina"}," Cocina ",-1),je=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"terraza"}," Terraza ",-1),Ce=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"balcon"}," Balcón ",-1),$e=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"piscina"}," Piscina ",-1),Ie=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"quincho"}," Quincho ",-1),De=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"edificio"}," Edificio ",-1),Ee={key:0,class:"grid gap-3 xl:grid-cols-3"},Me=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"gimnasioE"}," Gimnasio ",-1),Se=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"lavanderiaE"}," Lavandería ",-1),Fe=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"eventosE"}," Eventos ",-1);Q.render=function(e,t,r,l,s,i){return a(),n("form",J,[o("div",X,[Y,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.ubicacion}],type:"text",id:"ubicacion",placeholder:"Ubicación",value:r.detalles.ubicacion,onInput:t[1]||(t[1]=t=>e.$emit("update","ubicacion",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-rojo\r\n                    text-center text-white\r\n                "},b(r.errores.ubicacion),513),[[u,r.errores.ubicacion]])]),o("div",ee,[te,o("select",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"text-gray-400":!r.detalles.orientacion}],id:"orientacion",value:r.detalles.orientacion,onChange:t[2]||(t[2]=t=>e.$emit("update","orientacion",t.target.value))},[re,(a(!0),n(p,null,g(s.orientaciones,(e=>(a(),n("option",{key:e,class:"text-gris",value:e},b(e),9,["value"])))),128))],42,["value"]),d(o("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-rojo\r\n                    text-center text-white\r\n                "},b(r.errores.orientacion),513),[[u,r.errores.orientacion]])]),o("div",le,[o("div",ae,[ne,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.area}],type:"number",id:"area",placeholder:"Área",value:r.detalles.area,onInput:t[3]||(t[3]=t=>e.$emit("update","area",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.area),513),[[u,r.errores.area]])]),o("div",oe,[se,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.construido}],type:"number",id:"construido",placeholder:"Área",value:r.detalles.construido,onInput:t[4]||(t[4]=t=>e.$emit("update","construido",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.construido),513),[[u,r.errores.construido]])]),o("div",ie,[ce,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.wc}],type:"number",id:"wc",placeholder:"Baños",value:r.detalles.wc,onInput:t[5]||(t[5]=t=>e.$emit("update","wc",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.wc),513),[[u,r.errores.wc]])]),o("div",de,[ue,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.estacionamiento}],type:"number",id:"estacionamiento",placeholder:"Estacionamientos",value:r.detalles.estacionamiento,onInput:t[6]||(t[6]=t=>e.$emit("update","estacionamiento",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.estacionamiento),513),[[u,r.errores.estacionamiento]])]),o("div",pe,[ge,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.dormitorio}],type:"number",id:"dormitorio",placeholder:"Dormitorios",value:r.detalles.dormitorio,onInput:t[7]||(t[7]=t=>e.$emit("update","dormitorio",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.dormitorio),513),[[u,r.errores.dormitorio]])]),o("div",me,[xe,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.piso}],type:"number",id:"piso",placeholder:"Pisos",value:r.detalles.piso,onInput:t[8]||(t[8]=t=>e.$emit("update","piso",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.piso),513),[[u,r.errores.piso]])]),o("div",he,[be,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.gastosComunes}],type:"number",id:"gastosComunes",placeholder:"Gastos comunes",value:r.detalles.gastosComunes,onInput:t[9]||(t[9]=t=>e.$emit("update","gastosComunes",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.gastosComunes),513),[[u,r.errores.gastosComunes]])])]),o("div",fe,[o("div",null,[o("input",{class:"h-4 w-4",id:"bodega",type:"checkbox",checked:r.detalles.bodega,onChange:t[10]||(t[10]=t=>e.$emit("update","bodega",t.target.checked))},null,40,["checked"]),ye]),o("div",null,[o("input",{class:"h-4 w-4",id:"mascotas",type:"checkbox",checked:r.detalles.mascotas,onChange:t[11]||(t[11]=t=>e.$emit("update","mascotas",t.target.checked))},null,40,["checked"]),ve]),o("div",null,[o("input",{class:"h-4 w-4",id:"calefaccion",type:"checkbox",checked:r.detalles.calefaccion,onChange:t[12]||(t[12]=t=>e.$emit("update","calefaccion",t.target.checked))},null,40,["checked"]),ke]),o("div",null,[o("input",{class:"h-4 w-4",id:"cocina",type:"checkbox",checked:r.detalles.cocina,onChange:t[13]||(t[13]=t=>e.$emit("update","cocina",t.target.checked))},null,40,["checked"]),we]),o("div",null,[o("input",{class:"h-4 w-4",id:"terraza",type:"checkbox",checked:r.detalles.terraza,onChange:t[14]||(t[14]=t=>e.$emit("update","terraza",t.target.checked))},null,40,["checked"]),je]),o("div",null,[o("input",{class:"h-4 w-4",id:"balcon",type:"checkbox",checked:r.detalles.balcon,onChange:t[15]||(t[15]=t=>e.$emit("update","balcon",t.target.checked))},null,40,["checked"]),Ce]),o("div",null,[o("input",{class:"h-4 w-4",id:"piscina",type:"checkbox",checked:r.detalles.piscina,onChange:t[16]||(t[16]=t=>e.$emit("update","piscina",t.target.checked))},null,40,["checked"]),$e]),o("div",null,[o("input",{class:"h-4 w-4",id:"quincho",type:"checkbox",checked:r.detalles.quincho,onChange:t[17]||(t[17]=t=>e.$emit("update","quincho",t.target.checked))},null,40,["checked"]),Ie]),o("div",null,[o("input",{class:"h-4 w-4",id:"edificio",type:"checkbox",checked:r.detalles.edificio,onChange:t[18]||(t[18]=t=>e.$emit("update","edificio",t.target.checked))},null,40,["checked"]),De])]),r.detalles.edificio?(a(),n("div",Ee,[o("div",null,[o("input",{class:"h-4 w-4",id:"gimnasioE",type:"checkbox",checked:r.detalles.gimnasioE,onChange:t[19]||(t[19]=t=>e.$emit("update","gimnasioE",t.target.checked))},null,40,["checked"]),Me]),o("div",null,[o("input",{class:"h-4 w-4",id:"lavanderiaE",type:"checkbox",checked:r.detalles.lavanderiaE,onChange:t[20]||(t[20]=t=>e.$emit("update","lavanderiaE",t.target.checked))},null,40,["checked"]),Se]),o("div",null,[o("input",{class:"h-4 w-4",id:"eventosE",type:"checkbox",checked:r.detalles.eventosE,onChange:t[21]||(t[21]=t=>e.$emit("update","eventosE",t.target.checked))},null,40,["checked"]),Fe])])):f("",!0)])};const Ae={name:"DetallesWheelsForm",props:{detalles:Object,errores:Object},emits:["update"],data:()=>({categorias:["Aéreos","Autos, camionetas y 4x4","Buses","Camiones","Casas rodantes","Maquinarias","Motos","Náutica","Otros"],transmisiones:["Automática","Manual"],combustibles:["Bencina","Diesel","Eléctrico","Gas","Híbrido","Otro"],equipamientos:["ABS","Airbag","Aire acondicionado","Alarma","Vidrios eléctricos"]})},Oe={class:"flex flex-col space-y-3"},Be={class:"flex flex-col space-y-1.5"},ze=o("label",{class:"text-sm font-bold",for:"marca"},"Marca",-1),Ue={class:"flex flex-col space-y-1.5"},Le=o("label",{class:"text-sm font-bold",for:"categoria"},"Categoría",-1),Pe=o("option",{value:"",disabled:"",selected:"",hidden:""}," Selecciona una categoría ",-1),Ge={class:"flex flex-col space-y-1.5"},qe=o("label",{class:"text-sm font-bold",for:"transmision"},"Transmisión",-1),Ne=o("option",{value:"",disabled:"",selected:"",hidden:""}," Selecciona una transmisión ",-1),Te={class:"flex flex-col space-y-1.5"},Re=o("label",{class:"text-sm font-bold",for:"combustible"},"Combustible",-1),Ve=o("option",{value:"",disabled:"",selected:"",hidden:""}," Selecciona un combustible ",-1),He={class:"flex flex-col space-y-1.5"},Ze=o("label",{class:"text-sm font-bold",for:"color"},"Color",-1),_e={id:"numbers",class:"grid gap-x-6 gap-y-3 xl:grid-cols-2"},Ke={class:"flex flex-col space-y-1.5"},We=o("label",{class:"text-sm font-bold",for:"year"},"Año",-1),Qe={class:"flex flex-col space-y-1.5"},Je=o("label",{class:"text-sm font-bold",for:"km"},"Kilometraje",-1),Xe={class:"flex flex-col space-y-1.5"},Ye=o("label",{class:"text-sm font-bold",for:"cilindrada"}," Cilindrada ",-1),et={class:"flex flex-col space-y-1.5"},tt=o("label",{class:"text-sm font-bold",for:"rendimiento"}," Rendimiento (km/l) ",-1),rt={id:"booleans",class:"pt-3 grid gap-3 xl:grid-cols-3"},lt=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"abs"}," ABS ",-1),at=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"airbag"}," Airbag ",-1),nt=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"ac"}," Aire acondicionado ",-1),ot=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"alarma"}," Alarma ",-1),st=o("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"vidriosElectricos"}," Vidrios eléctricos ",-1);Ae.render=function(e,t,r,l,s,i){return a(),n("form",Oe,[o("div",Be,[ze,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.marca}],type:"text",id:"marca",placeholder:"Marca",value:r.detalles.marca,onInput:t[1]||(t[1]=t=>e.$emit("update","marca",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-rojo\r\n                    text-center text-white\r\n                "},b(r.errores.marca),513),[[u,r.errores.marca]])]),o("div",Ue,[Le,o("select",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"text-gray-400":!r.detalles.categoria}],id:"categoria",value:r.detalles.categoria,onChange:t[2]||(t[2]=t=>e.$emit("update","categoria",t.target.value))},[Pe,(a(!0),n(p,null,g(s.categorias,(e=>(a(),n("option",{key:e,class:"text-gris",value:e},b(e),9,["value"])))),128))],42,["value"]),d(o("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-rojo\r\n                    text-center text-white\r\n                "},b(r.errores.categoria),513),[[u,r.errores.categoria]])]),o("div",Ge,[qe,o("select",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"text-gray-400":!r.detalles.transmision}],id:"transmision",value:r.detalles.transmision,onChange:t[3]||(t[3]=t=>e.$emit("update","transmision",t.target.value))},[Ne,(a(!0),n(p,null,g(s.transmisiones,(e=>(a(),n("option",{key:e,class:"text-gris",value:e},b(e),9,["value"])))),128))],42,["value"]),d(o("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-rojo\r\n                    text-center text-white\r\n                "},b(r.errores.transmision),513),[[u,r.errores.transmision]])]),o("div",Te,[Re,o("select",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"text-gray-400":!r.detalles.combustible}],id:"combustible",value:r.detalles.combustible,onChange:t[4]||(t[4]=t=>e.$emit("update","combustible",t.target.value))},[Ve,(a(!0),n(p,null,g(s.combustibles,(e=>(a(),n("option",{key:e,class:"text-gris",value:e},b(e),9,["value"])))),128))],42,["value"]),d(o("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-rojo\r\n                    text-center text-white\r\n                "},b(r.errores.combustible),513),[[u,r.errores.combustible]])]),o("div",He,[Ze,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.color}],type:"text",id:"color",placeholder:"Color",value:r.detalles.color,onInput:t[5]||(t[5]=t=>e.$emit("update","color",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                    block\r\n                    px-4\r\n                    py-1\r\n                    rounded-lg\r\n                    bg-rojo\r\n                    text-center text-white\r\n                "},b(r.errores.color),513),[[u,r.errores.color]])]),o("div",_e,[o("div",Ke,[We,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.year}],type:"number",id:"year",placeholder:"Año",value:r.detalles.year,onInput:t[6]||(t[6]=t=>e.$emit("update","year",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.year),513),[[u,r.errores.year]])]),o("div",Qe,[Je,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.km}],type:"number",id:"km",placeholder:"Kilometraje",value:r.detalles.km,onInput:t[7]||(t[7]=t=>e.$emit("update","km",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.km),513),[[u,r.errores.km]])]),o("div",Xe,[Ye,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.cilindrada}],type:"number",id:"cilindrada",placeholder:"Cilindrada",value:r.detalles.cilindrada,onInput:t[8]||(t[8]=t=>e.$emit("update","cilindrada",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.cilindrada),513),[[u,r.errores.cilindrada]])]),o("div",et,[tt,o("input",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded text-sm font-light leading-tight",{"bg-red-50 ring-1 ring-inset ring-rojo":r.errores.rendimiento}],type:"number",id:"rendimiento",placeholder:"Rendimiento",value:r.detalles.rendimiento,onInput:t[9]||(t[9]=t=>e.$emit("update","rendimiento",t.target.value))},null,42,["value"]),d(o("small",{class:"\r\n                        block\r\n                        px-4\r\n                        py-1\r\n                        rounded-lg\r\n                        bg-rojo\r\n                        text-center text-white\r\n                    "},b(r.errores.rendimiento),513),[[u,r.errores.rendimiento]])])]),o("div",rt,[o("div",null,[o("input",{class:"h-4 w-4",id:"abs",type:"checkbox",checked:r.detalles.abs,onChange:t[10]||(t[10]=t=>e.$emit("update","abs",t.target.checked))},null,40,["checked"]),lt]),o("div",null,[o("input",{class:"h-4 w-4",id:"airbag",type:"checkbox",checked:r.detalles.airbag,onChange:t[11]||(t[11]=t=>e.$emit("update","airbag",t.target.checked))},null,40,["checked"]),at]),o("div",null,[o("input",{class:"h-4 w-4",id:"ac",type:"checkbox",checked:r.detalles.ac,onChange:t[12]||(t[12]=t=>e.$emit("update","ac",t.target.checked))},null,40,["checked"]),nt]),o("div",null,[o("input",{class:"h-4 w-4",id:"alarma",type:"checkbox",checked:r.detalles.alarma,onChange:t[13]||(t[13]=t=>e.$emit("update","alarma",t.target.checked))},null,40,["checked"]),ot]),o("div",null,[o("input",{class:"h-4 w-4",id:"vidriosElectricos",type:"checkbox",checked:r.detalles.vidriosElectricos,onChange:t[14]||(t[14]=t=>e.$emit("update","vidriosElectricos",t.target.checked))},null,40,["checked"]),st])])])};const it={name:"DetallesItemForm",components:{DetallesCasaForm:Q,DetallesWheelsForm:Ae},props:{tipo:String,detalles:Object,errores:Object},emits:["update"],methods:{actualizarInput(e,t){this.$emit("update","detalles",e,t)}}};it.render=function(e,t,r,l,o,s){return a(),n(v(`Detalles${r.tipo}Form`),{detalles:r.detalles,errores:r.errores,onUpdate:s.actualizarInput},null,8,["detalles","errores","onUpdate"])};const ct={name:"FormFileInput",props:{label:String,archivo:String,error:String},emits:["change"],data:()=>({dragging:!1,hovering:!1})};ct.render=function(e,t,r,l,s,i){return a(),n(p,null,[o("div",{class:["flex relative rounded text-sm bg-white font-light transition-colors duration-200 ease-out appearance-none",{"bg-red-50 ring-1 ring-inset ring-red-400":r.error}]},[o("input",{class:"w-full h-full opacity-0 absolute inset-0 z-20 cursor-pointer",type:"file",onChange:t[1]||(t[1]=t=>e.$emit("change",t.target.files[0])),onDragover:t[2]||(t[2]=e=>s.dragging=!0),onDragleave:t[3]||(t[3]=e=>s.dragging=!1),onDrop:t[4]||(t[4]=e=>s.dragging=!1),onMouseenter:t[5]||(t[5]=e=>s.hovering=!0),onMouseleave:t[6]||(t[6]=e=>s.hovering=!1)},null,32),o("div",{class:["w-full h-full absolute inset-0 z-10 flex justify-center items-center border-3 border-dorado border-dashed rounded bg-claro text-dorado font-bold leading-tight transition-opacity duration-200 ease-out",{"opacity-0":!s.dragging}]}," Suelte aquí su archivo ",2),o("div",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 flex-1 leading-tight",{"text-gray-400":!r.archivo}]},b(r.archivo||"Ningún archivo seleccionado"),3),o("div",{class:["px-4 2xl:px-6 py-1.5 2xl:py-2 rounded-r font-bold text-white leading-tight transition-colors duration-200 ease-out appearance-none",s.hovering||s.dragging?"bg-anaranjado":"bg-dorado"]}," Examinar ",2)],2),d(o("small",{class:"block px-4 py-1 rounded-lg bg-red-400 text-center text-white"},b(r.error),513),[[u,r.error]])],64)};const dt={name:"DocsItemForm",components:{FormFileInput:ct},props:{id:String,og:Object,docs:Object,errores:Object},emits:["update","reset"],data:()=>({dragging:"",hovering:""}),created(){this.$emit("reset")},methods:{logOg(){console.log(this.og)},urlDev:e=>"http://localhost:3000"+e,urlDescarga(e){return this.urlDev(`/api/items/${this.id}/docs/${e}`)},agregarDoc(e,t){const r=new File([t],`${e}.pdf`,{type:"application/pdf"});this.$emit("update","docs","test",r)}}},ut={class:"flex flex-col space-y-3"},pt={class:"flex flex-col space-y-1.5"},gt=o("label",{class:"text-sm font-bold",for:"test"}," Archivo de prueba ",-1),mt={key:0,class:"flex"};dt.render=function(e,t,r,l,s,i){const c=h("FormFileInput");return a(),n("form",ut,[o("div",pt,[gt,r.og.test?(a(),n("div",mt,[o("a",{class:"\r\n                        px-4\r\n                        py-2\r\n                        flex-1\r\n                        rounded-l-lg\r\n                        bg-blue-300\r\n                        text-center\r\n                        font-bold\r\n                        text-white\r\n                    ",href:i.urlDescarga("test")},"Descargar",8,["href"]),o("button",{class:"\r\n                        px-4\r\n                        py-2\r\n                        flex-1\r\n                        rounded-r-lg\r\n                        bg-yellow-500\r\n                        text-center\r\n                        font-bold\r\n                    ",type:"button",onClick:t[1]||(t[1]=t=>e.$emit("borrarOg","test"))}," Reemplazar ")])):(a(),n(c,{key:1,archivo:r.docs.test?r.docs.test.name:"",error:r.errores.test,onChange:t[2]||(t[2]=e=>i.agregarDoc("test",e))},null,8,["archivo","error"])),o("button",{type:"button",onClick:t[3]||(t[3]=(...e)=>i.logOg&&i.logOg(...e))},"OG")])])};const xt={name:"SandwichIcon"},ht={viewBox:"0 0 15 10",class:"stroke-current","stroke-width":"1","stroke-linecap":"round"},bt=o("line",{x1:"1",x2:"14",y1:"1",y2:"1"},null,-1),ft=o("line",{x1:"1",x2:"14",y1:"5",y2:"5"},null,-1),yt=o("line",{x1:"1",x2:"14",y1:"9",y2:"9"},null,-1);xt.render=function(e,t,r,l,o,s){return a(),n("svg",ht,[bt,ft,yt])};const vt={name:"FlechaCirculoIcon"},kt={viewBox:"0 0 32 32"},wt=o("defs",null,[o("mask",{id:"flecha"},[o("rect",{x:"0",y:"0",width:"32",height:"32",fill:"white"}),o("polyline",{points:"13,8 21,16 13,24",stroke:"black","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"})])],-1),jt=o("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor",mask:"url(#flecha)"},null,-1);vt.render=function(e,t,r,l,o,s){return a(),n("svg",kt,[wt,jt])};const Ct={name:"IsotipoIcon"},$t={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 90 90",fill:"currentColor"},It=o("g",null,[o("path",{d:"M80.56 25.91c-1.59 4.16-3.5 8.12-5.66 11.76-2.66 4.47-5.73 8.47-9.12 11.9l-2.76 14.19c-.07.37-.25.7-.51.97L49.69 77.59a1.877 1.877 0 01-3.17-1.69l2.82-14.5c-1.85.94-3.77 1.83-5.77 2.65a1.877 1.877 0 01-2.04-.41l-3.55-3.55-3.3 3.3c-.37.37-.85.55-1.33.55-.48 0-.96-.18-1.33-.55a1.89 1.89 0 010-2.66l3.3-3.3-3.55-3.55c-.54-.54-.7-1.34-.41-2.04.82-1.99 1.7-3.92 2.65-5.77l-14.5 2.82c-.12.02-.24.03-.36.03a1.88 1.88 0 01-1.33-3.21l12.86-12.82c.26-.26.6-.44.97-.51l14.19-2.76c3.43-3.39 7.43-6.45 11.9-9.12 3.64-2.17 7.59-4.07 11.76-5.66 1.31-.5 2.55-.94 3.71-1.32h-49.9c-4.17 0-7.58 3.41-7.58 7.58v43.07l9.11-9.11a1.89 1.89 0 012.66 0c.73.73.73 1.92 0 2.66L16.62 68.59c-.26.26-.57.42-.9.49v3.01c0 1.41.4 2.72 1.07 3.85l10.93-10.93c.73-.73 1.92-.73 2.66 0s.73 1.92 0 2.66L19.45 78.6c1.13.67 2.45 1.07 3.85 1.07h3.01c.08-.33.24-.64.49-.9L37.67 67.9c.73-.73 1.92-.73 2.66 0s.73 1.92 0 2.66l-9.11 9.11h43.07c4.17 0 7.58-3.41 7.58-7.58V22.2c-.38 1.16-.81 2.41-1.31 3.71m-45.25-8.42c2.2 0 3.99 1.79 3.99 3.99s-1.79 3.99-3.99 3.99-3.99-1.79-3.99-3.99 1.79-3.99 3.99-3.99M67.3 74.11a2.39 2.39 0 112.39-2.39 2.384 2.384 0 01-2.39 2.39m9.94-25.78a2.39 2.39 0 110-4.78 2.39 2.39 0 010 4.78"}),o("path",{d:"M48.26 32.5c-3.39 3.39-6.4 7.34-9.01 11.8-.04.08-.08.16-.13.23a72.602 72.602 0 00-3.8 7.59l2.66 2.66 5.37-5.37a1.89 1.89 0 012.66 0c.73.73.73 1.92 0 2.66l-5.37 5.37 2.66 2.66c2.67-1.15 5.2-2.42 7.59-3.8.07-.05.15-.1.23-.14 4.46-2.61 8.41-5.62 11.8-9.01 7.36-7.37 11.74-16.29 14.11-22.48a76.87 76.87 0 002.77-8.77l-.27-.27c-2.14.53-5.21 1.4-8.77 2.77-6.22 2.36-15.14 6.73-22.5 14.1m18.45 5.63a6.649 6.649 0 01-4.73 1.96c-1.78 0-3.46-.7-4.72-1.96a6.649 6.649 0 01-1.96-4.73c0-1.78.7-3.46 1.96-4.72s2.94-1.96 4.72-1.96c1.78 0 3.46.7 4.73 1.96a6.643 6.643 0 011.96 4.72c0 1.79-.7 3.47-1.96 4.73"}),o("path",{d:"M61.99 30.48c-.78 0-1.51.3-2.07.86-.55.55-.86 1.29-.86 2.07 0 .78.3 1.52.86 2.07a2.921 2.921 0 004.14 0 2.921 2.921 0 000-4.13c-.56-.56-1.29-.87-2.07-.87M59.44 62.48l1.69-8.7a63.057 63.057 0 01-7.51 5.24l-2.25 11.54 8.07-8.08zM32.91 35.96l-8.09 8.06 11.54-2.25c1.61-2.68 3.36-5.18 5.24-7.51l-8.69 1.7z"})],-1);Ct.render=function(e,t,r,l,o,s){return a(),n("svg",$t,[It])};export{k as V,K as _,it as a,dt as b,xt as c,vt as d,Ct as e,w as f,$ as g};
