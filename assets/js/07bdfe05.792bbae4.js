"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[0],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var o=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(k,i(i({ref:t},c),{},{components:r})):o.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(1163),a=(r(9496),r(9613));const n={sidebar_position:1},i="Setting up a Crackpipe Server",s={unversionedId:"server-docs/setup",id:"server-docs/setup",title:"Setting up a Crackpipe Server",description:"Setting up a Crackpipe server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place.",source:"@site/docs/server-docs/setup.md",sourceDirName:"server-docs",slug:"/server-docs/setup",permalink:"/docs/server-docs/setup",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/docs/server-docs/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Configuration",permalink:"/docs/server-docs/configuration"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Method 1: Docker Setup",id:"method-1-docker-setup",level:3},{value:"1. Install Docker and Docker Compose",id:"1-install-docker-and-docker-compose",level:4},{value:"2. Create a Docker Compose file",id:"2-create-a-docker-compose-file",level:4},{value:"3. Start the Crackpipe server",id:"3-start-the-crackpipe-server",level:4},{value:"Method 1.1: Docker Setup without PostgreSQL",id:"method-11-docker-setup-without-postgresql",level:3},{value:"Method 2: Caprover One Click App",id:"method-2-caprover-one-click-app",level:3},{value:"Method 2: Portrainer One Click App",id:"method-2-portrainer-one-click-app",level:3},{value:"Configuration",id:"configuration",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-crackpipe-server"},"Setting up a Crackpipe Server"),(0,a.kt)("p",null,"Setting up a Crackpipe server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place."),(0,a.kt)("p",null,"There are many ways to deploy a Crackpipe Server. Choose one from below."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Zipped Games in a specific name format"),": Crackpipe needs the games to be in a specific name format to be able to identify and install them correctly. Definitely have a read on ",(0,a.kt)("a",{parentName:"li",href:"/docs/server-docs/structure"},"this chapter.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TypeORM-compatible PostgreSQL Server"),": Crackpipe uses a PostgreSQL server to store all the data. Ensure that you have a TypeORM-compatible PostgreSQL server installed and running on your system.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"With the right setup using sqlite, Crackpipe doesn't need a Postgres database to run, so it can be skipped if necessary. Nevertheless, we suggest configuring a Postgres database to ensure the best performance. See ",(0,a.kt)("a",{parentName:"li",href:"#method-11-docker-setup-without-postgresql"},"Method 1.1."))))),(0,a.kt)("h3",{id:"method-1-docker-setup"},"Method 1: Docker Setup"),(0,a.kt)("h4",{id:"1-install-docker-and-docker-compose"},"1. Install Docker and Docker Compose"),(0,a.kt)("p",null,"Docker and Docker Compose are recommended to set up the Crackpipe server. If you do not have Docker and Docker Compose installed on your system, follow these steps to install them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker"),": You can download Docker from the official ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker website"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Docker Compose"),": Docker Compose is already included in the Docker Desktop installation for Windows and macOS users. If you are using Linux, follow the instructions on the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker Compose installation page"),".")),(0,a.kt)("h4",{id:"2-create-a-docker-compose-file"},"2. Create a Docker Compose file"),(0,a.kt)("p",null,"Create a new file named ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," in a directory of your choice and copy the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  crackpipe-backend:\n    image: crackpipe-backend\n    restart: unless-stopped\n    environment:\n      CONFIG_DB_HOST: "db"\n      CONFIG_DB_USERNAME: "default"\n      CONFIG_DB_PASSWORD: "default"\n    volumes:\n      - /files:/your/games/folder:ro\n      - /images:/your/images/folder\n  db:\n    image: postgres\n    restart: unless-stopped\n    environment:\n      POSTGRES_USER: default\n      POSTGRES_PASSWORD: default\n      POSTGRES_DB: crackpipe\n    ports:\n      - 5432:5432\n')),(0,a.kt)("h4",{id:"3-start-the-crackpipe-server"},"3. Start the Crackpipe server"),(0,a.kt)("p",null,"Open a terminal, navigate to the directory where the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file is located, and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("p",null,"This will start the Crackpipe server and PostgreSQL server in the background. The ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," parameter detaches the process from the terminal."),(0,a.kt)("p",null,"Congratulations! You have successfully set up a Crackpipe server. You can now start adding games and managing your game library."),(0,a.kt)("h3",{id:"method-11-docker-setup-without-postgresql"},"Method 1.1: Docker Setup without PostgreSQL"),(0,a.kt)("p",null,"We really don't recommend it but you can run Crackpipe without a PostgreSQL Database too using the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.1"\nservices:\n  crackpipe-backend:\n    image: crackpipe-backend\n    restart: unless-stopped\n    environment:\n      CONFIG_DB_SYSTEM: "SQLITE"\n    volumes:\n      - /files:/your/games/folder:ro\n      - /db:/your/database/folder\n      - /images:/your/images/folder\n')),(0,a.kt)("h3",{id:"method-2-caprover-one-click-app"},"Method 2: Caprover One Click App"),(0,a.kt)("p",null,"Not yet available"),(0,a.kt)("h3",{id:"method-2-portrainer-one-click-app"},"Method 2: Portrainer One Click App"),(0,a.kt)("p",null,"Not yet available"),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Congratulations! Now that you have set up your server you can begin configuring it. There are a ton of configuration options which will be explained ",(0,a.kt)("a",{parentName:"p",href:"/docs/server-docs/configuration"},"on the next page"),"."),(0,a.kt)("p",null,"Most notably you should set the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_RAWG_API_KEY")," Environment Variable for ",(0,a.kt)("a",{parentName:"p",href:"https://rawg.io/"},"RAWG"),", which is a video game database that Crackpipe uses to fetch game metadata."))}d.isMDXComponent=!0}}]);