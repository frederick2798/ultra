"use strict";(self.webpackChunkultronglow=self.webpackChunkultronglow||[]).push([[6959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||k[d]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i="Connecting to Ultronscan",l={unversionedId:"Mining UltronGlow/Configuration Process/Connecting to UltronScan",id:"Mining UltronGlow/Configuration Process/Connecting to UltronScan",title:"Connecting to Ultronscan",description:"---",source:"@site/docs/Mining UltronGlow/Configuration Process/Connecting to UltronScan.md",sourceDirName:"Mining UltronGlow/Configuration Process",slug:"/Mining UltronGlow/Configuration Process/Connecting to UltronScan",permalink:"/Mining UltronGlow/Configuration Process/Connecting to UltronScan",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Mining UltronGlow/Configuration Process/Connecting to UltronScan.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setting up your Device",permalink:"/Mining UltronGlow/Configuration Process/Setting up your device"},next:{title:"Preparing Storage for Rental",permalink:"/Mining UltronGlow/Configuration Process/Preparing Storage for Rental"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Get the IP address of your Docker Container",id:"1-get-the-ip-address-of-your-docker-container",level:3},{value:"2. Connect MetaMask for Ultronscan",id:"2-connect-metamask-for-ultronscan",level:3},{value:"2. Configure your accounts on your server",id:"2-configure-your-accounts-on-your-server",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-to-ultronscan"},"Connecting to Ultronscan"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.ultronscan.io"},"Ultronscan")," is the block explorer for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ultronglow.io"},"UltronGlow"),"\nnetwork, additionally providing a marketplace where users can provide and rent storage\nfrom other UltronGlow users."),(0,r.kt)("p",null,"In this guide, we will provide you with the details on how to connect the Docker container you\nconfigured in the ",(0,r.kt)("a",{parentName:"p",href:"../Configuration%20Process/Setting%20up%20your%20device#1-download-the-ultronglow-storage-provider-docker-image"},"previous step")," to UltronScan\nin order to rent your surplus storage to other users of the network."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure your computer has at least ",(0,r.kt)("strong",{parentName:"li"},"1 terabyte of available storage")," to provide on the UltronGlow\nnetwork."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metamask.io/download/"},(0,r.kt)("strong",{parentName:"a"},"Install Metamask"))," and create a new account if you haven't\nalready."),(0,r.kt)("li",{parentName:"ul"},"Purchase a minimum of xx UltronGlow's native token, UTG, from\n",(0,r.kt)("a",{parentName:"li",href:"https://www.hotcoin.com/"},"Hotcoin Global")," and transfer your UTG to your MetaMask wallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},(0,r.kt)("strong",{parentName:"a"},"Install Docker Desktop"))," on your computer\nto host the UltronGlow Storage Provider Docker container.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-get-the-ip-address-of-your-docker-container"},"1. Get the IP address of your Docker Container"),(0,r.kt)("p",null,"When connecting your Docker Container to Ultronscan, you will need the IP address of the container\nfor the login operation."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the terminal application of your choice (in this example, I'm using Windows Terminal)"),(0,r.kt)("li",{parentName:"ol"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"ipconfig /all")," in the terminal and press the ",(0,r.kt)("strong",{parentName:"li"},"Enter")," key."),(0,r.kt)("li",{parentName:"ol"},"After execution, ipconfig lists all of the network adapters, both physical and virtual, that are\npresent in your system.  Scroll down to the virtual network adapter associated with your\nDocker container image (in this example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Ethernet adapter vEthernet (WSL)"),")."),(0,r.kt)("li",{parentName:"ol"},"Copy the IP address listed, and save it for use in upcoming steps.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Container_IP_Address.png",src:n(993).Z,width:"1618",height:"1014"})),(0,r.kt)("h3",{id:"2-connect-metamask-for-ultronscan"},"2. Connect MetaMask for Ultronscan"),(0,r.kt)("p",null,"In order to perform actions in Ultronscan, you will need to connect your MetaMask wallet to the\nUltronscan website.  This will include logging into your Docker container from Ultronscan, using\nthe IP address from Step 1, and allowing MetaMask to connect to the site."),(0,r.kt)("p",null,"Using the internet browser you installed MetaMask, navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://www.ultronscan.io"},"Ultronscan")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Tools")," in top right corner of the Ultronscan website.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Storage Service Node Management"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ultronscan_First_Launch.png",src:n(7056).Z,width:"1502",height:"758"})),(0,r.kt)("p",null,"This will bring-up the login page to connect your Docker container to Ultronscan"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Enter the network address")," field, add the IP address you copied earlier in step 1\nfollowed by ",(0,r.kt)("inlineCode",{parentName:"p"},":1234"),"(the port to access the server).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Don't change the default password (you can change it later)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Login")," button"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Access_Storage_Server.png",src:n(3881).Z,width:"1620",height:"1016"})),(0,r.kt)("p",null,"This will bring up a MetaMask prompt asking you to connect your MetaMask account to this site,\nwhich associates your account with your Docker container and UltronScan."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure you are connecting to the right account, and click the ",(0,r.kt)("strong",{parentName:"p"},"Next")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Connect")," button on the following MetaMask prompt."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connect_Metamask_Account.png",src:n(4741).Z,width:"1619",height:"1013"})),(0,r.kt)("p",null,"There will be 2 following prompts from MetaMask which will add the UltronGlow network to MetaMask,\nand switch you over to the new network to proceed with the following steps."),(0,r.kt)("h3",{id:"2-configure-your-accounts-on-your-server"},"2. Configure your accounts on your server"),(0,r.kt)("p",null,"Now that UltronScan is connected to your Docker Container (your server) through MetaMask, you can\nnow configure your server account for recieving UTG rewards."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Server Mangement page, click on ",(0,r.kt)("strong",{parentName:"li"},"Import Account"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Import_Account_Ultronscan.png",src:n(1439).Z,width:"1619",height:"679"})),(0,r.kt)("p",null,"The following page will ask for the private key to your MetaMask account to bind to your server.\nDon't worry!  This hosted page is on your Docker Container and never leaves your server, so it's\nsafe."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the MetaMask extension in your browser and click ",(0,r.kt)("strong",{parentName:"li"},"Account details"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Export_Private_Key.png",src:n(5598).Z,width:"1617",height:"1012"})),(0,r.kt)("p",null,"Three consecutive MetaMask prompts will appear."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Export private key")," in the first prompt.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the second prompt, enter your MetaMask password and click ",(0,r.kt)("strong",{parentName:"p"},"Confirm"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy your private key to your clipboard and then click the ",(0,r.kt)("strong",{parentName:"p"},"Done")," button."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Metamask_Export_Private_Key.png",src:n(2060).Z,width:"1393",height:"744"})),(0,r.kt)("p",null,"Paste your private key from the cliboard into the ",(0,r.kt)("strong",{parentName:"p"},"Private key")," field of the website."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Paste_Private_Key_Ultronscan.png",src:n(7752).Z,width:"1618",height:"1009"})),(0,r.kt)("p",null,"Once completed, you'll see that your the ",(0,r.kt)("inlineCode",{parentName:"p"},"Server account")," in the UltronScan website is associated with your MetaMask account."),(0,r.kt)("p",null,"Lastly, you need to bind a revenue account associated with where rental revenue will be recieved. Click on ",(0,r.kt)("strong",{parentName:"p"},"Bind Revenue Account"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Revenue_Account_Ultronscan.png",src:n(8786).Z,width:"1616",height:"660"})),(0,r.kt)("p",null,"Your revenue account can be the same as your server account, or you can choose a different account\nif you like."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To use your server account as your revenue account, copy the address from the\n",(0,r.kt)("strong",{parentName:"p"},"Server Account")," field and paste it into the ",(0,r.kt)("strong",{parentName:"p"},"Revenue Account")," field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Binding")," button.  A MetaMask prompt will appear to process the transaction.  Approve\nthe transaction and you're done!"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Revenue_Account_Binding.png",src:n(5309).Z,width:"1618",height:"791"})),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Congratulations, you've successfully connected your server to MetaMask, configured your accounts,\nand are now ready to start renting storage!  Continue on to the ",(0,r.kt)("a",{parentName:"p",href:"/Mining%20UltronGlow/Configuration%20Process/Preparing%20Storage%20for%20Rental"},(0,r.kt)("strong",{parentName:"a"},"Next Step")),"\nto prepare your surplus storage for rental on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ultronscan.io/market"},"UltronGlow Storage Market"),"."))}u.isMDXComponent=!0},3881:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Access_Storage_Server-2c32b28a23ed3d64fd3ba1180f25c68a.png"},4741:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Connect_Metamask_Account-4c2bb680c817ae504cc3eb71eee2675b.png"},993:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Container_IP_Address-a2d740be437364ebae533ed500a3ca05.png"},5598:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Export_Private_Key-c35195d0bd33f7e1fd8bfc32a00ee4dd.png"},1439:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Import_Account_Ultronscan-5af985ef0069f15b0a4240fbc283ca0e.png"},2060:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Metamask_Export_Private_Key-af729ef925422994bae743e3101a6cbf.png"},7752:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Paste_Private_Key_Ultronscan-2d3226221f746da80c64ceb065f66739.png"},5309:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Revenue_Account_Binding-5343a859aa4e0ef15ad0bd70c871c098.png"},8786:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Revenue_Account_Ultronscan-c3d0f6b7ea6889a516b382529535afc0.png"},7056:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Ultronscan_First_Launch-69f28a1ff6fa2169935131fd3b1d0422.png"}}]);