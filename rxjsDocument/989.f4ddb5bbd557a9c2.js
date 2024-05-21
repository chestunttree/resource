"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[989],{1989:(k,m,r)=>{r.r(m),r.d(m,{OperatorDecisionTreeModule:()=>J});var p=r(8976),g=r(8099),d=r(8871),f=r(659),T=r(9026),t=r(1737),y=r(4652);let x=(()=>{class e{constructor(n){this.http=n}getDecisionTree$(){return this.http.get("/generated/docs/app/decision-tree-data.json")}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(y.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var c=r(9421),D=r(9593),b=r(603),v=r(2299),C=r(8959),$=r(6046),S=r(7740),l=r(5996),h=r(1189),Z=r(5942);function _(e){return!e.error}let O=(()=>{class e{constructor(n){this.dataService=n,this.initialState={previousBranchIds:["initial"],currentBranchId:"initial"},this.state$=new D.X(this.initialState),this.tree$=this.dataService.getDecisionTree$().pipe((0,C.K)(o=>(0,b.of)(o)),function I(e,i,n){let o,a=!1;return e&&"object"==typeof e?({bufferSize:o=1/0,windowTime:i=1/0,refCount:a=!1,scheduler:n}=e):o=null!=e?e:1/0,(0,S.B)({connector:()=>new $.t(o,i,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:a})}()),this.currentSentence$=(0,v.a)(this.tree$,this.state$).pipe((0,l.h)(([o])=>_(o)),(0,h.U)(([o,{previousBranchIds:a}])=>function B(e){return e.includes("initial")&&1===e.length}(a)?"Start by choosing an option from the list below.":`${a.map(s=>o[s].label).join(" ")}...`.trim())),this.options$=(0,v.a)(this.tree$,this.state$).pipe((0,l.h)(([o,a])=>_(o)&&!!o[a.currentBranchId]&&!!o[a.currentBranchId].options),(0,h.U)(([o,a])=>{const s=o[a.currentBranchId];return function M(e){return!!e.options}(s)?s.options.map(u=>o[u]):o.initial.options.map(u=>o[u])})),this.isBeyondInitialQuestion$=this.state$.pipe((0,h.U)(({currentBranchId:o})=>"initial"!==o)),this.hasError$=this.tree$.pipe((0,l.h)(o=>!!o.error),(0,Z.h)(!0))}get snapShot(){return this.state$.getValue()}selectOption(n){this.state$.next({previousBranchIds:[...this.snapShot.previousBranchIds,n],currentBranchId:n})}back(){const n=this.snapShot.previousBranchIds[this.snapShot.previousBranchIds.length-2];n&&this.state$.next({previousBranchIds:[...this.snapShot.previousBranchIds.slice(0,this.snapShot.previousBranchIds.length-1)],currentBranchId:n})}startOver(){this.state$.next(this.initialState)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(x))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();function A(e,i){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"section")(2,"button",6),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).back()}),t._uU(3,"Back"),t.qZA(),t.TgZ(4,"button",7),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).startOver()}),t._uU(5,"Start Over"),t.qZA()(),t.BQk()}}function U(e,i){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",9),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit;return t.oxw(2).selectOption(a.id)}),t.TgZ(2,"mat-card",10),t._uU(3),t.qZA()(),t.BQk()}if(2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("@flyIn",void 0),t.xp6(2),t.hij(" ",n.label," ")}}function Q(e,i){if(1&e&&(t.TgZ(0,"p",12),t._uU(1),t.TgZ(2,"a",13),t._uU(3),t.qZA(),t._uU(4,". "),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.AsE(" You want the ",n.method," of the ",n.docType," "),t.xp6(1),t.hYB("href","",n.path,"#",n.method,"",t.LSH),t.xp6(1),t.Oqu(n.label)}}function Y(e,i){if(1&e&&(t.TgZ(0,"p",12),t._uU(1),t.TgZ(2,"a",13),t._uU(3),t.qZA(),t._uU(4,". "),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.hij(" You want the ",n.docType," "),t.xp6(1),t.s9C("href",n.path,t.LSH),t.xp6(1),t.Oqu(n.label)}}function E(e,i){if(1&e&&(t.YNc(0,Q,5,5,"p",11),t.YNc(1,Y,5,3,"p",11)),2&e){const n=t.oxw().$implicit;t.Q6J("ngIf",n.method),t.xp6(1),t.Q6J("ngIf",!n.method)}}function P(e,i){if(1&e&&(t.ynx(0),t.YNc(1,U,4,2,"ng-container",1),t.YNc(2,E,2,2,"ng-template",null,8,t.W1O),t.BQk()),2&e){const n=i.$implicit,o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",n.options)("ngIfElse",o)}}function F(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"h2",3),t._uU(2),t.ALo(3,"async"),t.qZA(),t.YNc(4,A,6,0,"ng-container",4),t.ALo(5,"async"),t.TgZ(6,"div"),t.YNc(7,P,4,2,"ng-container",5),t.ALo(8,"async"),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(2),t.hij(" ",t.lcZ(3,3,n.currentSentence$)," "),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,5,n.isBeyondInitialQuestion$)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(8,7,n.options$))}}function N(e,i){1&e&&(t.TgZ(0,"div",14)(1,"p"),t._uU(2,"Oops! There was an issue loading the decision tree.. we're real sorry about that. Please try reloading the page."),t.qZA(),t.TgZ(3,"p"),t._uU(4," You can also try "),t.TgZ(5,"a",15),t._uU(6,"submitting an issue on GitHub"),t.qZA(),t._uU(7,". "),t.qZA()())}let j=(()=>{class e{constructor(n,o){this.operatorDecisionTreeService=n,this.scrollService=o,this.currentSentence$=this.operatorDecisionTreeService.currentSentence$,this.options$=this.operatorDecisionTreeService.options$,this.isBeyondInitialQuestion$=this.operatorDecisionTreeService.isBeyondInitialQuestion$,this.hasError$=this.operatorDecisionTreeService.hasError$}selectOption(n){this.operatorDecisionTreeService.selectOption(n),this.scrollService.scrollToTop()}back(){this.operatorDecisionTreeService.back()}startOver(){this.operatorDecisionTreeService.startOver()}ngOnDestroy(){this.startOver()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(O),t.Y36(T.a))},e.\u0275cmp=t.Xpm({type:e,selectors:[["aio-operator-decision-tree"]],decls:6,vars:4,consts:[["tabindex","0",1,"mat-heading"],[4,"ngIf","ngIfElse"],["hasErrorTemplate",""],["tabindex","0",1,"mat-subheading-2"],[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-button","",1,"back",3,"click"],["mat-button","","color","warn",1,"start-over",3,"click"],["operatorTemplate",""],[1,"option","mat-body-1",3,"click"],["matRipple",""],["class","mat-body-1",4,"ngIf"],[1,"mat-body-1"],[3,"href"],[1,"mat-body-1","error"],["href","https://github.com/ReactiveX/rxjs/issues/new?template=documentation.md","target","_blank"]],template:function(n,o){if(1&n&&(t.TgZ(0,"h1",0),t._uU(1,"Operator Decision Tree"),t.qZA(),t.YNc(2,F,9,9,"ng-container",1),t.ALo(3,"async"),t.YNc(4,N,8,0,"ng-template",null,2,t.W1O)),2&n){const a=t.MAs(5);t.xp6(2),t.Q6J("ngIf",!1===t.lcZ(3,2,o.hasError$))("ngIfElse",a)}},directives:[p.O5,g.lW,p.sg,d.a8,f.wG],pipes:[p.Ov],styles:["h2[_ngcontent-%COMP%]{max-width:700px}button.option[_ngcontent-%COMP%]{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);border-radius:34px;border:0;cursor:pointer;display:block;margin-bottom:12px;padding:0;text-align:left}button.option[_ngcontent-%COMP%]:active, button.option[_ngcontent-%COMP%]:hover, button.option[_ngcontent-%COMP%]:focus{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}button.option[_ngcontent-%COMP%]:active   mat-card[_ngcontent-%COMP%], button.option[_ngcontent-%COMP%]:hover   mat-card[_ngcontent-%COMP%], button.option[_ngcontent-%COMP%]:focus   mat-card[_ngcontent-%COMP%]{background-color:#d81b60;color:#fff}mat-card[_ngcontent-%COMP%]{border-radius:34px;padding:12px 24px;transition:all .25s}section[_ngcontent-%COMP%]{margin-bottom:16px}"],data:{animation:[(0,c.X$)("flyIn",[(0,c.SB)("in",(0,c.oB)({transform:"translateX(0)"})),(0,c.eR)(":enter",[(0,c.oB)({transform:"translateX(-100%)"}),(0,c.jt)(250)])])]}}),e})(),J=(()=>{class e{constructor(){this.customElementComponent=j}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[x,O,T.a],imports:[[p.ez,g.ot,d.QW,f.si]]}),e})()}}]);
//# sourceMappingURL=989.f4ddb5bbd557a9c2.js.map