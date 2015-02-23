// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.call(null,null));
}
});
reagent.impl.component.as_element = (function as_element(x){
return reagent.impl.template.as_element(x);
});
reagent.impl.component.do_render = (function do_render(c){
var _STAR_current_component_STAR_19228 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?f.call(null,c):(function (){var argv = (p["argv"]);
var n = cljs.core.count.call(null,argv);
var G__19229 = n;
switch (G__19229) {
case (1):
return f.call(null);

break;
case (2):
return f.call(null,cljs.core.nth.call(null,argv,(1)));

break;
case (3):
return f.call(null,cljs.core.nth.call(null,argv,(1)),cljs.core.nth.call(null,argv,(2)));

break;
case (4):
return f.call(null,cljs.core.nth.call(null,argv,(1)),cljs.core.nth.call(null,argv,(2)),cljs.core.nth.call(null,argv,(3)));

break;
case (5):
return f.call(null,cljs.core.nth.call(null,argv,(1)),cljs.core.nth.call(null,argv,(2)),cljs.core.nth.call(null,argv,(3)),cljs.core.nth.call(null,argv,(4)));

break;
default:
return cljs.core.apply.call(null,f,cljs.core.subvec.call(null,argv,(1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
(c["cljsRender"] = res);

return do_render.call(null,c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_19228;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var c = this;
if(cljs.core.not.call(null,reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively.call(null,c,((function (c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(c))
);
} else {
return reagent.impl.component.do_render.call(null,c);
}
})], null);
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){
var G__19232 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__19232) {
case "componentWillUnmount":
return ((function (G__19232){
return (function (){
var c = this;
reagent.impl.batching.dispose.call(null,c);

if((f == null)){
return null;
} else {
return f.call(null,c);
}
});
;})(G__19232))

break;
case "componentWillMount":
return ((function (G__19232){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(null,c);
}
});
;})(G__19232))

break;
case "componentDidUpdate":
return ((function (G__19232){
return (function (oldprops){
var c = this;
return f.call(null,c,(oldprops["argv"]));
});
;})(G__19232))

break;
case "componentWillUpdate":
return ((function (G__19232){
return (function (nextprops){
var c = this;
return f.call(null,c,(nextprops["argv"]));
});
;})(G__19232))

break;
case "shouldComponentUpdate":
return ((function (G__19232){
return (function (nextprops,nextstate){
var or__12169__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.call(null,old_argv,new_argv));
} else {
return f.call(null,c,old_argv,new_argv);
}
}
});
;})(G__19232))

break;
case "componentWillReceiveProps":
return ((function (G__19232){
return (function (props){
var c = this;
return f.call(null,c,(props["argv"]));
});
;})(G__19232))

break;
case "getInitialState":
return ((function (G__19232){
return (function (){
var c = this;
return cljs.core.reset_BANG_.call(null,reagent.impl.component.state_atom.call(null,c),f.call(null,c));
});
;})(G__19232))

break;
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));


break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){
if(cljs.core.ifn_QMARK_.call(null,f)){
return (function() { 
var G__19234__delegate = function (args){
var c = this;
return cljs.core.apply.call(null,f,c,args);
};
var G__19234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19235__i = 0, G__19235__a = new Array(arguments.length -  0);
while (G__19235__i < G__19235__a.length) {G__19235__a[G__19235__i] = arguments[G__19235__i + 0]; ++G__19235__i;}
  args = new cljs.core.IndexedSeq(G__19235__a,0);
} 
return G__19234__delegate.call(this,args);};
G__19234.cljs$lang$maxFixedArity = 0;
G__19234.cljs$lang$applyTo = (function (arglist__19236){
var args = cljs.core.seq(arglist__19236);
return G__19234__delegate(args);
});
G__19234.cljs$core$IFn$_invoke$arity$variadic = G__19234__delegate;
return G__19234;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cljsRender","cljsRender",247449928),null,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),null,new cljs.core.Keyword(null,"render","render",-1408033454),null,new cljs.core.Keyword(null,"cljsName","cljsName",999824949),null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){
if(cljs.core.fn_QMARK_.call(null,f)){
var G__19238 = f;
(G__19238["__reactDontBind"] = true);

return G__19238;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){
if(cljs.core.truth_(reagent.impl.component.dont_wrap.call(null,key))){
return reagent.impl.component.dont_bind.call(null,f);
} else {
var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__12157__auto__ = wrap;
if(cljs.core.truth_(and__12157__auto__)){
return f;
} else {
return and__12157__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}
} else {
}

var or__12169__auto__ = wrap;
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return reagent.impl.component.default_wrapper.call(null,f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){
return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.call(null,fun_map,new cljs.core.Keyword(null,"cljsRender","cljsRender",247449928),render_f,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns));
return cljs.core.assoc.call(null,fm,new cljs.core.Keyword(null,"cljsName","cljsName",999824949),((function (fm){
return (function (){
return name;
});})(fm))
);

});
reagent.impl.component.fun_name = (function fun_name(f){
var or__12169__auto__ = (function (){var and__12157__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(and__12157__auto__){
var or__12169__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return (f["name"]);
}
} else {
return and__12157__auto__;
}
})();
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (function (){var and__12157__auto__ = (function (){var G__19246 = f;
if(G__19246){
var bit__12843__auto__ = (G__19246.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__12843__auto__) || (G__19246.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__12157__auto__){
return cljs.core.name.call(null,f);
} else {
return and__12157__auto__;
}
})();
if(cljs.core.truth_(or__12169__auto____$1)){
return or__12169__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function wrap_funs(fmap){
var fun_map = (function (){var temp__4128__auto__ = new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4128__auto__ == null)){
return fmap;
} else {
var cf = temp__4128__auto__;
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,fmap,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),cf),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104));
}
})();
var render_fun = (function (){var or__12169__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_.call(null,render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.call(null,render_fun))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))))].join('')))})());
var name = [cljs.core.str((function (){var or__12169__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return reagent.impl.component.fun_name.call(null,render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_.call(null,name))?[cljs.core.str(cljs.core.gensym.call(null,"reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render.call(null,cljs.core.assoc.call(null,fun_map,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv.call(null,((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__19248 = o;
(G__19248[cljs.core.name.call(null,k)] = v);

return G__19248;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){
return reagent.impl.component.map_to_js.call(null,reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body))));
});
reagent.impl.component.create_class = (function create_class(body){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))))].join('')));
}

var spec = reagent.impl.component.cljsify.call(null,body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__19249__delegate = function (args){
return reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__19249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19250__i = 0, G__19250__a = new Array(arguments.length -  0);
while (G__19250__i < G__19250__a.length) {G__19250__a[G__19250__i] = arguments[G__19250__i + 0]; ++G__19250__i;}
  args = new cljs.core.IndexedSeq(G__19250__a,0);
} 
return G__19249__delegate.call(this,args);};
G__19249.cljs$lang$maxFixedArity = 0;
G__19249.cljs$lang$applyTo = (function (arglist__19251){
var args = cljs.core.seq(arglist__19251);
return G__19249__delegate(args);
});
G__19249.cljs$core$IFn$_invoke$arity$variadic = G__19249__delegate;
return G__19249;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class.call(null,f,res);

reagent.impl.util.cache_react_class.call(null,res,res);

return f;
});
reagent.impl.component.comp_name = (function comp_name(){
var n = (function (){var G__19253 = reagent.impl.component._STAR_current_component_STAR_;
var G__19253__$1 = (((G__19253 == null))?null:(G__19253["cljsName"])());
return G__19253__$1;
})();
if(!(cljs.core.empty_QMARK_.call(null,n))){
return [cljs.core.str(" (in "),cljs.core.str(n),cljs.core.str(")")].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function shallow_obj_to_map(o){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__12925__auto__ = (function iter__19258(s__19259){
return (new cljs.core.LazySeq(null,(function (){
var s__19259__$1 = s__19259;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19259__$1);
if(temp__4126__auto__){
var s__19259__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19259__$2)){
var c__12923__auto__ = cljs.core.chunk_first.call(null,s__19259__$2);
var size__12924__auto__ = cljs.core.count.call(null,c__12923__auto__);
var b__19261 = cljs.core.chunk_buffer.call(null,size__12924__auto__);
if((function (){var i__19260 = (0);
while(true){
if((i__19260 < size__12924__auto__)){
var k = cljs.core._nth.call(null,c__12923__auto__,i__19260);
cljs.core.chunk_append.call(null,b__19261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(o[k])], null));

var G__19262 = (i__19260 + (1));
i__19260 = G__19262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19261),iter__19258.call(null,cljs.core.chunk_rest.call(null,s__19259__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19261),null);
}
} else {
var k = cljs.core.first.call(null,s__19259__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(o[k])], null),iter__19258.call(null,cljs.core.rest.call(null,s__19259__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__12925__auto__.call(null,cljs.core.js_keys.call(null,o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reactify_component(comp){
return (React["createClass"])({"render": (function (){
var this$ = this;
return reagent.impl.component.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.call(null,reagent.impl.component.shallow_obj_to_map.call(null,(this$["props"])),new cljs.core.Keyword(null,"-elem-count","-elem-count",663797079),reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
}), "displayName": "react-wrapper"});
});

//# sourceMappingURL=component.js.map