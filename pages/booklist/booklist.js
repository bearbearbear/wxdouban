const app = getApp()

var util = require('../../utils/list_search.js')

// pages/booklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:[], 
    requestPath:{
      "list":'https://www.easy-mock.com/mock/5acf2b009e1d8d12cbd79507/example/books/list',
      "search": 'https://www.easy-mock.com/mock/5acf2b009e1d8d12cbd79507/example/books/search?q='
    },
    searchQuery:'',
    isSearchResult:false,
    resultCount:0
  },


  fetchBookList:function(targetURL, isSearchResult, filter){
    let that = this
    wx.request({
      url: targetURL,
      header: {
        'content-Type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode == 200) {
          console.log(res.data)
          if (res.data.books.length != 0) {
            that.setData({
              books: res.data.books,
              isSearchResult: isSearchResult,
              resultCount:res.data.books.length
            })
            
            wx.setNavigationBarTitle({
              title: isSearchResult? '搜索结果':'所有绘本'
            })
          }
        }
      }
    })
  },

  bookSearchInput:function(e) {
    let that = this
    var inputValue = e.detail.value;
    that.setData({
      searchQuery: inputValue
    });
    console.log("input changed:"+that.data.searchQuery)
  },

  bookSearchConfirm:function(e){
    console.log("searchConfirmed:"+this.data.searchQuery)
    //this.searchByText(this.data.searchQuery)
    var searchURL = this.data.requestPath.search+this.data.searchQuery
    this.fetchBookList(searchURL, true)

  },

  bookSearchClear:function(e){
    console.log("searchQueryCleared")
    this.fetchResultItemList()
    this.setData({
      searchQuery:''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 网络API调用
    this.fetchBookList(this.data.requestPath.list, false)

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