// import model from '';
App({
  onLaunch(options) {
    // console.log('App Launch', options);
    // console.log('getSystemInfoSync', dd.getSystemInfoSync());
    // console.log('SDKVersion', dd.SDKVersion);
    // console.log('corpId = ' + this.globalData.corpId);
    this.globalData.corpId = options.query && options.query.corpId ? options.query.corpId : '';
    // console.log('corpId = ' + this.globalData.corpId);
   
    
  },
  onShow(options) {
    // console.log('App Show');
    
  },
  onHide(options) {
    // console.log('App Hide');
  },
  onError(msg) {
    // console.log('App Error');
  },
  globalData: {
    corpId:'ding98deb0b99ce2854535c2f4657eb6378f',
    userInfo: {
      name: '',
      userid: '',
    },
    domain: "http://test.vaiwan.com/api"
  }
});