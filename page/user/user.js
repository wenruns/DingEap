Page({
  data: {
    title: "Dingtalk"
  },
  onLoad(query) {
    // 页面加载
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
   // 返回自定义分享信息
  },
  viewTap() {
    // 事件处理
    this.setData({
      text: 'Set data for update.'
    })
  },
  go() {
    // 带参数的跳转，从 page/index 的 onLoad 函数的 query 中读取 xx
    dd.navigateTo({url:'/page/index?xx=1'})
  },
  customData: {
    hi: 'Dingtalk'
  }
})