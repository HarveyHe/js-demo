/**
 * Created by harvey on 2017/1/21.
 */

var CheckObject0 = {
    checkName : function (){

    },
    checkEmail : function (){

    },
    checkPassword : function(){

    }


};

/**
 * 真假对象
 * @returns {{checkName: checkName, checkEmail: checkEmail, checkPassword: checkPassword}}
 * @constructor
 */
var CheckObject1 =  function (){

    return {
        checkName : function (){

        },
        checkEmail : function (){

        },
        checkPassword : function(){

        }
    }

};
/**
 * 类方式   需要用关键字new 来创建
 * (比较消耗内存)
 */
var CheckObject2 =  function (){

    this.checkName = function (){

    };

    this.checkEmail = function (){

    };
    this.checkPassword = function(){

    };
};

/**
 * 使用prototype原型
 * @constructor
 */
var CheckObject3 = function (){};
CheckObject3.prototype.checkName = function(){};
CheckObject3.prototype.checkEmail = function(){};
/* or */
CheckObject3.prototype = {
    checkName : function(){},
    checkEmail : function(){}
};



var CheckObject4= {
    checkName : function (){
        return this;
    },
    checkEmail : function (){
        return this;
    },
    checkPassword : function(){
        return this;
    }

};
CheckObject4.checkName().checkEmail().checkPassword();



var CheckObject5 = function (){};
CheckObject5.prototype = {
    checkName : function(){return this},
    checkEmail : function(){return this}
};
var a = new CheckObject5();
a.checkName().checkEmail();

/////////////////////////
Function.prototype.addMethod = function (name, fn){
    this[name] = fn;
};
var methods = function(){};
var methods = new Function();
methods.addMethod("checkName", function(){

});
methods.checkName();


/**
 * 链式添加
 */
Function.prototype.addMethod = function (name, fn){
    this[name] = fn;
    return this;
};

/**
 * 类式调用
 */
Function.prototype.addMethod = function (name, fn){
    this.prototype[name] = fn;
    return this;
};
var Methods = function(){};
Methods.addMethod('checkName',function(){

});
var m = new Methods();
m.checkName();



