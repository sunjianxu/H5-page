/**
 * Created by sunjianxu on 2017/11/25.
 */
/*雷达图*/
var H5ComponentRadar = function (name, cfg) {
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
    component.append(cns);

    var r = w/2;
    var step = cfg.data.length;

    /*
    计算一个圆周角的坐标，（计算多边形的顶点坐标）
    已知：圆点的坐标（a,b）,半径r;角度deg
    rad = (2*Math.PI / 360) * (360 / step) * i
    x = a + Math.sin(rad) * r;
    y = b + Math.cos( rad ) * r;
     */
    //绘制网格背景【分面绘制，分为十份
    var isBlue = false;
    for (var s = 10; s > 0; s--) {
        ctx.beginPath();
        for (var i = 0; i < step; i++) {
            var rad = (2*Math.PI / 360) * (360 / step) * i;
            var x = r + Math.sin(rad) * r*(s/10);
            var y = r + Math.cos( rad ) * r*(s/10);
            ctx.lineTo(x,y);

        }
        ctx.closePath();
        ctx.fillStyle = (isBlue = !isBlue) ? '#99c0ff':'#f1f9ff';
        ctx.fill();
    }
    //绘制伞骨
    for(var i = 0; i < step; i++) {
        var rad = (2*Math.PI / 360) * (360 / step) * i;
        var x = r + Math.sin(rad) * r;
        var y = r + Math.cos( rad ) * r;
        ctx.moveTo(r,r);
        ctx.lineTo(x,y);
    // 输出项目文字
        var text = $('<div class="text"></div>');
        text.text(cfg.data[i][0]);
        //设置每个.text的出场过渡动画效果
        text.css('-webkit-transition','all .5s ' + i*0.1 + 's');
        text.css('-moz-transition','all .5s ' + i*0.1 + 's');
        text.css('-ms-transition','all .5s ' + i*0.1 + 's');
        text.css('-o-transition','all .5s ' + i*0.1 + 's');
        text.css('transition','all .5s ' + i*0.1 + 's');
        if (x > w/2) {
            text.css('left',x/2+5);
        }else {
            text.css('right',(w-x)/2+5);
        }
        if (y > h/2) {
            text.css('top',y/2+5);
        }else {
            text.css('bottom',(h-y)/2+5);
        }
        if (cfg.data[i][2]){
            text.css('color',cfg.data[i][2]);
        }
        text.css('opacity',0);
        component.append(text);

    }
    ctx.strokeStyle = "#e0e0e0";
    ctx.stroke();
    //数据层的开发
    //创建一个画布（数据层）
    var cns = document.createElement('canvas');
    //获取画笔
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    component.append(cns);
    ctx.strokeStyle = "#f00";
    var draw = function (per) {
        if (per < 1) {
            component.find('.text').css('opacity',0);
        }
        if (per >= 1) {
            component.find('.text').css('opacity',1);
        }
    //  清除画布
        ctx.clearRect(0,0,w,h);
    // 循环输出数据的折线
        for(var i = 0; i< step; i++) {
            var rad = (2*Math.PI / 360) * (360 / step) * i
            var rate = cfg.data[i][1] * per;
            var x = r + Math.sin(rad) * r * rate;
            var y = r + Math.cos( rad ) * r* rate;
            ctx.lineTo(x,y);
        }

        ctx.closePath();
        ctx.stroke();
    //    输出数据的点
        ctx.fillStyle = "#ff7676";
        for(var i = 0; i< step; i++) {
            var rad = (2*Math.PI / 360) * (360 / step) * i
            var rate = cfg.data[i][1] * per;
            var x = r + Math.sin(rad) * r * rate;
            var y = r + Math.cos( rad ) * r* rate;
            ctx.beginPath();
            ctx.arc(x,y,5,0,2*Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    }
    //雷达图生长的动画
    component.on('afterLoad', function () {
        var s = 0;
        for (var i = 0; i < 100; i++) {
            setTimeout(function(){
                s+= 0.01;
                draw(s);
            },i*10+500)
        }
    });
    //雷达图退场的动画
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


