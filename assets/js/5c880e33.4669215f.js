"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5257],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={},s="Avoid nested conditional expressions",a={unversionedId:"rules/common/avoid-nested-conditional-expressions",id:"rules/common/avoid-nested-conditional-expressions",title:"Avoid nested conditional expressions",description:"Configurable",source:"@site/docs/rules/common/avoid-nested-conditional-expressions.md",sourceDirName:"rules/common",slug:"/rules/common/avoid-nested-conditional-expressions",permalink:"/docs/rules/common/avoid-nested-conditional-expressions",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-nested-conditional-expressions.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Avoid missing enum constant in map",permalink:"/docs/rules/common/avoid-missing-enum-constant-in-map"},next:{title:"Avoid non ascii symbols",permalink:"/docs/rules/common/avoid-non-ascii-symbols"}},l={},c=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"avoid-nested-conditional-expressions"},"Avoid nested conditional expressions"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,i.kt)("h2",{id:"rule-id"},"Rule id"),(0,i.kt)("p",null,"avoid-nested-conditional-expressions"),(0,i.kt)("h2",{id:"severity"},"Severity"),(0,i.kt)("p",null,"Style"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Checks for nested conditional expressions."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"acceptable-level")," configuration, if you want to set the acceptable nesting level (default is 1)."),(0,i.kt)("h3",{id:"config-example"},"Config example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - avoid-nested-conditional-expressions:\n        acceptable-level: 2\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Bad:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"final str = '';\n\nfinal oneLevel = str.isEmpty ? 'hi' : '1';\n\nfinal twoLevels = str.isEmpty\n    ? str.isEmpty // LINT\n        ? 'hi'\n        : '1'\n    : '2';\n\nfinal threeLevels = str.isEmpty\n    ? str.isEmpty // LINT\n        ? str.isEmpty // LINT\n            ? 'hi'\n            : '1'\n        : '2'\n    : '3';\n")),(0,i.kt)("p",null,"Good:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"final str = '';\n\nfinal oneLevel = str.isEmpty ? 'hi' : '1';\n\nfinal twoLevels = _getStr(str);\n\nString _getStr(String str) {\n    if (str.isEmpty) {\n        return 'hi';\n    }\n\n    ...\n}\n")))}d.isMDXComponent=!0}}]);