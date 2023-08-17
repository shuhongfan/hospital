// 云函数入口文件
const cloud = require('wx-server-sdk')
const mysql = require('mysql2/promise')
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  let username = event.username;
  let deparid = event.deparid;
  let doctorid = event.doctorid;
  let typeid = event.typeid;
  let price = event.price;
  let time = event.time;
  let phone = event.phone;
  let carid = event.carid;
  let six = event.six;
  let age = event.age;
  let jztime = event.jztime;
  var dateList = jztime.split("~");
  var arr = []
  for (var i in dateList) {
    arr = arr.concat(dateList[0]);
    console.log(arr)
  }
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  //获取当前时间  
  var n = timestamp * 1000;
  var date = new Date(n);
  var year = date.getFullYear();
  var times = year + '-' + time + ' ' + arr[0];
  var selectname=event.selectname;
  try {
    const connection = await mysql.createConnection({
      host: "47.96.238.64",
      database: "hospitalData",
      user: "hospitalData",
      password: "123456"
    })
    const [rows, fields] = await connection.execute("INSERT into report (reportName,sex,age,phone,carid,doctor,department,reportType,price,time,state)values((select homeName from home where homeName = '" + selectname + "' and phone='" + phone + "'), (select sex from home where homeName = '" + selectname + "' and phone='" + phone + "'),(select age from home where homeName = '" + selectname + "' and phone='" + phone + "'), (select phone from home where homeName = '" + selectname + "' and phone='" + phone + "'), (select carid from home where homeName = '" + selectname + "' and phone='" + phone +"')," + doctorid + ", " + deparid + ", " + typeid + "," + price + ",'" + times +"', 1);");
    return rows;
  } catch (err) {
    console.log("连接错误", err);
    return err;
  }
}