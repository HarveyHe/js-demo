/**
 * Created by harvey on 2017/1/22.
 */
var News = function () {
    //子组件容器
    this.children = [];
    //当前组件元素
    this.element = null;

}
News.prototype = {
    init : function () {
        throw  new Error("请重写你的方法")
    },
    add : function () {
        throw  new Error("请重写你的方法")
    },
    getElement : function () {
        throw  new Error("请重写你的方法")
    }
};


//容器类构造函数
var Container = function (id, parent) {
    //构造函数继承父类
    News.call(this);
    //模块id
    this.id = id;
    //模块的父容器
    this.parent = parent;
    //构建方法
    this.init();
};
//寄生式继承父类原型方法
inheritPrototype(Container, News);

//构建方法
Container.prototype.init = function () {
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container';
};
//添加子类元素方法
Container.prototype.add = function (child) {
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;

}
//获取当前元素方法
Container.prototype.getElement = function () {
    return this.element;
}
//显示方法
Container.prototype.show = function () {
    this.parent.appendChild(this.element)
};


var Item = function (className) {
    //构造函数继承父类
    News.call(this);
    this.className = className || '';

    //构建方法
    this.init();
};
//寄生式继承父类原型方法
inheritPrototype(Item, News);

//构建方法
Item.prototype.init = function () {
    this.element = document.createElement('li');
    this.element.className = this.className;
};
//添加子类元素方法
Item.prototype.add = function (child) {
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;

}
//获取当前元素方法
Item.prototype.getElement = function () {
    return this.element;
};


var NewsGroup = function (className) {
    //构造函数继承父类
    News.call(this);
    this.className = className || '';

    //构建方法
    this.init();
};
//寄生式继承父类原型方法
inheritPrototype(NewsGroup, News);

//构建方法
NewsGroup.prototype.init = function () {
    this.element = document.createElement('div');
    this.element.className = this.className;
};
//添加子类元素方法
NewsGroup.prototype.add = function (child) {
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;

}
//获取当前元素方法
NewsGroup.prototype.getElement = function () {
    return this.element;
}







//底层新闻类
//
var ImageNews = function (url, href, className) {
    News.call(this);

    this.url = url || '';
    this.href = href || '#';
    this.className = className || 'normal';
    //构建方法
    this.init();
};
//寄生式继承父类原型方法
inheritPrototype(ImageNews, News);

//构建方法
ImageNews.prototype.init = function () {
    this.element = document.createElement('a');
    var img = new Image();
    img.src = this.url;
    this.element.appendChild(img);
    this.element.className = 'image-news ' + this.className;
    this.element.href = this.href;
};
ImageNews.prototype.add = function (child) {};
ImageNews.prototype.getElement = function () {
    return this.element;
};

var IconNews = function (text, href, type) {
    News.call(this);

    this.text = text || '';
    this.href = href || '#';
    this.type = type || 'video';
    //构建方法
    this.init();
};
//寄生式继承父类原型方法
inheritPrototype(IconNews, News);

//构建方法
IconNews.prototype.init = function () {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'icon ' + this.type;
};
IconNews.prototype.add = function (child) {};
IconNews.prototype.getElement = function () {
    return this.element;
};

var EasyNews = function (text, href) {
    News.call(this);

    this.text = text || '';
    this.href = href || '#';
    //构建方法
    this.init();
};
//寄生式继承父类原型方法
inheritPrototype(EasyNews, News);

//构建方法
EasyNews.prototype.init = function () {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'text ';
};
EasyNews.prototype.add = function (child) {};
EasyNews.prototype.getElement = function () {
    return this.element;
};

var TypeNews = function (text, href, type, pos ) {
    News.call(this);

    this.text = text || '';
    this.type = type || '';
    this.href = href || '#';
    this.pos = pos || 'left';
    //构建方法
    this.init();
};
//寄生式继承父类原型方法
inheritPrototype(TypeNews, News);

//构建方法
TypeNews.prototype.init = function () {
    this.element = document.createElement('a');
    if(this.pos === 'left'){
        this.element.innerHTML = '[' + this.type + ']' + this.text;
    }else{
        this.element.innerHTML = this.text + '[' + this.type + ']';
    }
    this.element.href = this.href;
    this.element.className = 'text ';
};
TypeNews.prototype.add = function (child) {};
TypeNews.prototype.getElement = function () {
    return this.element;
};


var _init1 = function () {

    var news1 = new Container('news',window.document.body);

    news1.add(
        new Item('normal').add(
            new IconNews('梅西不拿金球也伟大','#','video')
        )
    ).add(
        new Item('normal').add(
            new IconNews('保护强国强队用意明显','#','live')
        )
    ).add(
        new Item('normal').add(
            new IconNews('梅西不拿金球也伟大','#','video')
        )
    ).add(
        new Item('normal').add(
            new NewsGroup('has-img').add(
                new ImageNews('img/1.jpg','#','small')
            ).add(
                new EasyNews("从240斤胖子成功变成型男",'#')
            ).add(
                new EasyNews("武大雷人跑步机",'#')
            )

        )
    ).add(
        new Item('normal').add(
            new TypeNews('AK47不愿为肥城打球','#','NBA','left')
        )
    ).add(
        new Item('normal').add(
            new TypeNews('火炮三分创新高','#','CBA','right')
        )
    ).show();

}







































































