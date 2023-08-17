let phone = '';
let person = '';
let selname;
let selreportId;
// miniprogram/pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    phone = options.phonenum;
    selname=options.selname;
    selreportId=options.selreportId;
    // 调用云函数
    wx.cloud.callFunction({
      name: 'getyao',
      data: { 
        phone:phone,
        selname:selname,
        selreportId:selreportId
      },
      success: res => {
        this.setData({
          person: res.result,
        })
        console.log(res.result);
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