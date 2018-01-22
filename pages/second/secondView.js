// pages/second/secondView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftData: [{ title: 11 }, { title: 22 }, { title: 33 }, { title: 44 }, { title: 55 }, { title: 66 }, { title: 77 }],
    rightData: [{ data: [{ title: 111 }, { title: 112 }, { title: 113 }, { title: 114 }, { title: 115 }] },
      { data: [{ title: 221 }, { title: 222 }] }, 
      { data: [{ title: 331 }, { title: 332 }] },
      { data: [{ title: 441 }, { title: 442 }] },
      { data: [{ title: 551 }, { title: 552 }] },
      { data: [{ title: 661 }, { title: 662 }] },
      { data: [{ title: 771 }, { title: 72 }, { title: 771 }, { title: 72 }, { title: 771 }, { title: 72 }, { title: 771 }, { title: 72 }, { title: 771 }, { title: 72 }] },],
    showRightData: { data: [{ title: 111 }, { title: 112 }, { title: 113 }, { title: 114 }, { title: 115 }]},
    clientHeight: 200,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setViews()
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });
  },

  setViews: function(){
    wx.setNavigationBarTitle({
      title: '分类',
    })
  },

  leftItemClick: function (item){
    var itemStr = item.currentTarget.dataset.item
    var i = this.data.leftData.length;

    var index 
    while (i--) {
      if (this.data.leftData[i].title == itemStr) {
        index = i
        break
      }
    }
    this.setData({
      showRightData: this.data.rightData[i]
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