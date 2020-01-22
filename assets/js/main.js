!function(e){function t(t){for(var r,i,o=t[0],a=t[1],s=0,u=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(c&&c(t);u.length;)u.shift()()}var r={},n={4:0};function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,i){r=n[e]=[t,i]}));t.push(r[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+""+({0:"vendors~firebase-app~firebase-auth~firebase-firestore~firebase-messaging",1:"cookieconsent",2:"firebase-app",3:"lazysizes",5:"vendors~@sentry/browser",6:"vendors~firebase-auth",7:"vendors~firebase-firestore",8:"vendors~firebase-messaging"}[e]||e)+".js"}(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",c.name="ChunkLoadError",c.type=i,c.request=o,r[1](c)}n[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/js/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var c=a;i(i.s=1)}([function(e,t){function r(e){this.utilities=e}r.get=function(e,t,r){return(t||"").replace(/\[/g,".").replace(/]/g,"").split(".").filter(Boolean).every((function(t){return!(t&&void 0===(e=e[t]))}))?e:r},r.set=function(e,t,r){if(Object(e)!==e)return e;var n=(t||"").split(".");return n.slice(0,-1).reduce((function(e,t,r){return Object(e[t])===e[t]?e[t]:e[t]=Math.abs(n[r+1])>>0==+n[r+1]?[]:{}}),e)[n.pop()]=r,e},r.clipboardCopy=function(e){var t=document.createElement("textarea");t.setAttribute("style","width:1px;border:0;opacity:0;"),t.value=e&&e.nodeType?e.innerHTML:e,document.body.appendChild(t),t.select();try{document.execCommand("copy")}catch(e){alert("Please press Ctrl/Cmd+C to copy")}document.body.removeChild(t)},e.exports=r},function(e,t,r){e.exports=r(2)},function(e,t,r){Manager=new(r(3)),Manager.init(Configuration,(function(){Manager.log("Init main.js");r(8);var e=Manager.dom(),t=0,n={};e.select("form.slapform").on("submit",(function(r){r.preventDefault(),r.target.id=r.target.id||"slapform-"+t++;var i="#"+r.target.id;c(!0);var o,a=r.target.getElementsByClassName("slapform-validation-error")[0];function s(t){var r=e.select(a);t?r.show().setInnerHTML(t):r.hide()}function c(t){Manager.log("setting disalbed = ",t);var r=e.select(i+" button[type='submit']");t?r.setAttribute("disabled",t):r.removeAttribute("disabled")}e.select(i+" input, "+i+" select, "+i+" textarea").each((function(t,r){var a=e.select(r),c=a.getAttribute("type"),u=a.getAttribute("name"),l=a.getAttribute("required");l=!(null==l),n[u]="checkbox"==c||"radio"==c?e.select(i+" *[name='"+u+"']").getValue():a.getValue();var p="checkbox"==c?(n[u]||[])[0]:n[u];if(o=!l||l&&!!p,console.log(u,n[u],"required = "+l,"pass = "+o),!o)return s("Please fill out all of the required fields."),!1})),o?Manager.ajax().request({method:"POST",url:e.select(i).getAttribute("action"),data:n}).success((function(e,t,r){Manager.log("SUCCESS",e,t,r),s(),window.location.href="https://slapform.com/submission?meta="+encodeURIComponent('{"status":"success","referrer":"'+(n.slap_redirect||window.location.href)+'"}')})).error((function(e,t,r){Manager.log("FAIL",r),s(r),c(!1)})):c(!1),Manager.log(n)}))}))},function(e,t,r){var n=r(4),i=r(5),o=r(6),a=r(0),s=r(7);function c(){iev=function(){var e=/\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(navigator.userAgent);if(e)return parseInt(e[2])}(),this.properties={options:{page:{},global:{}},page:{code:"",url:"",status:{ready:!1,initilizing:!1,authReady:!1,masterSWRegistered:!1,DOMContentLoaded:!1,eventHandlersSet:!1},queryString:{data:{},exists:void 0},libErrors:[],isSupportedBrowser:!iev||iev>=11},global:{version:"",url:"",cacheBreaker:"",brand:{name:"default"}},auth:{user:!1},references:{serviceWorker:void 0},meta:{environment:"production"}};try{this.properties.page.url=window.location.href}catch(e){}}function u(e,t){null!=t&&!1===t.isAnonymous?function(e,t){if(e.properties.page.status.didSignUp){var r=e.dom();e.ajax().request({url:"https://us-central1-"+e.properties.options.libraries.firebase_app.config.projectId+".cloudfunctions.net/bm_signUpHandler",data:{email:t.email,uid:t.uid,newsletterSignUp:r.select(".auth-newsletter-input").getValue(),affiliateCode:e.storage().get("auth.affiliateCode","")}}).success((function(e,t,r){})).always((function(r,n){l(e,t)}))}else l(e,t)}(e,t):p(e)}function l(e,t){var r=e.dom(),n=e.query().create(window.location.href).get("auth_redirect");n?window.location.href=decodeURIComponent(n):"prohibited"!=e.properties.options.auth.state?(r.select(".auth-signedin-true-element").show(),r.select(".auth-signedin-false-element").hide(),r.select(".auth-email-element").each((function(e,n){"INPUT"==n.tagName?r.select(n).setValue(t.email):r.select(n).setInnerHTML(t.email)})),r.select(".auth-uid-element").each((function(e,n){"INPUT"==n.tagName?r.select(n).setValue(t.uid):r.select(n).setInnerHTML(t.uid)}))):window.location.href=e.properties.options.auth.sends.prohibited}function p(e){"required"!=e.properties.options.auth.state?(e.dom().select(".auth-signedin-true-element").hide(),e.dom().select(".auth-signedin-false-element").show()):window.location.href=e.query().create(e.properties.options.auth.sends.required).set("auth_redirect",encodeURIComponent(window.location.href)).getUrl()}c.prototype.get=function(e){return a.get(this,"properties."+e)},c.prototype.set=function(e,t){return a.set(this,"properties."+e,t)},c.prototype.setEventListeners=function(){if(0==a.get(this,"properties.page.status.eventHandlersSet",!1)){this.properties.page.status.eventHandlersSet=!0;var e=this;e.dom().select("body").on("click",(function(t){e.log("Clicked",t.target),t.target.matches(".auth-signin-email-btn")?e.auth().signIn("email"):t.target.matches(".auth-signup-email-btn")?e.auth().signUp("email"):t.target.matches(".auth-signout-all-btn")?e.auth().signOut():t.target.matches(".auth-forgot-email-btn")?e.auth().forgot():t.target.matches("#prechat-btn")&&y(e,e.properties.options),t.target.matches(".auth-subscribe-notifications-btn")&&e.notifications().subscribe().catch((function(e){console.error(e)}))}),!1)}},c.prototype.ready=function(e,t){(t=t||{}).retryInterval=t.retryInterval||100,t.waitFor=t.waitFor||[];for(var r=this,n=!0,i=0;i<t.waitFor.length;i++){var o=t.waitFor[i]||{},s=window[o.name];if("=="==o.condition&&s!=o.value){n=!1;break}if("!="==o.condition&&s==o.value){n=!1;break}if("defined"==o.condition&&void 0===s){n=!1;break}}if(0!=a.get(this,"properties.page.status.ready",!1)&&n)return r.performance().mark("manager_ready"),e();setTimeout((function(){r.ready(e,t)}),t.retryInterval)},c.prototype.serviceWorker=function(){var e="serviceWorker"in navigator;if(e)try{var t=this.properties.references.serviceWorker.active||navigator.serviceWorker.controller}catch(e){}return{postMessage:function(){var r=arguments;if(e)try{var n=new MessageChannel;n.port1.onmessage=function(e){!e.data.error&&r[1]&&r[1](e.data)},t.postMessage(r[0],[n.port2])}catch(e){console.error(e)}}}},c.prototype.init=function(e,t){var r=this;0==a.get(r,"properties.page.status.ready",!1)&&0==a.get(r,"properties.page.status.initializing",!1)&&(r.performance().mark("manager_init"),r.properties.page.status.initializing=!0,r.properties.meta.environment=/((:\/\/)(local|127\.|192\.|.+ngrok\.))/.test(window.location.href)?"development":"production",function(e,t,r){var n="Promise"in window&&Element.prototype.matches&&"includes"in Array.prototype&&"forEach"in Array.prototype&&"isArray"in Array&&"assign"in Object&&"keys"in Object&&"stringify"in JSON&&"parse"in JSON&&document.querySelectorAll&&document.querySelector&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&"HTMLPictureElement"in window&&"createEvent"in document&&"addEventListener"in window&&"localStorage"in window&&!0;n?r():e.dom().loadScript({src:"https://polyfill.io/v3/polyfill.min.js?flags=always%2Cgated&features=default"},(function(){e.log("Loaded polyfill.io"),r()}))}(r,0,(function(){r.properties.page.status.initializing=!1;var n=r.properties.global.url,i={queryString:{saveToStorage:!1},pushNotifications:{autoRequest:60},serviceWorker:{path:""},initChecks:{DOMContentLoaded:!1,features:[]},auth:{state:"default",sends:{required:n+"/signin/",prohibited:n+"/"}},popup:{enabled:!0,config:{title:"",message:"",btn_ok:{text:"",link:""}}},libraries:{firebase_app:{enabled:!0,config:{apiKey:"",authDomain:"",databaseURL:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""}},firebase_firestore:{enabled:!0},firebase_messaging:{enabled:!0},firebase_auth:{enabled:!0},lazysizes:{enabled:!0},sentry:{enabled:!0,config:{dsn:"",release:""}},tawk:{enabled:!0,config:{chatId:"",prechatColor:"#02A84E"}},cookieconsent:{enabled:!0,config:{palette:{popup:{background:"#237afc",text:"#ffffff"},button:{background:"#fff",text:"#237afc"}},theme:"classic",position:"bottom-left",type:"",showLink:!1,content:{message:'We use cookies to ensure you get the best experience on our website. By continuing to use the site, you agree to our<a href="'+n+'/terms/" class="cc-link" style="padding-right: 0">terms of service</a>.',dismiss:"Got it!"}}}}},o={};function s(){firebase.auth&&firebase.auth().onAuthStateChanged((function(e){r.properties.page.status.authReady=!0,r.properties.auth.user=e||!1,u(r,e)})),r.setEventListeners();try{if(!r.properties.page.isSupportedBrowser){var e=document.getElementsByClassName("master-alert-outdated")[0];e.style.display="block",document.body.insertBefore(e,document.body.firstChild)}}catch(e){}r.properties.page.status.ready=!0;try{t()}catch(e){console.error(e)}var n=o.libraries.tawk;n.enabled&&r.dom().select("#prechat-btn").css({background:n.config.prechatColor}).show(),m(r,o),b(r,o),function(e,t){if("serviceWorker"in navigator&&void 0!==firebase.messaging){var r=t.serviceWorker.path||"master-service-worker.js";navigator.serviceWorker.register("/"+r+"?config="+encodeURIComponent(JSON.stringify({name:e.properties.global.brand.name,env:e.properties.meta.environment,v:e.properties.global.version,firebase:t.libraries.firebase_app.config}))).then((function(r){firebase.messaging().useServiceWorker(r),e.properties.references.serviceWorker=r,e.properties.page.status.masterSWRegistered=!0,e.log("SW Registered."),firebase.messaging().onTokenRefresh(function(e){return e.log("handleTokenRefresh()"),new Promise((function(t,r){e.notifications().isSubscribed().then((function(r){return r?t(e.notifications().subscribe()):t()}))}))}(e).catch((function(e){console.error(e)}))),t.pushNotifications.autoRequest&&setTimeout((function(){e.notifications().subscribe().catch((function(e){console.error(e)}))}),1e3*t.pushNotifications.autoRequest);try{firebase.messaging().onMessage((function(e){new Notification(e.notification.title,e.notification)}))}catch(e){console.error("onMessage",e)}})).catch((function(e){console.error(e)}))}}(r,o),r.log("Manager ",r)}!function t(r,n){for(var s in n=n||"",r)if("object"!=typeof r[s]||null===r[s]||Array.isArray(r[s])){a.set(o,n+s,a.get(i,n+s));var c=a.get(e,"global.settings."+n+s,void 0),u=a.get(e,"page.settings."+n+s,void 0);void 0!==c&&a.set(o,n+s,c),void 0!==u&&a.set(o,n+s,u)}else t(r[s],n+s+".")}(i),r.properties.options=o,r.properties.global.version=e.global.version,r.properties.global.url=e.global.url,r.properties.global.cacheBreaker=e.global.cacheBreaker,r.properties.global.brand.name=e.global.brand.name,r.properties.meta.environment=a.get(e,"global.settings.debug.environment",r.properties.meta.environment),r.log("Config: ",o),1==o.initChecks.DOMContentLoaded?r.dom().checkDOMContentLoaded(window,(function(){r.properties.page.status.DOMContentLoaded=!0,r.log("DOMContentLoaded = ",r.properties.page.status.DOMContentLoaded)})):(r.properties.page.status.DOMContentLoaded=!0,r.log("DOMContentLoaded = ",r.properties.page.status.DOMContentLoaded)),r.properties.page.queryString=r.query().create(window.location.href,{}),r.properties.page.queryString.get("aff")&&r.storage().set("auth.affiliateCode",r.properties.page.queryString.get("aff")),r.properties.page.queryString.get("redirect")?window.location.href=decodeURIComponent(r.properties.page.queryString.get("redirect")):Promise.all([v(r,o),d(r,o)]).then((function(){s()})).catch((function(e){console.error("manager",e)}))})))},c.prototype.sentry=function(){return{configureScope:function(e){try{Sentry.configureScope((function(t){e(t)}))}catch(e){}},captureException:function(e){try{Sentry.captureException(e)}catch(e){}}}},c.prototype.auth=function(){var e=this,t="undefined"!=typeof firebase,r=".auth-error-message-element",n=e.dom();function i(e){n.select(r).show().setInnerHTML(e)}function o(){n.select(r).hide().setInnerHTML("")}function s(e){e?n.select(".auth-signin-email-btn").setAttribute("disabled",!0):n.select(".auth-signin-email-btn").removeAttribute("disabled")}function c(e){e?n.select(".auth-signup-email-btn").setAttribute("disabled",!0):n.select(".auth-signup-email-btn").removeAttribute("disabled")}function u(e){e?n.select(".auth-forgot-email-btn").setAttribute("disabled",!0):n.select(".auth-forgot-email-btn").removeAttribute("disabled")}return{isAuthenticated:function(){return!!t&&!!firebase.auth().currentUser},getUser:function(){var e={email:null,uid:null};return t&&firebase.auth().currentUser||e},ready:function(t,r){if((r=r||{}).retryInterval=r.retryInterval||100,0!=a.get(e,"properties.page.status.authReady",!1))return e.performance().mark("manager_authReady"),t();setTimeout((function(){e.auth().ready(t,r)}),r.retryInterval)},signIn:function(t,r,a){t=t||"email",r=r||n.select(".auth-email-input").getValue(),a=a||n.select(".auth-password-input").getValue(),o(),e.log("Signin attempt: ",t,r,a),"email"==t&&(s(!0),firebase.auth().signInWithEmailAndPassword(r,a).then((function(t){s(!1),e.log("Good signin")})).catch((function(t){s(!1),i(t.message),e.log("Error",t.message)})))},signUp:function(t,r,a,s){t=t||"email",r=r||n.select(".auth-email-input").getValue(),a=a||n.select(".auth-password-input").getValue(),s=s||n.select(".auth-password-confirm-input").getValue(),o(),e.log("Signup attempt: ",t,r,a,s);var u=n.select(".auth-terms-input");u.exists()&&1==!u.getValue()?i("Please review and accept our terms."):"email"==t&&(a==s?(c(!0),firebase.auth().createUserWithEmailAndPassword(r,a).then((function(t){e.properties.page.status.didSignUp=!0,e.log("Good signup"),c(!1)})).catch((function(t){c(!1),i(t.message),e.log("error",t.message)}))):i("Passwords don't match."))},signOut:function(){firebase.auth().signOut().then((function(){e.log("signOut success.")})).catch((function(t){e.log("signOut failed: ",t)}))},forgot:function(t){t=t||n.select(".auth-email-input").getValue(),u(!0),o(),firebase.auth().sendPasswordResetEmail(t).then((function(){u(!1),e.log("forgot success."),i("A reset link has been sent to you.")})).catch((function(t){u(!1),e.log("forgot failed: ",t),i(t.message)}))}}},c.prototype.notifications=function(e){var t=void 0!==firebase.messaging&&"serviceWorker"in navigator&&"Notification"in window,r=this;return{isSubscribed:function(){return r.log("isSubscribed()"),new Promise((function(e,r){return t&&"granted"==Notification.permission?e(!0):e(!1)}))},subscribe:function(){return r.log("subscribe()"),new Promise((function(e,t){firebase.messaging().getToken().then((function(t){var n=r.auth().getUser(),i=r.storage().get("notifications",{}),o=i.token+"|"+i.email,a=t+"|"+n.email,s=new Date,c=(s.getTime()-new Date(i.lastSynced||0).getTime())/864e5;if(o!=a||c>1){var u=s.toISOString(),l=Math.floor(+new Date(u)/1e3),p=firebase.firestore().doc("notifications/subscriptions/all/"+t);function d(){r.storage().set("notifications",{email:n.email,token:t,lastSynced:u})}function f(i){!i.exists||i.exists&&!r.utilities().get(i.data(),"link.user.data.email","")&&n.email?p.set({meta:{dateSubscribed:{timestamp:u,timestampUNIX:l}},token:t,link:{user:{lastLinked:{timestamp:u,timestampUNIX:l},pk:n.uid,data:{uid:n.uid,email:n.email}}},tags:["general"]},{merge:!0}).then((function(t){d(),e(!0)})):(d(),e(!1))}p.get().then((function(e){f(e)})).catch((function(){f({exists:!1})}))}else e(!1)})).catch((function(e){t(e)}))}))}}};var d=function(e,t){return new Promise((function(n,i){return void 0!==window.firebase?n():1!=t.libraries.firebase_app.enabled?n():void Promise.all([r.e(0),r.e(2)]).then(function(){window.firebase=r(9),window.app=firebase.initializeApp(t.libraries.firebase_app.config),e.log("Loaded Firebase.")}.bind(null,r)).catch(r.oe).then((function(){Promise.all([f(e,t),g(e,t),h(e,t)]).then((function(){return n()})).catch((function(t){return console.log("HERE 3 broke",t),e.properties.page.libErrors.push({name:"firebase_app",error:t}),i(t)}))}))}))},f=function(e,t){return new Promise((function(n,i){return void 0!==a.get(window,"firebase.auth",void 0)?n():1!=t.libraries.firebase_auth.enabled?n():void Promise.all([r.e(0),r.e(6)]).then(function(){r(10),e.log("Loaded Firebase Auth.")}.bind(null,r)).catch(r.oe).then((function(){return n()})).catch((function(t){return e.properties.page.libErrors.push({name:"firebase_auth",error:t}),i(t)}))}))},g=function(e,t){return new Promise((function(n,i){return void 0!==a.get(window,"firebase.firestore",void 0)?n():1!=t.libraries.firebase_firestore.enabled?n():void Promise.all([r.e(0),r.e(7)]).then(function(){r(11),e.log("Loaded Firestore.")}.bind(null,r)).catch(r.oe).then((function(){return n()})).catch((function(t){return e.properties.page.libErrors.push({name:"firebase_firestore",error:t}),i(t)}))}))},h=function(e,t){return new Promise((function(n,i){return void 0!==a.get(window,"firebase.messaging",void 0)?n():1!=t.libraries.firebase_messaging.enabled?n():void Promise.all([r.e(0),r.e(8)]).then(function(){r(15),e.log("Loaded Firebase Messaging.")}.bind(null,r)).catch(r.oe).then((function(){return n()})).catch((function(t){return e.properties.page.libErrors.push({name:"firebase_messaging",error:t}),i(t)}))}))},m=function(e,t){return new Promise((function(n,i){return void 0!==window.lazysizes?n():1!=t.libraries.lazysizes.enabled?n():void r.e(3).then(function(){window.lazysizes=r(12);var t=Math.max(Math.min(document.documentElement.clientWidth,document.documentElement.clientHeight,1222)-1,359);window.lazySizesConfig={loadMode:1,expand:t,expFactor:t<380?3:2},e.log("Loaded Lazysizes.")}.bind(null,r)).catch(r.oe).then((function(){return n()})).catch((function(t){return e.properties.page.libErrors.push({name:"lazysizes",error:t}),i(t)}))}))},b=function(e,t){return new Promise((function(n,i){return void 0!==window.cookieconsent?n():1!=t.libraries.cookieconsent.enabled?n():void r.e(1).then(function(){r(13),window.cookieconsent.initialise(t.libraries.cookieconsent.config),e.log("Loaded Cookieconsent.")}.bind(null,r)).catch(r.oe).then((function(){return n()})).catch((function(t){return e.properties.page.libErrors.push({name:"cookieconsent",error:t}),i(t)}))}))},y=function(e,t){var r=e.dom();return new Promise((function(n,i){return void 0!==window.Tawk_API?n():1!=t.libraries.tawk.enabled?n():(window.Tawk_API=window.Tawk_API||{},window.Tawk_LoadStart=new Date,window.Tawk_API.onLoad=function(){r.select("#prechat-btn").hide(),Tawk_API.maximize()},void r.loadScript({src:"https://embed.tawk.to/"+a.get(t,"libraries.tawk.config.chatId","")+"/default",crossorigin:!0},(function(t){return t?(e.properties.page.libErrors.push({name:"tawk",error:t}),i(t)):(e.log("Loaded tawk."),n())})))}))},v=function(e,t){return new Promise((function(n){return void 0!==window.Sentry?n():1!=t.libraries.sentry.enabled?n():void r.e(5).then(function(){window.Sentry=r(14);var n=t.libraries.sentry.config;n.release=n.release+"@"+e.properties.global.version,n.environment=e.properties.meta.environment,Sentry.init(n),e.log("Loaded Sentry.")}.bind(null,r)).catch(r.oe).then((function(){return n()})).catch((function(t){return e.properties.page.libErrors.push({name:"sentry",error:t}),reject(t)}))}))};c.prototype.log=function(){try{if("development"==this.properties.meta.environment){var e=Array.prototype.slice.call(arguments);e.unshift("[DEV LOG]"),"error"==e[1]?(e.splice(1,1),console.error.apply(console,e)):"warn"==e[1]?(e.splice(1,1),console.warn.apply(console,e)):"log"==e[1]?(e.splice(1,1),console.log.apply(console,e)):console.log.apply(console,e)}}catch(t){console.log(e)}},c.prototype.utilities=function(){return a},c.prototype.storage=function(){return s},c.prototype.query=function(){return o},c.prototype.dom=function(){return i},c.prototype.ajax=function(){return n},c.prototype.performance=function(){return{mark:function(e){try{window.performance.mark(e)}catch(e){}}}},e.exports=c},function(e,t){function r(e){this.request=e}r.request=function(e){if((e=e||{}).method=(e.method||"POST").toUpperCase(),e.contentType=e.contentType||"application/json; charset=utf-8",e.accept=e.accept||"application/json, text/javascript, */*; q=0.01",e.data=e.data||{},e.url){var t={success:function(){},error:function(){},always:function(){}},r=new(window.XMLHttpRequest||XMLHttpRequest||ActiveXObject)("MSXML2.XMLHTTP.3.0");if(r.open(e.method,e.url,!0),r.setRequestHeader("Content-type",e.contentType),r.setRequestHeader("Accept",e.accept),r.onreadystatechange=function(){var e;4===r.readyState&&(e=function(e){var t;try{t=JSON.parse(e.responseText)}catch(r){t=e.responseText}return[t,e]}(r),r.status>=200&&r.status<300?t.success.call(t,r,r.status,e[0]):t.error.call(t,r,r.status,r.statusText),t.always.call(t,r,r.status))},e.contentType.indexOf("json")>-1)try{e.data=JSON.stringify(e.data)}catch(e){console.error(e)}r.send(e.data);var n={success:function(e){return t.success=e,n},error:function(e){return t.error=e,n},always:function(e){return t.always=e,n}};return n}},e.exports=r},function(e,t){function r(e){this.elements=e}function n(e){return e&&e.tagName}r.prototype.addClass=function(e){for(var t=Object.assign({},this.elements),i=0;i<t.count;i++){var o=t.list[i];n(o)&&o.classList.add(e)}return new r(t)},r.prototype.removeClass=function(e){for(var t=Object.assign({},this.elements),i=0;i<t.count;i++){var o=t.list[i];n(o)&&o.classList.remove(e)}return new r(t)},r.prototype.css=function(e){for(var t=Object.assign({},this.elements),i=Object.keys(e),o=0;o<t.count;o++){var a=t.list[o];if(n(a))for(o=0;o<i.length;o++)a.style[i[o]]=e[i[o]]}return new r(t)},r.prototype.hide=function(e){var t=Object.assign({},this.elements);(e=e||{}).type=e.type||"display";for(var i=0;i<t.count;i++){var o=t.list[i];n(o)&&("visibility"==e.type?o.style.visibility="hidden":"display"==e.type?(o.style.display="none",o.setAttribute("hidden",!0),o.classList.add("hidden")):(o.style.visibility="hidden",o.style.display="none",o.setAttribute("hidden",!0),o.classList.add("hidden")))}return new r(t)},r.prototype.show=function(e){var t=Object.assign({},this.elements);(e=e||{}).type=e.type||"display";for(var i=0;i<t.count;i++){var o=t.list[i];n(o)&&("visibility"==e.type?o.style.visibility="visible":"display"==e.type?(o.style.display="block",o.removeAttribute("hidden"),o.classList.remove("hidden")):(o.style.visibility="visible",o.style.display="block",o.removeAttribute("hidden"),o.classList.remove("hidden")))}return new r(t)},r.prototype.getAttribute=function(e,t){var r,i=Object.assign({},this.elements);t=t||{};for(var o=0;o<i.count;o++){var a=i.list[o];n(a)&&(r=a.getAttribute(e))}return r},r.prototype.setAttribute=function(e,t,i){var o=Object.assign({},this.elements);i=i||{};for(var a=0;a<o.count;a++){var s=o.list[a];n(s)&&s.setAttribute(e,t)}return new r(o)},r.prototype.removeAttribute=function(e,t){var i=Object.assign({},this.elements);t=t||{};for(var o=0;o<i.count;o++){var a=i.list[o];n(a)&&(a.setAttribute(e,"DELETE"),a.removeAttribute(e))}return new r(i)},r.prototype.getValue=function(e){var t;(e=e||{}).returnType=e.returnType||"array";for(var r=Object.assign({},this.elements),i=0;i<r.count;i++){var o=r.list[i];if(n(o))if("checkbox"==o.type){if(1==r.list.length){t=o.checked;break}"array"==e.returnType?(t=t||[],o.checked&&t.push(o.value)):"object"==e.returnType?(t=t||{})[o.value]=o.checked:t=o.checked}else{if("radio"!=o.type){t=o.value;break}if(o.checked){t=o.value;break}}}return t},r.prototype.setValue=function(e,t){(t=t||{}).returnType=t.returnType||"single";for(var i=Object.assign({},this.elements),o=0;o<i.count;o++){var a=i.list[o];n(a)&&("checkbox"==a.type?a.checked=!!e:"radio"==a.type?a.checked=!!e:a.value=e)}return new r(i)},r.prototype.setInnerHTML=function(e,t){t=t||{};for(var i=Object.assign({},this.elements),o=0;o<i.count;o++){var a=i.list[o];n(a)&&(a.innerHTML=e)}return new r(i)},r.prototype.each=function(e,t){t=t||{};for(var i=Object.assign({},this.elements),o=0;o<i.count;o++){var a=i.list[o];if(n(a)&&!1===e(o,a))break}return new r(i)},r.prototype.on=function(e,t){for(var i=Object.assign({},this.elements),o=0;o<i.count;o++){var a=i.list[o];n(a)&&(document.addEventListener?a.addEventListener(e,t,!1):document.attachEvent&&a.attachEvent("on"+e,t))}return new r(i)},r.prototype.get=function(e){return e||0<=this.elements.count?this.elements.list[e||0]:null},r.prototype.exists=function(){return this.elements.exists},r.loadScript=function(e,t){(e=e||{}).async=void 0!==e.async&&e.async,e.crossorigin=void 0!==e.crossorigin&&e.crossorigin;var r=document.createElement("script");r.src=e.src,r.async=e.async,e.crossorigin&&r.setAttribute("crossorigin","*"),r.onload=function(){t()},r.onerror=function(){t(new Error("Failed to load script "+src))},document.head.appendChild(r)},r.checkDOMContentLoaded=function(e,t){var r=!1,n=!0,i=e.document,o=i.documentElement,a=i.addEventListener,s=a?"addEventListener":"attachEvent",c=a?"removeEventListener":"detachEvent",u=a?"":"on",l=function(n){"readystatechange"==n.type&&"complete"!=i.readyState||(("load"==n.type?e:i)[c](u+n.type,l,!1),!r&&(r=!0)&&t.call(e,n.type||n))},p=function(){try{o.doScroll("left")}catch(e){return void setTimeout(p,50)}l("poll")};if("complete"==i.readyState)t.call(e,"lazy");else{if(!a&&o.doScroll){try{n=!e.frameElement}catch(e){}n&&p()}i[s](u+"DOMContentLoaded",l,!1),i[s](u+"readystatechange",l,!1),e[s](u+"load",l,!1)}},r.select=function(e,t){var n;t=t||{};var i=typeof e;"string"==i?n=document.querySelectorAll(e):"object"==i&&(n=e.tagName?[e]:e);var o=[];return function(e,t,r){for(var n=0;n<e.length;n++)t.call(r,n,e[n])}(n,(function(e,t){o.push(t)})),new r({list:o,count:o.length,exists:o.length>0})},e.exports=r},function(e,t){function r(e){this.query=e,function(e){e.query.constructed.url=e.query.original.urlPlain;var t=0;for(var r in e.query.constructed.parameters){var n=e.query.constructed.url,i=e.query.constructed.parameters[r];e.query.constructed.url=n+(0==t?"?":"&")+r+"="+i,t++}}(this)}r.prototype.set=function(e,t){var n=Object.assign({},this.query);return n.constructed.parameters[e]=t,n.constructed.exists=Object.keys(n.constructed.parameters).length>0,new r(n)},r.prototype.remove=function(e){var t=Object.assign({},this.query);return delete t.constructed.parameters[e],t.constructed.exists=Object.keys(t.constructed.parameters).length>0,new r(t)},r.prototype.removeAll=function(e){var t=Object.assign({},this.query);return t.constructed.parameters={},t.constructed.exists=!1,new r(t)},r.prototype.get=function(e,t){return this.query.constructed.parameters[e]||t},r.prototype.getAll=function(){return this.query.constructed.parameters},r.prototype.getUrl=function(){return this.query.constructed.url},r.prototype.exists=function(){return this.query.constructed.exists},r.create=function(e,t){(t=t||{}).decode=void 0===t.decode||t.decode,e=e.replace(/amp;/g,"");var n=(e=!0===t.decode?decodeURIComponent(e):e).split("?")[0]||e,i=function(e){var t,r,n,i,o={};for(t=(t=e.split("?")[1])?t.split("&"):[],n=0,i=t.length;n<i;n++)r=t[n].split("="),o[r[0]]=r[1];return o}(e);return new r({original:{url:e,urlPlain:n,options:t||{}},constructed:{parameters:i,url:"",exists:Object.keys(i).length>0}})},e.exports=r},function(e,t,r){var n=r(0);function i(e){this.storage=e}i.get=function(e,t,r){var i;e=e||"";try{i=n.get(JSON.parse(window.localStorage.getItem("_manager"))||{},e,t)}catch(e){i=t}return i},i.set=function(e,t,r){var o;try{o=i.get("",{}),n.set(o,e,t),window.localStorage.setItem("_manager",JSON.stringify(o))}catch(e){}return o},i.clear=function(e){try{window.localStorage.setItem("_manager","{}")}catch(e){}},e.exports=i},function(e,t){Manager.ready((function(){Manager.log("app.js fired Manager.ready()")}))}]);
//# sourceMappingURL=main.js.map