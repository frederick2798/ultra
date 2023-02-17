"use strict";(self.webpackChunkultronglow=self.webpackChunkultronglow||[]).push([[4935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Setting up your Device",l={unversionedId:"Become a Storage Provider/Setting up your device",id:"Become a Storage Provider/Setting up your device",title:"Setting up your Device",description:"---",source:"@site/docs/Become a Storage Provider/Setting up your device.md",sourceDirName:"Become a Storage Provider",slug:"/Become a Storage Provider/Setting up your device",permalink:"/Become a Storage Provider/Setting up your device",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Become a Storage Provider/Setting up your device.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/Become a Storage Provider/Get Started Storage Provider"},next:{title:"Connecting to Ultronscan",permalink:"/Become a Storage Provider/Connecting to UltronScan"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Download the UltronGlow Storage Provider Docker image",id:"1-download-the-ultronglow-storage-provider-docker-image",level:3},{value:"2. Configure and run the Docker container",id:"2-configure-and-run-the-docker-container",level:3},{value:"Next Steps",id:"next-steps",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-your-device"},"Setting up your Device"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Storage providers on the UltronGlow network utilize containerization technology to provide a\nseamless way to configure storage for rental, as well as earning rewards for doing so.  "),(0,o.kt)("p",null,"This guide provides instructions to configure ",(0,o.kt)("strong",{parentName:"p"},"Docker Desktop"),", find and download the UltronGlow container\nfrom ",(0,o.kt)("strong",{parentName:"p"},"DockerHub"),", and configure the container appropriately for use on the UltronGlow network."),(0,o.kt)("p",null,"Before starting, make sure you have followed the below prerequisites in order to be successful."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Complete the prerequisites in ",(0,o.kt)("a",{parentName:"li",href:"/Become%20a%20Storage%20Provider/Get%20Started%20Storage%20Provider"},"Getting Started"),".")),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-download-the-ultronglow-storage-provider-docker-image"},"1. Download the UltronGlow Storage Provider Docker image"),(0,o.kt)("p",null,"Once you have Docker Desktop installed on your computer, you will host a container that will run the\nUltronGlow Storage Provider services that facilitate sharing your storate on the network."),(0,o.kt)("p",null,"Open the ",(0,o.kt)("strong",{parentName:"p"},"Docker Desktop")," application on your computer."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Images")," in the left navigation bar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change from ",(0,o.kt)("strong",{parentName:"p"},"Local")," to ",(0,o.kt)("strong",{parentName:"p"},"Hub")," to search for the UltronGlow image in Docker Hub.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Search")," field."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker_Image_Search.png",src:n(939).Z,width:"1352",height:"478"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Images")," tab to search for the image.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Search")," bar, type ",(0,o.kt)("strong",{parentName:"p"},"utg-ss")," to find the ",(0,o.kt)("em",{parentName:"p"},"gordie")," image.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you find the image, click on the ",(0,o.kt)("strong",{parentName:"p"},"Pull")," button to download the image to your computer."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker_Image_Pull.png",src:n(5080).Z,width:"1696",height:"1118"})),(0,o.kt)("p",null,"The image will take a few seconds to download to your computer."),(0,o.kt)("h3",{id:"2-configure-and-run-the-docker-container"},"2. Configure and run the Docker container"),(0,o.kt)("p",null,"Once the image has downloaded successfully, you will configure the container for your computer\nwhich will enable you to offer your storage resources on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.ultronscan.io/market/"},"UltronGlow storage market"),"."),(0,o.kt)("p",null,"In Docker Desktop, do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Images")," on the left navigation pane.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Run")," button, which will bring-up the ",(0,o.kt)("strong",{parentName:"p"},"Run a new container")," dialog box.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Optional Settings")," dropdown button where you will configure the container."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker_Image_Optional_Settings.png",src:n(796).Z,width:"1691",height:"1118"})),(0,o.kt)("p",null,"The image will take a few seconds to download to your computer.  Once the image has downloaded\nsuccessfully, do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Images")," on the left navigation pane.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Run")," button, which will bring up the ",(0,o.kt)("strong",{parentName:"p"},"Run a new container")," dialog box.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Optional Settings")," dropdown button where you will configure the container as\nfollows:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter a descriptive name for in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Container name")," field.  In this example, it is ",(0,o.kt)("strong",{parentName:"p"},"UTG_Storage_Provider"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Host port")," fields, enter ",(0,o.kt)("strong",{parentName:"p"},"1234")," and ",(0,o.kt)("strong",{parentName:"p"},"8080")," respectively.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Host path")," fields uner ",(0,o.kt)("strong",{parentName:"p"},"Ports"),", you will specify the location of the storage you\nwant to share."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You will first need to create 2 subdirectories on the drive you are using to share storage,\nnamed ",(0,o.kt)("em",{parentName:"li"},"\\tmp")," and ",(0,o.kt)("em",{parentName:"li"},"\\utg")," respectively."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"Host Path"),", enter the path to the ",(0,o.kt)("em",{parentName:"li"},"\\tmp")," directory you created in the above step."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"Container path"),", enter ",(0,o.kt)("em",{parentName:"li"},"/tmp")),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"+")," icon, which is located to the right of the path you just entered, which\nwill create another ",(0,o.kt)("inlineCode",{parentName:"li"},"Host Path")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Container path")," line."),(0,o.kt)("li",{parentName:"ul"},"In the new ",(0,o.kt)("inlineCode",{parentName:"li"},"Host path")," field, enter the path to the ",(0,o.kt)("em",{parentName:"li"},"\\utg")," directory you created earlier."),(0,o.kt)("li",{parentName:"ul"},"In the new ",(0,o.kt)("inlineCode",{parentName:"li"},"Container path")," field, enter ",(0,o.kt)("em",{parentName:"li"},"/data/utgfs"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Run")," button to start your Storage Provider container."))))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker_Image_Optional_Settings_Details.png",src:n(4599).Z,width:"1616",height:"1014"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate back to ",(0,o.kt)("strong",{parentName:"li"},"Containers")," in Docker Desktop, and you'll see that your container is now\nrunning.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Container_Running.png",src:n(8576).Z,width:"1621",height:"506"})),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Congratulations, you've successfully deployed your UltronGlow Docker image on your computer!\nContinue on to the ",(0,o.kt)("a",{parentName:"p",href:"/Become%20a%20Storage%20Provider/Connecting%20to%20UltronScan"},(0,o.kt)("strong",{parentName:"a"},"Next Step"))," to connect your Docker image to ",(0,o.kt)("strong",{parentName:"p"},"UltronScan"),"\nand rent your storage on the Storage Market."))}u.isMDXComponent=!0},8576:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Container_Running-9fab0bb769953423d753ccc8ef554b6c.png"},796:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Docker_Image_Optional_Settings-cafd6f74b6fcc7a313e79e391ac99721.png"},4599:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Docker_Image_Optional_Settings_Details-719674a9924ec5b37200dd4a18d4c758.png"},5080:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Docker_Image_Pull-7ee32b110f997058fda9582f108de8dd.png"},939:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Docker_Image_Search-7de81768b40882358eccf8e60f723261.png"}}]);