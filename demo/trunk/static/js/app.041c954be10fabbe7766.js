webpackJsonp([1],{0:function(e,t){},"0UbK":function(e,t){},1:function(e,t){},"4+hh":function(e,t){},"C+uG":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),d=a("Lgyv"),o=a.n(d),n=a("hoy5"),i=a.n(n),r=function(e){return e.toString().toLowerCase()},l={name:"TagsTable",props:["tagsData"],data:function(){return{search:null,searched:[]}},methods:{searchOnTable:function(){var e,t;this.searched=(e=this.tagsData,(t=this.search)?e.filter(function(e){return r(e.name).includes(r(t))||r(e.value).includes(r(t))}):e)}},created:function(){this.searched=this.tagsData}},c=a("XyMi"),u=Object(c.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("md-table",{attrs:{"md-sort":"name","md-sort-order":"asc","md-card":"","md-fixed-header":""},scopedSlots:e._u([{key:"md-table-row",fn:function(t){var s=t.item;return a("md-table-row",{},[a("md-table-cell",{attrs:{"md-label":"Name","md-sort-by":"name","md-numeric":""}},[e._v(e._s(s.name))]),e._v(" "),a("md-table-cell",{attrs:{"md-label":"Value","md-sort-by":"value"}},[e._v(e._s(s.value))])],1)}}]),model:{value:e.searched,callback:function(t){e.searched=t},expression:"searched"}},[a("md-table-toolbar",[a("div",{staticClass:"md-toolbar-section-start"},[a("h1",{staticClass:"md-title"},[e._v("DICOM Tags")])]),e._v(" "),a("md-field",{staticClass:"md-toolbar-section-end",attrs:{"md-clearable":""}},[a("md-input",{attrs:{placeholder:"Search..."},on:{input:e.searchOnTable},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),a("md-table-empty-state",{attrs:{"md-label":"No tags found","md-description":"No tags found for this '"+e.search+"' query."}})],1)],1)},[],!1,null,null,null).exports;s.default.use(o.a),i.a.utils.decodeQuery=i.a.utils.base.decodeQuery,i.a.gui.displayProgress=function(){},i.a.gui.getWindowSize=i.a.gui.base.getWindowSize,i.a.gui.getElement=i.a.gui.base.getElement,i.a.gui.refreshElement=i.a.gui.base.refreshElement,i.a.image.decoderScripts={jpeg2000:"static/dwv/decoders/pdfjs/decode-jpeg2000.js","jpeg-lossless":"static/dwv/decoders/rii-mango/decode-jpegloss.js","jpeg-baseline":"static/dwv/decoders/pdfjs/decode-jpegbaseline.js"};var m={name:"dwv",components:{tagsTable:u},data:function(){return{versions:{dwv:i.a.getVersion(),vue:s.default.version},dwvApp:null,tools:["Scroll","ZoomAndPan","WindowLevel","Draw"],selectedTool:"Select Tool",loadProgress:0,dataLoaded:!1,tags:null,showDicomTags:!1}},mounted:function(){this.dwvApp=new i.a.App,this.dwvApp.init({containerDivId:"dwv",fitToWindow:!0,tools:this.tools,shapes:["Ruler"],isMobile:!0});var e=this;this.dwvApp.addEventListener("load-progress",function(t){e.loadProgress=t.loaded}),this.dwvApp.addEventListener("load-end",function(t){e.dataLoaded=!0,e.tags=e.dwvApp.getTags(),e.dwvApp.isMonoSliceData()&&1===e.dwvApp.getImage().getNumberOfFrames()?e.selectedTool="ZoomAndPan":e.selectedTool="Scroll"})},methods:{onChangeTool:function(e){this.selectedTool=e,this.dwvApp.onChangeTool({currentTarget:{value:e}})},onReset:function(){this.dwvApp.onDisplayReset()}}};var v=function(e){a("C+uG")},p={name:"App",components:{dwvVue:Object(c.a)(m,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dwv"}},[a("md-progress-bar",{attrs:{"md-mode":"determinate","md-value":e.loadProgress}}),e._v(" "),a("div",{staticClass:"button-row"},[a("md-menu",{attrs:{"md-size":"medium","md-align-trigger":""}},[a("md-button",{staticClass:"md-raised md-primary",attrs:{"md-menu-trigger":"",disabled:!e.dataLoaded}},[e._v("\n        "+e._s(e.selectedTool)+" "),a("md-icon",[e._v("arrow_drop_down")])],1),e._v(" "),a("md-menu-content",e._l(e.tools,function(t){return a("md-menu-item",{key:t,on:{click:function(a){e.onChangeTool(t)}}},[e._v(e._s(t))])})),e._v(" "),a("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:!e.dataLoaded},on:{click:function(t){e.onReset()}}},[e._v("Reset")]),e._v(" "),a("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:!e.dataLoaded},on:{click:function(t){e.showDicomTags=!0}}},[e._v("Tags")])],1),e._v(" "),a("md-dialog",{attrs:{"md-active":e.showDicomTags},on:{"update:mdActive":function(t){e.showDicomTags=t}}},[a("tagsTable",{attrs:{tagsData:e.tags}})],1)],1),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"legend"},[a("p",[e._v("Powered by "),a("a",{attrs:{href:"https://github.com/ivmartel/dwv",title:"dwv on github"}},[e._v("dwv")]),e._v("\n    "+e._s(e.versions.dwv)+" and Vue.js "+e._s(e.versions.vue))])])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"layerContainer"},[t("div",{staticClass:"dropBox"},[t("p",[this._v("Drag and drop data here.")])]),this._v(" "),t("canvas",{staticClass:"imageLayer"},[this._v("Only for HTML5 compatible browsers...")]),this._v(" "),t("div",{staticClass:"drawDiv"})])}],!1,v,"data-v-375d91f0",null).exports}};var g=function(e){a("0UbK")},h=Object(c.a)(p,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("dwvVue")],1)},[],!1,g,null,null).exports;a("4+hh"),a("giDI");s.default.config.productionTip=!1,new s.default({el:"#app",components:{App:h},template:"<App/>"})},giDI:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.041c954be10fabbe7766.js.map