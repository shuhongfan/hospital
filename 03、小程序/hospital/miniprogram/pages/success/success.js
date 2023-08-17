// miniprogram/pages/success/success.js
let page = 'page'
let pages = 'pages'
let home = 'home'
let homes = 'homes'
let show = 'show'
let none = 'none'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countDownNum: '3'
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
    var phonenum = wx.getStorageSync('phone');
    this.countDown();
    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/login/login?phonenum='+phonenum+'&page='+pages+'&home='+home,
      })
    }, 3000);
    // //存值
    // this.setData({
    //   //如果验证码输入正确登陆页面隐藏，我的页面显示（切换css样式）
    //   page: pages,
    //   home: home,
    //   phonenum: phonenum
    // })
  },
  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer);
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 1000)
    })
  }
  }
)