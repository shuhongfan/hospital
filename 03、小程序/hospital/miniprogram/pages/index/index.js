// miniprogram/pages/index/index.js
Page({
  //button点击事件跳转到keshi云函数，进行查询科室
  tokeshi:function(){
    wx.navigateTo({
      url: '../keshi/keshi',
    })
  },
  toloading:function(){
    wx.navigateTo({
      url: '../loading/loading',
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [

      {
        url: '/images/1.png'

      }, {
        url: '/images/2.png'

      }, {
        url: '/images/3.png'

      }

    ],
    ggimg:"/images/gonggao.png",
    jianjie:'/images/jianjie.jpg',
    zhiyin:'/images/zhiyin.jpg',
    jiuyi:'/images/jiuyi.jpg',
    daohang:'/images/daohang.jpg',
    cz:"/images/cz.jpg",
    dg:"/images/dg.jpg",
    zn:"/images/zn.jpg",
    zyfy:"/images/zyfy.jpg",
    yg:"/images/yg.jpg",
    mzfy:"/images/mzfy.jpg",
    mzjf:"/images/mzjf.jpg",
    zlfw:"/images/zlfw.jpg",
    shfw:"/images/shfw.jpg",
    w1:"/images/w1.jpg",
    w2:"/images/w2.jpg",
    w3: "/images/w3.jpg",
    w4: "/images/w4.jpg",
    gonggaourls:[
      {
        wen:'1.整风肃纪 再创佳绩 我院召开"整治行业之风、规范依法执业" 专项活动'
      },{
        wen:'2.整风肃纪 再创佳绩 我院召开"整治行业之风、规范依法执业" 专项活动'
      },{
        wen:'3.整风肃纪 再创佳绩 我院召开"整治行业之风、规范依法执业" 专项活动'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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