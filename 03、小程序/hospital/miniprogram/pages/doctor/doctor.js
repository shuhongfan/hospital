// miniprogram/pages/doctor/doctor.js
let id=''
let date1=''
let date2=''
let date3=''
let date4=''
let date5=''
let date6=''
let date7=''
let xingqi7=''
let xingqi1 = ''
let xingqi2 = ''
let xingqi3 = ''
let xingqi4 = ''
let xingqi5 = ''
let xingqi6 = ''
let xqi=''
let classes=''
let classes1=''
let time=''
let deparname=''
let songqm=''
let show=''
let none=''
Page({
  /**
   * 页面的初始数据
   */
  // 页面点击事件获取几月几号以及星期几
  xqi1:function(event){
    xqi = event.currentTarget.dataset.xqi;
    time = event.currentTarget.dataset.time;
  },
  xqi2: function (event) {
    xqi = event.currentTarget.dataset.xqi;
    time = event.currentTarget.dataset.time;
    console.log(time)
    
  },
  xqi3: function (event) {
    xqi = event.currentTarget.dataset.xqi;
    time = event.currentTarget.dataset.time;
    console.log(time)
    
  },
  xqi4: function (event) {
    xqi = event.currentTarget.dataset.xqi;
    time = event.currentTarget.dataset.time;
    console.log(time)
    
  },
  xqi5: function (event) {
    xqi = event.currentTarget.dataset.xqi;
    time = event.currentTarget.dataset.time;
    console.log(time)
   
  },
  xqi6: function (event) {
    xqi = event.currentTarget.dataset.xqi;
    time = event.currentTarget.dataset.time;
    console.log(time)
    
  },
  xqi7: function (event) {
    xqi = event.currentTarget.dataset.xqi;
    time = event.currentTarget.dataset.time;
    console.log(time)
   
  },


  data: {
    songqm:[],
    date1:date1,
    date2:date2,
    date3:date3,
    date4: date4,
    date5:date5,
    date6:date6,
    date7:date7,
    xingqi7: xingqi7,
    xingqi1: xingqi1,
    xingqi2: xingqi2,
    xingqi3: xingqi3,
    xingqi4: xingqi4,
    xingqi5: xingqi5,
    xingqi6: xingqi6,
    id:id,
    time:time,
    deparname: deparname,
    one:show,
    two:none,
    three:none,
    four:none,
    five:none,
    six:none,
    saven:none
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    //获取当前时间  
    var n = timestamp * 1000;
    var date = new Date(n);
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    // 将当前时间存进date1
    date1 =  M +'-'+ D ;


    //加一天
    var tomorrow_timetamp = timestamp + 24 * 60 * 60;
    //加一天的时间：  
    var n_to = tomorrow_timetamp * 1000;
    var tomorrow_date = new Date(n_to);
    //加一天后的月份  
    var M_tomorrow = (tomorrow_date.getMonth() + 1 < 10 ? '0' + (tomorrow_date.getMonth() + 1) : tomorrow_date.getMonth() + 1);
    //加一天后的日期  
    var D_tomorrow = tomorrow_date.getDate() < 10 ? '0' + tomorrow_date.getDate() : tomorrow_date.getDate();  
    date2 = M_tomorrow + '-' + D_tomorrow;

    //加两天
    var tomorrow_timetamp1 = timestamp + 48 * 60 * 60;
    //加两天的时间：  
    var n_to1 = tomorrow_timetamp1 * 1000;
    var tomorrow_date1 = new Date(n_to1);
    //加两天后的月份  
    var M_tomorrow1 = (tomorrow_date1.getMonth() + 1 < 10 ? '0' + (tomorrow_date1.getMonth() + 1) : tomorrow_date1.getMonth() + 1);
    //加两天后的日期  
    var D_tomorrow1 = tomorrow_date1.getDate() < 10 ? '0' + tomorrow_date1.getDate() : tomorrow_date1.getDate();
    date3 = M_tomorrow1 + '-' + D_tomorrow1

    //加三天
    var tomorrow_timetamp2 = timestamp + 72 * 60 * 60;
    //加三天的时间：  
    var n_to2 = tomorrow_timetamp2 * 1000;
    var tomorrow_date2 = new Date(n_to2);
    //加三天后的月份  
    var M_tomorrow2 = (tomorrow_date2.getMonth() + 1 < 10 ? '0' + (tomorrow_date2.getMonth() + 1) : tomorrow_date2.getMonth() + 1);
    //加三天后的日期  
    var D_tomorrow2 = tomorrow_date2.getDate() < 10 ? '0' + tomorrow_date2.getDate() : tomorrow_date2.getDate();
    date4 = M_tomorrow2 + '-' + D_tomorrow2

    //加四天
    var tomorrow_timetamp3 = timestamp + 96 * 60 * 60;
    //加四天的时间：  
    var n_to3 = tomorrow_timetamp3 * 1000;
    var tomorrow_date3 = new Date(n_to3);
    //加四天后的月份  
    var M_tomorrow3 = (tomorrow_date3.getMonth() + 1 < 10 ? '0' + (tomorrow_date3.getMonth() + 1) : tomorrow_date3.getMonth() + 1);
    //加四天后的日期  
    var D_tomorrow3 = tomorrow_date3.getDate() < 10 ? '0' + tomorrow_date3.getDate() : tomorrow_date3.getDate();
    date5 = M_tomorrow3 + '-' + D_tomorrow3

    //加五天
    var tomorrow_timetamp4 = timestamp + 120 * 60 * 60;
    //加五天的时间：  
    var n_to4 = tomorrow_timetamp4 * 1000;
    var tomorrow_date4 = new Date(n_to4);
    //加五天后的月份  
    var M_tomorrow4 = (tomorrow_date4.getMonth() + 1 < 10 ? '0' + (tomorrow_date4.getMonth() + 1) : tomorrow_date4.getMonth() + 1);
    //加五天后的日期  
    var D_tomorrow4 = tomorrow_date4.getDate() < 10 ? '0' + tomorrow_date4.getDate() : tomorrow_date4.getDate();
    date6 = M_tomorrow4 + '-' + D_tomorrow4

    //加六天
    var tomorrow_timetamp5 = timestamp + 144 * 60 * 60;
    //加六天的时间：  
    var n_to5 = tomorrow_timetamp5 * 1000;
    var tomorrow_date5 = new Date(n_to5);
    //加六天后的月份  
    var M_tomorrow5 = (tomorrow_date5.getMonth() + 1 < 10 ? '0' + (tomorrow_date5.getMonth() + 1) : tomorrow_date5.getMonth() + 1);
    //加六天后的日期  
    var D_tomorrow5 = tomorrow_date5.getDate() < 10 ? '0' + tomorrow_date5.getDate() : tomorrow_date5.getDate();
    date7 = M_tomorrow5 + '-' + D_tomorrow5;

    // 判断今天周几 0为周日 1为周一 2为周二。。。。通过7个连续if判断，判断出几月几号为周几
    if (tomorrow_date.getDay() == 0) {
      xingqi1 = 'seven'
    } else if (tomorrow_date.getDay()==1){
      xingqi1='one'
    } else if (tomorrow_date.getDay()== 2) {
      xingqi1 = 'two'
    } else if (tomorrow_date.getDay() == 3) {
      xingqi1 = 'three'
    } else if (tomorrow_date.getDay() == 4) {
      xingqi1 = 'four'
    } else if (tomorrow_date.getDay() == 5) {
      xingqi1 = 'five'
    } else if (tomorrow_date.getDay() == 6) {
      xingqi1 = 'six'
    }
    if (date.getDay() == 0) {
      xingqi7 = 'seven'
    } else if (date.getDay() == 1) {
      xingqi7 = 'one'
    } else if (date.getDay() == 2) {
      xingqi7 = 'two'
    } else if (date.getDay() == 3) {
      xingqi7 = 'three'
    } else if (date.getDay() == 4) {
      xingqi7 = 'four'
    } else if (date.getDay() == 5) {
      xingqi7 = 'five'
    } else if (date.getDay() == 6) {
      xingqi7 = 'six'
    }
    if (tomorrow_date1.getDay() == 0) {
      xingqi2 = 'seven'
    } else if (tomorrow_date1.getDay() == 1) {
      xingqi2 = 'one'
    } else if (tomorrow_date1.getDay() == 2) {
      xingqi2 = 'two'
    } else if (tomorrow_date1.getDay() == 3) {
      xingqi2 = 'three'
    } else if (tomorrow_date1.getDay() == 4) {
      xingqi2 = 'four'
    } else if (tomorrow_date1.getDay() == 5) {
      xingqi2 = 'five'
    } else if (tomorrow_date1.getDay() == 6) {
      xingqi2 = 'six'
    }
    if (tomorrow_date2.getDay() == 0) {
      xingqi3 = 'seven'
    } else if (tomorrow_date2.getDay() == 1) {
      xingqi3 = 'one'
    } else if (tomorrow_date2.getDay() == 2) {
      xingqi3 = 'two'
    } else if (tomorrow_date2.getDay() == 3) {
      xingqi3 = 'three'
    } else if (tomorrow_date2.getDay() == 4) {
      xingqi3 = 'four'
    } else if (tomorrow_date2.getDay() == 5) {
      xingqi3 = 'five'
    } else if (tomorrow_date2.getDay() == 6) {
      xingqi3 = 'six'
    }
    if (tomorrow_date3.getDay() == 0) {
      xingqi4 = 'seven'
    } else if (tomorrow_date3.getDay() == 1) {
      xingqi4 = 'one'
    } else if (tomorrow_date3.getDay() == 2) {
      xingqi4 = 'two'
    } else if (tomorrow_date3.getDay() == 3) {
      xingqi4 = 'three'
    } else if (tomorrow_date3.getDay() == 4) {
      xingqi4 = 'four'
    } else if (tomorrow_date3.getDay() == 5) {
      xingqi4 = 'five'
    } else if (tomorrow_date3.getDay() == 6) {
      xingqi4 = 'six'
    }
    if (tomorrow_date4.getDay() == 0) {
      xingqi5 = 'seven'
    } else if (tomorrow_date4.getDay() == 1) {
      xingqi5 = 'one'
    } else if (tomorrow_date4.getDay() == 2) {
      xingqi5 = 'two'
    } else if (tomorrow_date4.getDay() == 3) {
      xingqi5 = 'three'
    } else if (tomorrow_date4.getDay() == 4) {
      xingqi5 = 'four'
    } else if (tomorrow_date4.getDay() == 5) {
      xingqi5 = 'five'
    } else if (tomorrow_date4.getDay() == 6) {
      xingqi5 = 'six'
    }
    if (tomorrow_date5.getDay() == 0) {
      xingqi6 = 'seven'
    } else if (tomorrow_date5.getDay() == 1) {
      xingqi6 = 'one'
    } else if (tomorrow_date5.getDay() == 2) {
      xingqi6 = 'two'
    } else if (tomorrow_date5.getDay() == 3) {
      xingqi6 = 'three'
    } else if (tomorrow_date5.getDay() == 4) {
      xingqi6 = 'four'
    } else if (tomorrow_date5.getDay() == 5) {
      xingqi6 = 'five'
    } else if (tomorrow_date5.getDay() == 6) {
      xingqi6 = 'six'
    }
    // 如果为空的话默认设置为当天日期
    if(time==''||time==null){
      time=date1;
    }
    // 获取科室id以及科室名称
    id=options.id;
    deparname = options.deparname;
    // 跳转doctor根据科室id，deparname，以及周几进行查询
    wx.cloud.callFunction({
      name: 'doctor',
      data: {
         deparmentid:id,
         deparname:deparname,
         xingqi:xqi
      },
      success: res => {
        //成功返回参数
        this.setData({
          songqm: res.result,
          date1:date1,
          date2:date2,
          date3:date3,
          date4: date4,
          date5:date5,
          date6:date6,
          date7:date7,
          xingqi7:xingqi7,
          xingqi1: xingqi1,
          xingqi2: xingqi2,
          xingqi3: xingqi3,
          xingqi4: xingqi4,
          xingqi5: xingqi5,
          xingqi6: xingqi6,
          id:id,
          class1:classes,
          time:time,
          deparname: deparname,
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