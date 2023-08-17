// miniprogram/pages/gethome/gethome.js
let phone=''
let home=[]
let show="show"
let none="none"
let name=""
let carid=''
let sex=''
let age=''
Page({

  /**
   * 页面的初始数据
   */
  name(event){
    name = event.detail.value
  },
  sex(event){
    sex=event.detail.value
  },
  carid(event){
    carid=event.detail.value
  },
  age(event){
    age=event.detail.value
  },
  data: {
     home:home,
     addhome:"",
     showbutton:""
  },
  addshow:function(){
    this.setData({
      addhome:show,
      showbutton:none
    })
  },
  addhome:function(){
    //正则表达式判断手机号格式是否正确
    if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(phone))) {
      wx.showToast({
        title: '手机号码有误',
        duration: 2000,
        icon: 'none'
      });
    } else
      if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(carid))) {
        wx.showToast({
          title: '身份证号码有误',
          duration: 2000,
          icon: 'none'
        });
      } else
        if (!(/^['男'|'女']$/.test(sex))) {
          wx.showToast({
            title: '性别只能是男或者女',
            duration: 2000,
            icon: 'none'
          });
        } else {
    wx.cloud.callFunction({
      name: 'addhome',
      data: {
        phone:phone,
        age:age,
        sex:sex,
        carid:carid,
        name:name
      },
      success: res => {
        if(res.result.affectedRows==1){
          wx.navigateTo({
            url: '../gethome/gethome?phonenum='+phone,
          })
        }
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
        }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      addhome:none,
      showbutton:show
    })
    phone=options.phonenum
    console.log(phone)
    wx.cloud.callFunction({
      name: 'gethome',
      data: {
        phone:phone
      },
      success: res => {
        this.setData({
          home:res.result
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