// 云函数入口文件
const cloud = require('wx-server-sdk')
const mysql = require('mysql2/promise')
cloud.init()
let phonenum=''
// 云函数入口函数
exports.main = async (event, context) => {
  phonenum=event.phonenum
  try {
    const connection = await mysql.createConnection({
      host: "47.96.238.64",
      database: "hospitalData",
      user: "hospitalData",
      password: "123456"
    })
    const [rows, fields] = await connection.execute("select r.reportId,r.reportName,o.doctorName,d.department,g.type,g.price,DATE_FORMAT(r.time,'%Y-%m-%d %H:%i:%S') time from doctor o,report r,departments d,registeredtype g where r.department=d.departmentId and o.doctorId=r.doctor and g.registeredId=r.reportType and r.phone='"+phonenum+"';");
    return rows;
  } catch (err) {
    console.log("连接错误", err);
    return err;
  }
}