// pages/mainPage/mainPage.js
const util = require("../../utils/encode.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    zhuanti: [],
    bannerHeight: 100,
    daohang:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000, 
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.requestForData()

    var that = this
    wx.getSystemInfo({
      success: function (res) {
        var heigth = res.windowWidth / 2.08
        that.setData({
          clientHeight: res.windowHeight,
          // bannerHeight: 100%
        });
      }
    });

  },
  
  requestForData: function(){
    var time = Date.parse(new Date())
    var dataStr = "{device:0,build:3.6.0,time:" + time + "}"

    var data1 = util.getSecParam(dataStr);

    var that = this;
    const requestTask = wx.request({
      url: "http://218.28.35.139:8001/IyunshuAppTest/yunshu/selectHomepage_NEW",
      data: data1,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          zhuanti: res.data.data.zhuanti,
          daohang: res.data.data.daohang
        })
      }
    })
  },

  itemClick: function(item){
    var itemStr = item.currentTarget.dataset.item
    wx.navigateTo({
      url: "../detail/detailView?name=" + itemStr,
    })
  },

  onPullDownRefresh: function () {
    
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
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