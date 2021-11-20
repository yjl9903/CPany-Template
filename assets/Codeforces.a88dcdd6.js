var st=Object.defineProperty;var G=Object.getOwnPropertySymbols;var nt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable;var I=(f,a,r)=>a in f?st(f,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):f[a]=r,J=(f,a)=>{for(var r in a||(a={}))nt.call(a,r)&&I(f,r,a[r]);if(G)for(var r of G(a))at.call(a,r)&&I(f,r,a[r]);return f};import{d as ot,G as rt,v as lt,x as ct,o as p,e as L,g as l,w as o,h as e,f as b,j as i,m as M,b as ut,E as S,B as U,l as m,k,H as it,I as _,J as dt}from"./index.e08e246c.js";import{u as ft}from"./users.caaf2783.js";import{C as gt,a as d}from"./c-table.eb0d28e9.js";import{_ as ht}from"./user-link.5e344416.js";import{_ as W}from"./cf-rating-color.36b9c718.js";import"./load.b9090f49.js";const mt={class:"divide-y"},_t=b("h2",{class:"mb-4"},"Codeforces",-1),Ct={class:"font-600"},bt=["href"],pt={key:0},vt={class:"mt-4 pt-4"},Bt={class:"text-gray-400"},xt=ot({setup(f){var O,N;const a=rt(),r=String((O=a.query.sort)!=null?O:"\u6700\u8FD1\u901A\u8FC7"),z=String((N=a.query.order)!=null?N:"desc"),C=lt(ut),v=t=>t.startsWith("codeforces"),K=t=>{const h=t.submissions.filter(({type:s})=>v(s)),B=h.length,n=h.filter(({v:s})=>s===1).length,X=h.filter(({t:s})=>s>=C.value).length,Y=h.filter(({t:s,v:c})=>s>=C.value&&c===1).length,Z=t.contests.filter(({type:s,t:c})=>c>=C.value&&v(s)).length,y=h.filter(({t:s,v:c,d:u})=>s>=C.value&&c===1&&S(u)),V=y.reduce((s,c)=>{var u;return s+((u=c.d)!=null?u:0)},0),w=Math.ceil(y.length>0?V/y.length:0),$=h.filter(({v:s})=>s===1).sort((s,c)=>c.t-s.t),tt=$.length>0?$[0].t:0,D=t.handles.filter(s=>v(s.type));let H=D.length>0?D[0].handle:"",q=!1;const et=D.reduce((s,c)=>{const u=c;return S(u.codeforces)&&(q=!0),S(u.codeforces)&&u.codeforces.rating>s?(H=u.handle,u.codeforces.rating):s},0);return J({subCount:B,okCount:n,recentSubCount:X,recentOkCount:Y,recentContest:Z,recentDiffcult:V,recentAvgDiffcult:w,lastSolveTime:tt,rating:et,isRated:q,handle:H},t)},P=ct(()=>ft.map(K)),F=_(t=>t.rating),A=_(t=>t.recentOkCount),T=_(t=>t.recentContest),x=_(t=>t.lastSolveTime),R=_(t=>t.recentAvgDiffcult),j=_(t=>t.okCount),E=_(t=>t.contests.length),Q=dt(t=>t.name);function g(t){return it(t,F,A,T,x,R,j,E,Q)}return(t,h)=>(p(),L("div",mt,[_t,l(e(gt),{data:e(P),cache:"codeforces","default-sort":e(r),"default-sort-order":e(z)},{columns:o(({index:B,row:n})=>[l(e(d),{label:"#",width:"3em",align:"center"},{default:o(()=>[b("span",Ct,i(B+1),1)]),_:2},1024),l(e(d),{label:"\u59D3\u540D"},{default:o(()=>[l(ht,{name:n.name},null,8,["name"])]),_:2},1024),l(e(d),{label:"Handle"},{default:o(()=>[b("a",{href:`https://codeforces.com/profile/${n.handle}`,target:"_blank"},[n.isRated?(p(),U(e(W),{key:0,rating:n.rating},{default:o(()=>[m(i(n.handle),1)]),_:2},1032,["rating"])):k("v-if",!0)],8,bt)]),_:2},1024),l(e(d),{label:"Rating",sort:g(e(F)),align:"right"},{default:o(()=>[n.isRated?(p(),U(e(W),{key:0,rating:n.rating,"disable-legendary":""},{default:o(()=>[m(i(n.rating),1)]),_:2},1032,["rating"])):k("v-if",!0)]),_:2},1032,["sort"]),l(e(d),{label:"\u6700\u8FD1\u901A\u8FC7",width:"7em",align:"right",sort:g(e(A))},{default:o(()=>[m(i(n.recentOkCount),1)]),_:2},1032,["sort"]),l(e(d),{label:"\u6700\u8FD1\u5E73\u5747\u96BE\u5EA6",width:"10em",align:"right",sort:g(e(R))},{default:o(()=>[m(i(n.recentAvgDiffcult),1)]),_:2},1032,["sort"]),l(e(d),{label:"\u6700\u8FD1\u6BD4\u8D5B",width:"7em",align:"right",sort:g(e(T))},{default:o(()=>[m(i(n.recentContest),1)]),_:2},1032,["sort"]),l(e(d),{label:"\u6700\u65B0\u901A\u8FC7",width:"10em",align:"center",sort:g(e(x))},{default:o(()=>[n.lastSolveTime>0?(p(),L("span",pt,i(e(M)(n.lastSolveTime).value),1)):k("v-if",!0)]),_:2},1032,["sort"]),l(e(d),{label:"\u901A\u8FC7",width:"6em",align:"right",sort:g(e(j))},{default:o(()=>[m(i(n.okCount),1)]),_:2},1032,["sort"]),l(e(d),{label:"\u6BD4\u8D5B\u573A\u6B21",width:"7em",align:"right",sort:g(e(E))},{default:o(()=>[m(i(n.contests.length),1)]),_:2},1032,["sort"])]),_:1},8,["data","default-sort","default-sort-order"]),b("div",vt,[b("span",Bt,"\u6700\u8FD1\u5F00\u59CB\u4E8E "+i(e(M)(C.value).value),1)])]))}});export{xt as default};
