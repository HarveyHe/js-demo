/**
 * Created by harvey on 2017/1/22.
 */

//外观模式实现
function addEvent(dom, type, fn){
    if(dom.addEventListener){
        dom.addEventListener(type, fn , false);
    }else if(dom.attachEvent){
        dom.attachEvent('on' + type, fn);
    }else {
        dom['on' + type] = fn;
    }
}

var myInput = document.getElementById("myInput");
addEvent(myInput, 'click' ,function(){
    console.log('绑定第一个事件');
})
addEvent(myInput, 'click' ,function(){
    console.log('绑定第二个事件');
})



////

//获取事件对象
var getEvent = function (event) {
    //标准浏览器返回event ,IE 下window.event
    return event || window.event;
}
//获取元素
var getTarget = function (event) {
    var event = getEvent(event);
    //标准浏览器下event.target ,IE下 event.srcElement
    return event.target || event.srcElement;
}
//阻止默认行为
var preventDefault = function (event) {
    var event = getEvent(event);
    //标准浏览器
    if(event.preventDefault){
        event.preventDefault();

    }else{
        //IE浏览器
        event.returnValue = false;
    }
}

//简约版属性样式方法库
var A = {
    g : function (id) {
        return document.getElementById(id);
    },
    css : function (id, key, value) {
        document.getElementById(id).style[key] = value;
    },
    attr : function (id, key, value) {
        document.getElementById(id)[key] = value;
    },
    html : function (id, html) {
        document.getElementById(id).innerHTML = html;
    },
    on : function (id, type, fn) {
        document.getElementById(id)['on' + type] = fn;
    }
}