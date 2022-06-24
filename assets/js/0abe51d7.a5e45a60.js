"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[547],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||o;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5490:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:2},p="Quick setup",l={unversionedId:"quick-setup",id:"version-V2/quick-setup",title:"Quick setup",description:"Set up a new Hardhat project with Semaphore.",source:"@site/versioned_docs/version-V2/quick-setup.md",sourceDirName:".",slug:"/quick-setup",permalink:"/docs/quick-setup",editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V2/quick-setup.md",tags:[],version:"V2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-V2/mySidebar",previous:{title:"What Is Semaphore?",permalink:"/docs/introduction"},next:{title:"Identities",permalink:"/docs/guides/identities"}},c=[{value:"Create a Node.js project",id:"create-a-nodejs-project",children:[],level:2},{value:"Install Hardhat",id:"install-hardhat",children:[],level:2},{value:"Install Semaphore contracts and JS libraries",id:"install-semaphore-contracts-and-js-libraries",children:[],level:2},{value:"Create the Semaphore contract",id:"create-the-semaphore-contract",children:[],level:2},{value:"Create Semaphore IDs",id:"create-semaphore-ids",children:[],level:2},{value:"Create a Hardhat task that deploys your contract",id:"create-a-hardhat-task-that-deploys-your-contract",children:[],level:2},{value:"Test your smart contract",id:"test-your-smart-contract",children:[],level:2},{value:"Deploy your contract to a local network",id:"deploy-your-contract-to-a-local-network",children:[],level:2}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-setup"},"Quick setup"),(0,o.kt)("p",null,"Set up a new Hardhat project with Semaphore.\nLearn how to create and test an Ethereum smart contract that uses zero-knowledge\nproofs to verify membership."),(0,o.kt)("p",null,"To check out the code used in this guide, visit the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/quick-setup"},"quick-setup")," repository."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-nodejs-project"},(0,o.kt)("strong",{parentName:"a"},"Create a Node.js project"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#install-hardhat"},(0,o.kt)("strong",{parentName:"a"},"Install Hardhat"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#install-semaphore-contracts-and-js-libraries"},(0,o.kt)("strong",{parentName:"a"},"Install Semaphore contracts and JS libraries"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-the-semaphore-contract"},(0,o.kt)("strong",{parentName:"a"},"Create the Semaphore contract"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-semaphore-ids"},(0,o.kt)("strong",{parentName:"a"},"Create Semaphore IDs"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-hardhat-task-that-deploys-your-contract"},(0,o.kt)("strong",{parentName:"a"},"Create a Hardhat task that deploys your contract"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#deploy-your-contract-to-a-local-network"},(0,o.kt)("strong",{parentName:"a"},"Deploy your contract to a local network")))),(0,o.kt)("h2",{id:"create-a-nodejs-project"},"Create a Node.js project"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node.js ",(0,o.kt)("em",{parentName:"a"},"LTS version")),"\ninstructions to install ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," (Hardhat may not work with Node.js ",(0,o.kt)("em",{parentName:"p"},"Current"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," instructions\nto download and install the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," package manager.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a directory for the project and change to the new directory."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir semaphore-example\ncd semaphore-example\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your terminal, run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn init")," to initialize the Node.js project."))),(0,o.kt)("h2",{id:"install-hardhat"},"Install Hardhat"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," is a development environment you can use to\ncompile, deploy, test, and debug Ethereum software.\nHardhat includes the Hardhat Network, a local Ethereum network for development."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/getting-started/"},"Hardhat"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add hardhat --dev\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to run ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat")," and create a ",(0,o.kt)("em",{parentName:"p"},"basic sample project"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'yarn hardhat\n# At the prompt, select "Create a basic sample project"\n# and then enter through the prompts.\n')))),(0,o.kt)("h2",{id:"install-semaphore-contracts-and-js-libraries"},"Install Semaphore contracts and JS libraries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@semaphore-protocol/contracts")," provides a ",(0,o.kt)("em",{parentName:"p"},"base contract")," that verifies\nSemaphore proofs.\nSemaphore also provides JavaScript libraries that help developers\nbuild zero-knowledge applications."),(0,o.kt)("p",null,"To install these dependencies for your project, do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install ",(0,o.kt)("inlineCode",{parentName:"p"},"@semaphore-protocol/contracts"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @semaphore-protocol/contracts\n")),(0,o.kt)("p",{parentName:"li"},"For more detail about ",(0,o.kt)("em",{parentName:"p"},"Semaphore base contracts"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://semaphore.appliedzkp.org/docs/technical-reference/contracts"},"Contracts"),".\nTo view the source, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/main/contracts"},"Contracts in the Semaphore repository"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install the JS libraries:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @semaphore-protocol/identity @semaphore-protocol/group @semaphore-protocol/proof --dev\n")),(0,o.kt)("p",{parentName:"li"},"For more information about the JS libraries, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore.js"},"semaphore.js")," repository."))),(0,o.kt)("h2",{id:"create-the-semaphore-contract"},"Create the Semaphore contract"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeters")," contract that imports and extends the Semaphore base contract:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"./contracts"),", rename ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeter.sol")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeters.sol"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeters.sol")," with the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="./semaphore-example/contracts/Greeters.sol"',title:'"./semaphore-example/contracts/Greeters.sol"'},'//SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "@semaphore-protocol/contracts/interfaces/IVerifier.sol";\nimport "@semaphore-protocol/contracts/base/SemaphoreCore.sol";\n\n/// @title Greeters contract.\n/// @dev The following code is just a example to show how Semaphore con be used.\ncontract Greeters is SemaphoreCore {\n    // A new greeting is published every time a user\'s proof is validated.\n    event NewGreeting(bytes32 greeting);\n\n    // Greeters are identified by a Merkle root.\n    // The off-chain Merkle tree contains the greeters\' identity commitments.\n    uint256 public greeters;\n\n    // The external verifier used to verify Semaphore proofs.\n    IVerifier public verifier;\n\n    constructor(uint256 _greeters, address _verifier) {\n        greeters = _greeters;\n        verifier = IVerifier(_verifier);\n    }\n\n    // Only users who create valid proofs can greet.\n    // The external nullifier is in this example the root of the Merkle tree.\n    function greet(\n        bytes32 _greeting,\n        uint256 _nullifierHash,\n        uint256[8] calldata _proof\n    ) external {\n        _verifyProof(_greeting, greeters, _nullifierHash, greeters, _proof, verifier);\n\n        // Prevent double-greeting (nullifierHash = hash(root + identityNullifier)).\n        // Every user can greet once.\n        _saveNullifierHash(_nullifierHash);\n\n        emit NewGreeting(_greeting);\n    }\n}\n\n')))),(0,o.kt)("h2",{id:"create-semaphore-ids"},"Create Semaphore IDs"),(0,o.kt)("p",null,"Semaphore IDs (i.e. ",(0,o.kt)("em",{parentName:"p"},"identity commitments"),") represent user identities and\nare the leaves of the Merkle trees in the protocol."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"./static")," folder and add a ",(0,o.kt)("inlineCode",{parentName:"p"},"./static/identityCommitments.json")," file that\ncontains the following array of IDs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="./static/identityCommitments.json"',title:'"./static/identityCommitments.json"'},'[\n    "9426253249246138013650573474062059446203468399013007463704855436559640562175",\n    "6200634377081441056179822649025268043304989981899916286941956069781421654881",\n    "19706772421195815860043593475869058320994241404138740034486179990871964981523"\n]\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To generate the IDs for this example, we used ",(0,o.kt)("inlineCode",{parentName:"p"},"@semaphore-protocol/identity"),".\nWe used Metamask to sign messages with the first 3 Ethereum accounts\nof the ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/reference/#accounts"},"Hardhat dev wallet"),", and then we used those messages to generate Semaphore ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/identities#generating-deterministic-identities"},"deterministic identities"),"."))),(0,o.kt)("h2",{id:"create-a-hardhat-task-that-deploys-your-contract"},"Create a Hardhat task that deploys your contract"),(0,o.kt)("p",null,"Hardhat lets you write ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/guides/create-task.html#creating-a-task"},"tasks"),"\nthat automate building and deploying smart contracts and dApps.\nTo create a task that deploys the ",(0,o.kt)("inlineCode",{parentName:"p"},"Greeters")," contract, do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat-dependency-compiler"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add hardhat-dependency-compiler --dev\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/ItsNickBarry/hardhat-dependency-compiler"},(0,o.kt)("inlineCode",{parentName:"a"},"hardhat-dependency-compiler")),"\ncompiles Solidity contracts and dependencies.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"tasks")," folder and add a ",(0,o.kt)("inlineCode",{parentName:"p"},"./tasks/deploy.js")," file that contains the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="./tasks/deploy.js"',title:'"./tasks/deploy.js"'},'const { Group } = require("@semaphore-protocol/group")\nconst identityCommitments = require("../static/identityCommitments.json")\nconst { task, types } = require("hardhat/config")\n\ntask("deploy", "Deploy a Greeters contract")\n    .addOptionalParam("logs", "Print the logs", true, types.boolean)\n    .setAction(async ({ logs }, { ethers }) => {\n        const VerifierContract = await ethers.getContractFactory("Verifier20")\n        const verifier = await VerifierContract.deploy()\n\n        await verifier.deployed()\n\n        logs && console.log(`Verifier contract has been deployed to: ${verifier.address}`)\n\n        const GreetersContract = await ethers.getContractFactory("Greeters")\n\n        const group = new Group()\n\n        group.addMembers(identityCommitments)\n\n        const greeters = await GreetersContract.deploy(group.root, verifier.address)\n\n        await greeters.deployed()\n\n        logs && console.log(`Greeters contract has been deployed to: ${greeters.address}`)\n\n        return greeters\n    })\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," file, add the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="./hardhat.config.js"',title:'"./hardhat.config.js"'},'require("@nomiclabs/hardhat-waffle")\nrequire("hardhat-dependency-compiler")\nrequire("./tasks/deploy") // Your deploy task.\n\nmodule.exports = {\n    solidity: "0.8.4",\n    dependencyCompiler: {\n        // It allows Hardhat to compile the external Verifier.sol contract.\n        paths: ["@semaphore-protocol/contracts/verifiers/Verifier20.sol"]\n    }\n}\n')))),(0,o.kt)("h2",{id:"test-your-smart-contract"},"Test your smart contract"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/plugins/nomiclabs-hardhat-waffle.html"},(0,o.kt)("inlineCode",{parentName:"a"},"hardhat-waffle")),"\nlets you write tests with the ",(0,o.kt)("a",{parentName:"p",href:"https://getwaffle.io/"},"Waffle")," test framework\nand ",(0,o.kt)("a",{parentName:"p",href:"https://www.chaijs.com/"},"Chai assertions"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"hardhat-waffle")," plugin and dependencies for smart\ncontract tests:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @nomiclabs/hardhat-waffle 'ethereum-waffle@^3.0.0' \\\n   @nomiclabs/hardhat-ethers 'ethers@^5.0.0' chai\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the Semaphore ",(0,o.kt)("a",{parentName:"p",href:"http://www.trusted-setup-pse.org/"},"zk files"),"\nand copy them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"./static")," folder. Your application and tests must pass these\nstatic files to Semaphore to create zero-knowledge proofs."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd static\nwget http://www.trusted-setup-pse.org/semaphore/20/semaphore.zkey\nwget http://www.trusted-setup-pse.org/semaphore/20/semaphore.wasm\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"./test/sample-test.js")," with the following test:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="./test/sample-test.js"',title:'"./test/sample-test.js"'},'const { Identity } = require("@semaphore-protocol/identity")\nconst { Group } = require("@semaphore-protocol/group")\nconst { generateProof, packToSolidityProof } = require("@semaphore-protocol/proof")\nconst identityCommitments = require("../static/identityCommitments.json")\nconst { expect } = require("chai")\nconst { run, ethers } = require("hardhat")\n\ndescribe("Greeters", function () {\n    let contract\n    let signers\n\n    before(async () => {\n        contract = await run("deploy", { logs: false })\n\n        signers = await ethers.getSigners()\n    })\n\n    describe("# greet", () => {\n        const wasmFilePath = "./static/semaphore.wasm"\n        const zkeyFilePath = "./static/semaphore.zkey"\n\n        it("Should greet", async () => {\n            const greeting = "Hello world"\n            const bytes32Greeting = ethers.utils.formatBytes32String(greeting)\n\n            const message = await signers[0].signMessage("Sign this message to create your identity!")\n            const identity = new Identity(message)\n\n            const group = new Group()\n\n            group.addMembers(identityCommitments)\n\n            const fullProof = await generateProof(identity, group, group.root, greeting, {\n                wasmFilePath,\n                zkeyFilePath\n            })\n            const solidityProof = packToSolidityProof(fullProof.proof)\n\n            const transaction = contract.greet(\n                bytes32Greeting,\n                fullProof.publicSignals.nullifierHash,\n                solidityProof\n            )\n\n            await expect(transaction).to.emit(contract, "NewGreeting").withArgs(bytes32Greeting)\n        })\n    })\n})\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," commands to compile and test your contract:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn hardhat compile\nyarn hardhat test\n")))),(0,o.kt)("h2",{id:"deploy-your-contract-to-a-local-network"},"Deploy your contract to a local network"),(0,o.kt)("p",null,"To deploy your contract in a local Hardhat network (and use it in your dApp), run the following ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn hardhat node\nyarn hardhat deploy --network localhost # In another tab.\n")),(0,o.kt)("p",null,"For a more complete demo that provides a starting point for your dApp,\nsee ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/boilerplate/"},"semaphore-boilerplate"),"."))}d.isMDXComponent=!0}}]);