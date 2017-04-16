/**
 * Created by harvey on 2017/1/22.
 */

//模板类 基础提示框data
var Alert = function (data) {
    //没有数据则返回,防止后面程序执行
    if(!data){
        return;
    }
    //设置内容
    this.content = data.content;
    //创建提示框面板
    this.panel = document.createElement('div');
    //创建提示内容组件
    this.contentNode = document.createElement('p');
    //创建确定按钮组件
    this.confirmBtn = document.createElement('span');
    //创建关闭按钮组件
    this.closeBtn = document.createElement('b');

    this.panel.className = 'alert';
    this.closeBtn.className = 'a-close';
    this.confirmBtn.className = 'a-confirm';

    //为确定按钮添加文案
    this.confirmBtn.innerHTML = data.confirm || '确认';
    //为提示内容添加文本
    this.contentNode.innerHTML = this.content;

    //点击确定按钮执行方法
    this.success = data.success || function () {};
    //点击关闭按钮执行方法
    this.fail = data.fail || function () {};
};

//提示框原型方法
Alert.prototype = {
    //创建方法
    init : function () {
        //生成提示框
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);

        //插入页面中
        document.body.appendChild(this.panel);
        //绑定事件
        this.bindEvent();
        //显示提示框
        this.show();
    },
    bindEvent : function () {
        var me = this;
        this.closeBtn.onclick = function () {
            me.fail();
            //隐藏弹层
            me.hide();
        }
        this.confirmBtn.onclick = function () {
            me.success();
            //隐藏弹层
            me.hide();
        }
    },
    hide : function () {
        this.panel.style.display = 'none';
    },
    show : function () {
        this.panel.style.display = 'block';
    }
};

//右侧按钮提示框
var RightAlert = function (data) {
    //继承基本提示框构造函数
    Alert.call(this,data);
    //为确认按钮添加right类设置位置居右
    this.confirmBtn.className = this.confirmBtn.className + " right";
}
//继承基本提示框方法
RightAlert.prototype = new Alert();


//标题提示框
var TitleAlert = function (data) {
    //继承基本提示框构造函数
    Alert.call(this, data);
    this.title = data.title;
    //创建标题组件
    this.titleNode = document.createElement('h3');
    this.titleNode.innerHTML = this.title;
}
TitleAlert.prototype = new Alert();
TitleAlert.prototype.init = function () {
   //插入标题
    this.panel.insertBefore(this.titleNode, this.panel.firstChild);
    //继承基本提示框init方法
    Alert.prototype.init.call(this)
};


//继承类也可以做为模板类
//带有取消按钮的弹出框
var CancelAlert = function (data) {
    //继承标题提示框构造函数
    TitleAlert.call(this, data);
    this.cancel = data.cancel;
    this.cancelBtn = document.createElement('span');
    this.cancelBtn.className = 'cancel';
    this.cancelBtn.innerHTML = this.cancel || '取消';
};
CancelAlert.prototype = new Alert();
CancelAlert.prototype.init = function () {
    TitleAlert.prototype.init.call(this);
    this.panel.appendChild(this.cancelBtn)
};
CancelAlert.prototype.bindEvent = function () {
    var me = this;
    this.cancelBtn.onclick = function () {
        me.fail();
        //隐藏弹层
        me.hide();
    }
}








//////////////导航
//格式化字符串方法
function formateString(str, data){
    return str.replace(/\{#(\w+)#}/g, function (match, key) {
        return typeof data[key] === undefined ? '' : data[key];
    });
}
//基础导航
var Nav = function (data) {
    this.item = '<a href="{#href#}" title="{#title#}">{#name#}</a>';
    //
    this.html = '';
    for(var i = 0,len = data.length;i<len;i++){
        this.html += formateString(this.item, data[i])
    }
    return this.html;
};

//带消息提醒信息导航
var NumNav = function (data) {
    //消息提醒信息组件模板
    var tpl = '<b>{#num#}</b>';
    //装饰数据
    for(var i = data.length - 1;i >= 0;i--){
        data[i].name +=data[i].name + formateString(tpl,data[i]);

    }
    return Nav.call(this, data);
}





























