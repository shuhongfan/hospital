// 云函数入口文件
const cloud = require('wx-server-sdk')
const mysql = require('mysql2/promise')
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  let id = event.deparmentid
  let xingqi=event.xingqi
  var timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  //获取当前时间  
  var n = timestamp * 1000;
  var date = new Date(n);
  var xingqi1 = date.getDay();
  if (xingqi1 == 0&&xingqi=='') {
    xingqi = 'seven'
  } else if (xingqi1 == 1&&xingqi=='') {
    xingqi = 'one'
  } else if (xingqi1 == 2 && xingqi == '') {
    xingqi = 'two'
  } else if (xingqi1 == 3 && xingqi == '') {
    xingqi = 'three'
  } else if (xingqi1 == 4 && xingqi == '') {
    xingqi = 'four'
  } else if (xingqi1 == 5 && xingqi == '') {
    xingqi = 'five'
  } else if (xingqi1 == 6 && xingqi == '') {
    xingqi = 'six'
  }else{
    xingqi=event.xingqi
  }
  try {
    const connection = await mysql.createConnection({
      host: "47.96.238.64",
      database: "hospitalData",
      user: "hospitalData",
      password: "123456"
    })
    const [rows, fields] = await connection.execute("select * from doctor d, paiban p,registeredtype t where d.doctorId=p.doctorId and t.registeredId=d.registeredId and p."+xingqi+" !='无班' and departmentid="+id+" and d.dstate=0;");
    return rows;
  } catch (err) {
    console.log("连接错误", err);
    return err;
  }
}