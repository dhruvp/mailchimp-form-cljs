// Compiled by ClojureScript 0.0-2934 {}
goog.provide('mailchimp_form.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
/**
* Check if the value is nil, then apply the predicate
*/
mailchimp_form.core.check_nil_then_predicate = (function check_nil_then_predicate(value,predicate){
if((value == null)){
return false;
} else {
return predicate.call(null,value);
}
});
mailchimp_form.core.valid_email_QMARK_ = (function valid_email_QMARK_(email){
return mailchimp_form.core.check_nil_then_predicate.call(null,email,(function (arg){
return cljs.core.boolean$.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/\w+@\w+.\w+/,arg)));
}));
});
mailchimp_form.core.eight_or_more_characters_QMARK_ = (function eight_or_more_characters_QMARK_(word){
return mailchimp_form.core.check_nil_then_predicate.call(null,word,(function (arg){
return (cljs.core.count.call(null,arg) > (7));
}));
});
mailchimp_form.core.has_special_character_QMARK_ = (function has_special_character_QMARK_(word){
return mailchimp_form.core.check_nil_then_predicate.call(null,word,(function (arg){
return cljs.core.boolean$.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/\W+/,arg)));
}));
});
mailchimp_form.core.has_number_QMARK_ = (function has_number_QMARK_(word){
return mailchimp_form.core.check_nil_then_predicate.call(null,word,(function (arg){
return cljs.core.boolean$.call(null,cljs.core.re_seq.call(null,/\d+/,arg));
}));
});
/**
* A prompt that will animate to help the user with a given input
*/
mailchimp_form.core.prompt_message = (function prompt_message(message){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-messages"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"prompt message-animation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),message], null)], null)], null);
});
/**
* An input element which updates its value and on focus parameters on change, blur, and focus
*/
mailchimp_form.core.input_element = (function input_element(id,name,type,value,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006)],[(function (){
return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
}),name,cljs.core.deref.call(null,value),(function (arg){
if((cljs.core.deref.call(null,value) == null)){
cljs.core.reset_BANG_.call(null,value,"");
} else {
}

return cljs.core.swap_BANG_.call(null,in_focus,cljs.core.not);
}),type,id,"form-control",(function (p1__1869_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__1869_SHARP_.target.value);
}),""])], null);
});
/**
* Creates an input box and a prompt box that appears above the input when the input comes into focus. Also throws in a little required message
*/
mailchimp_form.core.input_and_prompt = (function input_and_prompt(label_value,input_name,input_type,input_element_arg,prompt_element,required_QMARK_){
var input_focus = reagent.core.atom.call(null,false);
return ((function (input_focus){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label_value], null),(cljs.core.truth_(cljs.core.deref.call(null,input_focus))?prompt_element:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [mailchimp_form.core.input_element,input_name,input_name,input_type,input_element_arg,input_focus], null),(cljs.core.truth_((function (){var and__3081__auto__ = required_QMARK_;
if(cljs.core.truth_(and__3081__auto__)){
return cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,input_element_arg));
} else {
return and__3081__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Field is required!"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null);
});
;})(input_focus))
});
mailchimp_form.core.email_form = (function email_form(email_address_atom){
return mailchimp_form.core.input_and_prompt.call(null,"email","email","email",email_address_atom,mailchimp_form.core.prompt_message.call(null,"What's your email address?"),true);
});
mailchimp_form.core.name_form = (function name_form(name_atom){
return mailchimp_form.core.input_and_prompt.call(null,"name","name","text",name_atom,mailchimp_form.core.prompt_message.call(null,"What's your name?"),true);
});
/**
* A list to describe which password requirements have been met so far
*/
mailchimp_form.core.password_requirements = (function password_requirements(password,requirements){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (req){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(req)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),req], null));
}),cljs.core.doall.call(null,cljs.core.filter.call(null,(function (req){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015).cljs$core$IFn$_invoke$arity$1(req).call(null,cljs.core.deref.call(null,password)));
}),requirements)))], null)], null);
});
mailchimp_form.core.password_form = (function password_form(password){
var password_type_atom = reagent.core.atom.call(null,"password");
return ((function (password_type_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mailchimp_form.core.input_and_prompt.call(null,"password","password",cljs.core.deref.call(null,password_type_atom),password,mailchimp_form.core.prompt_message.call(null,"What's your password"),true)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mailchimp_form.core.password_requirements,password,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"8 or more characters",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),mailchimp_form.core.eight_or_more_characters_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"At least one special character",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),mailchimp_form.core.has_special_character_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"At least one number",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),mailchimp_form.core.has_number_QMARK_], null)], null)], null)], null);
});
;})(password_type_atom))
});
mailchimp_form.core.wrap_as_element_in_form = (function wrap_as_element_in_form(element){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class=","class=",1799263312),"row form-group"], null),element], null);
});
mailchimp_form.core.home_page = (function home_page(){
var email_address = reagent.core.atom.call(null,null);
var name = reagent.core.atom.call(null,null);
var password = reagent.core.atom.call(null,null);
return ((function (email_address,name,password){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"signup-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to DhruvChimp"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),mailchimp_form.core.wrap_as_element_in_form.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mailchimp_form.core.email_form,email_address], null)),mailchimp_form.core.wrap_as_element_in_form.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mailchimp_form.core.name_form,name], null)),mailchimp_form.core.wrap_as_element_in_form.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mailchimp_form.core.password_form,password], null))], null)], null);
});
;})(email_address,name,password))
});
mailchimp_form.core.current_page = (function current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__1859__auto___1872 = (function (params__1860__auto__){
if(cljs.core.map_QMARK_.call(null,params__1860__auto__)){
var map__1870 = params__1860__auto__;
var map__1870__$1 = ((cljs.core.seq_QMARK_.call(null,map__1870))?cljs.core.apply.call(null,cljs.core.hash_map,map__1870):map__1870);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return mailchimp_form.core.home_page;},new cljs.core.Symbol("mailchimp-form.core","home-page","mailchimp-form.core/home-page",1406563413,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mailchimp-form.core","mailchimp-form.core",2036537746,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/dhruv/Documents/engineering/experiments/mailchimp-form-cljs/src/cljs/mailchimp_form/core.cljs",17,7,127,127,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(mailchimp_form.core.home_page)?mailchimp_form.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__1860__auto__)){
var vec__1871 = params__1860__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return mailchimp_form.core.home_page;},new cljs.core.Symbol("mailchimp-form.core","home-page","mailchimp-form.core/home-page",1406563413,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mailchimp-form.core","mailchimp-form.core",2036537746,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/dhruv/Documents/engineering/experiments/mailchimp-form-cljs/src/cljs/mailchimp_form/core.cljs",17,7,127,127,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(mailchimp_form.core.home_page)?mailchimp_form.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__1859__auto___1872);

mailchimp_form.core.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var G__1874 = (new goog.History());
goog.events.listen(G__1874,goog.history.EventType.NAVIGATE,((function (G__1874){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__1874))
);

G__1874.setEnabled(true);

return G__1874;
});
mailchimp_form.core.init_BANG_ = (function init_BANG_(){
mailchimp_form.core.hook_browser_navigation_BANG_.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mailchimp_form.core.current_page], null),document.getElementById("app"));
});
