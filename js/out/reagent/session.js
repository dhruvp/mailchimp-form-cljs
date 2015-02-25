// Compiled by ClojureScript 0.0-2934 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get = (function() { 
var get__delegate = function (k,p__1879){
var vec__1881 = p__1879;
var default$ = cljs.core.nth.call(null,vec__1881,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__1879 = null;
if (arguments.length > 1) {
var G__1882__i = 0, G__1882__a = new Array(arguments.length -  1);
while (G__1882__i < G__1882__a.length) {G__1882__a[G__1882__i] = arguments[G__1882__i + 1]; ++G__1882__i;}
  p__1879 = new cljs.core.IndexedSeq(G__1882__a,0);
} 
return get__delegate.call(this,k,p__1879);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__1883){
var k = cljs.core.first(arglist__1883);
var p__1879 = cljs.core.rest(arglist__1883);
return get__delegate(k,p__1879);
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
var get_in__delegate = function (ks,p__1884){
var vec__1886 = p__1884;
var default$ = cljs.core.nth.call(null,vec__1886,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__1884 = null;
if (arguments.length > 1) {
var G__1887__i = 0, G__1887__a = new Array(arguments.length -  1);
while (G__1887__i < G__1887__a.length) {G__1887__a[G__1887__i] = arguments[G__1887__i + 1]; ++G__1887__i;}
  p__1884 = new cljs.core.IndexedSeq(G__1887__a,0);
} 
return get_in__delegate.call(this,ks,p__1884);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__1888){
var ks = cljs.core.first(arglist__1888);
var p__1884 = cljs.core.rest(arglist__1888);
return get_in__delegate(ks,p__1884);
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
var G__1889__i = 0, G__1889__a = new Array(arguments.length -  1);
while (G__1889__i < G__1889__a.length) {G__1889__a[G__1889__i] = arguments[G__1889__i + 1]; ++G__1889__i;}
  args = new cljs.core.IndexedSeq(G__1889__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__1890){
var f = cljs.core.first(arglist__1890);
var args = cljs.core.rest(arglist__1890);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__1891_SHARP_){
return cljs.core.assoc_in.call(null,p1__1891_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__1892){
var vec__1894 = p__1892;
var default$ = cljs.core.nth.call(null,vec__1894,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__1892 = null;
if (arguments.length > 1) {
var G__1895__i = 0, G__1895__a = new Array(arguments.length -  1);
while (G__1895__i < G__1895__a.length) {G__1895__a[G__1895__i] = arguments[G__1895__i + 1]; ++G__1895__i;}
  p__1892 = new cljs.core.IndexedSeq(G__1895__a,0);
} 
return get_BANG___delegate.call(this,k,p__1892);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__1896){
var k = cljs.core.first(arglist__1896);
var p__1892 = cljs.core.rest(arglist__1896);
return get_BANG___delegate(k,p__1892);
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
var get_in_BANG___delegate = function (ks,p__1897){
var vec__1899 = p__1897;
var default$ = cljs.core.nth.call(null,vec__1899,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__1897 = null;
if (arguments.length > 1) {
var G__1900__i = 0, G__1900__a = new Array(arguments.length -  1);
while (G__1900__i < G__1900__a.length) {G__1900__a[G__1900__i] = arguments[G__1900__i + 1]; ++G__1900__i;}
  p__1897 = new cljs.core.IndexedSeq(G__1900__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__1897);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__1901){
var ks = cljs.core.first(arglist__1901);
var p__1897 = cljs.core.rest(arglist__1901);
return get_in_BANG___delegate(ks,p__1897);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__1902_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__1902_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__1903__i = 0, G__1903__a = new Array(arguments.length -  2);
while (G__1903__i < G__1903__a.length) {G__1903__a[G__1903__i] = arguments[G__1903__i + 2]; ++G__1903__i;}
  args = new cljs.core.IndexedSeq(G__1903__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__1904){
var ks = cljs.core.first(arglist__1904);
arglist__1904 = cljs.core.next(arglist__1904);
var f = cljs.core.first(arglist__1904);
var args = cljs.core.rest(arglist__1904);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;
