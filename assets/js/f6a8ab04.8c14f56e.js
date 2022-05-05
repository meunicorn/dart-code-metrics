"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5540],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),a=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=a(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=a(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return n?t.createElement(d,l(l({ref:r},p),{},{components:n})):t.createElement(d,l({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var a=2;a<i;a++)l[a]=n[a];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1041:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return s}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],c={},u="New line before return",a={unversionedId:"rules/common/newline-before-return",id:"rules/common/newline-before-return",title:"New line before return",description:"Rule id",source:"@site/docs/rules/common/newline-before-return.md",sourceDirName:"rules/common",slug:"/rules/common/newline-before-return",permalink:"/docs/rules/common/newline-before-return",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/newline-before-return.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Member ordering",permalink:"/docs/rules/common/member-ordering"},next:{title:"No boolean literal compare",permalink:"/docs/rules/common/no-boolean-literal-compare"}},p={},s=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:3}],m={toc:s};function f(e){var r=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"new-line-before-return"},"New line before return"),(0,i.kt)("h2",{id:"rule-id"},"Rule id"),(0,i.kt)("p",null,"newline-before-return"),(0,i.kt)("h2",{id:"severity"},"Severity"),(0,i.kt)("p",null,"Style"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Enforces blank line between statements and return in a block."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Bad:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"  if ( ... ) {\n    ...\n    return ...; // LINT\n  }\n")),(0,i.kt)("p",null,"Good:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"  if ( ... ) {\n    return ...;\n  }\n\n  if ( ... ) {\n    ...\n\n    return ...;\n  }\n")))}f.isMDXComponent=!0}}]);