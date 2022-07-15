"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2317],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6963:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],c={},i="Prefer correct type name",p={unversionedId:"rules/common/prefer-correct-type-name",id:"rules/common/prefer-correct-type-name",title:"Prefer correct type name",description:"Configurable",source:"@site/docs/rules/common/prefer-correct-type-name.md",sourceDirName:"rules/common",slug:"/rules/common/prefer-correct-type-name",permalink:"/docs/rules/common/prefer-correct-type-name",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/prefer-correct-type-name.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prefer correct identifier length",permalink:"/docs/rules/common/prefer-correct-identifier-length"},next:{title:"Prefer enums byName",permalink:"/docs/rules/common/prefer-enums-by-name"}},u={},m=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prefer-correct-type-name"},"Prefer correct type name"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,o.kt)("h2",{id:"rule-id"},"Rule id"),(0,o.kt)("p",null,"prefer-correct-type-name"),(0,o.kt)("h2",{id:"severity"},"Severity"),(0,o.kt)("p",null,"Style"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Rule checks that the type name should only contain alphanumeric characters, start with an uppercase character and span between ",(0,o.kt)("inlineCode",{parentName:"p"},"min-length")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"max-length")," characters in length."),(0,o.kt)("p",null,"The rule can be configured using fields ",(0,o.kt)("inlineCode",{parentName:"p"},"min-length")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"max-length"),". By default it's ",(0,o.kt)("inlineCode",{parentName:"p"},"min-length = 3")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"max-length = 40"),". You can also configure type name exceptions with ",(0,o.kt)("inlineCode",{parentName:"p"},"excluded")," option."),(0,o.kt)("h3",{id:"config-example"},"Config example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - prefer-correct-type-name:\n        excluded: [ 'exampleExclude' ]\n        min-length: 3\n        max-length: 40\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class example { // not capitalized\n  //...\n} \nclass ex { // length equals 2\n  //...\n} \nclass multiplatformConfigurationPointWithExtras { // length equals 41\n  //...\n} \n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class Example { // length equals 7\n  //...\n}\n\nclass _Example { // length equals 7\n  //...\n} \n")))}d.isMDXComponent=!0}}]);