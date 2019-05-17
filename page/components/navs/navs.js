Component({
  // 引入公共部分的生命周期函数
  mixins:[
    
  ],
  // 组件内部数据
  data: {},
  // 组件参数
  props:{
    userinfo: {}
  },

  // 渲染后回调
  didMount() {  
  },
  // 更新后回调
  didUpdate(){
    console.log('userinfo....props', this.props.userinfo);
  },
  // 删除后回调
  didUnmount(){},
  // 自定义方法
  methods:{
    
  },
});