/**
 * Created by sunjianxu on 2017/11/29.
 */
/*内容组织管理，以便管理加载多个资源*/
$(function () {
    var h5 = new H5();
    /*添加底部的slide_up*/
    h5.whenAddPage = function () {
        this.addComponent('slide_up',{
            bg:'img/slide-up.png',
            css:{opacity:0,left:0,bottom:-20,width:'100%',height:'20px',zIndex:999},
            animateIn:{opacity:1,bottom:'-1px'},
            animateOut: {opacity:0,bottom:'-20px'}
        })
    }
    h5
      .addPage('face')
        .addComponent('logo',{
          center:true,
          width:422,
          height:106,
          bg:'img/logo.png',
          css:{opacity:0},
          animateIn:{top:100,opacity:1},
          animateOut:{top:0,opacity:0},
          })
        .addComponent('slogan',{
          center:true,
          width:365,
          height:99,
          bg:'img/slogan.png',
          css:{opacity:0,top:180},
          animateIn:{left:'50%',opacity:1},
          animateOut:{left:'0%',opacity:0},
          delay:500
          })
        .addComponent('ad-left',{
            width:345,
            height:493,
            bg:'img/ad-left.png',
            css:{opacity:0,left:-50,bottom:-50},
            animateIn:{opacity:1,left:0,bottom:0,},
            animateOut:{opacity:0,left:-50,bottom:-50,},
            delay:1000
        })
        .addComponent('ad-left',{
            width:324,
            height:449,
            bg:'img/ad-right.png',
            css:{opacity:0,right:-50,bottom:-50},
            animateIn:{opacity:1,right:0,bottom:0,},
            animateOut:{opacity:0,right:-50,bottom:-50},
            delay:1500
        })
      .addPage('philosophy')
        .addComponent('caption',{
            text:'核心理念',
        })
        .addComponent('text',{
            text:'IT教育网=只学有用的',
            width:500,
            height:60,
            center:true,
            css:{opacity:0,textAlign:'center',color:'#ff4343',fontSize:'26px',lineHeight:'30px'},
            animateIn:{opacity:1,top:157},
            animateOut:{opacity:0,top:240},
        })
        .addComponent('description',{
            text:'2017年，IT教育网的诞生引领中国IT职业从教育进入新时代；质量实战课程、全新教学模式、实时互动学习，以领先优势打造行业品牌；止，IT教育网已成为中国规模最大、互动性最高的IT技能学习平台。',
            bg:'img/bg-txt.png',
            width:561,
            height:374,
            center:true,
            css:{opacity:0,padding: '21px 22px 19px 17px',textAlign:'justify',color:'#fff',fontSize:'13px',lineHeight:'24px'},
            animateIn:{opacity:1,top:195},
            animateOut:{opacity:0,top:300},
            delay:1000
        })
        .addComponent('human',{
            bg:'img/human.png',
            width:515,
            height:305,
            center:true,
            css:{opacity:0,bottom:0},
            animateIn:{opacity:1,top:378},
            animateOut:{opacity:0,bottom:0},
            delay:500
        })
      .addPage('direction')
        .addComponent('caption',{
            text:'课程方向分布',
        })
        .addComponent('msg',{
            text:'课程分布前端开发占到40%',
            //center:true,
            css:{opacity:0,width:'100%',color:'#333',textAlign:'center',top:185,left:'-100%'},
            animateIn:{opacity:1,left:'0%'},
            animateOut:{opacity:0,left:'100%'},
            delay:2000
        })
        .addComponent('polyline',{
            type:'polyline',
            width: 530,
            height: 400,
            data: [['前端开发',.4], ['移动开发',.2, '#ff7676'], ['后端开发',.29], ['图像处理',.1], ['数据处理',.01]],
            css: {top:100, opacity:0},
            animateIn: {opacity:1,top:256},
            animateOut: {opacity:0,top:100},
            center: true,
        })
      .addPage('mobile_development')
        .addComponent('caption',{
            text:'移动开发',
        })
        .addComponent('pie',{
            type:'pie',
            width: 300,
            height: 300,
            data: [['IOS',.25,'#5ddbd8'], ['Cococ2d-x',.22,'#99c0ff'], ['Unity-3D ',.12,'#ffad69'],['Android',.41, '#ff7676']],
            css: {top:200, opacity:0,fontSize:"12px"},
            animateIn: {opacity:1,top:198.5},
            animateOut: {opacity:0,top:100},
            center: true,
        })
        .addComponent('msg',{
            text:'移动开发课程中 Android 比例最大',
            css: {bottom:0, opacity:0,width:'100%',textAlign:'center',color:'#333'},
            animateIn: {opacity:1,top:425},
            animateOut: {opacity:0,bottom:0},
            delay:2000,

        })
      .addPage('frontend_development')
        .addComponent('caption',{
            text:'前端开发',
        })
        .addComponent('bar',{
            type:'bar',
            width: 530,
            height: 600,
            data: [
                ['javascript',.32, '#ff7676'],
                ['HTML/CSS',.21],
                ['CSS3',.1],
                ['HTML5',.1],
                ['jQuery',.04],
                ['WebApp',.04],
                ['Node.js',.03],
                ['Bootstrap',.02],
                ['AngularJs',.02]],
            css: {top:100, opacity:0},
            animateIn: {opacity:1,top:187},
            animateOut: {opacity:0,top:100},
            center: true,
        })
        .addComponent('msg',{
            text:'前端开发课程中JS比例最大',
            css: {bottom:40, opacity:0,width:'100%',textAlign:'center',color:'#333'},
            animateIn: {opacity:1,top:490},
            animateOut: {opacity:0,bottom:40},
            delay:2000,

        })
      .addPage('frontend_development_courses')
        .addComponent('msg',{
            text:'前端开发课程JS占到40%',
            center:true,
            css:{opacity:0,width:'100%',color:'#333',textAlign:'center',top:185,left:'-100%'},
            animateIn:{opacity:1,left:'0%'},
            animateOut:{opacity:0,left:'-100%'},
            delay:2000
        })
        .addComponent('caption',{
            text:'前端开发课程',
        })
        .addComponent('bar_',{
            type:'bar_v',
            width: 265*2,
            height: 400,
            data: [['JS',.4, '#ff7676'], ['HTML/CSS',.2], ['CSS3',.1], ['HTML5',.2], ['Vue.js',.1]],
            css: {top:400, opacity:0},
            animateIn: {opacity:1,top:200},
            animateOut: {opacity:0,top:400},
            center: true,
        })
      .addPage('backend_processing')
        .addComponent('caption',{
            text:'后端处理',
        })
        .addComponent('radar',{
            type:'radar',
            width: 400,
            height: 400,
            data: [
                ['JAVA',.46, '#ff7676'],
                ['PHP',.26],
                ['C++',.11],
                ['C',.1],
                ['Python',.07]

            ],
            css: {
                top:100,
                opacity:0
            },
            animateIn: {opacity:1,top:174},
            animateOut: {opacity:0,top:100},
            center: true,
        })
        .addComponent('msg',{
            text:'后端开发课程中 Java 课程占比最大',
            css: {bottom:0, opacity:0,width:'100%',textAlign:'center',color:'#333'},
            animateIn: {opacity:1,top:458},
            animateOut: {opacity:0,bottom:0},
            delay:2500,

        })
      .addPage('people_number')
        .addComponent('caption',{
            text:'报名人数过万课程分布',
        })
        .addComponent('ring-all',{
            type:'ring',center:true,
            width:300,height:300,
            data:[['总课程',.7,'#ff7676']],
            css:{top:130,opacity:1,fontSize:'20px'},
            animateIn:{opacity:1},
            animateOut:{opacity:0},
        })
        .addComponent('msg',{
            text:'64%的课程观看人数人数过万',
            css: {left:'100%',top:300, opacity:0,width:'100%',textAlign:'center',color:'#333'},
            animateIn: {opacity:1,left:'0'},
            animateOut: {opacity:0,left:'100%'},
            delay:1600,

        })
        .addComponent('ring-1',{
            type:'ring',
            width:160,height:160,
            data:[['前端开发',.43,'#99c0ff']],
            css:{top:350,left:29,opacity:0,fontSize:'12px'},
            animateIn:{opacity:1},
            animateOut:{opacity:0},
        })
        .addComponent('ring-2',{
            type:'ring',center:true,
            width:160,height:160,
            data:[['后端开发',.43,'#99c0ff']],
            css:{top:350,opacity:0,fontSize:'12px'},
            animateIn:{opacity:1},
            animateOut:{opacity:0},
        })
        .addComponent('ring-3',{
            type:'ring',
            width:160,height:160,
            data:[['移动开发',.22,'#99c0ff']],
            css:{top:350,right:29,opacity:0,fontSize:'12px'},
            animateIn:{opacity:1},
            animateOut:{opacity:0},
        })
        .addComponent('ring-4',{
            type:'ring',
            width:160,height:160,
            data:[['数据处理',.04,'#99c0ff']],
            css:{top:450,left:72,opacity:0,fontSize:'12px'},
            animateIn:{opacity:1},
            animateOut:{opacity:0},
        })
        .addComponent('ring-5',{
            type:'ring',
            width:160,height:160,
            data:[['图像处理',.03,'#99c0ff']],
            css:{top:450,right:72,opacity:0,fontSize:'12px'},
            animateIn:{opacity:1},
            animateOut:{opacity:0},
        })
      .addPage('difficulty_level')
        .addComponent('caption',{
            text:'课程难度级别分布',
        })
        .addComponent('point',{
            type:'point',
            width: 338,
            height: 338,
            data: [
                ['中级',.45, '#ff7676'],
                ['高级',.25, '#ffa4a4','-30%' , '-60%'],
                ['初级',.35, '#99c1ff','60%' , '-90%']
            ],
            css: {bottom:0, opacity:1},
            animateIn: {top:275,opacity:1},
            animateOut: {bottom:0,opacity:0},
            center: true,
        })
        .addComponent('msg',{
            text:'课程难度级别分布中，中级课程占到45%',
            css: {left:'100%',top:484, opacity:0,width:'100%',textAlign:'center',color:'#333'},
            animateIn: {opacity:1,left:'0'},
            animateOut: {opacity:0,left:'100%'},
            delay:1600,

        })
      .addPage('tail')
        .addComponent('logo',{
            bg:'img/logo2.png',
            width:422,
            height:106,
            center:true,
            css:{opacity:0,top:224},
            animateIn:{opacity:1,top:204},
            animateOut:{opacity:0,top:224},
        })
        .addComponent('slogan',{
            bg:'img/expect.png',
            width:314,
            height:46,
            center:true,
            css:{opacity:0,top:290,left:'0%'},
            animateIn:{opacity:1,left:'50%'},
            animateOut:{opacity:0,left:'0%'},
            delay:500
        })
        .addComponent('share',{
            bg:'img/share.png',
            width:128,
            height:120,
            css:{opacity:0,top:110,right:110},
            animateIn:{opacity:1,top:10,right:10},
            animateOut:{opacity:0,top:110,right:110},
            delay:1000
        })
        .addComponent('back',{
            bg:'img/return.png',
            width:52,
            height:50,
            center:true,
            css:{opacity:1,top:24},
            onclick: function () {
                $.fn.fullpage.moveTo(1);
            }
        })
      .loader(
          [
              'img/bg-face.png',
              'img/slide-up.png',
              'img/logo.png',
              'img/slogan.png',
              'img/ad-left.png',
              'img/ad-right.png',
              'img/bg-page.png',
              'img/caption.png',
              'img/bg-txt.png',
              'img/human.png',
              'img/return.png',
              'img/logo2.png',
              'img/expect.png',
              'img/share.png',
          ]
      );
})