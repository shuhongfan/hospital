var client = {};
client.init = function (apiUrl, appId, appSecret){
  this.apiUrl = apiUrl;
  this.appId = appId;
  this.appSecret = appSecret;
}
client.send = function (callback, number_, message, messageId){
  if (typeof (messageId) == "undefined") {
    messageId = '';
  }
  var that = this;
  wx.request({
    url: 'https://smsdeveloper.zhenzikj.com/sms/send.html',
    data: {
      apiUrl: that.apiUrl,
      appId: that.appId,
      appSecret: that.appSecret,
      message: message,
      number: number_,
      messageId: messageId
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    complete(res) {
      callback(res)
    }
  })
}
client.balance = function (callback) {
  var that = this;
  wx.request({
    url: 'https://smsdeveloper.zhenzikj.com/sms/balance.html',
    data: {
      apiUrl: that.apiUrl,
      appId: that.appId,
      appSecret: that.appSecret
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    complete(res) {
      callback(res)
    }
  })
}
client.findSmsByMessageId = function (callback, messageId) {
  var that = this;
  wx.request({
    url: 'https://smsdeveloper.zhenzikj.com/sms/findSmsByMessageId.html',
    data: {
      apiUrl: that.apiUrl,
      appId: that.appId,
      appSecret: that.appSecret,
      messageId: messageId
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    complete(res) {
      callback(res)
    }
  })
}
///验证码工具
//发送验证码
client.sendCode = function (callback, number_, message, messageId, seconds, length) {
  var that = this;
  //生成验证码
  var code = '';
  for (var i = 0; i < length; i++) {
    //设置随机数范围,这设置为0 ~ 9
    code += Math.floor(Math.random() * 9);
  }
  wx.setStorageSync('sms_number', number_);
  wx.setStorageSync('sms_code', code);
  var expire = new Date().getTime() + seconds*1000;
  wx.setStorageSync('sms_code_expire', expire);

  message = message.replace('{code}', code);
  
  that.send(callback, number_, message, messageId);
}
//验证验证码
client.validateCode = function (number, code) {
  var oldNumber = wx.getStorageSync('sms_number');
  if (typeof (oldNumber) == "undefined" || oldNumber == '') {
    return 'empty';
  }
  var oldCode = wx.getStorageSync('sms_code');
  if (typeof (oldCode) == "undefined" || oldCode == '') {
    return 'empty';
  }
  if (number != oldNumber)
    return 'number_error';
  if (code != oldCode)
    return 'code_error';
  var expire = wx.getStorageSync('sms_code_expire');
  if (new Date().getTime() > expire)
    return 'code_expired';
  return 'ok';
}
module.exports = {
  client: client
}
