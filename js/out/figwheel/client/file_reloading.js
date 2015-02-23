// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__26823_SHARP_,p2__26824_SHARP_){
var and__12157__auto__ = p1__26823_SHARP_;
if(cljs.core.truth_(and__12157__auto__)){
return p2__26824_SHARP_;
} else {
return and__12157__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__12169__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__12169__auto__){
return or__12169__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__26826_SHARP_,p2__26825_SHARP_){
return [cljs.core.str(p2__26825_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__12169__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__12169__auto__){
return or__12169__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__12169__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__13066__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13067__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13070__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13070__auto__,method_table__13066__auto__,prefer_table__13067__auto__,method_cache__13068__auto__,cached_hierarchy__13069__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26827){
var map__26828 = p__26827;
var map__26828__$1 = ((cljs.core.seq_QMARK_.call(null,map__26828))?cljs.core.apply.call(null,cljs.core.hash_map,map__26828):map__26828);
var file = cljs.core.get.call(null,map__26828__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26829){
var map__26830 = p__26829;
var map__26830__$1 = ((cljs.core.seq_QMARK_.call(null,map__26830))?cljs.core.apply.call(null,cljs.core.hash_map,map__26830):map__26830);
var namespace = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__13066__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13067__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13068__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13069__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13070__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13070__auto__,method_table__13066__auto__,prefer_table__13067__auto__,method_cache__13068__auto__,cached_hierarchy__13069__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e26831){if((e26831 instanceof Error)){
var e = e26831;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26831;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__26832,callback){
var map__26834 = p__26832;
var map__26834__$1 = ((cljs.core.seq_QMARK_.call(null,map__26834))?cljs.core.apply.call(null,cljs.core.hash_map,map__26834):map__26834);
var file_msg = map__26834__$1;
var request_url = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26834,map__26834__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26834,map__26834__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__26835){
var map__26837 = p__26835;
var map__26837__$1 = ((cljs.core.seq_QMARK_.call(null,map__26837))?cljs.core.apply.call(null,cljs.core.hash_map,map__26837):map__26837);
var file_msg = map__26837__$1;
var meta_data = cljs.core.get.call(null,map__26837__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__26837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__12169__auto__ = meta_data;
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__12157__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__12157__auto__){
var or__12169__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__12169__auto____$1)){
return or__12169__auto____$1;
} else {
var and__12157__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__12157__auto____$1){
var or__12169__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__12169__auto____$2){
return or__12169__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__12157__auto____$1;
}
}
}
} else {
return and__12157__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__26838,callback){
var map__26840 = p__26838;
var map__26840__$1 = ((cljs.core.seq_QMARK_.call(null,map__26840))?cljs.core.apply.call(null,cljs.core.hash_map,map__26840):map__26840);
var file_msg = map__26840__$1;
var namespace = cljs.core.get.call(null,map__26840__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__26840__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__15033__auto___26927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___26927,out){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___26927,out){
return (function (state_26909){
var state_val_26910 = (state_26909[(1)]);
if((state_val_26910 === (7))){
var inst_26893 = (state_26909[(7)]);
var inst_26899 = (state_26909[(2)]);
var inst_26900 = cljs.core.async.put_BANG_.call(null,out,inst_26899);
var inst_26889 = inst_26893;
var state_26909__$1 = (function (){var statearr_26911 = state_26909;
(statearr_26911[(8)] = inst_26889);

(statearr_26911[(9)] = inst_26900);

return statearr_26911;
})();
var statearr_26912_26928 = state_26909__$1;
(statearr_26912_26928[(2)] = null);

(statearr_26912_26928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (6))){
var inst_26905 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
var statearr_26913_26929 = state_26909__$1;
(statearr_26913_26929[(2)] = inst_26905);

(statearr_26913_26929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (5))){
var inst_26903 = cljs.core.async.close_BANG_.call(null,out);
var state_26909__$1 = state_26909;
var statearr_26914_26930 = state_26909__$1;
(statearr_26914_26930[(2)] = inst_26903);

(statearr_26914_26930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (4))){
var inst_26892 = (state_26909[(10)]);
var inst_26897 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26892);
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26909__$1,(7),inst_26897);
} else {
if((state_val_26910 === (3))){
var inst_26907 = (state_26909[(2)]);
var state_26909__$1 = state_26909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26909__$1,inst_26907);
} else {
if((state_val_26910 === (2))){
var inst_26892 = (state_26909[(10)]);
var inst_26889 = (state_26909[(8)]);
var inst_26892__$1 = cljs.core.nth.call(null,inst_26889,(0),null);
var inst_26893 = cljs.core.nthnext.call(null,inst_26889,(1));
var inst_26894 = (inst_26892__$1 == null);
var inst_26895 = cljs.core.not.call(null,inst_26894);
var state_26909__$1 = (function (){var statearr_26915 = state_26909;
(statearr_26915[(10)] = inst_26892__$1);

(statearr_26915[(7)] = inst_26893);

return statearr_26915;
})();
if(inst_26895){
var statearr_26916_26931 = state_26909__$1;
(statearr_26916_26931[(1)] = (4));

} else {
var statearr_26917_26932 = state_26909__$1;
(statearr_26917_26932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26910 === (1))){
var inst_26887 = cljs.core.nth.call(null,files,(0),null);
var inst_26888 = cljs.core.nthnext.call(null,files,(1));
var inst_26889 = files;
var state_26909__$1 = (function (){var statearr_26918 = state_26909;
(statearr_26918[(11)] = inst_26887);

(statearr_26918[(12)] = inst_26888);

(statearr_26918[(8)] = inst_26889);

return statearr_26918;
})();
var statearr_26919_26933 = state_26909__$1;
(statearr_26919_26933[(2)] = null);

(statearr_26919_26933[(1)] = (2));


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
});})(c__15033__auto___26927,out))
;
return ((function (switch__14977__auto__,c__15033__auto___26927,out){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_26923 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26923[(0)] = state_machine__14978__auto__);

(statearr_26923[(1)] = (1));

return statearr_26923;
});
var state_machine__14978__auto____1 = (function (state_26909){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_26909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e26924){if((e26924 instanceof Object)){
var ex__14981__auto__ = e26924;
var statearr_26925_26934 = state_26909;
(statearr_26925_26934[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26935 = state_26909;
state_26909 = G__26935;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_26909){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_26909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___26927,out))
})();
var state__15035__auto__ = (function (){var statearr_26926 = f__15034__auto__.call(null);
(statearr_26926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___26927);

return statearr_26926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___26927,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__26936,p__26937){
var map__26940 = p__26936;
var map__26940__$1 = ((cljs.core.seq_QMARK_.call(null,map__26940))?cljs.core.apply.call(null,cljs.core.hash_map,map__26940):map__26940);
var opts = map__26940__$1;
var url_rewriter = cljs.core.get.call(null,map__26940__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26941 = p__26937;
var map__26941__$1 = ((cljs.core.seq_QMARK_.call(null,map__26941))?cljs.core.apply.call(null,cljs.core.hash_map,map__26941):map__26941);
var file_msg = map__26941__$1;
var file = cljs.core.get.call(null,map__26941__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__26942){
var map__26945 = p__26942;
var map__26945__$1 = ((cljs.core.seq_QMARK_.call(null,map__26945))?cljs.core.apply.call(null,cljs.core.hash_map,map__26945):map__26945);
var file = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__12157__auto__ = eval_body__$1;
if(cljs.core.truth_(and__12157__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__12157__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e26946){var e = e26946;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__26951,p__26952){
var map__27153 = p__26951;
var map__27153__$1 = ((cljs.core.seq_QMARK_.call(null,map__27153))?cljs.core.apply.call(null,cljs.core.hash_map,map__27153):map__27153);
var opts = map__27153__$1;
var load_unchanged_files = cljs.core.get.call(null,map__27153__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__27153__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__27153__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__27154 = p__26952;
var map__27154__$1 = ((cljs.core.seq_QMARK_.call(null,map__27154))?cljs.core.apply.call(null,cljs.core.hash_map,map__27154):map__27154);
var msg = map__27154__$1;
var files = cljs.core.get.call(null,map__27154__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files){
return (function (state_27278){
var state_val_27279 = (state_27278[(1)]);
if((state_val_27279 === (7))){
var inst_27167 = (state_27278[(7)]);
var inst_27168 = (state_27278[(8)]);
var inst_27166 = (state_27278[(9)]);
var inst_27165 = (state_27278[(10)]);
var inst_27173 = cljs.core._nth.call(null,inst_27166,inst_27168);
var inst_27174 = figwheel.client.file_reloading.eval_body.call(null,inst_27173);
var inst_27175 = (inst_27168 + (1));
var tmp27280 = inst_27167;
var tmp27281 = inst_27166;
var tmp27282 = inst_27165;
var inst_27165__$1 = tmp27282;
var inst_27166__$1 = tmp27281;
var inst_27167__$1 = tmp27280;
var inst_27168__$1 = inst_27175;
var state_27278__$1 = (function (){var statearr_27283 = state_27278;
(statearr_27283[(7)] = inst_27167__$1);

(statearr_27283[(8)] = inst_27168__$1);

(statearr_27283[(11)] = inst_27174);

(statearr_27283[(9)] = inst_27166__$1);

(statearr_27283[(10)] = inst_27165__$1);

return statearr_27283;
})();
var statearr_27284_27353 = state_27278__$1;
(statearr_27284_27353[(2)] = null);

(statearr_27284_27353[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (20))){
var inst_27217 = (state_27278[(12)]);
var inst_27214 = (state_27278[(13)]);
var inst_27215 = (state_27278[(14)]);
var inst_27211 = (state_27278[(15)]);
var inst_27210 = (state_27278[(16)]);
var inst_27220 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27222 = (function (){var files_not_loaded = inst_27217;
var res = inst_27215;
var res_SINGLEQUOTE_ = inst_27214;
var files_SINGLEQUOTE_ = inst_27211;
var all_files = inst_27210;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27217,inst_27214,inst_27215,inst_27211,inst_27210,inst_27220,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files){
return (function (p__27221){
var map__27285 = p__27221;
var map__27285__$1 = ((cljs.core.seq_QMARK_.call(null,map__27285))?cljs.core.apply.call(null,cljs.core.hash_map,map__27285):map__27285);
var file = cljs.core.get.call(null,map__27285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__27285__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27217,inst_27214,inst_27215,inst_27211,inst_27210,inst_27220,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files))
})();
var inst_27223 = cljs.core.map.call(null,inst_27222,inst_27215);
var inst_27224 = cljs.core.pr_str.call(null,inst_27223);
var inst_27225 = figwheel.client.utils.log.call(null,inst_27224);
var inst_27226 = (function (){var files_not_loaded = inst_27217;
var res = inst_27215;
var res_SINGLEQUOTE_ = inst_27214;
var files_SINGLEQUOTE_ = inst_27211;
var all_files = inst_27210;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27217,inst_27214,inst_27215,inst_27211,inst_27210,inst_27220,inst_27222,inst_27223,inst_27224,inst_27225,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27217,inst_27214,inst_27215,inst_27211,inst_27210,inst_27220,inst_27222,inst_27223,inst_27224,inst_27225,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files))
})();
var inst_27227 = setTimeout(inst_27226,(10));
var state_27278__$1 = (function (){var statearr_27286 = state_27278;
(statearr_27286[(17)] = inst_27220);

(statearr_27286[(18)] = inst_27225);

return statearr_27286;
})();
var statearr_27287_27354 = state_27278__$1;
(statearr_27287_27354[(2)] = inst_27227);

(statearr_27287_27354[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (27))){
var inst_27237 = (state_27278[(19)]);
var state_27278__$1 = state_27278;
var statearr_27288_27355 = state_27278__$1;
(statearr_27288_27355[(2)] = inst_27237);

(statearr_27288_27355[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (1))){
var inst_27157 = (state_27278[(20)]);
var inst_27155 = before_jsload.call(null,files);
var inst_27156 = (function (){return ((function (inst_27157,inst_27155,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files){
return (function (p1__26947_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26947_SHARP_);
});
;})(inst_27157,inst_27155,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files))
})();
var inst_27157__$1 = cljs.core.filter.call(null,inst_27156,files);
var inst_27158 = cljs.core.not_empty.call(null,inst_27157__$1);
var state_27278__$1 = (function (){var statearr_27289 = state_27278;
(statearr_27289[(21)] = inst_27155);

(statearr_27289[(20)] = inst_27157__$1);

return statearr_27289;
})();
if(cljs.core.truth_(inst_27158)){
var statearr_27290_27356 = state_27278__$1;
(statearr_27290_27356[(1)] = (2));

} else {
var statearr_27291_27357 = state_27278__$1;
(statearr_27291_27357[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (24))){
var state_27278__$1 = state_27278;
var statearr_27292_27358 = state_27278__$1;
(statearr_27292_27358[(2)] = null);

(statearr_27292_27358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (4))){
var inst_27202 = (state_27278[(2)]);
var inst_27203 = (function (){return ((function (inst_27202,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files){
return (function (p1__26948_SHARP_){
var and__12157__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26948_SHARP_);
if(cljs.core.truth_(and__12157__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26948_SHARP_));
} else {
return and__12157__auto__;
}
});
;})(inst_27202,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files))
})();
var inst_27204 = cljs.core.filter.call(null,inst_27203,files);
var state_27278__$1 = (function (){var statearr_27293 = state_27278;
(statearr_27293[(22)] = inst_27202);

(statearr_27293[(23)] = inst_27204);

return statearr_27293;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27294_27359 = state_27278__$1;
(statearr_27294_27359[(1)] = (16));

} else {
var statearr_27295_27360 = state_27278__$1;
(statearr_27295_27360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (15))){
var inst_27192 = (state_27278[(2)]);
var state_27278__$1 = state_27278;
var statearr_27296_27361 = state_27278__$1;
(statearr_27296_27361[(2)] = inst_27192);

(statearr_27296_27361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (21))){
var state_27278__$1 = state_27278;
var statearr_27297_27362 = state_27278__$1;
(statearr_27297_27362[(2)] = null);

(statearr_27297_27362[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (31))){
var inst_27245 = (state_27278[(24)]);
var inst_27255 = (state_27278[(2)]);
var inst_27256 = cljs.core.not_empty.call(null,inst_27245);
var state_27278__$1 = (function (){var statearr_27298 = state_27278;
(statearr_27298[(25)] = inst_27255);

return statearr_27298;
})();
if(cljs.core.truth_(inst_27256)){
var statearr_27299_27363 = state_27278__$1;
(statearr_27299_27363[(1)] = (32));

} else {
var statearr_27300_27364 = state_27278__$1;
(statearr_27300_27364[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (32))){
var inst_27245 = (state_27278[(24)]);
var inst_27258 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27245);
var inst_27259 = cljs.core.pr_str.call(null,inst_27258);
var inst_27260 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27259)].join('');
var inst_27261 = figwheel.client.utils.log.call(null,inst_27260);
var state_27278__$1 = state_27278;
var statearr_27301_27365 = state_27278__$1;
(statearr_27301_27365[(2)] = inst_27261);

(statearr_27301_27365[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (33))){
var state_27278__$1 = state_27278;
var statearr_27302_27366 = state_27278__$1;
(statearr_27302_27366[(2)] = null);

(statearr_27302_27366[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (13))){
var inst_27178 = (state_27278[(26)]);
var inst_27182 = cljs.core.chunk_first.call(null,inst_27178);
var inst_27183 = cljs.core.chunk_rest.call(null,inst_27178);
var inst_27184 = cljs.core.count.call(null,inst_27182);
var inst_27165 = inst_27183;
var inst_27166 = inst_27182;
var inst_27167 = inst_27184;
var inst_27168 = (0);
var state_27278__$1 = (function (){var statearr_27303 = state_27278;
(statearr_27303[(7)] = inst_27167);

(statearr_27303[(8)] = inst_27168);

(statearr_27303[(9)] = inst_27166);

(statearr_27303[(10)] = inst_27165);

return statearr_27303;
})();
var statearr_27304_27367 = state_27278__$1;
(statearr_27304_27367[(2)] = null);

(statearr_27304_27367[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (22))){
var inst_27217 = (state_27278[(12)]);
var inst_27230 = (state_27278[(2)]);
var inst_27231 = cljs.core.not_empty.call(null,inst_27217);
var state_27278__$1 = (function (){var statearr_27305 = state_27278;
(statearr_27305[(27)] = inst_27230);

return statearr_27305;
})();
if(cljs.core.truth_(inst_27231)){
var statearr_27306_27368 = state_27278__$1;
(statearr_27306_27368[(1)] = (23));

} else {
var statearr_27307_27369 = state_27278__$1;
(statearr_27307_27369[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (36))){
var state_27278__$1 = state_27278;
var statearr_27308_27370 = state_27278__$1;
(statearr_27308_27370[(2)] = null);

(statearr_27308_27370[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (29))){
var inst_27246 = (state_27278[(28)]);
var inst_27249 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27246);
var inst_27250 = cljs.core.pr_str.call(null,inst_27249);
var inst_27251 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27250)].join('');
var inst_27252 = figwheel.client.utils.log.call(null,inst_27251);
var state_27278__$1 = state_27278;
var statearr_27309_27371 = state_27278__$1;
(statearr_27309_27371[(2)] = inst_27252);

(statearr_27309_27371[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (6))){
var inst_27199 = (state_27278[(2)]);
var state_27278__$1 = state_27278;
var statearr_27310_27372 = state_27278__$1;
(statearr_27310_27372[(2)] = inst_27199);

(statearr_27310_27372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (28))){
var inst_27246 = (state_27278[(28)]);
var inst_27243 = (state_27278[(2)]);
var inst_27244 = cljs.core.get.call(null,inst_27243,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27245 = cljs.core.get.call(null,inst_27243,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27246__$1 = cljs.core.get.call(null,inst_27243,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27247 = cljs.core.not_empty.call(null,inst_27246__$1);
var state_27278__$1 = (function (){var statearr_27311 = state_27278;
(statearr_27311[(29)] = inst_27244);

(statearr_27311[(24)] = inst_27245);

(statearr_27311[(28)] = inst_27246__$1);

return statearr_27311;
})();
if(cljs.core.truth_(inst_27247)){
var statearr_27312_27373 = state_27278__$1;
(statearr_27312_27373[(1)] = (29));

} else {
var statearr_27313_27374 = state_27278__$1;
(statearr_27313_27374[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (25))){
var inst_27276 = (state_27278[(2)]);
var state_27278__$1 = state_27278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27278__$1,inst_27276);
} else {
if((state_val_27279 === (34))){
var inst_27244 = (state_27278[(29)]);
var inst_27264 = (state_27278[(2)]);
var inst_27265 = cljs.core.not_empty.call(null,inst_27244);
var state_27278__$1 = (function (){var statearr_27314 = state_27278;
(statearr_27314[(30)] = inst_27264);

return statearr_27314;
})();
if(cljs.core.truth_(inst_27265)){
var statearr_27315_27375 = state_27278__$1;
(statearr_27315_27375[(1)] = (35));

} else {
var statearr_27316_27376 = state_27278__$1;
(statearr_27316_27376[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (17))){
var inst_27204 = (state_27278[(23)]);
var state_27278__$1 = state_27278;
var statearr_27317_27377 = state_27278__$1;
(statearr_27317_27377[(2)] = inst_27204);

(statearr_27317_27377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (3))){
var state_27278__$1 = state_27278;
var statearr_27318_27378 = state_27278__$1;
(statearr_27318_27378[(2)] = null);

(statearr_27318_27378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (12))){
var inst_27195 = (state_27278[(2)]);
var state_27278__$1 = state_27278;
var statearr_27319_27379 = state_27278__$1;
(statearr_27319_27379[(2)] = inst_27195);

(statearr_27319_27379[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (2))){
var inst_27157 = (state_27278[(20)]);
var inst_27164 = cljs.core.seq.call(null,inst_27157);
var inst_27165 = inst_27164;
var inst_27166 = null;
var inst_27167 = (0);
var inst_27168 = (0);
var state_27278__$1 = (function (){var statearr_27320 = state_27278;
(statearr_27320[(7)] = inst_27167);

(statearr_27320[(8)] = inst_27168);

(statearr_27320[(9)] = inst_27166);

(statearr_27320[(10)] = inst_27165);

return statearr_27320;
})();
var statearr_27321_27380 = state_27278__$1;
(statearr_27321_27380[(2)] = null);

(statearr_27321_27380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (23))){
var inst_27217 = (state_27278[(12)]);
var inst_27237 = (state_27278[(19)]);
var inst_27214 = (state_27278[(13)]);
var inst_27215 = (state_27278[(14)]);
var inst_27211 = (state_27278[(15)]);
var inst_27210 = (state_27278[(16)]);
var inst_27233 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27236 = (function (){var files_not_loaded = inst_27217;
var res = inst_27215;
var res_SINGLEQUOTE_ = inst_27214;
var files_SINGLEQUOTE_ = inst_27211;
var all_files = inst_27210;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27217,inst_27237,inst_27214,inst_27215,inst_27211,inst_27210,inst_27233,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files){
return (function (p__27235){
var map__27322 = p__27235;
var map__27322__$1 = ((cljs.core.seq_QMARK_.call(null,map__27322))?cljs.core.apply.call(null,cljs.core.hash_map,map__27322):map__27322);
var meta_data = cljs.core.get.call(null,map__27322__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27217,inst_27237,inst_27214,inst_27215,inst_27211,inst_27210,inst_27233,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files))
})();
var inst_27237__$1 = cljs.core.group_by.call(null,inst_27236,inst_27217);
var inst_27238 = cljs.core.seq_QMARK_.call(null,inst_27237__$1);
var state_27278__$1 = (function (){var statearr_27323 = state_27278;
(statearr_27323[(19)] = inst_27237__$1);

(statearr_27323[(31)] = inst_27233);

return statearr_27323;
})();
if(inst_27238){
var statearr_27324_27381 = state_27278__$1;
(statearr_27324_27381[(1)] = (26));

} else {
var statearr_27325_27382 = state_27278__$1;
(statearr_27325_27382[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (35))){
var inst_27244 = (state_27278[(29)]);
var inst_27267 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27244);
var inst_27268 = cljs.core.pr_str.call(null,inst_27267);
var inst_27269 = [cljs.core.str("not required: "),cljs.core.str(inst_27268)].join('');
var inst_27270 = figwheel.client.utils.log.call(null,inst_27269);
var state_27278__$1 = state_27278;
var statearr_27326_27383 = state_27278__$1;
(statearr_27326_27383[(2)] = inst_27270);

(statearr_27326_27383[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (19))){
var inst_27214 = (state_27278[(13)]);
var inst_27215 = (state_27278[(14)]);
var inst_27211 = (state_27278[(15)]);
var inst_27210 = (state_27278[(16)]);
var inst_27214__$1 = (state_27278[(2)]);
var inst_27215__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27214__$1);
var inst_27216 = (function (){var res = inst_27215__$1;
var res_SINGLEQUOTE_ = inst_27214__$1;
var files_SINGLEQUOTE_ = inst_27211;
var all_files = inst_27210;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27214,inst_27215,inst_27211,inst_27210,inst_27214__$1,inst_27215__$1,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files){
return (function (p1__26950_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26950_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_27214,inst_27215,inst_27211,inst_27210,inst_27214__$1,inst_27215__$1,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files))
})();
var inst_27217 = cljs.core.filter.call(null,inst_27216,inst_27214__$1);
var inst_27218 = cljs.core.not_empty.call(null,inst_27215__$1);
var state_27278__$1 = (function (){var statearr_27327 = state_27278;
(statearr_27327[(12)] = inst_27217);

(statearr_27327[(13)] = inst_27214__$1);

(statearr_27327[(14)] = inst_27215__$1);

return statearr_27327;
})();
if(cljs.core.truth_(inst_27218)){
var statearr_27328_27384 = state_27278__$1;
(statearr_27328_27384[(1)] = (20));

} else {
var statearr_27329_27385 = state_27278__$1;
(statearr_27329_27385[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (11))){
var state_27278__$1 = state_27278;
var statearr_27330_27386 = state_27278__$1;
(statearr_27330_27386[(2)] = null);

(statearr_27330_27386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (9))){
var inst_27197 = (state_27278[(2)]);
var state_27278__$1 = state_27278;
var statearr_27331_27387 = state_27278__$1;
(statearr_27331_27387[(2)] = inst_27197);

(statearr_27331_27387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (5))){
var inst_27167 = (state_27278[(7)]);
var inst_27168 = (state_27278[(8)]);
var inst_27170 = (inst_27168 < inst_27167);
var inst_27171 = inst_27170;
var state_27278__$1 = state_27278;
if(cljs.core.truth_(inst_27171)){
var statearr_27332_27388 = state_27278__$1;
(statearr_27332_27388[(1)] = (7));

} else {
var statearr_27333_27389 = state_27278__$1;
(statearr_27333_27389[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (14))){
var inst_27178 = (state_27278[(26)]);
var inst_27187 = cljs.core.first.call(null,inst_27178);
var inst_27188 = figwheel.client.file_reloading.eval_body.call(null,inst_27187);
var inst_27189 = cljs.core.next.call(null,inst_27178);
var inst_27165 = inst_27189;
var inst_27166 = null;
var inst_27167 = (0);
var inst_27168 = (0);
var state_27278__$1 = (function (){var statearr_27334 = state_27278;
(statearr_27334[(7)] = inst_27167);

(statearr_27334[(8)] = inst_27168);

(statearr_27334[(32)] = inst_27188);

(statearr_27334[(9)] = inst_27166);

(statearr_27334[(10)] = inst_27165);

return statearr_27334;
})();
var statearr_27335_27390 = state_27278__$1;
(statearr_27335_27390[(2)] = null);

(statearr_27335_27390[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (26))){
var inst_27237 = (state_27278[(19)]);
var inst_27240 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27237);
var state_27278__$1 = state_27278;
var statearr_27336_27391 = state_27278__$1;
(statearr_27336_27391[(2)] = inst_27240);

(statearr_27336_27391[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (16))){
var inst_27204 = (state_27278[(23)]);
var inst_27206 = (function (){var all_files = inst_27204;
return ((function (all_files,inst_27204,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files){
return (function (p1__26949_SHARP_){
return cljs.core.update_in.call(null,p1__26949_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27204,state_val_27279,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files))
})();
var inst_27207 = cljs.core.map.call(null,inst_27206,inst_27204);
var state_27278__$1 = state_27278;
var statearr_27337_27392 = state_27278__$1;
(statearr_27337_27392[(2)] = inst_27207);

(statearr_27337_27392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (30))){
var state_27278__$1 = state_27278;
var statearr_27338_27393 = state_27278__$1;
(statearr_27338_27393[(2)] = null);

(statearr_27338_27393[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (10))){
var inst_27178 = (state_27278[(26)]);
var inst_27180 = cljs.core.chunked_seq_QMARK_.call(null,inst_27178);
var state_27278__$1 = state_27278;
if(inst_27180){
var statearr_27339_27394 = state_27278__$1;
(statearr_27339_27394[(1)] = (13));

} else {
var statearr_27340_27395 = state_27278__$1;
(statearr_27340_27395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (18))){
var inst_27211 = (state_27278[(15)]);
var inst_27210 = (state_27278[(16)]);
var inst_27210__$1 = (state_27278[(2)]);
var inst_27211__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27210__$1);
var inst_27212 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27211__$1);
var state_27278__$1 = (function (){var statearr_27341 = state_27278;
(statearr_27341[(15)] = inst_27211__$1);

(statearr_27341[(16)] = inst_27210__$1);

return statearr_27341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27278__$1,(19),inst_27212);
} else {
if((state_val_27279 === (37))){
var inst_27273 = (state_27278[(2)]);
var state_27278__$1 = state_27278;
var statearr_27342_27396 = state_27278__$1;
(statearr_27342_27396[(2)] = inst_27273);

(statearr_27342_27396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (8))){
var inst_27178 = (state_27278[(26)]);
var inst_27165 = (state_27278[(10)]);
var inst_27178__$1 = cljs.core.seq.call(null,inst_27165);
var state_27278__$1 = (function (){var statearr_27343 = state_27278;
(statearr_27343[(26)] = inst_27178__$1);

return statearr_27343;
})();
if(inst_27178__$1){
var statearr_27344_27397 = state_27278__$1;
(statearr_27344_27397[(1)] = (10));

} else {
var statearr_27345_27398 = state_27278__$1;
(statearr_27345_27398[(1)] = (11));

}

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
}
}
}
});})(c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files))
;
return ((function (switch__14977__auto__,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_27349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27349[(0)] = state_machine__14978__auto__);

(statearr_27349[(1)] = (1));

return statearr_27349;
});
var state_machine__14978__auto____1 = (function (state_27278){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_27278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e27350){if((e27350 instanceof Object)){
var ex__14981__auto__ = e27350;
var statearr_27351_27399 = state_27278;
(statearr_27351_27399[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27400 = state_27278;
state_27278 = G__27400;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_27278){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_27278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files))
})();
var state__15035__auto__ = (function (){var statearr_27352 = f__15034__auto__.call(null);
(statearr_27352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_27352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__,map__27153,map__27153__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__27154,map__27154__$1,msg,files))
);

return c__15033__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__27403,link){
var map__27405 = p__27403;
var map__27405__$1 = ((cljs.core.seq_QMARK_.call(null,map__27405))?cljs.core.apply.call(null,cljs.core.hash_map,map__27405):map__27405);
var file = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__27405,map__27405__$1,file){
return (function (p1__27401_SHARP_,p2__27402_SHARP_){
if(cljs.core._EQ_.call(null,p1__27401_SHARP_,p2__27402_SHARP_)){
return p1__27401_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__27405,map__27405__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27409){
var map__27410 = p__27409;
var map__27410__$1 = ((cljs.core.seq_QMARK_.call(null,map__27410))?cljs.core.apply.call(null,cljs.core.hash_map,map__27410):map__27410);
var current_url_length = cljs.core.get.call(null,map__27410__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__27410__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27406_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27406_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__27411){
var map__27413 = p__27411;
var map__27413__$1 = ((cljs.core.seq_QMARK_.call(null,map__27413))?cljs.core.apply.call(null,cljs.core.hash_map,map__27413):map__27413);
var f_data = map__27413__$1;
var request_url = cljs.core.get.call(null,map__27413__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__27413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__12169__auto__ = request_url;
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__27414,files_msg){
var map__27436 = p__27414;
var map__27436__$1 = ((cljs.core.seq_QMARK_.call(null,map__27436))?cljs.core.apply.call(null,cljs.core.hash_map,map__27436):map__27436);
var opts = map__27436__$1;
var on_cssload = cljs.core.get.call(null,map__27436__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27437_27457 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27438_27458 = null;
var count__27439_27459 = (0);
var i__27440_27460 = (0);
while(true){
if((i__27440_27460 < count__27439_27459)){
var f_27461 = cljs.core._nth.call(null,chunk__27438_27458,i__27440_27460);
figwheel.client.file_reloading.reload_css_file.call(null,f_27461);

var G__27462 = seq__27437_27457;
var G__27463 = chunk__27438_27458;
var G__27464 = count__27439_27459;
var G__27465 = (i__27440_27460 + (1));
seq__27437_27457 = G__27462;
chunk__27438_27458 = G__27463;
count__27439_27459 = G__27464;
i__27440_27460 = G__27465;
continue;
} else {
var temp__4126__auto___27466 = cljs.core.seq.call(null,seq__27437_27457);
if(temp__4126__auto___27466){
var seq__27437_27467__$1 = temp__4126__auto___27466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27437_27467__$1)){
var c__12956__auto___27468 = cljs.core.chunk_first.call(null,seq__27437_27467__$1);
var G__27469 = cljs.core.chunk_rest.call(null,seq__27437_27467__$1);
var G__27470 = c__12956__auto___27468;
var G__27471 = cljs.core.count.call(null,c__12956__auto___27468);
var G__27472 = (0);
seq__27437_27457 = G__27469;
chunk__27438_27458 = G__27470;
count__27439_27459 = G__27471;
i__27440_27460 = G__27472;
continue;
} else {
var f_27473 = cljs.core.first.call(null,seq__27437_27467__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27473);

var G__27474 = cljs.core.next.call(null,seq__27437_27467__$1);
var G__27475 = null;
var G__27476 = (0);
var G__27477 = (0);
seq__27437_27457 = G__27474;
chunk__27438_27458 = G__27475;
count__27439_27459 = G__27476;
i__27440_27460 = G__27477;
continue;
}
} else {
}
}
break;
}

var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__,map__27436,map__27436__$1,opts,on_cssload){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__,map__27436,map__27436__$1,opts,on_cssload){
return (function (state_27447){
var state_val_27448 = (state_27447[(1)]);
if((state_val_27448 === (2))){
var inst_27443 = (state_27447[(2)]);
var inst_27444 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27445 = on_cssload.call(null,inst_27444);
var state_27447__$1 = (function (){var statearr_27449 = state_27447;
(statearr_27449[(7)] = inst_27443);

return statearr_27449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27447__$1,inst_27445);
} else {
if((state_val_27448 === (1))){
var inst_27441 = cljs.core.async.timeout.call(null,(100));
var state_27447__$1 = state_27447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27447__$1,(2),inst_27441);
} else {
return null;
}
}
});})(c__15033__auto__,map__27436,map__27436__$1,opts,on_cssload))
;
return ((function (switch__14977__auto__,c__15033__auto__,map__27436,map__27436__$1,opts,on_cssload){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_27453 = [null,null,null,null,null,null,null,null];
(statearr_27453[(0)] = state_machine__14978__auto__);

(statearr_27453[(1)] = (1));

return statearr_27453;
});
var state_machine__14978__auto____1 = (function (state_27447){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_27447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e27454){if((e27454 instanceof Object)){
var ex__14981__auto__ = e27454;
var statearr_27455_27478 = state_27447;
(statearr_27455_27478[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27479 = state_27447;
state_27447 = G__27479;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_27447){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_27447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__,map__27436,map__27436__$1,opts,on_cssload))
})();
var state__15035__auto__ = (function (){var statearr_27456 = f__15034__auto__.call(null);
(statearr_27456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_27456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__,map__27436,map__27436__$1,opts,on_cssload))
);

return c__15033__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map