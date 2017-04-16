/**
 * Created by harvey on 2017/1/22.
 */
var MarryState = function () {
    //内部状态私有变量
    var _currentState = {},
        //动作与状态方法映射
        states = {
            jump : function () {

            },
            move : function () {

            },
            shoot : function () {


            },
            squat : function () {

            }
        };
    //动作控制类
    var Action = {
        //改变状态方法
        changeState : function () {
            //组合动作通过传递多个参数实现
            var arg = arguments;
            //重置内部状态
            _currentState = {};
            //如果动作则添加动作
            if(arg.length){
                for ( var i = 0, len = arg.length; i < len; i++){
                    _currentState[arg[i]] = true;
                }
            }
            return this;
        },
        //执行动作
        goes : function () {
            for (var i in _currentState){
                states[i] && states[i]()
            }
            return this;
        }
    }

    //返回接口方法
    return {
        change : Action.changeState,
        goes : Action.goes
    }

};

MarryState().change("jump",'shoot').goes().goes().change('shoot').goes();
(new MarryState()).change("jump",'shoot').goes().goes().change('shoot').goes();