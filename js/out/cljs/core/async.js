// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t27526 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27526 = (function (f,fn_handler,meta27527){
this.f = f;
this.fn_handler = fn_handler;
this.meta27527 = meta27527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27526.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27528){
var self__ = this;
var _27528__$1 = this;
return self__.meta27527;
});

cljs.core.async.t27526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27528,meta27527__$1){
var self__ = this;
var _27528__$1 = this;
return (new cljs.core.async.t27526(self__.f,self__.fn_handler,meta27527__$1));
});

cljs.core.async.t27526.cljs$lang$type = true;

cljs.core.async.t27526.cljs$lang$ctorStr = "cljs.core.async/t27526";

cljs.core.async.t27526.cljs$lang$ctorPrWriter = (function (this__12756__auto__,writer__12757__auto__,opt__12758__auto__){
return cljs.core._write.call(null,writer__12757__auto__,"cljs.core.async/t27526");
});

cljs.core.async.__GT_t27526 = (function __GT_t27526(f__$1,fn_handler__$1,meta27527){
return (new cljs.core.async.t27526(f__$1,fn_handler__$1,meta27527));
});

}

return (new cljs.core.async.t27526(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__27530 = buff;
if(G__27530){
var bit__12850__auto__ = null;
if(cljs.core.truth_((function (){var or__12169__auto__ = bit__12850__auto__;
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return G__27530.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27530.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27530);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27530);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27531 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27531);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27531,ret){
return (function (){
return fn1.call(null,val_27531);
});})(val_27531,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__13056__auto___27532 = n;
var x_27533 = (0);
while(true){
if((x_27533 < n__13056__auto___27532)){
(a[x_27533] = (0));

var G__27534 = (x_27533 + (1));
x_27533 = G__27534;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27535 = (i + (1));
i = G__27535;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27539 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27539 = (function (flag,alt_flag,meta27540){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27540 = meta27540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27539.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27541){
var self__ = this;
var _27541__$1 = this;
return self__.meta27540;
});})(flag))
;

cljs.core.async.t27539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27541,meta27540__$1){
var self__ = this;
var _27541__$1 = this;
return (new cljs.core.async.t27539(self__.flag,self__.alt_flag,meta27540__$1));
});})(flag))
;

cljs.core.async.t27539.cljs$lang$type = true;

cljs.core.async.t27539.cljs$lang$ctorStr = "cljs.core.async/t27539";

cljs.core.async.t27539.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12756__auto__,writer__12757__auto__,opt__12758__auto__){
return cljs.core._write.call(null,writer__12757__auto__,"cljs.core.async/t27539");
});})(flag))
;

cljs.core.async.__GT_t27539 = ((function (flag){
return (function __GT_t27539(flag__$1,alt_flag__$1,meta27540){
return (new cljs.core.async.t27539(flag__$1,alt_flag__$1,meta27540));
});})(flag))
;

}

return (new cljs.core.async.t27539(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t27545 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27545 = (function (cb,flag,alt_handler,meta27546){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27546 = meta27546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27545.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27547){
var self__ = this;
var _27547__$1 = this;
return self__.meta27546;
});

cljs.core.async.t27545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27547,meta27546__$1){
var self__ = this;
var _27547__$1 = this;
return (new cljs.core.async.t27545(self__.cb,self__.flag,self__.alt_handler,meta27546__$1));
});

cljs.core.async.t27545.cljs$lang$type = true;

cljs.core.async.t27545.cljs$lang$ctorStr = "cljs.core.async/t27545";

cljs.core.async.t27545.cljs$lang$ctorPrWriter = (function (this__12756__auto__,writer__12757__auto__,opt__12758__auto__){
return cljs.core._write.call(null,writer__12757__auto__,"cljs.core.async/t27545");
});

cljs.core.async.__GT_t27545 = (function __GT_t27545(cb__$1,flag__$1,alt_handler__$1,meta27546){
return (new cljs.core.async.t27545(cb__$1,flag__$1,alt_handler__$1,meta27546));
});

}

return (new cljs.core.async.t27545(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27548_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27548_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27549_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27549_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12169__auto__ = wport;
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27550 = (i + (1));
i = G__27550;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12169__auto__ = ret;
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12157__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12157__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12157__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__27551){
var map__27553 = p__27551;
var map__27553__$1 = ((cljs.core.seq_QMARK_.call(null,map__27553))?cljs.core.apply.call(null,cljs.core.hash_map,map__27553):map__27553);
var opts = map__27553__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__27551 = null;
if (arguments.length > 1) {
var G__27554__i = 0, G__27554__a = new Array(arguments.length -  1);
while (G__27554__i < G__27554__a.length) {G__27554__a[G__27554__i] = arguments[G__27554__i + 1]; ++G__27554__i;}
  p__27551 = new cljs.core.IndexedSeq(G__27554__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__27551);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27555){
var ports = cljs.core.first(arglist__27555);
var p__27551 = cljs.core.rest(arglist__27555);
return alts_BANG___delegate(ports,p__27551);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__15033__auto___27650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___27650){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___27650){
return (function (state_27626){
var state_val_27627 = (state_27626[(1)]);
if((state_val_27627 === (7))){
var inst_27622 = (state_27626[(2)]);
var state_27626__$1 = state_27626;
var statearr_27628_27651 = state_27626__$1;
(statearr_27628_27651[(2)] = inst_27622);

(statearr_27628_27651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (1))){
var state_27626__$1 = state_27626;
var statearr_27629_27652 = state_27626__$1;
(statearr_27629_27652[(2)] = null);

(statearr_27629_27652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (4))){
var inst_27605 = (state_27626[(7)]);
var inst_27605__$1 = (state_27626[(2)]);
var inst_27606 = (inst_27605__$1 == null);
var state_27626__$1 = (function (){var statearr_27630 = state_27626;
(statearr_27630[(7)] = inst_27605__$1);

return statearr_27630;
})();
if(cljs.core.truth_(inst_27606)){
var statearr_27631_27653 = state_27626__$1;
(statearr_27631_27653[(1)] = (5));

} else {
var statearr_27632_27654 = state_27626__$1;
(statearr_27632_27654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (13))){
var state_27626__$1 = state_27626;
var statearr_27633_27655 = state_27626__$1;
(statearr_27633_27655[(2)] = null);

(statearr_27633_27655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (6))){
var inst_27605 = (state_27626[(7)]);
var state_27626__$1 = state_27626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27626__$1,(11),to,inst_27605);
} else {
if((state_val_27627 === (3))){
var inst_27624 = (state_27626[(2)]);
var state_27626__$1 = state_27626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27626__$1,inst_27624);
} else {
if((state_val_27627 === (12))){
var state_27626__$1 = state_27626;
var statearr_27634_27656 = state_27626__$1;
(statearr_27634_27656[(2)] = null);

(statearr_27634_27656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (2))){
var state_27626__$1 = state_27626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27626__$1,(4),from);
} else {
if((state_val_27627 === (11))){
var inst_27615 = (state_27626[(2)]);
var state_27626__$1 = state_27626;
if(cljs.core.truth_(inst_27615)){
var statearr_27635_27657 = state_27626__$1;
(statearr_27635_27657[(1)] = (12));

} else {
var statearr_27636_27658 = state_27626__$1;
(statearr_27636_27658[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (9))){
var state_27626__$1 = state_27626;
var statearr_27637_27659 = state_27626__$1;
(statearr_27637_27659[(2)] = null);

(statearr_27637_27659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (5))){
var state_27626__$1 = state_27626;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27638_27660 = state_27626__$1;
(statearr_27638_27660[(1)] = (8));

} else {
var statearr_27639_27661 = state_27626__$1;
(statearr_27639_27661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (14))){
var inst_27620 = (state_27626[(2)]);
var state_27626__$1 = state_27626;
var statearr_27640_27662 = state_27626__$1;
(statearr_27640_27662[(2)] = inst_27620);

(statearr_27640_27662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (10))){
var inst_27612 = (state_27626[(2)]);
var state_27626__$1 = state_27626;
var statearr_27641_27663 = state_27626__$1;
(statearr_27641_27663[(2)] = inst_27612);

(statearr_27641_27663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27627 === (8))){
var inst_27609 = cljs.core.async.close_BANG_.call(null,to);
var state_27626__$1 = state_27626;
var statearr_27642_27664 = state_27626__$1;
(statearr_27642_27664[(2)] = inst_27609);

(statearr_27642_27664[(1)] = (10));


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
});})(c__15033__auto___27650))
;
return ((function (switch__14977__auto__,c__15033__auto___27650){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_27646 = [null,null,null,null,null,null,null,null];
(statearr_27646[(0)] = state_machine__14978__auto__);

(statearr_27646[(1)] = (1));

return statearr_27646;
});
var state_machine__14978__auto____1 = (function (state_27626){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_27626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e27647){if((e27647 instanceof Object)){
var ex__14981__auto__ = e27647;
var statearr_27648_27665 = state_27626;
(statearr_27648_27665[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27666 = state_27626;
state_27626 = G__27666;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_27626){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_27626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___27650))
})();
var state__15035__auto__ = (function (){var statearr_27649 = f__15034__auto__.call(null);
(statearr_27649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___27650);

return statearr_27649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___27650))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27850){
var vec__27851 = p__27850;
var v = cljs.core.nth.call(null,vec__27851,(0),null);
var p = cljs.core.nth.call(null,vec__27851,(1),null);
var job = vec__27851;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15033__auto___28033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___28033,res,vec__27851,v,p,job,jobs,results){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___28033,res,vec__27851,v,p,job,jobs,results){
return (function (state_27856){
var state_val_27857 = (state_27856[(1)]);
if((state_val_27857 === (2))){
var inst_27853 = (state_27856[(2)]);
var inst_27854 = cljs.core.async.close_BANG_.call(null,res);
var state_27856__$1 = (function (){var statearr_27858 = state_27856;
(statearr_27858[(7)] = inst_27853);

return statearr_27858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27856__$1,inst_27854);
} else {
if((state_val_27857 === (1))){
var state_27856__$1 = state_27856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27856__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15033__auto___28033,res,vec__27851,v,p,job,jobs,results))
;
return ((function (switch__14977__auto__,c__15033__auto___28033,res,vec__27851,v,p,job,jobs,results){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_27862 = [null,null,null,null,null,null,null,null];
(statearr_27862[(0)] = state_machine__14978__auto__);

(statearr_27862[(1)] = (1));

return statearr_27862;
});
var state_machine__14978__auto____1 = (function (state_27856){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_27856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e27863){if((e27863 instanceof Object)){
var ex__14981__auto__ = e27863;
var statearr_27864_28034 = state_27856;
(statearr_27864_28034[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28035 = state_27856;
state_27856 = G__28035;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_27856){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_27856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___28033,res,vec__27851,v,p,job,jobs,results))
})();
var state__15035__auto__ = (function (){var statearr_27865 = f__15034__auto__.call(null);
(statearr_27865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___28033);

return statearr_27865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___28033,res,vec__27851,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27866){
var vec__27867 = p__27866;
var v = cljs.core.nth.call(null,vec__27867,(0),null);
var p = cljs.core.nth.call(null,vec__27867,(1),null);
var job = vec__27867;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__13056__auto___28036 = n;
var __28037 = (0);
while(true){
if((__28037 < n__13056__auto___28036)){
var G__27868_28038 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27868_28038) {
case "async":
var c__15033__auto___28040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28037,c__15033__auto___28040,G__27868_28038,n__13056__auto___28036,jobs,results,process,async){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (__28037,c__15033__auto___28040,G__27868_28038,n__13056__auto___28036,jobs,results,process,async){
return (function (state_27881){
var state_val_27882 = (state_27881[(1)]);
if((state_val_27882 === (7))){
var inst_27877 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27883_28041 = state_27881__$1;
(statearr_27883_28041[(2)] = inst_27877);

(statearr_27883_28041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (6))){
var state_27881__$1 = state_27881;
var statearr_27884_28042 = state_27881__$1;
(statearr_27884_28042[(2)] = null);

(statearr_27884_28042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (5))){
var state_27881__$1 = state_27881;
var statearr_27885_28043 = state_27881__$1;
(statearr_27885_28043[(2)] = null);

(statearr_27885_28043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (4))){
var inst_27871 = (state_27881[(2)]);
var inst_27872 = async.call(null,inst_27871);
var state_27881__$1 = state_27881;
if(cljs.core.truth_(inst_27872)){
var statearr_27886_28044 = state_27881__$1;
(statearr_27886_28044[(1)] = (5));

} else {
var statearr_27887_28045 = state_27881__$1;
(statearr_27887_28045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (3))){
var inst_27879 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27881__$1,inst_27879);
} else {
if((state_val_27882 === (2))){
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27881__$1,(4),jobs);
} else {
if((state_val_27882 === (1))){
var state_27881__$1 = state_27881;
var statearr_27888_28046 = state_27881__$1;
(statearr_27888_28046[(2)] = null);

(statearr_27888_28046[(1)] = (2));


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
});})(__28037,c__15033__auto___28040,G__27868_28038,n__13056__auto___28036,jobs,results,process,async))
;
return ((function (__28037,switch__14977__auto__,c__15033__auto___28040,G__27868_28038,n__13056__auto___28036,jobs,results,process,async){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_27892 = [null,null,null,null,null,null,null];
(statearr_27892[(0)] = state_machine__14978__auto__);

(statearr_27892[(1)] = (1));

return statearr_27892;
});
var state_machine__14978__auto____1 = (function (state_27881){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_27881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e27893){if((e27893 instanceof Object)){
var ex__14981__auto__ = e27893;
var statearr_27894_28047 = state_27881;
(statearr_27894_28047[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28048 = state_27881;
state_27881 = G__28048;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_27881){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_27881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(__28037,switch__14977__auto__,c__15033__auto___28040,G__27868_28038,n__13056__auto___28036,jobs,results,process,async))
})();
var state__15035__auto__ = (function (){var statearr_27895 = f__15034__auto__.call(null);
(statearr_27895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___28040);

return statearr_27895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(__28037,c__15033__auto___28040,G__27868_28038,n__13056__auto___28036,jobs,results,process,async))
);


break;
case "compute":
var c__15033__auto___28049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28037,c__15033__auto___28049,G__27868_28038,n__13056__auto___28036,jobs,results,process,async){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (__28037,c__15033__auto___28049,G__27868_28038,n__13056__auto___28036,jobs,results,process,async){
return (function (state_27908){
var state_val_27909 = (state_27908[(1)]);
if((state_val_27909 === (7))){
var inst_27904 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
var statearr_27910_28050 = state_27908__$1;
(statearr_27910_28050[(2)] = inst_27904);

(statearr_27910_28050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (6))){
var state_27908__$1 = state_27908;
var statearr_27911_28051 = state_27908__$1;
(statearr_27911_28051[(2)] = null);

(statearr_27911_28051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (5))){
var state_27908__$1 = state_27908;
var statearr_27912_28052 = state_27908__$1;
(statearr_27912_28052[(2)] = null);

(statearr_27912_28052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (4))){
var inst_27898 = (state_27908[(2)]);
var inst_27899 = process.call(null,inst_27898);
var state_27908__$1 = state_27908;
if(cljs.core.truth_(inst_27899)){
var statearr_27913_28053 = state_27908__$1;
(statearr_27913_28053[(1)] = (5));

} else {
var statearr_27914_28054 = state_27908__$1;
(statearr_27914_28054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27909 === (3))){
var inst_27906 = (state_27908[(2)]);
var state_27908__$1 = state_27908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27908__$1,inst_27906);
} else {
if((state_val_27909 === (2))){
var state_27908__$1 = state_27908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27908__$1,(4),jobs);
} else {
if((state_val_27909 === (1))){
var state_27908__$1 = state_27908;
var statearr_27915_28055 = state_27908__$1;
(statearr_27915_28055[(2)] = null);

(statearr_27915_28055[(1)] = (2));


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
});})(__28037,c__15033__auto___28049,G__27868_28038,n__13056__auto___28036,jobs,results,process,async))
;
return ((function (__28037,switch__14977__auto__,c__15033__auto___28049,G__27868_28038,n__13056__auto___28036,jobs,results,process,async){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_27919 = [null,null,null,null,null,null,null];
(statearr_27919[(0)] = state_machine__14978__auto__);

(statearr_27919[(1)] = (1));

return statearr_27919;
});
var state_machine__14978__auto____1 = (function (state_27908){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_27908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e27920){if((e27920 instanceof Object)){
var ex__14981__auto__ = e27920;
var statearr_27921_28056 = state_27908;
(statearr_27921_28056[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28057 = state_27908;
state_27908 = G__28057;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_27908){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_27908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(__28037,switch__14977__auto__,c__15033__auto___28049,G__27868_28038,n__13056__auto___28036,jobs,results,process,async))
})();
var state__15035__auto__ = (function (){var statearr_27922 = f__15034__auto__.call(null);
(statearr_27922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___28049);

return statearr_27922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(__28037,c__15033__auto___28049,G__27868_28038,n__13056__auto___28036,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28058 = (__28037 + (1));
__28037 = G__28058;
continue;
} else {
}
break;
}

var c__15033__auto___28059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___28059,jobs,results,process,async){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___28059,jobs,results,process,async){
return (function (state_27944){
var state_val_27945 = (state_27944[(1)]);
if((state_val_27945 === (9))){
var inst_27937 = (state_27944[(2)]);
var state_27944__$1 = (function (){var statearr_27946 = state_27944;
(statearr_27946[(7)] = inst_27937);

return statearr_27946;
})();
var statearr_27947_28060 = state_27944__$1;
(statearr_27947_28060[(2)] = null);

(statearr_27947_28060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (8))){
var inst_27930 = (state_27944[(8)]);
var inst_27935 = (state_27944[(2)]);
var state_27944__$1 = (function (){var statearr_27948 = state_27944;
(statearr_27948[(9)] = inst_27935);

return statearr_27948;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27944__$1,(9),results,inst_27930);
} else {
if((state_val_27945 === (7))){
var inst_27940 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
var statearr_27949_28061 = state_27944__$1;
(statearr_27949_28061[(2)] = inst_27940);

(statearr_27949_28061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (6))){
var inst_27925 = (state_27944[(10)]);
var inst_27930 = (state_27944[(8)]);
var inst_27930__$1 = cljs.core.async.chan.call(null,(1));
var inst_27931 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27932 = [inst_27925,inst_27930__$1];
var inst_27933 = (new cljs.core.PersistentVector(null,2,(5),inst_27931,inst_27932,null));
var state_27944__$1 = (function (){var statearr_27950 = state_27944;
(statearr_27950[(8)] = inst_27930__$1);

return statearr_27950;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27944__$1,(8),jobs,inst_27933);
} else {
if((state_val_27945 === (5))){
var inst_27928 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27944__$1 = state_27944;
var statearr_27951_28062 = state_27944__$1;
(statearr_27951_28062[(2)] = inst_27928);

(statearr_27951_28062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (4))){
var inst_27925 = (state_27944[(10)]);
var inst_27925__$1 = (state_27944[(2)]);
var inst_27926 = (inst_27925__$1 == null);
var state_27944__$1 = (function (){var statearr_27952 = state_27944;
(statearr_27952[(10)] = inst_27925__$1);

return statearr_27952;
})();
if(cljs.core.truth_(inst_27926)){
var statearr_27953_28063 = state_27944__$1;
(statearr_27953_28063[(1)] = (5));

} else {
var statearr_27954_28064 = state_27944__$1;
(statearr_27954_28064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27945 === (3))){
var inst_27942 = (state_27944[(2)]);
var state_27944__$1 = state_27944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27944__$1,inst_27942);
} else {
if((state_val_27945 === (2))){
var state_27944__$1 = state_27944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27944__$1,(4),from);
} else {
if((state_val_27945 === (1))){
var state_27944__$1 = state_27944;
var statearr_27955_28065 = state_27944__$1;
(statearr_27955_28065[(2)] = null);

(statearr_27955_28065[(1)] = (2));


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
});})(c__15033__auto___28059,jobs,results,process,async))
;
return ((function (switch__14977__auto__,c__15033__auto___28059,jobs,results,process,async){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_27959 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27959[(0)] = state_machine__14978__auto__);

(statearr_27959[(1)] = (1));

return statearr_27959;
});
var state_machine__14978__auto____1 = (function (state_27944){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_27944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e27960){if((e27960 instanceof Object)){
var ex__14981__auto__ = e27960;
var statearr_27961_28066 = state_27944;
(statearr_27961_28066[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28067 = state_27944;
state_27944 = G__28067;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_27944){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_27944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___28059,jobs,results,process,async))
})();
var state__15035__auto__ = (function (){var statearr_27962 = f__15034__auto__.call(null);
(statearr_27962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___28059);

return statearr_27962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___28059,jobs,results,process,async))
);


var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__,jobs,results,process,async){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__,jobs,results,process,async){
return (function (state_28000){
var state_val_28001 = (state_28000[(1)]);
if((state_val_28001 === (7))){
var inst_27996 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28002_28068 = state_28000__$1;
(statearr_28002_28068[(2)] = inst_27996);

(statearr_28002_28068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (20))){
var state_28000__$1 = state_28000;
var statearr_28003_28069 = state_28000__$1;
(statearr_28003_28069[(2)] = null);

(statearr_28003_28069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (1))){
var state_28000__$1 = state_28000;
var statearr_28004_28070 = state_28000__$1;
(statearr_28004_28070[(2)] = null);

(statearr_28004_28070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (4))){
var inst_27965 = (state_28000[(7)]);
var inst_27965__$1 = (state_28000[(2)]);
var inst_27966 = (inst_27965__$1 == null);
var state_28000__$1 = (function (){var statearr_28005 = state_28000;
(statearr_28005[(7)] = inst_27965__$1);

return statearr_28005;
})();
if(cljs.core.truth_(inst_27966)){
var statearr_28006_28071 = state_28000__$1;
(statearr_28006_28071[(1)] = (5));

} else {
var statearr_28007_28072 = state_28000__$1;
(statearr_28007_28072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (15))){
var inst_27978 = (state_28000[(8)]);
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28000__$1,(18),to,inst_27978);
} else {
if((state_val_28001 === (21))){
var inst_27991 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28008_28073 = state_28000__$1;
(statearr_28008_28073[(2)] = inst_27991);

(statearr_28008_28073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (13))){
var inst_27993 = (state_28000[(2)]);
var state_28000__$1 = (function (){var statearr_28009 = state_28000;
(statearr_28009[(9)] = inst_27993);

return statearr_28009;
})();
var statearr_28010_28074 = state_28000__$1;
(statearr_28010_28074[(2)] = null);

(statearr_28010_28074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (6))){
var inst_27965 = (state_28000[(7)]);
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28000__$1,(11),inst_27965);
} else {
if((state_val_28001 === (17))){
var inst_27986 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
if(cljs.core.truth_(inst_27986)){
var statearr_28011_28075 = state_28000__$1;
(statearr_28011_28075[(1)] = (19));

} else {
var statearr_28012_28076 = state_28000__$1;
(statearr_28012_28076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (3))){
var inst_27998 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28000__$1,inst_27998);
} else {
if((state_val_28001 === (12))){
var inst_27975 = (state_28000[(10)]);
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28000__$1,(14),inst_27975);
} else {
if((state_val_28001 === (2))){
var state_28000__$1 = state_28000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28000__$1,(4),results);
} else {
if((state_val_28001 === (19))){
var state_28000__$1 = state_28000;
var statearr_28013_28077 = state_28000__$1;
(statearr_28013_28077[(2)] = null);

(statearr_28013_28077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (11))){
var inst_27975 = (state_28000[(2)]);
var state_28000__$1 = (function (){var statearr_28014 = state_28000;
(statearr_28014[(10)] = inst_27975);

return statearr_28014;
})();
var statearr_28015_28078 = state_28000__$1;
(statearr_28015_28078[(2)] = null);

(statearr_28015_28078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (9))){
var state_28000__$1 = state_28000;
var statearr_28016_28079 = state_28000__$1;
(statearr_28016_28079[(2)] = null);

(statearr_28016_28079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (5))){
var state_28000__$1 = state_28000;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28017_28080 = state_28000__$1;
(statearr_28017_28080[(1)] = (8));

} else {
var statearr_28018_28081 = state_28000__$1;
(statearr_28018_28081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (14))){
var inst_27978 = (state_28000[(8)]);
var inst_27980 = (state_28000[(11)]);
var inst_27978__$1 = (state_28000[(2)]);
var inst_27979 = (inst_27978__$1 == null);
var inst_27980__$1 = cljs.core.not.call(null,inst_27979);
var state_28000__$1 = (function (){var statearr_28019 = state_28000;
(statearr_28019[(8)] = inst_27978__$1);

(statearr_28019[(11)] = inst_27980__$1);

return statearr_28019;
})();
if(inst_27980__$1){
var statearr_28020_28082 = state_28000__$1;
(statearr_28020_28082[(1)] = (15));

} else {
var statearr_28021_28083 = state_28000__$1;
(statearr_28021_28083[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (16))){
var inst_27980 = (state_28000[(11)]);
var state_28000__$1 = state_28000;
var statearr_28022_28084 = state_28000__$1;
(statearr_28022_28084[(2)] = inst_27980);

(statearr_28022_28084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (10))){
var inst_27972 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28023_28085 = state_28000__$1;
(statearr_28023_28085[(2)] = inst_27972);

(statearr_28023_28085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (18))){
var inst_27983 = (state_28000[(2)]);
var state_28000__$1 = state_28000;
var statearr_28024_28086 = state_28000__$1;
(statearr_28024_28086[(2)] = inst_27983);

(statearr_28024_28086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28001 === (8))){
var inst_27969 = cljs.core.async.close_BANG_.call(null,to);
var state_28000__$1 = state_28000;
var statearr_28025_28087 = state_28000__$1;
(statearr_28025_28087[(2)] = inst_27969);

(statearr_28025_28087[(1)] = (10));


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
});})(c__15033__auto__,jobs,results,process,async))
;
return ((function (switch__14977__auto__,c__15033__auto__,jobs,results,process,async){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_28029 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28029[(0)] = state_machine__14978__auto__);

(statearr_28029[(1)] = (1));

return statearr_28029;
});
var state_machine__14978__auto____1 = (function (state_28000){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_28000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e28030){if((e28030 instanceof Object)){
var ex__14981__auto__ = e28030;
var statearr_28031_28088 = state_28000;
(statearr_28031_28088[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28089 = state_28000;
state_28000 = G__28089;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_28000){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_28000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__,jobs,results,process,async))
})();
var state__15035__auto__ = (function (){var statearr_28032 = f__15034__auto__.call(null);
(statearr_28032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_28032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__,jobs,results,process,async))
);

return c__15033__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15033__auto___28190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___28190,tc,fc){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___28190,tc,fc){
return (function (state_28165){
var state_val_28166 = (state_28165[(1)]);
if((state_val_28166 === (7))){
var inst_28161 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28167_28191 = state_28165__$1;
(statearr_28167_28191[(2)] = inst_28161);

(statearr_28167_28191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (1))){
var state_28165__$1 = state_28165;
var statearr_28168_28192 = state_28165__$1;
(statearr_28168_28192[(2)] = null);

(statearr_28168_28192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (4))){
var inst_28142 = (state_28165[(7)]);
var inst_28142__$1 = (state_28165[(2)]);
var inst_28143 = (inst_28142__$1 == null);
var state_28165__$1 = (function (){var statearr_28169 = state_28165;
(statearr_28169[(7)] = inst_28142__$1);

return statearr_28169;
})();
if(cljs.core.truth_(inst_28143)){
var statearr_28170_28193 = state_28165__$1;
(statearr_28170_28193[(1)] = (5));

} else {
var statearr_28171_28194 = state_28165__$1;
(statearr_28171_28194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (13))){
var state_28165__$1 = state_28165;
var statearr_28172_28195 = state_28165__$1;
(statearr_28172_28195[(2)] = null);

(statearr_28172_28195[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (6))){
var inst_28142 = (state_28165[(7)]);
var inst_28148 = p.call(null,inst_28142);
var state_28165__$1 = state_28165;
if(cljs.core.truth_(inst_28148)){
var statearr_28173_28196 = state_28165__$1;
(statearr_28173_28196[(1)] = (9));

} else {
var statearr_28174_28197 = state_28165__$1;
(statearr_28174_28197[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (3))){
var inst_28163 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28165__$1,inst_28163);
} else {
if((state_val_28166 === (12))){
var state_28165__$1 = state_28165;
var statearr_28175_28198 = state_28165__$1;
(statearr_28175_28198[(2)] = null);

(statearr_28175_28198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (2))){
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28165__$1,(4),ch);
} else {
if((state_val_28166 === (11))){
var inst_28142 = (state_28165[(7)]);
var inst_28152 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28165__$1,(8),inst_28152,inst_28142);
} else {
if((state_val_28166 === (9))){
var state_28165__$1 = state_28165;
var statearr_28176_28199 = state_28165__$1;
(statearr_28176_28199[(2)] = tc);

(statearr_28176_28199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (5))){
var inst_28145 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28146 = cljs.core.async.close_BANG_.call(null,fc);
var state_28165__$1 = (function (){var statearr_28177 = state_28165;
(statearr_28177[(8)] = inst_28145);

return statearr_28177;
})();
var statearr_28178_28200 = state_28165__$1;
(statearr_28178_28200[(2)] = inst_28146);

(statearr_28178_28200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (14))){
var inst_28159 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28179_28201 = state_28165__$1;
(statearr_28179_28201[(2)] = inst_28159);

(statearr_28179_28201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (10))){
var state_28165__$1 = state_28165;
var statearr_28180_28202 = state_28165__$1;
(statearr_28180_28202[(2)] = fc);

(statearr_28180_28202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (8))){
var inst_28154 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
if(cljs.core.truth_(inst_28154)){
var statearr_28181_28203 = state_28165__$1;
(statearr_28181_28203[(1)] = (12));

} else {
var statearr_28182_28204 = state_28165__$1;
(statearr_28182_28204[(1)] = (13));

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
});})(c__15033__auto___28190,tc,fc))
;
return ((function (switch__14977__auto__,c__15033__auto___28190,tc,fc){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_28186 = [null,null,null,null,null,null,null,null,null];
(statearr_28186[(0)] = state_machine__14978__auto__);

(statearr_28186[(1)] = (1));

return statearr_28186;
});
var state_machine__14978__auto____1 = (function (state_28165){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_28165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e28187){if((e28187 instanceof Object)){
var ex__14981__auto__ = e28187;
var statearr_28188_28205 = state_28165;
(statearr_28188_28205[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28206 = state_28165;
state_28165 = G__28206;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_28165){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_28165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___28190,tc,fc))
})();
var state__15035__auto__ = (function (){var statearr_28189 = f__15034__auto__.call(null);
(statearr_28189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___28190);

return statearr_28189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___28190,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__){
return (function (state_28253){
var state_val_28254 = (state_28253[(1)]);
if((state_val_28254 === (7))){
var inst_28249 = (state_28253[(2)]);
var state_28253__$1 = state_28253;
var statearr_28255_28271 = state_28253__$1;
(statearr_28255_28271[(2)] = inst_28249);

(statearr_28255_28271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (6))){
var inst_28239 = (state_28253[(7)]);
var inst_28242 = (state_28253[(8)]);
var inst_28246 = f.call(null,inst_28239,inst_28242);
var inst_28239__$1 = inst_28246;
var state_28253__$1 = (function (){var statearr_28256 = state_28253;
(statearr_28256[(7)] = inst_28239__$1);

return statearr_28256;
})();
var statearr_28257_28272 = state_28253__$1;
(statearr_28257_28272[(2)] = null);

(statearr_28257_28272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (5))){
var inst_28239 = (state_28253[(7)]);
var state_28253__$1 = state_28253;
var statearr_28258_28273 = state_28253__$1;
(statearr_28258_28273[(2)] = inst_28239);

(statearr_28258_28273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (4))){
var inst_28242 = (state_28253[(8)]);
var inst_28242__$1 = (state_28253[(2)]);
var inst_28243 = (inst_28242__$1 == null);
var state_28253__$1 = (function (){var statearr_28259 = state_28253;
(statearr_28259[(8)] = inst_28242__$1);

return statearr_28259;
})();
if(cljs.core.truth_(inst_28243)){
var statearr_28260_28274 = state_28253__$1;
(statearr_28260_28274[(1)] = (5));

} else {
var statearr_28261_28275 = state_28253__$1;
(statearr_28261_28275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28254 === (3))){
var inst_28251 = (state_28253[(2)]);
var state_28253__$1 = state_28253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28253__$1,inst_28251);
} else {
if((state_val_28254 === (2))){
var state_28253__$1 = state_28253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28253__$1,(4),ch);
} else {
if((state_val_28254 === (1))){
var inst_28239 = init;
var state_28253__$1 = (function (){var statearr_28262 = state_28253;
(statearr_28262[(7)] = inst_28239);

return statearr_28262;
})();
var statearr_28263_28276 = state_28253__$1;
(statearr_28263_28276[(2)] = null);

(statearr_28263_28276[(1)] = (2));


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
});})(c__15033__auto__))
;
return ((function (switch__14977__auto__,c__15033__auto__){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_28267 = [null,null,null,null,null,null,null,null,null];
(statearr_28267[(0)] = state_machine__14978__auto__);

(statearr_28267[(1)] = (1));

return statearr_28267;
});
var state_machine__14978__auto____1 = (function (state_28253){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_28253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e28268){if((e28268 instanceof Object)){
var ex__14981__auto__ = e28268;
var statearr_28269_28277 = state_28253;
(statearr_28269_28277[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28278 = state_28253;
state_28253 = G__28278;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_28253){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_28253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__))
})();
var state__15035__auto__ = (function (){var statearr_28270 = f__15034__auto__.call(null);
(statearr_28270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_28270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__))
);

return c__15033__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__){
return (function (state_28352){
var state_val_28353 = (state_28352[(1)]);
if((state_val_28353 === (7))){
var inst_28334 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
var statearr_28354_28377 = state_28352__$1;
(statearr_28354_28377[(2)] = inst_28334);

(statearr_28354_28377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (1))){
var inst_28328 = cljs.core.seq.call(null,coll);
var inst_28329 = inst_28328;
var state_28352__$1 = (function (){var statearr_28355 = state_28352;
(statearr_28355[(7)] = inst_28329);

return statearr_28355;
})();
var statearr_28356_28378 = state_28352__$1;
(statearr_28356_28378[(2)] = null);

(statearr_28356_28378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (4))){
var inst_28329 = (state_28352[(7)]);
var inst_28332 = cljs.core.first.call(null,inst_28329);
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28352__$1,(7),ch,inst_28332);
} else {
if((state_val_28353 === (13))){
var inst_28346 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
var statearr_28357_28379 = state_28352__$1;
(statearr_28357_28379[(2)] = inst_28346);

(statearr_28357_28379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (6))){
var inst_28337 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
if(cljs.core.truth_(inst_28337)){
var statearr_28358_28380 = state_28352__$1;
(statearr_28358_28380[(1)] = (8));

} else {
var statearr_28359_28381 = state_28352__$1;
(statearr_28359_28381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (3))){
var inst_28350 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28352__$1,inst_28350);
} else {
if((state_val_28353 === (12))){
var state_28352__$1 = state_28352;
var statearr_28360_28382 = state_28352__$1;
(statearr_28360_28382[(2)] = null);

(statearr_28360_28382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (2))){
var inst_28329 = (state_28352[(7)]);
var state_28352__$1 = state_28352;
if(cljs.core.truth_(inst_28329)){
var statearr_28361_28383 = state_28352__$1;
(statearr_28361_28383[(1)] = (4));

} else {
var statearr_28362_28384 = state_28352__$1;
(statearr_28362_28384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (11))){
var inst_28343 = cljs.core.async.close_BANG_.call(null,ch);
var state_28352__$1 = state_28352;
var statearr_28363_28385 = state_28352__$1;
(statearr_28363_28385[(2)] = inst_28343);

(statearr_28363_28385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (9))){
var state_28352__$1 = state_28352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28364_28386 = state_28352__$1;
(statearr_28364_28386[(1)] = (11));

} else {
var statearr_28365_28387 = state_28352__$1;
(statearr_28365_28387[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (5))){
var inst_28329 = (state_28352[(7)]);
var state_28352__$1 = state_28352;
var statearr_28366_28388 = state_28352__$1;
(statearr_28366_28388[(2)] = inst_28329);

(statearr_28366_28388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (10))){
var inst_28348 = (state_28352[(2)]);
var state_28352__$1 = state_28352;
var statearr_28367_28389 = state_28352__$1;
(statearr_28367_28389[(2)] = inst_28348);

(statearr_28367_28389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28353 === (8))){
var inst_28329 = (state_28352[(7)]);
var inst_28339 = cljs.core.next.call(null,inst_28329);
var inst_28329__$1 = inst_28339;
var state_28352__$1 = (function (){var statearr_28368 = state_28352;
(statearr_28368[(7)] = inst_28329__$1);

return statearr_28368;
})();
var statearr_28369_28390 = state_28352__$1;
(statearr_28369_28390[(2)] = null);

(statearr_28369_28390[(1)] = (2));


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
});})(c__15033__auto__))
;
return ((function (switch__14977__auto__,c__15033__auto__){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_28373 = [null,null,null,null,null,null,null,null];
(statearr_28373[(0)] = state_machine__14978__auto__);

(statearr_28373[(1)] = (1));

return statearr_28373;
});
var state_machine__14978__auto____1 = (function (state_28352){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_28352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e28374){if((e28374 instanceof Object)){
var ex__14981__auto__ = e28374;
var statearr_28375_28391 = state_28352;
(statearr_28375_28391[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28392 = state_28352;
state_28352 = G__28392;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_28352){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_28352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__))
})();
var state__15035__auto__ = (function (){var statearr_28376 = f__15034__auto__.call(null);
(statearr_28376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_28376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__))
);

return c__15033__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28394 = {};
return obj28394;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12157__auto__ = _;
if(and__12157__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12157__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__12813__auto__ = (((_ == null))?null:_);
return (function (){var or__12169__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28396 = {};
return obj28396;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12157__auto__ = m;
if(and__12157__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12157__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__12813__auto__ = (((m == null))?null:m);
return (function (){var or__12169__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12157__auto__ = m;
if(and__12157__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12157__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__12813__auto__ = (((m == null))?null:m);
return (function (){var or__12169__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12157__auto__ = m;
if(and__12157__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12157__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__12813__auto__ = (((m == null))?null:m);
return (function (){var or__12169__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28618 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28618 = (function (cs,ch,mult,meta28619){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28619 = meta28619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28618.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28618.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28618.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28618.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28618.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28620){
var self__ = this;
var _28620__$1 = this;
return self__.meta28619;
});})(cs))
;

cljs.core.async.t28618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28620,meta28619__$1){
var self__ = this;
var _28620__$1 = this;
return (new cljs.core.async.t28618(self__.cs,self__.ch,self__.mult,meta28619__$1));
});})(cs))
;

cljs.core.async.t28618.cljs$lang$type = true;

cljs.core.async.t28618.cljs$lang$ctorStr = "cljs.core.async/t28618";

cljs.core.async.t28618.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12756__auto__,writer__12757__auto__,opt__12758__auto__){
return cljs.core._write.call(null,writer__12757__auto__,"cljs.core.async/t28618");
});})(cs))
;

cljs.core.async.__GT_t28618 = ((function (cs){
return (function __GT_t28618(cs__$1,ch__$1,mult__$1,meta28619){
return (new cljs.core.async.t28618(cs__$1,ch__$1,mult__$1,meta28619));
});})(cs))
;

}

return (new cljs.core.async.t28618(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15033__auto___28839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___28839,cs,m,dchan,dctr,done){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___28839,cs,m,dchan,dctr,done){
return (function (state_28751){
var state_val_28752 = (state_28751[(1)]);
if((state_val_28752 === (7))){
var inst_28747 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28753_28840 = state_28751__$1;
(statearr_28753_28840[(2)] = inst_28747);

(statearr_28753_28840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (20))){
var inst_28652 = (state_28751[(7)]);
var inst_28662 = cljs.core.first.call(null,inst_28652);
var inst_28663 = cljs.core.nth.call(null,inst_28662,(0),null);
var inst_28664 = cljs.core.nth.call(null,inst_28662,(1),null);
var state_28751__$1 = (function (){var statearr_28754 = state_28751;
(statearr_28754[(8)] = inst_28663);

return statearr_28754;
})();
if(cljs.core.truth_(inst_28664)){
var statearr_28755_28841 = state_28751__$1;
(statearr_28755_28841[(1)] = (22));

} else {
var statearr_28756_28842 = state_28751__$1;
(statearr_28756_28842[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (27))){
var inst_28699 = (state_28751[(9)]);
var inst_28694 = (state_28751[(10)]);
var inst_28692 = (state_28751[(11)]);
var inst_28623 = (state_28751[(12)]);
var inst_28699__$1 = cljs.core._nth.call(null,inst_28692,inst_28694);
var inst_28700 = cljs.core.async.put_BANG_.call(null,inst_28699__$1,inst_28623,done);
var state_28751__$1 = (function (){var statearr_28757 = state_28751;
(statearr_28757[(9)] = inst_28699__$1);

return statearr_28757;
})();
if(cljs.core.truth_(inst_28700)){
var statearr_28758_28843 = state_28751__$1;
(statearr_28758_28843[(1)] = (30));

} else {
var statearr_28759_28844 = state_28751__$1;
(statearr_28759_28844[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (1))){
var state_28751__$1 = state_28751;
var statearr_28760_28845 = state_28751__$1;
(statearr_28760_28845[(2)] = null);

(statearr_28760_28845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (24))){
var inst_28652 = (state_28751[(7)]);
var inst_28669 = (state_28751[(2)]);
var inst_28670 = cljs.core.next.call(null,inst_28652);
var inst_28632 = inst_28670;
var inst_28633 = null;
var inst_28634 = (0);
var inst_28635 = (0);
var state_28751__$1 = (function (){var statearr_28761 = state_28751;
(statearr_28761[(13)] = inst_28632);

(statearr_28761[(14)] = inst_28635);

(statearr_28761[(15)] = inst_28634);

(statearr_28761[(16)] = inst_28633);

(statearr_28761[(17)] = inst_28669);

return statearr_28761;
})();
var statearr_28762_28846 = state_28751__$1;
(statearr_28762_28846[(2)] = null);

(statearr_28762_28846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (39))){
var state_28751__$1 = state_28751;
var statearr_28766_28847 = state_28751__$1;
(statearr_28766_28847[(2)] = null);

(statearr_28766_28847[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (4))){
var inst_28623 = (state_28751[(12)]);
var inst_28623__$1 = (state_28751[(2)]);
var inst_28624 = (inst_28623__$1 == null);
var state_28751__$1 = (function (){var statearr_28767 = state_28751;
(statearr_28767[(12)] = inst_28623__$1);

return statearr_28767;
})();
if(cljs.core.truth_(inst_28624)){
var statearr_28768_28848 = state_28751__$1;
(statearr_28768_28848[(1)] = (5));

} else {
var statearr_28769_28849 = state_28751__$1;
(statearr_28769_28849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (15))){
var inst_28632 = (state_28751[(13)]);
var inst_28635 = (state_28751[(14)]);
var inst_28634 = (state_28751[(15)]);
var inst_28633 = (state_28751[(16)]);
var inst_28648 = (state_28751[(2)]);
var inst_28649 = (inst_28635 + (1));
var tmp28763 = inst_28632;
var tmp28764 = inst_28634;
var tmp28765 = inst_28633;
var inst_28632__$1 = tmp28763;
var inst_28633__$1 = tmp28765;
var inst_28634__$1 = tmp28764;
var inst_28635__$1 = inst_28649;
var state_28751__$1 = (function (){var statearr_28770 = state_28751;
(statearr_28770[(18)] = inst_28648);

(statearr_28770[(13)] = inst_28632__$1);

(statearr_28770[(14)] = inst_28635__$1);

(statearr_28770[(15)] = inst_28634__$1);

(statearr_28770[(16)] = inst_28633__$1);

return statearr_28770;
})();
var statearr_28771_28850 = state_28751__$1;
(statearr_28771_28850[(2)] = null);

(statearr_28771_28850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (21))){
var inst_28673 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28775_28851 = state_28751__$1;
(statearr_28775_28851[(2)] = inst_28673);

(statearr_28775_28851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (31))){
var inst_28699 = (state_28751[(9)]);
var inst_28703 = done.call(null,null);
var inst_28704 = cljs.core.async.untap_STAR_.call(null,m,inst_28699);
var state_28751__$1 = (function (){var statearr_28776 = state_28751;
(statearr_28776[(19)] = inst_28703);

return statearr_28776;
})();
var statearr_28777_28852 = state_28751__$1;
(statearr_28777_28852[(2)] = inst_28704);

(statearr_28777_28852[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (32))){
var inst_28694 = (state_28751[(10)]);
var inst_28691 = (state_28751[(20)]);
var inst_28692 = (state_28751[(11)]);
var inst_28693 = (state_28751[(21)]);
var inst_28706 = (state_28751[(2)]);
var inst_28707 = (inst_28694 + (1));
var tmp28772 = inst_28691;
var tmp28773 = inst_28692;
var tmp28774 = inst_28693;
var inst_28691__$1 = tmp28772;
var inst_28692__$1 = tmp28773;
var inst_28693__$1 = tmp28774;
var inst_28694__$1 = inst_28707;
var state_28751__$1 = (function (){var statearr_28778 = state_28751;
(statearr_28778[(22)] = inst_28706);

(statearr_28778[(10)] = inst_28694__$1);

(statearr_28778[(20)] = inst_28691__$1);

(statearr_28778[(11)] = inst_28692__$1);

(statearr_28778[(21)] = inst_28693__$1);

return statearr_28778;
})();
var statearr_28779_28853 = state_28751__$1;
(statearr_28779_28853[(2)] = null);

(statearr_28779_28853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (40))){
var inst_28719 = (state_28751[(23)]);
var inst_28723 = done.call(null,null);
var inst_28724 = cljs.core.async.untap_STAR_.call(null,m,inst_28719);
var state_28751__$1 = (function (){var statearr_28780 = state_28751;
(statearr_28780[(24)] = inst_28723);

return statearr_28780;
})();
var statearr_28781_28854 = state_28751__$1;
(statearr_28781_28854[(2)] = inst_28724);

(statearr_28781_28854[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (33))){
var inst_28710 = (state_28751[(25)]);
var inst_28712 = cljs.core.chunked_seq_QMARK_.call(null,inst_28710);
var state_28751__$1 = state_28751;
if(inst_28712){
var statearr_28782_28855 = state_28751__$1;
(statearr_28782_28855[(1)] = (36));

} else {
var statearr_28783_28856 = state_28751__$1;
(statearr_28783_28856[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (13))){
var inst_28642 = (state_28751[(26)]);
var inst_28645 = cljs.core.async.close_BANG_.call(null,inst_28642);
var state_28751__$1 = state_28751;
var statearr_28784_28857 = state_28751__$1;
(statearr_28784_28857[(2)] = inst_28645);

(statearr_28784_28857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (22))){
var inst_28663 = (state_28751[(8)]);
var inst_28666 = cljs.core.async.close_BANG_.call(null,inst_28663);
var state_28751__$1 = state_28751;
var statearr_28785_28858 = state_28751__$1;
(statearr_28785_28858[(2)] = inst_28666);

(statearr_28785_28858[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (36))){
var inst_28710 = (state_28751[(25)]);
var inst_28714 = cljs.core.chunk_first.call(null,inst_28710);
var inst_28715 = cljs.core.chunk_rest.call(null,inst_28710);
var inst_28716 = cljs.core.count.call(null,inst_28714);
var inst_28691 = inst_28715;
var inst_28692 = inst_28714;
var inst_28693 = inst_28716;
var inst_28694 = (0);
var state_28751__$1 = (function (){var statearr_28786 = state_28751;
(statearr_28786[(10)] = inst_28694);

(statearr_28786[(20)] = inst_28691);

(statearr_28786[(11)] = inst_28692);

(statearr_28786[(21)] = inst_28693);

return statearr_28786;
})();
var statearr_28787_28859 = state_28751__$1;
(statearr_28787_28859[(2)] = null);

(statearr_28787_28859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (41))){
var inst_28710 = (state_28751[(25)]);
var inst_28726 = (state_28751[(2)]);
var inst_28727 = cljs.core.next.call(null,inst_28710);
var inst_28691 = inst_28727;
var inst_28692 = null;
var inst_28693 = (0);
var inst_28694 = (0);
var state_28751__$1 = (function (){var statearr_28788 = state_28751;
(statearr_28788[(10)] = inst_28694);

(statearr_28788[(20)] = inst_28691);

(statearr_28788[(27)] = inst_28726);

(statearr_28788[(11)] = inst_28692);

(statearr_28788[(21)] = inst_28693);

return statearr_28788;
})();
var statearr_28789_28860 = state_28751__$1;
(statearr_28789_28860[(2)] = null);

(statearr_28789_28860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (43))){
var state_28751__$1 = state_28751;
var statearr_28790_28861 = state_28751__$1;
(statearr_28790_28861[(2)] = null);

(statearr_28790_28861[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (29))){
var inst_28735 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28791_28862 = state_28751__$1;
(statearr_28791_28862[(2)] = inst_28735);

(statearr_28791_28862[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (44))){
var inst_28744 = (state_28751[(2)]);
var state_28751__$1 = (function (){var statearr_28792 = state_28751;
(statearr_28792[(28)] = inst_28744);

return statearr_28792;
})();
var statearr_28793_28863 = state_28751__$1;
(statearr_28793_28863[(2)] = null);

(statearr_28793_28863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (6))){
var inst_28683 = (state_28751[(29)]);
var inst_28682 = cljs.core.deref.call(null,cs);
var inst_28683__$1 = cljs.core.keys.call(null,inst_28682);
var inst_28684 = cljs.core.count.call(null,inst_28683__$1);
var inst_28685 = cljs.core.reset_BANG_.call(null,dctr,inst_28684);
var inst_28690 = cljs.core.seq.call(null,inst_28683__$1);
var inst_28691 = inst_28690;
var inst_28692 = null;
var inst_28693 = (0);
var inst_28694 = (0);
var state_28751__$1 = (function (){var statearr_28794 = state_28751;
(statearr_28794[(10)] = inst_28694);

(statearr_28794[(20)] = inst_28691);

(statearr_28794[(11)] = inst_28692);

(statearr_28794[(30)] = inst_28685);

(statearr_28794[(21)] = inst_28693);

(statearr_28794[(29)] = inst_28683__$1);

return statearr_28794;
})();
var statearr_28795_28864 = state_28751__$1;
(statearr_28795_28864[(2)] = null);

(statearr_28795_28864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (28))){
var inst_28691 = (state_28751[(20)]);
var inst_28710 = (state_28751[(25)]);
var inst_28710__$1 = cljs.core.seq.call(null,inst_28691);
var state_28751__$1 = (function (){var statearr_28796 = state_28751;
(statearr_28796[(25)] = inst_28710__$1);

return statearr_28796;
})();
if(inst_28710__$1){
var statearr_28797_28865 = state_28751__$1;
(statearr_28797_28865[(1)] = (33));

} else {
var statearr_28798_28866 = state_28751__$1;
(statearr_28798_28866[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (25))){
var inst_28694 = (state_28751[(10)]);
var inst_28693 = (state_28751[(21)]);
var inst_28696 = (inst_28694 < inst_28693);
var inst_28697 = inst_28696;
var state_28751__$1 = state_28751;
if(cljs.core.truth_(inst_28697)){
var statearr_28799_28867 = state_28751__$1;
(statearr_28799_28867[(1)] = (27));

} else {
var statearr_28800_28868 = state_28751__$1;
(statearr_28800_28868[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (34))){
var state_28751__$1 = state_28751;
var statearr_28801_28869 = state_28751__$1;
(statearr_28801_28869[(2)] = null);

(statearr_28801_28869[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (17))){
var state_28751__$1 = state_28751;
var statearr_28802_28870 = state_28751__$1;
(statearr_28802_28870[(2)] = null);

(statearr_28802_28870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (3))){
var inst_28749 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28751__$1,inst_28749);
} else {
if((state_val_28752 === (12))){
var inst_28678 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28803_28871 = state_28751__$1;
(statearr_28803_28871[(2)] = inst_28678);

(statearr_28803_28871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (2))){
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28751__$1,(4),ch);
} else {
if((state_val_28752 === (23))){
var state_28751__$1 = state_28751;
var statearr_28804_28872 = state_28751__$1;
(statearr_28804_28872[(2)] = null);

(statearr_28804_28872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (35))){
var inst_28733 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28805_28873 = state_28751__$1;
(statearr_28805_28873[(2)] = inst_28733);

(statearr_28805_28873[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (19))){
var inst_28652 = (state_28751[(7)]);
var inst_28656 = cljs.core.chunk_first.call(null,inst_28652);
var inst_28657 = cljs.core.chunk_rest.call(null,inst_28652);
var inst_28658 = cljs.core.count.call(null,inst_28656);
var inst_28632 = inst_28657;
var inst_28633 = inst_28656;
var inst_28634 = inst_28658;
var inst_28635 = (0);
var state_28751__$1 = (function (){var statearr_28806 = state_28751;
(statearr_28806[(13)] = inst_28632);

(statearr_28806[(14)] = inst_28635);

(statearr_28806[(15)] = inst_28634);

(statearr_28806[(16)] = inst_28633);

return statearr_28806;
})();
var statearr_28807_28874 = state_28751__$1;
(statearr_28807_28874[(2)] = null);

(statearr_28807_28874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (11))){
var inst_28652 = (state_28751[(7)]);
var inst_28632 = (state_28751[(13)]);
var inst_28652__$1 = cljs.core.seq.call(null,inst_28632);
var state_28751__$1 = (function (){var statearr_28808 = state_28751;
(statearr_28808[(7)] = inst_28652__$1);

return statearr_28808;
})();
if(inst_28652__$1){
var statearr_28809_28875 = state_28751__$1;
(statearr_28809_28875[(1)] = (16));

} else {
var statearr_28810_28876 = state_28751__$1;
(statearr_28810_28876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (9))){
var inst_28680 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28811_28877 = state_28751__$1;
(statearr_28811_28877[(2)] = inst_28680);

(statearr_28811_28877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (5))){
var inst_28630 = cljs.core.deref.call(null,cs);
var inst_28631 = cljs.core.seq.call(null,inst_28630);
var inst_28632 = inst_28631;
var inst_28633 = null;
var inst_28634 = (0);
var inst_28635 = (0);
var state_28751__$1 = (function (){var statearr_28812 = state_28751;
(statearr_28812[(13)] = inst_28632);

(statearr_28812[(14)] = inst_28635);

(statearr_28812[(15)] = inst_28634);

(statearr_28812[(16)] = inst_28633);

return statearr_28812;
})();
var statearr_28813_28878 = state_28751__$1;
(statearr_28813_28878[(2)] = null);

(statearr_28813_28878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (14))){
var state_28751__$1 = state_28751;
var statearr_28814_28879 = state_28751__$1;
(statearr_28814_28879[(2)] = null);

(statearr_28814_28879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (45))){
var inst_28741 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28815_28880 = state_28751__$1;
(statearr_28815_28880[(2)] = inst_28741);

(statearr_28815_28880[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (26))){
var inst_28683 = (state_28751[(29)]);
var inst_28737 = (state_28751[(2)]);
var inst_28738 = cljs.core.seq.call(null,inst_28683);
var state_28751__$1 = (function (){var statearr_28816 = state_28751;
(statearr_28816[(31)] = inst_28737);

return statearr_28816;
})();
if(inst_28738){
var statearr_28817_28881 = state_28751__$1;
(statearr_28817_28881[(1)] = (42));

} else {
var statearr_28818_28882 = state_28751__$1;
(statearr_28818_28882[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (16))){
var inst_28652 = (state_28751[(7)]);
var inst_28654 = cljs.core.chunked_seq_QMARK_.call(null,inst_28652);
var state_28751__$1 = state_28751;
if(inst_28654){
var statearr_28819_28883 = state_28751__$1;
(statearr_28819_28883[(1)] = (19));

} else {
var statearr_28820_28884 = state_28751__$1;
(statearr_28820_28884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (38))){
var inst_28730 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28821_28885 = state_28751__$1;
(statearr_28821_28885[(2)] = inst_28730);

(statearr_28821_28885[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (30))){
var state_28751__$1 = state_28751;
var statearr_28822_28886 = state_28751__$1;
(statearr_28822_28886[(2)] = null);

(statearr_28822_28886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (10))){
var inst_28635 = (state_28751[(14)]);
var inst_28633 = (state_28751[(16)]);
var inst_28641 = cljs.core._nth.call(null,inst_28633,inst_28635);
var inst_28642 = cljs.core.nth.call(null,inst_28641,(0),null);
var inst_28643 = cljs.core.nth.call(null,inst_28641,(1),null);
var state_28751__$1 = (function (){var statearr_28823 = state_28751;
(statearr_28823[(26)] = inst_28642);

return statearr_28823;
})();
if(cljs.core.truth_(inst_28643)){
var statearr_28824_28887 = state_28751__$1;
(statearr_28824_28887[(1)] = (13));

} else {
var statearr_28825_28888 = state_28751__$1;
(statearr_28825_28888[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (18))){
var inst_28676 = (state_28751[(2)]);
var state_28751__$1 = state_28751;
var statearr_28826_28889 = state_28751__$1;
(statearr_28826_28889[(2)] = inst_28676);

(statearr_28826_28889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (42))){
var state_28751__$1 = state_28751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28751__$1,(45),dchan);
} else {
if((state_val_28752 === (37))){
var inst_28719 = (state_28751[(23)]);
var inst_28623 = (state_28751[(12)]);
var inst_28710 = (state_28751[(25)]);
var inst_28719__$1 = cljs.core.first.call(null,inst_28710);
var inst_28720 = cljs.core.async.put_BANG_.call(null,inst_28719__$1,inst_28623,done);
var state_28751__$1 = (function (){var statearr_28827 = state_28751;
(statearr_28827[(23)] = inst_28719__$1);

return statearr_28827;
})();
if(cljs.core.truth_(inst_28720)){
var statearr_28828_28890 = state_28751__$1;
(statearr_28828_28890[(1)] = (39));

} else {
var statearr_28829_28891 = state_28751__$1;
(statearr_28829_28891[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28752 === (8))){
var inst_28635 = (state_28751[(14)]);
var inst_28634 = (state_28751[(15)]);
var inst_28637 = (inst_28635 < inst_28634);
var inst_28638 = inst_28637;
var state_28751__$1 = state_28751;
if(cljs.core.truth_(inst_28638)){
var statearr_28830_28892 = state_28751__$1;
(statearr_28830_28892[(1)] = (10));

} else {
var statearr_28831_28893 = state_28751__$1;
(statearr_28831_28893[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__15033__auto___28839,cs,m,dchan,dctr,done))
;
return ((function (switch__14977__auto__,c__15033__auto___28839,cs,m,dchan,dctr,done){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_28835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28835[(0)] = state_machine__14978__auto__);

(statearr_28835[(1)] = (1));

return statearr_28835;
});
var state_machine__14978__auto____1 = (function (state_28751){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_28751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e28836){if((e28836 instanceof Object)){
var ex__14981__auto__ = e28836;
var statearr_28837_28894 = state_28751;
(statearr_28837_28894[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28895 = state_28751;
state_28751 = G__28895;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_28751){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_28751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___28839,cs,m,dchan,dctr,done))
})();
var state__15035__auto__ = (function (){var statearr_28838 = f__15034__auto__.call(null);
(statearr_28838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___28839);

return statearr_28838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___28839,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28897 = {};
return obj28897;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12157__auto__ = m;
if(and__12157__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12157__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__12813__auto__ = (((m == null))?null:m);
return (function (){var or__12169__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12157__auto__ = m;
if(and__12157__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12157__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__12813__auto__ = (((m == null))?null:m);
return (function (){var or__12169__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12157__auto__ = m;
if(and__12157__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12157__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__12813__auto__ = (((m == null))?null:m);
return (function (){var or__12169__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12157__auto__ = m;
if(and__12157__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12157__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__12813__auto__ = (((m == null))?null:m);
return (function (){var or__12169__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12157__auto__ = m;
if(and__12157__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12157__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__12813__auto__ = (((m == null))?null:m);
return (function (){var or__12169__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28898){
var map__28903 = p__28898;
var map__28903__$1 = ((cljs.core.seq_QMARK_.call(null,map__28903))?cljs.core.apply.call(null,cljs.core.hash_map,map__28903):map__28903);
var opts = map__28903__$1;
var statearr_28904_28907 = state;
(statearr_28904_28907[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28903,map__28903__$1,opts){
return (function (val){
var statearr_28905_28908 = state;
(statearr_28905_28908[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28903,map__28903__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28906_28909 = state;
(statearr_28906_28909[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28898 = null;
if (arguments.length > 3) {
var G__28910__i = 0, G__28910__a = new Array(arguments.length -  3);
while (G__28910__i < G__28910__a.length) {G__28910__a[G__28910__i] = arguments[G__28910__i + 3]; ++G__28910__i;}
  p__28898 = new cljs.core.IndexedSeq(G__28910__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28898);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28911){
var state = cljs.core.first(arglist__28911);
arglist__28911 = cljs.core.next(arglist__28911);
var cont_block = cljs.core.first(arglist__28911);
arglist__28911 = cljs.core.next(arglist__28911);
var ports = cljs.core.first(arglist__28911);
var p__28898 = cljs.core.rest(arglist__28911);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28898);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29031 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29031 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29032){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29032 = meta29032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29031.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29031.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29031.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29031.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29031.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29031.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29031.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29033){
var self__ = this;
var _29033__$1 = this;
return self__.meta29032;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29033,meta29032__$1){
var self__ = this;
var _29033__$1 = this;
return (new cljs.core.async.t29031(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29032__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29031.cljs$lang$type = true;

cljs.core.async.t29031.cljs$lang$ctorStr = "cljs.core.async/t29031";

cljs.core.async.t29031.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12756__auto__,writer__12757__auto__,opt__12758__auto__){
return cljs.core._write.call(null,writer__12757__auto__,"cljs.core.async/t29031");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29031 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29031(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29032){
return (new cljs.core.async.t29031(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29032));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29031(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15033__auto___29150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___29150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___29150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29103){
var state_val_29104 = (state_29103[(1)]);
if((state_val_29104 === (7))){
var inst_29047 = (state_29103[(7)]);
var inst_29052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29047);
var state_29103__$1 = state_29103;
var statearr_29105_29151 = state_29103__$1;
(statearr_29105_29151[(2)] = inst_29052);

(statearr_29105_29151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (20))){
var inst_29062 = (state_29103[(8)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29103__$1,(23),out,inst_29062);
} else {
if((state_val_29104 === (1))){
var inst_29037 = (state_29103[(9)]);
var inst_29037__$1 = calc_state.call(null);
var inst_29038 = cljs.core.seq_QMARK_.call(null,inst_29037__$1);
var state_29103__$1 = (function (){var statearr_29106 = state_29103;
(statearr_29106[(9)] = inst_29037__$1);

return statearr_29106;
})();
if(inst_29038){
var statearr_29107_29152 = state_29103__$1;
(statearr_29107_29152[(1)] = (2));

} else {
var statearr_29108_29153 = state_29103__$1;
(statearr_29108_29153[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (24))){
var inst_29055 = (state_29103[(10)]);
var inst_29047 = inst_29055;
var state_29103__$1 = (function (){var statearr_29109 = state_29103;
(statearr_29109[(7)] = inst_29047);

return statearr_29109;
})();
var statearr_29110_29154 = state_29103__$1;
(statearr_29110_29154[(2)] = null);

(statearr_29110_29154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (4))){
var inst_29037 = (state_29103[(9)]);
var inst_29043 = (state_29103[(2)]);
var inst_29044 = cljs.core.get.call(null,inst_29043,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29045 = cljs.core.get.call(null,inst_29043,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29046 = cljs.core.get.call(null,inst_29043,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29047 = inst_29037;
var state_29103__$1 = (function (){var statearr_29111 = state_29103;
(statearr_29111[(11)] = inst_29046);

(statearr_29111[(12)] = inst_29045);

(statearr_29111[(13)] = inst_29044);

(statearr_29111[(7)] = inst_29047);

return statearr_29111;
})();
var statearr_29112_29155 = state_29103__$1;
(statearr_29112_29155[(2)] = null);

(statearr_29112_29155[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (15))){
var state_29103__$1 = state_29103;
var statearr_29113_29156 = state_29103__$1;
(statearr_29113_29156[(2)] = null);

(statearr_29113_29156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (21))){
var inst_29055 = (state_29103[(10)]);
var inst_29047 = inst_29055;
var state_29103__$1 = (function (){var statearr_29114 = state_29103;
(statearr_29114[(7)] = inst_29047);

return statearr_29114;
})();
var statearr_29115_29157 = state_29103__$1;
(statearr_29115_29157[(2)] = null);

(statearr_29115_29157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (13))){
var inst_29099 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29116_29158 = state_29103__$1;
(statearr_29116_29158[(2)] = inst_29099);

(statearr_29116_29158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (22))){
var inst_29097 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29117_29159 = state_29103__$1;
(statearr_29117_29159[(2)] = inst_29097);

(statearr_29117_29159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (6))){
var inst_29101 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29103__$1,inst_29101);
} else {
if((state_val_29104 === (25))){
var state_29103__$1 = state_29103;
var statearr_29118_29160 = state_29103__$1;
(statearr_29118_29160[(2)] = null);

(statearr_29118_29160[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (17))){
var inst_29077 = (state_29103[(14)]);
var state_29103__$1 = state_29103;
var statearr_29119_29161 = state_29103__$1;
(statearr_29119_29161[(2)] = inst_29077);

(statearr_29119_29161[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (3))){
var inst_29037 = (state_29103[(9)]);
var state_29103__$1 = state_29103;
var statearr_29120_29162 = state_29103__$1;
(statearr_29120_29162[(2)] = inst_29037);

(statearr_29120_29162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (12))){
var inst_29063 = (state_29103[(15)]);
var inst_29058 = (state_29103[(16)]);
var inst_29077 = (state_29103[(14)]);
var inst_29077__$1 = inst_29058.call(null,inst_29063);
var state_29103__$1 = (function (){var statearr_29121 = state_29103;
(statearr_29121[(14)] = inst_29077__$1);

return statearr_29121;
})();
if(cljs.core.truth_(inst_29077__$1)){
var statearr_29122_29163 = state_29103__$1;
(statearr_29122_29163[(1)] = (17));

} else {
var statearr_29123_29164 = state_29103__$1;
(statearr_29123_29164[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (2))){
var inst_29037 = (state_29103[(9)]);
var inst_29040 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29037);
var state_29103__$1 = state_29103;
var statearr_29124_29165 = state_29103__$1;
(statearr_29124_29165[(2)] = inst_29040);

(statearr_29124_29165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (23))){
var inst_29088 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
if(cljs.core.truth_(inst_29088)){
var statearr_29125_29166 = state_29103__$1;
(statearr_29125_29166[(1)] = (24));

} else {
var statearr_29126_29167 = state_29103__$1;
(statearr_29126_29167[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (19))){
var inst_29085 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
if(cljs.core.truth_(inst_29085)){
var statearr_29127_29168 = state_29103__$1;
(statearr_29127_29168[(1)] = (20));

} else {
var statearr_29128_29169 = state_29103__$1;
(statearr_29128_29169[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (11))){
var inst_29062 = (state_29103[(8)]);
var inst_29068 = (inst_29062 == null);
var state_29103__$1 = state_29103;
if(cljs.core.truth_(inst_29068)){
var statearr_29129_29170 = state_29103__$1;
(statearr_29129_29170[(1)] = (14));

} else {
var statearr_29130_29171 = state_29103__$1;
(statearr_29130_29171[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (9))){
var inst_29055 = (state_29103[(10)]);
var inst_29055__$1 = (state_29103[(2)]);
var inst_29056 = cljs.core.get.call(null,inst_29055__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29057 = cljs.core.get.call(null,inst_29055__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29058 = cljs.core.get.call(null,inst_29055__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_29103__$1 = (function (){var statearr_29131 = state_29103;
(statearr_29131[(17)] = inst_29057);

(statearr_29131[(10)] = inst_29055__$1);

(statearr_29131[(16)] = inst_29058);

return statearr_29131;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29103__$1,(10),inst_29056);
} else {
if((state_val_29104 === (5))){
var inst_29047 = (state_29103[(7)]);
var inst_29050 = cljs.core.seq_QMARK_.call(null,inst_29047);
var state_29103__$1 = state_29103;
if(inst_29050){
var statearr_29132_29172 = state_29103__$1;
(statearr_29132_29172[(1)] = (7));

} else {
var statearr_29133_29173 = state_29103__$1;
(statearr_29133_29173[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (14))){
var inst_29063 = (state_29103[(15)]);
var inst_29070 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29063);
var state_29103__$1 = state_29103;
var statearr_29134_29174 = state_29103__$1;
(statearr_29134_29174[(2)] = inst_29070);

(statearr_29134_29174[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (26))){
var inst_29093 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29135_29175 = state_29103__$1;
(statearr_29135_29175[(2)] = inst_29093);

(statearr_29135_29175[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (16))){
var inst_29073 = (state_29103[(2)]);
var inst_29074 = calc_state.call(null);
var inst_29047 = inst_29074;
var state_29103__$1 = (function (){var statearr_29136 = state_29103;
(statearr_29136[(7)] = inst_29047);

(statearr_29136[(18)] = inst_29073);

return statearr_29136;
})();
var statearr_29137_29176 = state_29103__$1;
(statearr_29137_29176[(2)] = null);

(statearr_29137_29176[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (10))){
var inst_29062 = (state_29103[(8)]);
var inst_29063 = (state_29103[(15)]);
var inst_29061 = (state_29103[(2)]);
var inst_29062__$1 = cljs.core.nth.call(null,inst_29061,(0),null);
var inst_29063__$1 = cljs.core.nth.call(null,inst_29061,(1),null);
var inst_29064 = (inst_29062__$1 == null);
var inst_29065 = cljs.core._EQ_.call(null,inst_29063__$1,change);
var inst_29066 = (inst_29064) || (inst_29065);
var state_29103__$1 = (function (){var statearr_29138 = state_29103;
(statearr_29138[(8)] = inst_29062__$1);

(statearr_29138[(15)] = inst_29063__$1);

return statearr_29138;
})();
if(cljs.core.truth_(inst_29066)){
var statearr_29139_29177 = state_29103__$1;
(statearr_29139_29177[(1)] = (11));

} else {
var statearr_29140_29178 = state_29103__$1;
(statearr_29140_29178[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (18))){
var inst_29057 = (state_29103[(17)]);
var inst_29063 = (state_29103[(15)]);
var inst_29058 = (state_29103[(16)]);
var inst_29080 = cljs.core.empty_QMARK_.call(null,inst_29058);
var inst_29081 = inst_29057.call(null,inst_29063);
var inst_29082 = cljs.core.not.call(null,inst_29081);
var inst_29083 = (inst_29080) && (inst_29082);
var state_29103__$1 = state_29103;
var statearr_29141_29179 = state_29103__$1;
(statearr_29141_29179[(2)] = inst_29083);

(statearr_29141_29179[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (8))){
var inst_29047 = (state_29103[(7)]);
var state_29103__$1 = state_29103;
var statearr_29142_29180 = state_29103__$1;
(statearr_29142_29180[(2)] = inst_29047);

(statearr_29142_29180[(1)] = (9));


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
});})(c__15033__auto___29150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14977__auto__,c__15033__auto___29150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_29146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29146[(0)] = state_machine__14978__auto__);

(statearr_29146[(1)] = (1));

return statearr_29146;
});
var state_machine__14978__auto____1 = (function (state_29103){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_29103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e29147){if((e29147 instanceof Object)){
var ex__14981__auto__ = e29147;
var statearr_29148_29181 = state_29103;
(statearr_29148_29181[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29182 = state_29103;
state_29103 = G__29182;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_29103){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_29103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___29150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15035__auto__ = (function (){var statearr_29149 = f__15034__auto__.call(null);
(statearr_29149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___29150);

return statearr_29149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___29150,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29184 = {};
return obj29184;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12157__auto__ = p;
if(and__12157__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12157__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__12813__auto__ = (((p == null))?null:p);
return (function (){var or__12169__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12157__auto__ = p;
if(and__12157__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12157__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__12813__auto__ = (((p == null))?null:p);
return (function (){var or__12169__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__12157__auto__ = p;
if(and__12157__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12157__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__12813__auto__ = (((p == null))?null:p);
return (function (){var or__12169__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12157__auto__ = p;
if(and__12157__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12157__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__12813__auto__ = (((p == null))?null:p);
return (function (){var or__12169__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12813__auto__)]);
if(or__12169__auto__){
return or__12169__auto__;
} else {
var or__12169__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12169__auto____$1){
return or__12169__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12169__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12169__auto__)){
return or__12169__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12169__auto__,mults){
return (function (p1__29185_SHARP_){
if(cljs.core.truth_(p1__29185_SHARP_.call(null,topic))){
return p1__29185_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29185_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12169__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29308 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29308 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29309){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29309 = meta29309;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29308.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29308.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29308.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29308.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29308.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29308.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29310){
var self__ = this;
var _29310__$1 = this;
return self__.meta29309;
});})(mults,ensure_mult))
;

cljs.core.async.t29308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29310,meta29309__$1){
var self__ = this;
var _29310__$1 = this;
return (new cljs.core.async.t29308(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29309__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29308.cljs$lang$type = true;

cljs.core.async.t29308.cljs$lang$ctorStr = "cljs.core.async/t29308";

cljs.core.async.t29308.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12756__auto__,writer__12757__auto__,opt__12758__auto__){
return cljs.core._write.call(null,writer__12757__auto__,"cljs.core.async/t29308");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29308 = ((function (mults,ensure_mult){
return (function __GT_t29308(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29309){
return (new cljs.core.async.t29308(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29309));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29308(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15033__auto___29430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___29430,mults,ensure_mult,p){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___29430,mults,ensure_mult,p){
return (function (state_29382){
var state_val_29383 = (state_29382[(1)]);
if((state_val_29383 === (7))){
var inst_29378 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29384_29431 = state_29382__$1;
(statearr_29384_29431[(2)] = inst_29378);

(statearr_29384_29431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (20))){
var state_29382__$1 = state_29382;
var statearr_29385_29432 = state_29382__$1;
(statearr_29385_29432[(2)] = null);

(statearr_29385_29432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (1))){
var state_29382__$1 = state_29382;
var statearr_29386_29433 = state_29382__$1;
(statearr_29386_29433[(2)] = null);

(statearr_29386_29433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (24))){
var inst_29361 = (state_29382[(7)]);
var inst_29370 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29361);
var state_29382__$1 = state_29382;
var statearr_29387_29434 = state_29382__$1;
(statearr_29387_29434[(2)] = inst_29370);

(statearr_29387_29434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (4))){
var inst_29313 = (state_29382[(8)]);
var inst_29313__$1 = (state_29382[(2)]);
var inst_29314 = (inst_29313__$1 == null);
var state_29382__$1 = (function (){var statearr_29388 = state_29382;
(statearr_29388[(8)] = inst_29313__$1);

return statearr_29388;
})();
if(cljs.core.truth_(inst_29314)){
var statearr_29389_29435 = state_29382__$1;
(statearr_29389_29435[(1)] = (5));

} else {
var statearr_29390_29436 = state_29382__$1;
(statearr_29390_29436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (15))){
var inst_29355 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29391_29437 = state_29382__$1;
(statearr_29391_29437[(2)] = inst_29355);

(statearr_29391_29437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (21))){
var inst_29375 = (state_29382[(2)]);
var state_29382__$1 = (function (){var statearr_29392 = state_29382;
(statearr_29392[(9)] = inst_29375);

return statearr_29392;
})();
var statearr_29393_29438 = state_29382__$1;
(statearr_29393_29438[(2)] = null);

(statearr_29393_29438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (13))){
var inst_29337 = (state_29382[(10)]);
var inst_29339 = cljs.core.chunked_seq_QMARK_.call(null,inst_29337);
var state_29382__$1 = state_29382;
if(inst_29339){
var statearr_29394_29439 = state_29382__$1;
(statearr_29394_29439[(1)] = (16));

} else {
var statearr_29395_29440 = state_29382__$1;
(statearr_29395_29440[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (22))){
var inst_29367 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
if(cljs.core.truth_(inst_29367)){
var statearr_29396_29441 = state_29382__$1;
(statearr_29396_29441[(1)] = (23));

} else {
var statearr_29397_29442 = state_29382__$1;
(statearr_29397_29442[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (6))){
var inst_29313 = (state_29382[(8)]);
var inst_29361 = (state_29382[(7)]);
var inst_29363 = (state_29382[(11)]);
var inst_29361__$1 = topic_fn.call(null,inst_29313);
var inst_29362 = cljs.core.deref.call(null,mults);
var inst_29363__$1 = cljs.core.get.call(null,inst_29362,inst_29361__$1);
var state_29382__$1 = (function (){var statearr_29398 = state_29382;
(statearr_29398[(7)] = inst_29361__$1);

(statearr_29398[(11)] = inst_29363__$1);

return statearr_29398;
})();
if(cljs.core.truth_(inst_29363__$1)){
var statearr_29399_29443 = state_29382__$1;
(statearr_29399_29443[(1)] = (19));

} else {
var statearr_29400_29444 = state_29382__$1;
(statearr_29400_29444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (25))){
var inst_29372 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29401_29445 = state_29382__$1;
(statearr_29401_29445[(2)] = inst_29372);

(statearr_29401_29445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (17))){
var inst_29337 = (state_29382[(10)]);
var inst_29346 = cljs.core.first.call(null,inst_29337);
var inst_29347 = cljs.core.async.muxch_STAR_.call(null,inst_29346);
var inst_29348 = cljs.core.async.close_BANG_.call(null,inst_29347);
var inst_29349 = cljs.core.next.call(null,inst_29337);
var inst_29323 = inst_29349;
var inst_29324 = null;
var inst_29325 = (0);
var inst_29326 = (0);
var state_29382__$1 = (function (){var statearr_29402 = state_29382;
(statearr_29402[(12)] = inst_29348);

(statearr_29402[(13)] = inst_29325);

(statearr_29402[(14)] = inst_29324);

(statearr_29402[(15)] = inst_29323);

(statearr_29402[(16)] = inst_29326);

return statearr_29402;
})();
var statearr_29403_29446 = state_29382__$1;
(statearr_29403_29446[(2)] = null);

(statearr_29403_29446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (3))){
var inst_29380 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29382__$1,inst_29380);
} else {
if((state_val_29383 === (12))){
var inst_29357 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29404_29447 = state_29382__$1;
(statearr_29404_29447[(2)] = inst_29357);

(statearr_29404_29447[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (2))){
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29382__$1,(4),ch);
} else {
if((state_val_29383 === (23))){
var state_29382__$1 = state_29382;
var statearr_29405_29448 = state_29382__$1;
(statearr_29405_29448[(2)] = null);

(statearr_29405_29448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (19))){
var inst_29313 = (state_29382[(8)]);
var inst_29363 = (state_29382[(11)]);
var inst_29365 = cljs.core.async.muxch_STAR_.call(null,inst_29363);
var state_29382__$1 = state_29382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29382__$1,(22),inst_29365,inst_29313);
} else {
if((state_val_29383 === (11))){
var inst_29323 = (state_29382[(15)]);
var inst_29337 = (state_29382[(10)]);
var inst_29337__$1 = cljs.core.seq.call(null,inst_29323);
var state_29382__$1 = (function (){var statearr_29406 = state_29382;
(statearr_29406[(10)] = inst_29337__$1);

return statearr_29406;
})();
if(inst_29337__$1){
var statearr_29407_29449 = state_29382__$1;
(statearr_29407_29449[(1)] = (13));

} else {
var statearr_29408_29450 = state_29382__$1;
(statearr_29408_29450[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (9))){
var inst_29359 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29409_29451 = state_29382__$1;
(statearr_29409_29451[(2)] = inst_29359);

(statearr_29409_29451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (5))){
var inst_29320 = cljs.core.deref.call(null,mults);
var inst_29321 = cljs.core.vals.call(null,inst_29320);
var inst_29322 = cljs.core.seq.call(null,inst_29321);
var inst_29323 = inst_29322;
var inst_29324 = null;
var inst_29325 = (0);
var inst_29326 = (0);
var state_29382__$1 = (function (){var statearr_29410 = state_29382;
(statearr_29410[(13)] = inst_29325);

(statearr_29410[(14)] = inst_29324);

(statearr_29410[(15)] = inst_29323);

(statearr_29410[(16)] = inst_29326);

return statearr_29410;
})();
var statearr_29411_29452 = state_29382__$1;
(statearr_29411_29452[(2)] = null);

(statearr_29411_29452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (14))){
var state_29382__$1 = state_29382;
var statearr_29415_29453 = state_29382__$1;
(statearr_29415_29453[(2)] = null);

(statearr_29415_29453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (16))){
var inst_29337 = (state_29382[(10)]);
var inst_29341 = cljs.core.chunk_first.call(null,inst_29337);
var inst_29342 = cljs.core.chunk_rest.call(null,inst_29337);
var inst_29343 = cljs.core.count.call(null,inst_29341);
var inst_29323 = inst_29342;
var inst_29324 = inst_29341;
var inst_29325 = inst_29343;
var inst_29326 = (0);
var state_29382__$1 = (function (){var statearr_29416 = state_29382;
(statearr_29416[(13)] = inst_29325);

(statearr_29416[(14)] = inst_29324);

(statearr_29416[(15)] = inst_29323);

(statearr_29416[(16)] = inst_29326);

return statearr_29416;
})();
var statearr_29417_29454 = state_29382__$1;
(statearr_29417_29454[(2)] = null);

(statearr_29417_29454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (10))){
var inst_29325 = (state_29382[(13)]);
var inst_29324 = (state_29382[(14)]);
var inst_29323 = (state_29382[(15)]);
var inst_29326 = (state_29382[(16)]);
var inst_29331 = cljs.core._nth.call(null,inst_29324,inst_29326);
var inst_29332 = cljs.core.async.muxch_STAR_.call(null,inst_29331);
var inst_29333 = cljs.core.async.close_BANG_.call(null,inst_29332);
var inst_29334 = (inst_29326 + (1));
var tmp29412 = inst_29325;
var tmp29413 = inst_29324;
var tmp29414 = inst_29323;
var inst_29323__$1 = tmp29414;
var inst_29324__$1 = tmp29413;
var inst_29325__$1 = tmp29412;
var inst_29326__$1 = inst_29334;
var state_29382__$1 = (function (){var statearr_29418 = state_29382;
(statearr_29418[(17)] = inst_29333);

(statearr_29418[(13)] = inst_29325__$1);

(statearr_29418[(14)] = inst_29324__$1);

(statearr_29418[(15)] = inst_29323__$1);

(statearr_29418[(16)] = inst_29326__$1);

return statearr_29418;
})();
var statearr_29419_29455 = state_29382__$1;
(statearr_29419_29455[(2)] = null);

(statearr_29419_29455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (18))){
var inst_29352 = (state_29382[(2)]);
var state_29382__$1 = state_29382;
var statearr_29420_29456 = state_29382__$1;
(statearr_29420_29456[(2)] = inst_29352);

(statearr_29420_29456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29383 === (8))){
var inst_29325 = (state_29382[(13)]);
var inst_29326 = (state_29382[(16)]);
var inst_29328 = (inst_29326 < inst_29325);
var inst_29329 = inst_29328;
var state_29382__$1 = state_29382;
if(cljs.core.truth_(inst_29329)){
var statearr_29421_29457 = state_29382__$1;
(statearr_29421_29457[(1)] = (10));

} else {
var statearr_29422_29458 = state_29382__$1;
(statearr_29422_29458[(1)] = (11));

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
});})(c__15033__auto___29430,mults,ensure_mult,p))
;
return ((function (switch__14977__auto__,c__15033__auto___29430,mults,ensure_mult,p){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_29426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29426[(0)] = state_machine__14978__auto__);

(statearr_29426[(1)] = (1));

return statearr_29426;
});
var state_machine__14978__auto____1 = (function (state_29382){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_29382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e29427){if((e29427 instanceof Object)){
var ex__14981__auto__ = e29427;
var statearr_29428_29459 = state_29382;
(statearr_29428_29459[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29460 = state_29382;
state_29382 = G__29460;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_29382){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_29382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___29430,mults,ensure_mult,p))
})();
var state__15035__auto__ = (function (){var statearr_29429 = f__15034__auto__.call(null);
(statearr_29429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___29430);

return statearr_29429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___29430,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15033__auto___29597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___29597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___29597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29567){
var state_val_29568 = (state_29567[(1)]);
if((state_val_29568 === (7))){
var state_29567__$1 = state_29567;
var statearr_29569_29598 = state_29567__$1;
(statearr_29569_29598[(2)] = null);

(statearr_29569_29598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (1))){
var state_29567__$1 = state_29567;
var statearr_29570_29599 = state_29567__$1;
(statearr_29570_29599[(2)] = null);

(statearr_29570_29599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (4))){
var inst_29531 = (state_29567[(7)]);
var inst_29533 = (inst_29531 < cnt);
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29533)){
var statearr_29571_29600 = state_29567__$1;
(statearr_29571_29600[(1)] = (6));

} else {
var statearr_29572_29601 = state_29567__$1;
(statearr_29572_29601[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (15))){
var inst_29563 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29573_29602 = state_29567__$1;
(statearr_29573_29602[(2)] = inst_29563);

(statearr_29573_29602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (13))){
var inst_29556 = cljs.core.async.close_BANG_.call(null,out);
var state_29567__$1 = state_29567;
var statearr_29574_29603 = state_29567__$1;
(statearr_29574_29603[(2)] = inst_29556);

(statearr_29574_29603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (6))){
var state_29567__$1 = state_29567;
var statearr_29575_29604 = state_29567__$1;
(statearr_29575_29604[(2)] = null);

(statearr_29575_29604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (3))){
var inst_29565 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29567__$1,inst_29565);
} else {
if((state_val_29568 === (12))){
var inst_29553 = (state_29567[(8)]);
var inst_29553__$1 = (state_29567[(2)]);
var inst_29554 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29553__$1);
var state_29567__$1 = (function (){var statearr_29576 = state_29567;
(statearr_29576[(8)] = inst_29553__$1);

return statearr_29576;
})();
if(cljs.core.truth_(inst_29554)){
var statearr_29577_29605 = state_29567__$1;
(statearr_29577_29605[(1)] = (13));

} else {
var statearr_29578_29606 = state_29567__$1;
(statearr_29578_29606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (2))){
var inst_29530 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29531 = (0);
var state_29567__$1 = (function (){var statearr_29579 = state_29567;
(statearr_29579[(9)] = inst_29530);

(statearr_29579[(7)] = inst_29531);

return statearr_29579;
})();
var statearr_29580_29607 = state_29567__$1;
(statearr_29580_29607[(2)] = null);

(statearr_29580_29607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (11))){
var inst_29531 = (state_29567[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29567,(10),Object,null,(9));
var inst_29540 = chs__$1.call(null,inst_29531);
var inst_29541 = done.call(null,inst_29531);
var inst_29542 = cljs.core.async.take_BANG_.call(null,inst_29540,inst_29541);
var state_29567__$1 = state_29567;
var statearr_29581_29608 = state_29567__$1;
(statearr_29581_29608[(2)] = inst_29542);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29567__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (9))){
var inst_29531 = (state_29567[(7)]);
var inst_29544 = (state_29567[(2)]);
var inst_29545 = (inst_29531 + (1));
var inst_29531__$1 = inst_29545;
var state_29567__$1 = (function (){var statearr_29582 = state_29567;
(statearr_29582[(10)] = inst_29544);

(statearr_29582[(7)] = inst_29531__$1);

return statearr_29582;
})();
var statearr_29583_29609 = state_29567__$1;
(statearr_29583_29609[(2)] = null);

(statearr_29583_29609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (5))){
var inst_29551 = (state_29567[(2)]);
var state_29567__$1 = (function (){var statearr_29584 = state_29567;
(statearr_29584[(11)] = inst_29551);

return statearr_29584;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29567__$1,(12),dchan);
} else {
if((state_val_29568 === (14))){
var inst_29553 = (state_29567[(8)]);
var inst_29558 = cljs.core.apply.call(null,f,inst_29553);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29567__$1,(16),out,inst_29558);
} else {
if((state_val_29568 === (16))){
var inst_29560 = (state_29567[(2)]);
var state_29567__$1 = (function (){var statearr_29585 = state_29567;
(statearr_29585[(12)] = inst_29560);

return statearr_29585;
})();
var statearr_29586_29610 = state_29567__$1;
(statearr_29586_29610[(2)] = null);

(statearr_29586_29610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (10))){
var inst_29535 = (state_29567[(2)]);
var inst_29536 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29567__$1 = (function (){var statearr_29587 = state_29567;
(statearr_29587[(13)] = inst_29535);

return statearr_29587;
})();
var statearr_29588_29611 = state_29567__$1;
(statearr_29588_29611[(2)] = inst_29536);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29567__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (8))){
var inst_29549 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29589_29612 = state_29567__$1;
(statearr_29589_29612[(2)] = inst_29549);

(statearr_29589_29612[(1)] = (5));


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
});})(c__15033__auto___29597,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14977__auto__,c__15033__auto___29597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_29593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29593[(0)] = state_machine__14978__auto__);

(statearr_29593[(1)] = (1));

return statearr_29593;
});
var state_machine__14978__auto____1 = (function (state_29567){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_29567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e29594){if((e29594 instanceof Object)){
var ex__14981__auto__ = e29594;
var statearr_29595_29613 = state_29567;
(statearr_29595_29613[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29614 = state_29567;
state_29567 = G__29614;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_29567){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_29567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___29597,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15035__auto__ = (function (){var statearr_29596 = f__15034__auto__.call(null);
(statearr_29596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___29597);

return statearr_29596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___29597,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15033__auto___29722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___29722,out){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___29722,out){
return (function (state_29698){
var state_val_29699 = (state_29698[(1)]);
if((state_val_29699 === (7))){
var inst_29677 = (state_29698[(7)]);
var inst_29678 = (state_29698[(8)]);
var inst_29677__$1 = (state_29698[(2)]);
var inst_29678__$1 = cljs.core.nth.call(null,inst_29677__$1,(0),null);
var inst_29679 = cljs.core.nth.call(null,inst_29677__$1,(1),null);
var inst_29680 = (inst_29678__$1 == null);
var state_29698__$1 = (function (){var statearr_29700 = state_29698;
(statearr_29700[(9)] = inst_29679);

(statearr_29700[(7)] = inst_29677__$1);

(statearr_29700[(8)] = inst_29678__$1);

return statearr_29700;
})();
if(cljs.core.truth_(inst_29680)){
var statearr_29701_29723 = state_29698__$1;
(statearr_29701_29723[(1)] = (8));

} else {
var statearr_29702_29724 = state_29698__$1;
(statearr_29702_29724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (1))){
var inst_29669 = cljs.core.vec.call(null,chs);
var inst_29670 = inst_29669;
var state_29698__$1 = (function (){var statearr_29703 = state_29698;
(statearr_29703[(10)] = inst_29670);

return statearr_29703;
})();
var statearr_29704_29725 = state_29698__$1;
(statearr_29704_29725[(2)] = null);

(statearr_29704_29725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (4))){
var inst_29670 = (state_29698[(10)]);
var state_29698__$1 = state_29698;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29698__$1,(7),inst_29670);
} else {
if((state_val_29699 === (6))){
var inst_29694 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29705_29726 = state_29698__$1;
(statearr_29705_29726[(2)] = inst_29694);

(statearr_29705_29726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (3))){
var inst_29696 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29698__$1,inst_29696);
} else {
if((state_val_29699 === (2))){
var inst_29670 = (state_29698[(10)]);
var inst_29672 = cljs.core.count.call(null,inst_29670);
var inst_29673 = (inst_29672 > (0));
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29673)){
var statearr_29707_29727 = state_29698__$1;
(statearr_29707_29727[(1)] = (4));

} else {
var statearr_29708_29728 = state_29698__$1;
(statearr_29708_29728[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (11))){
var inst_29670 = (state_29698[(10)]);
var inst_29687 = (state_29698[(2)]);
var tmp29706 = inst_29670;
var inst_29670__$1 = tmp29706;
var state_29698__$1 = (function (){var statearr_29709 = state_29698;
(statearr_29709[(11)] = inst_29687);

(statearr_29709[(10)] = inst_29670__$1);

return statearr_29709;
})();
var statearr_29710_29729 = state_29698__$1;
(statearr_29710_29729[(2)] = null);

(statearr_29710_29729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (9))){
var inst_29678 = (state_29698[(8)]);
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29698__$1,(11),out,inst_29678);
} else {
if((state_val_29699 === (5))){
var inst_29692 = cljs.core.async.close_BANG_.call(null,out);
var state_29698__$1 = state_29698;
var statearr_29711_29730 = state_29698__$1;
(statearr_29711_29730[(2)] = inst_29692);

(statearr_29711_29730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (10))){
var inst_29690 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29712_29731 = state_29698__$1;
(statearr_29712_29731[(2)] = inst_29690);

(statearr_29712_29731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (8))){
var inst_29679 = (state_29698[(9)]);
var inst_29677 = (state_29698[(7)]);
var inst_29678 = (state_29698[(8)]);
var inst_29670 = (state_29698[(10)]);
var inst_29682 = (function (){var c = inst_29679;
var v = inst_29678;
var vec__29675 = inst_29677;
var cs = inst_29670;
return ((function (c,v,vec__29675,cs,inst_29679,inst_29677,inst_29678,inst_29670,state_val_29699,c__15033__auto___29722,out){
return (function (p1__29615_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29615_SHARP_);
});
;})(c,v,vec__29675,cs,inst_29679,inst_29677,inst_29678,inst_29670,state_val_29699,c__15033__auto___29722,out))
})();
var inst_29683 = cljs.core.filterv.call(null,inst_29682,inst_29670);
var inst_29670__$1 = inst_29683;
var state_29698__$1 = (function (){var statearr_29713 = state_29698;
(statearr_29713[(10)] = inst_29670__$1);

return statearr_29713;
})();
var statearr_29714_29732 = state_29698__$1;
(statearr_29714_29732[(2)] = null);

(statearr_29714_29732[(1)] = (2));


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
});})(c__15033__auto___29722,out))
;
return ((function (switch__14977__auto__,c__15033__auto___29722,out){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_29718 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29718[(0)] = state_machine__14978__auto__);

(statearr_29718[(1)] = (1));

return statearr_29718;
});
var state_machine__14978__auto____1 = (function (state_29698){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_29698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e29719){if((e29719 instanceof Object)){
var ex__14981__auto__ = e29719;
var statearr_29720_29733 = state_29698;
(statearr_29720_29733[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29734 = state_29698;
state_29698 = G__29734;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_29698){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_29698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___29722,out))
})();
var state__15035__auto__ = (function (){var statearr_29721 = f__15034__auto__.call(null);
(statearr_29721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___29722);

return statearr_29721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___29722,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15033__auto___29827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___29827,out){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___29827,out){
return (function (state_29804){
var state_val_29805 = (state_29804[(1)]);
if((state_val_29805 === (7))){
var inst_29786 = (state_29804[(7)]);
var inst_29786__$1 = (state_29804[(2)]);
var inst_29787 = (inst_29786__$1 == null);
var inst_29788 = cljs.core.not.call(null,inst_29787);
var state_29804__$1 = (function (){var statearr_29806 = state_29804;
(statearr_29806[(7)] = inst_29786__$1);

return statearr_29806;
})();
if(inst_29788){
var statearr_29807_29828 = state_29804__$1;
(statearr_29807_29828[(1)] = (8));

} else {
var statearr_29808_29829 = state_29804__$1;
(statearr_29808_29829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (1))){
var inst_29781 = (0);
var state_29804__$1 = (function (){var statearr_29809 = state_29804;
(statearr_29809[(8)] = inst_29781);

return statearr_29809;
})();
var statearr_29810_29830 = state_29804__$1;
(statearr_29810_29830[(2)] = null);

(statearr_29810_29830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (4))){
var state_29804__$1 = state_29804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29804__$1,(7),ch);
} else {
if((state_val_29805 === (6))){
var inst_29799 = (state_29804[(2)]);
var state_29804__$1 = state_29804;
var statearr_29811_29831 = state_29804__$1;
(statearr_29811_29831[(2)] = inst_29799);

(statearr_29811_29831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (3))){
var inst_29801 = (state_29804[(2)]);
var inst_29802 = cljs.core.async.close_BANG_.call(null,out);
var state_29804__$1 = (function (){var statearr_29812 = state_29804;
(statearr_29812[(9)] = inst_29801);

return statearr_29812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29804__$1,inst_29802);
} else {
if((state_val_29805 === (2))){
var inst_29781 = (state_29804[(8)]);
var inst_29783 = (inst_29781 < n);
var state_29804__$1 = state_29804;
if(cljs.core.truth_(inst_29783)){
var statearr_29813_29832 = state_29804__$1;
(statearr_29813_29832[(1)] = (4));

} else {
var statearr_29814_29833 = state_29804__$1;
(statearr_29814_29833[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (11))){
var inst_29781 = (state_29804[(8)]);
var inst_29791 = (state_29804[(2)]);
var inst_29792 = (inst_29781 + (1));
var inst_29781__$1 = inst_29792;
var state_29804__$1 = (function (){var statearr_29815 = state_29804;
(statearr_29815[(8)] = inst_29781__$1);

(statearr_29815[(10)] = inst_29791);

return statearr_29815;
})();
var statearr_29816_29834 = state_29804__$1;
(statearr_29816_29834[(2)] = null);

(statearr_29816_29834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (9))){
var state_29804__$1 = state_29804;
var statearr_29817_29835 = state_29804__$1;
(statearr_29817_29835[(2)] = null);

(statearr_29817_29835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (5))){
var state_29804__$1 = state_29804;
var statearr_29818_29836 = state_29804__$1;
(statearr_29818_29836[(2)] = null);

(statearr_29818_29836[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (10))){
var inst_29796 = (state_29804[(2)]);
var state_29804__$1 = state_29804;
var statearr_29819_29837 = state_29804__$1;
(statearr_29819_29837[(2)] = inst_29796);

(statearr_29819_29837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29805 === (8))){
var inst_29786 = (state_29804[(7)]);
var state_29804__$1 = state_29804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29804__$1,(11),out,inst_29786);
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
});})(c__15033__auto___29827,out))
;
return ((function (switch__14977__auto__,c__15033__auto___29827,out){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_29823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29823[(0)] = state_machine__14978__auto__);

(statearr_29823[(1)] = (1));

return statearr_29823;
});
var state_machine__14978__auto____1 = (function (state_29804){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_29804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e29824){if((e29824 instanceof Object)){
var ex__14981__auto__ = e29824;
var statearr_29825_29838 = state_29804;
(statearr_29825_29838[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29839 = state_29804;
state_29804 = G__29839;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_29804){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_29804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___29827,out))
})();
var state__15035__auto__ = (function (){var statearr_29826 = f__15034__auto__.call(null);
(statearr_29826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___29827);

return statearr_29826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___29827,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t29847 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29847 = (function (ch,f,map_LT_,meta29848){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29848 = meta29848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29850 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29850 = (function (fn1,_,meta29848,map_LT_,f,ch,meta29851){
this.fn1 = fn1;
this._ = _;
this.meta29848 = meta29848;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29851 = meta29851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29850.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29840_SHARP_){
return f1.call(null,(((p1__29840_SHARP_ == null))?null:self__.f.call(null,p1__29840_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29852){
var self__ = this;
var _29852__$1 = this;
return self__.meta29851;
});})(___$1))
;

cljs.core.async.t29850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29852,meta29851__$1){
var self__ = this;
var _29852__$1 = this;
return (new cljs.core.async.t29850(self__.fn1,self__._,self__.meta29848,self__.map_LT_,self__.f,self__.ch,meta29851__$1));
});})(___$1))
;

cljs.core.async.t29850.cljs$lang$type = true;

cljs.core.async.t29850.cljs$lang$ctorStr = "cljs.core.async/t29850";

cljs.core.async.t29850.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12756__auto__,writer__12757__auto__,opt__12758__auto__){
return cljs.core._write.call(null,writer__12757__auto__,"cljs.core.async/t29850");
});})(___$1))
;

cljs.core.async.__GT_t29850 = ((function (___$1){
return (function __GT_t29850(fn1__$1,___$2,meta29848__$1,map_LT___$1,f__$1,ch__$1,meta29851){
return (new cljs.core.async.t29850(fn1__$1,___$2,meta29848__$1,map_LT___$1,f__$1,ch__$1,meta29851));
});})(___$1))
;

}

return (new cljs.core.async.t29850(fn1,___$1,self__.meta29848,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__12157__auto__ = ret;
if(cljs.core.truth_(and__12157__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12157__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29847.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29849){
var self__ = this;
var _29849__$1 = this;
return self__.meta29848;
});

cljs.core.async.t29847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29849,meta29848__$1){
var self__ = this;
var _29849__$1 = this;
return (new cljs.core.async.t29847(self__.ch,self__.f,self__.map_LT_,meta29848__$1));
});

cljs.core.async.t29847.cljs$lang$type = true;

cljs.core.async.t29847.cljs$lang$ctorStr = "cljs.core.async/t29847";

cljs.core.async.t29847.cljs$lang$ctorPrWriter = (function (this__12756__auto__,writer__12757__auto__,opt__12758__auto__){
return cljs.core._write.call(null,writer__12757__auto__,"cljs.core.async/t29847");
});

cljs.core.async.__GT_t29847 = (function __GT_t29847(ch__$1,f__$1,map_LT___$1,meta29848){
return (new cljs.core.async.t29847(ch__$1,f__$1,map_LT___$1,meta29848));
});

}

return (new cljs.core.async.t29847(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t29856 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29856 = (function (ch,f,map_GT_,meta29857){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29857 = meta29857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29856.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29856.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29856.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29856.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29856.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29856.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29858){
var self__ = this;
var _29858__$1 = this;
return self__.meta29857;
});

cljs.core.async.t29856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29858,meta29857__$1){
var self__ = this;
var _29858__$1 = this;
return (new cljs.core.async.t29856(self__.ch,self__.f,self__.map_GT_,meta29857__$1));
});

cljs.core.async.t29856.cljs$lang$type = true;

cljs.core.async.t29856.cljs$lang$ctorStr = "cljs.core.async/t29856";

cljs.core.async.t29856.cljs$lang$ctorPrWriter = (function (this__12756__auto__,writer__12757__auto__,opt__12758__auto__){
return cljs.core._write.call(null,writer__12757__auto__,"cljs.core.async/t29856");
});

cljs.core.async.__GT_t29856 = (function __GT_t29856(ch__$1,f__$1,map_GT___$1,meta29857){
return (new cljs.core.async.t29856(ch__$1,f__$1,map_GT___$1,meta29857));
});

}

return (new cljs.core.async.t29856(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t29862 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29862 = (function (ch,p,filter_GT_,meta29863){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29863 = meta29863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29862.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29862.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29862.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29862.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29864){
var self__ = this;
var _29864__$1 = this;
return self__.meta29863;
});

cljs.core.async.t29862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29864,meta29863__$1){
var self__ = this;
var _29864__$1 = this;
return (new cljs.core.async.t29862(self__.ch,self__.p,self__.filter_GT_,meta29863__$1));
});

cljs.core.async.t29862.cljs$lang$type = true;

cljs.core.async.t29862.cljs$lang$ctorStr = "cljs.core.async/t29862";

cljs.core.async.t29862.cljs$lang$ctorPrWriter = (function (this__12756__auto__,writer__12757__auto__,opt__12758__auto__){
return cljs.core._write.call(null,writer__12757__auto__,"cljs.core.async/t29862");
});

cljs.core.async.__GT_t29862 = (function __GT_t29862(ch__$1,p__$1,filter_GT___$1,meta29863){
return (new cljs.core.async.t29862(ch__$1,p__$1,filter_GT___$1,meta29863));
});

}

return (new cljs.core.async.t29862(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15033__auto___29947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___29947,out){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___29947,out){
return (function (state_29926){
var state_val_29927 = (state_29926[(1)]);
if((state_val_29927 === (7))){
var inst_29922 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29928_29948 = state_29926__$1;
(statearr_29928_29948[(2)] = inst_29922);

(statearr_29928_29948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (1))){
var state_29926__$1 = state_29926;
var statearr_29929_29949 = state_29926__$1;
(statearr_29929_29949[(2)] = null);

(statearr_29929_29949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (4))){
var inst_29908 = (state_29926[(7)]);
var inst_29908__$1 = (state_29926[(2)]);
var inst_29909 = (inst_29908__$1 == null);
var state_29926__$1 = (function (){var statearr_29930 = state_29926;
(statearr_29930[(7)] = inst_29908__$1);

return statearr_29930;
})();
if(cljs.core.truth_(inst_29909)){
var statearr_29931_29950 = state_29926__$1;
(statearr_29931_29950[(1)] = (5));

} else {
var statearr_29932_29951 = state_29926__$1;
(statearr_29932_29951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (6))){
var inst_29908 = (state_29926[(7)]);
var inst_29913 = p.call(null,inst_29908);
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29913)){
var statearr_29933_29952 = state_29926__$1;
(statearr_29933_29952[(1)] = (8));

} else {
var statearr_29934_29953 = state_29926__$1;
(statearr_29934_29953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (3))){
var inst_29924 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29926__$1,inst_29924);
} else {
if((state_val_29927 === (2))){
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29926__$1,(4),ch);
} else {
if((state_val_29927 === (11))){
var inst_29916 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29935_29954 = state_29926__$1;
(statearr_29935_29954[(2)] = inst_29916);

(statearr_29935_29954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (9))){
var state_29926__$1 = state_29926;
var statearr_29936_29955 = state_29926__$1;
(statearr_29936_29955[(2)] = null);

(statearr_29936_29955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (5))){
var inst_29911 = cljs.core.async.close_BANG_.call(null,out);
var state_29926__$1 = state_29926;
var statearr_29937_29956 = state_29926__$1;
(statearr_29937_29956[(2)] = inst_29911);

(statearr_29937_29956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (10))){
var inst_29919 = (state_29926[(2)]);
var state_29926__$1 = (function (){var statearr_29938 = state_29926;
(statearr_29938[(8)] = inst_29919);

return statearr_29938;
})();
var statearr_29939_29957 = state_29926__$1;
(statearr_29939_29957[(2)] = null);

(statearr_29939_29957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (8))){
var inst_29908 = (state_29926[(7)]);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29926__$1,(11),out,inst_29908);
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
});})(c__15033__auto___29947,out))
;
return ((function (switch__14977__auto__,c__15033__auto___29947,out){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_29943 = [null,null,null,null,null,null,null,null,null];
(statearr_29943[(0)] = state_machine__14978__auto__);

(statearr_29943[(1)] = (1));

return statearr_29943;
});
var state_machine__14978__auto____1 = (function (state_29926){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_29926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e29944){if((e29944 instanceof Object)){
var ex__14981__auto__ = e29944;
var statearr_29945_29958 = state_29926;
(statearr_29945_29958[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29959 = state_29926;
state_29926 = G__29959;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_29926){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_29926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___29947,out))
})();
var state__15035__auto__ = (function (){var statearr_29946 = f__15034__auto__.call(null);
(statearr_29946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___29947);

return statearr_29946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___29947,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__15033__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto__){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto__){
return (function (state_30125){
var state_val_30126 = (state_30125[(1)]);
if((state_val_30126 === (7))){
var inst_30121 = (state_30125[(2)]);
var state_30125__$1 = state_30125;
var statearr_30127_30168 = state_30125__$1;
(statearr_30127_30168[(2)] = inst_30121);

(statearr_30127_30168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (20))){
var inst_30091 = (state_30125[(7)]);
var inst_30102 = (state_30125[(2)]);
var inst_30103 = cljs.core.next.call(null,inst_30091);
var inst_30077 = inst_30103;
var inst_30078 = null;
var inst_30079 = (0);
var inst_30080 = (0);
var state_30125__$1 = (function (){var statearr_30128 = state_30125;
(statearr_30128[(8)] = inst_30102);

(statearr_30128[(9)] = inst_30078);

(statearr_30128[(10)] = inst_30080);

(statearr_30128[(11)] = inst_30077);

(statearr_30128[(12)] = inst_30079);

return statearr_30128;
})();
var statearr_30129_30169 = state_30125__$1;
(statearr_30129_30169[(2)] = null);

(statearr_30129_30169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (1))){
var state_30125__$1 = state_30125;
var statearr_30130_30170 = state_30125__$1;
(statearr_30130_30170[(2)] = null);

(statearr_30130_30170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (4))){
var inst_30066 = (state_30125[(13)]);
var inst_30066__$1 = (state_30125[(2)]);
var inst_30067 = (inst_30066__$1 == null);
var state_30125__$1 = (function (){var statearr_30131 = state_30125;
(statearr_30131[(13)] = inst_30066__$1);

return statearr_30131;
})();
if(cljs.core.truth_(inst_30067)){
var statearr_30132_30171 = state_30125__$1;
(statearr_30132_30171[(1)] = (5));

} else {
var statearr_30133_30172 = state_30125__$1;
(statearr_30133_30172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (15))){
var state_30125__$1 = state_30125;
var statearr_30137_30173 = state_30125__$1;
(statearr_30137_30173[(2)] = null);

(statearr_30137_30173[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (21))){
var state_30125__$1 = state_30125;
var statearr_30138_30174 = state_30125__$1;
(statearr_30138_30174[(2)] = null);

(statearr_30138_30174[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (13))){
var inst_30078 = (state_30125[(9)]);
var inst_30080 = (state_30125[(10)]);
var inst_30077 = (state_30125[(11)]);
var inst_30079 = (state_30125[(12)]);
var inst_30087 = (state_30125[(2)]);
var inst_30088 = (inst_30080 + (1));
var tmp30134 = inst_30078;
var tmp30135 = inst_30077;
var tmp30136 = inst_30079;
var inst_30077__$1 = tmp30135;
var inst_30078__$1 = tmp30134;
var inst_30079__$1 = tmp30136;
var inst_30080__$1 = inst_30088;
var state_30125__$1 = (function (){var statearr_30139 = state_30125;
(statearr_30139[(9)] = inst_30078__$1);

(statearr_30139[(14)] = inst_30087);

(statearr_30139[(10)] = inst_30080__$1);

(statearr_30139[(11)] = inst_30077__$1);

(statearr_30139[(12)] = inst_30079__$1);

return statearr_30139;
})();
var statearr_30140_30175 = state_30125__$1;
(statearr_30140_30175[(2)] = null);

(statearr_30140_30175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (22))){
var state_30125__$1 = state_30125;
var statearr_30141_30176 = state_30125__$1;
(statearr_30141_30176[(2)] = null);

(statearr_30141_30176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (6))){
var inst_30066 = (state_30125[(13)]);
var inst_30075 = f.call(null,inst_30066);
var inst_30076 = cljs.core.seq.call(null,inst_30075);
var inst_30077 = inst_30076;
var inst_30078 = null;
var inst_30079 = (0);
var inst_30080 = (0);
var state_30125__$1 = (function (){var statearr_30142 = state_30125;
(statearr_30142[(9)] = inst_30078);

(statearr_30142[(10)] = inst_30080);

(statearr_30142[(11)] = inst_30077);

(statearr_30142[(12)] = inst_30079);

return statearr_30142;
})();
var statearr_30143_30177 = state_30125__$1;
(statearr_30143_30177[(2)] = null);

(statearr_30143_30177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (17))){
var inst_30091 = (state_30125[(7)]);
var inst_30095 = cljs.core.chunk_first.call(null,inst_30091);
var inst_30096 = cljs.core.chunk_rest.call(null,inst_30091);
var inst_30097 = cljs.core.count.call(null,inst_30095);
var inst_30077 = inst_30096;
var inst_30078 = inst_30095;
var inst_30079 = inst_30097;
var inst_30080 = (0);
var state_30125__$1 = (function (){var statearr_30144 = state_30125;
(statearr_30144[(9)] = inst_30078);

(statearr_30144[(10)] = inst_30080);

(statearr_30144[(11)] = inst_30077);

(statearr_30144[(12)] = inst_30079);

return statearr_30144;
})();
var statearr_30145_30178 = state_30125__$1;
(statearr_30145_30178[(2)] = null);

(statearr_30145_30178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (3))){
var inst_30123 = (state_30125[(2)]);
var state_30125__$1 = state_30125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30125__$1,inst_30123);
} else {
if((state_val_30126 === (12))){
var inst_30111 = (state_30125[(2)]);
var state_30125__$1 = state_30125;
var statearr_30146_30179 = state_30125__$1;
(statearr_30146_30179[(2)] = inst_30111);

(statearr_30146_30179[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (2))){
var state_30125__$1 = state_30125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30125__$1,(4),in$);
} else {
if((state_val_30126 === (23))){
var inst_30119 = (state_30125[(2)]);
var state_30125__$1 = state_30125;
var statearr_30147_30180 = state_30125__$1;
(statearr_30147_30180[(2)] = inst_30119);

(statearr_30147_30180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (19))){
var inst_30106 = (state_30125[(2)]);
var state_30125__$1 = state_30125;
var statearr_30148_30181 = state_30125__$1;
(statearr_30148_30181[(2)] = inst_30106);

(statearr_30148_30181[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (11))){
var inst_30091 = (state_30125[(7)]);
var inst_30077 = (state_30125[(11)]);
var inst_30091__$1 = cljs.core.seq.call(null,inst_30077);
var state_30125__$1 = (function (){var statearr_30149 = state_30125;
(statearr_30149[(7)] = inst_30091__$1);

return statearr_30149;
})();
if(inst_30091__$1){
var statearr_30150_30182 = state_30125__$1;
(statearr_30150_30182[(1)] = (14));

} else {
var statearr_30151_30183 = state_30125__$1;
(statearr_30151_30183[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (9))){
var inst_30113 = (state_30125[(2)]);
var inst_30114 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30125__$1 = (function (){var statearr_30152 = state_30125;
(statearr_30152[(15)] = inst_30113);

return statearr_30152;
})();
if(cljs.core.truth_(inst_30114)){
var statearr_30153_30184 = state_30125__$1;
(statearr_30153_30184[(1)] = (21));

} else {
var statearr_30154_30185 = state_30125__$1;
(statearr_30154_30185[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (5))){
var inst_30069 = cljs.core.async.close_BANG_.call(null,out);
var state_30125__$1 = state_30125;
var statearr_30155_30186 = state_30125__$1;
(statearr_30155_30186[(2)] = inst_30069);

(statearr_30155_30186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (14))){
var inst_30091 = (state_30125[(7)]);
var inst_30093 = cljs.core.chunked_seq_QMARK_.call(null,inst_30091);
var state_30125__$1 = state_30125;
if(inst_30093){
var statearr_30156_30187 = state_30125__$1;
(statearr_30156_30187[(1)] = (17));

} else {
var statearr_30157_30188 = state_30125__$1;
(statearr_30157_30188[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (16))){
var inst_30109 = (state_30125[(2)]);
var state_30125__$1 = state_30125;
var statearr_30158_30189 = state_30125__$1;
(statearr_30158_30189[(2)] = inst_30109);

(statearr_30158_30189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30126 === (10))){
var inst_30078 = (state_30125[(9)]);
var inst_30080 = (state_30125[(10)]);
var inst_30085 = cljs.core._nth.call(null,inst_30078,inst_30080);
var state_30125__$1 = state_30125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30125__$1,(13),out,inst_30085);
} else {
if((state_val_30126 === (18))){
var inst_30091 = (state_30125[(7)]);
var inst_30100 = cljs.core.first.call(null,inst_30091);
var state_30125__$1 = state_30125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30125__$1,(20),out,inst_30100);
} else {
if((state_val_30126 === (8))){
var inst_30080 = (state_30125[(10)]);
var inst_30079 = (state_30125[(12)]);
var inst_30082 = (inst_30080 < inst_30079);
var inst_30083 = inst_30082;
var state_30125__$1 = state_30125;
if(cljs.core.truth_(inst_30083)){
var statearr_30159_30190 = state_30125__$1;
(statearr_30159_30190[(1)] = (10));

} else {
var statearr_30160_30191 = state_30125__$1;
(statearr_30160_30191[(1)] = (11));

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
});})(c__15033__auto__))
;
return ((function (switch__14977__auto__,c__15033__auto__){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_30164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30164[(0)] = state_machine__14978__auto__);

(statearr_30164[(1)] = (1));

return statearr_30164;
});
var state_machine__14978__auto____1 = (function (state_30125){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_30125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e30165){if((e30165 instanceof Object)){
var ex__14981__auto__ = e30165;
var statearr_30166_30192 = state_30125;
(statearr_30166_30192[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30193 = state_30125;
state_30125 = G__30193;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_30125){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_30125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto__))
})();
var state__15035__auto__ = (function (){var statearr_30167 = f__15034__auto__.call(null);
(statearr_30167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto__);

return statearr_30167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto__))
);

return c__15033__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15033__auto___30290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___30290,out){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___30290,out){
return (function (state_30265){
var state_val_30266 = (state_30265[(1)]);
if((state_val_30266 === (7))){
var inst_30260 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30267_30291 = state_30265__$1;
(statearr_30267_30291[(2)] = inst_30260);

(statearr_30267_30291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (1))){
var inst_30242 = null;
var state_30265__$1 = (function (){var statearr_30268 = state_30265;
(statearr_30268[(7)] = inst_30242);

return statearr_30268;
})();
var statearr_30269_30292 = state_30265__$1;
(statearr_30269_30292[(2)] = null);

(statearr_30269_30292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (4))){
var inst_30245 = (state_30265[(8)]);
var inst_30245__$1 = (state_30265[(2)]);
var inst_30246 = (inst_30245__$1 == null);
var inst_30247 = cljs.core.not.call(null,inst_30246);
var state_30265__$1 = (function (){var statearr_30270 = state_30265;
(statearr_30270[(8)] = inst_30245__$1);

return statearr_30270;
})();
if(inst_30247){
var statearr_30271_30293 = state_30265__$1;
(statearr_30271_30293[(1)] = (5));

} else {
var statearr_30272_30294 = state_30265__$1;
(statearr_30272_30294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (6))){
var state_30265__$1 = state_30265;
var statearr_30273_30295 = state_30265__$1;
(statearr_30273_30295[(2)] = null);

(statearr_30273_30295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (3))){
var inst_30262 = (state_30265[(2)]);
var inst_30263 = cljs.core.async.close_BANG_.call(null,out);
var state_30265__$1 = (function (){var statearr_30274 = state_30265;
(statearr_30274[(9)] = inst_30262);

return statearr_30274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30265__$1,inst_30263);
} else {
if((state_val_30266 === (2))){
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30265__$1,(4),ch);
} else {
if((state_val_30266 === (11))){
var inst_30245 = (state_30265[(8)]);
var inst_30254 = (state_30265[(2)]);
var inst_30242 = inst_30245;
var state_30265__$1 = (function (){var statearr_30275 = state_30265;
(statearr_30275[(7)] = inst_30242);

(statearr_30275[(10)] = inst_30254);

return statearr_30275;
})();
var statearr_30276_30296 = state_30265__$1;
(statearr_30276_30296[(2)] = null);

(statearr_30276_30296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (9))){
var inst_30245 = (state_30265[(8)]);
var state_30265__$1 = state_30265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30265__$1,(11),out,inst_30245);
} else {
if((state_val_30266 === (5))){
var inst_30245 = (state_30265[(8)]);
var inst_30242 = (state_30265[(7)]);
var inst_30249 = cljs.core._EQ_.call(null,inst_30245,inst_30242);
var state_30265__$1 = state_30265;
if(inst_30249){
var statearr_30278_30297 = state_30265__$1;
(statearr_30278_30297[(1)] = (8));

} else {
var statearr_30279_30298 = state_30265__$1;
(statearr_30279_30298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (10))){
var inst_30257 = (state_30265[(2)]);
var state_30265__$1 = state_30265;
var statearr_30280_30299 = state_30265__$1;
(statearr_30280_30299[(2)] = inst_30257);

(statearr_30280_30299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30266 === (8))){
var inst_30242 = (state_30265[(7)]);
var tmp30277 = inst_30242;
var inst_30242__$1 = tmp30277;
var state_30265__$1 = (function (){var statearr_30281 = state_30265;
(statearr_30281[(7)] = inst_30242__$1);

return statearr_30281;
})();
var statearr_30282_30300 = state_30265__$1;
(statearr_30282_30300[(2)] = null);

(statearr_30282_30300[(1)] = (2));


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
});})(c__15033__auto___30290,out))
;
return ((function (switch__14977__auto__,c__15033__auto___30290,out){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_30286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30286[(0)] = state_machine__14978__auto__);

(statearr_30286[(1)] = (1));

return statearr_30286;
});
var state_machine__14978__auto____1 = (function (state_30265){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_30265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e30287){if((e30287 instanceof Object)){
var ex__14981__auto__ = e30287;
var statearr_30288_30301 = state_30265;
(statearr_30288_30301[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30302 = state_30265;
state_30265 = G__30302;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_30265){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_30265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___30290,out))
})();
var state__15035__auto__ = (function (){var statearr_30289 = f__15034__auto__.call(null);
(statearr_30289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___30290);

return statearr_30289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___30290,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15033__auto___30437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___30437,out){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___30437,out){
return (function (state_30407){
var state_val_30408 = (state_30407[(1)]);
if((state_val_30408 === (7))){
var inst_30403 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30409_30438 = state_30407__$1;
(statearr_30409_30438[(2)] = inst_30403);

(statearr_30409_30438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (1))){
var inst_30370 = (new Array(n));
var inst_30371 = inst_30370;
var inst_30372 = (0);
var state_30407__$1 = (function (){var statearr_30410 = state_30407;
(statearr_30410[(7)] = inst_30372);

(statearr_30410[(8)] = inst_30371);

return statearr_30410;
})();
var statearr_30411_30439 = state_30407__$1;
(statearr_30411_30439[(2)] = null);

(statearr_30411_30439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (4))){
var inst_30375 = (state_30407[(9)]);
var inst_30375__$1 = (state_30407[(2)]);
var inst_30376 = (inst_30375__$1 == null);
var inst_30377 = cljs.core.not.call(null,inst_30376);
var state_30407__$1 = (function (){var statearr_30412 = state_30407;
(statearr_30412[(9)] = inst_30375__$1);

return statearr_30412;
})();
if(inst_30377){
var statearr_30413_30440 = state_30407__$1;
(statearr_30413_30440[(1)] = (5));

} else {
var statearr_30414_30441 = state_30407__$1;
(statearr_30414_30441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (15))){
var inst_30397 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30415_30442 = state_30407__$1;
(statearr_30415_30442[(2)] = inst_30397);

(statearr_30415_30442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (13))){
var state_30407__$1 = state_30407;
var statearr_30416_30443 = state_30407__$1;
(statearr_30416_30443[(2)] = null);

(statearr_30416_30443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (6))){
var inst_30372 = (state_30407[(7)]);
var inst_30393 = (inst_30372 > (0));
var state_30407__$1 = state_30407;
if(cljs.core.truth_(inst_30393)){
var statearr_30417_30444 = state_30407__$1;
(statearr_30417_30444[(1)] = (12));

} else {
var statearr_30418_30445 = state_30407__$1;
(statearr_30418_30445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (3))){
var inst_30405 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30407__$1,inst_30405);
} else {
if((state_val_30408 === (12))){
var inst_30371 = (state_30407[(8)]);
var inst_30395 = cljs.core.vec.call(null,inst_30371);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30407__$1,(15),out,inst_30395);
} else {
if((state_val_30408 === (2))){
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30407__$1,(4),ch);
} else {
if((state_val_30408 === (11))){
var inst_30387 = (state_30407[(2)]);
var inst_30388 = (new Array(n));
var inst_30371 = inst_30388;
var inst_30372 = (0);
var state_30407__$1 = (function (){var statearr_30419 = state_30407;
(statearr_30419[(10)] = inst_30387);

(statearr_30419[(7)] = inst_30372);

(statearr_30419[(8)] = inst_30371);

return statearr_30419;
})();
var statearr_30420_30446 = state_30407__$1;
(statearr_30420_30446[(2)] = null);

(statearr_30420_30446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (9))){
var inst_30371 = (state_30407[(8)]);
var inst_30385 = cljs.core.vec.call(null,inst_30371);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30407__$1,(11),out,inst_30385);
} else {
if((state_val_30408 === (5))){
var inst_30380 = (state_30407[(11)]);
var inst_30372 = (state_30407[(7)]);
var inst_30375 = (state_30407[(9)]);
var inst_30371 = (state_30407[(8)]);
var inst_30379 = (inst_30371[inst_30372] = inst_30375);
var inst_30380__$1 = (inst_30372 + (1));
var inst_30381 = (inst_30380__$1 < n);
var state_30407__$1 = (function (){var statearr_30421 = state_30407;
(statearr_30421[(11)] = inst_30380__$1);

(statearr_30421[(12)] = inst_30379);

return statearr_30421;
})();
if(cljs.core.truth_(inst_30381)){
var statearr_30422_30447 = state_30407__$1;
(statearr_30422_30447[(1)] = (8));

} else {
var statearr_30423_30448 = state_30407__$1;
(statearr_30423_30448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (14))){
var inst_30400 = (state_30407[(2)]);
var inst_30401 = cljs.core.async.close_BANG_.call(null,out);
var state_30407__$1 = (function (){var statearr_30425 = state_30407;
(statearr_30425[(13)] = inst_30400);

return statearr_30425;
})();
var statearr_30426_30449 = state_30407__$1;
(statearr_30426_30449[(2)] = inst_30401);

(statearr_30426_30449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (10))){
var inst_30391 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30427_30450 = state_30407__$1;
(statearr_30427_30450[(2)] = inst_30391);

(statearr_30427_30450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (8))){
var inst_30380 = (state_30407[(11)]);
var inst_30371 = (state_30407[(8)]);
var tmp30424 = inst_30371;
var inst_30371__$1 = tmp30424;
var inst_30372 = inst_30380;
var state_30407__$1 = (function (){var statearr_30428 = state_30407;
(statearr_30428[(7)] = inst_30372);

(statearr_30428[(8)] = inst_30371__$1);

return statearr_30428;
})();
var statearr_30429_30451 = state_30407__$1;
(statearr_30429_30451[(2)] = null);

(statearr_30429_30451[(1)] = (2));


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
});})(c__15033__auto___30437,out))
;
return ((function (switch__14977__auto__,c__15033__auto___30437,out){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_30433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30433[(0)] = state_machine__14978__auto__);

(statearr_30433[(1)] = (1));

return statearr_30433;
});
var state_machine__14978__auto____1 = (function (state_30407){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_30407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e30434){if((e30434 instanceof Object)){
var ex__14981__auto__ = e30434;
var statearr_30435_30452 = state_30407;
(statearr_30435_30452[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30453 = state_30407;
state_30407 = G__30453;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_30407){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_30407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___30437,out))
})();
var state__15035__auto__ = (function (){var statearr_30436 = f__15034__auto__.call(null);
(statearr_30436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___30437);

return statearr_30436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___30437,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15033__auto___30596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15033__auto___30596,out){
return (function (){
var f__15034__auto__ = (function (){var switch__14977__auto__ = ((function (c__15033__auto___30596,out){
return (function (state_30566){
var state_val_30567 = (state_30566[(1)]);
if((state_val_30567 === (7))){
var inst_30562 = (state_30566[(2)]);
var state_30566__$1 = state_30566;
var statearr_30568_30597 = state_30566__$1;
(statearr_30568_30597[(2)] = inst_30562);

(statearr_30568_30597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30567 === (1))){
var inst_30525 = [];
var inst_30526 = inst_30525;
var inst_30527 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30566__$1 = (function (){var statearr_30569 = state_30566;
(statearr_30569[(7)] = inst_30527);

(statearr_30569[(8)] = inst_30526);

return statearr_30569;
})();
var statearr_30570_30598 = state_30566__$1;
(statearr_30570_30598[(2)] = null);

(statearr_30570_30598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30567 === (4))){
var inst_30530 = (state_30566[(9)]);
var inst_30530__$1 = (state_30566[(2)]);
var inst_30531 = (inst_30530__$1 == null);
var inst_30532 = cljs.core.not.call(null,inst_30531);
var state_30566__$1 = (function (){var statearr_30571 = state_30566;
(statearr_30571[(9)] = inst_30530__$1);

return statearr_30571;
})();
if(inst_30532){
var statearr_30572_30599 = state_30566__$1;
(statearr_30572_30599[(1)] = (5));

} else {
var statearr_30573_30600 = state_30566__$1;
(statearr_30573_30600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30567 === (15))){
var inst_30556 = (state_30566[(2)]);
var state_30566__$1 = state_30566;
var statearr_30574_30601 = state_30566__$1;
(statearr_30574_30601[(2)] = inst_30556);

(statearr_30574_30601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30567 === (13))){
var state_30566__$1 = state_30566;
var statearr_30575_30602 = state_30566__$1;
(statearr_30575_30602[(2)] = null);

(statearr_30575_30602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30567 === (6))){
var inst_30526 = (state_30566[(8)]);
var inst_30551 = inst_30526.length;
var inst_30552 = (inst_30551 > (0));
var state_30566__$1 = state_30566;
if(cljs.core.truth_(inst_30552)){
var statearr_30576_30603 = state_30566__$1;
(statearr_30576_30603[(1)] = (12));

} else {
var statearr_30577_30604 = state_30566__$1;
(statearr_30577_30604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30567 === (3))){
var inst_30564 = (state_30566[(2)]);
var state_30566__$1 = state_30566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30566__$1,inst_30564);
} else {
if((state_val_30567 === (12))){
var inst_30526 = (state_30566[(8)]);
var inst_30554 = cljs.core.vec.call(null,inst_30526);
var state_30566__$1 = state_30566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30566__$1,(15),out,inst_30554);
} else {
if((state_val_30567 === (2))){
var state_30566__$1 = state_30566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30566__$1,(4),ch);
} else {
if((state_val_30567 === (11))){
var inst_30530 = (state_30566[(9)]);
var inst_30534 = (state_30566[(10)]);
var inst_30544 = (state_30566[(2)]);
var inst_30545 = [];
var inst_30546 = inst_30545.push(inst_30530);
var inst_30526 = inst_30545;
var inst_30527 = inst_30534;
var state_30566__$1 = (function (){var statearr_30578 = state_30566;
(statearr_30578[(7)] = inst_30527);

(statearr_30578[(11)] = inst_30544);

(statearr_30578[(12)] = inst_30546);

(statearr_30578[(8)] = inst_30526);

return statearr_30578;
})();
var statearr_30579_30605 = state_30566__$1;
(statearr_30579_30605[(2)] = null);

(statearr_30579_30605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30567 === (9))){
var inst_30526 = (state_30566[(8)]);
var inst_30542 = cljs.core.vec.call(null,inst_30526);
var state_30566__$1 = state_30566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30566__$1,(11),out,inst_30542);
} else {
if((state_val_30567 === (5))){
var inst_30527 = (state_30566[(7)]);
var inst_30530 = (state_30566[(9)]);
var inst_30534 = (state_30566[(10)]);
var inst_30534__$1 = f.call(null,inst_30530);
var inst_30535 = cljs.core._EQ_.call(null,inst_30534__$1,inst_30527);
var inst_30536 = cljs.core.keyword_identical_QMARK_.call(null,inst_30527,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30537 = (inst_30535) || (inst_30536);
var state_30566__$1 = (function (){var statearr_30580 = state_30566;
(statearr_30580[(10)] = inst_30534__$1);

return statearr_30580;
})();
if(cljs.core.truth_(inst_30537)){
var statearr_30581_30606 = state_30566__$1;
(statearr_30581_30606[(1)] = (8));

} else {
var statearr_30582_30607 = state_30566__$1;
(statearr_30582_30607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30567 === (14))){
var inst_30559 = (state_30566[(2)]);
var inst_30560 = cljs.core.async.close_BANG_.call(null,out);
var state_30566__$1 = (function (){var statearr_30584 = state_30566;
(statearr_30584[(13)] = inst_30559);

return statearr_30584;
})();
var statearr_30585_30608 = state_30566__$1;
(statearr_30585_30608[(2)] = inst_30560);

(statearr_30585_30608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30567 === (10))){
var inst_30549 = (state_30566[(2)]);
var state_30566__$1 = state_30566;
var statearr_30586_30609 = state_30566__$1;
(statearr_30586_30609[(2)] = inst_30549);

(statearr_30586_30609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30567 === (8))){
var inst_30530 = (state_30566[(9)]);
var inst_30534 = (state_30566[(10)]);
var inst_30526 = (state_30566[(8)]);
var inst_30539 = inst_30526.push(inst_30530);
var tmp30583 = inst_30526;
var inst_30526__$1 = tmp30583;
var inst_30527 = inst_30534;
var state_30566__$1 = (function (){var statearr_30587 = state_30566;
(statearr_30587[(7)] = inst_30527);

(statearr_30587[(8)] = inst_30526__$1);

(statearr_30587[(14)] = inst_30539);

return statearr_30587;
})();
var statearr_30588_30610 = state_30566__$1;
(statearr_30588_30610[(2)] = null);

(statearr_30588_30610[(1)] = (2));


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
});})(c__15033__auto___30596,out))
;
return ((function (switch__14977__auto__,c__15033__auto___30596,out){
return (function() {
var state_machine__14978__auto__ = null;
var state_machine__14978__auto____0 = (function (){
var statearr_30592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30592[(0)] = state_machine__14978__auto__);

(statearr_30592[(1)] = (1));

return statearr_30592;
});
var state_machine__14978__auto____1 = (function (state_30566){
while(true){
var ret_value__14979__auto__ = (function (){try{while(true){
var result__14980__auto__ = switch__14977__auto__.call(null,state_30566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14980__auto__;
}
break;
}
}catch (e30593){if((e30593 instanceof Object)){
var ex__14981__auto__ = e30593;
var statearr_30594_30611 = state_30566;
(statearr_30594_30611[(5)] = ex__14981__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30612 = state_30566;
state_30566 = G__30612;
continue;
} else {
return ret_value__14979__auto__;
}
break;
}
});
state_machine__14978__auto__ = function(state_30566){
switch(arguments.length){
case 0:
return state_machine__14978__auto____0.call(this);
case 1:
return state_machine__14978__auto____1.call(this,state_30566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14978__auto____0;
state_machine__14978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14978__auto____1;
return state_machine__14978__auto__;
})()
;})(switch__14977__auto__,c__15033__auto___30596,out))
})();
var state__15035__auto__ = (function (){var statearr_30595 = f__15034__auto__.call(null);
(statearr_30595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15033__auto___30596);

return statearr_30595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15035__auto__);
});})(c__15033__auto___30596,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map