// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26784_26788 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26785_26789 = null;
var count__26786_26790 = (0);
var i__26787_26791 = (0);
while(true){
if((i__26787_26791 < count__26786_26790)){
var f_26792 = cljs.core._nth.call(null,chunk__26785_26789,i__26787_26791);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_26792);

var G__26793 = seq__26784_26788;
var G__26794 = chunk__26785_26789;
var G__26795 = count__26786_26790;
var G__26796 = (i__26787_26791 + (1));
seq__26784_26788 = G__26793;
chunk__26785_26789 = G__26794;
count__26786_26790 = G__26795;
i__26787_26791 = G__26796;
continue;
} else {
var temp__4126__auto___26797 = cljs.core.seq.call(null,seq__26784_26788);
if(temp__4126__auto___26797){
var seq__26784_26798__$1 = temp__4126__auto___26797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26784_26798__$1)){
var c__12956__auto___26799 = cljs.core.chunk_first.call(null,seq__26784_26798__$1);
var G__26800 = cljs.core.chunk_rest.call(null,seq__26784_26798__$1);
var G__26801 = c__12956__auto___26799;
var G__26802 = cljs.core.count.call(null,c__12956__auto___26799);
var G__26803 = (0);
seq__26784_26788 = G__26800;
chunk__26785_26789 = G__26801;
count__26786_26790 = G__26802;
i__26787_26791 = G__26803;
continue;
} else {
var f_26804 = cljs.core.first.call(null,seq__26784_26798__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_26804);

var G__26805 = cljs.core.next.call(null,seq__26784_26798__$1);
var G__26806 = null;
var G__26807 = (0);
var G__26808 = (0);
seq__26784_26788 = G__26805;
chunk__26785_26789 = G__26806;
count__26786_26790 = G__26807;
i__26787_26791 = G__26808;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map