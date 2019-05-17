## 搜索框插件说明
参数：
# 1）onSearch
  例如：onSearch: search_content => {
    console.log(search_content);
  }
  说明：点击搜索按钮事件回调，search_content为输入的内容

# 2）placeholder
  例如：placeholder="请输入您的名字"
  说明：这个是input框里的placeholder

# 3）custom_styles
  例如：
  custom_styles: {
    box_styles:{},
    input_box: {},
    input_styles: {},
    search_btn: {} 
  }
  说明：用户自定义样式。用户可以在这修改插件的样式，box_styles是整个插件外壳的样式，input_box是搜索框的样式，input_styles是input输入框的样式，search_btn是搜索按钮的样式