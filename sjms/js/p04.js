/**
 * Created by harvey on 2017/1/21.
 */
//安全模式创建的工厂类
var Factory = function (type,content) {
    if(this instanceof Factory){
        var _s = new this[type](content);
        return _s;
    }else {
        return new Factory(type,content);

    }
};

//工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java : function (content) {

    },
    JavaScript : function (content) {

    },
    UI : function (content) {

    },
    PHP : function (content) {

    }
}
