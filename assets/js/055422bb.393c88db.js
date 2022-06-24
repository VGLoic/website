"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[579],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7603:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:7},s="Glossary",p={unversionedId:"glossary",id:"version-V2/glossary",title:"Glossary",description:"identity commitment",source:"@site/versioned_docs/version-V2/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V2/glossary.md",tags:[],version:"V2",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"version-V2/mySidebar",previous:{title:"Subgraph",permalink:"/docs/subgraph"},next:{title:"Resources",permalink:"/docs/resources"}},u=[{value:"identity commitment",id:"identity-commitment",children:[],level:2},{value:"Merkle tree",id:"merkle-tree",children:[],level:2},{value:"nullifier",id:"nullifier",children:[],level:2},{value:"Semaphore group",id:"semaphore-group",children:[],level:2},{value:"Semaphore identity",id:"semaphore-identity",children:[],level:2},{value:"trusted setup files",id:"trusted-setup-files",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glossary"},"Glossary"),(0,i.kt)("h2",{id:"identity-commitment"},"identity commitment"),(0,i.kt)("p",null,"The public ",(0,i.kt)("a",{parentName:"p",href:"#semaphore-identity"},"Semaphore identity")," value used in ",(0,i.kt)("a",{parentName:"p",href:"#semaphore-group"},"Semaphore groups"),"."),(0,i.kt)("p",null,"Semaphore uses the ",(0,i.kt)("strong",{parentName:"p"},"Poseidon")," hash function to create the identity commitment from the Semaphore identity secret values.\nFor more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://www.poseidon-hash.info/"},"Poseidon website"),"."),(0,i.kt)("h2",{id:"merkle-tree"},"Merkle tree"),(0,i.kt)("p",null,"A tree in which every leaf (i.e., a node that doesn't have children) is labelled with the cryptographic hash of a data block,\nand every node that isn't a leaf is labelled with the cryptographic hash of its child node labels.\nIn zero-knowledge protocols, Merkle trees can be used to efficiently summarize and validate large data sets.\nTo validate that a tree contains a specific leaf, a verifier only needs a portion of the complete data structure."),(0,i.kt)("p",null,"For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Merkle_tree"},"Merkle tree in Wikipedia"),"."),(0,i.kt)("h2",{id:"nullifier"},"nullifier"),(0,i.kt)("p",null,"A value used to prevent double entry or double signalling."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/technical-reference/circuits/#nullifier-hash"},"Circuit nullifier hash")),(0,i.kt)("h2",{id:"semaphore-group"},"Semaphore group"),(0,i.kt)("p",null,"A group is a binary incremental ",(0,i.kt)("a",{parentName:"p",href:"#merkle-tree"},"Merkle tree")," in which each leaf contains an ",(0,i.kt)("a",{parentName:"p",href:"#identity-commitment"},"identity commitment")," for a user.\nThe identity commitment proves that the user is a group member without revealing the Semaphore identity of the user."),(0,i.kt)("p",null,"Semaphore uses the ",(0,i.kt)("strong",{parentName:"p"},"Poseidon")," hash function to create Merkle trees.\nFor more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://www.poseidon-hash.info/"},"Poseidon website"),"."),(0,i.kt)("h2",{id:"semaphore-identity"},"Semaphore identity"),(0,i.kt)("p",null,"The identity of a user in the Semaphore protocol.\nAn identity contains the following three values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#identity-commitment"},"Identity commitment"),": the public value."),(0,i.kt)("li",{parentName:"ul"},"Identity trapdoor and identity nullifier: secret values known only by the user.")),(0,i.kt)("h2",{id:"trusted-setup-files"},"trusted setup files"),(0,i.kt)("p",null,"The secure, verifiable parameters generated by Semaphore's trusted setup ceremony.\nSemaphore uses the trusted setup files to generate and verify valid zero-knowledge proofs.\nTo generate or verify valid zero-knowledge proofs with Semaphore, applications must include the following Semaphore ",(0,i.kt)("em",{parentName:"p"},"trusted setup")," files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"semaphore.zkey"),(0,i.kt)("li",{parentName:"ul"},"semaphore.wasm"),(0,i.kt)("li",{parentName:"ul"},"semaphore.json")),(0,i.kt)("p",null,"For a complete list of ready-to-use files, see ",(0,i.kt)("a",{parentName:"p",href:"http://www.trusted-setup-pse.org"},"http://www.trusted-setup-pse.org"),".\nTo learn more, see the ",(0,i.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/trustedsetup-a86f4.appspot.com/semaphore/semaphore_top_index.html"},"trusted setup ceremony"),"."))}m.isMDXComponent=!0}}]);