(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4609)}])},4609:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ej}});var s=t(5893),a=t(7294);let l=(0,t(8213).createBrowserClient)("https://zvffdsdravynurjomyow.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2ZmZkc2RyYXZ5bnVyam9teW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4NDMwNjcsImV4cCI6MjAzNTQxOTA2N30.jv1PkitkAtWQjlbguVypapvcxuZbSEz_MYHpoSN5BnA"),i=async()=>await l.from("products").select("*"),n=async e=>{let{data:r,error:t}=await l.from("products").select().eq("id",e);return t||r},o=async e=>{let{values:r,img:t}=e;if(console.log(r),"id"in r){console.log("updateAPI",r);let{data:e,error:s}=await l.storage.from("logo").update("".concat(r.id,".jpg"),t,{cacheControl:"0",upsert:!0});if(s||!e)throw Error("Error uploading file or fileRes is null");let{path:a,fullPath:i}=e,n={...r,image_url:i},{data:o,error:d}=await l.from("products").update(n).eq("id",r.id).select();return d||o}{console.log(r);let{data:e,error:s}=await l.from("products").insert(r).select();if(s||!e||0===e.length)throw Error("Error inserting product or userDetails is null");let a=e[0].id,{data:i,error:n}=await l.storage.from("logo").upload("".concat(a,".jpg"),t,{cacheControl:"0",upsert:!0});if(n||!i)throw Error("Error uploading file or fileRes is null");let{path:o,fullPath:d}=i,{data:c,error:u}=await l.from("products").update({...r,image_url:d}).eq("id",a).select();if(u||!c)throw Error("Error updating product or updatedProduct is null");return c}},d=async e=>{let r;let{error:t}=await l.storage.from("logo").remove(["".concat(e,".jpg")]);return t||(r=await l.from("products").delete().eq("id",e)),r};var c=t(202),u=t(777),m=t(8029),h=t(512),f=t(8388);function x(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,f.m6)((0,h.W)(r))}let p=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:x("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});p.displayName="Card",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:x("flex flex-col space-y-1.5 p-6",t),...a})}).displayName="CardHeader",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("h3",{ref:r,className:x("text-2xl font-semibold leading-none tracking-tight",t),...a})}).displayName="CardTitle",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("p",{ref:r,className:x("text-sm text-muted-foreground",t),...a})}).displayName="CardDescription",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:x("p-6 pt-0",t),...a})}).displayName="CardContent",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:x("flex items-center p-6 pt-0",t),...a})}).displayName="CardFooter";var g=t(8649);let j=g.zt,v=g.fC,y=g.xz,b=a.forwardRef((e,r)=>{let{className:t,sideOffset:a=4,...l}=e;return(0,s.jsx)(g.VY,{ref:r,sideOffset:a,className:x("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...l})});b.displayName=g.VY.displayName;var w=t(9979),N=t(5465),z=t(4440),k=t(8453),C=t(8527),S=t(4528),E=t(8426),R=t(5139);let I=(0,R.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Z=a.forwardRef((e,r)=>{let{className:t,variant:a,size:l,asChild:i=!1,...n}=e,o=i?E.g7:"button";return(0,s.jsx)(o,{className:x(I({variant:a,size:l,className:t})),ref:r,...n})});Z.displayName="Button";var F=t(5274),L=t(4712),A=t(8193),_=t(6312),X=t(7536),P=t(1604),T=t(6848),V=t(5197),M=t(9102);let O=(0,R.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),q=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(M.f,{ref:r,className:x(O(),t),...a})});q.displayName=M.f.displayName;let D=X.RV,J=a.createContext({}),Y=e=>{let{...r}=e;return(0,s.jsx)(J.Provider,{value:{name:r.name},children:(0,s.jsx)(X.Qr,{...r})})},U=()=>{let e=a.useContext(J),r=a.useContext(B),{getFieldState:t,formState:s}=(0,X.Gc)(),l=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=r;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...l}},B=a.createContext({}),G=a.forwardRef((e,r)=>{let{className:t,...l}=e,i=a.useId();return(0,s.jsx)(B.Provider,{value:{id:i},children:(0,s.jsx)("div",{ref:r,className:x("space-y-2",t),...l})})});G.displayName="FormItem";let Q=a.forwardRef((e,r)=>{let{className:t,...a}=e,{error:l,formItemId:i}=U();return(0,s.jsx)(q,{ref:r,className:x(l&&"text-destructive",t),htmlFor:i,...a})});Q.displayName="FormLabel";let W=a.forwardRef((e,r)=>{let{...t}=e,{error:a,formItemId:l,formDescriptionId:i,formMessageId:n}=U();return(0,s.jsx)(E.g7,{ref:r,id:l,"aria-describedby":a?"".concat(i," ").concat(n):"".concat(i),"aria-invalid":!!a,...t})});W.displayName="FormControl",a.forwardRef((e,r)=>{let{className:t,...a}=e,{formDescriptionId:l}=U();return(0,s.jsx)("p",{ref:r,id:l,className:x("text-sm text-muted-foreground",t),...a})}).displayName="FormDescription";let K=a.forwardRef((e,r)=>{let{className:t,children:a,...l}=e,{error:i,formMessageId:n}=U(),o=i?String(null==i?void 0:i.message):a;return o?(0,s.jsx)("p",{ref:r,id:n,className:x("text-sm font-medium text-destructive",t),...l,children:o}):null});K.displayName="FormMessage";var H=t(1040),$=t(1568),ee=t(4098),er=t(3785);let et=H.fC;H.ZA;let es=H.B4,ea=a.forwardRef((e,r)=>{let{className:t,children:a,...l}=e;return(0,s.jsxs)(H.xz,{ref:r,className:x("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...l,children:[a,(0,s.jsx)(H.JO,{asChild:!0,children:(0,s.jsx)($.Z,{className:"h-4 w-4 opacity-50"})})]})});ea.displayName=H.xz.displayName;let el=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(H.u_,{ref:r,className:x("flex cursor-default items-center justify-center py-1",t),...a,children:(0,s.jsx)(ee.Z,{className:"h-4 w-4"})})});el.displayName=H.u_.displayName;let ei=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(H.$G,{ref:r,className:x("flex cursor-default items-center justify-center py-1",t),...a,children:(0,s.jsx)($.Z,{className:"h-4 w-4"})})});ei.displayName=H.$G.displayName;let en=a.forwardRef((e,r)=>{let{className:t,children:a,position:l="popper",...i}=e;return(0,s.jsx)(H.h_,{children:(0,s.jsxs)(H.VY,{ref:r,className:x("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:l,...i,children:[(0,s.jsx)(el,{}),(0,s.jsx)(H.l_,{className:x("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,s.jsx)(ei,{})]})})});en.displayName=H.VY.displayName,a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(H.__,{ref:r,className:x("py-1.5 pl-8 pr-2 text-sm font-semibold",t),...a})}).displayName=H.__.displayName;let eo=a.forwardRef((e,r)=>{let{className:t,children:a,...l}=e;return(0,s.jsxs)(H.ck,{ref:r,className:x("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...l,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(H.wU,{children:(0,s.jsx)(er.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(H.eT,{children:a})]})});eo.displayName=H.ck.displayName,a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(H.Z0,{ref:r,className:x("-mx-1 my-1 h-px bg-muted",t),...a})}).displayName=H.Z0.displayName;let ed=a.forwardRef((e,r)=>{let{className:t,type:a,...l}=e;return(0,s.jsx)("input",{type:a,className:x("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...l})});ed.displayName="Input";var ec=t(4246),eu=t(3087);let em=()=>{let[e,r]=(0,a.useState)({width:void 0,height:void 0});return(0,a.useEffect)(()=>{let e=()=>r({width:window.innerWidth,height:window.innerHeight});return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),e};var eh=t(725),ef=t.n(eh);let ex=P.z.object({id:P.z.string().optional(),name:P.z.string().min(2,{message:"Name must be at least 2 characters."}),nickname:P.z.string().min(2,{message:"Nickname must be at least 2 characters."}),size:P.z.string().min(1,{message:"Size must from S, M, L, XL, XXL"}),address:P.z.string().min(2,{message:"Address must be at least 2 characters."}),tshirtType:P.z.string().min(2,{message:"Please select T-shirt type."}),gender:P.z.string().min(1,{message:"Please select gender."})}),ep={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"90%",sm:"400px",md:"600px"},bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};var eg=function(e){let{open:r,handleClose:t,productId:l}=e,[i,d]=(0,a.useState)(null),[h,f]=(0,a.useState)(""),[x,p]=(0,a.useState)(""),[g,j]=(0,a.useState)(null),[v,y]=(0,a.useState)(!1),b=(0,c.NL)(),{height:N,width:k}=em(),C="male"===h?[{size:"S",chest:109.2,waist:69.2,length:61},{size:"M",chest:114.3,waist:71.1,length:61.6},{size:"L",chest:119.4,waist:73,length:62.2},{size:"XL",chest:124.5,waist:74.9,length:62.9},{size:"XXL",chest:129.5,waist:76.8,length:63.5}]:[{size:"S",chest:111.8,waist:66,length:19.1},{size:"M",chest:116.8,waist:68.6,length:19.7},{size:"L",chest:121.9,waist:71.1,length:20.3},{size:"XL",chest:127,waist:73.7,length:21},{size:"XXL",chest:132.1,waist:76.2,length:21.6}];console.log("id",l);let{data:S,error:E}=(0,u.a)({queryKey:["getSingleProduct",l],queryFn:()=>n(l)}),R=(0,X.cI)({resolver:(0,_.F)(ex),defaultValues:{name:"",nickname:"",size:"",address:"",tshirtType:"",gender:""}}),{setValue:I}=R;console.log("spr",S),console.log("spe",E);let{mutate:F,data:P,isPending:M}=(0,m.D)({mutationFn:async e=>{let{values:r,img:t}=e;try{return await o({values:r,img:t})}catch(e){throw e}},onSuccess:e=>{console.log(e),e&&Array.isArray(e)&&e.length>0?(R.reset(),d(null),j(null),console.log(e),y(!0),(0,L.Am)("Product added successfully",{action:{label:"Undo",onClick:()=>console.log("Undo")}}),b.invalidateQueries({queryKey:["getProducts"]}),t()):(console.log(e),(0,L.Am)("Unexpected response format"))},onError:e=>{console.error(e),(0,L.Am)("Error: ".concat(e.message))}});return v&&setTimeout(()=>{y(!1)},5e3),console.log(P),console.log(h),console.log(g),(0,a.useEffect)(()=>{let e=C.find(e=>e.size===x);e?j(e):j(null)},[x,h]),(0,a.useEffect)(()=>{if(l&&S||console.log("product id not found"),l&&Array.isArray(S)&&S.length>0){var e,r,t,s,a,i;I("name",null===(e=S[0])||void 0===e?void 0:e.name),I("nickname",null===(r=S[0])||void 0===r?void 0:r.nickname),I("size",null===(t=S[0])||void 0===t?void 0:t.size),I("address",null===(s=S[0])||void 0===s?void 0:s.address),I("tshirtType",null===(a=S[0])||void 0===a?void 0:a.tshirtType),I("gender",null===(i=S[0])||void 0===i?void 0:i.gender)}},[l,S,I]),(0,a.useEffect)(()=>{0===l.toString().length&&R.reset()},[l]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(A.Z,{open:r,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,s.jsx)(z.Z,{sx:ep,children:(0,s.jsxs)(w.Z,{maxWidth:"sm",className:"md:w-500",children:[(0,s.jsx)(ec.Z,{variant:"h5",textAlign:"center",sx:{my:2},children:"number"==typeof l?"Edit Product":"Add Product"}),(0,s.jsx)(D,{...R,children:(0,s.jsxs)("form",{onSubmit:R.handleSubmit(function(e){l.toString().length>0&&(e={...e,id:l}),i?F({values:e,img:i}):(console.error("Image is null or undefined."),(0,L.Am)("Please upload an image before submitting."))}),className:"space-y-2",children:[(0,s.jsx)(Y,{control:R.control,name:"name",render:e=>{let{field:r}=e;return(0,s.jsxs)(G,{children:[(0,s.jsx)(Q,{children:"Name"}),(0,s.jsx)(W,{children:(0,s.jsx)(ed,{placeholder:"Name",...r})}),(0,s.jsx)(K,{})]})}}),(0,s.jsx)(Y,{control:R.control,name:"nickname",render:e=>{let{field:r}=e;return(0,s.jsxs)(G,{children:[(0,s.jsx)(Q,{children:"Nickname"}),(0,s.jsx)(W,{children:(0,s.jsx)(ed,{placeholder:"Nickname",...r})}),(0,s.jsx)(K,{})]})}}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)(Y,{control:R.control,name:"gender",render:e=>{let{field:r}=e;return(0,s.jsxs)(G,{className:"w-1/2",children:[(0,s.jsx)(Q,{children:"Gender"}),(0,s.jsxs)(et,{onValueChange:e=>{r.onChange(e),f(e)},value:r.value,children:[(0,s.jsx)(W,{children:(0,s.jsx)(ea,{children:(0,s.jsx)(es,{placeholder:"Select gender"})})}),(0,s.jsxs)(en,{style:{zIndex:1300},children:[(0,s.jsx)(eo,{value:"male",children:"Male"}),(0,s.jsx)(eo,{value:"female",children:"Female"}),(0,s.jsx)(eo,{value:"other",children:"Other"})]})]}),(0,s.jsx)(K,{})]})}}),(0,s.jsx)(Y,{control:R.control,name:"size",render:e=>{let{field:r}=e;return(0,s.jsxs)(G,{className:"w-1/2",children:[(0,s.jsx)(Q,{children:"Size"}),(0,s.jsxs)(et,{onValueChange:e=>{r.onChange(e),p(e)},value:r.value,disabled:!R.getValues("gender"),children:[(0,s.jsx)(W,{children:(0,s.jsx)(ea,{children:(0,s.jsx)(es,{placeholder:"Select size"})})}),(0,s.jsxs)(en,{style:{zIndex:1300},children:[(0,s.jsx)(eo,{value:"S",children:"S"}),(0,s.jsx)(eo,{value:"M",children:"M"}),(0,s.jsx)(eo,{value:"L",children:"L"}),(0,s.jsx)(eo,{value:"XL",children:"XL"}),(0,s.jsx)(eo,{value:"XXL",children:"XXL"})]})]}),(0,s.jsx)(K,{})]})}})]}),g&&"chest"in g&&"waist"in g&&"length"in g&&(0,s.jsxs)("div",{className:"flex items-center text-indigo-700 mt-1",children:[(0,s.jsx)(T.Z,{size:12,style:{marginRight:"4px"}}),(0,s.jsxs)("span",{style:{fontSize:"12px"},children:["chest: ",g.chest,"cm | Front-length: ",g.waist,"cm | Sleeve-length: ",g.length,"cm"]})]})]}),(0,s.jsx)(Y,{control:R.control,name:"tshirtType",render:e=>{let{field:r}=e;return(0,s.jsxs)(G,{children:[(0,s.jsx)(Q,{children:"Tshirt Type"}),(0,s.jsxs)(et,{onValueChange:r.onChange,value:r.value,children:[(0,s.jsx)(W,{children:(0,s.jsx)(ea,{children:(0,s.jsx)(es,{placeholder:"Select tshirt type"})})}),(0,s.jsxs)(en,{style:{zIndex:1300},children:[(0,s.jsx)(eo,{value:"oversized",children:"Oversized"}),(0,s.jsx)(eo,{value:"full-sleeve",children:"Full-sleeve"}),(0,s.jsx)(eo,{value:"half-sleeve",children:"half-sleeve"})]})]}),(0,s.jsx)(K,{})]})}}),(0,s.jsx)(Y,{control:R.control,name:"address",render:e=>{let{field:r}=e;return(0,s.jsxs)(G,{children:[(0,s.jsx)(Q,{children:"Address"}),(0,s.jsx)(W,{children:(0,s.jsx)(ed,{placeholder:"Address",...r})}),(0,s.jsx)(K,{})]})}}),(0,s.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[(0,s.jsx)(q,{htmlFor:"picture",children:"Picture"}),(0,s.jsx)(ed,{id:"picture",type:"file",onChange:e=>{e.target&&e.target.files&&e.target.files.length>0&&d(e.target.files[0])}}),i&&(0,s.jsx)("img",{src:URL.createObjectURL(i),height:100,width:100})]}),(0,s.jsx)(Z,{children:M?(0,s.jsx)(eu.Z,{loading:!0,variant:"contained",startIcon:(0,s.jsx)(V.Z,{className:"animate-spin h-5 w-5 mr-3"}),color:"primary",sx:{"&.MuiLoadingButton-root":{color:"white"}},children:"Loading"}):"number"==typeof l?"Edit Product":"Add Product"})]})})]})})}),v&&(0,s.jsx)(ef(),{width:k,height:N})]})},ej=function(){var e;let[r,t]=a.useState(!1),l=()=>t(!0),[n,o]=(0,a.useState)(""),h=(0,F.N4)(),f=(0,c.NL)(),{data:x,isPending:g}=(0,u.a)({queryKey:["getProducts"],queryFn:()=>i()});console.log(x);let{mutate:E,data:R,error:I}=(0,m.D)({mutationFn:async e=>{try{return await d(e)}catch(e){throw e}},onSuccess:e=>{f.invalidateQueries({queryKey:["getProducts"]}),(0,L.Am)("product deleted successfully")},onError:e=>{console.error(e),(0,L.Am)("Error: ".concat(e.message))}}),A=e=>{h({description:"This will permanently delete "}).then(()=>{var r;if(E(e.id),!x||(null===(r=x.data)||void 0===r?void 0:r.length)===0)throw Error("Error deleting product")}).catch(()=>console.log("Deletion cancelled."))},_=e=>{o(e),l()};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(w.Z,{maxWidth:"lg",sx:{pt:2,my:2},children:[(0,s.jsx)("h3",{className:"scroll-m-20 text-2xl font-semibold tracking-tight mb-8",children:"Dashboard"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,s.jsx)("div",{className:"grid grid-cols-subgrid gap-4 col-span-1",children:(0,s.jsx)(p,{className:" h-[240px] flex justify-center items-center",children:(0,s.jsx)(Z,{className:"px-8 py-6 bg-indigo-700",onClick:()=>{o(""),l()},children:(0,s.jsx)(k.Z,{className:"h-10 w-10"})})})}),null==x?void 0:null===(e=x.data)||void 0===e?void 0:e.map((e,r)=>(0,s.jsx)("div",{className:"gap-4",children:(0,s.jsxs)(p,{className:"md:h-[240px] group relative",children:[(0,s.jsx)("h4",{className:"scroll-m-20 text-xl font-semibold tracking-tight text-center my-2",children:e.name}),(0,s.jsxs)(N.Z,{direction:"row",px:1,my:2,className:"flex justify-center gap-4",sx:{overflow:"hidden"},children:[(0,s.jsx)("div",{style:{borderRadius:"4px",overflow:"hidden"},children:(0,s.jsx)("img",{src:"https://zvffdsdravynurjomyow.supabase.co/storage/v1/object/public/".concat(e.image_url),alt:"",style:{height:"120px",width:"100%",objectFit:"cover"}})}),(0,s.jsxs)(z.Z,{sx:{pl:1},children:[(0,s.jsxs)("p",{className:"leading-7 [&:not(:first-child)]",children:["Nickname: ",e.nickname]}),(0,s.jsxs)("p",{className:"leading-7 [&:not(:first-child)]",children:["Gender: ",e.gender]}),(0,s.jsxs)("p",{className:"leading-7 [&:not(:first-child)]",children:["Size: ",e.size]}),(0,s.jsxs)("p",{className:"leading-7 [&:not(:first-child)]",children:["Address: ",e.address]}),(0,s.jsxs)("p",{className:"leading-5 [&:not(:first-child)]",children:["T-shirt: ",e.tshirtType]})]})]}),(0,s.jsx)(j,{children:(0,s.jsxs)(v,{children:[(0,s.jsx)(y,{asChild:!0,children:(0,s.jsx)(Z,{className:"invisible group-hover:visible text-black bg-transparent hover:bg-transparent absolute -top-5 -right-6 transition ease-in-out duration-300 hover:scale-125 hover:text-indigo-700 animate-waving-icon",onClick:()=>A(e),children:(0,s.jsx)(C.Z,{})})}),(0,s.jsx)(b,{children:(0,s.jsx)("p",{className:"text-black",children:"Delete"})})]})}),(0,s.jsx)(j,{children:(0,s.jsxs)(v,{children:[(0,s.jsx)(y,{asChild:!0,children:(0,s.jsx)(Z,{className:"invisible group-hover:visible text-black bg-transparent hover:bg-transparent absolute -top-5 right-3 transition ease-in-out duration-300 hover:scale-125 hover:text-indigo-700 animate-waving-icon",onClick:()=>_(e.id),children:(0,s.jsx)(S.Z,{className:"h-5"})})}),(0,s.jsx)(b,{children:(0,s.jsx)("p",{children:"Edit"})})]})})]})},r))]})]}),(0,s.jsx)(eg,{open:r,handleClose:()=>t(!1),productId:n})]})}}},function(e){e.O(0,[968,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);