"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[227],{227:(F,u,a)=>{a.r(u),a.d(u,{HomePageModule:()=>S});var s=a(6895),n=a(1571);let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.ez]}),t})();var i=a(8058),l=a(2340),f=a(529);let g=(()=>{class t{constructor(e){this.http=e,this.apiUrl=l.N.fortniteApiUrl,this.loadingBoolean=!0,this.storeUpdate=!1,this.apiKey=l.N.fortniteApiKey}getDailyStore(e){return this.http.get(this.apiUrl+e,{headers:{Authorization:""+this.apiKey}})}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(f.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[g],imports:[s.ez,i.Pc,m]}),t})();var h=a(433),C=a(8468);let P=(()=>{class t{constructor(e){this.fortniteApi=e,this.hours=0,this.minutes=0,this.seconds=0,this.deviceLanguage="en"}ngOnInit(){setInterval(()=>{const e=new Date,o=e.getUTCHours(),c=e.getUTCMinutes(),p=e.getUTCSeconds();this.hours=24-o-1,this.minutes=60-c,this.seconds=60-p,0===this.hours&&0===this.minutes&&0===this.seconds&&(this.fortniteApi.loadingBoolean=!0,this.fortniteApi.storeUpdate=!0,setTimeout(()=>{this.fortniteApi.getDailyStore(this.deviceLanguage).subscribe(I=>{this.fortniteApi.storeData=I.shop,this.fortniteApi.loadingBoolean=!1,this.fortniteApi.storeUpdate=!1})},15e3))},1e3)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(g))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-countdown-timer"]],inputs:{deviceLanguage:"deviceLanguage"},decls:2,vars:3,template:function(e,o){1&e&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&e&&(n.xp6(1),n.lnq("",o.hours,":",o.minutes,":",o.seconds,""))},styles:["div[_ngcontent-%COMP%]{margin:5px}"]}),t})(),d=(()=>{class t{constructor(e){this.http=e,this.sourceLanguage="pt-BR"}transform(e,o){if(o===this.sourceLanguage)return Promise.resolve(e);const c=l.N.googleApiUrl+l.N.googleApiKey+`&q=${encodeURIComponent(e)}&source=${this.sourceLanguage}&target=${o}`;return this.http.get(c).toPromise().then(p=>(console.log(p),p.data.translations[0].translatedText))}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f.eN,16))},t.\u0275pipe=n.Yjl({name:"googleTranslate",type:t,pure:!0}),t})();function M(t,r){if(1&t&&(n.TgZ(0,"p"),n._uU(1),n.ALo(2,"async"),n.ALo(3,"googleTranslate"),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.hij(" ",n.lcZ(2,1,n.xi3(3,3,"A loja est\xe1 sendo atualizada, isso pode demorar um pouco...",e.deviceLanguage))," ")}}let O=(()=>{class t{constructor(e){this.fortniteApi=e,this.deviceLanguage="en"}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(g))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-center-spinner"]],inputs:{deviceLanguage:"deviceLanguage"},decls:4,vars:1,consts:[[1,"center-spinner"],[1,"column"],[4,"ngIf"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"ion-spinner"),n.YNc(3,M,4,6,"p",2),n.qZA()()),2&e&&(n.xp6(3),n.Q6J("ngIf",o.fortniteApi.storeUpdate))},dependencies:[s.O5,i.PQ,s.Ov,d],styles:[".center-spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.center-spinner[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{--color: var(--ion-color-primary)}.column[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}"]}),t})();var y=a(655);let x=(()=>{class t{constructor(e){this.modalController=e,this.deviceLanguage=navigator.language}get rarityColor(){switch(this.rarity){case"Common":default:return"radial-gradient(ellipse at top, #BDBDBD 40%, #000000)";case"Uncommon":return"radial-gradient(ellipse at top, #5A7F5A 40%, #000000)";case"Rare":return"radial-gradient(ellipse at top, #2C5E8C 40%, #000000)";case"Epic":return"radial-gradient(ellipse at top, #6E1CC6 40%, #000000)";case"Legendary":return"radial-gradient(ellipse at top, #D69C00 40%, #000000)"}}dismiss(){this.modalController.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(i.IN))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-fullscreen-card"]],inputs:{imageUrl:"imageUrl",name:"name",description:"description",price:"price",rarity:"rarity"},decls:21,vars:14,consts:[["slot","end"],[1,"rounded-border",3,"click"],[1,"fullscreen-card"],[3,"src","alt"],[1,"card-content"],[1,"price"],["src","assets/images/vbucks-icon.png"]],template:function(e,o){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),n._uU(3),n.qZA(),n.TgZ(4,"ion-buttons",0)(5,"ion-button",1),n.NdJ("click",function(){return o.dismiss()}),n._uU(6),n.ALo(7,"async"),n.ALo(8,"googleTranslate"),n.qZA()()()(),n.TgZ(9,"ion-content")(10,"div",2),n._UZ(11,"img",3),n.TgZ(12,"div",4)(13,"h2"),n._uU(14),n.qZA(),n.TgZ(15,"p"),n._uU(16),n.qZA(),n.TgZ(17,"p",5)(18,"span"),n._uU(19),n.qZA(),n._UZ(20,"img",6),n.qZA()()()()),2&e&&(n.xp6(3),n.Oqu(o.name),n.xp6(3),n.Oqu(n.lcZ(7,9,n.xi3(8,11,"Fechar",o.deviceLanguage))),n.xp6(4),n.Udp("background",o.rarityColor),n.xp6(1),n.Q6J("src",o.imageUrl,n.LSH)("alt",o.name),n.xp6(3),n.Oqu(o.name),n.xp6(2),n.Oqu(o.description),n.xp6(3),n.hij(" ",o.price,""))},dependencies:[i.YG,i.Sm,i.W2,i.Gu,i.wd,i.sr,s.Ov,d],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.rounded-border[_ngcontent-%COMP%]{--border-radius: 10px!important}.fullscreen-card[_ngcontent-%COMP%]{cursor:pointer;flex-direction:column;border:2px solid #ccc;border-radius:20px;overflow:hidden;margin:1rem;display:flex;align-items:center;text-align:center;min-width:200px}.fullscreen-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:10px;width:90%;height:90%;max-height:350px;max-width:350px;object-fit:cover}.fullscreen-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{width:100%;padding:.5rem;padding-right:0;padding-left:0;background-color:#1f1f1f;color:#f3f3f3}.fullscreen-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:700}.fullscreen-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:.5rem;font-size:.9rem}.fullscreen-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:.5rem;font-weight:700;margin-right:0}.fullscreen-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;height:25px;margin:5px}.fullscreen-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{margin-top:auto;font-size:1.25rem;font-weight:700}.fullscreen-card[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: #3a3a3a;color:#fff}.fullscreen-card[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: #3a3a3a}.fullscreen-card[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   .fullscreen-card[_ngcontent-%COMP%]{border:none;border-radius:0}.fullscreen-card[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   .fullscreen-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:0;max-height:none;max-width:none;object-fit:contain;width:80%;height:80%}.fullscreen-card[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   .fullscreen-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{padding:2rem 2rem 4rem}.fullscreen-card[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   .fullscreen-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem}.fullscreen-card[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   .fullscreen-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.25rem;margin:1rem}.fullscreen-card[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   .fullscreen-card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:1.75rem;margin-top:2rem}"]}),t})(),A=(()=>{class t{constructor(e){this.modalController=e}get rarityColor(){switch(this.rarity){case"Common":default:return"radial-gradient(ellipse at top, #BDBDBD 40%, #000000)";case"Uncommon":return"radial-gradient(ellipse at top, #5A7F5A 40%, #000000)";case"Rare":return"radial-gradient(ellipse at top, #2C5E8C 40%, #000000)";case"Epic":return"radial-gradient(ellipse at top, #6E1CC6 40%, #000000)";case"Legendary":return"radial-gradient(ellipse at top, #D69C00 40%, #000000)"}}expandCard(){return(0,y.mG)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:x,componentProps:{imageUrl:this.imageUrl,name:this.name,description:this.description,price:this.price,rarity:this.rarity}})).present()})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(i.IN))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-fortnite-card"]],inputs:{imageUrl:"imageUrl",name:"name",description:"description",price:"price",rarity:"rarity"},decls:12,vars:7,consts:[[1,"card",3,"click"],[3,"src","alt"],[1,"card-content"],[1,"description"],[1,"price"],["src","assets/images/vbucks-icon.png"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n.NdJ("click",function(){return o.expandCard()}),n._UZ(1,"img",1),n.TgZ(2,"div",2)(3,"p")(4,"b"),n._uU(5),n.qZA()(),n.TgZ(6,"p",3),n._uU(7),n.qZA(),n.TgZ(8,"p",4)(9,"span"),n._uU(10),n.qZA(),n._UZ(11,"img",5),n.qZA()()()),2&e&&(n.Udp("background",o.rarityColor),n.xp6(1),n.Q6J("src",o.imageUrl,n.LSH)("alt",o.name),n.xp6(4),n.Oqu(o.name),n.xp6(2),n.Oqu(o.description),n.xp6(3),n.hij(" ",o.price,""))},styles:[".card[_ngcontent-%COMP%]{cursor:pointer;flex-direction:column;border:2px solid #ccc;border-radius:20px;overflow:hidden;margin:1rem;display:flex;align-items:center;text-align:center;min-width:200px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:10px;width:90%;height:90%;max-height:350px;max-width:350px;object-fit:cover}.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{width:100%;padding:1rem;padding-right:0;padding-left:0;background-color:#1f1f1f;color:#f3f3f3}.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%]{margin:.5rem;font-size:small}.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:.5rem}.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:.5rem;font-weight:700;margin-right:0}.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25px;height:25px;margin:5px}.card[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{margin-top:auto;font-size:1.25rem;font-weight:700}"]}),t})();function v(t,r){if(1&t){const e=n.EpF();n.TgZ(0,"ion-title",7),n.NdJ("click",function(){n.CHM(e);const c=n.oxw();return n.KtG(c.scrollTop())}),n._uU(1),n.ALo(2,"async"),n.ALo(3,"googleTranslate"),n.qZA()}if(2&t){const e=n.oxw();n.xp6(1),n.hij(" ",n.lcZ(2,1,n.xi3(3,3,"Loja Di\xe1ria",e.deviceLanguage)),"")}}function T(t,r){if(1&t&&(n.TgZ(0,"ion-button",8)(1,"p"),n._uU(2),n.ALo(3,"async"),n.ALo(4,"googleTranslate"),n.ALo(5,"uppercase"),n.qZA(),n._UZ(6,"app-countdown-timer",9),n.qZA()),2&t){const e=n.oxw();n.xp6(2),n.hij(" ",n.lcZ(3,2,n.xi3(4,4,n.lcZ(5,7,"Pr\xf3xima Atualiza\xe7\xe3o"),e.deviceLanguage))," "),n.xp6(4),n.Q6J("deviceLanguage",e.deviceLanguage)}}function Z(t,r){if(1&t&&(n.ynx(0),n._UZ(1,"app-center-spinner",9),n.BQk()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("deviceLanguage",e.deviceLanguage)}}function w(t,r){if(1&t&&(n.TgZ(0,"ion-col",11),n._UZ(1,"app-fortnite-card",12),n.qZA()),2&t){const e=r.$implicit;n.xp6(1),n.Q6J("rarity",null==e||null==e.rarity?null:e.rarity.id)("description",null==e?null:e.displayDescription)("imageUrl",null==e||null==e.displayAssets[0]?null:e.displayAssets[0].url)("name",null==e?null:e.displayName)("price",null==e||null==e.price?null:e.price.finalPrice)}}function U(t,r){if(1&t&&(n.TgZ(0,"ion-grid")(1,"ion-row"),n.YNc(2,w,2,5,"ion-col",10),n.qZA()()),2&t){const e=n.oxw();n.xp6(2),n.Q6J("ngForOf",e.fortniteApi.storeData)}}const b=[{path:"",component:(()=>{class t{constructor(e){this.fortniteApi=e,this.mobileScreen=!1,this.mobileScreen=window.innerWidth<768,this.deviceLanguage=navigator.language,this.fortniteApi.getDailyStore(this.deviceLanguage).subscribe(o=>{console.log(o),this.fortniteApi.storeData=o.shop,this.fortniteApi.loadingBoolean=!1})}scrollTop(){this.content.scrollToTop(400)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(g))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],viewQuery:function(e,o){if(1&e&&n.Gf(i.W2,5),2&e){let c;n.iGM(c=n.CRH())&&(o.content=c.first)}},decls:9,vars:6,consts:[[3,"translucent"],["class","pointer-cursor",3,"click",4,"ngIf"],["slot","end"],["class","rounded-border",4,"ngIf"],["id","store-content","padding","",3,"fullscreen"],[4,"ngIf","ngIfElse"],["showData",""],[1,"pointer-cursor",3,"click"],[1,"rounded-border"],[3,"deviceLanguage"],["col-6","","col-md-4","","col-lg-3","",4,"ngFor","ngForOf"],["col-6","","col-md-4","","col-lg-3",""],[3,"rarity","description","imageUrl","name","price"]],template:function(e,o){if(1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar"),n.YNc(2,v,4,6,"ion-title",1),n.TgZ(3,"ion-buttons",2),n.YNc(4,T,7,9,"ion-button",3),n.qZA()()(),n.TgZ(5,"ion-content",4),n.YNc(6,Z,2,1,"ng-container",5),n.YNc(7,U,3,1,"ng-template",null,6,n.W1O),n.qZA()),2&e){const c=n.MAs(8);n.Q6J("translucent",!0),n.xp6(2),n.Q6J("ngIf",!o.mobileScreen),n.xp6(2),n.Q6J("ngIf",!o.fortniteApi.loadingBoolean),n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(1),n.Q6J("ngIf",o.fortniteApi.loadingBoolean)("ngIfElse",c)}},dependencies:[s.sg,s.O5,i.YG,i.Sm,i.wI,i.W2,i.jY,i.Gu,i.Nd,i.wd,i.sr,P,O,A,s.Ov,s.gd,d],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.rounded-border[_ngcontent-%COMP%]{--border-radius: 10px!important}.pointer-cursor[_ngcontent-%COMP%]{cursor:pointer}"]}),t})()}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[C.Bz.forChild(b),C.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.ez,h.u5,i.Pc,L,_,m]}),t})()}}]);