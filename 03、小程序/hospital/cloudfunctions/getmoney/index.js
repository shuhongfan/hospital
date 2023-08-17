// 云函数入口文件
const cloud = require('wx-server-sdk')
//引入mysql操作模块
const mysql = require('mysql2/promise')
cloud.init()
// 云函数入口函数

exports.main = async (event, context) => {
  let phonenum = event.phonenum;
  //链接mysql数据库的test库，这里你可以链接你mysql中的任意库
  try {
    const connection = await mysql.createConnection({
      host: "47.96.238.64",
      database: "hospitalData",
      user: "hospitalData",
      password: "123456"
    })
    const [rows, fields] = await connection.execute("select reportName,repiceprice,repicetotal,durgname,durgnum from report r,cashier c where r.reportId=c.reportId and r.phone=" + phonenum + ";")
    return rows;
  } catch (err) {
    console.log("链接错误", err)
    return err
  }
}