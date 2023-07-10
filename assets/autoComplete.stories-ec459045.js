import{j as t}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{I as $,c as K}from"./index-f2e15aaf.js";import{I as B}from"./input-581fa78b.js";import{T as H}from"./index-c2560314.js";import{u as L}from"./useClickOutside-d9e6f0b7.js";import{p as j}from"./storybook-utils-35978611.js";function Q(n,u=300){const[c,r]=l.useState(n);return l.useEffect(()=>{const a=window.setTimeout(()=>{r(n)},u);return()=>{clearTimeout(a)}},[n,u]),c}const V=n=>{const{value:u,fetchSuggestions:c,renderOption:r,onSelect:a,onChange:i,...s}=n,[o,d]=l.useState(u),[g,p]=l.useState([]),[q,x]=l.useState(!1),[R,h]=l.useState(!1),[f,D]=l.useState(-1),v=l.useRef(!1),T=l.useRef(null),A=Q(o);L(T,()=>{p([]),h(!1)}),l.useEffect(()=>{if(A&&v.current){p([]);const e=c(A);e instanceof Promise?(x(!0),e.then(m=>{x(!1),p(m),m.length>0&&h(!0)})):(p(e),e.length>0&&h(!0))}else p([]),h(!1);D(-1)},[A,c]);const N=e=>{e<0&&(e=0),e>=g.length&&(e=g.length-1),D(e)},M=e=>{switch(e.code){case"Enter":g[f]&&k(g[f]);break;case"ArrowUp":N(f-1);break;case"ArrowDown":N(f+1);break;case"Escape":p([]),h(!1);break}},z=e=>{const m=e.target.value.trim();d(m),i&&i(m),v.current=!0},k=e=>{d(e.value),p([]),h(!1),a&&a(e),v.current=!1},J=e=>r?r(e):e.value,X=()=>t.jsx(H,{in:R||q,animation:"zoom-in-top",timeout:300,onExited:()=>{p([])},children:t.jsxs("ul",{className:"a-suggestion-list",children:[q&&t.jsx("div",{className:"suggestion-loading-icon",children:t.jsx($,{icon:"spinner",spin:!0})}),g.map((e,m)=>{const U=K("suggestion-item",{"is-active":m===f});return t.jsx("li",{className:U,onClick:()=>k(e),children:J(e)},m)})]})});return t.jsxs("div",{className:"a-auto-complete",ref:T,children:[t.jsx(B,{...s,value:o,onChange:z,onKeyDown:M}),X()]})},b=V;try{V.displayName="AutoComplete",V.__docgenInfo={description:"",displayName:"AutoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<object>[] | Promise<DataSourceType<object>[]>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<object>) => void)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((item: DataSourceType<object>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}try{autoComplete.displayName="autoComplete",autoComplete.__docgenInfo={description:"",displayName:"autoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceType<object>[] | Promise<DataSourceType<object>[]>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: DataSourceType<object>) => void)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((item: DataSourceType<object>) => ReactElement<any, string | JSXElementConstructor<any>>)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const Y={title:"Data Entry/AutoComplete",component:b,decorators:[n=>t.jsx("div",{style:{width:"350px",paddingBottom:"200px"},children:t.jsx(n,{})})]},Z=`
import { useState } from 'react'
import { AutoComplete } from '@a-front-end-project/a-ui'
import type { AutoCompleteDataSourceType } from '@a-front-end-project/a-ui'

const App = () => {
  const [value, setValue] = useState('')
  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat)
  })
  const handleFetch = (query: string) => {
    return !query
      ? []
      : [mockVal(query), mockVal(query, 2), mockVal(query, 3)]
  }
  const handleSelect = (item: AutoCompleteDataSourceType) => {
    setValue(item.value)
  }
  return (
    <AutoComplete
      value={value}
      fetchSuggestions={handleFetch}
      onSelect={handleSelect}
      placeholder="Simple AutoComplete"
    />
  )
}

export default App
`,S={render:n=>{const[u,c]=l.useState(""),r=(s,o=1)=>({value:s.repeat(o)}),a=s=>s?[r(s),r(s,2),r(s,3)]:[],i=s=>{c(s.value)};return t.jsx(b,{...n,value:u,fetchSuggestions:a,onSelect:i,placeholder:"Simple AutoComplete"})},parameters:j({code:Z})},ee=`
import { useState } from 'react'
import { AutoComplete } from '@a-front-end-project/a-ui'
import type { AutoCompleteDataSourceType } from '@a-front-end-project/a-ui'

interface CustomProps {
  value: string
  number: number
}

const App = () => {
  const [value, setValue] = useState('')
  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
    number: Math.floor(Math.random() * 1000)
  })
  const handleFetch = (query: string) => {
    return !query
      ? []
      : [mockVal(query), mockVal(query, 2), mockVal(query, 3)]
  }
  const renderOption = (item: AutoCompleteDataSourceType) => {
    const itemWithNumber = item as AutoCompleteDataSourceType<CustomProps>
    return (
      <>
        <b>Name: {itemWithNumber.value}</b>
        <span> - </span>
        <span>Number: {itemWithNumber.number}</span>
      </>
    )
  }

  const handleSelect = (item: AutoCompleteDataSourceType) => {
    setValue(item.value)
  }

  return (
    <AutoComplete
      value={value}
      fetchSuggestions={handleFetch}
      placeholder="Custom AutoComplete"
      renderOption={renderOption}
      onSelect={handleSelect}
    />
  )
}

export default App
`,y={render:n=>{const[u,c]=l.useState(""),r=(o,d=1)=>({value:o.repeat(d),number:Math.floor(Math.random()*1e3)}),a=o=>o?[r(o),r(o,2),r(o,3)]:[],i=o=>{const d=o;return t.jsxs(t.Fragment,{children:[t.jsxs("b",{children:["Name: ",d.value]}),t.jsx("span",{children:" - "}),t.jsxs("span",{children:["Number: ",d.number]})]})},s=o=>{c(o.value)};return t.jsx(b,{...n,value:u,fetchSuggestions:a,placeholder:"Custom AutoComplete",renderOption:i,onSelect:s})},parameters:j({code:ee})},te=`
import { useState } from 'react'
import { AutoComplete } from '@a-front-end-project/a-ui'
import type { AutoCompleteDataSourceType } from '@a-front-end-project/a-ui'

interface GithubUserProps {
  login: string
  url: string
  avatar_url: string
}

const App = () => {
  const [value, setValue] = useState('')
  const handleFetch = (query: string) => {
    return fetch(\`https://api.github.com/search/users?q=\${query}\`)
      .then(res => res.json())
      .then(({ items }) => {
        return (
          items
            .slice(0, 10)
            .map((item: any) => ({ value: item.login, ...item }))
        )
      })
  }

  const renderOption = (item: AutoCompleteDataSourceType) => {
    const itemWithGithub = item as AutoCompleteDataSourceType<GithubUserProps>
    return (
      <>
        <b>Name: {itemWithGithub.value}</b>
        <span>url: {itemWithGithub.url}</span>
      </>
    )
  }
  
  const handleSelect = (item: AutoCompleteDataSourceType) => {
    setValue(item.value)
  }

  return (
    <AutoComplete
      value={value}
      fetchSuggestions={handleFetch}
      placeholder="Ajax AutoComplete"
      renderOption={renderOption}
      onSelect={handleSelect}
    />
  )
}

export default App
`,C={render:n=>{const u=r=>fetch(`https://api.github.com/search/users?q=${r}`).then(a=>a.json()).then(({items:a})=>a.slice(0,10).map(i=>({value:i.login,...i}))),c=r=>{const a=r;return t.jsxs(t.Fragment,{children:[t.jsxs("b",{children:["Name: ",a.value]}),t.jsxs("span",{children:["url: ",a.url]})]})};return t.jsx(b,{...n,fetchSuggestions:u,placeholder:"Ajax AutoComplete",renderOption:c})},parameters:j({code:te})};var O,_,E;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat)
    });
    const handleFetch = (query: string) => {
      return !query ? [] : [mockVal(query), mockVal(query, 2), mockVal(query, 3)];
    };
    const handleSelect = (item: DataSourceType) => {
      setValue(item.value);
    };
    return <AutoComplete {...args} value={value} fetchSuggestions={handleFetch} onSelect={handleSelect} placeholder="Simple AutoComplete" />;
  },
  parameters: parameters({
    code: simpleAutoCompleteCode
  })
}`,...(E=(_=S.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var F,w,W;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    const mockVal = (str: string, repeat = 1) => ({
      value: str.repeat(repeat),
      number: Math.floor(Math.random() * 1000)
    });
    const handleFetch = (query: string) => {
      return !query ? [] : [mockVal(query), mockVal(query, 2), mockVal(query, 3)];
    };
    const renderOption = (item: DataSourceType) => {
      const itemWithNumber = (item as DataSourceType<CustomProps>);
      return <>
          <b>Name: {itemWithNumber.value}</b>
          <span> - </span>
          <span>Number: {itemWithNumber.number}</span>
        </>;
    };
    const handleSelect = (item: DataSourceType) => {
      setValue(item.value);
    };
    return <AutoComplete {...args} value={value} fetchSuggestions={handleFetch} placeholder="Custom AutoComplete" renderOption={renderOption} onSelect={handleSelect} />;
  },
  parameters: parameters({
    code: customAutoCompleteCode
  })
}`,...(W=(w=y.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var P,I,G;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
  },
  parameters: parameters({
    code: ajaxAutoCompleteCode
  })
}`,...(G=(I=C.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};const re=["SimpleAutoComplete","CustomAutoComplete","AjaxAutoComplete"],ie=Object.freeze(Object.defineProperty({__proto__:null,AjaxAutoComplete:C,CustomAutoComplete:y,SimpleAutoComplete:S,__namedExportsOrder:re,default:Y},Symbol.toStringTag,{value:"Module"}));export{ie as A};
//# sourceMappingURL=autoComplete.stories-ec459045.js.map
