import{q as b,z as S,A as T,r as y,B as x,s as B,c as o,v as e,a as i,C as F,D as h,t as m,F as C,E as N,x as I,o as r,b as M,w as R,e as V,_ as $}from"./entry.c2604009.js";const D={class:"v-index"},E={key:0,class:"v-index__carousel"},P=["src"],q=["src"],A={key:0,class:"v-index__carousel__item"},H=["src"],L=b({__name:"index",setup(O){const u=S(),d=T("projectsInfo"),n=y(!1),a=x(()=>{const t=[];return d.value===null?[]:(d.value.projects.map(s=>{var _;(_=s.arrayOfImagesCarousel)==null||_.map(c=>{t.push({image:c,parentProjectTitle:s.title,projectSlug:s.slug})})}),t.reverse())}),l=y(0);B(()=>{});const k=x(()=>{const t=l.value-1;return t<0?a.value.length-1:t}),j=x(()=>{const t=l.value+1;return t>=a.value.length?0:t});function w(){l.value++,l.value>=a.value.length&&(l.value=0),u.value=a.value[l.value].image.textColor,n.value=!0}function G(){l.value--,l.value<0&&(l.value=a.value.length-1),u.value=a.value[l.value].image.textColor,n.value=!0}return(t,s)=>{var c,p,g;const _=V;return r(),o("section",D,[e(d)?(r(),o("div",E,[i("div",{class:"v-index__carousel__nav-to-left",onClick:G,onMouseleave:s[0]||(s[0]=v=>n.value=!1)},null,32),i("img",{class:"v-index__carousel__image-preview-box v-index__carousel__image-preview-box--previous",src:(c=e(a)[e(k)])==null?void 0:c.image.resize.large,alt:"preview of previous gallery image"},null,8,P),i("div",{class:"v-index__carousel__nav-to-right",onClick:w,onMouseleave:s[1]||(s[1]=v=>n.value=!1)},null,32),i("img",{class:F(["v-index__carousel__image-preview-box v-index__carousel__image-preview-box--next",{"v-index__carousel--force-to-hidden":e(n)}]),src:(p=e(a)[e(j)])==null?void 0:p.image.resize.large,alt:"preview of next gallery image"},null,10,q),(r(),o("div",{class:"v-index__carousel__title",style:h({color:e(u)}),key:e(l)},m((g=e(a)[e(l)])==null?void 0:g.parentProjectTitle),5)),(r(),o("div",{key:e(l),class:"v-index__carousel__counter",style:h({color:e(u)})},m(e(l)+1)+" / "+m(e(a).length+1),5)),(r(!0),o(C,null,N(e(a),(v,z)=>(r(),o(C,null,[z===e(l)?(r(),o("div",A,[M(_,{href:`/project/${v.projectSlug}`},{default:R(()=>{var f;return[i("img",{class:"v-index__carousel__item__img",alt:"",src:(f=v.image.resize)==null?void 0:f.large},null,8,H)]}),_:2},1032,["href"])])):I("",!0)],64))),256))])):I("",!0)])}}});const K=$(L,[["__scopeId","data-v-a13f1ffe"]]);export{K as default};
