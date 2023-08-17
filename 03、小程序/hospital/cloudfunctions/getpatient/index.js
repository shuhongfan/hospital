// 云函数入口文件
const cloud = require('wx-server-sdk')
const mysql = require('mysql2/promise')
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  var phonenum=event.phonenum;
  try {
    const connection = await mysql.createConnection({
      host: "47.96.238.64",
      database: "hospitalData",
      user: "hospitalData",
      password: "123456"
    })
    const [rows, fields] = await connection.execute("select r.reportId reportId,reportName,DATE_FORMAT(time,'20%y-%m-%d') time from report r,cashier c where r.reportId=c.reportId and r.phone='" + phonenum+"'  and c.state='0' order by time desc;");
    return rows;
  } catch (err) {
    console.log("连接错误", err);
    return err;
  }
}