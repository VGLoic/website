"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[610],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2648:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,title:"Identities"},d="Semaphore identities",l={unversionedId:"guides/identities",id:"version-V2/guides/identities",title:"Identities",description:"In order to join a Semaphore group, a user must first create a Semaphore identity.",source:"@site/versioned_docs/version-V2/guides/identities.md",sourceDirName:"guides",slug:"/guides/identities",permalink:"/docs/guides/identities",editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V2/guides/identities.md",tags:[],version:"V2",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Identities"},sidebar:"version-V2/mySidebar",previous:{title:"Quick setup",permalink:"/docs/quick-setup"},next:{title:"Groups",permalink:"/docs/guides/groups"}},p=[{value:"Create identities",id:"create-identities",children:[{value:"Create random identities",id:"create-random-identities",children:[],level:3},{value:"Create deterministic identities",id:"create-deterministic-identities",children:[],level:3}],level:2},{value:"Saving your identities",id:"saving-your-identities",children:[],level:2},{value:"Identity commitments",id:"identity-commitments",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semaphore-identities"},"Semaphore identities"),(0,a.kt)("p",null,"In order to join a ",(0,a.kt)("a",{parentName:"p",href:"/docs/glossary#semaphore-group"},"Semaphore group"),", a user must first create a ",(0,a.kt)("a",{parentName:"p",href:"/docs/glossary#semaphore-identity"},"Semaphore identity"),".\nA Semaphore identity contains two values generated with the identity:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identity trapdoor"),(0,a.kt)("li",{parentName:"ul"},"identity nullifier")),(0,a.kt)("p",null,"To use and verify the identity, the identity owner (user) must know the trapdoor and nullifier values.\nTo prevent fraud, the owner should keep both values secret."),(0,a.kt)("h2",{id:"create-identities"},"Create identities"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore.js/tree/main/packages/identity"},(0,a.kt)("inlineCode",{parentName:"a"},"@semaphore-protocol/identity"))," library to create a Semaphore identity ",(0,a.kt)("em",{parentName:"p"},"deterministically")," (from the hash of a message) or ",(0,a.kt)("em",{parentName:"p"},"randomly"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#create-random-identities"},(0,a.kt)("strong",{parentName:"a"},"Create random identities"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#create-deterministic-identities"},(0,a.kt)("strong",{parentName:"a"},"Create deterministic identities")))),(0,a.kt)("h3",{id:"create-random-identities"},"Create random identities"),(0,a.kt)("p",null,"To create a random identity, instantiate ",(0,a.kt)("inlineCode",{parentName:"p"},"Identity")," without any parameters. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Identity } from "@semaphore-protocol/identity"\n\nconst identity = new Identity()\n')),(0,a.kt)("p",null,"The new identity contains random ",(0,a.kt)("inlineCode",{parentName:"p"},"trapdoor")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nullifier")," secret values.\nThe following example shows how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},".getTrapdoor")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".getNullifier")," accessor methods to retrieve the values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Random secret values.\nconst trapdoor = identity.getTrapdoor()\nconst nullifier = identity.getNullifier()\n")),(0,a.kt)("h3",{id:"create-deterministic-identities"},"Create deterministic identities"),(0,a.kt)("p",null,"If you pass a message as a parameter, trapdoor and nullifier will be generated from the SHA256 hash of the message. The message must clearly be kept secret in turn, since anyone who owns the message can recreate the same identity. The massage can be a password or a message signed with a private key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const identity = new Identity("secret-message")\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Since building a system to save or recover the secret values of Semaphore identities is nontrivial, a message signed with the private key of the users' Ethereum account allows these functionalities to be delegated to an existing wallet (e.g., Metamask). Users can recreate their Semaphore identity whenever they want using their Ethereum account by signing the same message."))),(0,a.kt)("h2",{id:"saving-your-identities"},"Saving your identities"),(0,a.kt)("p",null,"You can also export and save the identities."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const identityBackup = identity.toString()\n\n// It contains trapdoor and nullifier as a JSON array.\nconsole.log(identityBackup) // \'["8255d...", "62c41..."]\'\n')),(0,a.kt)("p",null,"And reuse the same identity later."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const identity = new Identity(identityBackup)\n")),(0,a.kt)("h2",{id:"identity-commitments"},"Identity commitments"),(0,a.kt)("p",null,"The Poseidon hash of the identity nullifier and trapdoor is called the identity secret, and its hash is the identity commitment. The latter, similarly to Ethereum addresses, is a public value and is used in Semaphore groups to represent the identity of members."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const identityCommitment = identity.generateCommitment()\n")))}m.isMDXComponent=!0}}]);