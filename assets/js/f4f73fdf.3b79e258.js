"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5043],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2798:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={},l="No boolean literal compare",i={unversionedId:"rules/common/no-boolean-literal-compare",id:"rules/common/no-boolean-literal-compare",title:"No boolean literal compare",description:"Has auto-fix",source:"@site/docs/rules/common/no-boolean-literal-compare.md",sourceDirName:"rules/common",slug:"/rules/common/no-boolean-literal-compare",permalink:"/docs/rules/common/no-boolean-literal-compare",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/no-boolean-literal-compare.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"New line before return",permalink:"/docs/rules/common/newline-before-return"},next:{title:"No empty block",permalink:"/docs/rules/common/no-empty-block"}},c={},s=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Unnecessary comparing",id:"unnecessary-comparing",level:3}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no-boolean-literal-compare"},"No boolean literal compare"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,o.kt)("h2",{id:"rule-id"},"Rule id"),(0,o.kt)("p",null,"no-boolean-literal-compare"),(0,o.kt)("h2",{id:"severity"},"Severity"),(0,o.kt)("p",null,"Style"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Warns on comparison to a boolean literal, as in ",(0,o.kt)("inlineCode",{parentName:"p"},"x == true"),". Comparing boolean values to boolean literals is unnecessary, as those expressions will result in booleans too. Just use the boolean values directly or negate them."),(0,o.kt)("h3",{id:"unnecessary-comparing"},"Unnecessary comparing"),(0,o.kt)("p",null,"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"  var b = x == true; // LINT\n  var c = x != true; // LINT\n\n   // LINT\n  if (x == true) {\n    ...\n  }\n\n   // LINT\n  if (x != false) {\n    ...\n  }\n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"  var b = x;\n  var c = !x;\n\n  if (x) {\n    ...\n  }\n\n  if (!x) {\n    ...\n  }\n")))}u.isMDXComponent=!0}}]);