// 倒计时插件
/*
开发者: 榛子云短信(http://smsow.zhenzikj.com)
*/
class CountDown {
  //captchaClickable是否允许点击
  constructor(page) {
    this.page = page;
    this.initSeconds = 60;
    this.page.setData({ captchaTxt: '获取验证码', captchaDisabled: false });
  }
  start() {
    // console.log('进入倒计时');
    var that = this;
    var seconds = that.initSeconds;
    that.page.setData({ captchaDisabled: true, captchaTxt: seconds+'秒'});
    let promise = new Promise((resolve, reject) => {
      let setTimer = setInterval(
        () => {
          seconds -= 1;
          // console.log('倒计时:' + seconds);
          that.page.setData({
            captchaTxt: seconds + '秒',
            captchaDisabled: true
          })
          if (seconds <= 0) {
            that.page.setData({
              captchaTxt: '获取验证码',
              captchaDisabled: false
            })
            resolve(setTimer)
          }
        }
        , 1000)
    })
    promise.then((setTimer) => {
      clearInterval(setTimer)
    })

  }
}
module.exports = CountDown;
