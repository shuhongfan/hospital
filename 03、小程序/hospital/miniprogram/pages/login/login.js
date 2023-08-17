// miniprogram/pages/home/home.js
var zhenzisms = require('../../util/zhenzisms.js');
var CountDown = require('../../util/countdown.js');
let phonenum = ''
let renzhengnum = ''
var result = ''
let page='page'
let pages='pages'
let home='home'
let homes='homes'
let show='show'
let none='none'
let that=''
let countDownNum =''
const app = getApp()
let selname;
let huanzhe;
let selreportId;
let huanzheinfo;
Page({
  phonenum(event) {
    phonenum = event.detail.value
    console.log(phonenum+'one')
  },
  renzheng(event) {
    renzhengnum = event.detail.value
  },
  removesession:function(){
    console.log("remove")
    wx.removeStorageSync('phone')
    this.setData({
      home:homes,
      page:page
    })
  },
  getnum: function () {
    //获取验证码
    zhenzisms.client.sendCode(function (res) {
      //phonenum为手机号  renzhengnum为验证码
      console.log(res.data);
    }, phonenum, '医院系统   验证码为:{code}', 'fist', 60, 4);
    var that = this;
    this.countdown.start();
  },
  //获取微信头像和名称
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //登录按钮
  rznum: function () {
    //判断验证码是否正确
    result = zhenzisms.client.validateCode(phonenum, renzhengnum);
    console.log(result)
    //如果result=ok则验证码正确
    if (result=='ok'){
      //如果成功跳转到此页面
      wx.navigateTo({
         url: '../login/login?phonenum=' + phonenum
      })
      //存值
      this.setData({
        //如果验证码输入正确登陆页面隐藏，我的页面显示（切换css样式）
        page:pages,
        home:home,
        phonenum:phonenum
      })
      //存值相当于session
      wx.setStorageSync('phone', phonenum)

      // 调用云函数
      wx.cloud.callFunction({
        name: 'getpatient',
        data: {
          phonenum: phonenum
        },
        success: res => {
          huanzhe=res.result;
          this.setData({
            huanzhe: res.result,
          })
        },
        fail: err => {
          console.error('[云函数] [login] 调用失败', err)
        }
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    //如果未登陆登陆页面显示，我的页面隐藏（切换css样式）
     page:page,
     home:homes,
     userInfo: {},
     hasUserInfo: false,
     canIUse: wx.canIUse('button.open-type.getUserInfo'),
     phonenum: phonenum,
     huanzhe:[],
     index:0,
     dex:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'getpatient',
      data: {
        phonenum: phonenum
      },
      success: res => {
        huanzhe = res.result;
        this.setData({
          huanzhe: res.result,
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
    var inserthome=options.home;
    var insertphone=options.phonenum;
    var insertpage=options.page;
    if(inserthome!=null&&insertpage!=null&&insertphone!=null&&insertphone!=''&&inserthome!=''&&insertpage!=''){
      this.setData({
        //如果验证码输入正确登陆页面隐藏，我的页面显示（切换css样式）
        page: pages,
        home: home,
        phonenum: phonenum
      })
    }
    this.countdown = new CountDown(this);
    zhenzisms.client.init('https://sms_developer.zhenzikj.com', '103138', '24192e21-7481-46da-961d-bbda6a95f69d');
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
    wx.showNavigationBarLoading()
    // 调用云函数
    wx.cloud.callFunction({
      name: 'getpatient',
      data: {
        phonenum: phonenum
      },
      success: res => {
        huanzhe = res.result;
        console.log(huanzhe)
        this.setData({
          huanzhe: res.result,
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 20);
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

  },
  bindPickerChange_hx: function (e) {
    selname=huanzhe[e.detail.value].reportName;
    selreportId=huanzhe[e.detail.value].reportId;
    console.log(selname, selreportId)
    wx.navigateTo({
      url: '../getyao/getyao?phonenum=' + phonenum + '&&selname=' + selname + '&&selreportId=' + selreportId,
    })
    this.setData({   //给变量赋值
      index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
    })
  },

  bindPickerChange_cf:function(e){
    selname = huanzhe[e.detail.value].reportName;
    selreportId = huanzhe[e.detail.value].reportId;
    console.log(selname,selreportId)
    wx.navigateTo({
      url: '../getchufang/getchufang?phonenum=' + phonenum + '&&selname=' + selname + '&&selreportId=' + selreportId,
    })
    this.setData({   //给变量赋值
      dex: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
    })
  }
})