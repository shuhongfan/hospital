// 云函数入口文件
const cloud = require('wx-server-sdk')
const mysql = require('mysql2/promise')
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  var phone=event.phonenum;
  try {
    const connection = await mysql.createConnection({
      host: "47.96.238.64",
      database: "hospitalData",
      user: "hospitalData",
      password: "123456"
    })
    const [rows, fields] = await connection.execute("select c.cashier,reportName,DATE_FORMAT(time,'20%y-%m-%d') time,durgname,jie from cashier c,report r where c.reportId=r.reportId and c.mstate=1  and c.ostate=1 and r.phone='"+phone+"'");
    return rows;
  } catch (err) {
    console.log("连接错误", err);
    return err;
  }
}