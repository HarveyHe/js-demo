/**
 * UT Library v1.0.0
 * Author Harvey.he
 * Date 2017/4/15
 */
//~屏蔽压缩报错
~(function (window) {
    /**
     *
     * @name            框架单体对象 UT
     * @param selector  选择器或页面加载回调函数
     * @param context   查询元素上下文
     * @constructor
     */
    var UT = function(selector, context){
        //如果selector 为方法则为窗口添加页面加载完成事件监听
        if(typeof selector == 'function'){
            UT(window).on('load', selector);
        }else {
            //创建UT对象
            return new UT.fn.init(selector, context);

        }
    };


    //原型方法
    UT.fn = UT.prototype = {
        //强化构造函数
        constructor : UT,
        //构造函数
        init : function (selector, context) {
            //modify 选择器为元素
            if(typeof selector === 'object'){
                this[0] = selector;
                this.length = 1;
                return this ;
            }
            //设置获取到的元素长度属性
            this.length = 0;
            //矫正上下文
            context = document.getElementById(context) || document ;
            //如果是id选择器
            if(~selector.indexOf('#')){
                this[0] = document.getElementById(selector.slice(1));
                this.length = 1;

            //如果是类选择器
            }else  if(~selector.indexOf('.')){
                var doms = [],
                    className = selector.slice(1);
                //支持通过类获取元素的方法
                if(context.getElementsByClassName){
                    doms = context.getElementsByClassName(className);
                }else{
                    doms = context.getElementsByTagName('*');
                }

                //设置获取到的元素
                for (var i = 0, len = doms.length; i < len; i++){
                    if(doms[i].className && !!~doms[i].className.indexOf(className)){
                        this[this.length] = doms[i];
                        //矫正长度
                        this.length ++ ;
                    }
                }
            //否则为元素名选择器
            }else{
                var doms = context.getElementsByTagName(selector),
                    i = 0,
                    len = doms.length;
                for(; i < len; i++){
                    this[i] = doms[i];

                }
                this.length = len;
            }
            //设置当前对象的选择上下文
            this.context = context;
            //设置当前对象的选择器
            this.selector = selector;
            return this;

        },
        //元素长度
        length : 0,
        //增强数组
        push : [].push,
        splice : [].splice
    };

    //设置构造函数原型
    UT.fn.init.prototype = UT.fn;


    /**
     * @name 对象拓展
     * @param[0] 目标对象
     * @param[1,...]    拓展对象
     * @type {UT.extend}
     */
    UT.extend = UT.fn.extend = function () {
        var i = 1,
            len = arguments.length,
            target = arguments[0],
            j;
        //如果是一个参数,则为当前对象拓展方法
        if(i == len){
            target = this;
            i--;
        }
        //遍历拓展对象
        for(; i < len; i++){
            //遍历拓展对象中方法与属性
            for(j in arguments[i]){
                //浅复制
                target[j] = arguments[i][j];
            }
        }
        //返回目标对象
        return target;
    };

    //单体对象UT方法拓展
    UT.extend({
        /**
         * @name 将横线式命名字符串转化为驼峰式
         * eg : 'test-demo' -> 'testDemo'
         * @param str
         * @returns {XML|string|void}
         */
        camelCase : function (str) {
            return str.replace(/\-(\w)/g, function (match, letter) {
                return letter.toUpperCase();
            });
        },
        /**
         * @name 去除字符串两端空白符
         * @param str
         */
        trim : function (str) {
            return str.replace(/^\s+|\s+$/g,'');
        },
        /**
         * @name 格式化模板
         * @param str   模板字符串
         * @param data  渲染数据
         * eg : '<div>{#value#}</div>' +  {value:'test'} -> '<div>test</div>'
         */
        formatString : function (str, data) {
            var html = '';
            //如果渲染数据是数组,则遍历数组并渲染
            if(data instanceof Array){
                for(var i = 0, len = data.length; i < len; i++){
                    html += arguments.callee(str, data[i]);
                }
                return html;
            }else {
                //搜索{#key#}格式字符串,并在data中查询相应的key属性替换
                return str.replace(/\{#\w+}#\}/g, function (match, key) {
                    return typeof data === 'string' ? data : (typeof  data[key] === 'undefined' ? '' : data[key]);
                });

            }

        }
    });

    //为全局对象绑定UT框架
    window.UT = UT;
})(window);