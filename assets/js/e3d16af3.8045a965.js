"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2459],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9729:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(5321);function o(e){let{version:n,severity:t,hasConfig:o,hasFix:i,isDeprecated:s}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:n,severity:t,hasConfig:o,hasFix:i,isDeprecated:s}))}},5321:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294);function a(e){let{hasConfig:n,hasFix:t,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},n&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),t&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:n,version:t,hasConfig:o,hasFix:i,isDeprecated:s}=e;const l=null==n?void 0:n.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",t),r.createElement("div",{className:"rule-severity "+l},l),r.createElement(a,{hasConfig:o,hasFix:i,isDeprecated:s}))}},2690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),o=t(9729);const i={},s=void 0,l={unversionedId:"rules/common/avoid-non-null-assertion",id:"rules/common/avoid-non-null-assertion",title:"avoid-non-null-assertion",description:"Warns when non null assertion operator (! or \u201cbang\u201d operator) is used for a property access or method invocation. The operator check works at runtime and it may fail and throw a runtime exception.",source:"@site/docs/rules/common/avoid-non-null-assertion.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-non-null-assertion",permalink:"/docs/rules/common/avoid-non-null-assertion",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-non-null-assertion.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-non-ascii-symbols",permalink:"/docs/rules/common/avoid-non-ascii-symbols"},next:{title:"avoid-passing-async-when-sync-expected",permalink:"/docs/rules/common/avoid-passing-async-when-sync-expected"}},c={},p=[{value:"Example",id:"example",level:3}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"3.2.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns when non null assertion operator (",(0,a.kt)("strong",{parentName:"p"},"!")," or \u201cbang\u201d operator) is used for a property access or method invocation. The operator check works at runtime and it may fail and throw a runtime exception."),(0,a.kt)("p",null,"The rule ignores the index ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," operator on the Map class because it's considered the idiomatic way to access a known-present element in a map with ",(0,a.kt)("inlineCode",{parentName:"p"},"[]!")," according to ",(0,a.kt)("a",{parentName:"p",href:"https://dart.dev/null-safety/understanding-null-safety#the-map-index-operator-is-nullable"},"the docs"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Use this rule if you want to avoid possible unexpected runtime exceptions.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Test {\n  String? field;\n\n  Test? object;\n\n  void method() {\n    field!.contains('other'); // LINT\n\n    object!.field!.contains('other'); // LINT\n\n    final map = {'key': 'value'};\n    map['key']!.contains('other');\n\n    object!.method(); // LINT\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Test {\n  String? field;\n\n  Test? object;\n\n  void method() {\n    field?.contains('other');\n\n    object?.field?.contains('other');\n\n    final map = {'key': 'value'};\n    map['key']!.contains('other');\n\n    object?.method();\n  }\n}\n")))}m.isMDXComponent=!0}}]);