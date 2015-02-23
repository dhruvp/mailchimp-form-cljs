// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26547_26555 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26548_26556 = null;
var count__26549_26557 = (0);
var i__26550_26558 = (0);
while(true){
if((i__26550_26558 < count__26549_26557)){
var k_26559 = cljs.core._nth.call(null,chunk__26548_26556,i__26550_26558);
e.setAttribute(cljs.core.name.call(null,k_26559),cljs.core.get.call(null,attrs,k_26559));

var G__26560 = seq__26547_26555;
var G__26561 = chunk__26548_26556;
var G__26562 = count__26549_26557;
var G__26563 = (i__26550_26558 + (1));
seq__26547_26555 = G__26560;
chunk__26548_26556 = G__26561;
count__26549_26557 = G__26562;
i__26550_26558 = G__26563;
continue;
} else {
var temp__4126__auto___26564 = cljs.core.seq.call(null,seq__26547_26555);
if(temp__4126__auto___26564){
var seq__26547_26565__$1 = temp__4126__auto___26564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26547_26565__$1)){
var c__12956__auto___26566 = cljs.core.chunk_first.call(null,seq__26547_26565__$1);
var G__26567 = cljs.core.chunk_rest.call(null,seq__26547_26565__$1);
var G__26568 = c__12956__auto___26566;
var G__26569 = cljs.core.count.call(null,c__12956__auto___26566);
var G__26570 = (0);
seq__26547_26555 = G__26567;
chunk__26548_26556 = G__26568;
count__26549_26557 = G__26569;
i__26550_26558 = G__26570;
continue;
} else {
var k_26571 = cljs.core.first.call(null,seq__26547_26565__$1);
e.setAttribute(cljs.core.name.call(null,k_26571),cljs.core.get.call(null,attrs,k_26571));

var G__26572 = cljs.core.next.call(null,seq__26547_26565__$1);
var G__26573 = null;
var G__26574 = (0);
var G__26575 = (0);
seq__26547_26555 = G__26572;
chunk__26548_26556 = G__26573;
count__26549_26557 = G__26574;
i__26550_26558 = G__26575;
continue;
}
} else {
}
}
break;
}

var seq__26551_26576 = cljs.core.seq.call(null,children);
var chunk__26552_26577 = null;
var count__26553_26578 = (0);
var i__26554_26579 = (0);
while(true){
if((i__26554_26579 < count__26553_26578)){
var ch_26580 = cljs.core._nth.call(null,chunk__26552_26577,i__26554_26579);
e.appendChild(ch_26580);

var G__26581 = seq__26551_26576;
var G__26582 = chunk__26552_26577;
var G__26583 = count__26553_26578;
var G__26584 = (i__26554_26579 + (1));
seq__26551_26576 = G__26581;
chunk__26552_26577 = G__26582;
count__26553_26578 = G__26583;
i__26554_26579 = G__26584;
continue;
} else {
var temp__4126__auto___26585 = cljs.core.seq.call(null,seq__26551_26576);
if(temp__4126__auto___26585){
var seq__26551_26586__$1 = temp__4126__auto___26585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26551_26586__$1)){
var c__12956__auto___26587 = cljs.core.chunk_first.call(null,seq__26551_26586__$1);
var G__26588 = cljs.core.chunk_rest.call(null,seq__26551_26586__$1);
var G__26589 = c__12956__auto___26587;
var G__26590 = cljs.core.count.call(null,c__12956__auto___26587);
var G__26591 = (0);
seq__26551_26576 = G__26588;
chunk__26552_26577 = G__26589;
count__26553_26578 = G__26590;
i__26554_26579 = G__26591;
continue;
} else {
var ch_26592 = cljs.core.first.call(null,seq__26551_26586__$1);
e.appendChild(ch_26592);

var G__26593 = cljs.core.next.call(null,seq__26551_26586__$1);
var G__26594 = null;
var G__26595 = (0);
var G__26596 = (0);
seq__26551_26576 = G__26593;
chunk__26552_26577 = G__26594;
count__26553_26578 = G__26595;
i__26554_26579 = G__26596;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__26597__i = 0, G__26597__a = new Array(arguments.length -  2);
while (G__26597__i < G__26597__a.length) {G__26597__a[G__26597__i] = arguments[G__26597__i + 2]; ++G__26597__i;}
  children = new cljs.core.IndexedSeq(G__26597__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__26598){
var t = cljs.core.first(arglist__26598);
arglist__26598 = cljs.core.next(arglist__26598);
var attrs = cljs.core.first(arglist__26598);
var children = cljs.core.rest(arglist__26598);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__13066__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13067__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13070__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__13066__auto__,prefer_table__13067__auto__,method_cache__13068__auto__,cached_hierarchy__13069__auto__,hierarchy__13070__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__13066__auto__,prefer_table__13067__auto__,method_cache__13068__auto__,cached_hierarchy__13069__auto__,hierarchy__13070__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13070__auto__,method_table__13066__auto__,prefer_table__13067__auto__,method_cache__13068__auto__,cached_hierarchy__13069__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26599 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26599.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26599.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26599.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26599);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__26600,st_map){
var map__26604 = p__26600;
var map__26604__$1 = ((cljs.core.seq_QMARK_.call(null,map__26604))?cljs.core.apply.call(null,cljs.core.hash_map,map__26604):map__26604);
var container_el = cljs.core.get.call(null,map__26604__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26604,map__26604__$1,container_el){
return (function (p__26605){
var vec__26606 = p__26605;
var k = cljs.core.nth.call(null,vec__26606,(0),null);
var v = cljs.core.nth.call(null,vec__26606,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26604,map__26604__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__26607,dom_str){
var map__26609 = p__26607;
var map__26609__$1 = ((cljs.core.seq_QMARK_.call(null,map__26609))?cljs.core.apply.call(null,cljs.core.hash_map,map__26609):map__26609);
var c = map__26609__$1;
var content_area_el = cljs.core.get.call(null,map__26609__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__26610){
var map__26612 = p__26610;
var map__26612__$1 = ((cljs.core.seq_QMARK_.call(null,map__26612))?cljs.core.apply.call(null,cljs.core.hash_map,map__26612):map__26612);
var content_area_el = cljs.core.get.call(null,map__26612__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__){
return (function (state_26654){
var state_val_26655 = (state_26654[(1)]);
if((state_val_26655 === (2))){
var inst_26639 = (state_26654[(7)]);
var inst_26648 = (state_26654[(2)]);
var inst_26649 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26650 = ["auto"];
var inst_26651 = cljs.core.PersistentHashMap.fromArrays(inst_26649,inst_26650);
var inst_26652 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26639,inst_26651);
var state_26654__$1 = (function (){var statearr_26656 = state_26654;
(statearr_26656[(8)] = inst_26648);

return statearr_26656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26654__$1,inst_26652);
} else {
if((state_val_26655 === (1))){
var inst_26639 = (state_26654[(7)]);
var inst_26639__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26640 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26641 = ["10px","10px","100%","68px","1.0"];
var inst_26642 = cljs.core.PersistentHashMap.fromArrays(inst_26640,inst_26641);
var inst_26643 = cljs.core.merge.call(null,inst_26642,style);
var inst_26644 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26639__$1,inst_26643);
var inst_26645 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26639__$1,msg);
var inst_26646 = cljs.core.async.timeout.call(null,(300));
var state_26654__$1 = (function (){var statearr_26657 = state_26654;
(statearr_26657[(9)] = inst_26644);

(statearr_26657[(7)] = inst_26639__$1);

(statearr_26657[(10)] = inst_26645);

return statearr_26657;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26654__$1,(2),inst_26646);
} else {
return null;
}
}
});})(c__15033__auto__))
;
return ((function (switch__14977__auto__,c__15033__auto__){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_26661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26661[(0)] = state_machine__14978__auto__);

(statearr_26661[(1)] = (1));

return statearr_26661;
});
var state_machine__14978__auto____1 = (function (state_26654){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_26654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e26662){if((e26662 instanceof Object)){
var ex__14981__auto__ = e26662;
var statearr_26663_26665 = state_26654;
(statearr_26663_26665[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26666 = state_26654;
state_26654 = G__26666;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_26654){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_26654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__))
})();
var state__15035__auto__ = (function (){var statearr_26664 = f__15034__auto__.call(null);
(statearr_26664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_26664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__))
);

return c__15033__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__26668 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__26668,(0),null);
var ln = cljs.core.nth.call(null,vec__26668,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__26671 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__26671,(0),null);
var file_line = cljs.core.nth.call(null,vec__26671,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26671,file_name,file_line){
return (function (p1__26669_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26669_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26671,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__26673 = figwheel.client.heads_up.ensure_container.call(null);
var map__26673__$1 = ((cljs.core.seq_QMARK_.call(null,map__26673))?cljs.core.apply.call(null,cljs.core.hash_map,map__26673):map__26673);
var content_area_el = cljs.core.get.call(null,map__26673__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__){
return (function (state_26720){
var state_val_26721 = (state_26720[(1)]);
if((state_val_26721 === (3))){
var inst_26703 = (state_26720[(7)]);
var inst_26717 = (state_26720[(2)]);
var inst_26718 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26703,"");
var state_26720__$1 = (function (){var statearr_26722 = state_26720;
(statearr_26722[(8)] = inst_26717);

return statearr_26722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26720__$1,inst_26718);
} else {
if((state_val_26721 === (2))){
var inst_26703 = (state_26720[(7)]);
var inst_26710 = (state_26720[(2)]);
var inst_26711 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26712 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26713 = cljs.core.PersistentHashMap.fromArrays(inst_26711,inst_26712);
var inst_26714 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26703,inst_26713);
var inst_26715 = cljs.core.async.timeout.call(null,(200));
var state_26720__$1 = (function (){var statearr_26723 = state_26720;
(statearr_26723[(9)] = inst_26714);

(statearr_26723[(10)] = inst_26710);

return statearr_26723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26720__$1,(3),inst_26715);
} else {
if((state_val_26721 === (1))){
var inst_26703 = (state_26720[(7)]);
var inst_26703__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26704 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26705 = ["0.0"];
var inst_26706 = cljs.core.PersistentHashMap.fromArrays(inst_26704,inst_26705);
var inst_26707 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26703__$1,inst_26706);
var inst_26708 = cljs.core.async.timeout.call(null,(300));
var state_26720__$1 = (function (){var statearr_26724 = state_26720;
(statearr_26724[(11)] = inst_26707);

(statearr_26724[(7)] = inst_26703__$1);

return statearr_26724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26720__$1,(2),inst_26708);
} else {
return null;
}
}
}
});})(c__15033__auto__))
;
return ((function (switch__14977__auto__,c__15033__auto__){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_26728 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26728[(0)] = state_machine__14978__auto__);

(statearr_26728[(1)] = (1));

return statearr_26728;
});
var state_machine__14978__auto____1 = (function (state_26720){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_26720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e26729){if((e26729 instanceof Object)){
var ex__14981__auto__ = e26729;
var statearr_26730_26732 = state_26720;
(statearr_26730_26732[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26733 = state_26720;
state_26720 = G__26733;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_26720){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_26720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__))
})();
var state__15035__auto__ = (function (){var statearr_26731 = f__15034__auto__.call(null);
(statearr_26731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_26731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__))
);

return c__15033__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__){
return (function (state_26765){
var state_val_26766 = (state_26765[(1)]);
if((state_val_26766 === (4))){
var inst_26763 = (state_26765[(2)]);
var state_26765__$1 = state_26765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26765__$1,inst_26763);
} else {
if((state_val_26766 === (3))){
var inst_26760 = (state_26765[(2)]);
var inst_26761 = figwheel.client.heads_up.clear.call(null);
var state_26765__$1 = (function (){var statearr_26767 = state_26765;
(statearr_26767[(7)] = inst_26760);

return statearr_26767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26765__$1,(4),inst_26761);
} else {
if((state_val_26766 === (2))){
var inst_26757 = (state_26765[(2)]);
var inst_26758 = cljs.core.async.timeout.call(null,(400));
var state_26765__$1 = (function (){var statearr_26768 = state_26765;
(statearr_26768[(8)] = inst_26757);

return statearr_26768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26765__$1,(3),inst_26758);
} else {
if((state_val_26766 === (1))){
var inst_26755 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26765__$1 = state_26765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26765__$1,(2),inst_26755);
} else {
return null;
}
}
}
}
});})(c__15033__auto__))
;
return ((function (switch__14977__auto__,c__15033__auto__){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_26772 = [null,null,null,null,null,null,null,null,null];
(statearr_26772[(0)] = state_machine__14978__auto__);

(statearr_26772[(1)] = (1));

return statearr_26772;
});
var state_machine__14978__auto____1 = (function (state_26765){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_26765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e26773){if((e26773 instanceof Object)){
var ex__14981__auto__ = e26773;
var statearr_26774_26776 = state_26765;
(statearr_26774_26776[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26777 = state_26765;
state_26765 = G__26777;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_26765){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_26765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__))
})();
var state__15035__auto__ = (function (){var statearr_26775 = f__15034__auto__.call(null);
(statearr_26775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_26775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__))
);

return c__15033__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map