Component({
  mixint: [],
  data: {
    show_button: false,
    show_rate: 0,
    box_width: {},
    screen_height: 0,
    screen_width: 0,
    is_left: true,
    icon_style: {},
    is_move: false,
    // button_style: {}

    accept_slot: false,
  },
  props: {
    // /images/icon-add-show.png
    // /images/icon-shrink-up-right.png
    icon: {
      show: {
        left: "",
        right: ""
      },
      shrink: {
        left: '',
        right: ''
      }
    },
    buttons: [
      {
        title: "按钮一",
        styles: {
          color:"pink",
          "font-size": "3vw",
      }
      },
      {
        title: "按钮二",
        styles: {
          color:"yellow",
          "font-weight": "bold"
      }
      },
      {
        title: "按钮三",
        styles: {
          color:"red",
        }
      },
    ],

    onBtnClick: (e) => {
      console.log("onclick", e)
    },

    // onShowButton: (e) => {
    //   console.log("onshow...", e);
    // }

  },
  methods: {
    buttonClick(event){
      let box_width = this.data.box_width;
      box_width.width = '9vw';
      this.setData({
        box_width: box_width,
        show_button: false
      })
      this.props.onBtnClick(event);
    },

    showButton(e){
      if (this.props.onShowButton) {
        this.props.onShowButton(e);
      } else {
        let box_width = this.data.box_width;
        box_width.width = (this.props.buttons.length * 15 + this.props.buttons.length*2 +9) + "vw";
        this.setData({
          show_button: true,
          box_width: box_width
        });
      }
    },
    shrinkButton(){
      // console.log('shrink')
      let box_width = this.data.box_width;
      box_width.width = '9vw';
      this.setData({
        show_button: false,
        box_width: box_width
      })
    },
    moveFloatBlock(event){
      // console.log("move", "screen_width="+this.data.screen_width, "screen_height="+this.data.screen_height, event)
      let pageX = event.touches[0].pageX, pageY = event.touches[0].pageY;
      if (pageY < 0) {
        pageY = 0;
      }
      if (pageX < 0) {
        pageX = 0;
      }
      if (pageX > this.data.screen_width) {
        pageX = this.data.screen_width;
      }
      if (pageY > this.data.screen_height) {
        pageY = this.data.screen_height;
      }
      let box_width = this.data.box_width, icon_style = this.data.icon_style;
      box_width["border-radius"] = "10vw";
      box_width.top =  pageY;
      if (pageX >= (this.data.screen_width / 2)) {
        box_width.right = this.data.screen_width - pageX;
        box_width.left = '';
      } else {
        box_width.right = '';
        box_width.left = pageX;
      }

      if (!this.data.accept_slot) {
        box_width.width = '10vw';
      }
      // box_width.height = '10vw';
      box_width.transition = "all 0s";

      icon_style['margin-right'] = "1vw";
      icon_style['margin-left'] = "1vw";
      this.setData({
        box_width: box_width,
        // show_button: false,
        icon_style: icon_style,
        is_move: true
      });

    },
    touchStart(event){
    },
    touchEnd(event){
      if (!this.data.is_move) {
        return ;
      }
      let box_width = this.data.box_width, is_left = true, icon_style = this.data.icon_style, button_style = this.data.button_style;
      box_width.transition = "all "+this.data.show_rate+"s";
      if (!this.data.accept_slot) {
        box_width.width = '9vw';
      }
      if (event.changedTouches[0].pageX >= (this.data.screen_width / 2)) {
        is_left = false;
        box_width.right = '0px';
        box_width.left = '';
        box_width['border-radius'] = "10vw 0vw 0vw 10vw";
        icon_style['margin-left'] = '1vw';
        icon_style['margin-right'] = '0vw';
      } else {
        box_width.right = '';
        box_width.left = '0px';
        box_width['border-radius'] = "0vw 10vw 10vw 0vw";
        icon_style['margin-left'] = '0vw';
        icon_style['margin-right'] = '1vw';
      }
      this.setData({
        box_width: box_width,
        icon_style: icon_style,
        is_left: is_left,
        is_move: false,
        show_button: false
      })
    }
  },
  didMount(options){
    // console.log("合并对象", Object.assign({
    //   ooo: "ll"
    // }, {
    //   qqq: 'sss',
    //   ooo: '22'
    // }));
    dd.createSelectorQuery().select('.wen-float-block-demo').boundingClientRect().exec((ret) => {
      let s = 0;
      let box_width =  {
        // transition: 'all '+s+'s',
        top: '0px',
        left: '0px',
        right: '',
        "border-radius": "0vw 10vw 10vw 0vw"
      };
      let accept_slot = false;
      if (ret[0]) {
        // console.log(ret[0])
        s = (this.props.buttons.length * 15 + this.props.buttons.length*2 +9) / 120;
        box_width.width = '9vw';
        box_width.transition = 'all '+s+'s';
      } else {
        // console.log('nothing');
        accept_slot = true;
        box_width['min-width'] = '10vw';
      }
      if(this.props.custom_styles){
        box_width = Object.assign(this.props.custom_styles, box_width);
      }
      // console.log('box-width', box_width)
      dd.getSystemInfo({
        complete: res => {
          this.setData({
            screen_height: res.windowHeight * 0.85,
            screen_width: res.windowWidth * 0.9
          })
        }
      });
      this.setData({
        box_width: box_width,
        show_rate: s,
        icon_style: {
          "margin-right": "1vw",
          "margin-left": ""
        },
        accept_slot: accept_slot
      });
    })
  },
  didUpdate(options){

  },
  didUnmount(options){

  }

});