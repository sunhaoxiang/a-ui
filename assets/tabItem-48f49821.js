import{j as n}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{c as r}from"./icon-abbaa4e4.js";const l=e=>{const{defaultIndex:p,className:f,onSelect:i,children:c,type:o}=e,[u,b]=s.useState(p),y=(t,a)=>{a||(b(t),i&&i(t))},_=r("a-tabs",f),v=r("a-tabs-nav",{"a-nav-line":o==="line","a-nav-card":o==="card"}),I=()=>s.Children.map(c,(t,a)=>{const x=t,{label:g,disabled:m}=x.props,h=r("a-tabs-nav-item",{"is-active":u===a,disabled:m});return n.jsx("li",{className:h,onClick:()=>{y(a,m)},children:g},`nav-item-${a}`)}),N=()=>s.Children.map(c,(t,a)=>{if(a===u)return t});return n.jsxs("div",{className:_,children:[n.jsx("ul",{className:v,children:I()}),n.jsx("div",{className:"a-tabs-content",children:N()})]})};l.defaultProps={defaultIndex:0,type:"line"};const T=l;try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}}}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:"",displayName:"tabs",props:{defaultIndex:{defaultValue:{value:"0"},description:"",name:"defaultIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((selectedIndex: number) => void)"}},type:{defaultValue:{value:"line"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'}]}}}}}catch{}const d=({children:e})=>n.jsx("div",{className:"a-tab-panel",children:e}),S=d;try{d.displayName="TabItem",d.__docgenInfo={description:"",displayName:"TabItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{tabItem.displayName="tabItem",tabItem.__docgenInfo={description:"",displayName:"tabItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{T,S as a};
//# sourceMappingURL=tabItem-48f49821.js.map
