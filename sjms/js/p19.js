/**
 * Created by harvey on 2017/1/22.
 */
//策略对象
var PriceStrategy = function () {
    //内部算法对象
    var strategy = {
        //100 返 30
        return30 : function (price) {
            return +price + parseInt(price / 100 ) * 30;
        },
        return50 : function (price) {
            return +price + parseInt(price / 100 ) * 50;
        },
        //9折
        percent90 : function (price) {
            return +price * 100 * 90 /10000;
        },
        percent80 : function (price) {
            return +price * 100 * 80 /10000;
        },
        percent50 : function (price) {
            return +price * 100 * 50 /10000;
        }
    }
    //策略算法调用接口
    return function (algorithm, price) {
        //如果算法存在,则调用算法,否则返回false
        return strategy[algorithm] && strategy[algorithm](price);
    }
};
var price = PriceStrategy('return50', '314.67');


//表单正则验证策略对象
var InputStrategy = function () {
    var strategy ={
        notNull : function (value) {
            return /\s+/.test(value) ? '请输入内容' : '';
        },
        //是否是一个数字
        number : function (value) {
            return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' :'请输入数字';
        },
        //是否是本地电话
        phone : function (value) {
            return /^\d{3}\-\d{8}$|^\d{4}\-\d{7}$/.test(value) ? '' :'请输入正确的电话号码格式,如:010-12345678 或者 0418-1234567';
        }
    }
    return {
        //验证接口 type算法 value表单值
        check : function (type, value) {
            //去除首尾空白符
            value = value.replace(/^\s+|\s+$/g, '');
            return strategy[type] ? strategy[type](value) : '没有该类型的检验方法';

        },
        //添加策略
        addStrategy : function (type, fn) {
            strategy[type] = fn;

        }
    }
};
//扩展 可以延伸算法
InputStrategy.addStrategy('nickname', function (value) {
    return /^[a-zA-Z]\w{3,7}$/.test(value) ? '' : '请输入4-8位昵称,如:YYQH';
});
