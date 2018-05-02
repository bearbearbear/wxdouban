// pages/bookshelf/bookshelf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    requestPath: 'https://www.easy-mock.com/mock/5acf2b009e1d8d12cbd79507/example/bookshelf?username=',
    resultCount: 0,
    userInfo:{
      avatarUrl: '../../images/profile.png',
      nickName: '未登录'
    },
    bType: "primary", // 按钮类型
    actionText: "登录",// 按钮提示文字
    isLoggedIn: false,  // 登录按钮状态，false表示未登录
  },

  fetchBookList: function (targetURL) {
    wx.showLoading({
      title: 'loading...',
    })
    let that = this
    wx.request({
      url: targetURL,
      header: {
        'content-Type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading()
        if (res.statusCode == 200) {
          console.log(res.data)
          var resultCount =res.data.books.length;
          if (resultCount != 0) {
            
            var books = res.data.books
            
            

            that.setData({
              books: books,
              resultCount: res.data.books.length
            })
            console.log(that.data);

            wx.setNavigationBarTitle({
              title: '我的书架'
            })
          }
        }
      }
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideLoading();
    // 获取本地数据中的用户信息
    wx.getStorage({
      key: 'userInfo',

      // 能获取到就显示用户的信息，并保持登录状态，不能的话就什么都不做
      success: (res) => {
        wx.hideLoading();
        this.setData({
          userInfo: {
            avatarUrl: res.data.userInfo.avatarUrl,
            nickName: res.data.userInfo.nickName
          },
          bType: res.data.bType,
          actionText: res.data.actionText,
          isLoggedIn: true
        }),
        console.log(this.data)

        
        var bookPath = this.data.requestPath + this.data.userInfo.nickName
        this.fetchBookList(bookPath)

      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})