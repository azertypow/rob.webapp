import{q as T,z as B,A as j,r as y,B as d,s as F,c as r,v as e,a as u,C as N,b as k,w as m,T as x,F as M,D as R,x as h,o as t,E as C,t as p,G as S,_ as V}from"./entry.cfa89dad.js";const D={class:"v-index"},E={key:0,class:"v-index__carousel"},$=["src"],q=["src"],A={key:0,class:"v-index__carousel__item"},H=["src"],L=T({__name:"index",setup(O){const _=B(),v=j("projectsInfo"),i=y(!1),s=d(()=>{const l=[];return v.value===null?[]:(v.value.projects.map(o=>{o.arrayOfImagesCarousel.map(c=>{l.push(c)})}),l.reverse())}),a=y(0);F(()=>{});const I=d(()=>{const l=a.value-1;return l<0?s.value.length-1:l}),G=d(()=>{const l=a.value+1;return l>=s.value.length?0:l});function w(){a.value++,a.value>=s.value.length&&(a.value=0),_.value=s.value[a.value].textColor,i.value=!0}function b(){a.value--,a.value<0&&(a.value=s.value.length-1),_.value=s.value[a.value].textColor,i.value=!0}return(l,o)=>{var c,f;return t(),r("section",D,[e(v)?(t(),r("div",E,[u("div",{class:"v-index__carousel__nav-to-left",onClick:b,onMouseleave:o[0]||(o[0]=n=>i.value=!1)},null,32),u("img",{class:"v-index__carousel__image-preview-box v-index__carousel__image-preview-box--previous",src:(c=e(s)[e(I)])==null?void 0:c.resize.large,alt:"preview of previous gallery image"},null,8,$),u("div",{class:"v-index__carousel__nav-to-right",onClick:w,onMouseleave:o[1]||(o[1]=n=>i.value=!1)},null,32),u("img",{class:N(["v-index__carousel__image-preview-box v-index__carousel__image-preview-box--next",{"v-index__carousel--force-to-hidden":e(i)}]),src:(f=e(s)[e(G)])==null?void 0:f.resize.large,alt:"preview of next gallery image"},null,10,q),k(x,{name:"v-transition-mask-slide",class:"v-transition-mask-slide",mode:"out-in",duration:1e3},{default:m(()=>{var n;return[(t(),r("div",{class:"v-index__carousel__title",style:C({color:e(_)}),key:e(a)},p((n=e(s)[e(a)])==null?void 0:n.parentProjectTitle),5))]}),_:1}),k(x,{name:"v-transition-mask-slide",class:"v-transition-mask-slide",mode:"out-in",duration:1e3},{default:m(()=>[(t(),r("div",{key:e(a),class:"v-index__carousel__counter",style:C({color:e(_)})},p(e(a)+1)+" / "+p(e(s).length+1),5))]),_:1}),(t(!0),r(M,null,R(e(s),(n,z)=>(t(),S(x,{name:"gallery"},{default:m(()=>{var g;return[z===e(a)?(t(),r("div",A,[u("img",{class:"v-index__carousel__item__img",alt:"",src:(g=n.resize)==null?void 0:g.large},null,8,H)])):h("",!0)]}),_:2},1024))),256))])):h("",!0)])}}});const J=V(L,[["__scopeId","data-v-3a76ba47"]]);export{J as default};
