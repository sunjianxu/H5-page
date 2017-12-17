/**
 * Created by sunjianxu on 2017/11/25.
 */
/*折线图*/
var H5ComponentPolyline = function (name, cfg) {
    var component = new H5ComponentBase(name, cfg);

    //绘制网格线
    var w = cfg.width;
    var h = cfg.height;
    //创建canvas元素
    var cns = document.createElement('canvas');
    //获取画笔
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;

    //把水平网格线分为 10份
    var step = 10;
    ctx.beginPath(); //开始路径
    ctx.lineWidth = 1; //划线的宽度
    ctx.strokeStyle = "#AAAAAA";
    window.ctx = ctx;
    for (var i = 0; i < step + 1; i++) {
        var y = (h / step) * i;
        ctx.moveTo(0, y);//开始的点
        ctx.lineTo(w, y);//结束的点

    }

    //垂直网格线（根据项目的个数分）
    step = cfg.data.length + 1;
    var text_w = w / step >> 0;
    for (var i = 0; i < step + 1; i++) {
        var x = (w / step) * i;
        ctx.moveTo(x, 0);//开始的点
        ctx.lineTo(x, h);//结束的点
        if (cfg.data[i]) {
            var text = $('<div class="text"></div>')
            text.text(cfg.data[i][0]);
            text.css({
                //width: text_w / 2 ,
                //left: x / 2 - text_w / 4 + text_w / 2
                width: text_w,
                left: x / 2 - text_w / 2 + text_w / 2
            })
            component.append(text);
        }

    }
    ctx.closePath();//关闭路径
    ctx.stroke();//划线
    component.append(cns);
    //数据层 ===》 加入画布
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');//画笔
    cns.width = cns.width = w;
    cns.height = cns.height = h;
    /**
     * 绘制折线图以及对应的数据和阴影
     * @param per{floot} 0到1之间的数据，会根据这个值绘制最最终数据对应的中间状态
     * @return {[Dom]} Component元素
     */
    var draw = function (per) {
        //清空画布
        ctx.clearRect(0,0,w,h);
        //绘制折线数据
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#ff8878";
        var x = 0;
        var y = 0;
        //ctx.moveTo(10,10);
        //ctx.arc(10,10,5,0,2*Math.PI);
        var row_w = (w / (cfg.data.length + 1));
        for (i in cfg.data) {
            //画圆点
            var item = cfg.data[i];
            x = row_w * i + row_w;
            y = h -(item[1] * h*per);
            ctx.moveTo(x, y);
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
        }
        //连线
        //移动画笔的初始点到第一个数据的点的位置
        ctx.moveTo(row_w, h - ( cfg.data[0][1]* h*per));
        for (i in cfg.data) {
            var item = cfg.data[i];
            x = row_w * i + row_w;
            y = h -(item[1] * h*per);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(255,136,120,0)';
        //绘制阴影
        ctx.lineTo(x, h);
        ctx.lineTo(row_w, h);
        ctx.fillStyle = 'rgba(255,136,120,.2)';
        ctx.fill();
        //写数据
        for (i in cfg.data) {
            var item = cfg.data[i];
            x = row_w * i + row_w;
            y = h -(item[1] * h*per);
            ctx.fillStyle = item[2] ? item[2] : '#595959';
            ctx.fillText(((item[1] * 100) >> 0) + '%', x - 10, y - 10);
        }
        //ctx.closePath();//关闭路径
        ctx.stroke();//划线
        component.append(cns);
    }
    //折线图生长的动画
    component.on('afterLoad', function () {
        var s = 0;
        for (var i = 0; i < 100; i++) {
            setTimeout(function(){
                s+= 0.01;
                draw(s);
            },i*10+500)
        }
    });
    //折线图退场的动画
    component.on('onLeave', function () {
        var s = 1;
        for (var i = 0; i < 100; i++) {
            setTimeout(function(){
                s-= 0.01;
                draw(s);
            },i*10)
        }
    });
    return component;
}


