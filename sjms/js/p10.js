/**
 * Created by harvey on 2017/1/22.
 */
//定义框架
var A = A || {};

A.g = function (id) {
    return document.getElementById(id);
};
A.on = function (id, type, fn) {
    //如果传递参数是字符串则以id处理,否则以元素对象处理
    var dom = typeof id === 'string' ? this.g(id) : id;
    if(dom.addEventListener){
        dom.addEventListener(type, fn , false);
    }else if(dom.attachEvent){
        dom.attachEvent('on' + type, fn);
    }else {
        dom['on' + type] = fn;
    }
};


//引入jQuery
A.g = function (id) {
    return $(id).get(0);
};
A.on = function (id, type, fn) {
    //如果传递参数是字符串则以id处理,否则以元素对象处理
    var dom = typeof id === 'string' ? $('#' + id) : id;
    dom.on(type,fn);
}

//参数适配
function doSomeThing(obj){
    var _adapter = {
        name : '雨夜清荷',
        title : '设计模式',
        age : 24,
        color : 'pink',
        size : 100,
        prize :50
    };

    for (var i in _adapter ){
        _adapter[i] = obj[i] || _adapter[i];
    }
}


//数据适配
var arr = ['JavaScript','book','前端编程语言','8月1日'];
function arrToObjAdapter(att){
    return {
        name : arr[0],
        type : arr[1],
        title : arr[2],
        data : arr[3],
    }
}































