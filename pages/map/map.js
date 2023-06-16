// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'https://www.windy.com/?25.542,120.718,5'
  },

  /**
   * 跳转地图
   */
  onButtonclicked(){
    wx.setClipboardData({
      data: this.data.url,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  }
})