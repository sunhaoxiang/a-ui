import{r as n}from"./index-8db94870.js";function s(t,e){n.useEffect(()=>{const r=c=>{!t.current||t.current.contains(c.target)||e(c)};return document.addEventListener("click",r),()=>{document.removeEventListener("click",r)}},[t,e])}export{s as u};
//# sourceMappingURL=useClickOutside-d9e6f0b7.js.map
