/**
 * Created by harvey on 2017/1/21.
 */
//简单工厂模式
//篮球基类
var Basketball = function () {
    this.intro = '篮球盛行于美国';
};
Basketball.prototype = {
    getMember : function () {
        console.log('每个队伍需要5名队员');

    },
    getBallSize : function () {
        console.log('篮球很大');
    }
};
//足球基类
var Football = function () {
    this.intro = '足球在时间范围都很流行';
};
Football.prototype = {
    getMember : function () {
        console.log('每个队伍需要11名队员');

    },
    getBallSize : function () {
        console.log('足球很大');
    }
};
//篮球基类
var Tennis = function () {
    this.intro = '每年都有很大网球系列赛';
};
Tennis.prototype = {
    getMember : function () {
        console.log('每个队伍需要1名队员');

    },
    getBallSize : function () {
        console.log('网球很小');
    }
};

//运动工厂
var SportFactory = function (name) {
    switch (name){
        case 'NBA' :
            return new Basketball();
        case 'wordCup' :
            return new Football();
        case 'FrenchOpen' :
            return new Tennis();
    }
}
//工厂模式
function createBook (name, time, type){
    //创建一个对象,并对对象扩展属性和方法
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function(){

    }

    return o;
}