## 浮动插件说明
参数：
# 1) 参数buttons
  例如：buttons: [
    {
      title: "按钮1",
      styles: {
        color:"green",
     }
    },{
      title: "按钮2",
      styles: {
        color:"yellow",
     }
    },{
      title: "按钮3",
      styles: {
        color:"red",
     }
    }
  ]
  说明：buttons参数接收自定义按钮，是一个二维数组，title作为按钮显示文本，还可以根据自己需求自定义一些标志性属性。如果存在onBtnClick参数的话，这些属性将会在按钮点击时作为参数传递给onBtnClick(data)

# 2) 参数onBtnClick
  例如：onBtnClick : data => {
    console.log(data)
  }
  说明：默认会有以上的点击事件，如果组件中传入onBtnClick回调方法将会调用传进来的点击事件，参数data即是如（1）步骤

# 3) 参数onShowButton
  例如：onShowButton: option => {
    console.log(option);
  }
  说明：该参数为浮动插件点击事件，默认不存在该参数。
  #注意：如果存在该参数，1）和2）参数将会失效，因为改参数会屏蔽掉前面两个参数

# 4) 参数icon
  例如：icon: {
    show: {
      left: '/images/icon-add-show.png',
      right: '/images/icon-add-show.png'
    },
    shrink: {
      left: '/images/icon-shrink-up-left.png',
      right: '/images/icon-shrink-up-right.png'
    }
  }
  说明：该参数用来修改浮动插件的按钮图标。show表示初始时候的展示图标，shrink表示点击show图标后替换show的图标，left表示插件浮动在左边时展示的图标，right表示插件浮动在右边是展示的图标

# 5) 以上都是这个浮动默认的，您还可以自定义浮动插件里面的内容，只需要在使用是传入插件的内容即可
  例如：<floatblock>你好</floatblock>
  说明：因为浮动插件使用了slot插槽，所以，当您传入插件内容时，将会把默认浮动插件覆盖掉
  
# 6）参数custom_styles
  例如：custom_styles：{
    background:"red"
  }
  说明：自定义组件外壳样式