// 云函数入口文件
const cloud = require('wx-server-sdk')
const mysql = require('mysql2/promise')
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  let username=event.username;
  let deparid = event.deparid;
  let doctorid = event.doctorid;
  let typeid=event.typeid;
  let price =event.price;
  let time=event.time;
  let phone=event.phone;
  let carid=event.carid;
  let sex=event.sex;
  let age=event.age;
  let jztime=event.jztime;
  var dateList = jztime.split("~");
  var arr = []
  for (var i in dateList) {
    arr = arr.concat(dateList[0]);
  }
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  //获取当前时间  
  var n = timestamp * 1000;
  var date = new Date(n);
  var year=date.getFullYear();
  // var month=date.getMonth()+1;
  // var day=date.getDate();
  // var hour = date.getHours()
  // var minute = date.getMinutes()
  // var second = date.getSeconds()
  var times=year+'-'+time+' '+arr[0];
  // var time2 = year + '-' + time + ' ' + arr[1];
  // var tamp2=Date.parse(time2);
  // console.log(timestamp);
  // console.log(time2+tamp2);
  try {
    const connection = await mysql.createConnection({
      host: "47.96.238.64",
      database: "hospitalData",
      user: "hospitalData",
      password: "123456"
    })
    const [rows, fields] = await connection.execute("insert into report (reportName,department,doctor,reportType,price,time,phone,carid,state,sex,age)VALUES('"+username+"',"+deparid+","+doctorid+","+typeid+","+price+",'"+times+"',"+phone+","+carid+",1,'"+sex+"',"+age+");");
    return rows;
  } catch (err) {
    console.log("连接错误", err);
    return err;
  }
}