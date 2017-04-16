/**
 * Created by harvey on 2017/1/21.
 */
//图片轮播类
var LoopImages = function (imgArr, container) {
    this.imagesArray = imgArr;          //轮播图片数组
    this.container = container;         //轮播图片容器
    this.createImage = function () {    //创建轮播图片

    }
    this.changeImage = function () {    //切换下一张图片

    }
}

//上下滑动切换类
var SlideLoopImg = function(imgArr, container, arrow){
    //构造函数继承图片轮播类
    LoopImages.call(this,imgArr,container);
    //切换箭头私有变量
    this.arrow = arrow;
    //重写继承的切换下一张图片方法
    this.changeImage = function () {

    }
}
//渐隐切换类
var FadeLoopImg = function(imgArr, container){
    //构造函数继承图片轮播类
    LoopImages.call(this,imgArr,container);
    //重写继承的切换下一张图片方法
    this.changeImage = function () {

    }
}
//
//实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg([
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg'
],'slide',[
    'left.jpg',
    'right.jpg'
]);
fadeImg.changeImage();






///////////////////

//图片轮播类
var LoopImages = function (imgArr, container) {
    this.imagesArray = imgArr;          //轮播图片数组
    this.container = container;         //轮播图片容器

};
LoopImages.prototype = {
    createImage : function () {    //创建轮播图片

    },
    changeImage : function () {    //切换下一张图片

    }
};
//上下滑动切换类
var SlideLoopImg = function(imgArr, container){
    //构造函数继承图片轮播类
    LoopImages.call(this,imgArr,container);

};
SlideLoopImg.prototype = new LoopImages();
//重写继承的切换下一张图片方法
SlideLoopImg.prototype.changeImage = function () {

}
//渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow){
    //构造函数继承图片轮播类
    LoopImages.call(this,imgArr,container);
    //切换箭头私有变量
    this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages();
//重写继承的切换下一张图片方法
FadeLoopImg.prototype.changeImage = function () {

};
//
//实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg([
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg'
],'slide',[
    'left.jpg',
    'right.jpg'
]);
fadeImg.changeImage();




////////
/**
 * 基于已经存在的模板对象克隆出新对象的模式
 * arguments[0] ... :参数1,... 表示模板对象
 * 注意.这里对模板引用类型的属性实质上进行了浅复制(引用类型属性共享),当然根据需求可以自行深复制(引用类型属性复制)
 */
function prototypeExtend(){
    var F = function () {},//缓存类,为实例化返回对象临时创建
        args = arguments,       //模板对象参数系列
        i = 0,
        len = args.length;
    for(; i < len; i++){
        //遍历每个模板对象中的属性
        for(var j in args[i]){
            //将这些属性复制到缓存类原型中
            F.prototype[j] = args[i][j];
        }
    }
    //返回缓存类的一个实例
    return new F();
}




























