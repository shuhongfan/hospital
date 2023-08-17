// miniprogram/pages/userandphone/userandphone.js
let doctorname=''
let deparname=''
let type=''
let price=''
let time=''
let deparid=''
let doctorid=''
let typeid=''
let phone=''
let carid=''
let username=''
let sex=''
let age=''
let amstarttime = ''
let amendtime = ''
let pmstarttime = ''
let pmendtime = ''
let timelist = []
let idtime = []
let jztime=''
let phonenum = ''
let show="show"
let none="none"
let homeName = [];
let selectname=''
var dex=0;
var homelist;
var timestamp ;
var Y ;
var date;
var timeout ;
var arr ;
var thistime;
Page({
  // 获取doctor传过来的数据
  phone(event){
    phone=event.detail.value
  },
  carid(event){
    carid=event.detail.value
  },
  username(event) {
    username = event.detail.value
  },
  age(event){
    age = event.detail.value
  },
  sex(event){
    sex=event.detail.value
    console.log(sex)
  },
inyuyue(e){
  jztime = e.currentTarget.dataset.jztime
  selectname = e.currentTarget.dataset.homename
  //当前时间
  timestamp = Date.parse(new Date());
  date = new Date(timestamp);
  //取年份
  Y = date.getFullYear();
  //使用split分割字符串
  timeout = jztime.split("~");
  arr = [];
  for (var i in timeout) {
    arr = arr.concat(timeout[1]);
  };
  //选择的时间  拼接字符串
  thistime = Date.parse(Y + '-' + time + ' ' + arr[1])
  //正则表达式判断
   if (phonenum == '' || phonenum == null ){
     
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
         } else
           if (!(/^((1[0-5])|[1-9])?\d$/.test(age))) {
             wx.showToast({
               title: '请输入合法的年龄',
               duration: 2000,
               icon: 'none'
             });
           } else
             if (timestamp > thistime) {
               wx.showToast({
                 title: '时间选择错误',
                 duration: 2000,
                 icon: 'none'
               });
             }else{
               wx.cloud.callFunction({
                 name: 'userandphone',
                 data: {
                   doctorname: doctorname,
                   carid: carid,
                   username: username,
                   phone: phone,
                   doctorid: doctorid,
                   deparid: deparid,
                   deparname: deparname,
                   typeid: typeid,
                   type: type,
                   time: time,
                   jztime: jztime,
                   price: price,
                   sex: sex,
                   age: age,
                   amendtime: amendtime,
                   amstarttime: amstarttime,
                   pmstarttime: pmstarttime,
                   pmendtime: pmendtime
                 },
                 success: res => {
                   if (res.result.affectedRows == 1) {
                     wx.reLaunch({
                       url: '/pages/success/success',
                     })
                   } else {
                     wx.navigateTo({
                       url: '/pages/error/error',
                     })
                   }
                 },
                 fail: err => {
                   console.error('[云函数] [login] 调用失败', err)
                 }
               })
             }
        }else{
     jztime = e.currentTarget.dataset.jztime
     selectname = e.currentTarget.dataset.homename
     if (timestamp > thistime) {
       wx.showToast({
         title: '时间选择错误',
         duration: 2000,
         icon: 'none'
       });
     }else{
     phonenum = wx.getStorageSync('phone')
     console.log(phonenum);
     wx.cloud.callFunction({
      name: 'addreport',
      data: {
        doctorname: doctorname,
        carid: carid,
        username: username,
        phone: phonenum,
        doctorid: doctorid,
        deparid: deparid,
        deparname: deparname,
        typeid: typeid,
        type: type,
        time: time,
        jztime: jztime,
        price: price,
        sex: sex,
        age: age,
        amendtime: amendtime,
        amstarttime: amstarttime,
        pmstarttime: pmstarttime,
        pmendtime: pmendtime,
        selectname:selectname
      },
      success: res => {
        console.log('error')
        if (res.result.affectedRows == 1) {
          wx.reLaunch({
            url: '/pages/success/success',
          })
        } else {
          wx.navigateTo({
            url: '/pages/error/error',
          })
        }
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
     }
  }
  
},
bindPickerChange: function (e) {
    dex=e.detail.value
    this.setData({
      dex: e.detail.value
    })
  },
  /**
   * 页面的初始数据
   * 
   */
  bindPickerChange_hx: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
      index: e.detail.value,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
    })
  },
  data: {
     doctorname:doctorname,
     doctorid:doctorid,
     deparid:deparid,
     deparname:deparname,
     typeid:typeid,
     type:type,
     time:time,
     price:price,
    jztime: jztime,
     sex:sex,
     age:age,
    amendtime: amendtime,
    amstarttime: amstarttime,
    pmstarttime: pmstarttime,
    pmendtime: pmendtime,
    array: [],
    objectArray: [
    ],
    dex: 0,
    index:0,
    userinfo: '',
    homelist:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    phonenum = wx.getStorageSync('phone')
    console.log(phonenum)
    wx.cloud.callFunction({
      name: 'gethome',
      data: {
        phone: phonenum
      },
      success: res => {
        homelist=res.result;
        this.setData({
          homeName:res.result
        })
        if (phonenum == null || phonenum == '') {
          wx.showToast({
            title: '登陆后可以绑定患者',
            duration: 2000,
            icon: 'none'
          });
        } else if (homelist.length==0) {
          wx.showToast({
            title: '请先绑定患者',
            duration: 2000,
            icon: 'none'
          });
        }
        if (phonenum == null || phonenum == '' || homelist.length==0) {
          this.setData({
            userinfo: show,
            huanzhe: none
          })
        } else {
          this.setData({
            userinfo: none,
            huanzhe: show
          })
        }
        doctorname = options.doctorname;
        doctorid = options.doctorid;
        deparid = options.deparid;
        deparname = options.deparname;
        type = options.type;
        typeid = options.typeid;
        price = options.price;
        time = options.time;
        sex = options.sex;
        age = options.age;
        amstarttime = options.amstarttime;
        amendtime = options.amendtime;
        pmendtime = options.pmendtime;
        pmstarttime = options.pmstarttime;
        timelist = [amstarttime + '~' + amendtime, pmstarttime + '~' + pmendtime]
        console.log(timelist)
        idtime = [{ id: '0', name: amstarttime + '~' + amendtime }, { id: '1', name: pmstarttime + '~' + pmendtime }]
        this.setData({
          array: timelist,
          objectArray: idtime,
          doctorname: doctorname,
          doctorid: doctorid,
          deparid: deparid,
          deparname: deparname,
          typeid: typeid,
          type: type,
          time: time,
          sex: sex,
          jztime: jztime,
          age: age,
          price: price,
          amendtime: amendtime,
          amstarttime: amstarttime,
          pmstarttime: pmstarttime,
          pmendtime: pmendtime
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