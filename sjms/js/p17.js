/**
 * Created by harvey on 2017/1/22.
 */
//将观察者放在闭包中,当页面加载立即执行
var Observer = (function () {
    //防止消息队列暴露而被篡改故将消息容器作为静态私有变量保持
    var _messages = {};
    return {
        //注册信息接口
        regist : function (type, fn) {
            if(typeof _messages[type] === 'undefined'){
                _messages[type] = [fn];
            }else{
                _messages[type].push(fn);
            }
        },
        //发布信息接口
        fire : function (type, args) {
            //如果该消息没有被注册,则返回
            if(!_messages[type]){
                return;
            }
            //定义消息信息
            var events = {
                type : type,        //消息类型
                args :args || {}    //消息携带数据
            },
                i = 0,
                len = _messages[type].length;
            for(;i < len; i++){
                //依次执行注册的消息对应的动作序列
                _messages[type][i].call(this, events);
            }
        },
        //移除信息接口
        remove : function(type,fn){
            if(_messages[type] instanceof Array){
                //从最后一个消息动作遍历
                var i = _messages[type].length - 1;
                for(; i >= 0 ;i--){
                    //如果存在该动作则在消息动作序列中移除相应动作
                    _messages[type][i] === fn && _messages[type].splice(i,1)
                }
            }
        }
    }

})();


//外观模式 简化获取元素
function $(id){
    return document.getElementById(id);
}
//工程师A
(function () {
    //追加一则消息
    function addMsgItem(e){
        var test = e.args.text,                     //获取消息中用户添加的文本内容
            ul = $('msg'),                          //留言容器元素
            li = document.createElement('li'),      //创建内容容器元素
            span = document.createElement('span');  //删除按钮
        li.innerHTML = text;                        //写入评论
        //关闭按钮
        span.onclick = function () {
            ul.removeChild(li); //移除留言
            //发布删除留言消息
            Observer.fire('removeCommentMessage',{num:-1});
        }
        //添加删除按钮
        li.appendChild(span);
        ul.appendChild(li);
    }
    //注册添加评论信息
    Observer.regist('addCommentMessage',addMsgItem);
})();
//工程师B
(function () {
    //更改用户消息数目
    function changeMsgNum(e){
        //获取需要增加的用户消息数目
        var num = e.args.num;
        //增加用户消息数目并写入页面中
        $('msg_num').innerHTML = parseInt($('msg_num').innerHTML) + num;
    }
    //注册添加评论信息
    Observer.regist('addCommentMessage',changeMsgNum)
        .regist('removeCommentMessage',changeMsgNum);
})();
//工程师C
(function () {
    //用户点击提交按钮
    $('user_submit').onclick = function () {
        var text = $('user_input');
        if(text.value === ''){
            return;
        }
        //发布一则评论消息
        Observer.fire('addCommentMessage',{
            text : text.value,
            num : 1
        });
        text.value = '';
    }
})();






/////////
//学生类
var Student = function (result) {
    var that = this;
    that.result = result;
    that.say = function () {
        console.log(that.result)
    }
};
Student.prototype.answer = function (question) {
    //注册参数问题
    Observer.regist(question, this.say)
};

Student.prototype.sleep = function (question) {
    console.log(this.result + ' ' + question + " 已被注销");
    //取消对老师问题的监听
    Observer.remove(question,this.say)
}