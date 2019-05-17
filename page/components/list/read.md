## 列表插件说明
参数：
# 1）lists
  例如：lists: [
      {
        clumn1: '1',
        clumn2: '2',
      },
      {
        clumn1: 'a',
        clumn2: 'b',
      }
    ]
  说明：该参数即是将要展开的列表数据，是一个二维数组

# 2）clumns
  例如：
  clumns: [
    {
      title: "称呼",
      clumns_name: "name",
      sort: true,
      init_sort: 'asc',
      styles: {
        title: {
          color: "red",
        },
        content: {
          color: "green"
        },
        icon_color: 'blueviolet'
      }
    },
    {
      title: "电话",
      clumns_name: "tel",
      sort: true,
      styles: {
        icon_color: 'pink'              
      }
    },
    {
      title: "状态",
      clumns_name: "clue_status"
    },
    {
      title: "操作",
      clumns_name: "操作",
      default: [
        {
          value:"详情",
          styles: {}
        },
        {
          value:"删除",
          styles:{
            color: 'red'
          }
        }
      ],
      styles: {
        content: {
          color: "green"
        }
      }
    }
  ],
  说明：该参数设置列表的列标题，以上对象每一个二级对象对应一个列，每一个对象包含以下属性
  ·title：列标题
  ·clumns_name：该列对应着将要展示的数据的索引，例如clumns_name: "name"表示item是1）参数lists中的一个子集，则该列展示的数据即为item['name']对应的值
  ·sort：boolean类型，表示该列是否展示 升序 或者 降序 的icon
  ·init_sort：可选值【asc|desc】，初始化为升序或者降序
  ·styles：用户自定义样式，下面有三个属性：title、content、icon_color
    a）title：自定义列表标题样式；
    b）content：自定义列表内容样式
    c）icon_color：升序或者降序icon的颜色，可选值【gray|black|yellow|yellowgreen|red|pink|blue|blueviolet|green|wheat】
  ·default：设置该列的默认值，为一个数组类型，一般用来设置按钮等点击事件,该属性下有两个子属性value和styles。value为该列默认展示内容，styles为该内容的自定义样式

# 3）empty_tips
  例子：
  empty_tips="暂无数据！"
  说明：当参数lists数据为空时展示的提示信息

# 4）onClickFun
  例如：onClickFun: (event) => {
      console.log(event)
      dd.alert({
        title: "demo",
        content: "您点击了第"+(event.target.dataset.index+1)+"条行的\""+event.target.dataset.clumn+"\"列，对应的值为\""+event.target.dataset.value+"\"",
        buttonText: "我知道了",
        complete: () => {

        }
      });
    },
  说明：列表内容点击事件

# 5）onTitleClickFun
  列子：onTitleClickFun: (event) => {
      console.log('title-click', event);
      dd.alert({
        title: "demo",
        content: "您点击了标题栏的\""+event.target.dataset.options.title+"\"列，对应的字段为\""+(event.target.dataset.options.default ? event.target.dataset.options.default : event.target.dataset.options.clumns_name)+"\"",
        buttonText: "我知道了",
        complete: () => {
          
        }
      });
  说明：列表标题点击事件
