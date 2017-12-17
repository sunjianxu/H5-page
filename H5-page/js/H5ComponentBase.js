/**
 * Created by sunjianxu on 2017/11/24.
 */
//基本的图文组件对象
var H5ComponentBase = function (name,cfg) {
    var cfg = cfg || {};
    var id = ('h5_c_'+ Math.random()).replace('.','_');
    //把当前的组件类型添加到样式中进行标记
    var cls = ' h5_component_' + cfg.type ;
    var component = $('<div class="h5_component '+cls+' h5_component_name_' + name+'" id="'+id+'"></div>');
    cfg.text && component.text(cfg.text);
    cfg.width && component.width(cfg.width/2);
    cfg.height && component.height(cfg.height/2);
    cfg.css && component.css(cfg.css);
    cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');
    if (cfg.center === true) {
        component.css({
            marginLeft: (cfg.width/4 * -1)+'px',
            left: '50%'

        })
    }
    /**赋予点击的功能*/
    if (typeof (cfg.onclick) === 'function') {
        component.on('click',cfg.onclick);
    }
    component.on('afterLoad', function () {
        setTimeout(function () {
            component.addClass(cls + '_load').removeClass(cls + '_leave');
            cfg.animateIn && component.animate(cfg.animateIn);
        },cfg.delay || 0);
        return false;//阻止默认事件和冒泡事件
    })
    component.on('onLeave', function () {
        setTimeout(function () {
            component.addClass(cls + '_leave').removeClass(cls + '_load');
            cfg.animateOut && component.animate(cfg.animateOut);
        },cfg.delay || 0);
        return false;//阻止默认事件和冒泡事件
    })

    return component;

};