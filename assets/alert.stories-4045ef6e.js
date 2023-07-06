import{j as e}from"./jsx-runtime-94f6e698.js";import{r as M}from"./index-8db94870.js";import{c as m,I as O}from"./index-ba4924d9.js";import{T as P}from"./index-c2560314.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-c6694cd8.js";import"./index-1fc0ca9a.js";import"./inheritsLoose-9eefaa95.js";import"./index-8ce4a492.js";const c=a=>{const{title:W,description:p,type:d,onClose:u,closable:E}=a,[k,$]=M.useState(!1),z=m("a-alert",{[`a-alert-${d}`]:d}),F=m("a-alert-title",{"bold-title":p}),H=()=>{u&&u(),$(!0)};return e.jsx(P,{in:!k,timeout:300,animation:"zoom-in-top",children:e.jsxs("div",{className:z,role:"alert",children:[e.jsx("span",{className:F,children:W}),p&&e.jsx("p",{className:"a-alert-desc",children:p}),E&&e.jsx("span",{className:"a-alert-close",role:"alert-close-button",onClick:H,children:e.jsx(O,{icon:"times"})})]})})};c.defaultProps={type:"default",closable:!0};const I=c;try{c.displayName="Alert",c.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{alert.displayName="alert",alert.__docgenInfo={description:"",displayName:"alert",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"danger"'},{value:'"warning"'}]}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const Y={title:"Feedback/Alert",component:I,tags:["autodocs"]},t={render:a=>e.jsx(I,{...a})},s={...t,args:{title:"this is alert!"}},r={...t,args:{title:"this is alert!",description:"this is description!"}},l={...t,args:{title:"this is alert!",closable:!1}},n={...t,args:{title:"this is success!",type:"success"}},i={...t,args:{title:"this is danger!",type:"danger"}},o={...t,args:{title:"this is warning!",type:"warning"}};var g,f,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is alert!'
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,_,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is alert!',
    description: 'this is description!'
  }
}`,...(v=(_=r.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var A,b,x;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is alert!',
    closable: false
  }
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var C,N,q;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is success!',
    type: 'success'
  }
}`,...(q=(N=n.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var V,j,S;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is danger!',
    type: 'danger'
  }
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var T,w,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    title: 'this is warning!',
    type: 'warning'
  }
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const Z=["DefaultAlert","AlertWithDescription","AlertCanNotClose","SuccessAlert","DangerAlert","WarningAlert"];export{l as AlertCanNotClose,r as AlertWithDescription,i as DangerAlert,s as DefaultAlert,n as SuccessAlert,o as WarningAlert,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=alert.stories-4045ef6e.js.map
