
const app = getApp()

// pages/bookitem/bookitem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0, 
    navTitle:'',
    book:{},
    data_url:'https://www.easy-mock.com/mock/5acf2b009e1d8d12cbd79507/example/books/item/' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    wx.showLoading({
      title: '拼命加载中...',
    })
    this.data.id = params.id
    const that = this
    wx.request({
      url:  that.data.data_url + that.data.id,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading()
        console.log(res.data)
        //console.log(res.data.name)
        that.setData({ book: res.data.book })
        console.log(that.data.book.name)
        
        /*
        console.log(_this.data.navTitle)
        
        wx.setNavigationBarTitle({
          title: _this.data.title
        })*/
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