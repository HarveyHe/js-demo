/**
 * Created by harvey on 2017/1/21.
 */


var Book1 = function(id, bookName, price){
    //私有属性
    var num = 1;
    //私有方法
    function checkId(){

    };

    //特权方法
    this.getName = function(){};
    this.getPrice = function(){};
    this.setName = function(){};
    this.setPrice = function(){};

    //对象公有属性;
    this.id = id;
    this.bookName = bookName;
    this.price = price;

    //构造器
    this.setName(name);
    this.setPrice(price)


};
//类静态公有属性(对象不能访问)
Book1.isChinese = true;
//类静态公有方法(对象不能访问)
Book1.restTime = function(){

};

Book1.prototype = {
    //公有属性
    isJSBook : false,
    //公有方法
    display : function(){}
};

////////////////////////////



//利用闭包实现
var Book2 = (function(){
    //静态私有变量
    var bookNum = 0;
    //静态私有方法
    function checkBook(name){

    }

    //返回构造函数
    return function(newId, newName, newPrice){
        //私有变量
        var name, price;
        //私有方法
        function checkId(id){

        };

        //特权方法
        this.getName = function(){};
        this.getPrice = function(){};
        this.setName = function(){};
        this.setPrice = function(){};

        //对象公有属性;
        this.id = newId;

        //公有方法
        this.copy = function(){};

        bookNum++;
        if(bookNum > 100){
            throw new Error('我们仅出版100本书.')
        }

        //构造器
        this.setName(name);
        this.setPrice(price)
    }

})();

Book2.prototype = {
    //静态公有属性
    isJSBook : false,
    //静态公有方法
    display : function(){}
};


//利用闭包实现
var Book3 = (function(){
    //静态私有变量
    var bookNum = 0;
    //静态私有方法
    function checkBook(name){

    }

    //返回构造函数
    var _book = function(newId, newName, newPrice){

        //判断执行过程中,this是否是当前这个对象(如果是说明是用new创建的)
        if(this instanceof Book3){

        }else {
            return new Book3(newId, newName, newPrice);
        }
        //私有变量
        var name, price;
        //私有方法
        function checkId(id){

        };

        //特权方法
        this.getName = function(){};
        this.getPrice = function(){};
        this.setName = function(){};
        this.setPrice = function(){};

        //对象公有属性;
        this.id = newId;

        //公有方法
        this.copy = function(){};

        bookNum++;
        if(bookNum > 100){
            throw new Error('我们仅出版100本书.')
        }

        //构造器
        this.setName(name);
        this.setPrice(price)
    }


    _book.prototype = {
        //静态公有属性
        isJSBook : false,
        //静态公有方法
        display : function(){}
    };

    return _book;

})();
