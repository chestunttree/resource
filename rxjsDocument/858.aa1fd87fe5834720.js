"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[858],{4858:(D,p,a)=>{a.r(p),a.d(p,{ApiListModule:()=>Q});var c=a(8976),h=a(4652),d=a(4466),f=a(6046),S=a(2299),m=a(1189),t=a(1737),A=a(2263),y=a(5062),v=a(9798),C=a(95),T=a(4541);let g=(()=>{class i{constructor(e,s){this.http=e,this.logger=s,this.apiBase=C.Yp+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new A.x,this.sectionsSubject=new f.t(1),this._sections=this.sectionsSubject.pipe((0,y.R)(this.onDestroy))}get sections(){return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(()=>this.logger.log("ApiService got API sections"))),this._sections.pipe((0,v.b)(e=>{e.forEach(s=>{s.deprecated=!!s.items&&s.items.every(n=>"deprecated"===n.stability)})}))}ngOnDestroy(){this.onDestroy.next(null)}fetchSections(e){const s=this.apiBase+(e||this.apiListJsonDefault);this.http.get(s).pipe((0,y.R)(this.onDestroy),(0,v.b)(()=>this.logger.log(`Got API sections from ${s}`))).subscribe(n=>this.sectionsSubject.next(n),n=>{throw this.logger.error(n),n})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(h.eN),t.LFG(T.Y))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac}),i})();var L=a(5370),b=a(587);const x=["filter"];function Z(i,o){if(1&i&&(t.TgZ(0,"h2",10),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit;t.Q6J("id",e.title),t.xp6(1),t.Oqu(e.title)}}function M(i,o){if(1&i&&(t.ynx(0),t.TgZ(1,"li",12)(2,"a",13),t._UZ(3,"span"),t.TgZ(4,"span"),t._uU(5),t.qZA()()(),t.BQk()),2&i){const e=o.$implicit;t.xp6(2),t.Q6J("href",e.path,t.LSH),t.xp6(1),t.Gre("symbol ",e.docType,""),t.xp6(1),t.Gre("stability ",e.stability,""),t.xp6(1),t.AsE("",e.title," ",e.stability&&"stable"!==e.stability?"("+e.stability+")":"","")}}function j(i,o){if(1&i&&(t.TgZ(0,"ul",11),t.YNc(1,M,6,9,"ng-container",7),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.items)}}function F(i,o){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,Z,2,2,"h2",8),t.YNc(2,j,2,1,"ul",9),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",e.items),t.xp6(1),t.Q6J("ngIf",null==e.items?null:e.items.length)}}class O{constructor(){this.query="",this.status="all",this.type="all"}}let J=(()=>{class i{constructor(e,s){this.apiService=e,this.locationService=s,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new f.t(1),this.searchCriteria=new O,this.types=[{value:"all",title:"All"},{value:"class",title:"Class"},{value:"const",title:"Const"},{value:"enum",title:"Enum"},{value:"function",title:"Function"},{value:"interface",title:"Interface"},{value:"type-alias",title:"Type alias"}],this.statuses=[{value:"all",title:"All"},{value:"deprecated",title:"Deprecated"},{value:"security-risk",title:"Security Risk"}]}ngOnInit(){this.filteredSections=(0,S.a)(this.apiService.sections,this.criteriaSubject).pipe((0,m.U)(e=>({sections:e[0],criteria:e[1]})),(0,m.U)(e=>e.sections.map(s=>Object.assign(Object.assign({},s),{items:this.filterSection(s,e.criteria)})))),this.initializeSearchCriteria()}setQuery(e){this.setSearchCriteria({query:(e||"").toLowerCase().trim()})}setStatus(e){this.toggleStatusMenu(),this.status=e,this.setSearchCriteria({status:e.value})}setType(e){this.toggleTypeMenu(),this.type=e,this.setSearchCriteria({type:e.value})}toggleStatusMenu(){this.showStatusMenu=!this.showStatusMenu}toggleTypeMenu(){this.showTypeMenu=!this.showTypeMenu}filterSection(e,{query:s,status:n,type:r}){const l=e.items.filter(u=>function Y(){return"all"===r||r===u.docType}()&&function I(){return"all"===n||n===u.stability||"security-risk"===n&&u.securityRisk}()&&function w(){return!s||-1!==e.name.indexOf(s)||-1!==u.name.indexOf(s)}());return l.length?l:"package"!==r||s&&-1===e.name.indexOf(s)?null:[]}initializeSearchCriteria(){const{query:e,status:s,type:n}=this.locationService.search(),r=(e||"").toLowerCase();this.queryEl.nativeElement.value=r,this.status=this.statuses.find(l=>l.value===s)||this.statuses[0],this.type=this.types.find(l=>l.value===n)||this.types[0],this.searchCriteria={query:r,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)}setLocationSearch(){const{query:e,status:s,type:n}=this.searchCriteria;this.locationService.setSearch("API Search",{query:e||void 0,status:"all"!==s?s:void 0,type:"all"!==n?n:void 0})}setSearchCriteria(e){this.criteriaSubject.next(Object.assign(this.searchCriteria,e)),this.setLocationSearch()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g),t.Y36(L.a))},i.\u0275cmp=t.Xpm({type:i,selectors:[["aio-api-list"]],viewQuery:function(e,s){if(1&e&&t.Gf(x,7),2&e){let n;t.iGM(n=t.CRH())&&(s.queryEl=n.first)}},decls:10,vars:6,consts:[[1,"l-flex-wrap","api-filter"],["label","Type:",3,"options","selected","showSymbol","change"],[1,"form-search"],["placeholder","Filter","aria-label","Filter",3,"input"],["filter",""],[1,"material-icons"],[1,"api-list-container","l-content-small","docs-content"],[4,"ngFor","ngForOf"],[3,"id",4,"ngIf"],["class","api-list",4,"ngIf"],[3,"id"],[1,"api-list"],[1,"api-item"],[3,"href"]],template:function(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",0)(1,"aio-select",1),t.NdJ("change",function(l){return s.setType(l.option)}),t.qZA(),t.TgZ(2,"div",2)(3,"input",3,4),t.NdJ("input",function(){t.CHM(n);const l=t.MAs(4);return s.setQuery(l.value)}),t.qZA(),t.TgZ(5,"i",5),t._uU(6,"search"),t.qZA()()(),t.TgZ(7,"article",6),t.YNc(8,F,3,2,"div",7),t.ALo(9,"async"),t.qZA()}2&e&&(t.xp6(1),t.Q6J("options",s.types)("selected",s.type)("showSymbol",!0),t.xp6(7),t.Q6J("ngForOf",t.lcZ(9,4,s.filteredSections)))},directives:[b.H,c.sg,c.O5],pipes:[c.Ov],encapsulation:2}),i})(),Q=(()=>{class i{constructor(){this.customElementComponent=J}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[g],imports:[[c.ez,d.m,h.JF]]}),i})()}}]);
//# sourceMappingURL=858.aa1fd87fe5834720.js.map