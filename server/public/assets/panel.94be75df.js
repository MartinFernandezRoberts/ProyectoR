import{o as n,c as e,a,g as r,F as t,e as o,r as s,P as i,p as l,i as c,w as d,v as u,d as p,f as g,j as h,m,t as b,k as f,C as x,s as y,n as k,q as w,u as v,x as C,l as B}from"./vendor.10bc82b5.js";import{C as I}from"./index.795ee0db.js";const j={name:"Panel"},D={class:"\r\n            flex\r\n            items-center\r\n            justify-between\r\n            flex-wrap\r\n            bg-black\r\n            p-6\r\n            mb-10\r\n            text-white\r\n        "},U=a("div",{class:"flex items-center"},[a("h1",{class:"text-xl font-bold"},"ProyectoR"),a("h2",null,[a("span",{class:"text-pink-600 font-bold mx-1"}," >"),o("Panel de Control ")])],-1),F=o(" Casa "),$=a("span",{class:"mx-2"},"|",-1),S=o(" Banners "),M=a("span",{class:"mx-2"},"|",-1),_=o(" Banner Test ");j.render=function(o,i,l,c,d,u){const p=s("router-link"),g=s("router-view");return n(),e(t,null,[a("nav",D,[U,a("div",null,[a(p,{to:"/panel/casa","active-class":"text-pink-600 font-bold"},{default:r((()=>[F])),_:1}),$,a(p,{to:"/panel/banners","active-class":"text-pink-600 font-bold"},{default:r((()=>[S])),_:1}),M,a(p,{to:"/panel/banner_test","active-class":"text-pink-600 font-bold"},{default:r((()=>[_])),_:1})])]),a(g)],64)};const z={name:"UploadIcon"},G={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor"},L=a("g",{"data-name":"Upload Image"},[a("g",{"data-name":"<Group>"},[a("g",{"data-name":"<Group>"},[a("g",{"data-name":"<Group>"},[a("circle",{"data-name":"<Path>",cx:"18.5",cy:"16.5",r:"5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"})]),a("path",{"data-name":"<Path>",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 15.5l2-2 2 2M18.5 13.5v6"})]),a("g",{"data-name":"<Group>",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[a("path",{"data-name":"<Path>",d:"M.6 15.42l5.4-5.4L8.98 13"}),a("path",{"data-name":"<Path>",d:"M17.16 11.68L12.5 7.02l-4.73 4.77"}),a("circle",{"data-name":"<Path>",cx:"8",cy:"6.02",r:"1.5"}),a("path",{"data-name":"<Path>",d:"M19.5 11.6V4A1.5 1.5 0 0018 2.5H2A1.5 1.5 0 00.5 4v11A1.5 1.5 0 002 16.5h11.5"})])])],-1);z.render=function(a,r,t,o,s,i){return n(),e("svg",G,[L])};const P={name:"DeleteIcon"},V={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},A=a("circle",{cx:"12",cy:"12",r:"10"},null,-1),E=a("path",{d:"M15 9l-6 6M9 9l6 6"},null,-1);P.render=function(a,r,t,o,s,i){return n(),e("svg",V,[A,E])};const T={name:"ZoomIcon"},O={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},R=a("circle",{cx:"11",cy:"11",r:"8"},null,-1),N=a("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},null,-1),H=a("line",{x1:"11",y1:"8",x2:"11",y2:"14"},null,-1),q=a("line",{x1:"8",y1:"11",x2:"14",y2:"11"},null,-1);T.render=function(a,r,t,o,s,i){return n(),e("svg",O,[R,N,H,q])};const Z={name:"StarIcon"},J={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},K=a("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},null,-1);Z.render=function(a,r,t,o,s,i){return n(),e("svg",J,[K])};const Q={name:"MultiImgDrop",components:{UploadIcon:z,DeleteIcon:P,ZoomIcon:T,StarIcon:Z},props:{images:Array},emits:["update"],data:()=>({previews:[],dragging:!1,modal:!1,curSlide:0,featured:0,scrollbar:null}),computed:{notEmpty(){return this.images.length>0}},methods:{drop(n){console.log("image dropped"),this.addFiles(n.dataTransfer.files),this.dragging=!1},addFiles(n){const e=this.images,a=this;for(let r=0;r<n.length;r++){const t=n[r];console.log("adding image "+r),a.previews.push(URL.createObjectURL(t)),e.push(t)}console.log("updating images..."),this.$emit("update",e),setTimeout((()=>{console.log("updating scrollbar..."),this.scrollbar.update()}),100)},rmFile(n){n<this.featured?this.featured--:n==this.featured&&(this.featured=0);const e=this.images;e.splice(n,1),this.previews.splice(n,1),this.$emit("update",e),this.$nextTick((function(){this.scrollbar.update()}))},limpiar(){this.previews.length=0,this.$emit("update",[])},openLightbox(n){this.curSlide=n,this.modal=!0},slide(n){(n+=this.curSlide)<0?n=this.images.length-1:n==this.images.length&&(n=0),this.curSlide=n}},mounted(){this.scrollbar=new i("#previews")}},W=h();l("data-v-7b051ce3");const X={class:"mx-auto"},Y={class:"\r\n                    flex flex-col\r\n                    justify-center\r\n                    items-center\r\n                    text-center text-gray-500\r\n                    rounded-lg\r\n                "},nn=a("p",null,"Haz click o arrastra tus imágenes aquí",-1),en={class:"mt-4 border-2 rounded shadow-inner"},an={id:"previews",class:"relative px-3 py-4 z-20 flex h-52 flex-nowrap"},rn={id:"controls",class:"\r\n                                absolute\r\n                                w-full\r\n                                h-full\r\n                                flex flex-col\r\n                                justify-around\r\n                                items-center\r\n                                opacity-0\r\n                                rounded\r\n                                bg-black bg-opacity-50\r\n                                hover:opacity-100\r\n                                transition-opacity\r\n                                duration-300\r\n                                ease-out\r\n                            "},tn={id:"lightbox",class:"\r\n                fixed\r\n                z-20\r\n                inset-0\r\n                text-3xl\r\n                bg-black bg-opacity-75\r\n                flex\r\n                justify-between\r\n                items-center\r\n            "},on={class:"w-4/5 h-full"};c();const sn=W(((r,o,i,l,c,h)=>{const m=s("UploadIcon"),b=s("StarIcon"),f=s("ZoomIcon"),x=s("DeleteIcon");return n(),e("div",X,[a("div",{class:["relative p-6 bg-gray-50 border-4 border-dashed border-gray-300 rounded-lg transition-colors duration-200 ease-out",{" border-blue-200":c.dragging}],onDragover:o[3]||(o[3]=g((n=>c.dragging=!0),["prevent"])),onDragleave:o[4]||(o[4]=g((n=>c.dragging=!1),["prevent"])),onDrop:o[5]||(o[5]=g((n=>h.drop(n)),["prevent"]))},[d(a("button",{class:"\r\n                    relative\r\n                    px-2\r\n                    z-20\r\n                    border border-gray-300\r\n                    rounded\r\n                    text-gray-300\r\n                    font-bold\r\n                    hover:border-0 hover:bg-gray-300 hover:text-white\r\n                ",type:"button",onClick:o[1]||(o[1]=(...n)=>h.limpiar&&h.limpiar(...n))}," limpiar ",512),[[u,h.notEmpty]]),a("input",{class:"\r\n                    w-full\r\n                    h-full\r\n                    opacity-0\r\n                    absolute\r\n                    inset-0\r\n                    z-10\r\n                    cursor-pointer\r\n                ",type:"file",accept:"image/*",onChange:o[2]||(o[2]=n=>h.addFiles(n.target.files)),multiple:""},null,32),a("div",Y,[a(m,{class:["stroke-current",h.notEmpty?"w-14":"w-36"]},null,8,["class"]),nn]),d(a("div",en,[a("div",an,[(n(!0),e(t,null,p(i.images,((r,t)=>(n(),e("div",{key:t,class:["relative h-full flex-none",{"rounded ring-4 ring-yellow-300":c.featured==t,"ml-4":t>0}]},[a("div",rn,[a(b,{class:"text-yellow-300 cursor-pointer",onClick:n=>c.featured=t},null,8,["onClick"]),a(f,{class:"text-white cursor-pointer",onClick:n=>h.openLightbox(t)},null,8,["onClick"]),a(x,{class:"text-red-500 cursor-pointer",onClick:n=>h.rmFile(t)},null,8,["onClick"])]),a("img",{class:"object-cover h-full rounded",src:c.previews[t],alt:`imagen ${t}`},null,8,["src","alt"])],2)))),128))])],512),[[u,h.notEmpty]])],34),d(a("div",tn,[a("span",{class:"\r\n                    text-white\r\n                    absolute\r\n                    top-12\r\n                    right-12\r\n                    font-bold\r\n                    cursor-pointer\r\n                    hover:text-gray-200\r\n                ",onClick:o[6]||(o[6]=n=>c.modal=!1)},"×"),a("a",{class:"cursor-pointer p-8 text-white font-bold",onClick:o[7]||(o[7]=n=>h.slide(-1))},"❮"),a("div",on,[(n(!0),e(t,null,p(i.images,((a,r)=>d((n(),e("img",{key:r,onClick:o[8]||(o[8]=n=>c.modal=!1),class:"w-full h-full object-contain cursor-pointer",src:c.previews[r],alt:`imagen ${r}`},null,8,["src","alt"])),[[u,r==c.curSlide]]))),128))]),a("a",{class:"cursor-pointer p-8 text-white font-bold",onClick:o[9]||(o[9]=n=>h.slide(1))},"❯")],512),[[u,c.modal]])])}));Q.render=sn,Q.__scopeId="data-v-7b051ce3";const ln={name:"CasaForm",components:{ImgDropMulti:Q},props:{casa:{type:Object,default:function(){return{imagenCasa:[],tituloCasa:"",descripcionCasa:"",ubicacionCasa:"",fechaCasa:""}}},guardando:Boolean},emits:["close","guardar"],data(){return{imagenCasa:this.casa.imagenCasa,tituloCasa:this.casa.tituloCasa,descripcionCasa:this.casa.descripcionCasa,ubicacionCasa:this.casa.ubicacionCasa,fechaCasa:this.casa.fechaCasa}},methods:{handleSubmit(){let n=new FormData;this.imagenCasa.forEach((e=>{n.append("files",e)})),n.set("tituloCasa",this.tituloCasa),n.set("descripcionCasa",this.descripcionCasa),n.set("ubicacionCasa",this.ubicacionCasa),n.set("fechaCasa",this.fechaCasa),this.$emit("guardar",n)}}},cn={class:"bg-white shadow rounded px-8 pt-6 pb-8 mb-4 flow-root"},dn={class:"mb-4"},un=a("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"tituloCasa"}," Título ",-1),pn={class:"mb-4"},gn=a("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"descripcionCasa"}," Descripción ",-1),hn={class:"mb-4"},mn=a("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"ubicacionCasa"}," Ubicación ",-1),bn={class:"mb-6"},fn=a("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"fechaCasa"}," Fecha ",-1),xn={class:"float-right space-x-2"};ln.render=function(r,t,o,i,l,c){const u=s("ImgDropMulti");return n(),e("form",cn,[a("div",dn,[un,d(a("input",{class:"\r\n                    appearance-none\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    w-full\r\n                    py-1\r\n                    px-2\r\n                    text-gray-700\r\n                    leading-tight\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",id:"tituloCasa",type:"text",placeholder:"Título","onUpdate:modelValue":t[1]||(t[1]=n=>l.tituloCasa=n)},null,512),[[m,l.tituloCasa]])]),a("div",pn,[gn,d(a("textarea",{class:"\r\n                    appearance-none\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    w-full\r\n                    py-2\r\n                    px-3\r\n                    text-gray-700\r\n                    leading-tight\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",id:"descripcionCasa",type:"text",placeholder:"Descripción","onUpdate:modelValue":t[2]||(t[2]=n=>l.descripcionCasa=n)},null,512),[[m,l.descripcionCasa]])]),a("div",hn,[mn,d(a("input",{class:"\r\n                    appearance-none\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    w-full\r\n                    py-2\r\n                    px-3\r\n                    text-gray-700\r\n                    leading-tight\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",id:"ubicacionCasa",placeholder:"Descripción","onUpdate:modelValue":t[3]||(t[3]=n=>l.ubicacionCasa=n)},null,512),[[m,l.ubicacionCasa]])]),a("div",bn,[fn,d(a("input",{class:"\r\n                    appearance-none\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    w-full\r\n                    py-2\r\n                    px-3\r\n                    text-gray-700\r\n                    leading-tight\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",id:"fechaCasa",type:"date","onUpdate:modelValue":t[4]||(t[4]=n=>l.fechaCasa=n)},null,512),[[m,l.fechaCasa]])]),a(u,{class:"mb-6",images:l.imagenCasa,onUpdate:t[5]||(t[5]=n=>l.imagenCasa=n)},null,8,["images"]),a("div",xn,[a("button",{class:"\r\n                    bg-gray-400\r\n                    hover:bg-gray-600\r\n                    text-white\r\n                    font-bold\r\n                    py-2\r\n                    px-4\r\n                    rounded\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",type:"button",onClick:t[6]||(t[6]=n=>r.$emit("close"))}," Cerrar "),a("button",{class:["bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-200",{"animate-pulse":o.guardando}],type:"button",onClick:t[7]||(t[7]=(...n)=>c.handleSubmit&&c.handleSubmit(...n))}," Guardar ",2)])])};const yn={name:"EditIcon"},kn={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},wn=a("path",{d:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"},null,-1),vn=a("path",{d:"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"},null,-1);yn.render=function(a,r,t,o,s,i){return n(),e("svg",kn,[wn,vn])};const Cn={name:"CasaList",components:{CasaForm:ln,EditIcon:yn,DeleteIcon:P},props:{casas:Array},emits:["cargarCasas"],data:()=>({error:"",edit:"",guardando:!1,eliminando:""}),methods:{async actualizarCasa(n){this.guardando=!0,await I.update(this.edit,n),this.guardando=!1,this.$emit("cargarCasa")},async eliminarCasa(n){this.eliminando=n,await I.delete(n),this.eliminando="",this.$emit("cargarCasa")}}},Bn={key:0,class:"error"},In={class:"grid grid-cols-3 gap-4"},jn={key:1},Dn={class:"flex justify-between"},Un={class:"text-xl"},Fn={class:"text-sm text-gray-600"},$n={class:"text-lg"},Sn={class:"flex justify-end pt-3 space-x-2"};Cn.render=function(r,o,i,l,c,d){const u=s("CasaForm"),g=s("EditIcon"),h=s("DeleteIcon");return n(),e(t,null,[c.error?(n(),e("p",Bn,b(c.error),1)):f("",!0),a("div",In,[(n(!0),e(t,null,p(i.casas,(r=>(n(),e("div",{key:r._id,class:"border rounded p-5 bg-gray-100 shadow"},[c.edit==r._id?(n(),e(u,{key:0,casa:r,guardando:c.guardando,onClose:o[1]||(o[1]=n=>c.edit=""),onGuardar:d.actualizarCasa},null,8,["casa","guardando","onGuardar"])):(n(),e("div",jn,[a("div",Dn,[a("h3",Un,b(r.tituloCasa),1),a("small",Fn,b(r.estadoCasa),1)]),r.imagenCasa?(n(),e("img",{key:0,src:r.imagenCasa[0],alt:r.tituloCasa},null,8,["src","alt"])):f("",!0),a("h4",$n,b(r.descripcionCasa),1),a("p",null,b(r.ubicacionCasa),1),a("p",null,b(r.fechaCasa),1),a("div",Sn,[a(g,{class:"text-yellow-400 cursor-pointer",onClick:n=>c.edit=r._id},null,8,["onClick"]),a(h,{class:["text-red-500",c.eliminando==r._id?"animate-bounce":"cursor-pointer"],onClick:n=>d.eliminarCasa(r._id)},null,8,["class","onClick"])])]))])))),128))])],64)};const Mn={name:"CasaMain",components:{CasaForm:ln,CasaList:Cn},data:()=>({casas:[],nuevo:!1,guardando:!1}),methods:{compararFecha:(n,e)=>n.fechaCasa>e.fechaCasa?-1:e.fechaCasa>n.fechaCasa?1:0,async cargarCasas(){try{const n=await I.index();this.casas=n.sort(this.compararFecha)}catch(n){this.error=n.message}},async crearCasa(n){this.guardando=!0,await I.create(n),this.guardando=!1,this.nuevo=!1,this.cargarCasas()}},created(){this.cargarCasas()}},_n={class:"container mx-auto pb-10 space-y-4"};Mn.render=function(r,t,o,i,l,c){const d=s("CasaForm"),u=s("CasaList");return n(),e("div",_n,[l.nuevo?(n(),e(d,{key:1,guardando:l.guardando,onClose:t[2]||(t[2]=n=>l.nuevo=!1),onGuardar:c.crearCasa},null,8,["guardando","onGuardar"])):(n(),e("button",{key:0,class:"\r\n                w-full\r\n                border border-pink-600\r\n                rounded\r\n                px-5\r\n                hover:bg-pink-600 hover:shadow\r\n                text-pink-600\r\n                hover:text-white\r\n                text-xl\r\n                uppercase\r\n                font-bold\r\n            ",onClick:t[1]||(t[1]=n=>l.nuevo=!0)}," Nueva Casa ")),a(u,{casas:l.casas,onCargarCasas:c.cargarCasas},null,8,["casas","onCargarCasas"])])};const zn="http://localhost:3000/api/banners/";class Gn{static async index(){return await x.get(zn).then((n=>n.data.banners)).catch((n=>console.error(n)))}static async create(n){return await x.post(zn,n).then((n=>console.log(n))).catch((n=>console.error(n)))}static async agendar(n){return await x.post(`${zn}agendar`,n).then((n=>console.log(n))).catch((n=>console.error(n)))}static async update(n,e){return console.log("id: "+n),console.log("data:"),console.log(e),await x.put(`${zn}editar/${n}`,e).then((n=>console.log(n))).catch((n=>console.error(n)))}static async delete(n){return await x.delete(`${zn}${n}`).then((n=>{console.log(n)})).catch((n=>{console.error(n)}))}}const Ln={name:"ImgDropSingle",components:{UploadIcon:z},props:["image"],emits:["update"],data:()=>({preview:"",dragging:!1,hovering:!1}),methods:{drop(n){this.addFile(n.dataTransfer.files[0]),this.dragging=!1},addFile(n){this.preview=URL.createObjectURL(n),this.$emit("update",n)}}},Pn={class:"relative"},Vn=a("p",null,"Haz click o arrastra tu imagen aquí",-1);Ln.render=function(r,t,o,i,l,c){const d=s("UploadIcon");return n(),e("div",{id:"upload",class:["relative w-full h-full mx-auto p-6 bg-gray-50 border-4 border-dashed border-gray-300 rounded-lg transition-colors duration-200 ease-out",{" border-blue-200":l.dragging}],onDragover:t[4]||(t[4]=g((n=>l.dragging=l.hovering=!0),["prevent"])),onDragleave:t[5]||(t[5]=g((n=>l.dragging=l.hovering=!1),["prevent"])),onDrop:t[6]||(t[6]=g((n=>c.drop(n)),["prevent"]))},[a("input",{class:"w-full h-full opacity-0 absolute inset-0 z-20 cursor-pointer",type:"file",accept:"image/*",onChange:t[1]||(t[1]=n=>c.addFile(n.target.files[0])),onMouseenter:t[2]||(t[2]=n=>l.hovering=!0),onMouseleave:t[3]||(t[3]=n=>l.hovering=!1)},null,32),a("div",Pn,[a("img",{class:"w-full object-contain rounded-lg shadow-inner",src:l.preview,alt:""},null,8,["src"]),a("div",{class:["flex flex-col justify-center items-center text-center rounded-lg transition-all duration-300 ease-out",l.preview?" absolute inset-0 z-10 bg-black text-gray-200"+(l.hovering?" opacity-100 bg-opacity-50":" opacity-0"):" text-gray-500"]},[a(d,{class:"w-36"}),Vn],2)])],34)};const An={name:"BannerForm",components:{ImgDropSingle:Ln},props:{banner:{type:Object,default:function(){return{tituloBanner:"",imagenBanner:"",urlBanner:""}}},guardando:Boolean},emits:["close","guardar"],data(){return{tituloBanner:this.banner.tituloBanner,imagenBanner:this.banner.imagenBanner,urlBanner:this.banner.urlBanner}},methods:{handleSubmit(){let n=new FormData;n.set("file",this.imagenBanner),n.set("tituloBanner",this.tituloBanner),n.set("urlBanner",this.urlBanner),this.$emit("guardar",n)}}},En={class:"\r\n            mx-auto\r\n            w-1/2\r\n            bg-white\r\n            shadow\r\n            rounded\r\n            px-8\r\n            pt-6\r\n            pb-8\r\n            mb-4\r\n            flow-root\r\n        "},Tn={class:"mb-4"},On=a("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"tituloBanner"}," Título ",-1),Rn={class:"mb-4"},Nn=a("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"urlBanner"}," Url ",-1),Hn={class:"float-right space-x-2"};An.render=function(r,t,o,i,l,c){const u=s("ImgDropSingle");return n(),e("form",En,[a("div",Tn,[On,d(a("input",{class:"\r\n                    appearance-none\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    w-full\r\n                    py-1\r\n                    px-2\r\n                    text-gray-700\r\n                    leading-tight\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",id:"tituloBanner",type:"text",placeholder:"Título","onUpdate:modelValue":t[1]||(t[1]=n=>l.tituloBanner=n)},null,512),[[m,l.tituloBanner]])]),a(u,{class:"mb-6",images:l.imagenBanner,onUpdate:t[2]||(t[2]=n=>l.imagenBanner=n)},null,8,["images"]),a("div",Rn,[Nn,d(a("input",{class:"\r\n                    appearance-none\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    w-full\r\n                    py-1\r\n                    px-2\r\n                    text-gray-700\r\n                    leading-tight\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",id:"urlBanner",type:"text",placeholder:"Url","onUpdate:modelValue":t[3]||(t[3]=n=>l.urlBanner=n)},null,512),[[m,l.urlBanner]])]),a("div",Hn,[a("button",{class:"\r\n                    bg-gray-400\r\n                    hover:bg-gray-600\r\n                    text-white\r\n                    font-bold\r\n                    py-2\r\n                    px-4\r\n                    rounded\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",type:"button",onClick:t[4]||(t[4]=n=>r.$emit("close"))}," Cerrar "),a("button",{class:["bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-200",{"animate-pulse":o.guardando}],type:"button",onClick:t[5]||(t[5]=(...n)=>c.handleSubmit&&c.handleSubmit(...n))}," Guardar ",2)])])};const qn={name:"BannerAgenda",components:{DatePicker:y},props:{banner:Object,agenda:{type:Object,default:function(){return{ubicacion:"",fechaIni:"",fechaFin:"",horario:!1,recurrencia:"",iteracion:""}}},guardando:Boolean},emits:["cerrar","guardar"],data(){return{ubicaciones:[],recurrencias:["continuado","semanal"],ubicacion:this.agenda.ubicacion,fechas:{start:new Date(this.agenda.fechaIni),end:new Date(this.agenda.fechaFin)},datePickerConfig:{start:{timeAdjust:"00:00:00"},end:{timeAdjust:"23:55:00"}},horario:this.agenda.horario,recurrencia:this.agenda.recurrencia,iteracion:this.agenda.iteracion}},created(){x("http://localhost:3000/api/ubicaciones").then((n=>this.ubicaciones=n.data)).catch((n=>console.error(n)))},methods:{handleSubmit(){let n={ubicacion:this.ubicacion,idBanner:this.banner._id,fechaIni:this.fechas.start.toISOString(),fechaFin:this.fechas.end.toISOString(),horario:this.horario,recurrencia:this.recurrencia,iteracion:this.iteracion};this.$emit("guardar",n)}}},Zn={class:"mb-2 text-xl text-center"},Jn={class:"bg-white shadow rounded px-8 pt-6 pb-8 mb-4 flow-root"},Kn={class:"mb-4"},Qn=a("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"ubicacion"}," Ubicación ",-1),Wn=a("option",{value:"",disabled:"",selected:"",hidden:""}," Selecciona una ubicación ",-1),Xn={class:"mb-4"},Yn=a("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"fechas"}," Rango de fechas ",-1),ne={class:"mb-4"},ee=a("label",{class:"ml-3 text-gray-700 text-sm font-bold mb-2",for:"horario"}," Aplicar horario cada día ",-1),ae={class:"mb-4"},re=a("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"recurrencia"}," Recurrencia ",-1),te=a("option",{value:"",disabled:"",selected:"",hidden:""}," Selecciona un tipo de recurrencia ",-1),oe={class:"mb-4"},se=a("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"iteracion"}," Repeticiones ",-1),ie={class:"float-right space-x-2"};qn.render=function(r,o,i,l,c,g){const h=s("DatePicker");return n(),e(t,null,[a("h2",Zn,b(i.banner.tituloBanner),1),a("form",Jn,[a("div",Kn,[Qn,d(a("select",{class:["border rounded border-pink-200 w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-200",c.ubicacion?"text-gray-700":"text-gray-400"],id:"ubicacion","onUpdate:modelValue":o[1]||(o[1]=n=>c.ubicacion=n)},[Wn,(n(!0),e(t,null,p(c.ubicaciones,((a,r)=>(n(),e("option",{class:"text-gray-700",key:r,value:a},b(`${a[0].toUpperCase()}${a.slice(1)}`),9,["value"])))),128))],2),[[k,c.ubicacion]])]),a("div",Xn,[Yn,a(h,{id:"fechas",mode:"dateTime","is-range":"","minute-increment":5,"min-date":new Date,color:"pink","model-config":c.datePickerConfig,modelValue:c.fechas,"onUpdate:modelValue":o[2]||(o[2]=n=>c.fechas=n)},null,8,["min-date","model-config","modelValue"])]),a("div",ne,[d(a("input",{class:"\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    h-4\r\n                    w-4\r\n                    text-gray-700\r\n                    focus:ring-2 focus:ring-pink-200\r\n                ",id:"horario",type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=n=>c.horario=n)},null,512),[[w,c.horario]]),ee]),a("div",ae,[re,d(a("select",{class:["border rounded border-pink-200 w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-pink-200",c.recurrencia?"text-gray-700":"text-gray-400"],id:"recurrencia","onUpdate:modelValue":o[4]||(o[4]=n=>c.recurrencia=n)},[te,(n(!0),e(t,null,p(c.recurrencias,((a,r)=>(n(),e("option",{class:"text-gray-700",key:r,value:a},b(`${a[0].toUpperCase()}${a.slice(1)}`),9,["value"])))),128))],2),[[k,c.recurrencia]])]),d(a("div",oe,[se,d(a("input",{class:"\r\n                    border\r\n                    rounded\r\n                    border-pink-200\r\n                    w-full\r\n                    py-1\r\n                    px-2\r\n                    text-gray-700\r\n                    leading-tight\r\n                    focus:outline-none focus:ring-2 focus:ring-pink-200\r\n                ",id:"iteracion",type:"number",placeholder:"Número de repeticiones","onUpdate:modelValue":o[5]||(o[5]=n=>c.iteracion=n)},null,512),[[m,c.iteracion]])],512),[[u,c.recurrencia&&"continuado"!==c.recurrencia]]),a("div",ie,[a("button",{class:"\r\n                    bg-gray-400\r\n                    hover:bg-gray-600\r\n                    text-white\r\n                    font-bold\r\n                    py-2\r\n                    px-4\r\n                    rounded\r\n                    focus:outline-none\r\n                    focus:shadow-outline\r\n                    focus:ring-2\r\n                    focus:ring-pink-200\r\n                ",type:"button",onClick:o[6]||(o[6]=n=>r.$emit("cerrar"))}," Cerrar "),a("button",{class:["bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-200",{"animate-pulse":i.guardando}],type:"button",onClick:o[7]||(o[7]=(...n)=>g.handleSubmit&&g.handleSubmit(...n))}," Guardar ",2)])])],64)};const le={name:"CalendarIcon"},ce={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-calendar"},de=a("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},null,-1),ue=a("path",{d:"M16 2v4M8 2v4M3 10h18"},null,-1);le.render=function(a,r,t,o,s,i){return n(),e("svg",ce,[de,ue])};const pe={name:"BannerList",components:{BannerForm:An,BannerAgenda:qn,EditIcon:yn,DeleteIcon:P,CalendarIcon:le},props:{banners:Array},emits:["cargarBanner"],data:()=>({edit:"",guardando:!1,eliminando:"",error:"",calendarizar:""}),methods:{async actualizarBanner(n){this.guardando=!0,await Gn.update(this.edit,n),this.guardando=!1,this.$emit("cargarBanner")},async borrarBanner(n){this.eliminando=n,await Gn.delete(n),this.eliminando="",this.$emit("cargarBanner")},async agendar(n){await Gn.agendar(n),this.$emit("cargarBanner")}}},ge={key:0,class:"error"},he={class:"grid grid-cols-3 gap-4"},me={key:2,class:"text-center"},be={class:"text-xl mb-2"},fe={class:"flex justify-end pt-3 space-x-2"};pe.render=function(r,o,i,l,c,d){const u=s("BannerForm"),g=s("BannerAgenda"),h=s("CalendarIcon"),m=s("EditIcon"),x=s("DeleteIcon");return n(),e(t,null,[c.error?(n(),e("p",ge,b(c.error),1)):f("",!0),a("div",he,[(n(!0),e(t,null,p(i.banners,(r=>(n(),e("div",{key:r._id,class:"border rounded mb-10 p-5 bg-gray-100 shadow divide-y"},[c.edit==r._id?(n(),e(u,{key:0,banner:r,guardando:c.guardando,onClose:o[1]||(o[1]=n=>c.edit=""),onGuardar:d.actualizarBanner},null,8,["banner","guardando","onGuardar"])):c.calendarizar===r._id?(n(),e(g,{key:1,banner:r,onCerrar:o[2]||(o[2]=n=>c.calendarizar=""),onGuardar:d.agendar},null,8,["banner","onGuardar"])):(n(),e("div",me,[a("h2",be,b(r.tituloBanner),1),a("img",{class:"mb-2 mx-auto rounded-lg",src:r.imagenBanner,alt:r.tituloBanner},null,8,["src","alt"]),a("a",{href:r.urlBanner},b(r.urlBanner),9,["href"]),a("div",fe,[a(h,{class:"text-blue-400 cursor-pointer",onClick:n=>c.calendarizar=r._id},null,8,["onClick"]),a(m,{class:"text-yellow-400 cursor-pointer",onClick:n=>c.edit=r._id},null,8,["onClick"]),a(x,{class:["text-red-500",c.eliminando==r._id?"animate-bounce":"cursor-pointer"],onClick:n=>d.borrarBanner(r._id)},null,8,["class","onClick"])])]))])))),128))])],64)};const xe={name:"BannerMain",components:{BannerForm:An,BannerList:pe},data:()=>({banners:[],nuevo:!1,guardando:!1,error:""}),created(){this.cargarBanners()},methods:{async cargarBanners(){try{this.banners=await Gn.index()}catch(n){this.error=n.message}},async crearBanner(n){this.guardando=!0,await Gn.create(n),this.guardando=!1,this.nuevo=!1,this.cargarBanners()}}},ye={class:"container mx-auto pb-10"},ke={key:0,class:"text-center bg-red-200 mb-5 p-4 rounded shadow"};xe.render=function(r,t,o,i,l,c){const d=s("BannerForm"),u=s("BannerList");return n(),e("div",ye,[l.error?(n(),e("div",ke,b(l.error),1)):f("",!0),l.nuevo?(n(),e(d,{key:2,guardando:l.guardando,onClose:t[2]||(t[2]=n=>l.nuevo=!1),onGuardar:c.crearBanner},null,8,["guardando","onGuardar"])):(n(),e("button",{key:1,class:"\r\n                w-full\r\n                border border-pink-600\r\n                rounded\r\n                mb-5\r\n                px-5\r\n                hover:bg-pink-600 hover:shadow\r\n                text-pink-600\r\n                hover:text-white\r\n                text-xl\r\n                uppercase\r\n                font-bold\r\n            ",onClick:t[1]||(t[1]=n=>l.nuevo=!0)}," Nuevo Banner ")),a(u,{banners:l.banners,onCargarBanner:c.cargarBanners},null,8,["banners","onCargarBanner"])])};const we={name:"BannerTest",data:()=>({banners:{principal:"",ladito:""}}),created(){x("http://localhost:3000/api/banners/principal").then((n=>this.banners.principal=n.data)).catch((n=>console.error(n))),x("http://localhost:3000/api/banners/ladito").then((n=>this.banners.ladito=n.data)).catch((n=>console.error(n)))}},ve={class:"container mx-auto flex flex-col items-center"},Ce=a("h1",{class:"mb-14 text-3xl"},"Serial Experiments Banners",-1),Be={class:"mb-2 text-xl capitalize"};we.render=function(r,o,s,i,l,c){return n(),e("div",ve,[Ce,(n(!0),e(t,null,p(l.banners,((r,t)=>(n(),e("figure",{key:t,class:"mb-10"},[a("figcaption",Be,b(t),1),a("img",{src:r,alt:`banner ${t}`,width:"336"},null,8,["src","alt"])])))),128))])};const Ie={name:"NotFound"};Ie.render=function(a,r,t,o,s,i){return n(),e("h1",null,"Error 404: No encontrado")};const je=[{path:"/panel/casa",component:Mn},{path:"/panel/banners",component:xe},{path:"/panel/banner_test",component:we},{path:"/panel/:pathMatch(.*)",component:Ie}],De=v({history:C(),routes:je});B(j).use(De).mount("#panel");