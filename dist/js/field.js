(()=>{"use strict";var e,t={321:(e,t,o)=>{const n=Vue;var i={class:"inline-flex items-center gap-2 cursor-pointer"},r=["innerHTML"],l=["innerHTML"];const d={components:{Icon:LaravelNovaUi.Icon},props:["resourceName","field"],data:function(){return{width:this.field.maxWidth||300,theme:this.field.theme||"plain",preventOverflow:this.field.preventOverflow||!0,autoHide:this.field.autoHide||!0,triggers:this.field.triggers||["hover"],placement:this.field.placement||"top-start",distance:this.field.distance||0,skidding:this.field.skidding||3,boundary:this.field.boundary||"window",title:this.field.tooltip||null,tooltipIcon:this.field.tooltipIcon||null,tooltipIconType:this.field.tooltipIconType||"solid"}},computed:{fieldValue:function(){return this.field.displayedAs||this.field.value}}};var a=o(262);const s=(0,a.A)(d,[["render",function(e,t,o,d,a,s){var c=(0,n.resolveComponent)("Icon"),p=(0,n.resolveComponent)("TooltipContent"),u=(0,n.resolveComponent)("Tooltip");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(u,{onTooltipShow:e.fetchOnce,triggers:a.triggers,distance:a.distance,skidding:a.skidding,popperTriggers:a.triggers,placement:a.placement,theme:a.theme,preventOverflow:a.preventOverflow,"auto-hide":a.autoHide,boundary:a.boundary},{content:(0,n.withCtx)((function(){return[(0,n.createVNode)(p,{"max-width":a.width},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",{innerHTML:s.fieldValue},null,8,l)]})),_:1},8,["max-width"])]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",i,[a.tooltipIcon?((0,n.openBlock)(),(0,n.createBlock)(c,{key:0,type:a.tooltipIconType,name:a.tooltipIcon,class:"inline-block"},null,8,["type","name"])):(0,n.createCommentVNode)("",!0),a.title?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:1,innerHTML:a.title},null,8,r)):(0,n.createCommentVNode)("",!0)])]})),_:1},8,["onTooltipShow","triggers","distance","skidding","popperTriggers","placement","theme","preventOverflow","auto-hide","boundary"])])}]]);const c={props:["index","resource","resourceName","resourceId","field"]},p=(0,a.A)(c,[["render",function(e,t,o,i,r,l){var d=(0,n.resolveComponent)("PanelItem");return(0,n.openBlock)(),(0,n.createBlock)(d,{index:o.index,field:o.field},null,8,["index","field"])}]]);var u=["id","placeholder"];const f=LaravelNova,h={mixins:[f.FormField,f.HandlesValidationErrors],props:["resourceName","resourceId","field"],methods:{setInitialValue:function(){this.value=this.field.value||""},fill:function(e){e.append(this.fieldAttribute,this.value||"")}}},v=(0,a.A)(h,[["render",function(e,t,o,i,r,l){var d=(0,n.resolveComponent)("DefaultField");return(0,n.openBlock)(),(0,n.createBlock)(d,{field:o.field,errors:e.errors,"show-help-text":e.showHelpText,"full-width-content":e.fullWidthContent},{field:(0,n.withCtx)((function(){return[(0,n.withDirectives)((0,n.createElementVNode)("input",{id:o.field.attribute,type:"text",class:(0,n.normalizeClass)(["w-full form-control form-input form-control-bordered",e.errorClasses]),placeholder:o.field.name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.value=t})},null,10,u),[[n.vModelText,e.value]])]})),_:1},8,["field","errors","show-help-text","full-width-content"])}]]);Nova.booting((function(e,t){e.component("index-nova-tooltip-field",s),e.component("detail-nova-tooltip-field",p),e.component("form-nova-tooltip-field",v)}))},613:()=>{},262:(e,t)=>{t.A=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,i,r)=>{if(!o){var l=1/0;for(c=0;c<e.length;c++){for(var[o,i,r]=e[c],d=!0,a=0;a<o.length;a++)(!1&r||l>=r)&&Object.keys(n.O).every((e=>n.O[e](o[a])))?o.splice(a--,1):(d=!1,r<l&&(l=r));if(d){e.splice(c--,1);var s=i();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={222:0,101:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,r,[l,d,a]=o,s=0;if(l.some((t=>0!==e[t]))){for(i in d)n.o(d,i)&&(n.m[i]=d[i]);if(a)var c=a(n)}for(t&&t(o);s<l.length;s++)r=l[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self.webpackChunkmarshmallow_nova_tooltip_field=self.webpackChunkmarshmallow_nova_tooltip_field||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.O(void 0,[101],(()=>n(321)));var i=n.O(void 0,[101],(()=>n(613)));i=n.O(i)})();