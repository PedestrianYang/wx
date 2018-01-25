// pages/mainPage/mainPage.js
const util = require("../../utils/encode.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    zhuanti: [],
    daohang: [],
    miaosha:[],
    miaosha2: [],
    guanggao:[],
    tuijian:[],
    zhuti:[],
    teseguan:[],
    bimai:[],
    bannerHeight: 100,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000, 
    clientHeight: 200,
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
    

    var data1 = util.getSecParam(null);

    var that = this;
    const requestTask = wx.request({
      url: "http://10.0.7.7/IyunshuApp/yunshu/selectHomepage_NEW",
      data: data1,
      header: {
        'content-type': 'application/json' // 默认值
      },
      fail: function(res){
        console.log(res)
      },
      complete: function(res){

      },
      success: function (res) {
        console.log(res.data.data)
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
        that.setData({
          zhuanti: res.data.data.zhuanti,
          daohang: res.data.data.daohang,
          miaosha: res.data.data.miaosha,
          miaosha2: res.data.data.miaosha2,
          guanggao: res.data.data.guanggao,
          tuijian: res.data.data.tuijian,
          zhuti: res.data.data.zhuti,
          teseguan: res.data.data.teseguan,
          bimai: res.data.data.bimai,
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

    this.requestForData()
  },
  
  onReachBottom: function(){
    console.log("---------");
    var pos = this.data.bimai.length;
  
    var data1 = util.getSecParam({ 'pos': pos, 'rowname': 'bimai'});

    var that = this;
    const requestTask = wx.request({
      url: "http://10.0.7.7/IyunshuApp/yunshu/selectMoreByRowname",
      data: data1,
      header: {
        'content-type': 'application/json' // 默认值
      },
      fail: function (res) {
        console.log(res)
      },
      complete: function (res) {

      },
      success: function (res) {
        
        console.log(res.data.data)
        util.getdeParam(res.data.data)
        
        // res.data.data.bimai
        // that.setData({
        //   bimai: bimai.concat(res.data.data.bimai),
        // })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})