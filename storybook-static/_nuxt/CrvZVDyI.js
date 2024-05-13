import{_ as x}from"./rB7Ot75G.js";import{F as h,y as B,z as N,A as b,B as v,G as n,H as c}from"./phG5Is52.js";import"./DUjH3LXc.js";import{d as D,s as E}from"./BNCFSB9w.js";const i=D("counter",{state:()=>({count:0}),getters:{getCount(){return this.count}},actions:{increment(){console.log("increment"),this.count++},decrement(){console.log("decrement"),this.count--}}}),C=h({__name:"Counter",props:{displayHint:{type:String}},setup(o){const s=i(),{increment:f,decrement:H}=i(),{getCount:k}=E(s);return console.log(s),(F,P)=>{const a=x;return B(),N("div",null,[b("h1",null,v(n(k)),1),c(a,{title:"increment",type:o.displayHint,onClick:n(f)},null,8,["type","onClick"]),c(a,{title:"decrement",type:o.displayHint,onClick:n(H)},null,8,["type","onClick"])])}}});C.__docgenInfo={exportName:"default",displayName:"Counter",description:"",tags:{},props:[{name:"displayHint",type:{name:"string"}}],sourceFiles:["/Users/nicklas.degnebolig/Desktop/work/bonnier/pnpm-nuxt-3-storybook/components/Counter/Counter.vue"]};const G={title:"Counter",component:C,tags:["autodocs"]},e={args:{displayHint:"primary"}},t={args:{displayHint:"secondary"}},r={args:{displayHint:"tertiary"}};var p,u,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    displayHint: 'primary'
  }
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,d,y;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    displayHint: 'secondary'
  }
}`,...(y=(d=t.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,_,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    displayHint: 'tertiary'
  }
}`,...(S=(_=r.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const I=["counterPrimaryStory","counterSecondaryStory","countertertiaryStory"];export{I as __namedExportsOrder,e as counterPrimaryStory,t as counterSecondaryStory,r as countertertiaryStory,G as default};
