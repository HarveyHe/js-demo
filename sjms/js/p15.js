/**
 * Created by harvey on 2017/1/22.
 */

//享元对象
var Flyweight = function () {
    //已创建的元素
    var created = [];
    //创建一个新闻包装容器
    function create(){
        var dom = document.createElement('div');
        //将容器插入新闻列表容器中
        document.getElementById('container').appendChild(dom);
        //缓存新创建的元素
        created.push(dom);
        //返回创建的新元素
        return dom;
    }

    return {
        //获取创建新闻元素方法
        getDiv : function () {
            //如果已创建的元素小于当前页元素总个数,则创建
            if(created.length < 5 ){
                return create();
            }else{
                //获取第一个元素,并插入最后面
                var div = created.shift();
                created.push(div);
                return div;
            }
        }
    }
};

var article = [];
var paper = 0,
    num = 5,
    len = article.length;
for(var i = 0; i < 5; i++){
    if(article[i]){
        //通过享元类获取创建的元素并写入新闻内容
        Flyweight.getDiv().innerHTML = article[i];
    }
}

document.getElementById('next_page').onclick = function () {
    if(article.length < 5 ){
        return;
    }
    var n = ++paper *num % len,//获取当前页的第一条新闻索引
        j = 0 ; //循环变量
    //插入5条新闻
    for(; j < 5; j++){
        //如果存在第 n+ j条数据则插入
        if(article[n + j]){
            Flyweight.getDiv().innerHTML = article[n + j];
        }else if(article[n + j - len]){
            Flyweight.getDiv().innerHTML = article[n + j - len];
        }else {
            Flyweight.getDiv().innerHTML = '';
        }
    }
}





//享元动作
var FlyWeight = {
    moveX : function (x) {
        this.x = x;
    },
    moveY : function (y) {
        this.y = y;
    }
};

//继承移动方法
var Player = function (x, y, c) {
    this.x = x;
    this.y = y;
    this.color = c;
};
Player.prototype = FlyWeight;
Player.prototype.changeC = function (c) {
    this.color = c;
};


var Spirit = function (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
};
Spirit.prototype = FlyWeight;
Spirit.prototype.changeR = function (r) {
    this.r = r;
};
