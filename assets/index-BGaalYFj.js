import{p as l,s as m,c as f,a as n,t as o,u as t,o as b}from"./index-C8w4HLO5.js";const B=l("countStore",{state:()=>({count:0,name:"Pinia"}),getters:{doubleCount:e=>e.count*2},actions:{increment(){this.count++}}}),C=l("messageStore",{state:()=>({message:"Pinia"}),actions:{async actionA(){return new Promise(e=>{setTimeout(()=>{this.$state.message="等待请求中",e(null)},1e3)})},async actionB(){await this.actionA(),setTimeout(()=>{this.$state.message="已完成"},3e3)}}}),_=Object.assign({name:"MyComponent"},{__name:"index",setup(e){const i=B(),{count:g,doubleCount:p,name:d}=m(i),c=C(),{message:S}=m(c),{increment:r}=i,{actionB:u}=c;return(k,s)=>(b(),f("div",null,[n("h1",null,o(t(d))+" : "+o(t(g))+" | "+o(t(p)),1),n("h1",null,"Message: "+o(t(S)),1),n("button",{onClick:s[0]||(s[0]=(...a)=>t(r)&&t(r)(...a))},"点击修改"),n("button",{onClick:s[1]||(s[1]=(...a)=>t(u)&&t(u)(...a))},"提交任意异步操作")]))}});export{_ as default};
