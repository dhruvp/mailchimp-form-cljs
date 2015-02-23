// Compiled by ClojureScript 0.0-2850 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__27482_SHARP_){
return (max === p1__27482_SHARP_);
});})(max))
,coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var union__1 = (function (s1){
return s1;
});
var union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__3 = (function() { 
var G__27483__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__27483 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__27484__i = 0, G__27484__a = new Array(arguments.length -  2);
while (G__27484__i < G__27484__a.length) {G__27484__a[G__27484__i] = arguments[G__27484__i + 2]; ++G__27484__i;}
  sets = new cljs.core.IndexedSeq(G__27484__a,0);
} 
return G__27483__delegate.call(this,s1,s2,sets);};
G__27483.cljs$lang$maxFixedArity = 2;
G__27483.cljs$lang$applyTo = (function (arglist__27485){
var s1 = cljs.core.first(arglist__27485);
arglist__27485 = cljs.core.next(arglist__27485);
var s2 = cljs.core.first(arglist__27485);
var sets = cljs.core.rest(arglist__27485);
return G__27483__delegate(s1,s2,sets);
});
G__27483.cljs$core$IFn$_invoke$arity$variadic = G__27483__delegate;
return G__27483;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return union__0.call(this);
case 1:
return union__1.call(this,s1);
case 2:
return union__2.call(this,s1,s2);
default:
var G__27486 = null;
if (arguments.length > 2) {
var G__27487__i = 0, G__27487__a = new Array(arguments.length -  2);
while (G__27487__i < G__27487__a.length) {G__27487__a[G__27487__i] = arguments[G__27487__i + 2]; ++G__27487__i;}
G__27486 = new cljs.core.IndexedSeq(G__27487__a,0);
}
return union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__27486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3.cljs$lang$applyTo;
union.cljs$core$IFn$_invoke$arity$0 = union__0;
union.cljs$core$IFn$_invoke$arity$1 = union__1;
union.cljs$core$IFn$_invoke$arity$2 = union__2;
union.cljs$core$IFn$_invoke$arity$variadic = union__3.cljs$core$IFn$_invoke$arity$variadic;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__1 = (function (s1){
return s1;
});
var intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__27489 = s2;
var G__27490 = s1;
s1 = G__27489;
s2 = G__27490;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3 = (function() { 
var G__27491__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__27488_SHARP_){
return (- cljs.core.count.call(null,p1__27488_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__27491 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__27492__i = 0, G__27492__a = new Array(arguments.length -  2);
while (G__27492__i < G__27492__a.length) {G__27492__a[G__27492__i] = arguments[G__27492__i + 2]; ++G__27492__i;}
  sets = new cljs.core.IndexedSeq(G__27492__a,0);
} 
return G__27491__delegate.call(this,s1,s2,sets);};
G__27491.cljs$lang$maxFixedArity = 2;
G__27491.cljs$lang$applyTo = (function (arglist__27493){
var s1 = cljs.core.first(arglist__27493);
arglist__27493 = cljs.core.next(arglist__27493);
var s2 = cljs.core.first(arglist__27493);
var sets = cljs.core.rest(arglist__27493);
return G__27491__delegate(s1,s2,sets);
});
G__27491.cljs$core$IFn$_invoke$arity$variadic = G__27491__delegate;
return G__27491;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return intersection__1.call(this,s1);
case 2:
return intersection__2.call(this,s1,s2);
default:
var G__27494 = null;
if (arguments.length > 2) {
var G__27495__i = 0, G__27495__a = new Array(arguments.length -  2);
while (G__27495__i < G__27495__a.length) {G__27495__a[G__27495__i] = arguments[G__27495__i + 2]; ++G__27495__i;}
G__27494 = new cljs.core.IndexedSeq(G__27495__a,0);
}
return intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__27494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3.cljs$lang$applyTo;
intersection.cljs$core$IFn$_invoke$arity$1 = intersection__1;
intersection.cljs$core$IFn$_invoke$arity$2 = intersection__2;
intersection.cljs$core$IFn$_invoke$arity$variadic = intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__1 = (function (s1){
return s1;
});
var difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var difference__3 = (function() { 
var G__27496__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__27496 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__27497__i = 0, G__27497__a = new Array(arguments.length -  2);
while (G__27497__i < G__27497__a.length) {G__27497__a[G__27497__i] = arguments[G__27497__i + 2]; ++G__27497__i;}
  sets = new cljs.core.IndexedSeq(G__27497__a,0);
} 
return G__27496__delegate.call(this,s1,s2,sets);};
G__27496.cljs$lang$maxFixedArity = 2;
G__27496.cljs$lang$applyTo = (function (arglist__27498){
var s1 = cljs.core.first(arglist__27498);
arglist__27498 = cljs.core.next(arglist__27498);
var s2 = cljs.core.first(arglist__27498);
var sets = cljs.core.rest(arglist__27498);
return G__27496__delegate(s1,s2,sets);
});
G__27496.cljs$core$IFn$_invoke$arity$variadic = G__27496__delegate;
return G__27496;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return difference__1.call(this,s1);
case 2:
return difference__2.call(this,s1,s2);
default:
var G__27499 = null;
if (arguments.length > 2) {
var G__27500__i = 0, G__27500__a = new Array(arguments.length -  2);
while (G__27500__i < G__27500__a.length) {G__27500__a[G__27500__i] = arguments[G__27500__i + 2]; ++G__27500__i;}
G__27499 = new cljs.core.IndexedSeq(G__27500__a,0);
}
return difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__27499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3.cljs$lang$applyTo;
difference.cljs$core$IFn$_invoke$arity$1 = difference__1;
difference.cljs$core$IFn$_invoke$arity$2 = difference__2;
difference.cljs$core$IFn$_invoke$arity$variadic = difference__3.cljs$core$IFn$_invoke$arity$variadic;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__27501_SHARP_){
return cljs.core.select_keys.call(null,p1__27501_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__27504){
var vec__27505 = p__27504;
var old = cljs.core.nth.call(null,vec__27505,(0),null);
var new$ = cljs.core.nth.call(null,vec__27505,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__27506_SHARP_){
return clojure.set.rename_keys.call(null,p1__27506_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__27509){
var vec__27510 = p__27509;
var k = cljs.core.nth.call(null,vec__27510,(0),null);
var v = cljs.core.nth.call(null,vec__27510,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__27517 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__27517,(0),null);
var s = cljs.core.nth.call(null,vec__27517,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__27517,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__27517,r,s,idx){
return (function (p1__27511_SHARP_,p2__27512_SHARP_){
return cljs.core.conj.call(null,p1__27511_SHARP_,cljs.core.merge.call(null,p2__27512_SHARP_,x));
});})(found,ks,vec__27517,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__27517,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var join__3 = (function (xrel,yrel,km){
var vec__27518 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__27518,(0),null);
var s = cljs.core.nth.call(null,vec__27518,(1),null);
var k = cljs.core.nth.call(null,vec__27518,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__27518,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__27518,r,s,k,idx){
return (function (p1__27513_SHARP_,p2__27514_SHARP_){
return cljs.core.conj.call(null,p1__27513_SHARP_,cljs.core.merge.call(null,p2__27514_SHARP_,x));
});})(found,vec__27518,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__27518,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return join__2.call(this,xrel,yrel);
case 3:
return join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$2 = join__2;
join.cljs$core$IFn$_invoke$arity$3 = join__3;
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__27519_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__27519_SHARP_);
}),set1));
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__27520_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__27520_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map