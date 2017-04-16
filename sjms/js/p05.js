/**
 * Created by harvey on 2017/1/21.
 */

//汽车抽象类,当使用其实例对象的方法时会抛出错误
var Car = function () {

};
Car.prototype = {
    getPrice : function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed : function () {
        return new Error('抽象方法不能调用')
    }
};
//////////////////
//抽象工厂方法
var VehicleFactory = function (subType, superType) {
    //判断抽象工厂中是否有该抽象类
    if(typeof VehicleFactory[superType] === 'function'){
        //缓存类
        function F(){};
        //继承父类属性和方法
        F.prototype = new VehicleFactory[superType]();;
        //将子类constructor 指向子类
        subType.constructor = subType;
        //子类原型继承'父类'
        subType.prototype = new F();
    }else {
        //不存在该抽象类抛出错误
        throw new Error('未创建该抽象类');
    }

};
//小汽车抽象类
VehicleFactory.Car = function () {
    this.type = 'car';
};
VehicleFactory.Car.prototype = {
    getPrice : function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed : function () {
        return new Error('抽象方法不能调用')
    }
};

//公交车抽象类
VehicleFactory.Bus = function () {
    this.type = 'bus';
};
VehicleFactory.Bus.prototype = {
    getPrice : function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed : function () {
        return new Error('抽象方法不能调用')
    }
};

//货车抽象类
VehicleFactory.Truck = function () {
    this.type = 'truck';
};
VehicleFactory.Truck.prototype = {
    getPrice : function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed : function () {
        return new Error('抽象方法不能调用')
    }
};

/////////
//宝马汽车类
var BMW = function (price, speed) {
    this.price = price;
    this.speed = speed;
};
//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW,'Car');
BMW.prototype.getPrice = function () {
    return this.price;
};
BMW.prototype.getSpeed = function () {
    return this.speed;
};