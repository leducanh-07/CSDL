const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const seoMeta = `
    <meta name="description" content="Interactive DBMS and SQL Mastery Quiz. Practice database architecture, DDL, DML, SQL Joins, Subqueries, Normalization, and Oracle fundamentals. Perfect for DBA exams and developer interviews. Learn in English and Tiếng Việt." />
    <meta name="keywords" content="DBMS, SQL Quiz, Oracle Database, DDL, DML, SQL Joins, Normalization, BCNF, Database Administration, Developer Interview Prep, Học SQL, Trắc nghiệm CSDL" />
    <meta property="og:title" content="DBMS and SQL Mastery" />
    <meta property="og:description" content="Master Database Management Systems and SQL through interactive quizzes." />
`;
html = html.replace('<title>DBMS & SQL Mastery</title>', '<title>DBMS & SQL Mastery - Practice & Learn</title>\n' + seoMeta);
fs.writeFileSync('index.html', html, 'utf8');
