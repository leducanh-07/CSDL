const fs = require('fs');
const q = JSON.parse(fs.readFileSync('src/data/questions.json', 'utf8'));
const out = `const MODULES = [
  "Introduction to DBMS / Giới thiệu DBMS",
  "Introduction to SQL / Giới thiệu SQL",
  "DDL – Data Definition Language",
  "Constraints / Ràng buộc",
  "DML – Data Manipulation Language",
  "Single Row Functions / Hàm đơn hàng",
  "Group Functions / Hàm nhóm",
  "SQL Joins / Phép nối",
  "Sub Queries / Truy vấn con",
  "Advanced Sub Queries / Truy vấn con nâng cao",
  "Views / Khung nhìn",
  "Set Operators & Pseudocolumns",
  "Normalization / Chuẩn hóa"
];

const DATA = ` + JSON.stringify(q, null, 2) + `;\n`;
fs.writeFileSync('data.js', out, 'utf8');
