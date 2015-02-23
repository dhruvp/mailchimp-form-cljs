// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25891__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25892__i = 0, G__25892__a = new Array(arguments.length -  0);
while (G__25892__i < G__25892__a.length) {G__25892__a[G__25892__i] = arguments[G__25892__i + 0]; ++G__25892__i;}
  args = new cljs.core.IndexedSeq(G__25892__a,0);
} 
return G__25891__delegate.call(this,args);};
G__25891.cljs$lang$maxFixedArity = 0;
G__25891.cljs$lang$applyTo = (function (arglist__25893){
var args = cljs.core.seq(arglist__25893);
return G__25891__delegate(args);
});
G__25891.cljs$core$IFn$_invoke$arity$variadic = G__25891__delegate;
return G__25891;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__25894){
var map__25896 = p__25894;
var map__25896__$1 = ((cljs.core.seq_QMARK_.call(null,map__25896))?cljs.core.apply.call(null,cljs.core.hash_map,map__25896):map__25896);
var class$ = cljs.core.get.call(null,map__25896__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__25896__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12169__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12157__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12157__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12157__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__15033__auto___26025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___26025,ch){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___26025,ch){
return (function (state_25999){
var state_val_26000 = (state_25999[(1)]);
if((state_val_26000 === (7))){
var inst_25995 = (state_25999[(2)]);
var state_25999__$1 = state_25999;
var statearr_26001_26026 = state_25999__$1;
(statearr_26001_26026[(2)] = inst_25995);

(statearr_26001_26026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (1))){
var state_25999__$1 = state_25999;
var statearr_26002_26027 = state_25999__$1;
(statearr_26002_26027[(2)] = null);

(statearr_26002_26027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (4))){
var inst_25963 = (state_25999[(7)]);
var inst_25963__$1 = (state_25999[(2)]);
var state_25999__$1 = (function (){var statearr_26003 = state_25999;
(statearr_26003[(7)] = inst_25963__$1);

return statearr_26003;
})();
if(cljs.core.truth_(inst_25963__$1)){
var statearr_26004_26028 = state_25999__$1;
(statearr_26004_26028[(1)] = (5));

} else {
var statearr_26005_26029 = state_25999__$1;
(statearr_26005_26029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (13))){
var state_25999__$1 = state_25999;
var statearr_26006_26030 = state_25999__$1;
(statearr_26006_26030[(2)] = null);

(statearr_26006_26030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (6))){
var state_25999__$1 = state_25999;
var statearr_26007_26031 = state_25999__$1;
(statearr_26007_26031[(2)] = null);

(statearr_26007_26031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (3))){
var inst_25997 = (state_25999[(2)]);
var state_25999__$1 = state_25999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25999__$1,inst_25997);
} else {
if((state_val_26000 === (12))){
var inst_25970 = (state_25999[(8)]);
var inst_25983 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25970);
var inst_25984 = cljs.core.first.call(null,inst_25983);
var inst_25985 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25984);
var inst_25986 = console.warn("Figwheel: Not loading code with warnings - ",inst_25985);
var state_25999__$1 = state_25999;
var statearr_26008_26032 = state_25999__$1;
(statearr_26008_26032[(2)] = inst_25986);

(statearr_26008_26032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (2))){
var state_25999__$1 = state_25999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25999__$1,(4),ch);
} else {
if((state_val_26000 === (11))){
var inst_25979 = (state_25999[(2)]);
var state_25999__$1 = state_25999;
var statearr_26009_26033 = state_25999__$1;
(statearr_26009_26033[(2)] = inst_25979);

(statearr_26009_26033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (9))){
var inst_25969 = (state_25999[(9)]);
var inst_25981 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25969,opts);
var state_25999__$1 = state_25999;
if(inst_25981){
var statearr_26010_26034 = state_25999__$1;
(statearr_26010_26034[(1)] = (12));

} else {
var statearr_26011_26035 = state_25999__$1;
(statearr_26011_26035[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (5))){
var inst_25969 = (state_25999[(9)]);
var inst_25963 = (state_25999[(7)]);
var inst_25965 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25966 = (new cljs.core.PersistentArrayMap(null,2,inst_25965,null));
var inst_25967 = (new cljs.core.PersistentHashSet(null,inst_25966,null));
var inst_25968 = figwheel.client.focus_msgs.call(null,inst_25967,inst_25963);
var inst_25969__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25968);
var inst_25970 = cljs.core.first.call(null,inst_25968);
var inst_25971 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25969__$1,opts);
var state_25999__$1 = (function (){var statearr_26012 = state_25999;
(statearr_26012[(9)] = inst_25969__$1);

(statearr_26012[(8)] = inst_25970);

return statearr_26012;
})();
if(cljs.core.truth_(inst_25971)){
var statearr_26013_26036 = state_25999__$1;
(statearr_26013_26036[(1)] = (8));

} else {
var statearr_26014_26037 = state_25999__$1;
(statearr_26014_26037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (14))){
var inst_25989 = (state_25999[(2)]);
var state_25999__$1 = state_25999;
var statearr_26015_26038 = state_25999__$1;
(statearr_26015_26038[(2)] = inst_25989);

(statearr_26015_26038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (10))){
var inst_25991 = (state_25999[(2)]);
var state_25999__$1 = (function (){var statearr_26016 = state_25999;
(statearr_26016[(10)] = inst_25991);

return statearr_26016;
})();
var statearr_26017_26039 = state_25999__$1;
(statearr_26017_26039[(2)] = null);

(statearr_26017_26039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26000 === (8))){
var inst_25970 = (state_25999[(8)]);
var inst_25973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25974 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25970);
var inst_25975 = cljs.core.async.timeout.call(null,(1000));
var inst_25976 = [inst_25974,inst_25975];
var inst_25977 = (new cljs.core.PersistentVector(null,2,(5),inst_25973,inst_25976,null));
var state_25999__$1 = state_25999;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25999__$1,(11),inst_25977);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15033__auto___26025,ch))
;
return ((function (switch__14977__auto__,c__15033__auto___26025,ch){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_26021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26021[(0)] = state_machine__14978__auto__);

(statearr_26021[(1)] = (1));

return statearr_26021;
});
var state_machine__14978__auto____1 = (function (state_25999){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_25999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e26022){if((e26022 instanceof Object)){
var ex__14981__auto__ = e26022;
var statearr_26023_26040 = state_25999;
(statearr_26023_26040[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26041 = state_25999;
state_25999 = G__26041;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_25999){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_25999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___26025,ch))
})();
var state__15035__auto__ = (function (){var statearr_26024 = f__15034__auto__.call(null);
(statearr_26024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___26025);

return statearr_26024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___26025,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26042_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26042_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26051 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__26044_SHARP_,p2__26043_SHARP_){
return [cljs.core.str(p2__26043_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26051){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26049 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26050 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26049,_STAR_print_newline_STAR_26050,base_path_26051){
return (function() { 
var G__26052__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26052 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26053__i = 0, G__26053__a = new Array(arguments.length -  0);
while (G__26053__i < G__26053__a.length) {G__26053__a[G__26053__i] = arguments[G__26053__i + 0]; ++G__26053__i;}
  args = new cljs.core.IndexedSeq(G__26053__a,0);
} 
return G__26052__delegate.call(this,args);};
G__26052.cljs$lang$maxFixedArity = 0;
G__26052.cljs$lang$applyTo = (function (arglist__26054){
var args = cljs.core.seq(arglist__26054);
return G__26052__delegate(args);
});
G__26052.cljs$core$IFn$_invoke$arity$variadic = G__26052__delegate;
return G__26052;
})()
;})(_STAR_print_fn_STAR_26049,_STAR_print_newline_STAR_26050,base_path_26051))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26050;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26049;
}}catch (e26048){if((e26048 instanceof Error)){
var e = e26048;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26051], null));
} else {
var e = e26048;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26051))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__26055){
var map__26060 = p__26055;
var map__26060__$1 = ((cljs.core.seq_QMARK_.call(null,map__26060))?cljs.core.apply.call(null,cljs.core.hash_map,map__26060):map__26060);
var opts = map__26060__$1;
var build_id = cljs.core.get.call(null,map__26060__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26060,map__26060__$1,opts,build_id){
return (function (p__26061){
var vec__26062 = p__26061;
var map__26063 = cljs.core.nth.call(null,vec__26062,(0),null);
var map__26063__$1 = ((cljs.core.seq_QMARK_.call(null,map__26063))?cljs.core.apply.call(null,cljs.core.hash_map,map__26063):map__26063);
var msg = map__26063__$1;
var msg_name = cljs.core.get.call(null,map__26063__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26062,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__26062,map__26063,map__26063__$1,msg,msg_name,_,map__26060,map__26060__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26062,map__26063,map__26063__$1,msg,msg_name,_,map__26060,map__26060__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26060,map__26060__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__26067){
var vec__26068 = p__26067;
var map__26069 = cljs.core.nth.call(null,vec__26068,(0),null);
var map__26069__$1 = ((cljs.core.seq_QMARK_.call(null,map__26069))?cljs.core.apply.call(null,cljs.core.hash_map,map__26069):map__26069);
var msg = map__26069__$1;
var msg_name = cljs.core.get.call(null,map__26069__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26068,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__26070){
var map__26078 = p__26070;
var map__26078__$1 = ((cljs.core.seq_QMARK_.call(null,map__26078))?cljs.core.apply.call(null,cljs.core.hash_map,map__26078):map__26078);
var on_compile_fail = cljs.core.get.call(null,map__26078__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__26078__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__26078,map__26078__$1,on_compile_fail,on_compile_warning){
return (function (p__26079){
var vec__26080 = p__26079;
var map__26081 = cljs.core.nth.call(null,vec__26080,(0),null);
var map__26081__$1 = ((cljs.core.seq_QMARK_.call(null,map__26081))?cljs.core.apply.call(null,cljs.core.hash_map,map__26081):map__26081);
var msg = map__26081__$1;
var msg_name = cljs.core.get.call(null,map__26081__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26080,(1));
var pred__26082 = cljs.core._EQ_;
var expr__26083 = msg_name;
if(cljs.core.truth_(pred__26082.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26083))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26082.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26083))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26078,map__26078__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__,msg_hist,msg_names,msg){
return (function (state_26280){
var state_val_26281 = (state_26280[(1)]);
if((state_val_26281 === (7))){
var inst_26216 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26282_26323 = state_26280__$1;
(statearr_26282_26323[(2)] = inst_26216);

(statearr_26282_26323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (20))){
var inst_26242 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26280__$1 = state_26280;
if(inst_26242){
var statearr_26283_26324 = state_26280__$1;
(statearr_26283_26324[(1)] = (22));

} else {
var statearr_26284_26325 = state_26280__$1;
(statearr_26284_26325[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (27))){
var inst_26254 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26255 = figwheel.client.heads_up.display_warning.call(null,inst_26254);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26280__$1,(30),inst_26255);
} else {
if((state_val_26281 === (1))){
var inst_26204 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26280__$1 = state_26280;
if(cljs.core.truth_(inst_26204)){
var statearr_26285_26326 = state_26280__$1;
(statearr_26285_26326[(1)] = (2));

} else {
var statearr_26286_26327 = state_26280__$1;
(statearr_26286_26327[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (24))){
var inst_26270 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26287_26328 = state_26280__$1;
(statearr_26287_26328[(2)] = inst_26270);

(statearr_26287_26328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (4))){
var inst_26278 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26280__$1,inst_26278);
} else {
if((state_val_26281 === (15))){
var inst_26231 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26232 = figwheel.client.format_messages.call(null,inst_26231);
var inst_26233 = figwheel.client.heads_up.display_error.call(null,inst_26232);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26280__$1,(18),inst_26233);
} else {
if((state_val_26281 === (21))){
var inst_26272 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26288_26329 = state_26280__$1;
(statearr_26288_26329[(2)] = inst_26272);

(statearr_26288_26329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (31))){
var inst_26261 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26280__$1,(34),inst_26261);
} else {
if((state_val_26281 === (32))){
var state_26280__$1 = state_26280;
var statearr_26289_26330 = state_26280__$1;
(statearr_26289_26330[(2)] = null);

(statearr_26289_26330[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (33))){
var inst_26266 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26290_26331 = state_26280__$1;
(statearr_26290_26331[(2)] = inst_26266);

(statearr_26290_26331[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (13))){
var inst_26222 = (state_26280[(2)]);
var inst_26223 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26224 = figwheel.client.format_messages.call(null,inst_26223);
var inst_26225 = figwheel.client.heads_up.display_error.call(null,inst_26224);
var state_26280__$1 = (function (){var statearr_26291 = state_26280;
(statearr_26291[(7)] = inst_26222);

return statearr_26291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26280__$1,(14),inst_26225);
} else {
if((state_val_26281 === (22))){
var inst_26244 = figwheel.client.heads_up.clear.call(null);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26280__$1,(25),inst_26244);
} else {
if((state_val_26281 === (29))){
var inst_26268 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26292_26332 = state_26280__$1;
(statearr_26292_26332[(2)] = inst_26268);

(statearr_26292_26332[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (6))){
var inst_26212 = figwheel.client.heads_up.clear.call(null);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26280__$1,(9),inst_26212);
} else {
if((state_val_26281 === (28))){
var inst_26259 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26280__$1 = state_26280;
if(inst_26259){
var statearr_26293_26333 = state_26280__$1;
(statearr_26293_26333[(1)] = (31));

} else {
var statearr_26294_26334 = state_26280__$1;
(statearr_26294_26334[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (25))){
var inst_26246 = (state_26280[(2)]);
var inst_26247 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26248 = figwheel.client.heads_up.display_warning.call(null,inst_26247);
var state_26280__$1 = (function (){var statearr_26295 = state_26280;
(statearr_26295[(8)] = inst_26246);

return statearr_26295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26280__$1,(26),inst_26248);
} else {
if((state_val_26281 === (34))){
var inst_26263 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26296_26335 = state_26280__$1;
(statearr_26296_26335[(2)] = inst_26263);

(statearr_26296_26335[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (17))){
var inst_26274 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26297_26336 = state_26280__$1;
(statearr_26297_26336[(2)] = inst_26274);

(statearr_26297_26336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (3))){
var inst_26218 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26280__$1 = state_26280;
if(inst_26218){
var statearr_26298_26337 = state_26280__$1;
(statearr_26298_26337[(1)] = (10));

} else {
var statearr_26299_26338 = state_26280__$1;
(statearr_26299_26338[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (12))){
var inst_26276 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26300_26339 = state_26280__$1;
(statearr_26300_26339[(2)] = inst_26276);

(statearr_26300_26339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (2))){
var inst_26206 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26280__$1 = state_26280;
if(cljs.core.truth_(inst_26206)){
var statearr_26301_26340 = state_26280__$1;
(statearr_26301_26340[(1)] = (5));

} else {
var statearr_26302_26341 = state_26280__$1;
(statearr_26302_26341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (23))){
var inst_26252 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26280__$1 = state_26280;
if(inst_26252){
var statearr_26303_26342 = state_26280__$1;
(statearr_26303_26342[(1)] = (27));

} else {
var statearr_26304_26343 = state_26280__$1;
(statearr_26304_26343[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (19))){
var inst_26239 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26240 = figwheel.client.heads_up.append_message.call(null,inst_26239);
var state_26280__$1 = state_26280;
var statearr_26305_26344 = state_26280__$1;
(statearr_26305_26344[(2)] = inst_26240);

(statearr_26305_26344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (11))){
var inst_26229 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26280__$1 = state_26280;
if(inst_26229){
var statearr_26306_26345 = state_26280__$1;
(statearr_26306_26345[(1)] = (15));

} else {
var statearr_26307_26346 = state_26280__$1;
(statearr_26307_26346[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (9))){
var inst_26214 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26308_26347 = state_26280__$1;
(statearr_26308_26347[(2)] = inst_26214);

(statearr_26308_26347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (5))){
var inst_26208 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26280__$1,(8),inst_26208);
} else {
if((state_val_26281 === (14))){
var inst_26227 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26309_26348 = state_26280__$1;
(statearr_26309_26348[(2)] = inst_26227);

(statearr_26309_26348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (26))){
var inst_26250 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26310_26349 = state_26280__$1;
(statearr_26310_26349[(2)] = inst_26250);

(statearr_26310_26349[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (16))){
var inst_26237 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26280__$1 = state_26280;
if(inst_26237){
var statearr_26311_26350 = state_26280__$1;
(statearr_26311_26350[(1)] = (19));

} else {
var statearr_26312_26351 = state_26280__$1;
(statearr_26312_26351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (30))){
var inst_26257 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26313_26352 = state_26280__$1;
(statearr_26313_26352[(2)] = inst_26257);

(statearr_26313_26352[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (10))){
var inst_26220 = figwheel.client.heads_up.clear.call(null);
var state_26280__$1 = state_26280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26280__$1,(13),inst_26220);
} else {
if((state_val_26281 === (18))){
var inst_26235 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26314_26353 = state_26280__$1;
(statearr_26314_26353[(2)] = inst_26235);

(statearr_26314_26353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26281 === (8))){
var inst_26210 = (state_26280[(2)]);
var state_26280__$1 = state_26280;
var statearr_26315_26354 = state_26280__$1;
(statearr_26315_26354[(2)] = inst_26210);

(statearr_26315_26354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15033__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__14977__auto__,c__15033__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_26319 = [null,null,null,null,null,null,null,null,null];
(statearr_26319[(0)] = state_machine__14978__auto__);

(statearr_26319[(1)] = (1));

return statearr_26319;
});
var state_machine__14978__auto____1 = (function (state_26280){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_26280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e26320){if((e26320 instanceof Object)){
var ex__14981__auto__ = e26320;
var statearr_26321_26355 = state_26280;
(statearr_26321_26355[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26356 = state_26280;
state_26280 = G__26356;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_26280){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_26280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__,msg_hist,msg_names,msg))
})();
var state__15035__auto__ = (function (){var statearr_26322 = f__15034__auto__.call(null);
(statearr_26322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_26322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__,msg_hist,msg_names,msg))
);

return c__15033__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15033__auto___26419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___26419,ch){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___26419,ch){
return (function (state_26402){
var state_val_26403 = (state_26402[(1)]);
if((state_val_26403 === (8))){
var inst_26394 = (state_26402[(2)]);
var state_26402__$1 = (function (){var statearr_26404 = state_26402;
(statearr_26404[(7)] = inst_26394);

return statearr_26404;
})();
var statearr_26405_26420 = state_26402__$1;
(statearr_26405_26420[(2)] = null);

(statearr_26405_26420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (7))){
var inst_26398 = (state_26402[(2)]);
var state_26402__$1 = state_26402;
var statearr_26406_26421 = state_26402__$1;
(statearr_26406_26421[(2)] = inst_26398);

(statearr_26406_26421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (6))){
var state_26402__$1 = state_26402;
var statearr_26407_26422 = state_26402__$1;
(statearr_26407_26422[(2)] = null);

(statearr_26407_26422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (5))){
var inst_26390 = (state_26402[(8)]);
var inst_26392 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26390);
var state_26402__$1 = state_26402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26402__$1,(8),inst_26392);
} else {
if((state_val_26403 === (4))){
var inst_26390 = (state_26402[(8)]);
var inst_26390__$1 = (state_26402[(2)]);
var state_26402__$1 = (function (){var statearr_26408 = state_26402;
(statearr_26408[(8)] = inst_26390__$1);

return statearr_26408;
})();
if(cljs.core.truth_(inst_26390__$1)){
var statearr_26409_26423 = state_26402__$1;
(statearr_26409_26423[(1)] = (5));

} else {
var statearr_26410_26424 = state_26402__$1;
(statearr_26410_26424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26403 === (3))){
var inst_26400 = (state_26402[(2)]);
var state_26402__$1 = state_26402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26402__$1,inst_26400);
} else {
if((state_val_26403 === (2))){
var state_26402__$1 = state_26402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26402__$1,(4),ch);
} else {
if((state_val_26403 === (1))){
var state_26402__$1 = state_26402;
var statearr_26411_26425 = state_26402__$1;
(statearr_26411_26425[(2)] = null);

(statearr_26411_26425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__15033__auto___26419,ch))
;
return ((function (switch__14977__auto__,c__15033__auto___26419,ch){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_26415 = [null,null,null,null,null,null,null,null,null];
(statearr_26415[(0)] = state_machine__14978__auto__);

(statearr_26415[(1)] = (1));

return statearr_26415;
});
var state_machine__14978__auto____1 = (function (state_26402){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_26402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e26416){if((e26416 instanceof Object)){
var ex__14981__auto__ = e26416;
var statearr_26417_26426 = state_26402;
(statearr_26417_26426[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26427 = state_26402;
state_26402 = G__26427;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_26402){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_26402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___26419,ch))
})();
var state__15035__auto__ = (function (){var statearr_26418 = f__15034__auto__.call(null);
(statearr_26418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___26419);

return statearr_26418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___26419,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__){
return (function (state_26448){
var state_val_26449 = (state_26448[(1)]);
if((state_val_26449 === (2))){
var inst_26445 = (state_26448[(2)]);
var inst_26446 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26448__$1 = (function (){var statearr_26450 = state_26448;
(statearr_26450[(7)] = inst_26445);

return statearr_26450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26448__$1,inst_26446);
} else {
if((state_val_26449 === (1))){
var inst_26443 = cljs.core.async.timeout.call(null,(3000));
var state_26448__$1 = state_26448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26448__$1,(2),inst_26443);
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
var statearr_26454 = [null,null,null,null,null,null,null,null];
(statearr_26454[(0)] = state_machine__14978__auto__);

(statearr_26454[(1)] = (1));

return statearr_26454;
});
var state_machine__14978__auto____1 = (function (state_26448){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_26448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e26455){if((e26455 instanceof Object)){
var ex__14981__auto__ = e26455;
var statearr_26456_26458 = state_26448;
(statearr_26456_26458[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26459 = state_26448;
state_26448 = G__26459;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_26448){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_26448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__))
})();
var state__15035__auto__ = (function (){var statearr_26457 = f__15034__auto__.call(null);
(statearr_26457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_26457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__))
);

return c__15033__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__12157__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__12157__auto__)){
return ("CustomEvent" in window);
} else {
return and__12157__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj26463 = {"detail":url};
return obj26463;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__26464){
var map__26470 = p__26464;
var map__26470__$1 = ((cljs.core.seq_QMARK_.call(null,map__26470))?cljs.core.apply.call(null,cljs.core.hash_map,map__26470):map__26470);
var ed = map__26470__$1;
var exception_data = cljs.core.get.call(null,map__26470__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__26470__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26471_26475 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26472_26476 = null;
var count__26473_26477 = (0);
var i__26474_26478 = (0);
while(true){
if((i__26474_26478 < count__26473_26477)){
var msg_26479 = cljs.core._nth.call(null,chunk__26472_26476,i__26474_26478);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26479);

var G__26480 = seq__26471_26475;
var G__26481 = chunk__26472_26476;
var G__26482 = count__26473_26477;
var G__26483 = (i__26474_26478 + (1));
seq__26471_26475 = G__26480;
chunk__26472_26476 = G__26481;
count__26473_26477 = G__26482;
i__26474_26478 = G__26483;
continue;
} else {
var temp__4126__auto___26484 = cljs.core.seq.call(null,seq__26471_26475);
if(temp__4126__auto___26484){
var seq__26471_26485__$1 = temp__4126__auto___26484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26471_26485__$1)){
var c__12956__auto___26486 = cljs.core.chunk_first.call(null,seq__26471_26485__$1);
var G__26487 = cljs.core.chunk_rest.call(null,seq__26471_26485__$1);
var G__26488 = c__12956__auto___26486;
var G__26489 = cljs.core.count.call(null,c__12956__auto___26486);
var G__26490 = (0);
seq__26471_26475 = G__26487;
chunk__26472_26476 = G__26488;
count__26473_26477 = G__26489;
i__26474_26478 = G__26490;
continue;
} else {
var msg_26491 = cljs.core.first.call(null,seq__26471_26485__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26491);

var G__26492 = cljs.core.next.call(null,seq__26471_26485__$1);
var G__26493 = null;
var G__26494 = (0);
var G__26495 = (0);
seq__26471_26475 = G__26492;
chunk__26472_26476 = G__26493;
count__26473_26477 = G__26494;
i__26474_26478 = G__26495;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__26496){
var map__26498 = p__26496;
var map__26498__$1 = ((cljs.core.seq_QMARK_.call(null,map__26498))?cljs.core.apply.call(null,cljs.core.hash_map,map__26498):map__26498);
var w = map__26498__$1;
var message = cljs.core.get.call(null,map__26498__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__12157__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__12157__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__12157__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__26505 = cljs.core.seq.call(null,plugins);
var chunk__26506 = null;
var count__26507 = (0);
var i__26508 = (0);
while(true){
if((i__26508 < count__26507)){
var vec__26509 = cljs.core._nth.call(null,chunk__26506,i__26508);
var k = cljs.core.nth.call(null,vec__26509,(0),null);
var plugin = cljs.core.nth.call(null,vec__26509,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26511 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26505,chunk__26506,count__26507,i__26508,pl_26511,vec__26509,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26511.call(null,msg_hist);
});})(seq__26505,chunk__26506,count__26507,i__26508,pl_26511,vec__26509,k,plugin))
);
} else {
}

var G__26512 = seq__26505;
var G__26513 = chunk__26506;
var G__26514 = count__26507;
var G__26515 = (i__26508 + (1));
seq__26505 = G__26512;
chunk__26506 = G__26513;
count__26507 = G__26514;
i__26508 = G__26515;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26505);
if(temp__4126__auto__){
var seq__26505__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26505__$1)){
var c__12956__auto__ = cljs.core.chunk_first.call(null,seq__26505__$1);
var G__26516 = cljs.core.chunk_rest.call(null,seq__26505__$1);
var G__26517 = c__12956__auto__;
var G__26518 = cljs.core.count.call(null,c__12956__auto__);
var G__26519 = (0);
seq__26505 = G__26516;
chunk__26506 = G__26517;
count__26507 = G__26518;
i__26508 = G__26519;
continue;
} else {
var vec__26510 = cljs.core.first.call(null,seq__26505__$1);
var k = cljs.core.nth.call(null,vec__26510,(0),null);
var plugin = cljs.core.nth.call(null,vec__26510,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26520 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26505,chunk__26506,count__26507,i__26508,pl_26520,vec__26510,k,plugin,seq__26505__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26520.call(null,msg_hist);
});})(seq__26505,chunk__26506,count__26507,i__26508,pl_26520,vec__26510,k,plugin,seq__26505__$1,temp__4126__auto__))
);
} else {
}

var G__26521 = cljs.core.next.call(null,seq__26505__$1);
var G__26522 = null;
var G__26523 = (0);
var G__26524 = (0);
seq__26505 = G__26521;
chunk__26506 = G__26522;
count__26507 = G__26523;
i__26508 = G__26524;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__26525){
var map__26527 = p__26525;
var map__26527__$1 = ((cljs.core.seq_QMARK_.call(null,map__26527))?cljs.core.apply.call(null,cljs.core.hash_map,map__26527):map__26527);
var opts = map__26527__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__26525 = null;
if (arguments.length > 0) {
var G__26528__i = 0, G__26528__a = new Array(arguments.length -  0);
while (G__26528__i < G__26528__a.length) {G__26528__a[G__26528__i] = arguments[G__26528__i + 0]; ++G__26528__i;}
  p__26525 = new cljs.core.IndexedSeq(G__26528__a,0);
} 
return watch_and_reload__delegate.call(this,p__26525);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__26529){
var p__26525 = cljs.core.seq(arglist__26529);
return watch_and_reload__delegate(p__26525);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map