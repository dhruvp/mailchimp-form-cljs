// Compiled by ClojureScript 0.0-2850 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get = (function() { 
var get__delegate = function (k,p__19176){
var vec__19178 = p__19176;
var default$ = cljs.core.nth.call(null,vec__19178,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__19176 = null;
if (arguments.length > 1) {
var G__19179__i = 0, G__19179__a = new Array(arguments.length -  1);
while (G__19179__i < G__19179__a.length) {G__19179__a[G__19179__i] = arguments[G__19179__i + 1]; ++G__19179__i;}
  p__19176 = new cljs.core.IndexedSeq(G__19179__a,0);
} 
return get__delegate.call(this,k,p__19176);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__19180){
var k = cljs.core.first(arglist__19180);
var p__19176 = cljs.core.rest(arglist__19180);
return get__delegate(k,p__19176);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
reagent.session.put_BANG_ = (function put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
* Gets the value at the path specified by the vector ks from the session,
* returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get_in = (function() { 
var get_in__delegate = function (ks,p__19181){
var vec__19183 = p__19181;
var default$ = cljs.core.nth.call(null,vec__19183,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__19181 = null;
if (arguments.length > 1) {
var G__19184__i = 0, G__19184__a = new Array(arguments.length -  1);
while (G__19184__i < G__19184__a.length) {G__19184__a[G__19184__i] = arguments[G__19184__i + 1]; ++G__19184__i;}
  p__19181 = new cljs.core.IndexedSeq(G__19184__a,0);
} 
return get_in__delegate.call(this,ks,p__19181);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__19185){
var ks = cljs.core.first(arglist__19185);
var p__19181 = cljs.core.rest(arglist__19185);
return get_in__delegate(ks,p__19181);
});
get_in.cljs$core$IFn$_invoke$arity$variadic = get_in__delegate;
return get_in;
})()
;
/**
* Replace the current session's value with the result of executing f with
* the current value and args.
* @param {...*} var_args
*/
reagent.session.swap_BANG_ = (function() { 
var swap_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
};
var swap_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__19186__i = 0, G__19186__a = new Array(arguments.length -  1);
while (G__19186__i < G__19186__a.length) {G__19186__a[G__19186__i] = arguments[G__19186__i + 1]; ++G__19186__i;}
  args = new cljs.core.IndexedSeq(G__19186__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__19187){
var f = cljs.core.first(arglist__19187);
var args = cljs.core.rest(arglist__19187);
return swap_BANG___delegate(f,args);
});
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___delegate;
return swap_BANG_;
})()
;
/**
* Remove all data from the session and start over cleanly.
*/
reagent.session.clear_BANG_ = (function clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
* Remove a key from the session
*/
reagent.session.remove_BANG_ = (function remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
* Associates a value in the session, where ks is a
* sequence of keys and v is the new value and returns
* a new nested structure. If any levels do not exist,
* hash-maps will be created.
*/
reagent.session.assoc_in_BANG_ = (function assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__19188_SHARP_){
return cljs.core.assoc_in.call(null,p1__19188_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__19189){
var vec__19191 = p__19189;
var default$ = cljs.core.nth.call(null,vec__19191,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__19189 = null;
if (arguments.length > 1) {
var G__19192__i = 0, G__19192__a = new Array(arguments.length -  1);
while (G__19192__i < G__19192__a.length) {G__19192__a[G__19192__i] = arguments[G__19192__i + 1]; ++G__19192__i;}
  p__19189 = new cljs.core.IndexedSeq(G__19192__a,0);
} 
return get_BANG___delegate.call(this,k,p__19189);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__19193){
var k = cljs.core.first(arglist__19193);
var p__19189 = cljs.core.rest(arglist__19193);
return get_BANG___delegate(k,p__19189);
});
get_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_BANG___delegate;
return get_BANG_;
})()
;
/**
* Destructive get from the session. This returns the current value of the path
* specified by the vector ks and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_in_BANG_ = (function() { 
var get_in_BANG___delegate = function (ks,p__19194){
var vec__19196 = p__19194;
var default$ = cljs.core.nth.call(null,vec__19196,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__19194 = null;
if (arguments.length > 1) {
var G__19197__i = 0, G__19197__a = new Array(arguments.length -  1);
while (G__19197__i < G__19197__a.length) {G__19197__a[G__19197__i] = arguments[G__19197__i + 1]; ++G__19197__i;}
  p__19194 = new cljs.core.IndexedSeq(G__19197__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__19194);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__19198){
var ks = cljs.core.first(arglist__19198);
var p__19194 = cljs.core.rest(arglist__19198);
return get_in_BANG___delegate(ks,p__19194);
});
get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_in_BANG___delegate;
return get_in_BANG_;
})()
;
/**
* 'Updates' a value in the session, where ks is a
* sequence of keys and f is a function that will
* take the old value along with any supplied args and return
* the new value. If any levels do not exist, hash-maps
* will be created.
* @param {...*} var_args
*/
reagent.session.update_in_BANG_ = (function() { 
var update_in_BANG___delegate = function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__19199_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__19199_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__19200__i = 0, G__19200__a = new Array(arguments.length -  2);
while (G__19200__i < G__19200__a.length) {G__19200__a[G__19200__i] = arguments[G__19200__i + 2]; ++G__19200__i;}
  args = new cljs.core.IndexedSeq(G__19200__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__19201){
var ks = cljs.core.first(arglist__19201);
arglist__19201 = cljs.core.next(arglist__19201);
var f = cljs.core.first(arglist__19201);
var args = cljs.core.rest(arglist__19201);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map