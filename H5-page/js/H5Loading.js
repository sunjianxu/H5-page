/**
 * Created by sunjianxu on 2017/11/30.
 */
//loading加载
var H5Loading = function (images,firstPage) {
    /*第一次进入页面*/
    var id = this.id;
    if (this._images == undefined) {
        this._images = (images || []).length;
        this._loaded = 0;
        //把当前对象存储在全局对象window用来进行某个图片加载完成之后的回调
        window[id] = this;
        for (s in images) {
            var item = images[s];
            var img = new Image;
            img.onload = function () {//图片加载完成后的回调
                window[id].loader();
            }
            img.src = item;
        }
        $('#rate').text('0%');
        return this;
    }else {
        this._loaded++;
        $('#rate').text( ((this._loaded / this._images * 100) >> 0) + '%');
        if (this._loaded < this._images) {
            return this;
        }
    }
    window[id] = null;
    this.el.fullpage({
        onLeave: function (index,nextIndex,direction) {
            $(this).find('.h5_component').trigger('onLeave');
        },
        afterLoad: function (anchorLink,index) {
            $(this).find('.h5_component').trigger('afterLoad');
        },
    });
    this.page[0].find('.h5_component').trigger('afterLoad');
    this.el.show();
    //fullpage默认展现的第一页的页面，页码从1开始计算
    if (firstPage) {
        $.fn.fullpage.moveTo(firstPage);
    }
};