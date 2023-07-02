import{j as t}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{I as $,c as K}from"./icon-0baba750.js";import{I as L}from"./input-9713dd08.js";import"./index-3244822e.js";import{T as U}from"./index-c2560314.js";import{u as B}from"./useClickOutside-d9e6f0b7.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-02553f7f.js";import"./index-1fc0ca9a.js";import"./inheritsLoose-9eefaa95.js";import"./index-8ce4a492.js";function H(r,s=300){const[o,a]=l.useState(r);return l.useEffect(()=>{const n=window.setTimeout(()=>{a(r)},s);return()=>{clearTimeout(n)}},[r,s]),o}const v=r=>{const{value:s,fetchSuggestions:o,renderOption:a,onSelect:n,onChange:u,...R}=r,[C,j]=l.useState(s),[p,i]=l.useState([]),[A,x]=l.useState(!1),[z,m]=l.useState(!1),[d,q]=l.useState(-1),y=l.useRef(!1),D=l.useRef(null),S=H(C);B(D,()=>{i([]),m(!1)}),l.useEffect(()=>{if(S&&y.current){i([]);const e=o(S);e instanceof Promise?(x(!0),e.then(c=>{x(!1),i(c),c.length>0&&m(!0)})):(i(e),e.length>0&&m(!0))}else i([]),m(!1);q(-1)},[S,o]);const V=e=>{e<0&&(e=0),e>=p.length&&(e=p.length-1),q(e)},P=e=>{switch(e.code){case"Enter":p[d]&&N(p[d]);break;case"ArrowUp":V(d-1);break;case"ArrowDown":V(d+1);break;case"Escape":i([]),m(!1);break}},G=e=>{const c=e.target.value.trim();j(c),u&&u(c),y.current=!0},N=e=>{j(e.value),i([]),m(!1),n&&n(e),y.current=!1},J=e=>a?a(e):e.value,X=()=>t.jsx(U,{in:z||A,animation:"zoom-in-top",timeout:300,onExited:()=>{i([])},children:t.jsxs("ul",{className:"a-suggestion-list",children:[A&&t.jsx("div",{className:"suggestion-loading-icon",children:t.jsx($,{icon:"spinner",spin:!0})}),p.map((e,c)=>{const M=K("suggestion-item",{"is-active":c===d});return t.jsx("li",{className:M,onClick:()=>N(e),children:J(e)},c)})]})});return t.jsxs("div",{className:"a-auto-complete",ref:D,children:[t.jsx(L,{...R,value:C,onChange:G,onKeyDown:P}),X()]})},b=v;try{v.displayName="AutoComplete",v.__docgenInfo={description:"",displayName:"AutoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<object>[] | Promise<DataSourceType<object>[]>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<object>) => void)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((item: DataSourceType<object>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}try{autoComplete.displayName="autoComplete",autoComplete.__docgenInfo={description:"",displayName:"autoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<object>[] | Promise<DataSourceType<object>[]>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<object>) => void)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((item: DataSourceType<object>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const ie={title:"Data Entry/AutoComplete",component:b,decorators:[r=>t.jsx("div",{style:{width:"350px",paddingBottom:"200px"},children:t.jsx(r,{})})],tags:["autodocs"]},h={render:r=>{const s=["bradley","pope","caruso","cook","cousins","james","AD","green","howard","kuzma","McGee","rando"],o=a=>s.filter(n=>n.includes(a)).map(n=>({value:n}));return t.jsx(b,{...r,fetchSuggestions:o,placeholder:"Simple AutoComplete"})}},g={render:r=>{const s=[{value:"bradley",number:11},{value:"pope",number:1},{value:"caruso",number:4},{value:"cook",number:2},{value:"cousins",number:15},{value:"james",number:23},{value:"AD",number:3},{value:"green",number:14},{value:"howard",number:39},{value:"kuzma",number:0}],o=n=>s.filter(u=>u.value.includes(n)),a=n=>{const u=n;return t.jsxs(t.Fragment,{children:[t.jsxs("b",{children:["Name: ",u.value]}),t.jsxs("span",{children:["Number: ",u.number]})]})};return t.jsx(b,{...r,fetchSuggestions:o,placeholder:"Custom AutoComplete",renderOption:a})}},f={render:r=>{const s=a=>fetch(`https://api.github.com/search/users?q=${a}`).then(n=>n.json()).then(({items:n})=>n.slice(0,10).map(u=>({value:u.login,...u}))),o=a=>{const n=a;return t.jsxs(t.Fragment,{children:[t.jsxs("b",{children:["Name: ",n.value]}),t.jsxs("span",{children:["url: ",n.url]})]})};return t.jsx(b,{...r,fetchSuggestions:s,placeholder:"Ajax AutoComplete",renderOption:o})}};var k,E,w;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando'];
    const handleFetch = (query: string) => {
      return lakers.filter(name => name.includes(query)).map(name => ({
        value: name
      }));
    };
    return <AutoComplete {...args} fetchSuggestions={handleFetch} placeholder="Simple AutoComplete" />;
  }
}`,...(w=(E=h.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var _,T,O;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const lakersWithNumber = [{
      value: 'bradley',
      number: 11
    }, {
      value: 'pope',
      number: 1
    }, {
      value: 'caruso',
      number: 4
    }, {
      value: 'cook',
      number: 2
    }, {
      value: 'cousins',
      number: 15
    }, {
      value: 'james',
      number: 23
    }, {
      value: 'AD',
      number: 3
    }, {
      value: 'green',
      number: 14
    }, {
      value: 'howard',
      number: 39
    }, {
      value: 'kuzma',
      number: 0
    }];
    const handleFetch = (query: string) => {
      return lakersWithNumber.filter(player => player.value.includes(query));
    };
    const renderOption = (item: DataSourceType) => {
      const itemWithNumber = (item as DataSourceType<LakersPlayerProps>);
      return <>
          <b>Name: {itemWithNumber.value}</b>
          <span>Number: {itemWithNumber.number}</span>
        </>;
    };
    return <AutoComplete {...args} fetchSuggestions={handleFetch} placeholder="Custom AutoComplete" renderOption={renderOption} />;
  }
}`,...(O=(T=g.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var F,I,W;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const handleFetch = (query: string) => {
      return fetch(\`https://api.github.com/search/users?q=\${query}\`).then(res => res.json()).then(({
        items
      }) => {
        return items.slice(0, 10)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((item: any) => ({
          value: item.login,
          ...item
        }));
      });
    };
    const renderOption = (item: DataSourceType) => {
      const itemWithGithub = (item as DataSourceType<GithubUserProps>);
      return <>
          <b>Name: {itemWithGithub.value}</b>
          <span>url: {itemWithGithub.url}</span>
        </>;
    };
    return <AutoComplete {...args} fetchSuggestions={handleFetch} placeholder="Ajax AutoComplete" renderOption={renderOption} />;
  }
}`,...(W=(I=f.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const ce=["SimpleAutoComplete","CustomAutoComplete","AjaxAutoComplete"];export{f as AjaxAutoComplete,g as CustomAutoComplete,h as SimpleAutoComplete,ce as __namedExportsOrder,ie as default};
//# sourceMappingURL=autoComplete.stories-9eca97c5.js.map
