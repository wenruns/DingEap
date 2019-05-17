Component({
  mixnis: [],
  data: {
    objToString(obj){
      return JSON.stringify(obj);
    },
    icon_index: {
      clumn1: 0,
      clumn2: 0
    },
    icon_colors: {
      gray: true,
      black: true,
      yellow: true,
      yellowgreen: true,
      red: true,
      pink: true,
      blue: true,
      blueviolet: true,
      green: true,
      wheat: true,
    },
  },
  props: {
    clumns: [
      {
        title: "clumn1",
        clumns_name: "clumn1",
        sort: false
      },
      {
        title: "clumn2",
        clumns_name: "clumn2",
        sort: true,
        init_sort: 'asc'
      },
      {
        title: "clumn3",
        default: [{
          value: "详情",
          styles: {
            color:"red"
          }
        }],
        styles: {
          color: "blue",
        }
      }
    ],
    lists: [
      {
        clumn1: '1',
        clumn2: '2',
      },
      {
        clumn1: 'a',
        clumn2: 'b',
      }
    ],
    empty_tips: '暂无数据！',
    onClickFun: (event) => {
      console.log(event)
      dd.alert({
        title: "demo",
        content: "您点击了第"+(event.target.dataset.index+1)+"条行的\""+event.target.dataset.clumn+"\"列，对应的值为\""+event.target.dataset.value+"\"",
        buttonText: "我知道了",
        complete: () => {

        }
      });
    },
    onTitleClickFun: (event) => {
      console.log('title-click', event);
      dd.alert({
        title: "demo",
        content: "您点击了标题栏的\""+event.target.dataset.options.title+"\"列，对应的字段为\""+(event.target.dataset.options.default ? "NULL" : event.target.dataset.options.clumns_name)+"\"",
        buttonText: "我知道了",
        complete: () => {
          
        }
      });
    }
  },
  methods: {
    click(e){
      this.props.onClickFun(e);
    },
    titleTick(e){
      let index = this.data.icon_index;
      if (e.target.dataset.options.sort) {
        index[e.target.dataset.options.title]++;
        this.setData({
          icon_index: index
        });
        e.currentTarget.dataset.sort = e.target.dataset.sort = index[e.target.dataset.options.title] % 2 ? 'asc' : 'desc';
      }
      // if (e.target.dataset.)
      this.props.onTitleClickFun(e);
    }
  },
  didMount() {
  //  console.log(this.props.clumns)
    let indexs = {};
    this.props.clumns.forEach(function(item, index) {
      if (item.sort) {
        indexs[item.title] = item.init_sort == 'asc' ? 1 : 0;
      } else {

      }
    });
    this.setData({
      icon_index: indexs
    });
  },
  didUpdate() {

  },
  didUnmount() {

  }
});