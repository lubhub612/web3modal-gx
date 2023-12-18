import{proxy as g,subscribe as f,snapshot as T}from"valtio/vanilla";import{Buffer as $}from"buffer";let D;const m={ethereumClient:void 0,setEthereumClient(e){D=e},client(){if(D)return D;throw new Error("ClientCtrl has no client set")}},i=g({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),L={state:i,subscribe(e){return f(i,()=>e(i))},push(e,t){e!==i.view&&(i.view=e,t&&(i.data=t),i.history.push(e))},reset(e){i.view=e,i.history=[e]},replace(e){i.history.length>1&&(i.history[i.history.length-1]=e,i.view=e)},goBack(){if(i.history.length>1){i.history.pop();const[e]=i.history.slice(-1);i.view=e}},setData(e){i.data=e}},r={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",W3M_PREFER_INJECTED_URL_FLAG:"w3mPreferInjected",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return r.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return r.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,n){if(r.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let s=e;s.includes("://")||(s=e.replaceAll("/","").replaceAll(":",""),s=`${s}://`),s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,n);const a=encodeURIComponent(t);return`${s}wc?uri=${a}`},formatUniversalUrl(e,t,n){if(!r.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let s=e;s.endsWith("/")||(s=`${s}/`),this.setWalletConnectDeepLink(s,n);const a=encodeURIComponent(t);return`${s}wc?uri=${a}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(r.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(r.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(r.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setWeb3ModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(r.W3M_VERSION,"2.6.1")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=L.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData(){var e;const t=(e=L.state.data)==null?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t},isPreferInjectedFlag(){return typeof location<"u"?new URLSearchParams(location.search).has(r.W3M_PREFER_INJECTED_URL_FLAG):!1}},B=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),c=g({enabled:B,userSessionId:"",events:[],connectedWalletId:void 0}),V={state:c,subscribe(e){return f(c.events,()=>e(T(c.events[c.events.length-1])))},initialize(){c.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(c.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){c.connectedWalletId=e},click(e){if(c.enabled){const t={type:"CLICK",name:e.name,userSessionId:c.userSessionId,timestamp:Date.now(),data:e};c.events.push(t)}},track(e){if(c.enabled){const t={type:"TRACK",name:e.name,userSessionId:c.userSessionId,timestamp:Date.now(),data:e};c.events.push(t)}},view(e){if(c.enabled){const t={type:"VIEW",name:e.name,userSessionId:c.userSessionId,timestamp:Date.now(),data:e};c.events.push(t)}}},d=g({selectedChain:void 0,chains:void 0,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isPreferInjected:!1}),v={state:d,subscribe(e){return f(d,()=>e(d))},setChains(e){d.chains=e},getSelectedChain(){const e=m.client().getNetwork().chain;return e&&(d.selectedChain=e),d.selectedChain},setSelectedChain(e){d.selectedChain=e},setIsCustomDesktop(e){d.isCustomDesktop=e},setIsCustomMobile(e){d.isCustomMobile=e},setIsDataLoaded(e){d.isDataLoaded=e},setIsUiLoaded(e){d.isUiLoaded=e},setIsPreferInjected(e){d.isPreferInjected=e}},j=g({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),I={state:j,subscribe(e){return f(j,()=>e(j))},setConfig(e){var t,n;V.initialize(),v.setIsCustomMobile(Boolean((t=e.mobileWallets)==null?void 0:t.length)),v.setIsCustomDesktop(Boolean((n=e.desktopWallets)==null?void 0:n.length)),v.setChains(m.client().chains),v.setIsPreferInjected(m.client().isInjectedProviderInstalled()&&r.isPreferInjectedFlag()),e.defaultChain&&v.setSelectedChain(e.defaultChain),r.setWeb3ModalVersionInStorage(),Object.assign(j,e)}},o=g({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),H={state:o,subscribe(e){return f(o,()=>e(o))},getAccount(){const e=m.client().getAccount();o.address=e.address,o.isConnected=e.isConnected},async fetchProfile(e,t){var n;try{o.profileLoading=!0;const s=t??o.address,a=(n=v.state.chains)==null?void 0:n.find(l=>l.id===1);if(s&&a){const l=await m.client().fetchEnsName({address:s,chainId:1});if(l){const p=await m.client().fetchEnsAvatar({name:l,chainId:1});p&&await e(p),o.profileAvatar=p}o.profileName=l}}finally{o.profileLoading=!1}},async fetchBalance(e){try{const{chain:t}=m.client().getNetwork(),{tokenContracts:n}=I.state;let s;t&&n&&(s=n[t.id]),o.balanceLoading=!0;const a=e??o.address;if(a){const l=await m.client().fetchBalance({address:a,token:s});o.balance={amount:l.formatted,symbol:l.symbol}}}finally{o.balanceLoading=!1}},setAddress(e){o.address=e},setIsConnected(e){o.isConnected=e},resetBalance(){o.balance=void 0},resetAccount(){o.address=void 0,o.isConnected=!1,o.profileName=void 0,o.profileAvatar=void 0,o.balance=void 0}},M="https://explorer-api.walletconnect.com";async function O(e,t){const n=new URL(e,M);return n.searchParams.append("projectId",I.state.projectId),Object.entries(t).forEach(([s,a])=>{a&&n.searchParams.append(s,String(a))}),(await fetch(n)).json()}const h={async getDesktopListings(e){return O("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return O("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return O("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return O("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${M}/w3m/v1/getWalletImage/${e}?projectId=${I.state.projectId}`},getAssetImageUrl(e){return`${M}/w3m/v1/getAssetImage/${e}?projectId=${I.state.projectId}`}};var K=Object.defineProperty,P=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t)=>{for(var n in t||(t={}))F.call(t,n)&&S(e,n,t[n]);if(P)for(var n of P(t))J.call(t,n)&&S(e,n,t[n]);return e};const _=r.isMobile(),u=g({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),te={state:u,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=I.state;if(e==="NONE"||t==="ALL"&&!e)return u.recomendedWallets;if(r.isArray(e)){const n={recommendedIds:e.join(",")},{listings:s}=await h.getAllListings(n),a=Object.values(s);a.sort((l,p)=>{const W=e.indexOf(l.id),C=e.indexOf(p.id);return W-C}),u.recomendedWallets=a}else{const n=r.isArray(t),s={page:1,entries:r.RECOMMENDED_WALLET_AMOUNT,version:2,excludedIds:n?t.join(","):void 0},{listings:a}=_?await h.getMobileListings(s):await h.getDesktopListings(s);u.recomendedWallets=Object.values(a)}return u.recomendedWallets},async getWallets(e){const t=z({},e),{explorerRecommendedWalletIds:n,explorerExcludedWalletIds:s}=I.state,{recomendedWallets:a}=u;if(s==="ALL")return u.wallets;a.length?t.excludedIds=a.map(N=>N.id).join(","):r.isArray(n)&&(t.excludedIds=n.join(",")),r.isArray(s)&&(t.excludedIds=[t.excludedIds,s].filter(Boolean).join(","));const{page:l,search:p}=e,{listings:W,total:C}=_?await h.getMobileListings(t):await h.getDesktopListings(t),b=Object.values(W),A=p?"search":"wallets";return u[A]={listings:[...u[A].listings,...b],total:C,page:l??1},{listings:b,total:C}},async getInjectedWallets(){const{listings:e}=await h.getInjectedListings({}),t=Object.values(e);return u.injectedWallets=t,u.injectedWallets},getWalletImageUrl(e){return h.getWalletImageUrl(e)},getAssetImageUrl(e){return h.getAssetImageUrl(e)},resetSearch(){u.search={listings:[],total:0,page:1}}},y=g({pairingEnabled:!1,pairingUri:"",pairingError:!1}),k={state:y,subscribe(e){return f(y,()=>e(y))},setPairingUri(e){y.pairingUri=e},setPairingError(e){y.pairingError=e},setPairingEnabled(e){y.pairingEnabled=e}},E=g({open:!1}),ne={state:E,subscribe(e){return f(E,()=>e(E))},async open(e){return new Promise(t=>{const{isUiLoaded:n,isDataLoaded:s,isPreferInjected:a,selectedChain:l}=v.state,{isConnected:p}=H.state,{enableNetworkView:W}=I.state;if(k.setPairingEnabled(!0),e!=null&&e.route)L.reset(e.route);else if(p)L.reset("Account");else if(W)L.reset("SelectNetwork");else if(a){m.client().connectConnector("injected",l?.id).catch(b=>console.error(b)),t();return}else L.reset("ConnectWallet");const{pairingUri:C}=k.state;if(n&&s&&(C||p))E.open=!0,t();else{const b=setInterval(()=>{const A=v.state,N=k.state;A.isUiLoaded&&A.isDataLoaded&&(N.pairingUri||p)&&(clearInterval(b),E.open=!0,t())},200)}})},close(){E.open=!1}};var G=Object.defineProperty,x=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X=(e,t)=>{for(var n in t||(t={}))q.call(t,n)&&R(e,n,t[n]);if(x)for(var n of x(t))Q.call(t,n)&&R(e,n,t[n]);return e};function Y(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const U=g({themeMode:Y()?"dark":"light"}),se={state:U,subscribe(e){return f(U,()=>e(U))},setThemeConfig(e){const{themeMode:t,themeVariables:n}=e;t&&(U.themeMode=t),n&&(U.themeVariables=X({},n))}},w=g({open:!1,message:"",variant:"success"}),oe={state:w,subscribe(e){return f(w,()=>e(w))},openToast(e,t){w.open=!0,w.message=e,w.variant=t},closeToast(){w.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=$),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window));export{H as AccountCtrl,m as ClientCtrl,I as ConfigCtrl,r as CoreUtil,V as EventsCtrl,te as ExplorerCtrl,ne as ModalCtrl,v as OptionsCtrl,L as RouterCtrl,se as ThemeCtrl,oe as ToastCtrl,k as WcConnectionCtrl};
//# sourceMappingURL=index.js.map