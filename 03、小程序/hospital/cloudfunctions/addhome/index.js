// 云函数入口文件
const cloud = require('wx-server-sdk')
const mysql = require('mysql2/promise')
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  let phone = event.phone
  let age=event.age
  let sex=event.sex
  let carid=event.carid
  let name=event.name
  try {
    const connection = await mysql.createConnection({
      host: "47.96.238.64",
      database: "hospitalData",
      user: "hospitalData",
      password: "123456"
    })
    const [rows, fields] = await connection.execute("insert into home(homeName,sex,age,carid,phone) values('"+name+"','"+sex+"','"+age+"','"+carid+"','"+phone+"');");
    return rows;
  } catch (err) {
    console.log("连接错误", err);
    return err;
  }
}