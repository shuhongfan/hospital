// miniprogram/pages/keshi/keshi.js
// 声明id 和deparname
let id=''
let deparname=''
Page({
  // bintap点击事件获取xml中data-？="?"的参数
  getdoctor:function(event){
    id = event.currentTarget.dataset.deparid
    deparname = event.currentTarget.dataset.deparname
    console.log(deparname+"zxc"+id)
  },
  /**
   * 页面的初始数据
   */
  data: {
    departments:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //自动加载
  onLoad: function (options) {
    // 跳转云函数进行查询
    wx.cloud.callFunction({
      //云函数的名字
      name: 'keshi',
      //传到云函数中的参数
      data: {
        id:id,
        deparname:deparname
      },
      //成功返回参数res
      success: res => {
        //将参数存到Data中方便遍历到页面
        this.setData({
          // 将云函数查询的结果存到departemnts中
          departments: res.result
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