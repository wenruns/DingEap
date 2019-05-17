let app = getApp();

//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
Page({
    data:{
        corpId: '',
        authCode:'',
        tips: '',
        page: 0,
        size: 20,
        userInfo:{
          name: "游客"
        },
        lists: [],
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
              icon_color: 'pink'
            }
          },
          {
            title: "电话",
            clumns_name: "tel",
            sort: true,
            styles: {
              icon_color: 'blueviolet'              
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
                styles: {
                  
                }
              },
              {
                value:"删除",
                styles:{
                  color: 'red'
                }
              }
            ],
            styles: {
              content:{
                color: "blue"
              }
            }
          }
        ],
        icons: {
          show: {
            left: '/images/icon-add-show.png',
            right: '/images/icon-add-show.png',
          },
          shrink: {
            left: '/images/icon-shrink-up-left.png',
            right: '/images/icon-shrink-up-right.png'
          }
        }
    },
    onShowButton(data){
      console.log(data)
    },
    titleFun(event){
      console.log("titlefun...", event);
    },
    func(event){
      if (event.target.dataset.clumn=='操作') {
        console.log('indec click', event);
        
      }
    },
    // toSwiper() {
    //   dd.navigateTo({
    //     url: '../swiper/swiper'
    //   })
    // },
    search(content){
      console.log('search: ', content)
    },
    // 获取线索列表
    getList(){
      // console.log("getList.....")
      dd.httpRequest({
        url: app.globalData.domain + '/clues',
        method: 'POST',
        data: {
          signature: '',
          size: this.data.size,
          offset: this.data.page
        },
        dataType: 'json',
        success: res => {
          // console.log('getList...', res)
          if (res.error || res.data.results.length <= 0) {
            // console.log("获取数据失败",res)
            this.setData({
              tips: '暂无数据',
              page: this.data.page + this.data.size
            })
          } else {
            this.setData({
              lists: res.data.results,
              page: this.data.page + this.data.size
            });
            console.log(this.data.lists);
          }
        },
        fail: err => {
          console.log('getListfail....', err);
          this.setData({
            tips: '暂无数据'
          });
        }, 
        complete: res => {
          dd.hideLoading();
        }
      });
    },

    onLoad(){
      // console.log(app.globalData.domain)
        // console.log("lodingss");
        let _this = this;

        this.setData({
            corpId: app.globalData.corpId
        })
        dd.showLoading();
        dd.getAuthCode({
            success:(res)=>{
                this.setData({
                    authCode:res.authCode
                })
                dd.httpRequest({
                    url: app.globalData.domain + '/user',
                    method: 'POST',
                    data: {
                      'code': res.authCode
                    },
                    dataType: 'json',
                    success: (res) => {
                        // console.log('success----',res.data)
                        this.setData({
                          userInfo: res.data,
                          hasUserInfo: true
                        });
                        app.globalData.userInfo = res.data;
                    },
                    fail: (res) => {
                      dd.hideLoading();
                      // console.log("httpRequestFail---",res)
                    },
                    complete: (res) => {
                      this.getList();
                    }
                });
            },
            fail: (err)=>{
                // console.log("getAuthcode failed!")
                dd.alert({
                    content: JSON.stringify(err)
                })
            }
        })
    }
})