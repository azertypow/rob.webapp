import{q as C,o as t,c as o,a as e,_ as k,r as w,s as D,H as I,I as T,v as n,t as i,x as c,F as r,D as y,C as j,G as B}from"./entry.cc4e4819.js";const V={class:"v-vimeo"},$=["src"],z=C({__name:"Vimeo",props:{videoID:{}},setup(H){return(_,L)=>(t(),o("div",V,[e("iframe",{src:`https://player.vimeo.com/video/${_.videoID}?color=0000C8&title=0&byline=0&portrait=0`,frameborder:"0",allow:"fullscreen; picture-in-picture",allowfullscreen:""},null,8,$)]))}});const F=k(z,[["__scopeId","data-v-fcdadb44"]]),N={class:"v-project-slug"},q={class:"g-grid-box"},A={class:"g-grid-box__col-start--5 g-grid-box__col-end--span-16 g-grid-box--reg__col-start--3 g-grid-box--reg__col-end--span-20 g-grid-box--sm__col-start--2 g-grid-box--sm__col-end--span-22"},E={class:"v-project-slug__header"},R=["src"],S={class:"v-project-slug__header__info"},U={key:0},J={class:"g-grid-box__col-start--5 g-grid-box__col-end--span-16 g-grid-box--reg__col-start--3 g-grid-box--reg__col-end--span-20 g-grid-box--sm__col-start--2 g-grid-box--sm__col-end--span-22"},K={class:"v-project-slug__content"},Q=["innerHTML"],W={class:"v-project-slug__content__list g-grid-box"},X=["innerHTML"],Y=["innerHTML"],Z=["src","alt"],P={class:"v-project-slug__gallery__info"},G={key:0},O=C({__name:"[slug]",setup(H){const _=w(null);return D(async()=>{_.value=await I(T().params.slug)}),(L,ee)=>{var l,a,d,g,u,p,v,m;const M=F;return t(),o("section",N,[e("div",q,[e("div",A,[e("div",E,[e("img",{alt:"cover image",class:"v-project-slug__header__cover",src:(l=n(_))==null?void 0:l.imageCover[0].resize.xxl},null,8,R),e("div",S,[e("div",null,i((a=n(_))==null?void 0:a.imageCover[0].title),1),(d=n(_))!=null&&d.imageCover[0].credit?(t(),o("div",U,"©"+i((g=n(_))==null?void 0:g.imageCover[0].credit),1)):c("",!0)])])]),e("div",J,[e("div",K,[e("h1",null,i((u=n(_))==null?void 0:u.title),1),e("article",{class:"v-project-slug__content__article",innerHTML:(p=n(_))==null?void 0:p.htmlContent},null,8,Q),(t(!0),o(r,null,y((v=n(_))==null?void 0:v.listOfDetails,s=>(t(),o("div",W,[e("div",{class:"g-grid-box__col-end--span-12 v-project-slug__content__list__item",innerHTML:s.name},null,8,X),e("div",{class:"g-grid-box__col-end--span-12 v-project-slug__content__list__item",innerHTML:s.value},null,8,Y)]))),256))])]),(t(!0),o(r,null,y((m=n(_))==null?void 0:m.galleryProject,s=>{var x,b,h,f;return t(),o("div",{class:j(["v-project-slug__gallery",{"g-grid-box__col-start--5 g-grid-box__col-end--span-16 g-grid-box--reg__col-start--3 g-grid-box--reg__col-end--span-20 g-grid-box--sm__col-start--2 g-grid-box--sm__col-end--span-22":s.content.isfullwidth==="false","g-grid-box__col-start--0 g-grid-box__col-end--span-24":s.content.isfullwidth==="true","is-full":s.content.isfullwidth==="true"}])},[s.type==="image"?(t(),o(r,{key:0},[e("img",{class:"v-project-slug__gallery__image",src:(x=s.images[0])==null?void 0:x.resize.xxl,alt:(b=s.images[0])==null?void 0:b.credit},null,8,Z),e("div",P,[e("div",null,i((h=s.images[0])==null?void 0:h.title),1),(f=s.images[0])!=null&&f.credit?(t(),o("div",G,"©"+i(s.images[0].credit),1)):c("",!0)])],64)):s.type==="video"?(t(),B(M,{key:1,"video-i-d":s.content.url},null,8,["video-i-d"])):c("",!0)],2)}),256))])])}}});const _e=k(O,[["__scopeId","data-v-2b850be0"]]);export{_e as default};