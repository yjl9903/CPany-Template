import{d as c,z as i,x as f,E as a,o as p,e as d,s as m,O as g,h as x}from"./index.e08e246c.js";const h=c({props:{rating:null,rank:null,disableLegendary:{type:Boolean}},setup(o){const l=o,{rating:n,rank:t,disableLegendary:s}=i(l),u=f(()=>{const r=t==null?void 0:t.value;if(a(r))return r.replace(/ /g,"-");const e=n==null?void 0:n.value;return a(e)?e<1200?"newbie":e<1400?"pupil":e<1600?"specialist":e<1900?"expert":e<2100?"candidate-master":e<2400?"master":e<3e3||(s==null?void 0:s.value)?"grandmaster":"legendary-grandmaster":null});return(r,e)=>(p(),d("span",{class:g(["cf-handle",x(u)])},[m(r.$slots,"default")],2))}});export{h as _};
