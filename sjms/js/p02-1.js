/**
 * Created by harvey on 2017/1/21.
 */
//子类的原型对象--类式继承
//声明父类
function SuperClass(){
    this.superValue = true;
}
//为父类添加共有方法
SuperClass.prototype.getSuperValue = function () {
  return this.superValue;
};


//声明子类
function SubClass(){
    this.subValue = false;
}

//继承父类
SubClass.prototype = new SuperClass();
//为子类添加共有方法
SubClass.prototype.getSubValue = function () {
    return this.subValue;
};

//////////



//构造函数式继承
function SuperClass(id){
    //引用类型共有属性
    this.books = ["JavaScript","html","css"];
    //值类型共有属性
    this.id = id;
}
//父类声明原型方法
SuperClass.prototype.showBooks = function () {
   console.log(this.books)
};

//声明子类
function SubClass(id){
    //继承父类
    SuperClass.call(this,id);
}

//创建第一个子类实例
var instance1 = new SubClass(10);
//创建第二个子类实例
var instance2 = new SubClass(12);



///////////////
//组合式继承
function SuperClass(name){
    //引用类型共有属性
    this.books = ["JavaScript","html","css"];
    //值类型共有属性
    this.name = name;
}
//父类声明原型方法
SuperClass.prototype.getName = function () {
   console.log(this.name)
};

//声明子类
function SubClass(name,time){
    //构造函数式继承父类name 属性
    SuperClass.call(this,name);
    //子类中新增共有属性
    this.time = time;
}
//类式继承, 子类原型继承父类
SubClass.prototype = new SuperClass()
//子类原型方法
SubClass.prototype.getTime = function () {
  console.log(this.time)
};



///////////////
//原型是继承
function inheritObject(o){
    //声明一个过渡函数对象
    function F(){}
    //过渡对象的原型继承父对象
    F.prototype = o;
    //返回过渡对象的一个实例,该实例的原型继承了父对象
    return new F();

}


/////////
//寄生式继承
//声明基对象
var book = {
    name : "js book",
    alikeBook : ['css book','html book']
};
function createBook(obj){
    //通过原型继承方式创建新对象
    var o = new inheritObject(obj);
    //扩展新对象
    o.getName = function(){
        console.log(name);
    };
    //返回扩展后的新对象
    return o;
}


///////
/**
 * 寄生式继承 继承原型
 *
 * @param subClass
 * @param superClass
 */
function inheritPrototype(subClass,superClass){
    //复制一份父类的原型副本保持在变量中
    var p = inheritObject(superClass.prototype);
    //修正因为重写子类原型导致子类的constructor 属性被修改
    p.constructor = subClass;
    //设置子类的原型
    subClass.prototype = p;
}


////////////多继承

//单继承 属性复制
var extend = function (target,source) {
    //变量源对象中的属性
    for (var property in source){
        //将源对象中的属性复制到目标对象中
        target[property] = source[property];
    }
    //返回目标对象
    return target;

};

//多继承 属性复制
var mix = function () {
    var i = 1,
        len = arguments.length,
        target = arguments[0],
        arg;
    //遍历被继承的对象
    for(;i < len; i++){
        //缓存当前对象
        arg = arguments[i];
        //遍历被继承对象中的属性
        for (var property in arg){
            //将被继承对象中的属性复制到目标对象中
            target[property] = arg[property];
        }

    }
    //返回目标对象
    return target;
}
Object.prototype.mix = function () {
    var i = 1,
        len = arguments.length,
        arg;
    //遍历被继承的对象
    for(;i < len; i++){
        //缓存当前对象
        arg = arguments[i];
        //遍历被继承对象中的属性
        for (var property in arg){
            //将被继承对象中的属性复制到目标对象中
            this[property] = arg[property];
        }

    }
}

////////多态
function add(){
    var arg = arguments,
        len = arg.length;
    switch(len) {
        case 0 :
            return 10;
        case 1 :
            return 10 + arg[0];
        case 2 :
            return arg[0] + arg[1];
    }
}

function Add (){
    function zero (){
        return 10;
    }
    function one (num){
        return 10 + num;
    }
    function two (num1, num2){
        return num1 + num2;
    }
    this.add = function () {

        var arg = arguments,
            len = arg.length;
        switch(len) {
            case 0 :
                return zero();
            case 1 :
                return one(arg[0]);
            case 2 :
                return two(arg[0] + arg[1]);
        }
    }
}
































