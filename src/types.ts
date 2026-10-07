export interface Question {
  id: number;
  module: number;
  q_en: string;
  o_en: string[];
  q_vi: string;
  o_vi: string[];
  c: number;
  ex_en: string;
  ex_vi: string;
}

export type Language = 'en' | 'vi';
export type QuizMode = 'practice' | 'exam';

export const MODULE_NAMES = [
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
  "Normalization / Chuẩn hóa",
];
