(()=>{"use strict";var e,t={96:(e,t,r)=>{var n={};r.r(n),r.d(n,{getActiveCategory:()=>g,getActiveType:()=>v,getPatternMetas:()=>d,getPatternPreview:()=>E,getPatterns:()=>f});var a={};r.r(a),r.d(a,{ACTION_TYPES:()=>w,clearPatternLibraryCache:()=>_,setActiveCategory:()=>A,setActiveType:()=>P,setPatternMetas:()=>b,setPatternPreview:()=>C,setPatterns:()=>T});var o={};r.r(o),r.d(o,{getPatternMetas:()=>k,getPatternPreview:()=>N,getPatterns:()=>S});const l=window.React;var s=r.n(l);const c=window.wp.components,i=window.wp.domReady;var u=r.n(i);const p=window.wp.element,m=window.wp.data;function d(e){return{categories:e.categories,required_plugins_list:e.required_plugins_list}}function v(e){return e.activeType}function f(e,t){return e.patterns[t]}function E(e,t){return e.patternsPreview[t]}function g(e){return e.activeCategory}const h=window.wp.apiFetch;var y=r.n(h);const w={CLEAR_CACHE:"CLEAR_CACHE",SET_PATTERN_METAS:"SET_PATTERN_METAS",SET_PATTERNS:"SET_PATTERNS",SET_PATTERN_PREVIEW:"SET_PATTERN_PREVIEW",SET_ACTIVE_TYPE:"SET_ACTIVE_TYPE",SET_ACTIVE_CATEGORY:"SET_ACTIVE_CATEGORY"};function*_(){const e=yield{type:"CLEAR_SERVER_SIDE_CACHE"};if(e&&"ok"===e?.status)return{type:w.CLEAR_CACHE}}function b(e){return{type:w.SET_PATTERN_METAS,metas:e}}function T(e,t){return{type:w.SET_PATTERNS,taxonomy:e,patterns:t}}function C(e,t){return{type:w.SET_PATTERN_PREVIEW,id:e,patternPreview:t}}function P(e){return{type:w.SET_ACTIVE_TYPE,activeType:e}}function A(e){return{type:w.SET_ACTIVE_CATEGORY,activeCategory:e}}function*k(){return b(yield{type:"FETCH_PATTERN_METAS_FROM_API"})}function*S(e){const t=yield function(e){return{type:"FETCH_PATTERNS_FROM_API",taxonomy:e}}(e);return T(e,t)}function*N(e){const t=yield function(e){return{type:"FETCH_PATTERN_PREVIEW_FROM_API",id:e}}(e);return C(e,t)}function x(e,t=0){const r=[];for(let n=0;n<e.length;n++){const a=e[n];a.parent===t&&(a.items=x(e,a.term_id),r.push(a))}return r}const M={activeType:null,activeCategory:null,categories:{},required_plugins_list:{},patterns:{},patternsPreview:{}},O={name:"plover/patterns",options:{reducer:function(e=M,t){switch(t.type){case w.SET_PATTERN_METAS:{const r={},n=x(t?.metas?.categories).sort(((e,t)=>{let r=Number.parseInt(e.slug),n=Number.parseInt(t.slug);return r=isNaN(r)?e.term_id:r,n=isNaN(n)?e.term_id:n,r-n}));return n.forEach((e=>{r[e.slug]=e})),{...e,categories:r,required_plugins_list:t?.metas?.required_plugins_list,activeType:Object.keys(r)[0],activeCategory:r[Object.keys(r)[0]]?.term_id}}case w.SET_PATTERNS:return{...e,patterns:{...e.patterns,[t.taxonomy]:t.patterns?.posts}};case w.SET_PATTERN_PREVIEW:return{...e,patternsPreview:{...e.patternsPreview,[t.id]:t.patternPreview}};case w.SET_ACTIVE_TYPE:return e.activeType===t.activeType?e:{...e,activeType:t.activeType,activeCategory:e.categories[t.activeType]?.term_id};case w.SET_ACTIVE_CATEGORY:return{...e,activeCategory:t.activeCategory}}return e},actions:a,selectors:n,controls:{CLEAR_SERVER_SIDE_CACHE:()=>y()({path:"/plover-kit/v1/patterns/cache",method:"POST"}),FETCH_PATTERN_METAS_FROM_API:()=>y()({path:"/plover-kit/v1/pattern-metas",method:"GET"}),FETCH_PATTERNS_FROM_API:({taxonomy:e})=>function(e,t=null){return t=t?`&s=${t}`:"",y()({path:`/plover-kit/v1/patterns?taxonomy=${e}${t}`,method:"GET"})}(e),FETCH_PATTERN_PREVIEW_FROM_API:({id:e})=>function(e){return y()({path:`/plover-kit/v1/patterns/${e}?preview=1`,method:"GET"})}(e)},resolvers:o}};m.register?(0,m.register)((0,m.createReduxStore)(O.name,O.options)):(0,m.registerStore)(O.name,O.options);const R=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"plover-kit/patterns","title":"Plover: Patterns","category":"plover-blocks","description":"Add beautiful, ready-to-go layouts to your site with one click.","keywords":["template","pattern","layout","import"],"textdomain":"plover-kit","attributes":{},"editorScript":"file:./index.js","editorStyle":"file:./index.min.css","style":"file:./style-index.min.css"}'),H=window.wp.blockEditor,j=window.wp.i18n;var L=r(239);const V=(0,p.createContext)({loading:!0,errors:[],setLoading:e=>{},showError:e=>{}});function I(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=I(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}const $=function(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=I(e))&&(n&&(n+=" "),n+=t);return n};function q(e){const{title:t,categories:r,activeType:n,setActiveType:a,onRequestRefresh:o,onRequestClose:s}=e;return(0,l.createElement)("div",{className:"plover-patterns-modal-header"},(0,l.createElement)("h1",{className:"plover-patterns-modal-header-title"},t),(0,l.createElement)("div",{className:"plover-patterns-modal-header-categories"},Object.keys(r).map((e=>{const t=r[e];return(0,l.createElement)("button",{key:t.slug,className:$("plover--tab-button",{active:n===t.slug}),onClick:()=>a(t.slug)},t.name)}))),(0,l.createElement)("div",{className:"plover-patterns-modal-header-actions"},(0,l.createElement)("button",{className:"plover-refresh-button",type:"button",onClick:o},(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"18",height:"18"},(0,l.createElement)(c.Path,{d:"M27.802 5.197c-2.925-3.194-7.13-5.197-11.803-5.197-8.837 0-16 7.163-16 16h3c0-7.18 5.82-13 13-13 3.844 0 7.298 1.669 9.678 4.322l-4.678 4.678h11v-11l-4.198 4.197z"}),(0,l.createElement)(c.Path,{d:"M29 16c0 7.18-5.82 13-13 13-3.844 0-7.298-1.669-9.678-4.322l4.678-4.678h-11v11l4.197-4.197c2.925 3.194 7.13 5.197 11.803 5.197 8.837 0 16-7.163 16-16h-3z"}))),(0,l.createElement)("button",{className:"plover-close-modal-button",type:"button",onClick:s},(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"20",height:"20"},(0,l.createElement)(c.Path,{d:"M23.744 5.344l-7.744 7.712-7.744-7.712c-0.384-0.416-0.8-0.544-1.312-0.544-0.672 0-1.216 0.256-1.6 0.544-0.416 0.384-0.544 0.928-0.544 1.44 0 0.544 0.128 0.96 0.672 1.344l7.584 7.872-7.712 7.744c-0.928 0.928-0.928 1.856 0 2.784s1.856 0.928 2.784 0l7.744-7.744 7.744 7.744c0.384 0.416 0.928 0.544 1.44 0.544 0.544 0 1.088-0.128 1.472-0.544 0.416-0.384 0.544-0.8 0.544-1.472 0-0.512-0.128-1.056-0.544-1.472l-7.712-7.584 7.84-7.744c0.96-0.928 0.96-1.856 0-2.784-0.928-1.088-1.856-1.088-2.912-0.128z"})))))}var B=r(894),G=r.n(B);function F(e){const{errors:t,setErrors:r}=e;return(0,l.createElement)("div",{className:"plover-patterns-messages"},t.map(((e,n)=>(0,l.createElement)("div",{className:"plover-patterns-message plover-error-message",key:n},(0,l.createElement)("button",{type:"button",className:"plover-message-close",onClick:()=>{r(G()(t,{$splice:[[n,1]]}))}},(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},(0,l.createElement)(c.Path,{d:"M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"}))),e))))}const Z=window.plover.components;function z(e){const{label:t}=e;return(0,l.createElement)("div",{className:"plover-patterns-modal-loader"},(0,l.createElement)(Z.ProgressBar,null),(0,l.createElement)("p",null,t))}function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D.apply(this,arguments)}function Y(e,t){return Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Y(e,t)}var W=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,Y(t,r);var a=n.prototype;return a.getColumns=function(){var e=this.props,t=e.children,r=e.columnsCount,n=Array.from({length:r},(function(){return[]})),a=0;return s().Children.forEach(t,(function(e){e&&s().isValidElement(e)&&(n[a%r].push(e),a++)})),n},a.renderColumns=function(){var e=this.props,t=e.gutter,r=e.itemTag,n=e.itemStyle;return this.getColumns().map((function(e,a){return s().createElement(r,{key:a,style:D({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:t},n)},e.map((function(e){return e})))}))},a.render=function(){var e=this.props,t=e.gutter,r=e.className,n=e.style,a=e.containerTag;return s().createElement(a,{style:D({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:t},n),className:r},this.renderColumns())},n}(s().Component);W.propTypes={},W.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{}};const K=W;var U="undefined"!=typeof window?l.useLayoutEffect:l.useEffect,J=function(e){var t,r,n,a,o,c=e.columnsCountBreakPoints,i=void 0===c?{350:1,750:2,900:3}:c,u=e.children,p=e.className,m=void 0===p?null:p,d=e.style,v=void 0===d?null:d,f=(t=function(){var e=(0,l.useState)(!1),t=e[0],r=e[1];return U((function(){r(!0)}),[]),t}(),r=(0,l.useState)("undefined"!=typeof window?window.innerWidth:0),n=r[0],a=r[1],o=(0,l.useCallback)((function(){t&&a(window.innerWidth)}),[t]),U((function(){if(t)return window.addEventListener("resize",o),o(),function(){return window.removeEventListener("resize",o)}}),[t,o]),n),E=(0,l.useMemo)((function(){var e=Object.keys(i).sort((function(e,t){return e-t})),t=e.length>0?i[e[0]]:1;return e.forEach((function(e){e<f&&(t=i[e])})),t}),[f,i]);return s().createElement("div",{className:m,style:v},s().Children.map(u,(function(e,t){return s().cloneElement(e,{key:t,columnsCount:E})})))};J.propTypes={};const Q=J,X=K,ee=window.wp.blocks,te=window.plover.utils;function re(e){return function(t){return(0,l.createElement)(V.Consumer,null,(({loading:r,setLoading:n,showError:a,clientId:o})=>(0,l.createElement)(e,{...t,globalLoading:r,setGlobalLoading:n,showError:a,clientId:o})))}}const ne=re((function(e){const{pattern:t,clientId:r,setGlobalLoading:n,showError:a}=e;return(0,l.createElement)("div",{className:"pattern-actions"},t.premium&&!(0,te.is_premium)()?(0,l.createElement)("a",{href:(0,te.upsell_url)(),target:"_blank",className:"plover--button plover--button-solid"},(0,j.__)("Upgrade","plover-kit")):(0,l.createElement)("button",{className:"plover--button plover--button-solid",onClick:()=>{var e;n((0,j.__)("Importing...","plover-kit")),(e=t.id,y()({path:`/plover-kit/v1/patterns/${e}`,method:"GET"})).then((e=>{(0,L.route)(""),(0,m.dispatch)("core/block-editor").replaceBlocks(r,(0,ee.rawHandler)({HTML:e.content,mode:"BLOCKS"}))})).catch((e=>{window?.PloverEditor?.is_debug&&(console.log("Import Error: "),console.log(e)),a(e.message)})).finally((()=>{n(!1)}))}},(0,j.__)("Import","plover-kit")))})),ae=re((function(e){const{category:t,setGlobalLoading:r,showError:n,keywords:a}=e,[o,s]=(0,p.useState)(!1),[i,u]=(0,p.useState)([]),[d,v]=(0,p.useState)(1),[f,E]=(0,p.useState)(null),g=(a||"").trim().toLowerCase();return(0,p.useEffect)((()=>{const{getPatterns:e}=(0,m.resolveSelect)("plover/patterns");v(1),s((0,j.__)("Importing...","plover-kit")),null!==t&&e(t).then((e=>{const t=(null!=e?e:[]).filter((e=>{const t=(e?.tags||[]).join(" ")+" "+e.title;return!(""!==g&&-1===t.toLowerCase().indexOf(g)||null!==f&&f!==e?.color_mode)}));u(t)})).finally((()=>{s(!1)}))}),[t,g,f]),o||!t?(0,l.createElement)(z,{label:(0,j.__)("Loading...","plover-kit")}):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"plover-patterns-list-header"},(0,l.createElement)("h2",{className:"plover-patterns-list-title"},g&&(0,j.sprintf)((0,j.__)('%s results for: "%s"'),i.length,g)),(0,l.createElement)("div",{className:"plover-patterns-list-filter"},["light","dark"].map((e=>(0,l.createElement)("button",{key:e,className:$("plover--tab-button",{active:f===e}),onClick:()=>E(f===e?null:e)},e))))),(0,l.createElement)("div",{className:"plover-patterns-list"},(0,l.createElement)(Q,{columnsCountBreakPoints:{0:1,1024:2,1440:3}},(0,l.createElement)(X,null,i.slice(0,20*d).map((e=>(0,l.createElement)("div",{key:e?.id,className:"plover-pattern-wrap"},(0,l.createElement)("div",{className:"plover-pattern-item"},e.premium&&(0,l.createElement)("span",{className:"premium-badge"},(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},(0,l.createElement)(c.Path,{d:"M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7l-205.2 0c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192 298.1 99.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52z"}))),(0,l.createElement)("a",{className:"plover-pattern-cover",href:"#",onClick:t=>{t.preventDefault(),(0,L.route)(`patterns/${e?.id}`)}},(0,l.createElement)("img",{src:e.cover||PloverEditor?.patternLibrary?.placeholder_image})),(0,l.createElement)("div",{className:"plover-pattern-meta"},(0,l.createElement)("span",{className:"pattern-name"},e.title),(0,l.createElement)(ne,{pattern:e,setGlobalLoading:r,showError:n}))))))))),(0,l.createElement)("div",{className:"plover-patterns-list-footer"},i.length>20*d?(0,l.createElement)("button",{type:"button",className:"plover--button plover--button-solid",onClick:()=>{v(d+1)}},(0,j.__)("Load More","plover-kit")):(0,l.createElement)("p",null,(0,j.__)("End Of Content","plover-kit"))))})),oe=re((function({pattern:e,...t}){const[r,n]=(0,p.useState)(null),[a,o]=(0,p.useState)(!0),{required_plugins_list:s}=(0,m.useSelect)((e=>{const{getPatternMetas:t}=e("plover/patterns");return{...t()}}),[]);return(0,p.useEffect)((()=>{const{getPatternPreview:t}=(0,m.resolveSelect)("plover/patterns");t(e).then((e=>{n(e)})).finally((()=>{o(!1)}))}),[e]),a||!r?(0,l.createElement)(z,{label:(0,j.__)("Loading...","plover-kit")}):(0,l.createElement)("div",{className:"plover-pattern-detail"},(0,l.createElement)("div",{className:"pattern-title"},(0,l.createElement)("a",{href:"#",onClick:()=>(0,L.route)("")},(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor"},(0,l.createElement)(c.Path,{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"}))),(0,l.createElement)("h2",null,r.title)),(0,l.createElement)("div",{className:"pattern-overview"},(0,l.createElement)("div",{className:"pattern-overview-left"},(0,l.createElement)("div",{className:"pattern-thumbnail"},r?.premium&&(0,l.createElement)("span",{className:"premium-badge"},(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},(0,l.createElement)(c.Path,{d:"M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7l-205.2 0c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192 298.1 99.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52z"}))),(0,l.createElement)("img",{src:r.cover||PloverEditor?.patternLibrary?.placeholder_image})),(0,l.createElement)("p",null,r?.excerpt)),(0,l.createElement)("div",{className:"pattern-overview-right"},(0,l.createElement)(ne,{pattern:r,...t}),(0,l.createElement)("ul",{className:"pattern-meta-list"},(0,l.createElement)("li",null,(0,l.createElement)("span",null,(0,j.__)("Downloads","plover-kit")),(0,l.createElement)("span",null,r?.downloads)),(0,l.createElement)("li",null,(0,l.createElement)("span",null,(0,j.__)("Color Mode","plover-kit")),(0,l.createElement)("span",null,r?.color_mode))),(r?.tags||[]).length>0&&(0,l.createElement)("div",{className:"pattern-meta-group"},(0,l.createElement)("h3",null,(0,j.__)("Tags","plover-kit")),(0,l.createElement)("p",null,(r?.tags||[]).map((e=>e.name)).join(", "))),(r?.cats||[]).length>0&&(0,l.createElement)("div",{className:"pattern-meta-group"},(0,l.createElement)("h3",null,(0,j.__)("Categories","plover-kit")),(0,l.createElement)("p",null,(r?.cats||[]).filter((e=>0!==e.parent)).map((e=>e.name)).join(", "))),(r?.required_plugins||[]).length>0&&(0,l.createElement)("div",{className:"pattern-meta-group"},(0,l.createElement)("h3",null,(0,j.__)("Required Plugins","plover-kit")),(0,l.createElement)("ul",null,(r?.required_plugins||[]).map((e=>{const t=(null!=s?s:{})[e];return t?(0,l.createElement)("li",{key:e},(0,l.createElement)("a",{href:`https://wordpress.org/plugins/${e}`,target:"_blank"},t?.name)):null})))))))}));function le(e){const{value:t,onChange:r}=e,n=(0,p.useRef)();return(0,l.createElement)("div",{className:"plover-patterns-search"},(0,l.createElement)("input",{ref:n,type:"search",defaultValue:t,placeholder:(0,j.__)("Search","plover-kit"),autoComplete:"off",onKeyDown:e=>{"Enter"===event.key&&r(e.target.value)}}),(0,l.createElement)("button",{className:"plover-patterns-search-icon",onClick:()=>{r(n?.current?.value)}},(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",focusable:"false"},(0,l.createElement)(c.Path,{d:"M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"}))))}function se(e){const{keywords:t,onKeywordsChange:r,activeType:n,activeCategory:a,onActiveCategoryChange:o}=e;if(!n)return null;const s=n.items||[];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(le,{value:t,onChange:r}),(0,l.createElement)("ul",{className:"plover-patterns-category-list"},s.length>0?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("li",null,(0,l.createElement)("button",{onClick:()=>o(n.term_id),className:$({active:a===n.term_id})},(0,l.createElement)("span",{className:"title"},"All"),(0,l.createElement)("span",{className:"count"},n.count))),s.map((e=>(0,l.createElement)("li",{key:e.term_id},(0,l.createElement)("button",{onClick:()=>o(e.term_id),className:$({active:a===e.term_id})},(0,l.createElement)("span",{className:"title"},e.name),(0,l.createElement)("span",{className:"count"},e.count)))))):null))}function ce(e){const[t,r]=(0,p.useState)(""),{setActiveCategory:n}=(0,m.useDispatch)("plover/patterns"),{categories:a,activeType:o,activeCategory:s}=(0,m.useSelect)((e=>{const{getPatternMetas:t,getActiveType:r,getActiveCategory:n}=e("plover/patterns");return{...t(),activeType:r(),activeCategory:n()}}),[]),c=(0,L.getHash)(),[i]=(0,L.getHashParameters)();return"patterns"===c&&i?(0,l.createElement)("div",{className:"plover-patterns-modal-panel"},(0,l.createElement)(oe,{pattern:i})):(0,l.createElement)("div",{className:"plover-patterns-modal-panel"},(0,l.createElement)("div",{className:"plover-patterns-sidebar"},(0,l.createElement)(se,{keywords:t,onKeywordsChange:r,activeType:a[o],activeCategory:s,onActiveCategoryChange:n})),(0,l.createElement)("div",{className:"plover-patterns-content"},(0,l.createElement)(ae,{keywords:t,category:s})))}function ie(e){const[t,r]=(0,p.useState)(!0),{removeBlock:n}=(0,m.useDispatch)("core/block-editor"),[a,o]=(0,p.useState)(!1),[s,i]=(0,p.useState)([]),{setActiveType:u,clearPatternLibraryCache:d,invalidateResolutionForStore:v}=(0,m.useDispatch)("plover/patterns"),{categories:f,activeType:E}=(0,m.useSelect)((e=>{const{getPatternMetas:t,getActiveType:r}=e("plover/patterns");return{...t(),activeType:r()}}),[]);return(0,l.createElement)(V.Provider,{key:"plover-patterns-modal-"+e.clientId,value:{loading:a,errors:s,setLoading:o,showError:e=>{i([...s,e])},clientId:e.clientId}},(0,l.createElement)(c.Button,{key:"layout-modal-library-button-"+e.clientId,isPrimary:!0,className:"plover-patterns-modal-button",onClick:()=>{r(!0)}},(0,j.__)("Pattern Library","plover-kit")),t&&e.isSelected?(0,l.createElement)(c.Modal,{shouldCloseOnClickOutside:!1,key:"modal-component-"+e.clientId,className:"plover-patterns-importer-modal"},(0,l.createElement)("div",{style:{height:"100%"}},(0,l.createElement)(F,{errors:s,setErrors:i}),a?(0,l.createElement)(z,{label:a}):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(q,{categories:f,activeType:E,setActiveType:u,onRequestRefresh:()=>{o((0,j.__)("Reloading...","plover-kit")),d().then((()=>{v(),o(!1)}))},title:(0,j.__)("Plover Pattern Library","plover=kit"),onRequestClose:()=>{r(!1),n(e.clientId),(0,L.route)("")}}),(0,l.createElement)(ce,null)))):null)}const ue=(pe=function(e){const t=(0,H.useBlockProps)();return(0,l.createElement)("div",{...t},(0,l.createElement)(c.Placeholder,{label:(0,j.__)("Plover Patterns","plover-kit"),instructions:(0,j.__)("Use Pattern Importer to import pre-designed patterns and layouts instead of start your design from scratch.","plover-kit"),className:"plover-patterns-placeholder"},(0,l.createElement)(ie,{...e})))},function(e){const[t,r]=(0,p.useState)({routeHash:(0,L.getHash)(),hashParameters:(0,L.getHashParameters)()});return(0,L.routeSetup)((()=>{const e=(0,L.getHash)(),n=(0,L.getHashParameters)();e!==t.routeHash&&n!==t.hashParameters&&r({routeHash:(0,L.getHash)(),hashParameters:(0,L.getHashParameters)()})})),(0,l.createElement)(pe,{...t,...e})});var pe;function me(){return(0,l.createElement)(c.ToolbarButton,{className:"plover-patterns-button",icon:(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 137.097 137.097"},(0,l.createElement)("g",{transform:"translate(-2 -2)"},(0,l.createElement)(c.Path,{d:"M50.963,49.681H16.689A14.707,14.707,0,0,1,2,34.992v-18.3A14.707,14.707,0,0,1,16.689,2H50.963A14.707,14.707,0,0,1,65.652,16.689v18.3A14.707,14.707,0,0,1,50.963,49.681ZM16.689,11.793a4.9,4.9,0,0,0-4.9,4.9v18.3a4.9,4.9,0,0,0,4.9,4.9H50.963a4.9,4.9,0,0,0,4.9-4.9v-18.3a4.9,4.9,0,0,0-4.9-4.9Z",fill:"#fdae38"}),(0,l.createElement)(c.Path,{d:"M50.963,94.8H16.689A14.707,14.707,0,0,1,2,80.107V28.059A14.707,14.707,0,0,1,16.689,13.37H50.963A14.707,14.707,0,0,1,65.652,28.059V80.107A14.707,14.707,0,0,1,50.963,94.8ZM16.689,23.163a4.9,4.9,0,0,0-4.9,4.9V80.107a4.9,4.9,0,0,0,4.9,4.9H50.963a4.9,4.9,0,0,0,4.9-4.9V28.059a4.9,4.9,0,0,0-4.9-4.9Z",transform:"translate(0 44.301)",fill:"#29ebdc"}),(0,l.createElement)(c.Path,{d:"M65.963,67.943H31.689A14.707,14.707,0,0,1,17,53.254v-18.3A14.707,14.707,0,0,1,31.689,20.262H65.963A14.707,14.707,0,0,1,80.652,34.951v18.3A14.707,14.707,0,0,1,65.963,67.943ZM31.689,30.055a4.9,4.9,0,0,0-4.9,4.9v18.3a4.9,4.9,0,0,0,4.9,4.9H65.963a4.9,4.9,0,0,0,4.9-4.9v-18.3a4.9,4.9,0,0,0-4.9-4.9Z",transform:"translate(58.445 71.155)",fill:"#fdae38"}),(0,l.createElement)(c.Path,{d:"M65.963,83.426H31.689A14.707,14.707,0,0,1,17,68.737V16.689A14.707,14.707,0,0,1,31.689,2H65.963A14.707,14.707,0,0,1,80.652,16.689V68.737A14.707,14.707,0,0,1,65.963,83.426ZM31.689,11.793a4.9,4.9,0,0,0-4.9,4.9V68.737a4.9,4.9,0,0,0,4.9,4.9H65.963a4.9,4.9,0,0,0,4.9-4.9V16.689a4.9,4.9,0,0,0-4.9-4.9Z",transform:"translate(58.445)",fill:"#29ebdc"}))),onClick:()=>{const{rootClientId:e,index:t}=(0,m.select)("core/block-editor").getBlockInsertionPoint(),r=(0,ee.createBlock)("plover-kit/patterns");(0,m.dispatch)("core/block-editor").insertBlocks(r,t,e)}},(0,j.__)("Plover Patterns","plover-kit"))}const de=(0,l.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"137.097",height:"137.097",viewBox:"0 0 137.097 137.097"},(0,l.createElement)("g",{transform:"translate(-2 -2)"},(0,l.createElement)(c.Path,{d:"M50.963,49.681H16.689A14.707,14.707,0,0,1,2,34.992v-18.3A14.707,14.707,0,0,1,16.689,2H50.963A14.707,14.707,0,0,1,65.652,16.689v18.3A14.707,14.707,0,0,1,50.963,49.681ZM16.689,11.793a4.9,4.9,0,0,0-4.9,4.9v18.3a4.9,4.9,0,0,0,4.9,4.9H50.963a4.9,4.9,0,0,0,4.9-4.9v-18.3a4.9,4.9,0,0,0-4.9-4.9Z",fill:"#fdae38"}),(0,l.createElement)(c.Path,{d:"M50.963,94.8H16.689A14.707,14.707,0,0,1,2,80.107V28.059A14.707,14.707,0,0,1,16.689,13.37H50.963A14.707,14.707,0,0,1,65.652,28.059V80.107A14.707,14.707,0,0,1,50.963,94.8ZM16.689,23.163a4.9,4.9,0,0,0-4.9,4.9V80.107a4.9,4.9,0,0,0,4.9,4.9H50.963a4.9,4.9,0,0,0,4.9-4.9V28.059a4.9,4.9,0,0,0-4.9-4.9Z",transform:"translate(0 44.301)",fill:"#22b9ad"}),(0,l.createElement)(c.Path,{d:"M65.963,67.943H31.689A14.707,14.707,0,0,1,17,53.254v-18.3A14.707,14.707,0,0,1,31.689,20.262H65.963A14.707,14.707,0,0,1,80.652,34.951v18.3A14.707,14.707,0,0,1,65.963,67.943ZM31.689,30.055a4.9,4.9,0,0,0-4.9,4.9v18.3a4.9,4.9,0,0,0,4.9,4.9H65.963a4.9,4.9,0,0,0,4.9-4.9v-18.3a4.9,4.9,0,0,0-4.9-4.9Z",transform:"translate(58.445 71.155)",fill:"#fdae38"}),(0,l.createElement)(c.Path,{d:"M65.963,83.426H31.689A14.707,14.707,0,0,1,17,68.737V16.689A14.707,14.707,0,0,1,31.689,2H65.963A14.707,14.707,0,0,1,80.652,16.689V68.737A14.707,14.707,0,0,1,65.963,83.426ZM31.689,11.793a4.9,4.9,0,0,0-4.9,4.9V68.737a4.9,4.9,0,0,0,4.9,4.9H65.963a4.9,4.9,0,0,0,4.9-4.9V16.689a4.9,4.9,0,0,0-4.9-4.9Z",transform:"translate(58.445)",fill:"#22b9ad"}))),{name:ve}=R;!function(e){if(!e)return;const{metadata:t,settings:r,name:n}=e;(0,ee.registerBlockType)({name:n,...t},r)}({name:ve,metadata:R,settings:{icon:de,example:{},edit:ue}}),u()((function(){if("widgets"!==window.pagenow&&"customize"!==window.pagenow)var e=null,t=(0,m.subscribe)((function(){var r=document.querySelector(".edit-post-header__settings, .editor-header__settings");if(r){var n=document.createElement("div");n.classList.add("plover-patterns-button-wrapper"),document.querySelector(".plover-patterns-button-wrapper")||(p.createRoot?(0,p.createRoot)(n).render((0,l.createElement)(me,null)):(0,p.render)((0,l.createElement)(me,null),n),r.prepend(n)),e&&clearTimeout(e),e=setTimeout((function(){document.querySelector(".plover-patterns-button")&&t()}),0)}}))}))},894:(e,t)=>{function r(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var n="object"==typeof process&&!0;function a(e,t){if(!e){if(n)throw new Error("Invariant failed");throw new Error(t())}}t.invariant=a;var o=Object.prototype.hasOwnProperty,l=Array.prototype.splice,s=Object.prototype.toString;function c(e){return s.call(e).slice(8,-1)}var i=Object.assign||function(e,t){return u(t).forEach((function(r){o.call(t,r)&&(e[r]=t[r])})),e},u="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function p(e){return Array.isArray(e)?i(e.constructor(e.length),e):"Map"===c(e)?new Map(e):"Set"===c(e)?new Set(e):e&&"object"==typeof e?i(Object.create(Object.getPrototypeOf(e)),e):e}var m=function(){function e(){this.commands=i({},d),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new e).update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var r=this,n="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(n)||a(!Array.isArray(n),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),a("object"==typeof n&&null!==n,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(r.commands).join(", ")+"."}));var l=e;return u(n).forEach((function(t){if(o.call(r.commands,t)){var a=e===l;l=r.commands[t](n[t],l,n,e),a&&r.isEquals(l,e)&&(l=e)}else{var s="Map"===c(e)?r.update(e.get(t),n[t]):r.update(e[t],n[t]),i="Map"===c(l)?l.get(t):l[t];r.isEquals(s,i)&&(void 0!==s||o.call(e,t))||(l===e&&(l=p(e)),"Map"===c(l)?l.set(t,s):l[t]=s)}})),l},e}();t.Context=m;var d={$push:function(e,t,r){return f(t,r,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,r){return f(t,r,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,o){return function(e,t){a(Array.isArray(e),(function(){return"Expected $splice target to be an array; got "+r(e)})),g(t.$splice)}(t,n),e.forEach((function(e){g(e),t===o&&e.length&&(t=p(o)),l.apply(t,e)})),t},$set:function(e,t,r){return function(e){a(1===Object.keys(e).length,(function(){return"Cannot have more than one key in an object with $set"}))}(r),e},$toggle:function(e,t){E(e,"$toggle");var r=e.length?p(t):t;return e.forEach((function(e){r[e]=!t[e]})),r},$unset:function(e,t,r,n){return E(e,"$unset"),e.forEach((function(e){Object.hasOwnProperty.call(t,e)&&(t===n&&(t=p(n)),delete t[e])})),t},$add:function(e,t,r,n){return h(t,"$add"),E(e,"$add"),"Map"===c(t)?e.forEach((function(e){var r=e[0],a=e[1];t===n&&t.get(r)!==a&&(t=p(n)),t.set(r,a)})):e.forEach((function(e){t!==n||t.has(e)||(t=p(n)),t.add(e)})),t},$remove:function(e,t,r,n){return h(t,"$remove"),E(e,"$remove"),e.forEach((function(e){t===n&&t.has(e)&&(t=p(n)),t.delete(e)})),t},$merge:function(e,t,n,o){var l,s;return l=t,a((s=e)&&"object"==typeof s,(function(){return"update(): $merge expects a spec of type 'object'; got "+r(s)})),a(l&&"object"==typeof l,(function(){return"update(): $merge expects a target of type 'object'; got "+r(l)})),u(e).forEach((function(r){e[r]!==t[r]&&(t===o&&(t=p(o)),t[r]=e[r])})),t},$apply:function(e,t){var n;return a("function"==typeof(n=e),(function(){return"update(): expected spec of $apply to be a function; got "+r(n)+"."})),e(t)}},v=new m;function f(e,t,n){a(Array.isArray(e),(function(){return"update(): expected target of "+r(n)+" to be an array; got "+r(e)+"."})),E(t[n],n)}function E(e,t){a(Array.isArray(e),(function(){return"update(): expected spec of "+r(t)+" to be an array; got "+r(e)+". Did you forget to wrap your parameter in an array?"}))}function g(e){a(Array.isArray(e),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+r(e)+". Did you forget to wrap your parameters in an array?"}))}function h(e,t){var n=c(e);a("Map"===n||"Set"===n,(function(){return"update(): "+r(t)+" expects a target of type Set or Map; got "+r(n)}))}t.isEquals=v.update.isEquals,t.extend=v.extend,t.default=v.update,t.default.default=e.exports=i(t.default,t)},239:e=>{var t=void 0;function r(){return window.location.hash.split("/")[0].substring(1)}function n(){var e=window.location.hash.split("/");return e.shift(),e}e.exports={getHash:r,getHashParameters:n,onHashChange:function(e){return t=t.concat(e),function(){t=t.filter((function(t){return t!==e}))}},route:function(e){return window.location.hash=e,null},routeSetup:function(e){!function(e){t=[],window.addEventListener("hashchange",(function(){e();var a=r(),o=n();t.forEach((function(e){setTimeout(e,0,a,o)}))}))}(e),e()}}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],s=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={603:0,715:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[l,s,c]=r,i=0;if(l.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(r);i<l.length;i++)o=l[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=globalThis.webpackChunkplover_kit=globalThis.webpackChunkplover_kit||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[715],(()=>n(96)));a=n.O(a)})();