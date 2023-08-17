// miniprogram/pages/getitem/getitem.js
var phonenum;
var block="block";
var none="none";
var cashier=""
Page({

  /**
   * 页面的初始数据
   */

  data: {
       item:[],
       result:none,
        dialogShow: false,
        showOneButtonDialog: false,
        oneButton: [{ text: '确定' }],
        sss:'sss'
  },
  openConfirm: function () {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
  tapOneDialogButton(e) {
    console.log(e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;

    this.setData({
      showOneButtonDialog: true,
      sss:id
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   phonenum=options.phonenum;
    wx.cloud.callFunction({
      name: 'getitem',
      data: {
        phonenum: phonenum
      },
      success: res => {
        cashier=res.result;
        this.setData({
          item: res.result
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