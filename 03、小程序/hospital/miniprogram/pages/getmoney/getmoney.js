// miniprogram/pages/getreport/getreport.js
let phonenum = ''
let arr=[]
let chufang=[]
let sum=0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chufang: [],
    sum:sum
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    phonenum = options.phonenum
    wx.cloud.callFunction({
      name: 'getchufang',
      data: {
        phonenum: phonenum
      },
      success: res => {
        chufang = res.result
        
        for (var i=0;i<chufang.length;i++){
          arr = arr.concat(chufang[i].repicetotal);
        }
        for(var j=0;j<arr.length;j++){
          sum+=arr[j]
        }
        this.setData({
          chufang: res.result,
          sum:sum
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
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