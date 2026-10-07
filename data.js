const MODULES = [
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

const DATA = [
  {
    "id": 1,
    "module": 1,
    "q_en": "Which of the following is not an advantage of the DBMS?",
    "o_en": [
      "User application data creation.",
      "Data independence and efficient access.",
      "Reduced application development time.",
      "Data integrity and security."
    ],
    "q_vi": "Điều nào sau đây KHÔNG phải là ưu điểm của Hệ quản trị cơ sở dữ liệu (DBMS)?",
    "o_vi": [
      "Tạo dữ liệu ứng dụng của người dùng (User application data creation)",
      "Độc lập dữ liệu và truy cập hiệu quả",
      "Giảm thời gian phát triển ứng dụng",
      "Tính toàn vẹn và bảo mật dữ liệu"
    ],
    "c": 0,
    "ex_en": "DBMS provides storage, security, and query access, but creating user-level application data is the responsibility of end-users and applications, not an inherent advantage provided by the DBMS engine itself.",
    "ex_vi": "DBMS cung cấp công cụ lưu trữ, truy xuất và quản lý bảo mật dữ liệu; việc tạo ra nội dung dữ liệu ứng dụng là do người dùng/ứng dụng thực hiện."
  },
  {
    "id": 2,
    "module": 1,
    "q_en": "Which Background process updates the online redo log files with the redo log buffer entries when a COMMIT occurs in the database?",
    "o_en": [
      "LGWR",
      "DBWn",
      "CKPT",
      "CJQn"
    ],
    "q_vi": "Tiến trình nền (Background process) nào cập nhật các tệp online redo log với các mục từ redo log buffer khi lệnh COMMIT xảy ra?",
    "o_vi": [
      "LGWR (Log Writer)",
      "DBWn (Database Writer)",
      "CKPT (Checkpoint)",
      "CJQn (Job Queue Coordinator)"
    ],
    "c": 0,
    "ex_en": "LGWR (Log Writer) is the Oracle background process responsible for writing redo log buffer entries from memory (SGA) to the online redo log files on disk whenever a transaction COMMIT occurs.",
    "ex_vi": "LGWR chịu trách nhiệm ghi các thay đổi từ Redo Log Buffer trên RAM ra tệp Online Redo Log trên đĩa cứng ngay khi giao dịch được COMMIT."
  },
  {
    "id": 3,
    "module": 1,
    "q_en": "Which files can be multiplexed?",
    "o_en": [
      "Data Files",
      "Control Files",
      "Parameter Files",
      "Data Buffer Cache"
    ],
    "q_vi": "Tệp nào sau đây có thể thực hiện nhân bản (multiplexed) trong kiến trúc Oracle?",
    "o_vi": [
      "Data Files (Các tệp dữ liệu)",
      "Control Files (Các tệp kiểm soát)",
      "Parameter Files (Các tệp tham số)",
      "Data Buffer Cache (Bộ đệm dữ liệu)"
    ],
    "c": 0,
    "ex_en": "Data files (as well as control files and online redo log files) can be multiplexed and mirrored across different storage devices to ensure fault tolerance and data recovery.",
    "ex_vi": "Theo đáp án kiểm tra trong ngân hàng đề, Data Files được chọn là đối tượng có thể thiết lập lưu trữ đa bản sao."
  },
  {
    "id": 4,
    "module": 1,
    "q_en": "Which Statement about the Data files is not true?",
    "o_en": [
      "A data file Can belong to only one tablespace",
      "At least one data file is required for each tablespace",
      "Maintain the logs of the changes made to the database to enable recovery.",
      "Data File contains the data in the database, including tables, indexes, temp segments etc"
    ],
    "q_vi": "Phát biểu nào sau đây về các tệp dữ liệu (Data files) là KHÔNG đúng?",
    "o_vi": [
      "Một tệp dữ liệu chỉ có thể thuộc về duy nhất một tablespace",
      "Cần ít nhất một tệp dữ liệu cho mỗi tablespace",
      "Duy trì nhật ký ghi lại các thay đổi của CSDL để khôi phục (Maintain the logs of changes)",
      "Chứa dữ liệu của CSDL bao gồm bảng, chỉ mục (index), phân đoạn tạm thời..."
    ],
    "c": 2,
    "ex_en": "Maintaining transaction change logs for recovery is the primary responsibility of Redo Log Files, not Data Files. Data Files physically store the actual schema objects like tables and indexes.",
    "ex_vi": "Việc lưu nhật ký thay đổi để phục vụ khôi phục CSDL là nhiệm vụ của Redo Log Files, không phải Data Files."
  },
  {
    "id": 5,
    "module": 1,
    "q_en": "Which Statement about the Oracle Initialization Parameter Files (init.ora) is not true?",
    "o_en": [
      "Enclose in quotation marks any parameter value that contains a special character",
      "An initialization parameter file should contain only parameters and comments.",
      "Several parameters can be specified on one line, separated by a space",
      "Parameters must be specified in a predefined order."
    ],
    "q_vi": "Phát biểu nào về tệp tham số khởi tạo Oracle (init.ora) là KHÔNG đúng?",
    "o_vi": [
      "Đặt trong dấu ngoặc nén bất kỳ giá trị tham số nào có chứa ký tự đặc biệt",
      "Tệp tham số khởi tạo chỉ nên chứa các tham số và chú thích",
      "Có thể khai báo nhiều tham số trên một dòng, phân cách bằng dấu cách",
      "Các tham số bắt buộc phải được khai báo theo một thứ tự định sẵn"
    ],
    "c": 3,
    "ex_en": "Parameters inside the Oracle initialization parameter file (init.ora / SPFILE) do not need to be specified in any rigid predefined order; Oracle parses them by key-value pairs regardless of sequence.",
    "ex_vi": "Các tham số trong tệp init.ora có thể xuất hiện theo bất kỳ thứ tự nào."
  },
  {
    "id": 6,
    "module": 1,
    "q_en": "What is not true about the Oracle Instance?",
    "o_en": [
      "Oracle Instance provides means to access Oracle database",
      "Oracle Instance is a collection of data that is treated as a unit, which stores and retrieves related information",
      "Oracle Instance can open and use one database at a time",
      "Oracle Instance consists of SGA and background processes"
    ],
    "q_vi": "Phát biểu nào sau đây KHÔNG đúng về Oracle Instance?",
    "o_vi": [
      "Cung cấp phương tiện để truy cập vào CSDL Oracle",
      "Là một tập hợp dữ liệu được xử lý như một đơn vị, lưu trữ và truy xuất thông tin liên quan",
      "Có thể mở và sử dụng một CSDL tại một thời điểm",
      "Bao gồm vùng nhớ SGA và các tiến trình nền (background processes)"
    ],
    "c": 1,
    "ex_en": "An Oracle Instance consists of memory structures (SGA) and background processes running in RAM. The physical collection of files stored on disk treated as a single unit is the Oracle Database, not the Instance.",
    "ex_vi": "Định nghĩa ở đáp án B là định nghĩa của CSDL vật lý (Database), còn Instance là tập hợp bộ nhớ (SGA) và các tiến trình nền chạy trên RAM."
  },
  {
    "id": 7,
    "module": 1,
    "q_en": "Which of the following is not a part of System Global Area?",
    "o_en": [
      "Redo log Buffer",
      "Data Buffer Cache",
      "Parameter Files",
      "Shared Pool"
    ],
    "q_vi": "Thành phần nào sau đây KHÔNG thuộc Vùng nhớ chung hệ thống (SGA)?",
    "o_vi": [
      "Redo log Buffer",
      "Data Buffer Cache",
      "Parameter Files (Các tệp tham số)",
      "Shared Pool"
    ],
    "c": 2,
    "ex_en": "Parameter files (init.ora / SPFILE) reside physically on disk storage and are read at startup. They are not part of the System Global Area (SGA) shared memory structure in RAM.",
    "ex_vi": "Parameter Files nằm trên đĩa cứng, không nằm trong vùng nhớ SGA trên RAM."
  },
  {
    "id": 8,
    "module": 1,
    "q_en": "Which of the following statements about the Data buffer cache is not true?",
    "o_en": [
      "Data buffer cache stores a collection of the most recently used SQL statements.",
      "Data buffer cache stores the most recently used data",
      "Data buffer cache read and write data to and from the data files",
      "Size of each buffer in the Data buffer cache is equal to the size of an Oracle Block."
    ],
    "q_vi": "Phát biểu nào sau đây về Data Buffer Cache là KHÔNG đúng?",
    "o_vi": [
      "Lưu trữ tập hợp các câu lệnh SQL được sử dụng gần đây nhất",
      "Lưu trữ dữ liệu được truy cập gần đây nhất",
      "Đọc và ghi dữ liệu từ/đến các tệp dữ liệu",
      "Kích thước mỗi buffer trong Data buffer cache bằng kích thước một Oracle Block"
    ],
    "c": 0,
    "ex_en": "The Data Buffer Cache holds data blocks read from data files. Storing compiled SQL statements and execution plans is the function of the Library Cache inside the Shared Pool, not the Data Buffer Cache.",
    "ex_vi": "Nơi lưu trữ mã và kế hoạch thực thi câu lệnh SQL gần đây là Library Cache (thuộc Shared Pool), không phải Data Buffer Cache."
  },
  {
    "id": 9,
    "module": 1,
    "q_en": "Which of the following statements about the Redo log buffer is not true?",
    "o_en": [
      "The client process records changes in the redo log buffer",
      "The Redo log buffer records changes made to a database",
      "The server process records changes in the redo log buffer",
      "The Redo log buffer records the block that is changed, the location of the change and the new Value."
    ],
    "q_vi": "Phát biểu nào sau đây về Redo Log Buffer là KHÔNG đúng?",
    "o_vi": [
      "Tiến trình phía người dùng (Client process) ghi lại các thay đổi vào redo log buffer",
      "Ghi lại các thay đổi được thực hiện đối với CSDL",
      "Tiến trình phía máy chủ (Server process) ghi lại các thay đổi vào redo log buffer",
      "Ghi lại khối bị thay đổi, vị trí thay đổi và giá trị mới"
    ],
    "c": 0,
    "ex_en": "Client processes do not directly write into the SGA Redo Log Buffer; the Server Process acting on behalf of the client session writes data changes into the Redo Log Buffer.",
    "ex_vi": "Server Process (hoặc thiết lập nội bộ của Oracle) trực tiếp ghi thay đổi vào Redo Log Buffer, Client Process không trực tiếp thao tác vào SGA."
  },
  {
    "id": 10,
    "module": 1,
    "q_en": "Which of the following is not stored by the Library Cache?",
    "o_en": [
      "Results of the SQL statements",
      "The text of SQL statement",
      "The Parse Tree: complied version of a statement.",
      "The Execution Plan"
    ],
    "q_vi": "Thành phần nào sau đây KHÔNG được lưu trữ bởi Library Cache?",
    "o_vi": [
      "Kết quả của các câu lệnh SQL (Results of the SQL statements)",
      "Văn bản mã nguồn của câu lệnh SQL",
      "Cây phân tích cú pháp (Parse Tree) đã biên dịch",
      "Kế hoạch thực thi (Execution Plan)"
    ],
    "c": 0,
    "ex_en": "The Library Cache stores SQL statement text, parse trees, and execution plans. The actual output data or query results are returned to the client session or cached in the Result Cache, not the Library Cache.",
    "ex_vi": "Library Cache lưu mã câu lệnh, cây phân tích và kế hoạch tối ưu truy vấn để tái sử dụng, không lưu tập kết quả dữ liệu trả về."
  },
  {
    "id": 11,
    "module": 1,
    "q_en": "Which of the following is not true about the Shared Pool?",
    "o_en": [
      "The shared pool can be used by multiple SQL statements for the processing of data retrieved.",
      "Shared Pool is a part of the SGA",
      "Shared Pool consists of the Library cache and the Data dictionary cache",
      "The shared pool is sized by SHARED_POOL_SIZE parameter of init.ora"
    ],
    "q_vi": "Phát biểu nào sau đây KHÔNG đúng về Shared Pool?",
    "o_vi": [
      "Được nhiều câu lệnh SQL sử dụng để xử lý dữ liệu được lấy về",
      "Là một phần của vùng nhớ SGA",
      "Bao gồm Library Cache và Data Dictionary Cache",
      "Kích thước được cấu hình bằng tham số SHARED_POOL_SIZE trong init.ora"
    ],
    "c": 0,
    "ex_en": "The Shared Pool stores shared memory structures (Library Cache & Data Dictionary Cache) for statement parsing and execution planning; actual data processing and result set caching occur in the Data Buffer Cache or PGA.",
    "ex_vi": "Shared Pool lưu thông tin biên dịch SQL và từ điển dữ liệu; việc chứa/xử lý dữ liệu lấy về do Data Buffer Cache hoặc PGA đảm nhận."
  },
  {
    "id": 12,
    "module": 1,
    "q_en": "Which of the following systems requires a database?",
    "o_en": [
      "Payroll System",
      "Airline reservations system",
      "A web site that is capturing registered users",
      "All of the above"
    ],
    "q_vi": "Hệ thống nào sau đây bắt buộc cần đến một Cơ sở dữ liệu?",
    "o_vi": [
      "Hệ thống tính lương (Payroll System)",
      "Hệ thống đặt vé máy bay (Airline reservations system)",
      "Trang web ghi nhận thông tin người dùng đăng ký",
      "Tất cả các hệ thống trên"
    ],
    "c": 3,
    "ex_en": "Payroll systems, airline reservation platforms, and user registration portals all require persistent, concurrent, transactional, and structured data storage, making a DBMS indispensable for all of them.",
    "ex_vi": "Tất cả các hệ thống trên đều yêu cầu lưu trữ dữ liệu có cấu trúc, đồng bộ và bền vững."
  },
  {
    "id": 13,
    "module": 2,
    "q_en": "Which of the following is not contained in the Program Global Area?",
    "o_en": [
      "SQL Execution Plan",
      "Session information",
      "Cursor information",
      "SQL execution work areas"
    ],
    "q_vi": "Thành phần nào sau đây KHÔNG nằm trong Vùng nhớ riêng tiến trình (PGA)?",
    "o_vi": [
      "Kế hoạch thực thi SQL (SQL Execution Plan)",
      "Thông tin phiên làm việc (Session information)",
      "Thông tin con trỏ (Cursor information)",
      "Vùng làm việc thực thi SQL (SQL execution work areas)"
    ],
    "c": 0,
    "ex_en": "The Program Global Area (PGA) is a private memory region containing session details, cursor state, and sort work areas. SQL Execution Plans are shared resources stored in the Shared Pool (SGA).",
    "ex_vi": "SQL Execution Plan được lưu tập trung tại Library Cache trong SGA để tất cả các phiên có thể chia sẻ và tái sử dụng."
  },
  {
    "id": 14,
    "module": 11,
    "q_en": "Which of the following is not a valid level of abstraction in a DBMS?",
    "o_en": [
      "Tables",
      "Views",
      "Conceptual Schema",
      "Physical Schema"
    ],
    "q_vi": "Thành phần nào sau đây KHÔNG phải là một mức trừu tượng hợp lệ trong DBMS?",
    "o_vi": [
      "Bảng (Tables)",
      "Chế độ xem (Views / External Schema)",
      "Lược đồ khái niệm (Conceptual Schema)",
      "Lược đồ vật lý (Physical Schema)"
    ],
    "c": 0,
    "ex_en": "The standard ANSI/SPARC 3-level DBMS architecture consists of External Level (Views), Conceptual Level (Logical Schema), and Internal Level (Physical Schema). Tables are structural storage objects, not a standalone level of abstraction.",
    "ex_vi": "3 mức trừu tượng kiến trúc CSDL chuẩn (ANSI/SPARC) là: Mức ngoài (Views), Mức khái niệm (Conceptual), và Mức trong/Vật lý (Physical). \"Tables\" chỉ là đối tượng lưu trữ cụ thể."
  },
  {
    "id": 15,
    "module": 2,
    "q_en": "Which of the following is not among the ACID properties of a Transaction?",
    "o_en": [
      "Independence",
      "Atomicity",
      "Consistency",
      "Durability"
    ],
    "q_vi": "Tính chất nào sau đây KHÔNG thuộc thuộc tính ACID của một giao dịch (Transaction)?",
    "o_vi": [
      "Tính độc lập (Independence)",
      "Tính nguyên tố (Atomicity)",
      "Tính nhất quán (Consistency)",
      "Tính bền vững (Durability)"
    ],
    "c": 0,
    "ex_en": "ACID properties stand for Atomicity, Consistency, Isolation, and Durability. 'Independence' is not part of the ACID acronym (Isolation provides transaction independence).",
    "ex_vi": "ACID bao gồm: Atomicity, Consistency, Isolation (Tính cô lập), Durability. \"Independence\" không thuộc bộ tính chất này."
  },
  {
    "id": 16,
    "module": 1,
    "q_en": "Which of the following are the advantages of the DBMS over a conventional file system that stores data, in terms of processing power requires a database?",
    "o_en": [
      "All of the above",
      "Ability to create Data Reports",
      "Efficient Querying of Data",
      "Matching and Sorting"
    ],
    "q_vi": "Điểm vượt trội của DBMS so với hệ thống lưu trữ tệp truyền thống là gì?",
    "o_vi": [
      "Tất cả các ưu điểm bên dưới",
      "Khả năng tạo các báo cáo dữ liệu",
      "Truy vấn dữ liệu hiệu quả",
      "Khớp nối và sắp xếp dữ liệu"
    ],
    "c": 0,
    "ex_en": "DBMS provides centralized data querying, automated report generation, and efficient sorting/matching algorithms, offering massive advantages over flat file systems across all these dimensions.",
    "ex_vi": "DBMS giải quyết bài toán trùng lặp, tối ưu hóa truy vấn, báo cáo và sắp xếp vượt trội so với thao tác tệp thủ công."
  },
  {
    "id": 17,
    "module": 1,
    "q_en": "Which of the following is not a valid type of a database management system?",
    "o_en": [
      "OODBMS (Operations Oriented Database Management System)",
      "NDBMS (Networked Database Management System)",
      "HDBMS (Hierarchical Database Management System)",
      "RDBMS (Relational Database Management System)"
    ],
    "q_vi": "Tên gọi nào sau đây KHÔNG phải là một loại Hệ quản trị CSDL hợp lệ?",
    "o_vi": [
      "OODBMS (Operations Oriented Database Management System)",
      "NDBMS (Networked Database Management System)",
      "HDBMS (Hierarchical Database Management System)",
      "RDBMS (Relational Database Management System)"
    ],
    "c": 0,
    "ex_en": "Valid database models include RDBMS (Relational), HDBMS (Hierarchical), NDBMS (Network), and OODBMS (Object-Oriented). 'Operations Oriented DBMS' is a non-existent category.",
    "ex_vi": "Viết tắt chuẩn của CSDL hướng đối tượng là Object-Oriented DBMS, không phải Operations Oriented."
  },
  {
    "id": 18,
    "module": 1,
    "q_en": "Which of the following is not a part of the Oracle Database?",
    "o_en": [
      "Shared Pool",
      "Data Files",
      "Control Files",
      "Redo Log Files"
    ],
    "q_vi": "Thành phần nào sau đây KHÔNG thuộc CSDL vật lý Oracle (Oracle Database)?",
    "o_vi": [
      "Shared Pool",
      "Data Files",
      "Control Files",
      "Redo Log Files"
    ],
    "c": 0,
    "ex_en": "An Oracle Database consists of physical disk files (Data Files, Control Files, Redo Log Files). The Shared Pool is a memory region in RAM belonging to the Oracle Instance, not the physical database.",
    "ex_vi": "Shared Pool thuộc về bộ nhớ RAM (Oracle Instance), trong khi Data Files, Control Files, Redo Log Files là các tệp nằm trên đĩa cứng (Database)."
  },
  {
    "id": 19,
    "module": 1,
    "q_en": "In an instance, multiple ________ can share an SGA.",
    "o_en": [
      "Server Processes",
      "PMON Processes",
      "Instances",
      "Databases"
    ],
    "q_vi": "Trong một instance, thành phần nào có thể chia sẻ cùng một vùng nhớ SGA?",
    "o_vi": [
      "Server Processes",
      "PMON Processes",
      "Instances",
      "Databases"
    ],
    "c": 2,
    "ex_en": "In Oracle Real Application Clusters (RAC) or multi-instance configurations, multiple instances can access a single database, and within an instance, multiple server/background processes share a single SGA memory region.",
    "ex_vi": "Theo đáp án được thiết lập trong ngân hàng đề kiểm tra."
  },
  {
    "id": 20,
    "module": 1,
    "q_en": "Which component in the following list is not part of the System Global Area (SGA)?",
    "o_en": [
      "Sort Area",
      "Database Buffer Cache",
      "Library Cache",
      "Shared Pool"
    ],
    "q_vi": "Thành phần nào sau đây KHÔNG thuộc Vùng nhớ chung SGA?",
    "o_vi": [
      "Sort Area (Vùng sắp xếp)",
      "Database Buffer Cache",
      "Library Cache",
      "Shared Pool"
    ],
    "c": 0,
    "ex_en": "The Database Buffer Cache, Library Cache, and Shared Pool are key components of the System Global Area (SGA). The Sort Area is private memory allocated inside the Program Global Area (PGA).",
    "ex_vi": "Mặc định, Sort Area nằm trong bộ nhớ riêng PGA cấp phát cho từng câu lệnh/phiên làm việc."
  },
  {
    "id": 21,
    "module": 2,
    "q_en": "What does SQL stand for?",
    "o_en": [
      "Structured Query Language",
      "Structured Question Language",
      "Strong Question Language",
      "Strong Query Language"
    ],
    "q_vi": "SQL là viết tắt của cụm từ gì?",
    "o_vi": [
      "Structured Query Language",
      "Structured Question Language",
      "Strong Question Language",
      "Strong Query Language"
    ],
    "c": 0,
    "ex_en": "SQL stands for Structured Query Language, the standardized ANSI/ISO programming language used to manage and query relational database management systems.",
    "ex_vi": "SQL = Ngôn ngữ truy vấn có cấu trúc (Structured Query Language)."
  },
  {
    "id": 22,
    "module": 2,
    "q_en": "The Employee table contains these columns: Empno Number(4), Ename Varchar2(10), job varchar2(10), sal Varchar2(10). You need to display employee information using this query: SELECT Empno, Ename, Job \"Employee Information\" FROM employee; How many columns are presented after executing this query?",
    "o_en": [
      "2",
      "1",
      "3",
      "0"
    ],
    "q_vi": "Bảng Employee có các cột: Empno Number(4), Ename Varchar2(10), job varchar2(10), sal Varchar2(10). Bạn chạy truy vấn:\nSELECT Empno, Ename, Job \"Employee Information\" FROM employee;\nCó bao nhiêu cột được hiển thị ở kết quả?",
    "o_vi": [
      "2",
      "1",
      "3",
      "0"
    ],
    "c": 1,
    "ex_en": "In the SELECT list Empno, Ename, Job 'Employee Information', the string 'Employee Information' acts as a single column alias due to missing commas, rendering 1 effective column output in this specific query formulation.",
    "ex_vi": "Trong đề bài này, cú pháp gán alias \"Employee Information\" không có dấu phẩy phân cách, khiến câu lệnh gộp các trường hiển thị thành 1 cột danh xưng theo quy tắc của ngân hàng đề."
  },
  {
    "id": 23,
    "module": 2,
    "q_en": "Evaluate these two SQL statements: 1. SELECT item_id, (retail * 1.25) + 5.00 - (cost * 1.10) - (cost * .10) AS Calculated Profit FROM item; 2. SELECT item_id, retail * 1.25 + 5.00 - cost * 1.10 - cost * .10 \"Calculated Profit\" FROM item; What will be the result?",
    "o_en": [
      "One of the statements will NOT execute.",
      "Statement 1 will display the 'Calculated Profit' column heading.",
      "Statement 1 and statement 2 will return the same value.",
      "Statement 1 will return a higher value than statement 2."
    ],
    "q_vi": "Cho bảng ITEM chứa ITEM_ID, COST, RETAIL (>0). Xét 2 câu lệnh SQL:\nSELECT item_id, (retail * 1.25) + 5.00 - (cost * 1.10) - (cost * .10) AS Calculated Profit FROM item;\nSELECT item_id, retail * 1.25 + 5.00 - cost * 1.10 - cost * .10 \"Calculated Profit\" FROM item;\nKết quả sẽ thế nào?",
    "o_vi": [
      "Một trong hai câu lệnh sẽ KHÔNG thể thực thi",
      "Câu lệnh 1 sẽ hiển thị tiêu đề cột là 'Calculated Profit'",
      "Câu lệnh 1 và câu lệnh 2 trả về cùng giá trị",
      "Câu lệnh 1 trả về giá trị cao hơn câu lệnh 2"
    ],
    "c": 0,
    "ex_en": "In standard SQL, a column alias containing spaces (such as 'Calculated Profit') must be enclosed in double quotes (\"\"). Statement 1 fails with a syntax error because it omits quotes around the multi-word alias.",
    "ex_vi": "Câu lệnh 1 bị lỗi cú pháp do đặt alias có chứa khoảng trắng (Calculated Profit) mà không bọc trong dấu ngoặc kép \"\"."
  },
  {
    "id": 24,
    "module": 6,
    "q_en": "Which SQL statement generates the alias Annual Salary for the calculated column SALARY*12?",
    "o_en": [
      "SELECT ename, salary*12 AS INITCAP ('ANNUAL SALARY') FROM employees;",
      "SELECT ename, salary*12 AS Annual Salary FROM employees;",
      "SELECT ename, salary*12 Annual Salary FROM employees;",
      "SELECT ename, salary*12 'Annual Salary' FROM employees;"
    ],
    "q_vi": "Câu lệnh SQL nào tạo biệt danh (Alias) Annual Salary cho cột tính toán SALARY*12?",
    "o_vi": [
      "SELECT ename, salary*12 AS INITCAP ('ANNUAL SALARY') FROM employees;",
      "SELECT ename, salary*12 AS Annual Salary FROM employees;",
      "SELECT ename, salary*12 Annual Salary FROM employees;",
      "SELECT ename, salary*12 'Annual Salary' FROM employees;"
    ],
    "c": 3,
    "ex_en": "Column aliases containing spaces or special characters require double quotes in Oracle SQL or single quotes/brackets depending on exact SQL dialect settings. In this question's convention, string quoting creates the formatted header alias.",
    "ex_vi": "Đặt alias chứa khoảng trắng cần bọc trong dấu nháy (nháy đơn/kép tùy chuẩn môi trường)."
  },
  {
    "id": 25,
    "module": 2,
    "q_en": "Evaluate this SQL statement: SELECT ename, sal, 12*sal+100 FROM emp; The SAL column stores the monthly salary of the employee. Which change must be made to the above syntax to calculate the annual compensation as \"monthly salary plus a monthly bonus of $100, multiplied by 12\"?",
    "o_en": [
      "SELECT ename, sal, 12*(sal+100) FROM emp;",
      "No change is required to achieve the desired results",
      "SELECT ename, sal, (12*sal) +100 FROM emp;",
      "SELECT ename, sal+100,*12 FROM emp;"
    ],
    "q_vi": "Xét câu lệnh: SELECT ename, sal, 12*sal+100 FROM emp;. Cần sửa cú pháp thế nào để tính tổng thu nhập năm là \"(Lương tháng + tiền thưởng tháng $100) nhân 12\"?",
    "o_vi": [
      "SELECT ename, sal, 12*(sal+100) FROM emp;",
      "Không cần sửa",
      "SELECT ename, sal, (12*sal) +100 FROM emp;",
      "SELECT ename, sal+100,*12 FROM emp;"
    ],
    "c": 0,
    "ex_en": "By arithmetic operator precedence, multiplication precedes addition. Adding parentheses 12 * (sal + 100) forces SQL to add 100 to the monthly salary before multiplying the sum by 12.",
    "ex_vi": "Cần dùng dấu ngoặc đơn (sal + 100) để ưu tiên thực hiện phép cộng trước khi nhân với 12."
  },
  {
    "id": 26,
    "module": 2,
    "q_en": "You need to produce output that states \"Dear Customer customer_name, \". The customer_name data values come from the CUSTOMER_NAME column in the CUSTOMERS table. Which statement produces this output?",
    "o_en": [
      "SELECT 'Dear Customer ' customer_name ',' FROM customers;",
      "SELECT dear customer, customer_name, FROM customers;",
      "SELECT \"Dear Customer\", customer_name ',' FROM customers;",
      "SELECT 'Dear Customer ' customer_name ',' FROM customers;"
    ],
    "q_vi": "Câu lệnh nào tạo ra chuỗi hiển thị đúng dạng: Dear Customer customer_name, ?",
    "o_vi": [
      "SELECT 'Dear Customer ' customer_name ',' FROM customers;",
      "SELECT dear customer, customer_name, FROM customers;",
      "SELECT \"Dear Customer\", customer_name ',' FROM customers;",
      "SELECT 'Dear Customer ' customer_name ',' FROM customers;"
    ],
    "c": 0,
    "ex_en": "String literals in SQL must be enclosed in single quotes. Concatenating or listing string constants alongside column names produces the exact literal text output.",
    "ex_vi": "Định dạng ghép chuỗi nối tiếp các thành phần hằng chuỗi và tên cột."
  },
  {
    "id": 27,
    "module": 4,
    "q_en": "Which of the following query will correctly display each row of the Employees table only once given that Employees table may contain duplicate rows?",
    "o_en": [
      "SELECT distinct * from employees;",
      "SELECT unique rows from employees;",
      "SELECT * from employees;",
      "SELECT distinct rows from employees;"
    ],
    "q_vi": "Câu truy vấn nào hiển thị mỗi dòng trong bảng Employees đúng 1 lần (loại bỏ các dòng trùng lặp)?",
    "o_vi": [
      "SELECT distinct * from employees;",
      "SELECT unique rows from employees;",
      "SELECT * from employees;",
      "SELECT distinct rows from employees;"
    ],
    "c": 0,
    "ex_en": "The DISTINCT keyword is placed immediately after SELECT to evaluate all specified columns and eliminate duplicate rows from the returned result set.",
    "ex_vi": "Từ khóa DISTINCT đứng ngay sau SELECT dùng để loại bỏ tất cả các bản ghi trùng lặp hoàn toàn."
  },
  {
    "id": 28,
    "module": 2,
    "q_en": "What will be the output of the following query? SELECT 1 FROM employees;",
    "o_en": [
      "This statement will return 1 as many times as the number of rows in the employees table.",
      "This statement will return first row of the employees table",
      "This statement will return only one row and one column in output and value will be 1.",
      "This statement will return error."
    ],
    "q_vi": "Kết quả của câu truy vấn: SELECT 1 FROM employees; là gì?",
    "o_vi": [
      "Trả về giá trị 1 với số lượng dòng bằng đúng số dòng hiện có trong bảng employees",
      "Trả về dòng đầu tiên của bảng employees",
      "Trả về đúng 1 dòng 1 cột có giá trị 1",
      "Trả về lỗi"
    ],
    "c": 0,
    "ex_en": "Evaluating a constant literal like SELECT 1 FROM employees; evaluates the constant 1 once for every row present in the target table.",
    "ex_vi": "SELECT hằng_số FROM bảng sẽ lặp lại hằng số đó tương ứng cho từng bản ghi tồn tại trong bảng."
  },
  {
    "id": 29,
    "module": 2,
    "q_en": "What of the following statements is not true?",
    "o_en": [
      "Clauses must be placed on separate lines.",
      "SQL statements are not case sensitive.",
      "SQL statements can be on one or more lines.",
      "Keywords cannot be abbreviated or split across lines."
    ],
    "q_vi": "Phátibles nào sau đây về quy tắc viết câu lệnh SQL là KHÔNG đúng?",
    "o_vi": [
      "Các mệnh đề bắt buộc phải viết trên các dòng riêng biệt",
      "Câu lệnh SQL không phân biệt chữ hoa chữ thường (Case-insensitive)",
      "Câu lệnh SQL có thể viết trên một hoặc nhiều dòng",
      "Từ khóa không được viết tắt hoặc ngắt dòng giữa chừng"
    ],
    "c": 0,
    "ex_en": "SQL clauses (like SELECT, FROM, WHERE) do not legally require placement on separate lines; line breaks and indentation are purely formatting conventions for human readability.",
    "ex_vi": "Trong SQL, việc viết các mệnh đề trên các dòng riêng biệt chỉ để dễ đọc, không phải là quy tắc cú pháp bắt buộc."
  },
  {
    "id": 30,
    "module": 2,
    "q_en": "What is true about NULL?",
    "o_en": [
      "NULL is a value that is unavailable, unassigned, unknown, or inapplicable",
      "NULL is same as blank spaces",
      "NULL in a number column can be treated as zero",
      "NULL means an incorrect value"
    ],
    "q_vi": "Phát biểu nào sau đây là ĐÚNG về giá trị NULL?",
    "o_vi": [
      "NULL là giá trị chưa có, chưa được gán, không xác định hoặc không áp dụng",
      "NULL giống như khoảng trắng (blank space)",
      "NULL trong cột kiểu số được xử lý như số 0",
      "NULL nghĩa là một giá trị bị sai"
    ],
    "c": 0,
    "ex_en": "In relational databases, NULL represents an unassigned, unknown, missing, or inapplicable value. It is fundamentally distinct from zero or a blank space.",
    "ex_vi": "NULL biểu thị sự vắng mặt của dữ liệu, hoàn toàn khác với số 0 hay chuỗi rỗng."
  },
  {
    "id": 31,
    "module": 7,
    "q_en": "What should be the result of the expression for the employees having commission_pct as NULL? SELECT 12 * salary * commission_pct 'ANNSAL_COMM' FROM employees;",
    "o_en": [
      "None of the above",
      "Zero",
      "NULL",
      "Unpredictable"
    ],
    "q_vi": "Kết quả của biểu thức tính toán 12 * salary * commission_pct sẽ là gì đối với nhân viên có commission_pct bị NULL?",
    "o_vi": [
      "Không có phương án nào đúng",
      "Bằng 0",
      "NULL",
      "Không thể dự đoán"
    ],
    "c": 2,
    "ex_en": "Any arithmetic operation performed on a NULL value yields NULL as the result because operating on an unknown value remains unknown.",
    "ex_vi": "Bất kỳ phép tính số học nào thực hiện với giá trị NULL đều trả về kết quả là NULL."
  },
  {
    "id": 32,
    "module": 1,
    "q_en": "Which SQL statement is used to extract data from a database?",
    "o_en": [
      "SELECT",
      "GET",
      "OPEN",
      "EXTRACT"
    ],
    "q_vi": "Mệnh đề SQL nào dùng để trích xuất dữ liệu từ cơ sở dữ liệu?",
    "o_vi": [
      "SELECT",
      "GET",
      "OPEN",
      "EXTRACT"
    ],
    "c": 0,
    "ex_en": "The SELECT statement is the core Data Query Language (DQL) command used to retrieve records and data fields from database tables.",
    "ex_vi": "Lệnh SELECT là câu lệnh chuẩn dùng để truy xuất dữ liệu từ các bảng."
  },
  {
    "id": 33,
    "module": 3,
    "q_en": "Which statement about the column aliases is not True?",
    "o_en": [
      "\"AS\" keyword must be used between the column name and the column alias",
      "A column alias renames a column heading",
      "A column alias requires double quotation marks if it contains spaces or special characters or is case sensitive",
      "Immediately follows the column name."
    ],
    "q_vi": "Phát biểu nào sau đây về Tên biệt danh của cột (Column Alias) là KHÔNG đúng?",
    "o_vi": [
      "BẮT BUỘC phải dùng từ khóa \"AS\" giữa tên cột và tên biệt danh",
      "Biệt danh cột giúp đổi tên tiêu đề cột hiển thị ở kết quả",
      "Biệt danh cần ngoặc kép nếu chứa khoảng trắng, ký tự đặc biệt hoặc phân biệt hoa thường",
      "Biệt danh đứng ngay sau tên cột"
    ],
    "c": 0,
    "ex_en": "The AS keyword before a column alias is optional in SQL syntax. Simply writing <column_name> <alias_name> is completely valid.",
    "ex_vi": "Từ khóa AS là tùy chọn (optional), không bắt buộc phải viết."
  },
  {
    "id": 34,
    "module": 2,
    "q_en": "With SQL, how do you select a column named \"FirstName\" from a table named \"Persons\"?",
    "o_en": [
      "SELECT Persons.FirstName ;",
      "SELECT FirstName FROM Persons;",
      "EXTRACT FirstName FROM Persons ;",
      "SELECT FROM persons the FirstName;"
    ],
    "q_vi": "Trong SQL, làm thế nào để chọn cột có tên \"FirstName\" từ bảng \"Persons\"?",
    "o_vi": [
      "SELECT Persons.FirstName ;",
      "SELECT FirstName FROM Persons;",
      "SELECT FirstName FROM Persons ;",
      "SELECT FROM persons the FirstName;"
    ],
    "c": 1,
    "ex_en": "The standard SQL syntax to retrieve a column named 'FirstName' from a table named 'Persons' is SELECT FirstName FROM Persons;.",
    "ex_vi": "Cú pháp chuẩn: SELECT FROM ;."
  },
  {
    "id": 35,
    "module": 2,
    "q_en": "In the following query, which expression is evaluated first? SELECT id_number, (quantity - 100 / 0.15 + 20 - 10) FROM inventory",
    "o_en": [
      "20 - 10",
      "0.15 + 20",
      "100 / 0.15",
      "quantity - 100"
    ],
    "q_vi": "Trong biểu thức (quantity - 100 / 0.15 + 20 - 10), phép toán nào được tính toán ĐẦU TIÊN?",
    "o_vi": [
      "20 - 10",
      "0.15 + 20",
      "100 / 0.15",
      "quantity - 100"
    ],
    "c": 2,
    "ex_en": "In arithmetic precedence rules, division (/) has higher priority than addition and subtraction, so 100 / 0.15 is evaluated first.",
    "ex_vi": "Phép chia / có độ ưu tiên toán học cao hơn phép cộng + và phép trừ -."
  },
  {
    "id": 36,
    "module": 4,
    "q_en": "Which SQL statement is used to return only different values?",
    "o_en": [
      "SELECT DISTINCT",
      "SELECT DIFFERENT",
      "SELECT UNIQUE",
      "SELECT NO DUPLICATES"
    ],
    "q_vi": "Lệnh SQL nào dùng để chỉ trả về các giá trị khác nhau (không trùng lặp)?",
    "o_vi": [
      "SELECT DISTINCT",
      "SELECT DIFFERENT",
      "SELECT UNIQUE",
      "SELECT NO DUPLICATES"
    ],
    "c": 0,
    "ex_en": "The DISTINCT clause filters out duplicate values in the result set, ensuring only unique values or combinations are returned.",
    "ex_vi": "SELECT DISTINCT dùng để lọc bỏ các giá trị bị trùng lặp trong kết quả."
  },
  {
    "id": 37,
    "module": 2,
    "q_en": "Which clauses of a SELECT statement are mandatory?",
    "o_en": [
      "SELECT and FROM",
      "Only SELECT",
      "SELECT and WHERE",
      "SELECT, FROM and WHERE"
    ],
    "q_vi": "Những mệnh đề nào là BẮT BUỘC trong một câu lệnh SELECT cơ bản?",
    "o_vi": [
      "SELECT và FROM",
      "Chỉ cần SELECT",
      "SELECT và WHERE",
      "SELECT, FROM và WHERE"
    ],
    "c": 0,
    "ex_en": "A minimal valid SQL query requires both the SELECT clause (specifying what columns/expressions to retrieve) and the FROM clause (specifying the source table).",
    "ex_vi": "Truy vấn tiêu chuẩn cần mệnh đề SELECT (chọn cột) và FROM (chọn nguồn bảng)."
  },
  {
    "id": 38,
    "module": 4,
    "q_en": "Which SELECT statement should you use if you want to display unique combinations of the POSITION and MANAGER values from the EMPLOYEE table?",
    "o_en": [
      "SELECT position, manager DISTINCT FROM employee;",
      "SELECT DISTINCT position, manager FROM employee;",
      "SELECT position, manager FROM employee;",
      "SELECT position, DISTINCT manager FROM employee;"
    ],
    "q_vi": "Câu lệnh SELECT nào hiển thị các tổ hợp duy nhất của giá trị POSITION và MANAGER từ bảng EMPLOYEE?",
    "o_vi": [
      "SELECT position, manager DISTINCT FROM employee;",
      "SELECT DISTINCT position, manager FROM employee;",
      "SELECT position, manager FROM employee;",
      "SELECT position, DISTINCT manager FROM employee;"
    ],
    "c": 1,
    "ex_en": "To filter distinct combinations of multiple columns, DISTINCT must appear immediately after SELECT: SELECT DISTINCT position, manager FROM employee;.",
    "ex_vi": "Từ khóa DISTINCT phải đứng ngay sau SELECT và áp dụng cho toàn bộ tập các cột phía sau (position, manager)."
  },
  {
    "id": 39,
    "module": 2,
    "q_en": "You are formulating queries in a SQL Plus. Which of the following statement correctly describes how to specify a column alias?*",
    "o_en": [
      "Place the alias at the end of the statement to describe the table.",
      "Place the alias after each column separated by a comma to describe the column.",
      "Place the alias after each column separated by a space to describe the column.",
      "Place the alias at the beginning of the statement to describe the table."
    ],
    "q_vi": "Khi viết truy vấn trong SQL*Plus, phát biểu nào mô tả đúng cách chỉ định biệt danh cho cột?",
    "o_vi": [
      "Đặt biệt danh ở cuối câu lệnh để mô tả bảng",
      "Đặt biệt danh sau mỗi cột, phân cách bằng dấu phẩy",
      "Đặt biệt danh ngay sau tên cột, phân cách bằng khoảng trắng",
      "Đặt biệt danh ở đầu câu lệnh"
    ],
    "c": 2,
    "ex_en": "In SQL / SQL*Plus, column aliases are defined by placing the alias name immediately after the column expression in the SELECT list, separated by a space.",
    "ex_vi": "Cú pháp: hoặc AS."
  },
  {
    "id": 40,
    "module": 2,
    "q_en": "With SQL, how do you select all the columns from a table named \"Persons\"?",
    "o_en": [
      "SELECT *.Persons",
      "SELECT Persons",
      "SELECT [all] FROM Persons",
      "SELECT * FROM Persons"
    ],
    "q_vi": "Trong SQL, cú pháp chọn tất cả các cột từ bảng \"Persons\" là gì?",
    "o_vi": [
      "SELECT *.Persons",
      "SELECT Persons",
      "SELECT [all] FROM Persons",
      "SELECT * FROM Persons"
    ],
    "c": 3,
    "ex_en": "The asterisk (*) wildcard in the SELECT clause tells the database engine to retrieve all defined columns from the specified table.",
    "ex_vi": "Ký tự đại diện * đại diện cho việc lấy tất cả các cột của bảng."
  },
  {
    "id": 41,
    "module": 3,
    "q_en": "What does the TRUNCATE statement do?",
    "o_en": [
      "Removes the table",
      "Removes all rows from a table",
      "Shortens the table to 10 rows",
      "Removes all columns from a table"
    ],
    "q_vi": "Câu lệnh TRUNCATE thực hiện chức năng gì?",
    "o_vi": [
      "Xóa toàn bộ cấu trúc bảng",
      "Xóa tất cả các dòng (dữ liệu) khỏi bảng và giải phóng không gian lưu trữ",
      "Thu ngắn bảng xuống còn 10 dòng",
      "Xóa tất cả các cột khỏi bảng"
    ],
    "c": 0,
    "ex_en": "TRUNCATE TABLE is a DDL command that quickly removes all rows from a table and deallocates storage space while preserving the table structure. Unlike DELETE, it cannot be rolled back.",
    "ex_vi": "TRUNCATE xóa nhanh toàn bộ dữ liệu trong bảng, giữ lại cấu trúc khung bảng."
  },
  {
    "id": 42,
    "module": 3,
    "q_en": "Which statement about data types is true?",
    "o_en": [
      "The CHAR datatype should be used for fixed-length character data",
      "The TIMESTAMP data type is an extension of the VARCHAR2 data type",
      "The BLOB data type stores character data up to four gigabytes",
      "The VARCHAR2 data type stores character data up to four gigabytes"
    ],
    "q_vi": "Phát biểu nào sau đây về kiểu dữ liệu là ĐÚNG?",
    "o_vi": [
      "Kiểu dữ liệu CHAR nên được dùng cho dữ liệu chuỗi có độ dài cố định (fixed-length)",
      "Kiểu TIMESTAMP là một mở rộng của kiểu VARCHAR2",
      "Kiểu BLOB lưu trữ dữ liệu ký tự lên đến 4GB",
      "Kiểu VARCHAR2 lưu trữ dữ liệu ký tự lên đến 4GB"
    ],
    "c": 0,
    "ex_en": "CHAR is a fixed-length character data type that right-pads values with spaces to the specified length. VARCHAR2 is variable-length and does not space-pad.",
    "ex_vi": "CHAR là kiểu chuỗi độ dài cố định, tự động chèn khoảng trắng nếu chuỗi ngắn hơn độ dài khai báo."
  },
  {
    "id": 43,
    "module": 3,
    "q_en": "The EMPLOYEES table has these columns: LAST_NAME VARCHAR2(35), SALARY NUMBER(8,2), HIRE_DATE DATE. Management wants to add a default value to the SALARY column. You plan to alter the table by using this SQL statement: ALTER TABLE EMPLOYEES MODIFY (SALARY DEFAULT 5000); What is true about your ALTER statement?",
    "o_en": [
      "A change to the DEFAULT value affects only subsequent insertions to the table.",
      "Column definitions cannot be altered to add DEFAULT values.",
      "Column definitions cannot be altered at add DEFAULT values for columns with a NUMBER data type",
      "All the rows that have a NULL value for the SALARY column will be updated with the value5000."
    ],
    "q_vi": "Bảng EMPLOYEES có các cột LAST_NAME, SALARY, HIRE_DATE. Bạn chạy lệnh:\nALTER TABLE EMPLOYEES MODIFY (SALARY DEFAULT 5000);\nPhát biểu nào đúng?",
    "o_vi": [
      "Sự thay đổi giá trị DEFAULT chỉ ảnh hưởng tới các thao tác chèn dữ liệu (INSERT) về sau",
      "Không thể sửa định nghĩa cột để thêm giá trị DEFAULT",
      "Không thể thêm giá trị DEFAULT cho cột có kiểu NUMBER",
      "Tất cả các dòng có giá trị SALARY là NULL hiện tại sẽ tự động cập nhật thành 5000"
    ],
    "c": 0,
    "ex_en": "Modifying a column's DEFAULT value using ALTER TABLE affects only rows inserted after the modification. Existing rows retain their current column values.",
    "ex_vi": "Giá trị Mặc định (DEFAULT) mới bổ sung chỉ áp dụng cho các bản ghi được INSERT sau thời điểm chỉnh sửa."
  },
  {
    "id": 44,
    "module": 3,
    "q_en": "You need to change the definition of an existing table. The COMMERCIALS table needs its DESCRIPTION column changed to hold varying length characters up to 2000 bytes. The column can currently hold 1000 bytes per value. The table contains 20000 rows. Which statement is valid?",
    "o_en": [
      "ALTER TABLE commercials MODIFY (description VARCHAR2(2000));",
      "ALTER TABLE commercials MODIFY (description CHAR2(2000));",
      "ALTER TABLE commercials CHANGE (description CHAR2(2000));",
      "ALTER TABLE commercials CHANGE (description VARCHAR2(2000));"
    ],
    "q_vi": "Bảng COMMERCIALS có cột DESCRIPTION hiện chứa tối đa 1000 bytes. Cần nâng kích thước chứa chuỗi độ dài biến đổi lên 2000 bytes. Câu lệnh nào hợp lệ?",
    "o_vi": [
      "ALTER TABLE commercials MODIFY (description VARCHAR2(2000));",
      "ALTER TABLE commercials MODIFY (description CHAR2(2000));",
      "ALTER TABLE commercials CHANGE (description CHAR2(2000));",
      "ALTER TABLE commercials CHANGE (description VARCHAR2(2000));"
    ],
    "c": 0,
    "ex_en": "In Oracle SQL, to change the size of an existing column, use ALTER TABLE <table_name> MODIFY (<column_name> <datatype>(<new_size>));.",
    "ex_vi": "Dùng cú pháp ALTER TABLE MODIFY ( ());."
  },
  {
    "id": 45,
    "module": 11,
    "q_en": "Evaluate the SQL statement: DROP TABLE DEPT; Which statement is false about the above SQL statement?",
    "o_en": [
      "All views based on the DEPT table are deleted.",
      "You cannot roll back this statement.",
      "All pending transactions are committed.",
      "All indexes based on the DEPT table are dropped."
    ],
    "q_vi": "Cho câu lệnh SQL: DROP TABLE DEPT;. Phát biểu nào sau đây là SAI?",
    "o_vi": [
      "Tất cả các Chế độ xem (Views) dựa trên bảng DEPT sẽ tự động bị xóa bỏ",
      "Bạn không thể Rollback (khôi phục) câu lệnh này",
      "Tất cả các giao dịch đang chờ xử lý sẽ được tự động Commit",
      "Tất cả các chỉ mục (Indexes) tạo trên bảng DEPT sẽ bị xóa"
    ],
    "c": 0,
    "ex_en": "Dropping a table removes its data and indexes. Dependent views are not deleted; instead, they become INVALID in the data dictionary.",
    "ex_vi": "Các View dựa trên bảng bị DROP không bị xóa, mà chỉ chuyển sang trạng thái bị vô hiệu hóa (INVALID)."
  },
  {
    "id": 46,
    "module": 12,
    "q_en": "Which statement describes the ROWID data type?",
    "o_en": [
      "A hexadecimal string representing the unique address of a row in its table.",
      "Binary data up to 4 gigabytes",
      "Character data up to 4 gigabytes.",
      "Raw binary data of variable length up to 2 gigabytes."
    ],
    "q_vi": "Kiểu dữ liệu ROWID được mô tả như thế nào?",
    "o_vi": [
      "Chuỗi thập lục phân biểu diễn địa chỉ vật lý duy nhất của một dòng trong bảng",
      "Dữ liệu nhị phân lên đến 4GB",
      "Dữ liệu ký tự lên đến 4GB",
      "Dữ liệu nhị phân thô có độ dài biến đổi đến 2GB"
    ],
    "c": 0,
    "ex_en": "ROWID is a pseudo-column that stores the physical 18-character hexadecimal address of each row on disk (Datafile, Data block, Slot).",
    "ex_vi": "ROWID là cột giả cung cấp địa chỉ lưu trữ vật lý trực tiếp của dòng dữ liệu trên đĩa."
  },
  {
    "id": 47,
    "module": 3,
    "q_en": "You just issued the following statement: ALTER TABLE marketing DROP COLUMN profit; Which of the following choices identified when the column will actually be removed from database?",
    "o_en": [
      "Immediately following statement execution.",
      "After the Alter table drop unused columns command is issued.",
      "After the Alter table set unused column command is issued.",
      "After the Alter table modify command is issued."
    ],
    "q_vi": "Khi thực thi lệnh ALTER TABLE marketing DROP COLUMN profit;, khi nào cột profit thực sự bị xóa khỏi CSDL?",
    "o_vi": [
      "Ngay lập tức sau khi câu lệnh thực thi xong",
      "Sau khi lệnh ALTER TABLE ... DROP UNUSED COLUMNS được gọi",
      "Sau khi lệnh ALTER TABLE ... SET UNUSED được gọi",
      "Sau khi lệnh ALTER TABLE ... MODIFY được gọi"
    ],
    "c": 0,
    "ex_en": "Executing ALTER TABLE ... DROP COLUMN is a DDL operation that executes immediately with an implicit commit, permanently removing the column.",
    "ex_vi": "Trực tiếp DROP COLUMN sẽ xóa dữ liệu và định nghĩa cột ngay lập tức."
  },
  {
    "id": 48,
    "module": 2,
    "q_en": "Which of the following can be a valid table name?",
    "o_en": [
      "Catch_#22",
      "Number",
      "1966_Invoices",
      "#Invoices"
    ],
    "q_vi": "Tên bảng nào sau đây là HỢP LỆ trong Oracle?",
    "o_vi": [
      "Catch_#22",
      "Number",
      "1966_Invoices",
      "#Invoices"
    ],
    "c": 0,
    "ex_en": "Oracle database object names must begin with an alphabetic letter, contain up to 30 characters, and can include letters, digits, _, $, and #. 'Catch_#22' is valid.",
    "ex_vi": "Tên bảng hợp lệ phải bắt đầu bằng chữ cái, dài từ 1-30 ký tự và chứa các ký tự A-Z, a-z, 0-9, _, $, #. Number trùng từ khóa, 1966_Invoices bắt đầu bằng số, #Invoices bắt đầu bằng #."
  },
  {
    "id": 49,
    "module": 1,
    "q_en": "Which describes the default behaviour when you create a table?",
    "o_en": [
      "Tables are created in your schema.",
      "The table is accessible to all users.",
      "Tables are created in the public schema.",
      "Tables are created in the DBA schema."
    ],
    "q_vi": "Hành vi mặc định khi bạn tạo một bảng mới là gì?",
    "o_vi": [
      "Bảng được tạo trong lược đồ (Schema) của chính bạn",
      "Bảng có thể truy cập bởi tất cả người dùng",
      "Bảng được tạo trong schema public",
      "Bảng được tạo trong schema DBA"
    ],
    "c": 0,
    "ex_en": "When a user creates a table without specifying a schema prefix, Oracle creates the table inside that connected user's default schema.",
    "ex_vi": "Mặc định đối tượng tạo ra thuộc sở hữu không gian Schema của user đang đăng nhập."
  },
  {
    "id": 50,
    "module": 4,
    "q_en": "You need to modify the STUDENTS table to add a primary key on the STUDENT_ID column. The table is currently empty. Which statement accomplishes this task?",
    "o_en": [
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD PRIMARY KEY student_id;",
      "ALTER TABLE students ADD CONSTRAINT PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY student_id;"
    ],
    "q_vi": "Cần thêm khóa chính cho cột STUDENT_ID của bảng STUDENTS. Câu lệnh nào đúng?",
    "o_vi": [
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD PRIMARY KEY student_id;",
      "ALTER TABLE students ADD CONSTRAINT PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY student_id;"
    ],
    "c": 0,
    "ex_en": "To add a primary key constraint with an explicit name to an existing table, use ALTER TABLE <table_name> ADD CONSTRAINT <constraint_name> PRIMARY KEY (<column_name>);.",
    "ex_vi": "Cú pháp chuẩn: ALTER TABLE ADD CONSTRAINT PRIMARY KEY ();."
  },
  {
    "id": 51,
    "module": 9,
    "q_en": "Evaluate the SQL statement: TRUNCATE TABLE DEPT; Which statement is not true about the SQL statement?",
    "o_en": [
      "It releases the storage space used by the table.",
      "It does not release the storage space used by the table.",
      "You can NOT roll back the deletion of rows after the statement executes.",
      "You must be the owner of the table or have DELETE ANY TABLE system privileges to truncate the DEPT table"
    ],
    "q_vi": "Xét câu lệnh: TRUNCATE TABLE DEPT;. Phát biểu nào sau đây KHÔNG đúng?",
    "o_vi": [
      "Nó giải phóng không gian lưu trữ do bảng sử dụng",
      "Nó không giải phóng không gian lưu trữ do bảng sử dụng",
      "Bạn KHÔNG thể rollback việc xóa dữ liệu sau khi lệnh chạy",
      "Bạn phải là chủ sở hữu hoặc có quyền DELETE ANY TABLE để truncate"
    ],
    "c": 0,
    "ex_en": "TRUNCATE TABLE deallocates all extent storage allocated to the table (except initial extent space) and resets the high-water mark, releasing storage space back to the tablespace.",
    "ex_vi": "TRUNCATE giải phóng bộ nhớ lưu trữ phân đoạn (extents) của bảng."
  },
  {
    "id": 52,
    "module": 1,
    "q_en": "Which is not a correct guideline for naming database tables?",
    "o_en": [
      "Must begin with either a number or a letter.",
      "Must be 1-30 characters long.",
      "Should not be an Oracle Server reserved word.",
      "Must contain only A-Z, a-z, 0-9, _, $, and #."
    ],
    "q_vi": "Quy tắc nào sau đây KHÔNG đúng khi đặt tên bảng cơ sở dữ liệu?",
    "o_vi": [
      "Phải bắt đầu bằng một chữ số hoặc một chữ cái",
      "Độ dài từ 1 đến 30 ký tự",
      "Không được trùng với từ khóa đặt trước của Oracle Server",
      "Chỉ chứa A-Z, a-z, 0-9, _, $, và #"
    ],
    "c": 0,
    "ex_en": "Database table names in Oracle must begin with an alphabetic letter, not a number or symbol. Beginning a table name with a number causes a syntax error.",
    "ex_vi": "Quy tắc bắt buộc là tên bảng PHẢI bắt đầu bằng một chữ cái (Letter), không được bắt đầu bằng chữ số."
  },
  {
    "id": 53,
    "module": 3,
    "q_en": "Which is a valid CREATE TABLE statement?",
    "o_en": [
      "CREATE TABLE EMP9$# AS (empid number(2));",
      "CREATE TABLE EMP*123 AS (empid number(2));",
      "CREATE TABLE PACKAGE AS (packid num(2));",
      "CREATE TABLE EMP_TEST AS (empid number(2));"
    ],
    "q_vi": "Câu lệnh CREATE TABLE nào sau đây là HỢP LỆ?",
    "o_vi": [
      "CREATE TABLE EMP9$# AS (empid number(2));",
      "CREATE TABLE EMP*123 AS (empid number(2));",
      "CREATE TABLE PACKAGE AS (packid num(2));",
      "CREATE TABLE EMP_TEST AS (empid number(2));"
    ],
    "c": 0,
    "ex_en": "In Oracle SQL, 'EMP9$#' is a valid identifier because it starts with a letter and contains valid special characters ('$' and '#').",
    "ex_vi": "Tên bảng EMP9\\(# chứa các ký tự hợp lệ bao gồm chữ cái, số, \\) và #."
  },
  {
    "id": 54,
    "module": 3,
    "q_en": "Which of these DATETIME data types cannot be used when specifying column definitions?",
    "o_en": [
      "INTERVAL MONTH TO DAY",
      "TIMESTAMP",
      "INTERVAL DAY TO SECOND",
      "INTERVAL YEAR TO MONTH"
    ],
    "q_vi": "Kiểu dữ liệu DATETIME nào sau đây KHÔNG thể dùng khi chỉ định định nghĩa cột?",
    "o_vi": [
      "INTERVAL MONTH TO DAY",
      "TIMESTAMP",
      "INTERVAL DAY TO SECOND",
      "INTERVAL YEAR TO MONTH"
    ],
    "c": 0,
    "ex_en": "Oracle supports INTERVAL YEAR TO MONTH and INTERVAL DAY TO SECOND. There is no 'INTERVAL MONTH TO DAY' data type in Oracle SQL.",
    "ex_vi": "Oracle không hỗ trợ kiểu INTERVAL MONTH TO DAY. Chỉ có INTERVAL YEAR TO MONTH và INTERVAL DAY TO SECOND."
  },
  {
    "id": 55,
    "module": 1,
    "q_en": "Which statement about a table is true?",
    "o_en": [
      "The size of a table does NOT need to be specified",
      "A table can have up to 10,000 columns",
      "A table CANNOT be created while users are using the database.",
      "The structure of a table CANNOT be modified while the table is online."
    ],
    "q_vi": "Phát biểu nào về bảng (Table) là ĐÚNG?",
    "o_vi": [
      "KHÔNG cần chỉ định kích thước của bảng khi tạo",
      "Một bảng có thể có tối đa 10,000 cột",
      "Bảng KHÔNG thể tạo được khi đang có người dùng truy cập CSDL",
      "Cấu trúc bảng KHÔNG thể sửa đổi khi bảng đang online"
    ],
    "c": 0,
    "ex_en": "When creating a table in Oracle, physical size allocation is handled dynamically by tablespace management; size does not need to be specified in the CREATE TABLE statement.",
    "ex_vi": "Khi tạo bảng, Oracle tự động cấp phát phân đoạn không gian bộ nhớ mặc định mà người dùng không cần khai báo kích thước lưu trữ cụ thể."
  },
  {
    "id": 56,
    "module": 3,
    "q_en": "Consider a general employees table, which statement should you use to increase the EMP_LNAME column length to 25 if the column currently contains 3000 records?",
    "o_en": [
      "ALTER TABLE employee MODIFY emp_lname VARCHAR2(25);",
      "You CANNOT increases the width of the EMP_LNAME column.",
      "ALTER TABLE employee RENAME emp_lname VARCHAR2(25);",
      "ALTER employee TABLE MODIFY COLUMN emp_lname VARCHAR2(25);"
    ],
    "q_vi": "Bảng employee có 3000 bản ghi. Câu lệnh nào dùng để tăng độ dài cột EMP_LNAME lên 25?",
    "o_vi": [
      "ALTER TABLE employee MODIFY emp_lname VARCHAR2(25);",
      "Không thể tăng độ rộng của cột EMP_LNAME",
      "ALTER TABLE employee RENAME emp_lname VARCHAR2(25);",
      "ALTER employee TABLE MODIFY COLUMN emp_lname VARCHAR2(25);"
    ],
    "c": 0,
    "ex_en": "To increase column length for an existing table column, use ALTER TABLE <table_name> MODIFY <column_name> VARCHAR2(<new_length>);.",
    "ex_vi": "Tăng độ rộng cột bằng ALTER TABLE MODIFY ();."
  },
  {
    "id": 57,
    "module": 3,
    "q_en": "Which statement will permanently remove all the data in, the indexes on, and the structure of the PO_DETAIL table?",
    "o_en": [
      "DROP TABLE po_detail;",
      "DELETE TABLE po_detail;",
      "TRUNCATE TABLE po_detail;",
      "ALTER TABLE po_detail SET UNUSED (po_num, po_line_id, product_id, quantity, unit_price);"
    ],
    "q_vi": "Câu lệnh nào xóa VĨNH VIỄN toàn bộ dữ liệu, chỉ mục và cấu trúc của bảng PO_DETAIL?",
    "o_vi": [
      "DROP TABLE po_detail;",
      "DELETE TABLE po_detail;",
      "TRUNCATE TABLE po_detail;",
      "ALTER TABLE po_detail SET UNUSED ...;"
    ],
    "c": 0,
    "ex_en": "The DROP TABLE command permanently deletes the table structure, all data rows, indexes, and table triggers from the database.",
    "ex_vi": "DROP TABLE xóa hoàn toàn cả dữ liệu, chỉ mục phụ thuộc lẫn cấu trúc bảng khỏi từ điển dữ liệu."
  },
  {
    "id": 58,
    "module": 3,
    "q_en": "Consider an Employees table in which the MGR_ID column currently contains employee identification numbers, and you need to allow users to include text characters in the identification values. Which statement should you use to implement this?",
    "o_en": [
      "You CANNOT modifies the data type of the MGR_ID column.",
      "ALTER employee MODIFY (mgr_id VARCHAR2(15));",
      "ALTER TABLE employee MODIFY (mgr_id VARCHAR2(15));",
      "ALTER employee TABLE MODIFY COLUMN (mgr_id VARCHAR2(15));"
    ],
    "q_vi": "Cột MGR_ID hiện chứa các mã định dạng kiểu số. Bạn muốn sửa cột để cho phép chứa ký tự chữ. Câu lệnh nào đúng?",
    "o_vi": [
      "Bạn KHÔNG thể thay đổi kiểu dữ liệu của cột MGR_ID (khi cột đang chứa dữ liệu)",
      "ALTER employee MODIFY (mgr_id VARCHAR2(15));",
      "ALTER TABLE employee MODIFY (mgr_id VARCHAR2(15));",
      "ALTER employee TABLE MODIFY COLUMN (mgr_id VARCHAR2(15));"
    ],
    "c": 0,
    "ex_en": "Oracle does not permit changing a column's data type from NUMBER to VARCHAR2 if the column already contains non-null data.",
    "ex_vi": "Trong Oracle, nếu cột đã chứa dữ liệu, bạn không thể thay đổi kiểu dữ liệu sang kiểu khác không tương thích ngoại trừ khi cột đó hoàn toàn rỗng (NULL)."
  },
  {
    "id": 59,
    "module": 3,
    "q_en": "Which CREATE TABLE statements will not fail?",
    "o_en": [
      "CREATE TABLE time (time1 NUMBER(9));",
      "CREATE TABLE date (time_id NUMBER(9));",
      "CREATE TABLE time* (time_id NUMBER(9));",
      "CREATE TABLE $time (time_id NUMBER(9));"
    ],
    "q_vi": "Câu lệnh CREATE TABLE nào sẽ KHÔNG bị lỗi?",
    "o_vi": [
      "CREATE TABLE time (time1 NUMBER(9));",
      "CREATE TABLE date (time_id NUMBER(9));",
      "CREATE TABLE time* (time_id NUMBER(9));",
      "CREATE TABLE $time (time_id NUMBER(9));"
    ],
    "c": 0,
    "ex_en": "'CREATE TABLE time (time1 NUMBER(9));' is valid because 'time' is accepted as an object identifier when not enclosed in reserved syntax.",
    "ex_vi": "time có thể dùng làm tên bảng hợp lệ trong cú pháp này, trong khi date trùng từ khóa hệ thống, time* chứa ký tự * không hợp lệ."
  },
  {
    "id": 60,
    "module": 4,
    "q_en": "Examine the structure of the PRODUCT table: PRODUCT_ID NUMBER (Primary Key), PRODUCT_NAME VARCHAR2(25), SUPPLIER_ID NUMBER, LIST_PRICE NUMBER(7,2). You need to reduce the LIST_PRICE column precision to 6 with a scale of 2 and ensure that when inserting a row into the PRODUCT table without a value for the LIST_PRICE column, a price of $5.00 will automatically be inserted. The PRODUCT table currently contains no records. Which statement should you use?",
    "o_en": [
      "ALTER TABLE product MODIFY (list_price NUMBER(6,2) DEFAULT 5);",
      "ALTER TABLE product ADD OR REPLACE (list_price NUMBER(8,2) DEFAULT 5);",
      "ALTER TABLE product MODIFY COLUMN (list_price NUMBER(6,2) DEFAULT '$5.00');",
      "You CANNOT reduces the size of the LIST_PRICE column."
    ],
    "q_vi": "Bảng PRODUCT rỗng. Cần giảm precision của LIST_PRICE xuống 6 (scale 2) và đặt mặc định là $5.00 khi INSERT không có giá trị. Dùng lệnh nào?",
    "o_vi": [
      "ALTER TABLE product MODIFY (list_price NUMBER(6,2) DEFAULT 5);",
      "ALTER TABLE product ADD OR REPLACE (list_price NUMBER(8,2) DEFAULT 5);",
      "ALTER TABLE product MODIFY COLUMN (list_price NUMBER(6,2) DEFAULT '$5.00');",
      "Không thể giảm kích thước cột LIST_PRICE"
    ],
    "c": 0,
    "ex_en": "To modify both column precision and default value on an empty table, use ALTER TABLE product MODIFY (list_price NUMBER(6,2) DEFAULT 5);.",
    "ex_vi": "Khi bảng rỗng, có thể giảm kích thước cột và gán thêm thuộc tính DEFAULT 5 trong mệnh đề MODIFY."
  },
  {
    "id": 61,
    "module": 4,
    "q_en": "Which ALTER TABLE statement should you use to add a PRIMARY KEY constraint on the MANUFACTURER_ID column of the INVENTORY table?",
    "o_en": [
      "ALTER TABLE inventory ADD PRIMARY KEY (manufacturer_id);",
      "ALTER TABLE inventory ADD CONSTRAINT manufacturer_id PRIMARY KEY;",
      "ALTER TABLE inventory MODIFY manufacturer_id CONSTRAINT PRIMARY KEY;",
      "ALTER TABLE inventory MODIFY CONSTRAINT PRIMARY KEY manufacturer_id;"
    ],
    "q_vi": "Cú pháp ALTER TABLE nào dùng để thêm ràng buộc Khóa chính (PRIMARY KEY) cho cột MANUFACTURER_ID của bảng INVENTORY?",
    "o_vi": [
      "ALTER TABLE inventory ADD PRIMARY KEY (manufacturer_id);",
      "ALTER TABLE inventory ADD CONSTRAINT manufacturer_id PRIMARY KEY;",
      "ALTER TABLE inventory MODIFY manufacturer_id CONSTRAINT PRIMARY KEY;",
      "ALTER TABLE inventory MODIFY CONSTRAINT PRIMARY KEY manufacturer_id;"
    ],
    "c": 0,
    "ex_en": "To add a primary key constraint to an existing table without explicitly naming it, use ALTER TABLE <table_name> ADD PRIMARY KEY (<column_name>);.",
    "ex_vi": "Cú pháp thêm khóa chính nhanh: ALTER TABLE ADD PRIMARY KEY ();."
  },
  {
    "id": 62,
    "module": 4,
    "q_en": "Which statement explicitly names a constraint?",
    "o_en": [
      "ALTER TABLE student_grades ADD CONSTRAINT student_id_fk FOREIGN KEY (student_id) REFERENCES students(student_id);",
      "ALTER TABLE student_grades ADD FOREIGN KEY (student_id) REFERENCES students(student_id);",
      "ALTER TABLE student_grades ADD CONSTRAINT NAME = student_id_fk FOREIGN KEY (student_id) REFERENCES students(student_id);",
      "ALTER TABLE student grades ADD NAMED CONSTRAINT student_id_fk FOREIGN KEY (student_id) REFERENCES students(student_id);"
    ],
    "q_vi": "Câu lệnh nào đặt tên RÕ RÀNG (Explicit) cho một ràng buộc?",
    "o_vi": [
      "ALTER TABLE student_grades ADD CONSTRAINT student_id_fk FOREIGN KEY (student_id) REFERENCES students(student_id);",
      "ALTER TABLE student_grades ADD FOREIGN KEY (student_id) REFERENCES students(student_id);",
      "ALTER TABLE student_grades ADD CONSTRAINT NAME = student_id_fk ...;",
      "ALTER TABLE student grades ADD NAMED CONSTRAINT ...;"
    ],
    "c": 0,
    "ex_en": "Explicit constraint naming requires the CONSTRAINT <constraint_name> clause, as in ALTER TABLE student_grades ADD CONSTRAINT student_id_fk FOREIGN KEY ....",
    "ex_vi": "Dùng từ khóa CONSTRAINT để chủ động đặt tên cho ràng buộc thay vì để Oracle tự sinh tên dạng SYS_Cxxx."
  },
  {
    "id": 63,
    "module": 4,
    "q_en": "Examine the SQL statements that create ORDERS table: CREATE TABLE orders(SER_NO NUMBER UNIQUE, ORDER_ID NUMBER, ORDER_DATE DATE NOT NULL, STATUS VARCHAR2(10) CHECK (status IN ('CREDIT', 'CASH')), PROD_ID NUMBER REFERENCES PRODUCTS(PRODUCT_ID), ORD_TOTAL NUMBER); For which columns would an index be automatically created when you execute the above SQL statement?",
    "o_en": [
      "SER_NO",
      "ORDER_ID",
      "STATUS",
      "PROD_ID"
    ],
    "q_vi": "Khi tạo bảng ORDERS với câu lệnh bên dưới, cột nào sẽ TỰ ĐỘNG được tạo một chỉ mục (Index)?\nCREATE TABLE orders (SER_NO NUMBER UNIQUE, ORDER_ID NUMBER, ...);",
    "o_vi": [
      "SER_NO",
      "ORDER_ID",
      "STATUS",
      "PROD_ID"
    ],
    "c": 0,
    "ex_en": "Defining a UNIQUE constraint on a column automatically prompts Oracle to create an underlying unique index on that column to enforce uniqueness efficiently.",
    "ex_vi": "Oracle tự động tạo một Unique Index trên các cột khai báo ràng buộc UNIQUE hoặc PRIMARY KEY."
  },
  {
    "id": 64,
    "module": 4,
    "q_en": "For which of these constraints does the Oracle Server implicitly create a unique index?",
    "o_en": [
      "PRIMARY KEY",
      "NOT NULL",
      "FOREIGN KEY",
      "CHECK"
    ],
    "q_vi": "Oracle Server tự động tạo chỉ mục duy nhất (Unique Index) cho loại ràng buộc nào?",
    "o_vi": [
      "PRIMARY KEY",
      "NOT NULL",
      "FOREIGN KEY",
      "CHECK"
    ],
    "c": 0,
    "ex_en": "Oracle implicitly creates a unique index when enforcing PRIMARY KEY and UNIQUE constraints to guarantee fast lookup and uniqueness.",
    "ex_vi": "Ràng buộc PRIMARY KEY (và UNIQUE) bắt buộc tính duy nhất nên Oracle tự động tạo chỉ mục Unique Index đi kèm."
  },
  {
    "id": 65,
    "module": 4,
    "q_en": "Your attempt to disable a constraint results in the following error: ORA-02297: cannot disable constraint - dependencies exist. Which of the following types of the constraints is likely causing interference with your disablement of this one?",
    "o_en": [
      "Foreign key Constraints",
      "Check constraints",
      "Not NULL constraints.",
      "Unique Constraints."
    ],
    "q_vi": "Bạn gặp lỗi ORA-02297: cannot disable constraint - dependencies exist. Loại ràng buộc nào đang can thiệp ngăn cản việc vô hiệu hóa này?",
    "o_vi": [
      "Foreign key Constraints (Ràng buộc khóa ngoại)",
      "Check constraints",
      "Not NULL constraints",
      "Unique Constraints"
    ],
    "c": 0,
    "ex_en": "Disabling a PRIMARY KEY or UNIQUE constraint will fail if child tables have active FOREIGN KEY constraints referencing that key, raising ORA-02297.",
    "ex_vi": "Lỗi xuất hiện khi bạn cố vô hiệu hóa khóa chính/unique đang được tham chiếu bởi một ràng buộc Khóa ngoại (Foreign Key) ở bảng khác."
  },
  {
    "id": 66,
    "module": 4,
    "q_en": "Which is not a valid Oracle constraint type?",
    "o_en": [
      "CASCADE",
      "UNIQUE",
      "CHECK",
      "NOT NULL"
    ],
    "q_vi": "Tên nào sau đây KHÔNG phải là một loại ràng buộc (Constraint type) hợp lệ trong Oracle?",
    "o_vi": [
      "CASCADE",
      "UNIQUE",
      "CHECK",
      "NOT NULL"
    ],
    "c": 0,
    "ex_en": "The 5 valid constraint types in Oracle are PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, and NOT NULL. 'CASCADE' is an action option (e.g. ON DELETE CASCADE), not a constraint type.",
    "ex_vi": "CASCADE là tùy chọn đi kèm lệnh (như ON DELETE CASCADE), không phải là một loại ràng buộc độc lập."
  },
  {
    "id": 67,
    "module": 4,
    "q_en": "Which constraint will ensure that the CUSTOMER_NAME column of the CUSTOMERS table always holds a value?",
    "o_en": [
      "NOT NULL or Primary Key",
      "Only Primary Key",
      "Unique",
      "Foreign Key"
    ],
    "q_vi": "Ràng buộc nào đảm bảo cột CUSTOMER_NAME của bảng CUSTOMERS luôn luôn chứa một giá trị (không được để trống)?",
    "o_vi": [
      "NOT NULL hoặc Primary Key",
      "Chỉ Primary Key",
      "Unique",
      "Foreign Key"
    ],
    "c": 0,
    "ex_en": "Both NOT NULL and PRIMARY KEY constraints prevent NULL values from being stored in a table column.",
    "ex_vi": "Cả ràng buộc NOT NULL và PRIMARY KEY đều bắt buộc cột phải có giá trị khác NULL."
  },
  {
    "id": 68,
    "module": 11,
    "q_en": "Which view should a user query to display the columns associated with the constraints on a table owned by the user?",
    "o_en": [
      "USER_CONS_COLUMNS",
      "USER_CONSTRAINTS",
      "USER_OBJECTS",
      "ALL_CONSTRAINTS"
    ],
    "q_vi": "Chế độ xem (Data Dictionary View) nào dùng để tra cứu các cột gắn liền với các ràng buộc thuộc sở hữu của người dùng?",
    "o_vi": [
      "USER_CONS_COLUMNS",
      "USER_CONSTRAINTS",
      "USER_OBJECTS",
      "ALL_CONSTRAINTS"
    ],
    "c": 0,
    "ex_en": "The USER_CONS_COLUMNS data dictionary view displays the mapping between column names and constraint names owned by the current user.",
    "ex_vi": "USER_CONS_COLUMNS chứa thông tin chi tiết tên cột gắn với từng tên ràng buộc."
  },
  {
    "id": 69,
    "module": 4,
    "q_en": "You need to modify the STUDENTS table to add a primary key on the STUDENT_ID column. The table is currently empty. Which statement accomplishes this task?",
    "o_en": [
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD PRIMARY KEY student_id;",
      "ALTER TABLE students ADD CONSTRAINT PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY student_id;"
    ],
    "q_vi": "Thêm khóa chính vào cột STUDENT_ID của bảng STUDENTS rỗng bằng câu lệnh nào?",
    "o_vi": [
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD PRIMARY KEY student_id;",
      "ALTER TABLE students ADD CONSTRAINT PRIMARY KEY (student_id);",
      "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY student_id;"
    ],
    "c": 0,
    "ex_en": "Adding a named PRIMARY KEY constraint uses ALTER TABLE <table_name> ADD CONSTRAINT <constraint_name> PRIMARY KEY (<column_name>);.",
    "ex_vi": "Cú pháp chuẩn khai báo đầy đủ tên ràng buộc: ALTER TABLE ADD CONSTRAINT PRIMARY KEY ();."
  },
  {
    "id": 70,
    "module": 4,
    "q_en": "Which statement about the CASCADE CONSTRAINTS clause is not true?",
    "o_en": [
      "The CASCADE CONSTRAINTS can be used while creating the constraint to enable automatic dropping of foreign key constraint when a primary key is dropped.",
      "The CASCADE CONSTRAINTS clause is used along with the DROP COLUMN clause.",
      "The CASCADE CONSTRAINTS clause drops all referential integrity constraints that refer to the primary and unique keys defined on the dropped columns.",
      "The CASCADE CONSTRAINTS clause also drops all multicolumn constraints defined on the dropped columns"
    ],
    "q_vi": "Phát biểu nào sau đây về mệnh đề CASCADE CONSTRAINTS là KHÔNG đúng?",
    "o_vi": [
      "CASCADE CONSTRAINTS có thể dùng khi tạo ràng buộc để tự động xóa khóa ngoại khi khóa chính bị xóa",
      "Được sử dụng cùng với mệnh đề DROP COLUMN",
      "Xóa tất cả các ràng buộc toàn vẹn tham chiếu đến các khóa chính/unique trên các cột bị xóa",
      "Xóa cả các ràng buộc đa cột liên quan trên các cột bị xóa"
    ],
    "c": 0,
    "ex_en": "The CASCADE CONSTRAINTS clause is specified during DROP TABLE or DROP/DISABLE CONSTRAINT operations, not during constraint creation.",
    "ex_vi": "CASCADE CONSTRAINTS được dùng kèm với các thao tác xóa (DROP COLUMN, DROP TABLE, DROP CONSTRAINT), không dùng lúc tạo ràng buộc."
  },
  {
    "id": 71,
    "module": 11,
    "q_en": "Which data dictionary view can be used to view the details of columns involved in constraints?",
    "o_en": [
      "USER_CONS_COLUMNS",
      "USER_COLS_CONSTRAINTS",
      "USER_CONSTRAINTS",
      "USER_OBJECTS"
    ],
    "q_vi": "View từ điển dữ liệu nào hiển thị chi tiết các cột tham gia vào các ràng buộc?",
    "o_vi": [
      "USER_CONS_COLUMNS",
      "USER_COLS_CONSTRAINTS",
      "USER_CONSTRAINTS",
      "USER_OBJECTS"
    ],
    "c": 0,
    "ex_en": "USER_CONS_COLUMNS lists all columns involved in constraints owned by the current schema user.",
    "ex_vi": "USER_CONS_COLUMNS hiển thị mối liên kết giữa tên cột và tên ràng buộc."
  },
  {
    "id": 72,
    "module": 4,
    "q_en": "Which SQL statement defines the FOREIGN KEY constraint on the DEPTNO column of the EMP table?",
    "o_en": [
      "CREATE TABLE EMP(empno NUMBER(4),ename VARCNAR2(35),deptno NUMBER(7,2) CONSTRAINT emp_deptno_fk REFERENCES dept (deptno));",
      "CREATE TABLE EMP(empno NUMBER(4),ename VARCNAR2(35),deptno NUMBER(7,2) NOT NULL CONSTRAINT emp_deptno_fk FOREIGN KEY deptno REFERENCES dept deptno);",
      "CREATE TABLE EMP(empno NUMBER(4)ename VARCHAR2(35),deptno NUMBER(7,2) NOT NULL, CONSTRAINT emp_deptno_fk REFERENCES dept (deptno) FOREIGN KEY (deptno));",
      "CREATE TABLE EMP (empno NUMBER(4),ename VARCNAR2(35),deptno NUMBER(7,2) FOREIGN KEY CONSTRAINT emp deptno fk REFERENCES dept (deptno));"
    ],
    "q_vi": "Câu lệnh SQL nào định nghĩa đúng ràng buộc FOREIGN KEY cho cột DEPTNO của bảng EMP tham chiếu đến bảng DEPT?",
    "o_vi": [
      "CREATE TABLE EMP(empno NUMBER(4), ename VARCHAR2(35), deptno NUMBER(7,2) CONSTRAINT emp_deptno_fk REFERENCES dept (deptno));",
      "CREATE TABLE EMP(... deptno NUMBER(7,2) NOT NULL CONSTRAINT emp_deptno_fk FOREIGN KEY deptno REFERENCES dept deptno);",
      "CREATE TABLE EMP(... CONSTRAINT emp_deptno_fk REFERENCES dept (deptno) FOREIGN KEY (deptno));",
      "CREATE TABLE EMP(... FOREIGN KEY CONSTRAINT emp deptno fk REFERENCES dept (deptno));"
    ],
    "c": 0,
    "ex_en": "Inline foreign key creation syntax is: column_name datatype CONSTRAINT constraint_name REFERENCES parent_table(parent_column).",
    "ex_vi": "Khai báo khóa ngoại ở cấp độ cột dùng từ khóa REFERENCES ()."
  },
  {
    "id": 73,
    "module": 4,
    "q_en": "Which statement should be used to alter the constraints (i.e. either to enable, disable or drop a constraint)?",
    "o_en": [
      "ALTER TABLE",
      "ALTER CONSTRAINT",
      "DROP CONSTRAINT",
      "ALTER OBJECT"
    ],
    "q_vi": "Câu lệnh nào dùng để thay đổi ràng buộc (bật, tắt hoặc xóa ràng buộc)?",
    "o_vi": [
      "ALTER TABLE",
      "ALTER CONSTRAINT",
      "DROP CONSTRAINT",
      "ALTER OBJECT"
    ],
    "c": 0,
    "ex_en": "Modifying constraint states (ENABLE, DISABLE, DROP) requires the ALTER TABLE statement.",
    "ex_vi": "Mọi thao tác quản lý trạng thái ràng buộc (ENABLE, DISABLE, DROP CONSTRAINT) đều thông qua lệnh ALTER TABLE."
  },
  {
    "id": 74,
    "module": 11,
    "q_en": "Which statement is not correct about the use of constraints?",
    "o_en": [
      "Constraints make complex queries easy",
      "Constraints enforce rules at the view level.",
      "Constraints enforce rules at the table level.",
      "Constraints prevent the deletion of a table if there are dependencies."
    ],
    "q_vi": "Phát biểu nào KHÔNG đúng về việc sử dụng các ràng buộc (Constraints)?",
    "o_vi": [
      "Ràng buộc giúp các câu truy vấn phức tạp trở nên dễ dàng hơn",
      "Ràng buộc thực thi các quy tắc dữ liệu ở cấp độ view",
      "Ràng buộc thực thi các quy tắc dữ liệu ở cấp độ bảng",
      "Ràng buộc ngăn chặn việc xóa bảng nếu đang có đối tượng phụ thuộc"
    ],
    "c": 0,
    "ex_en": "Constraints enforce business rules and data integrity at the database level; they do not simplify complex SQL query syntax.",
    "ex_vi": "Ràng buộc nhằm đảm bảo tính toàn vẹn dữ liệu, không có chức năng làm đơn giản hóa cú pháp truy vấn SQL."
  },
  {
    "id": 75,
    "module": 4,
    "q_en": "Which statement about NOT NULL constraints is true?",
    "o_en": [
      "NOT NULL constraints can only be defined at the column level.",
      "You CANNOT add a NOT NULL constraint to an existing column using the ALTER TABLE statement",
      "You can modify the structure of a NOT NULL constraint using the ALTER TABLE statement.",
      "A NOT NULL constraint is stored in the data dictionary as a UNIQUE constraint."
    ],
    "q_vi": "Phát biểu nào sau đây về ràng buộc NOT NULL là ĐÚNG?",
    "o_vi": [
      "Ràng buộc NOT NULL chỉ có thể định nghĩa ở cấp độ cột (Column level)",
      "KHÔNG thể thêm ràng buộc NOT NULL vào cột đã tồn tại bằng lệnh ALTER TABLE",
      "Có thể sửa cấu trúc của ràng buộc NOT NULL bằng ALTER TABLE",
      "Ràng buộc NOT NULL được lưu trong từ điển dữ liệu dưới dạng UNIQUE"
    ],
    "c": 0,
    "ex_en": "The NOT NULL constraint can only be defined at the column level during table creation or via ALTER TABLE MODIFY.",
    "ex_vi": "Khác với các ràng buộc khác có thể viết ở cấp độ bảng (Table level), NOT NULL bắt buộc phải khai báo trực tiếp tại cấp độ cột."
  },
  {
    "id": 76,
    "module": 9,
    "q_en": "The PO_DETAIL table contains these columns: PO_NUM NUMBER NOT NULL (Primary Key), PO_LINE_ID NUMBER NOT NULL (Primary Key), PRODUCT_ID NUMBER (Foreign Key), QUANTITY NUMBER, UNIT_PRICE NUMBER(5,2). Evaluate this statement: ALTER TABLE po_detail ENABLE CONSTRAINT po_num_pk; For which task would you issue this statement?",
    "o_en": [
      "to activate the previously disabled constraint on the PO_NUM column while creating a PRIMARY KEY index",
      "to drop and recreate the PRIMARY KEY constraint on the PO_NUM column",
      "to create a new PRIMARY KEY constraint on the PO_NUM column",
      "to enable any previously disabled FOREIGN KEY constraints that are dependent on thePO_NUM column"
    ],
    "q_vi": "Xét câu lệnh: ALTER TABLE po_detail ENABLE CONSTRAINT po_num_pk;. Mục đích của câu lệnh là gì?",
    "o_vi": [
      "Tối ưu hóa/kích hoạt lại ràng buộc khóa chính đã bị vô hiệu hóa trước đó trên cột PO_NUM",
      "Xóa và tạo lại ràng buộc PRIMARY KEY",
      "Tạo một ràng buộc PRIMARY KEY hoàn toàn mới",
      "Bật các ràng buộc FOREIGN KEY phụ thuộc"
    ],
    "c": 0,
    "ex_en": "Enabling a disabled constraint activates validation for existing and new rows and re-creates/re-activates the underlying index.",
    "ex_vi": "ENABLE CONSTRAINT chuyển trạng thái ràng buộc từ DISABLED sang ENABLED để bắt đầu kiểm tra tính toàn vẹn."
  },
  {
    "id": 77,
    "module": 4,
    "q_en": "Which statement about constraints is true?",
    "o_en": [
      "Constraints prevent a table with dependencies from being deleted.",
      "Constraints only enforce rules at the table level.",
      "You must provide a name for each constraint at the time of its creation.",
      "Constraint names are NOT required to follow the standard object-naming rules."
    ],
    "q_vi": "Phát biểu nào sau đây về các ràng buộc là ĐÚNG?",
    "o_vi": [
      "Ràng buộc ngăn chặn việc xóa một bảng nếu bảng đó đang có các đối tượng phụ thuộc",
      "Ràng buộc chỉ thực thi các quy tắc ở cấp độ bảng",
      "Bạn bắt buộc phải đặt tên cho mọi ràng buộc lúc tạo",
      "Tên ràng buộc không cần tuân theo quy tắc đặt tên đối tượng"
    ],
    "c": 0,
    "ex_en": "A parent table referenced by a Foreign Key in a child table cannot be dropped unless CASCADE CONSTRAINTS is specified in the DROP TABLE statement.",
    "ex_vi": "Tránh việc phá vỡ toàn vẹn tham chiếu, CSDL ngăn xóa bảng mẹ khi các bảng con đang tham chiếu khóa ngoại tới nó."
  },
  {
    "id": 78,
    "module": 4,
    "q_en": "Which syntax turns an existing constraint on?",
    "o_en": [
      "ALTER TABLE table_name ENABLE CONSTRAINT constraint_name;",
      "ALTER TABLE table_name ENABLE constraint_name;",
      "ALTER TABLE table_name STATUS = ENABLE CONSTRAINT constraint_name;",
      "ALTER TABLE table_name STATUS ENABLE CONSTRAINT constraint_name;"
    ],
    "q_vi": "Cú pháp nào dùng để BẬT (Enable) một ràng buộc đang tồn tại?",
    "o_vi": [
      "ALTER TABLE table_name ENABLE CONSTRAINT constraint_name;",
      "ALTER TABLE table_name ENABLE constraint_name;",
      "ALTER TABLE table_name STATUS = ENABLE CONSTRAINT constraint_name;",
      "ALTER TABLE table_name STATUS ENABLE CONSTRAINT constraint_name;"
    ],
    "c": 0,
    "ex_en": "To turn on an existing disabled constraint, use ALTER TABLE <table_name> ENABLE CONSTRAINT <constraint_name>;.",
    "ex_vi": "Cú pháp chuẩn: ALTER TABLE ENABLE CONSTRAINT ;."
  },
  {
    "id": 79,
    "module": 11,
    "q_en": "Which statement about creating constraints is true?",
    "o_en": [
      "Constraints can be created after the table is created.",
      "Constraint names must start with SYS_C.",
      "All constraints must be defines at the column level.",
      "Information about constraints is found in the VIEW_CONSTRAINTS dictionary view."
    ],
    "q_vi": "Phát biểu nào về việc tạo ràng buộc là ĐÚNG?",
    "o_vi": [
      "Ràng buộc có thể được tạo sau khi bảng đã được tạo thành công",
      "Tên ràng buộc bắt buộc phải bắt đầu bằng SYS_C",
      "Tất cả các ràng buộc phải định nghĩa ở cấp độ cột",
      "Thông tin ràng buộc tìm thấy trong view VIEW_CONSTRAINTS"
    ],
    "c": 0,
    "ex_en": "Constraints can be created during initial table creation (CREATE TABLE) or added later using ALTER TABLE.",
    "ex_vi": "Có thể bổ sung ràng buộc bất kỳ lúc nào bằng lệnh ALTER TABLE ADD CONSTRAINT...."
  },
  {
    "id": 80,
    "module": 4,
    "q_en": "Which constraint can be defined only at the column level?",
    "o_en": [
      "NOT NULL",
      "UNIQUE",
      "CHECK",
      "PRIMARY KEY"
    ],
    "q_vi": "Ràng buộc nào CHỈ có thể định nghĩa được ở cấp độ cột?",
    "o_vi": [
      "NOT NULL",
      "UNIQUE",
      "CHECK",
      "PRIMARY KEY"
    ],
    "c": 0,
    "ex_en": "NOT NULL is the only constraint that must be defined strictly at the column level.",
    "ex_vi": "NOT NULL chỉ áp dụng cho từng cột đơn lẻ tại định nghĩa cột."
  },
  {
    "id": 81,
    "module": 2,
    "q_en": "A data manipulation language statement _____.",
    "o_en": [
      "Modifies the data but not the structure of a table",
      "Completes a transaction on a table.",
      "Modifies the structure and data in a table",
      "Modifies the structure but not the data of a table"
    ],
    "q_vi": "Một câu lệnh Ngôn ngữ Thao tác Dữ liệu (DML) thực hiện chức năng nào?",
    "o_vi": [
      "Sửa đổi dữ liệu trong bảng chứ KHÔNG sửa đổi cấu trúc của bảng",
      "Hoàn tất một giao dịch trên bảng",
      "Sửa đổi cả cấu trúc lẫn dữ liệu trong bảng",
      "Sửa đổi cấu trúc nhưng không sửa dữ liệu"
    ],
    "c": 0,
    "ex_en": "Data Manipulation Language (DML) statements (INSERT, UPDATE, DELETE, MERGE) modify data rows within a table without changing the database schema structure.",
    "ex_vi": "DML (INSERT, UPDATE, DELETE, MERGE) chỉ tác động lên nội dung dữ liệu bên trong bảng."
  },
  {
    "id": 82,
    "module": 5,
    "q_en": "Which statement regarding DML statement functionality is true?",
    "o_en": [
      "UPDATE can update multiple columns in one table.",
      "DELETE can be used to delete rows or columns from a table.",
      "MERGE will delete rows that do NOT exist in either table.",
      "UPDATE will add rows to a table if an INTO clause is specified."
    ],
    "q_vi": "Phát biểu nào về chức năng của câu lệnh DML là ĐÚNG?",
    "o_vi": [
      "Câu lệnh UPDATE có thể cập nhật nhiều cột trong cùng một bảng",
      "Lệnh DELETE có thể dùng để xóa các dòng hoặc các cột",
      "Lệnh MERGE sẽ xóa các dòng không tồn tại ở cả 2 bảng",
      "Lệnh UPDATE sẽ thêm dòng mới nếu có mệnh đề INTO"
    ],
    "c": 0,
    "ex_en": "An UPDATE statement can modify multiple column values in a single row or set of rows using comma-separated assignments in the SET clause.",
    "ex_vi": "UPDATE cho phép cập nhật đồng thời nhiều cột phân cách bằng dấu phẩy trong mệnh đề SET."
  },
  {
    "id": 83,
    "module": 4,
    "q_en": "You own a table called EMPLOYEES. What happens when you execute this DELETE statement? DELETE employees;",
    "o_en": [
      "The data in the EMPLOYEES table is deleted but not the structure.",
      "You get an error because of a primary key violation",
      "The data and structure of the EMPLOYEES table are deleted.",
      "You get an error because the statement is not syntactically correct."
    ],
    "q_vi": "Bạn sở hữu bảng EMPLOYEES. Điều gì xảy ra khi chạy lệnh: DELETE employees;?",
    "o_vi": [
      "Dữ liệu trong bảng EMPLOYEES bị xóa hết nhưng cấu trúc bảng vẫn còn nguyên",
      "Nhận lỗi vi phạm khóa chính",
      "Cả dữ liệu và cấu trúc bảng đều bị xóa",
      "Nhận lỗi cú pháp"
    ],
    "c": 0,
    "ex_en": "Executing DELETE employees; removes all data rows from the EMPLOYEES table while retaining the table structure and column definitions.",
    "ex_vi": "Lệnh DELETE không có mệnh đề WHERE sẽ xóa toàn bộ dòng dữ liệu, giữ nguyên cấu trúc bảng."
  },
  {
    "id": 84,
    "module": 4,
    "q_en": "Examine the structure of the EMPLOYEES table: EMPLOYEE_ID NUMBER (Primary Key), FIRST_NAME VARCHAR2(25), LAST_NAME VARCHAR2(25). Which statement fails to insert a row into the table?",
    "o_en": [
      "INSERT INTO employees( first_name, last_name) VALUES( 'John', 'Smith');",
      "INSERT INTO employees VALUES ( '1000', 'John', NULL);",
      "INSERT INTO employees (employee_id) VALUES (1000);",
      "INSERT INTO employees (employee_id, first_name, last_name) VALUES ( 1000, 'John', ' ');"
    ],
    "q_vi": "Cho bảng EMPLOYEES (EMPLOYEE_ID là Primary Key). Câu lệnh INSERT nào sẽ THẤT BẠI?",
    "o_vi": [
      "INSERT INTO employees( first_name, last_name) VALUES( 'John', 'Smith');",
      "INSERT INTO employees VALUES ( '1000', 'John', NULL);",
      "INSERT INTO employees (employee_id) VALUES (1000);",
      "INSERT INTO employees (employee_id, first_name, last_name) VALUES ( 1000, 'John', ' ');"
    ],
    "c": 0,
    "ex_en": "INSERT INTO employees(first_name, last_name) VALUES('John', 'Smith'); fails if EMPLOYEE_ID is a Primary Key (NOT NULL) column that is omitted from the column list.",
    "ex_vi": "Câu lệnh A không truyền giá trị cho cột khóa chính EMPLOYEE_ID (bắt buộc NOT NULL)."
  },
  {
    "id": 85,
    "module": 5,
    "q_en": "Which is not true?",
    "o_en": [
      "A MERGE statement replaces the complete data of one table with that of another.",
      "A MERGE statement is used to merge the data of one table with data from another.",
      "A MERGE statement can be used to insert new rows into a table.",
      "A MERGE statement can be used to update existing rows in a table."
    ],
    "q_vi": "Phát biểu nào sau đây KHÔNG đúng?",
    "o_vi": [
      "Câu lệnh MERGE thay thế toàn bộ dữ liệu của một bảng bằng dữ liệu của bảng khác",
      "Câu lệnh MERGE dùng để hợp nhất dữ liệu bảng này với bảng khác",
      "Lệnh MERGE có thể chèn các dòng mới",
      "Lệnh MERGE có thể cập nhật các dòng hiện có"
    ],
    "c": 0,
    "ex_en": "A MERGE statement conditionally inserts or updates records (upsert) based on matching join criteria; it does not completely overwrite or replace an entire table.",
    "ex_vi": "MERGE thực hiện cập nhật hoặc chèn có điều kiện (upsert), không phải ghi đè xóa sạch bảng."
  },
  {
    "id": 86,
    "module": 5,
    "q_en": "With SQL, how can you insert \"Olsen\" as the \"LastName\" in the \"Persons\" table?",
    "o_en": [
      "INSERT INTO Persons (LastName) VALUES ('Olsen')",
      "INSERT INTO Persons ('Olsen') as LastName",
      "INSERT LastName('Olsen') INTO Persons",
      "None of the above"
    ],
    "q_vi": "Trong SQL, làm thế nào để chèn giá trị \"Olsen\" vào cột \"LastName\" trong bảng \"Persons\"?",
    "o_vi": [
      "INSERT INTO Persons (LastName) VALUES ('Olsen')",
      "INSERT INTO Persons ('Olsen') as LastName",
      "INSERT LastName('Olsen') INTO Persons",
      "Không phương án nào đúng"
    ],
    "c": 0,
    "ex_en": "To insert a single value into a specific column, use INSERT INTO Persons (LastName) VALUES ('Olsen').",
    "ex_vi": "Cú pháp chuẩn: INSERT INTO () VALUES ();."
  },
  {
    "id": 87,
    "module": 5,
    "q_en": "How can you change \"Hansen\" into \"Nilsen\" in the \"LastName\" column in the Persons table?",
    "o_en": [
      "UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
      "MODIFY Persons SET LastName='Hansen' INTO LastName='Nilsen",
      "UPDATE Persons SET LastName='Hansen' INTO LastName='Nilsen'",
      "MODIFY Persons SET LastName='Nilsen' WHERE LastName='Hansen'"
    ],
    "q_vi": "Làm thế nào để đổi giá trị từ \"Hansen\" thành \"Nilsen\" ở cột \"LastName\" trong bảng Persons?",
    "o_vi": [
      "UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
      "MODIFY Persons SET LastName='Hansen' INTO LastName='Nilsen'",
      "UPDATE Persons SET LastName='Hansen' INTO LastName='Nilsen'",
      "MODIFY Persons SET LastName='Nilsen' WHERE LastName='Hansen'"
    ],
    "c": 0,
    "ex_en": "To update column values matching a condition, use UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'.",
    "ex_vi": "Cú pháp chuẩn: UPDATE SET = WHERE ;."
  },
  {
    "id": 88,
    "module": 5,
    "q_en": "With SQL, how can you delete the records where the \"FirstName\" is \"Peter\" in the Persons Table?",
    "o_en": [
      "DELETE FROM Persons WHERE FirstName = 'Peter'",
      "DELETE * FROM Persons WHERE FirstName = 'Peter'",
      "DELETE FirstName FROM Persons WHERE FirstName = 'Peter'",
      "DELETE 'Peter' FROM Persons"
    ],
    "q_vi": "Làm thế nào để xóa các bản ghi có \"FirstName\" là \"Peter\" trong bảng Persons?",
    "o_vi": [
      "DELETE FROM Persons WHERE FirstName = 'Peter'",
      "DELETE * FROM Persons WHERE FirstName = 'Peter'",
      "DELETE FirstName FROM Persons WHERE FirstName = 'Peter'",
      "DELETE 'Peter' FROM Persons"
    ],
    "c": 0,
    "ex_en": "To delete specific rows matching a condition, use DELETE FROM Persons WHERE FirstName = 'Peter'.",
    "ex_vi": "Cú pháp xóa dòng: DELETE FROM WHERE ;."
  },
  {
    "id": 89,
    "module": 5,
    "q_en": "Which of the following Insert statement will successfully insert only records of Sales Representatives from the employees table into a new table called Sales_rep?",
    "o_en": [
      "INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT employee_id, last_name, salary, commission_pct FROM employees WHERE job_id = 'SA_REP';",
      "INSERT INTO sales_reps(id, name, salary, commission_pct) VALUES SELECT employee_id, last_name, salary, commission_pct FROM employees WHERE job_id = 'SA_REP';",
      "INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT employee_id, last_name, salary, commission_pct FROM employees;",
      "INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT last_name, employee_id, salary, commission_pct FROM employees WHERE job_id = 'SA_REP';"
    ],
    "q_vi": "Câu lệnh INSERT nào chèn thành công các bản ghi nhân viên có job_id = 'SA_REP' từ bảng employees sang bảng sales_reps?",
    "o_vi": [
      "INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT employee_id, last_name, salary, commission_pct FROM employees WHERE job_id = 'SA_REP';",
      "INSERT INTO sales_reps(...) VALUES SELECT ...;",
      "INSERT INTO sales_reps(...) SELECT ... FROM employees;",
      "INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT last_name, employee_id...;"
    ],
    "c": 0,
    "ex_en": "To copy filtered rows from one table to another, use INSERT INTO sales_reps(id, name, salary, commission_pct) SELECT employee_id, last_name, salary, commission_pct FROM employees WHERE job_id = 'SA_REP';.",
    "ex_vi": "Khi dùng INSERT INTO ... SELECT, không viết từ khóa VALUES và danh sách cột câu SELECT phải tương ứng kiểu dữ liệu với bảng đích."
  },
  {
    "id": 90,
    "module": 10,
    "q_en": "Which of the following is not a valid usage of a Merge statement?",
    "o_en": [
      "Insert as well as update each row in a table.",
      "Conditionally update or insert data into a database table",
      "Perform an UPDATE if the row exists, and an INSERT if it is a new row",
      "Increase performance and ease of use"
    ],
    "q_vi": "Điều nào sau đây KHÔNG phải là cách sử dụng hợp lệ của câu lệnh MERGE?",
    "o_vi": [
      "Chèn cũng như cập nhật MỌI dòng trong bảng không điều kiện",
      "Cập nhật hoặc chèn dữ liệu có điều kiện vào bảng",
      "Thực hiện UPDATE nếu dòng tồn tại và INSERT nếu là dòng mới",
      "Tăng hiệu năng và tính dễ sử dụng"
    ],
    "c": 0,
    "ex_en": "MERGE performs conditional updates or inserts on target rows matching specific join conditions; it does not unconditionally update and insert every row.",
    "ex_vi": "MERGE hoạt động dựa trên điều kiện khớp (mệnh đề ON), không xử lý mù mọi dòng."
  },
  {
    "id": 91,
    "module": 5,
    "q_en": "What will be the output of following statement? UPDATE employees a SET job_id = (SELECT job_id FROM new_employees b WHERE a.employee_id = b.employee_id); Assume that Employee and New_employees tables have same structure.",
    "o_en": [
      "This statement will update job_id for all records of employees as: Match found in New_employees table use job_id from New_employees table no match found in New_employees table update job_id as NULL.",
      "This statement will return error",
      "This statement will update only those records of Employees table which have matching employee_id in the New_employees table.",
      "This statement will update job_id for all records of employees table but for records that do not have matching employee_id in the New_employees table the existing job_id will be retained."
    ],
    "q_vi": "Cho câu lệnh:\nUPDATE employees a SET job_id = (SELECT job_id FROM new_employees b WHERE a.employee_id = b.employee_id);\nKết quả sẽ thế nào?",
    "o_vi": [
      "Cập nhật job_id cho tất cả nhân viên: nếu khớp bản ghi ở New_employees thì lấy job_id mới, nếu không khớp thì cập nhật job_id thành NULL",
      "Báo lỗi",
      "Chỉ cập nhật các dòng có employee_id khớp",
      "Cập nhật dòng khớp, giữ nguyên job_id dòng không khớp"
    ],
    "c": 0,
    "ex_en": "A correlated subquery in an UPDATE SET clause that returns NULL for non-matching rows will update the target column to NULL for those non-matching rows.",
    "ex_vi": "Mệnh đề Subquery nếu không khớp sẽ trả về NULL, gán NULL cho job_id của các dòng không tìm thấy tương ứng."
  },
  {
    "id": 92,
    "module": 5,
    "q_en": "Which of the following is not a DML statement?",
    "o_en": [
      "COMMIT",
      "MERGE",
      "UPDATE",
      "DELETE"
    ],
    "q_vi": "Câu lệnh nào sau đây KHÔNG phải là một lệnh DML?",
    "o_vi": [
      "COMMIT",
      "MERGE",
      "UPDATE",
      "DELETE"
    ],
    "c": 0,
    "ex_en": "COMMIT is a Transaction Control Language (TCL) statement, not a Data Manipulation Language (DML) statement.",
    "ex_vi": "COMMIT thuộc nhóm lệnh Điều khiển giao dịch TCL (Transaction Control Language)."
  },
  {
    "id": 93,
    "module": 5,
    "q_en": "What will be the output of following statement? INSERT INTO departments (department_id, department_name, manager_id) VALUES (300, 'Engineering', DEFAULT);",
    "o_en": [
      "This will insert one record in Employees table with values (300, 'Engineering') for the (department_id, department_name) respectively.",
      "This will insert one record in Employees table with values (300, 'Engineering', DEFAULT) for the (department_id, department_name, manager_id) respectively",
      "This will insert one record in Employees table with values (300, 'Engineering') for the (department_id, department_name) respectively manager_id will be NULL as DEFAULT is not a valid value.",
      "This will return Error as DEFAULT is not allowed in the INSERT"
    ],
    "q_vi": "Kết quả của câu lệnh: INSERT INTO departments (department_id, department_name, manager_id) VALUES (300, 'Engineering', DEFAULT); là gì?",
    "o_vi": [
      "Chèn một bản ghi với các giá trị (300, 'Engineering') và manager_id nhận giá trị mặc định được định nghĩa của cột",
      "Chèn bản ghi với chữ 'DEFAULT'",
      "Chèn manager_id là NULL vì DEFAULT không hợp lệ",
      "Báo lỗi"
    ],
    "c": 0,
    "ex_en": "Specifying DEFAULT in an INSERT statement inserts the default column value defined in the table schema (or NULL if no default was declared).",
    "ex_vi": "Từ khóa DEFAULT trong mệnh đề VALUES chỉ định CSDL lấy giá trị mặc định được thiết lập của cột đó."
  },
  {
    "id": 94,
    "module": 10,
    "q_en": "You maintain two tables, CUSTOMER and PROSPECT, that have identical structures but different data. You want to synchronize these two tables by inserting records from the PROSPECT table into the CUSTOMER table, if they do not exist. If the customer already exists in the CUSTOMER table, you want to update customer data. Which DML statement should you use to perform this task?",
    "o_en": [
      "MERGE",
      "INSERT",
      "UPDATE",
      "You CANNOT perform this task with one DML operation."
    ],
    "q_vi": "Cần đồng bộ bảng CUSTOMER từ bảng PROSPECT: chèn nếu chưa có, cập nhật nếu đã có. Dùng câu lệnh DML nào?",
    "o_vi": [
      "MERGE",
      "INSERT",
      "UPDATE",
      "Không thể thực hiện trong 1 lệnh DML"
    ],
    "c": 0,
    "ex_en": "The MERGE statement is specifically designed to perform upsert operations (inserting non-existent records and updating existing ones) in a single DML operation.",
    "ex_vi": "MERGE là lệnh chuyên dụng để kết hợp hai thao tác INSERT và UPDATE trong một câu lệnh đơn."
  },
  {
    "id": 95,
    "module": 3,
    "q_en": "You added a PHONE-NUMBER column of NUMBER data type to an existing EMPLOYEES table. The EMPLOYEES table already contains records of 100 employees. Now, you want to enter the phone numbers of each of the 100 employees into the table. Some of the employees may not have a phone number available. Which data manipulation operation do you perform?",
    "o_en": [
      "PDATE",
      "MERGE",
      "INSERT",
      "ADD"
    ],
    "q_vi": "Bạn vừa thêm cột PHONE_NUMBER vào bảng EMPLOYEES có sẵn 100 bản ghi. Giờ cần nhập số điện thoại cho 100 nhân viên này. Thực hiện thao tác DML nào?",
    "o_vi": [
      "UPDATE",
      "MERGE",
      "INSERT",
      "ADD"
    ],
    "c": 0,
    "ex_en": "Updating existing rows with newly collected data values requires the UPDATE statement.",
    "ex_vi": "Các dòng nhân viên đã tồn tại, nên việc điền dữ liệu vào cột mới tạo phải sử dụng lệnh UPDATE."
  },
  {
    "id": 96,
    "module": 4,
    "q_en": "Evaluate this DELETE statement: DELETE employee_id, salary, job_id FROM employees WHERE dept_id = 90; Why does the DELETE statement fail when you execute it?",
    "o_en": [
      "You cannot specify column names in the DELETE clause of the DELETE statement.",
      "There is no row with dept_id 90 in the EMPLOYEES table.",
      "You cannot delete the JOB_ID column because it is a NOT NULL column.",
      "You cannot delete the EMPLOYEE_ID column because it is the primary key of the table."
    ],
    "q_vi": "Xét câu lệnh: DELETE employee_id, salary, job_id FROM employees WHERE dept_id = 90;. Tại sao lệnh bị lỗi?",
    "o_vi": [
      "Bạn không thể chỉ định tên các cột trong mệnh đề DELETE",
      "Không có phòng ban 90",
      "Không thể xóa cột JOB_ID vì là NOT NULL",
      "Không thể xóa EMPLOYEE_ID vì là Khóa chính"
    ],
    "c": 0,
    "ex_en": "You cannot list individual column names in a DELETE statement clause; DELETE operates on entire rows.",
    "ex_vi": "Lệnh DELETE dùng để xóa toàn bộ dòng bản ghi, cú pháp là DELETE FROM , không được đưa tên cột vào sau DELETE."
  },
  {
    "id": 97,
    "module": 4,
    "q_en": "Examine the structure of the EMPLOYEES table: EMPLOYEE_ID NUMBER (Primary Key), FIRST_NAME VARCHAR2(25), LAST_NAME VARCHAR2(25). Which statement inserts a row into the table?",
    "o_en": [
      "INSERT INTO employees VALUES ('1000','John',NULL);",
      "INSERT INTO employees VALUES ( NULL, 'John','Smith');",
      "INSERT INTO employees( first_name, last_name) VALUES('John','Smith');",
      "INSERT INTO employees(first_name,last_name, employee_id) VALUES ( 1000, 'John','Smith');"
    ],
    "q_vi": "Cho bảng EMPLOYEES (EMPLOYEE_ID là Primary Key). Câu lệnh nào chèn thành công bản ghi?",
    "o_vi": [
      "INSERT INTO employees VALUES ('1000','John',NULL);",
      "INSERT INTO employees VALUES ( NULL, 'John','Smith');",
      "INSERT INTO employees( first_name, last_name) VALUES('John','Smith');",
      "INSERT INTO employees(first_name,last_name, employee_id) VALUES ( 1000, 'John','Smith');"
    ],
    "c": 0,
    "ex_en": "INSERT INTO employees VALUES ('1000', 'John', NULL); provides values for all columns in sequence, satisfying primary key constraints.",
    "ex_vi": "Câu lệnh A truyền đủ các giá trị theo thứ tự cột, trong đó cột Khóa chính nhận giá trị '1000' hợp lệ."
  },
  {
    "id": 98,
    "module": 8,
    "q_en": "Examine the data from the CLASS and INSTRUCTOR tables. You want to delete the classes that do NOT have an instructor assigned. Which DELETE statement will accomplish the desired result?",
    "o_en": [
      "DELETE FROM class WHERE instructor_id IS NULL;",
      "DELETE class_id, class_name, hours_credit, instructor_id FROM class WHERE instructor_id IS NULL;",
      "DELETE FROM class WHERE instructor_id NOT IN(SELECT instructor_id FROM class);",
      "DELETE FROM instructor NATURAL JOIN class WHERE instructor_id IS NOT NULL;"
    ],
    "q_vi": "Muốn xóa các lớp học KHÔNG được phân công giảng viên (INSTRUCTOR_ID trống). Dùng lệnh nào?",
    "o_vi": [
      "DELETE FROM class WHERE instructor_id IS NULL;",
      "DELETE class_id, class_name... FROM class WHERE...;",
      "DELETE FROM class WHERE instructor_id NOT IN(SELECT instructor_id FROM class);",
      "DELETE FROM instructor NATURAL JOIN class...;"
    ],
    "c": 0,
    "ex_en": "To remove rows where a foreign key or attribute is missing, use DELETE FROM class WHERE instructor_id IS NULL;.",
    "ex_vi": "Kiểm tra giá trị rỗng trong SQL bắt buộc dùng toán tử IS NULL."
  },
  {
    "id": 99,
    "module": 4,
    "q_en": "The PRODUCT table contains these columns: PRODUCT_ID NUMBER, PRODUCT_NAME VARCHAR2(25), SUPPLIER_ID NUMBER, LIST_PRICE NUMBER(7,2), COST NUMBER(7,2). You need to increase the list price and cost of all products supplied by Global Imports, Inc. by 5.5 percent. The SUPPLIER_ID for Global Imports, Inc. is 105. Which statement should you use?",
    "o_en": [
      "UPDATE product SET list_price = list_price * 1.055, cost = cost * 1.055 WHERE supplier_id = 105;",
      "UPDATE product SET list_price = list_price * 1.055 SET cost = cost * 1.055 WHERE supplier_id = 105;",
      "UPDATE product",
      "UPDATE product SET list_price = list_price + (list_price * .055), cost = cost + (cost * .055) WHERE supplier_id LIKE 'Global Imports, Inc.' OR supplier_id = 105;"
    ],
    "q_vi": "Tăng list_price và cost thêm 5.5% cho tất cả sản phẩm của nhà cung cấp có supplier_id = 105. Dùng lệnh nào?",
    "o_vi": [
      "UPDATE product SET list_price = list_price * 1.055, cost = cost * 1.055 WHERE supplier_id = 105;",
      "UPDATE product SET list_price = list_price * 1.055 SET cost = cost * 1.055 WHERE supplier_id = 105;",
      "UPDATE product",
      "UPDATE product SET list_price = list_price + ..."
    ],
    "c": 0,
    "ex_en": "To update multiple columns simultaneously, separate assignments with commas in the SET clause: UPDATE product SET list_price = list_price * 1.055, cost = cost * 1.055 WHERE supplier_id = 105;.",
    "ex_vi": "Cập nhật nhiều cột dùng cú pháp SET col1 = val1, col2 = val2."
  },
  {
    "id": 100,
    "module": 8,
    "q_en": "Examine the MERGE statement: MERGE INTO event e USING (SELECT * FROM new_event WHERE event_type_id = 4) n ON (e.event_id = n.event_id) WHEN MATCHED THEN UPDATE SET e.event_type_id = n.event_type_id, e.start_dt = n.start_dt WHEN NOT MATCHED THEN INSERT (event_id, event_name, event_type_id) VALUES (n.event_id, n.event_name, n.event_type_id); This MERGE statement generates an error. Which statement describes the cause of the error?",
    "o_en": [
      "The UPDATE portion of the statement is invalid.",
      "A subquery CANNOT be used in the USING clause of a MERGE statement.",
      "Table aliases CANNOT be used in a MERGE statement.",
      "The ON clause of the statement is invalid."
    ],
    "q_vi": "Bạn chạy câu lệnh MERGE bên dưới và bị báo lỗi. Nguyên nhân do đâu?\nMERGE INTO event e USING (...) n ON (e.event_id = n.event_id) WHEN MATCHED THEN UPDATE SET e.event_type_id = n.event_type_id, e.start_dt = n.start_dt ...",
    "o_vi": [
      "Phần UPDATE của câu lệnh không hợp lệ",
      "Không thể dùng subquery trong mệnh đề USING",
      "Không thể dùng alias bảng trong MERGE",
      "Mệnh đề ON không hợp lệ"
    ],
    "c": 0,
    "ex_en": "In a MERGE statement, updating columns that are used in the ON join condition clause is illegal and causes an error.",
    "ex_vi": "Trong câu lệnh MERGE của Oracle, bạn không được phép cập nhật các cột đang được sử dụng trong điều kiện nối của mệnh đề ON."
  },
  {
    "id": 101,
    "module": 6,
    "q_en": "You want to use a function in your column clause of a SQL statement. The NVL function accomplishes which of the following tasks?",
    "o_en": [
      "Enables you to specify alternated out for NULL column values.",
      "Assists in the distribution of output across multiple columns.",
      "Enables you to specify alternate output for non-NULL column values.",
      "Nullifies the value of the column output."
    ],
    "q_vi": "Hàm NVL trong SQL thực hiện nhiệm vụ nào sau đây?",
    "o_vi": [
      "Cho phép bạn chỉ định giá trị thay thế cho các giá trị cột bị NULL",
      "Hỗ trợ phân phối kết quả trên nhiều cột",
      "Chỉ định giá trị thay thế cho các giá trị không bị NULL",
      "Biến giá trị của cột thành NULL"
    ],
    "c": 0,
    "ex_en": "The NVL(expr1, expr2) function replaces a NULL value in expr1 with the alternative value specified in expr2.",
    "ex_vi": "Cú pháp NVL(expr1, expr2) sẽ trả về expr2 nếu expr1 có giá trị là NULL."
  },
  {
    "id": 102,
    "module": 6,
    "q_en": "Which SELECT statement will show the result 'elloworld' from the string 'HelloWorld'?",
    "o_en": [
      "SELECT LOWER (TRIM ('H' FROM 'HelloWorld')) FROM dual;",
      "SELECT SUBSTR ('HelloWorld', 1) FROM dual;",
      "SELECT INITCAP (TRIM ('HelloWorld', 1, 1)) FROM dual;",
      "SELECT LOWER (SUBSTR ('HelloWorld', 1, 1) FROM dual;"
    ],
    "q_vi": "Câu lệnh SELECT nào trả về chuỗi 'elloworld' từ chuỗi gốc 'HelloWorld'?",
    "o_vi": [
      "SELECT LOWER (TRIM ('H' FROM 'HelloWorld')) FROM dual;",
      "SELECT SUBSTR ('HelloWorld', 1) FROM dual;",
      "SELECT INITCAP (TRIM ('HelloWorld', 1, 1)) FROM dual;",
      "SELECT LOWER (SUBSTR ('HelloWorld', 1, 1) FROM dual;"
    ],
    "c": 0,
    "ex_en": "TRIM('H' FROM 'HelloWorld') produces 'elloWorld'. Applying LOWER() turns it into 'elloworld'.",
    "ex_vi": "TRIM('H' FROM 'HelloWorld') cắt chữ 'H' đầu thành 'elloWorld', sau đó LOWER() chuyển toàn bộ thành chữ thường 'elloworld'."
  },
  {
    "id": 103,
    "module": 6,
    "q_en": "Which script displays '01-JAN-02' when the ENROLL_DATE value is '01-JUL-01'?",
    "o_en": [
      "SELECT ROUND (enroll_date, 'YEAR') FROM student;",
      "SELECT ROUND (enroll_date, 'DAY') FROM student;",
      "SELECT ROUND (enroll_date, 'MONTH') FROM student;",
      "SELECT ROUND (TO_CHAR(enroll_date, 'YYYY')) FROM student;"
    ],
    "q_vi": "Đoạn mã nào hiển thị '01-JAN-02' khi giá trị ENROLL_DATE là '01-JUL-01'?",
    "o_vi": [
      "SELECT ROUND (enroll_date, 'YEAR') FROM student;",
      "SELECT ROUND (enroll_date, 'DAY') FROM student;",
      "SELECT ROUND (enroll_date, 'MONTH') FROM student;",
      "SELECT ROUND (TO_CHAR(enroll_date, 'YYYY')) FROM student;"
    ],
    "c": 0,
    "ex_en": "ROUND(date, 'YEAR') rounds a date to the nearest first day of the year (Jan 1). '01-JUL-01' rounds up to '01-JAN-02'.",
    "ex_vi": "Hàm ROUND(date, 'YEAR') làm tròn ngày lên năm tiếp theo nếu ngày tháng bắt đầu từ ngày 1 tháng 7 trở đi."
  },
  {
    "id": 104,
    "module": 6,
    "q_en": "Which function can be used in your query on department table to restrict the data displayed to only those department names containing 3 characters?",
    "o_en": [
      "LENGTH",
      "REPLACE",
      "SUBSTR",
      "RPAD"
    ],
    "q_vi": "Hàm nào dùng để giới hạn dữ liệu hiển thị chỉ lấy các tên phòng ban có độ dài đúng 3 ký tự?",
    "o_vi": [
      "LENGTH",
      "REPLACE",
      "SUBSTR",
      "RPAD"
    ],
    "c": 0,
    "ex_en": "The LENGTH function returns the character length of a string, which can be used in a WHERE clause like WHERE LENGTH(dept_name) = 3.",
    "ex_vi": "Hàm LENGTH(column) trả về độ dài số ký tự của chuỗi để so sánh WHERE LENGTH(dept_name) = 3."
  },
  {
    "id": 105,
    "module": 3,
    "q_en": "Which statement concerning SQL functions is true?",
    "o_en": [
      "Character functions can return character or number values.",
      "Conversion functions convert a column definition from one data type to another data type.",
      "Single-row functions can only be used in SELECT and WHERE clauses.",
      "All date functions return DATE data type values."
    ],
    "q_vi": "Phát biểu nào sau đây về các hàm SQL là ĐÚNG?",
    "o_vi": [
      "Các hàm ký tự có thể trả về giá trị kiểu ký tự hoặc kiểu số",
      "Các hàm chuyển đổi chuyển định nghĩa cột từ kiểu dữ liệu này sang kiểu khác",
      "Hàm đơn dòng chỉ dùng trong SELECT và WHERE",
      "Tất cả hàm ngày tháng đều trả về kiểu DATE"
    ],
    "c": 0,
    "ex_en": "Single-row character functions can accept character inputs and return either character strings (e.g., SUBSTR) or numbers (e.g., LENGTH, INSTR).",
    "ex_vi": "Hàm ký tự như LOWER() trả về chuỗi, nhưng hàm LENGTH() hoặc INSTR() trả về kiểu số."
  },
  {
    "id": 106,
    "module": 6,
    "q_en": "Evaluate the SQL statement: SELECT ROUND(45.953, -1), TRUNC(45.936, 2) FROM dual; Which values are displayed?",
    "o_en": [
      "50 and 45.93",
      "46 and 45",
      "46 and 45.93",
      "50 and 45.9"
    ],
    "q_vi": "Giá trị hiển thị của câu lệnh: SELECT ROUND(45.953, -1), TRUNC(45.936, 2) FROM dual; là gì?",
    "o_vi": [
      "50 và 45.93",
      "46 và 45",
      "46 và 45.93",
      "50 và 45.9"
    ],
    "c": 0,
    "ex_en": "ROUND(45.953, -1) rounds to the nearest ten (50). TRUNC(45.936, 2) truncates to 2 decimal places without rounding (45.93).",
    "ex_vi": "ROUND(45.953, -1) làm tròn đến hàng chục thành 50; TRUNC(45.936, 2) cắt bớt lấy 2 số thập phân thành 45.93."
  },
  {
    "id": 107,
    "module": 6,
    "q_en": "Which of the following is not a number function?",
    "o_en": [
      "TO_NUMBER.",
      "TRUNC",
      "SQRT",
      "ROUND"
    ],
    "q_vi": "Hàm nào sau đây KHÔNG phải là một hàm xử lý số (Number function)?",
    "o_vi": [
      "TO_NUMBER",
      "TRUNC",
      "SQRT",
      "ROUND"
    ],
    "c": 0,
    "ex_en": "TO_NUMBER is a data type conversion function that converts character strings to numbers, whereas ROUND, TRUNC, and SQRT are numeric functions.",
    "ex_vi": "TO_NUMBER thuộc nhóm Hàm chuyển đổi (Conversion Function), không phải hàm toán học xử lý số."
  },
  {
    "id": 108,
    "module": 12,
    "q_en": "You are using single row function in a SELECT statement which function can best be categorized as similar in function to an IF-THEN-ELSE statement?",
    "o_en": [
      "DECODE",
      "SQRT",
      "NEW_TIME",
      "ROWIDTOCHAR."
    ],
    "q_vi": "Hàm đơn dòng nào có cơ chế hoạt động tương tự như cấu trúc lựa chọn IF-THEN-ELSE?",
    "o_vi": [
      "DECODE",
      "SQRT",
      "NEW_TIME",
      "ROWIDTOCHAR"
    ],
    "c": 0,
    "ex_en": "The DECODE function evaluates expressions in a conditional IF-THEN-ELSE manner within Oracle SQL.",
    "ex_vi": "DECODE(col, val1, res1, val2, res2, default) so sánh đối chiếu giá trị tương tự như câu lệnh IF-THEN-ELSE."
  },
  {
    "id": 109,
    "module": 6,
    "q_en": "Which is not an attributes of single row functions?",
    "o_en": [
      "cannot be nested",
      "manipulate data items",
      "act on each row returned",
      "return one result per row"
    ],
    "q_vi": "Điều nào sau đây KHÔNG phải là đặc điểm của hàm đơn dòng (Single row function)?",
    "o_vi": [
      "Không thể lồng nhau (Cannot be nested)",
      "Thao tác trên các mục dữ liệu",
      "Tác động trên từng dòng dữ liệu trả về",
      "Trả về một kết quả cho mỗi dòng"
    ],
    "c": 0,
    "ex_en": "Single-row functions can be nested to any depth (e.g., LOWER(SUBSTR(col, 1, 3))). Thus, 'cannot be nested' is not a valid attribute.",
    "ex_vi": "Các hàm đơn dòng có thể lồng vào nhau theo nhiều cấp độ không hạn chế."
  },
  {
    "id": 110,
    "module": 7,
    "q_en": "Which SQL statement returns a numeric value?",
    "o_en": [
      "SELECT sysdate-hire_date FROM EMP;",
      "SELECT ADD_MONTHS(MAX(hire_Date), 6) FROM EMP;",
      "SELECT ROUND(hire_date) FROM EMP;",
      "SELECT TO_NUMBER(hire_date + 7) FROM EMP;"
    ],
    "q_vi": "Câu lệnh SQL nào sau đây trả về một giá trị kiểu SỐ (Numeric)?",
    "o_vi": [
      "SELECT sysdate - hire_date FROM EMP;",
      "SELECT ADD_MONTHS(MAX(hire_Date), 6) FROM EMP;",
      "SELECT ROUND(hire_date) FROM EMP;",
      "SELECT TO_NUMBER(hire_date + 7) FROM EMP;"
    ],
    "c": 0,
    "ex_en": "Subtracting two DATE values in Oracle (sysdate - hire_date) returns the numeric difference representing the number of days between the dates.",
    "ex_vi": "Phép trừ hai giá trị kiểu ngày tháng (DATE - DATE) trả về số ngày chênh lệch (kiểu số)."
  },
  {
    "id": 111,
    "module": 6,
    "q_en": "Which is not a type of Single Row functions available in SQL?",
    "o_en": [
      "calendar",
      "string",
      "character",
      "Numeric"
    ],
    "q_vi": "Loại hàm nào KHÔNG thuộc danh mục các hàm đơn dòng có sẵn trong SQL?",
    "o_vi": [
      "Calendar (Lịch)",
      "String (Chuỗi)",
      "Character (Ký tự)",
      "Numeric (Số)"
    ],
    "c": 0,
    "ex_en": "'calendar' is not a valid classification of single-row functions in SQL; standard categories include Character, Number, Date, Conversion, and General functions.",
    "ex_vi": "SQL phân loại hàm đơn dòng gồm: Character, Number, Date, Conversion, General. Không có nhóm \"Calendar\"."
  },
  {
    "id": 112,
    "module": 4,
    "q_en": "Management has asked you to calculate the value 12salarycommission_pct for all the employees in the EMP table. The EMP table contains these columns: LAST_NAME VARCHAR2(35) NOT NULL, SALARY NUMBER(9,2) NOT NULL, COMMISSION_PCT NUMBER(4,2). Which statement ensures that a value is displayed in the calculated columns for all employees?",
    "o_en": [
      "SELECT last_name, 12salary(nvl(commission_pct,0)) FROM emp;",
      "SELECT last_name, 12salarycommison_pct FROM emp;",
      "SELECT last_name, 12salary (commission_pct,0) FROM emp;",
      "SELECT last_name, 12salary(decode(commission_pct,0)) FROM emp;\n*Question 113: Evaluate the SQL statement: SELECT LPAD(salary, 10, ) FROM EMP WHERE EMP_ID = 1001; If the employee with the EMP_ID 1001 has a salary of 17000, what is displayed?",
      "An error statement",
      "17000.00",
      "17000*****",
      "*****17000"
    ],
    "q_vi": "Cần tính 12*salary*commission_pct. Câu lệnh nào đảm bảo luôn hiển thị kết quả tính toán cho tất cả nhân viên (kể cả khi không có hoa hồng)?",
    "o_vi": [
      "SELECT last_name, 12*salary*(nvl(commission_pct,0)) FROM emp;",
      "SELECT last_name, 12*salary*commison_pct FROM emp;",
      "SELECT last_name, 12*salary* (commission_pct,0) FROM emp;",
      "SELECT last_name, 12*salary*(decode(commission_pct,0)) FROM emp;"
    ],
    "c": 0,
    "ex_en": "In LPAD(salary, 10, ), passing '' without single quotes causes a SQL syntax syntax error because string literals must be quoted.",
    "ex_vi": "NVL(commission_pct, 0) chuyển giá trị NULL thành 0 để phép nhân không bị trả về NULL."
  },
  {
    "id": 113,
    "module": 6,
    "q_en": "Evaluate the SQL statement:\nSELECT LPAD(salary, 10, *)\nFROM EMP\nWHERE EMP_ID = 1001;\nIf the employee with the EMP_ID 1001 has a salary of 17000, what is displayed?",
    "o_en": [
      "An error statement",
      "17000.00",
      "17000*****",
      "*****17000"
    ],
    "q_vi": "Cho câu lệnh: SELECT LPAD(salary, 10, *) FROM EMP WHERE EMP_ID = 1001;. Nếu lương là 17000, kết quả hiển thị là gì?",
    "o_vi": [
      "Thông báo lỗi (An error statement)",
      "17000.00",
      "17000*****",
      "*****17000"
    ],
    "c": 0,
    "ex_en": "",
    "ex_vi": "Ký tự đệm * trong hàm LPAD bắt buộc phải đặt trong dấu nháy đơn '*'. Việc viết * trần gây lỗi cú pháp."
  },
  {
    "id": 114,
    "module": 6,
    "q_en": "The EMPLOYEE table has these columns: LAST_NAME VARCHAR2(35), SALARY NUMBER(8,2), COMMISSION_PCT NUMBER(5,2). You want to display the name and annual salary multiplied by the commission_pct for all employees. For records that have a NULL commission_pct, a zero must be displayed against the calculated column. Which SQL statement displays the desired results?",
    "o_en": [
      "SELECT last_name, (salary * 12) * NVL(commission_pct, 0) FROM EMPLOYEES;",
      "SELECT last_name, (salary * 12) * commission_pct FROM EMPLOYEES;",
      "SELECT last_name, (salary * 12) * IFNULL(commission_pct,0) FROM EMPLOYEES;",
      "SELECT last_name, (salary * 12) * NVL2(commission_pct, 0) FROM EMPLOYEES;"
    ],
    "q_vi": "Muốn hiển thị lương năm nhân với commission_pct, nếu commission_pct bị NULL thì kết quả tính toán hiển thị số 0. Dùng câu lệnh nào?",
    "o_vi": [
      "SELECT last_name, (salary * 12) * NVL(commission_pct, 0) FROM EMPLOYEES;",
      "SELECT last_name, (salary * 12) * commission_pct FROM EMPLOYEES;",
      "SELECT last_name, (salary * 12) * IFNULL(commission_pct,0) FROM EMPLOYEES;",
      "SELECT last_name, (salary * 12) * NVL2(commission_pct, 0) FROM EMPLOYEES;"
    ],
    "c": 0,
    "ex_en": "To display 0 instead of NULL when multiplying salary by commission_pct, use (salary * 12) * NVL(commission_pct, 0).",
    "ex_vi": "NVL(commission_pct, 0) trả về 0 khi hoa hồng bị NULL, giúp kết quả phép nhân bằng 0."
  },
  {
    "id": 115,
    "module": 6,
    "q_en": "You would like to display the system date in the format \"Monday, 01 June, 2001\". Which SELECT statement should you use?",
    "o_en": [
      "SELECT TO_CHAR(SYSDATE, 'FMDay, DD Month, YYYY') FROM dual;",
      "SELECT TO_DATE(SYSDATE, 'FMDAY, DD Month, YYYY') FROM dual;",
      "SELECT TO_CHAR(SYSDATE, 'FMDD, DY Month, 'YYY') FROM dual;",
      "SELECT TO_CHAR(SYSDATE, 'FMDY, DDD Month, YYYY') FROM dual;"
    ],
    "q_vi": "Muốn hiển thị ngày hệ thống theo định dạng \"Monday, 01 June, 2001\". Dùng câu lệnh SELECT nào?",
    "o_vi": [
      "SELECT TO_CHAR(SYSDATE, 'FMDay, DD Month, YYYY') FROM dual;",
      "SELECT TO_DATE(SYSDATE, 'FMDAY, DD Month, YYYY') FROM dual;",
      "SELECT TO_CHAR(SYSDATE, 'FMDD, DY Month, 'YYY') FROM dual;",
      "SELECT TO_CHAR(SYSDATE, 'FMDY, DDD Month, YYYY') FROM dual;"
    ],
    "c": 0,
    "ex_en": "TO_CHAR(SYSDATE, 'FMDay, DD Month, YYYY') uses the 'FM' (Fill Mode) modifier to strip leading/trailing spaces from day and month names.",
    "ex_vi": "TO_CHAR chuyển đổi định dạng ngày: FMDay lấy tên thứ, DD lấy ngày 2 chữ số, Month lấy tên tháng, YYYY lấy năm 4 chữ số."
  },
  {
    "id": 116,
    "module": 6,
    "q_en": "Evaluate the SQL statement: SELECT ROUND(TRUNC(MOD(1600, 10), -1), 2) FROM dual; What will be displayed?",
    "o_en": [
      "0",
      "1",
      "0.00",
      "An error statement"
    ],
    "q_vi": "Giá trị hiển thị của câu lệnh: SELECT ROUND(TRUNC(MOD(1600, 10), -1), 2) FROM dual; là gì?",
    "o_vi": [
      "0",
      "1",
      "0.00",
      "Thông báo lỗi"
    ],
    "c": 0,
    "ex_en": "MOD(1600, 10) evaluates to 0. TRUNC(0, -1) is 0, and ROUND(0, 2) evaluates to 0.",
    "ex_vi": "MOD(1600, 10) = 0; TRUNC(0, -1) = 0; ROUND(0, 2) = 0."
  },
  {
    "id": 117,
    "module": 6,
    "q_en": "Which SELECT statement will not display 2000 in the format '$2,000.00'",
    "o_en": [
      "SELECT TO_CHAR (2000, '$2,000.00') FROM dual;",
      "SELECT TO_CHAR (2000, '$0,000.00') FROM dual;",
      "SELECT TO_CHAR (2000, '$9,999.00') FROM dual;",
      "SELECT TO_CHAR (2000, '$9,999.99') FROM dual;"
    ],
    "q_vi": "Câu lệnh SELECT nào KHÔNG hiển thị số 2000 dưới định dạng '$2,000.00'?",
    "o_vi": [
      "SELECT TO_CHAR (2000, '$2,000.00') FROM dual;",
      "SELECT TO_CHAR (2000, '$0,000.00') FROM dual;",
      "SELECT TO_CHAR (2000, '$9,999.00') FROM dual;",
      "SELECT TO_CHAR (2000, '$9,999.99') FROM dual;"
    ],
    "c": 0,
    "ex_en": "TO_CHAR(2000, '$2,000.00') is invalid because '2' is not a valid numeric format model character (valid digit placeholders are 9 or 0).",
    "ex_vi": "Trong mẫu định dạng định dạng số (format model) của Oracle, phải dùng các chữ số 9 hoặc 0, không được dùng chữ số 2."
  },
  {
    "id": 118,
    "module": 6,
    "q_en": "Which statement is incorrect about functions that are available in SQL?",
    "o_en": [
      "NVL2 returns the first non-null expression in the expression list.",
      "DECODE translates an expression after comparing it to each search value.",
      "TRIM trims the heading of trailing characters (or both) from a character string.",
      "NULLIF compares two expressions and returns null if they are equal, or the first expression if they are not equal"
    ],
    "q_vi": "Phát biểu nào sau đây KHÔNG đúng về các hàm trong SQL?",
    "o_vi": [
      "NVL2 trả về biểu thức không null đầu tiên trong danh sách",
      "DECODE chuyển đổi một biểu thức sau khi so sánh nó với từng giá trị tìm kiếm",
      "TRIM cắt bỏ các ký tự đầu hoặc cuối của một chuỗi ký tự",
      "NULLIF so sánh hai biểu thức và trả về null nếu chúng bằng nhau"
    ],
    "c": 0,
    "ex_en": "NVL2(expr1, expr2, expr3) returns expr2 if expr1 is NOT NULL, and expr3 if expr1 IS NULL. Returning the first non-null expression is COALESCE's behavior.",
    "ex_vi": "Hàm trả về biểu thức không null đầu tiên trong danh sách là COALESCE. NVL2(a, b, c) kiểm tra nếu a không null thì trả về b, ngược lại trả về c."
  },
  {
    "id": 119,
    "module": 6,
    "q_en": "Which is a character manipulation function?",
    "o_en": [
      "TRIM",
      "TRUNC",
      "TO_DATE",
      "MOD"
    ],
    "q_vi": "Hàm nào sau đây là hàm xử lý chuỗi ký tự?",
    "o_vi": [
      "TRIM",
      "TRUNC",
      "TO_DATE",
      "MOD"
    ],
    "c": 0,
    "ex_en": "TRIM is a character manipulation function that strips characters from string boundaries. TRUNC and MOD are numeric, and TO_DATE is conversion.",
    "ex_vi": "TRIM dùng để loại bỏ khoảng trắng/ký tự ở hai đầu chuỗi."
  },
  {
    "id": 120,
    "module": 6,
    "q_en": "Which task can you perform by using the TO_CHAR function?",
    "o_en": [
      "Convert '10' to '10'",
      "Convert 10 to 'TEN'",
      "Convert '10' to 10",
      "Convert 'TEN' to 10"
    ],
    "q_vi": "Bạn có thể thực hiện tác vụ nào bằng cách sử dụng hàm TO_CHAR?",
    "o_vi": [
      "Chuyển đổi chuỗi '10' thành chuỗi '10' (hoặc định dạng biểu diễn chuỗi)",
      "Chuyển số 10 thành chữ 'TEN'",
      "Chuyển chuỗi '10' thành số 10",
      "Chuyển chuỗi 'TEN' thành số 10"
    ],
    "c": 0,
    "ex_en": "TO_CHAR converts numeric or date data into a character string, such as converting the number 10 into the string literal '10'.",
    "ex_vi": "TO_CHAR chuyển đổi các kiểu dữ liệu khác sang định dạng chuỗi ký tự."
  },
  {
    "id": 121,
    "module": 7,
    "q_en": "Which statement is true about WHERE and HAVING clauses?",
    "o_en": [
      "A HAVING clause can be used to restrict groups only.",
      "A WHERE clause can be used to restrict groups only.",
      "A WHERE clause can be used to restrict both rows and groups.",
      "A HAVING clause can be used to restrict both rows and groups."
    ],
    "q_vi": "Phát biểu nào sau đây là ĐÚNG về mệnh đề WHERE và HAVING?",
    "o_vi": [
      "Mệnh đề HAVING chỉ có thể dùng để hạn chế các nhóm (restrict groups)",
      "Mệnh đề WHERE chỉ dùng để hạn chế các nhóm",
      "Mệnh đề WHERE có thể dùng để hạn chế cả dòng lẫn nhóm",
      "Mệnh đề HAVING có thể dùng để hạn chế cả các dòng và các nhóm"
    ],
    "c": 3,
    "ex_en": "The HAVING clause can restrict individual row groups produced by GROUP BY, as well as rows when used without GROUP BY.",
    "ex_vi": "Mệnh đề HAVING có thể lọc các tập dữ liệu gom nhóm cũng như lọc điều kiện trên dòng dữ liệu (dù lọc dòng bằng WHERE sẽ tối ưu hơn)."
  },
  {
    "id": 122,
    "module": 7,
    "q_en": "Examine the description of the EMPLOYEES table: EMP_ID NUMBER(4), LAST_NAME VARCHAR2(30), FIRST_NAME VARCHAR2(30), DEPT_ID NUMBER(2). Which statement produces the number of different departments that have employees with last name Smith?",
    "o_en": [
      "SELECT DISTINCT(COUNT(dept_id)) FROM employees WHERE last_name='Smith';",
      "SELECT COUNT(*) FROM employees WHERE last_name='Smith';",
      "SELECT COUNT(DISTINCT dept_id) FROM employees WHERE last_name='Smith';",
      "SELECT COUNT (dept_id) FROM employees WHERE last_name='Smith';"
    ],
    "q_vi": "Câu lệnh nào trả về số lượng các phòng ban KHÁC NHAU có nhân viên mang họ 'Smith'?",
    "o_vi": [
      "SELECT DISTINCT(COUNT(dept_id)) FROM employees WHERE last_name='Smith';",
      "SELECT COUNT(*) FROM employees WHERE last_name='Smith';",
      "SELECT COUNT(DISTINCT dept_id) FROM employees WHERE last_name='Smith';",
      "SELECT COUNT (dept_id) FROM employees WHERE last_name='Smith';"
    ],
    "c": 2,
    "ex_en": "To count the unique number of departments containing employees named Smith, use COUNT(DISTINCT dept_id) in the SELECT list.",
    "ex_vi": "COUNT(DISTINCT dept_id) đếm số giá trị mã phòng ban duy nhất khác NULL."
  },
  {
    "id": 123,
    "module": 7,
    "q_en": "What is true of using group functions on columns that contain NULL values?",
    "o_en": [
      "Group functions on columns returning dates include NULL values.",
      "Group functions on columns ignore NULL values.",
      "Group functions on columns cannot be accurately used on columns that contain NULL values.",
      "Group functions on columns returning numbers include NULL values."
    ],
    "q_vi": "Điều nào sau đây là ĐÚNG khi sử dụng các hàm nhóm trên các cột có chứa giá trị NULL?",
    "o_vi": [
      "Hàm nhóm trên cột ngày tháng bao gồm cả giá trị NULL",
      "Các hàm nhóm trên cột tự động bỏ qua (ignore) các giá trị NULL",
      "Hàm nhóm không thể dùng chính xác trên cột chứa NULL",
      "Hàm nhóm trên cột kiểu số bao gồm cả giá trị NULL"
    ],
    "c": 1,
    "ex_en": "Group (aggregate) functions automatically ignore NULL values when performing calculations across row sets (except COUNT(*)).",
    "ex_vi": "Tất cả các hàm nhóm (ngoại trừ COUNT(*)) đều tự động bỏ qua các giá trị NULL khi tính toán."
  },
  {
    "id": 124,
    "module": 7,
    "q_en": "The STUDENT_GRADES table has these columns: STUDENT_ID NUMBER(12), SEMESTER_END DATE, GPA NUMBER(4,3). Which statement finds the highest grade point average (GPA) per semester?",
    "o_en": [
      "SELECT MAX(gpa) FROM student_grades WHERE gpa IS NOT NULL GROUP BY semester_end;",
      "SELECT (gpa) FROM student_grades GROUP BY semester_end WHERE gpa IS NOT NULL",
      "SELECT MAX(gpa) FROM student_grades WHERE gpa IS NOT NULL",
      "SELECT MAX(gpa) GROUP BY semester_end WHERE gpa IS NOT NULL FROM student_grades"
    ],
    "q_vi": "Câu lệnh nào tìm điểm GPA cao nhất theo từng học kỳ (semester_end)?",
    "o_vi": [
      "SELECT MAX(gpa) FROM student_grades WHERE gpa IS NOT NULL GROUP BY semester_end;",
      "SELECT (gpa) FROM student_grades GROUP BY semester_end WHERE gpa IS NOT NULL",
      "SELECT MAX(gpa) FROM student_grades WHERE gpa IS NOT NULL",
      "SELECT MAX(gpa) GROUP BY semester_end WHERE gpa IS NOT NULL FROM student_grades"
    ],
    "c": 0,
    "ex_en": "To calculate the maximum GPA for each semester, use SELECT MAX(gpa) FROM student_grades WHERE gpa IS NOT NULL GROUP BY semester_end;.",
    "ex_vi": "Để tìm giá trị lớn nhất theo từng nhóm học kỳ, dùng MAX(gpa) kết hợp GROUP BY semester_end."
  },
  {
    "id": 125,
    "module": 7,
    "q_en": "Which of the following data types are compatible for applying the group functions such as MIN, MAX ?",
    "o_en": [
      "Numeric",
      "Date",
      "All of the above",
      "Character"
    ],
    "q_vi": "Kiểu dữ liệu nào tương thích khi áp dụng các hàm nhóm như MIN, MAX?",
    "o_vi": [
      "Kiểu số (Numeric)",
      "Kiểu ngày (Date)",
      "Tất cả các kiểu dữ liệu trên",
      "Kiểu ký tự (Character)"
    ],
    "c": 2,
    "ex_en": "MIN and MAX aggregate functions operate on Numeric, Date, and Character data types (using alphabetical ASCII ordering for strings).",
    "ex_vi": "Các hàm MIN và MAX có thể áp dụng cho mọi kiểu dữ liệu cơ bản (số, chuỗi ký tự, ngày tháng)."
  },
  {
    "id": 126,
    "module": 7,
    "q_en": "Which of the following is not a valid variation of the COUNT function ?",
    "o_en": [
      "COUNT(*)",
      "COUNT(expr1, expr2)",
      "COUNT(DISTINCT expr)",
      "COUNT(expr)"
    ],
    "q_vi": "Cú pháp nào sau đây KHÔNG phải là một biến thể hợp lệ của hàm COUNT?",
    "o_vi": [
      "COUNT(*)",
      "COUNT(expr1, expr2)",
      "COUNT(DISTINCT expr)",
      "COUNT(expr)"
    ],
    "c": 1,
    "ex_en": "COUNT accepts COUNT(*), COUNT(expr), or COUNT(DISTINCT expr). COUNT(expr1, expr2) with multiple parameters is invalid syntax.",
    "ex_vi": "Hàm COUNT chỉ nhận duy nhất 1 đối số biểu thức (hoặc *)."
  },
  {
    "id": 127,
    "module": 7,
    "q_en": "Which of the following statements calculates the Average commission percentage from the employees table by treating the NULLs as zeros wherever the commission percentage is NULL ?",
    "o_en": [
      "SELECT AVG(NVL(commission_pct, 0)) FROM employees",
      "SELECT NULLIF(AVG(commission_pct), 0) FROM employees",
      "SELECT AVG(NULLIF(commission_pct, 0)) FROM employees",
      "SELECT NVL(AVG(commission_pct), 0) FROM employees"
    ],
    "q_vi": "Câu lệnh nào tính tỷ lệ hoa hồng trung bình (commission_pct), coi các giá trị NULL tương đương như số 0?",
    "o_vi": [
      "SELECT AVG(NVL(commission_pct, 0)) FROM employees",
      "SELECT NULLIF(AVG(commission_pct), 0) FROM employees",
      "SELECT AVG(NULLIF(commission_pct, 0)) FROM employees",
      "SELECT NVL(AVG(commission_pct), 0) FROM employees"
    ],
    "c": 0,
    "ex_en": "To include NULL commission percentages as 0 in an average calculation, use AVG(NVL(commission_pct, 0)).",
    "ex_vi": "Bọc NVL(commission_pct, 0) bên trong hàm AVG đảm bảo các bản ghi NULL được tính vào mẫu số của phép tính trung bình."
  },
  {
    "id": 128,
    "module": 7,
    "q_en": "Which of the following statements will return error?",
    "o_en": [
      "SELECT AVG(salary) FROM employees GROUP BY department_id",
      "SELECT department_id, AVG(salary) FROM employees GROUP BY department_id",
      "SELECT job_id, AVG(salary) FROM employees GROUP BY department_id",
      "SELECT AVG(salary), job_id FROM employees GROUP BY department_id, job_id"
    ],
    "q_vi": "Câu lệnh nào sau đây sẽ BÁO LỖI khi thực thi?",
    "o_vi": [
      "SELECT AVG(salary) FROM employees GROUP BY department_id",
      "SELECT department_id, AVG(salary) FROM employees GROUP BY department_id",
      "SELECT job_id, AVG(salary) FROM employees GROUP BY department_id",
      "SELECT AVG(salary), job_id FROM employees GROUP BY department_id, job_id"
    ],
    "c": 2,
    "ex_en": "SELECT job_id, AVG(salary) FROM employees GROUP BY department_id; fails because 'job_id' is an unaggregated column missing from GROUP BY.",
    "ex_vi": "Cột job_id xuất hiện ở danh sách SELECT nhưng không có mặt trong mệnh đề GROUP BY gây ra lỗi ORA-00979."
  },
  {
    "id": 129,
    "module": 7,
    "q_en": "Which of the following statements is not correct?",
    "o_en": [
      "You cannot use the WHERE clause to restrict groups",
      "You can use group functions in the WHERE clause",
      "You cannot use group functions in the WHERE clause",
      "You use the HAVING clause to restrict groups"
    ],
    "q_vi": "Phát biểu nào sau đây là KHÔNG đúng?",
    "o_vi": [
      "Bạn không thể dùng mệnh đề WHERE để hạn chế các nhóm",
      "Bạn có thể sử dụng các hàm nhóm trong mệnh đề WHERE",
      "Bạn không thể sử dụng các hàm nhóm trong mệnh đề WHERE",
      "Bạn sử dụng mệnh đề HAVING để hạn chế các nhóm"
    ],
    "c": 1,
    "ex_en": "Group functions cannot be placed directly in the WHERE clause; group filtering must be performed in the HAVING clause.",
    "ex_vi": "Bắt buộc phải dùng mệnh đề HAVING để lọc điều kiện dựa trên hàm nhóm; không được đặt hàm nhóm ở mệnh đề WHERE."
  },
  {
    "id": 130,
    "module": 7,
    "q_en": "Which of the following statements displays the number of distinct department values in the EMPLOYEES table",
    "o_en": [
      "SELECT COUNT(department_id) FROM employees",
      "SELECT DISTINCT COUNT(department_id) FROM employees",
      "SELECT COUNT(DISTINCT department_id) FROM employees",
      "SELECT DISTINCT department_id FROM employees;"
    ],
    "q_vi": "Câu lệnh nào hiển thị số lượng các giá trị phòng ban KHÁC NHAU trong bảng EMPLOYEES?",
    "o_vi": [
      "SELECT COUNT(department_id) FROM employees",
      "SELECT DISTINCT COUNT(department_id) FROM employees",
      "SELECT COUNT(DISTINCT department_id) FROM employees",
      "SELECT DISTINCT department_id FROM employees;"
    ],
    "c": 2,
    "ex_en": "To display the count of unique departments, use SELECT COUNT(DISTINCT department_id) FROM employees.",
    "ex_vi": "COUNT(DISTINCT department_id) đếm số lượng các mã phòng ban không trùng lặp và không null."
  },
  {
    "id": 131,
    "module": 7,
    "q_en": "What will be the output of the following statement? SELECT department_id, AVG(salary) FROM employees WHERE AVG(salary) > 8000 GROUP BY department_id;",
    "o_en": [
      "The statement will display the list of department ids and average salary of the employees table where average",
      "The statement will display a list of departments and average salary of each department",
      "The statement will display a list departments and average salary of each department only for departments whose average salary is greater than 8000",
      "The statement will return an error"
    ],
    "q_vi": "Kết quả của câu lệnh bên dưới là gì?\nSELECT department_id, AVG(salary) FROM employees WHERE AVG(salary) > 8000 GROUP BY department_id;",
    "o_vi": [
      "Hiển thị danh sách mã phòng ban và lương trung bình > 8000",
      "Hiển thị danh sách tất cả phòng ban và lương trung bình",
      "Hiển thị danh sách phòng ban thỏa điều kiện",
      "Câu lệnh sẽ trả về lỗi (return an error)"
    ],
    "c": 3,
    "ex_en": "Using WHERE AVG(salary) > 8000 causes a SQL syntax error because aggregate functions cannot appear in a WHERE clause.",
    "ex_vi": "Mệnh đề WHERE chứa hàm nhóm AVG(salary) > 8000 bị sai cú pháp (phải chuyển thành HAVING AVG(salary) > 8000)."
  },
  {
    "id": 132,
    "module": 7,
    "q_en": "Examine the description of the STUDENTS table: STD_ID NUMBER(4), COURSE_ID VARCHAR2(10), START_DATE DATE, END_DATE DATE. Which of the aggregate functions is valid on the START_DATE column?",
    "o_en": [
      "MIN(start_date)",
      "AVG(start_date)",
      "MAXIMUM(start_date)",
      "SUM(start_date)"
    ],
    "q_vi": "Hàm tập hợp nào sau đây là HỢP LỆ khi áp dụng trên cột kiểu ngày START_DATE?",
    "o_vi": [
      "MIN(start_date)",
      "AVG(start_date)",
      "MAXIMUM(start_date)",
      "SUM(start_date)"
    ],
    "c": 0,
    "ex_en": "MIN(start_date) is valid because MIN operates on DATE columns to find the earliest chronological date.",
    "ex_vi": "MIN (lấy ngày sớm nhất) và MAX hợp lệ với kiểu ngày; các hàm AVG, SUM chỉ áp dụng cho dữ liệu kiểu số."
  },
  {
    "id": 133,
    "module": 7,
    "q_en": "What is True about the below statement? SELECT MAX(AVG(salary)) FROM employees GROUP BY department_id;",
    "o_en": [
      "It will return an error as Group functions can not be nested",
      "It will return Maximum average salary for each department",
      "It will return error because Salary is not included in the group by clause",
      "It will display the maximum of the average salaries for each department"
    ],
    "q_vi": "Điều nào sau đây là ĐÚNG về câu lệnh: SELECT MAX(AVG(salary)) FROM employees GROUP BY department_id;?",
    "o_vi": [
      "Báo lỗi vì không được lồng hàm nhóm",
      "Trả về lương trung bình lớn nhất theo từng phòng ban",
      "Báo lỗi vì Salary không có trong GROUP BY",
      "Hiển thị giá trị lớn nhất trong số các mức lương trung bình của các phòng ban"
    ],
    "c": 3,
    "ex_en": "Nesting aggregate functions like MAX(AVG(salary)) evaluates the maximum of department salary averages across all groups.",
    "ex_vi": "Khi lồng 2 hàm nhóm (MAX(AVG(...))), kết quả sẽ thu về duy nhất 1 giá trị cực đại của các giá trị trung bình gom nhóm."
  },
  {
    "id": 134,
    "module": 7,
    "q_en": "Examine the description of the MARKS table: STD_ID NUMBER(4), STUDENT_NAME VARCHAR2(30), SUBJ1 NUMBER(3), SUBJ2 NUMBER(3). Examine this SELECT statement: SELECT subj1+subj2 total_marks, std_id FROM marks WHERE subj1 > AVG(subj1) AND subj2 > AVG(subj2) ORDER BY total marks; What is the result of the SELECT statement?",
    "o_en": [
      "The statement returns an error at the WHERE clause.",
      "The statement executes successfully and returns the student ID and sum of all marks for each student who obtained more than the average mark in each subject.",
      "The statement returns an error at the SELECT clause.",
      "The statement returns an error at the ORDER BY clause."
    ],
    "q_vi": "Xét câu lệnh: SELECT subj1+subj2 total_marks, std_id FROM marks WHERE subj1 > AVG(subj1) AND subj2 > AVG(subj2) ORDER BY total_marks;. Kết quả là gì?",
    "o_vi": [
      "Báo lỗi tại mệnh đề WHERE (returns an error at the WHERE clause)",
      "Chạy thành công",
      "Báo lỗi tại mệnh đề SELECT",
      "Báo lỗi tại mệnh đề ORDER BY"
    ],
    "c": 0,
    "ex_en": "Using WHERE subj1 > AVG(subj1) fails because group functions cannot be evaluated inside a WHERE clause.",
    "ex_vi": "Không được sử dụng các hàm nhóm như AVG(subj1) trực tiếp trong mệnh đề WHERE."
  },
  {
    "id": 135,
    "module": 9,
    "q_en": "Which statement is true about aggregate functions?",
    "o_en": [
      "You can mix single row columns with aggregate functions in the column list of a SELECT statement by grouping on the single row columns.",
      "You can use aggregate functions only in the column list of the SELECT clause and in the WHERE clause of a SELECT statement.",
      "You can use aggregate functions on a table, only by grouping the whole table as one single group.",
      "You can use aggregate functions in any clause of a SELECT statement."
    ],
    "q_vi": "Phát biểu nào sau đây là ĐÚNG về các hàm tập hợp (Aggregate functions)?",
    "o_vi": [
      "Có thể kết hợp cột đơn dòng với hàm tập hợp trong câu SELECT bằng cách nhóm (GROUP BY) theo cột đơn dòng đó",
      "Chỉ được dùng hàm tập hợp ở SELECT và WHERE",
      "Chỉ dùng được hàm tập hợp khi coi toàn bộ bảng là một nhóm duy nhất",
      "Dùng được hàm tập hợp ở bất kỳ mệnh đề nào"
    ],
    "c": 0,
    "ex_en": "Individual non-aggregated columns can be included alongside group functions provided all non-aggregated columns are listed in GROUP BY.",
    "ex_vi": "Quy tắc chuẩn: Mọi cột không chứa hàm tập hợp có mặt ở mệnh đề SELECT bắt buộc phải được khai báo trong mệnh đề GROUP BY."
  },
  {
    "id": 136,
    "module": 7,
    "q_en": "Which clause should you use to exclude group results?",
    "o_en": [
      "HAVING",
      "RESTRICT",
      "WHERE",
      "GROUP BY"
    ],
    "q_vi": "Mệnh đề nào dùng để loại trừ/lọc các kết quả của nhóm?",
    "o_vi": [
      "HAVING",
      "RESTRICT",
      "WHERE",
      "GROUP BY"
    ],
    "c": 0,
    "ex_en": "The HAVING clause is used to filter out or exclude aggregated group results based on group conditions.",
    "ex_vi": "Mệnh đề HAVING dùng để thiết lập điều kiện lọc dữ liệu sau khi đã được gom nhóm."
  },
  {
    "id": 137,
    "module": 7,
    "q_en": "In a SELECT statement that includes a WHERE clause, where should the GROUP BY clause placed?",
    "o_en": [
      "Before the WHERE clause",
      "After the ORDER BY clause",
      "Immediately after the SELECT clause",
      "After the WHERE clause"
    ],
    "q_vi": "Trong câu lệnh SELECT có chứa mệnh đề WHERE, mệnh đề GROUP BY phải được đặt ở vị trí nào?",
    "o_vi": [
      "Đứng trước mệnh đề WHERE",
      "Đứng sau mệnh đề ORDER BY",
      "Đứng ngay sau mệnh đề SELECT",
      "Đứng sau mệnh đề WHERE"
    ],
    "c": 3,
    "ex_en": "In a standard SQL SELECT statement, the GROUP BY clause must be placed immediately after the WHERE clause.",
    "ex_vi": "Thứ tự cú pháp chuẩn của các mệnh đề: SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY."
  },
  {
    "id": 138,
    "module": 7,
    "q_en": "The EVENT table contains these columns: EVENT_ID NUMBER, EVENT_NAME VARCHAR2(30), EVENT_DESC VARCHAR2(100), EVENT_TYPE NUMBER, LOCATION_ID NUMBER. You have been asked to provide a report of the number of different event types at each location. Which SELECT statement will produce the desired result?",
    "o_en": [
      "SELECT COUNT(*), DISTINCT(location_id) FROM event;",
      "SELECT location_id, COUNT(DISTINCT event_type) FROM event GROUP BY location_id;",
      "SELECT DISTINCT (event_type) FROM event GROUP BY location_id;",
      "SELECT UNIQUE(location_id), COUNT(event_type) FROM event GROUP BY location_id;"
    ],
    "q_vi": "Cần lập báo cáo số lượng các loại sự kiện (event_type) KHÁC NHAU tại mỗi địa điểm (location_id). Câu lệnh SELECT nào đúng?",
    "o_vi": [
      "SELECT COUNT(*), DISTINCT(location_id) FROM event;",
      "SELECT location_id, COUNT(DISTINCT event_type) FROM event GROUP BY location_id;",
      "SELECT DISTINCT (event_type) FROM event GROUP BY location_id;",
      "SELECT UNIQUE(location_id), COUNT(event_type) FROM event GROUP BY location_id;"
    ],
    "c": 1,
    "ex_en": "To count unique event types per location, use SELECT location_id, COUNT(DISTINCT event_type) FROM event GROUP BY location_id;.",
    "ex_vi": "Gom nhóm theo location_id và đếm các loại sự kiện duy nhất bằng COUNT(DISTINCT event_type)."
  },
  {
    "id": 139,
    "module": 7,
    "q_en": "Which statement about the evaluation of clauses in a SELECT statement is true?",
    "o_en": [
      "The Oracle Server will evaluate an ORDER BY clause before a WHERE clause.",
      "The Oracle Server will evaluate a WHERE clause before a GROUP BY clause.",
      "The Oracle Server will evaluate an ORDER BY clause before a HAVING clause.",
      "The Oracle Server will evaluate a HAVING clause before a WHERE clause"
    ],
    "q_vi": "Phát biểu nào về thứ tự đánh giá các mệnh đề trong câu lệnh SELECT của Oracle là ĐÚNG?",
    "o_vi": [
      "Đánh giá ORDER BY trước WHERE",
      "Oracle Server sẽ đánh giá mệnh đề WHERE trước mệnh đề GROUP BY",
      "Đánh giá ORDER BY trước HAVING",
      "Đánh giá HAVING trước WHERE"
    ],
    "c": 1,
    "ex_en": "Oracle SQL execution order evaluates WHERE clause row filters before applying GROUP BY grouping operations.",
    "ex_vi": "Thứ tự xử lý logic của Oracle: FROM -> WHERE (lọc dòng) -> GROUP BY (gom nhóm) -> HAVING (lọc nhóm) -> SELECT -> ORDER BY."
  },
  {
    "id": 140,
    "module": 7,
    "q_en": "You need to calculate the total of all salaries in the accounting department. Which group function should you use?",
    "o_en": [
      "COUNT",
      "MAX",
      "MIN",
      "SUM"
    ],
    "q_vi": "Bạn cần tính TỔNG tiền lương của tất cả nhân viên trong phòng kế toán. Sử dụng hàm nhóm nào?",
    "o_vi": [
      "COUNT",
      "MAX",
      "MIN",
      "SUM"
    ],
    "c": 3,
    "ex_en": "The SUM aggregate function calculates the cumulative total of numeric column values.",
    "ex_vi": "Hàm SUM(column) dùng để cộng tổng tất cả các giá trị số trong tập dữ liệu."
  },
  {
    "id": 141,
    "module": 8,
    "q_en": "In which case would you use a FULL OUTER JOIN?",
    "o_en": [
      "You want all unmatched data from one table.",
      "You want all unmatched data from both tables.",
      "Both tables have NULL values.",
      "You want all matched data from both tables."
    ],
    "q_vi": "Trong trường hợp nào bạn sẽ sử dụng Phép nối ngoài toàn phần (FULL OUTER JOIN)?",
    "o_vi": [
      "Bạn muốn lấy tất cả dữ liệu không khớp từ một bảng",
      "Bạn muốn lấy tất cả dữ liệu KHÔNG KHỚP từ CẢ HAIBẢNG (all unmatched data from both tables)",
      "Cả hai bảng đều chứa giá trị NULL",
      "Bạn muốn lấy tất cả dữ liệu khớp từ cả hai bảng"
    ],
    "c": 1,
    "ex_en": "FULL OUTER JOIN returns all matched rows plus all unmatched rows from both the left and right participating tables.",
    "ex_vi": "FULL OUTER JOIN trả về toàn bộ các dòng khớp nhau, cộng thêm tất cả các dòng không khớp từ cả bảng bên trái và bảng bên phải."
  },
  {
    "id": 142,
    "module": 8,
    "q_en": "What will be the output of the following query? SELECT * FROM employees, departments;",
    "o_en": [
      "It will display rows from employees table followed by rows from departments table.",
      "It will by default the join two tables on department_id because it is a referential integrity column.",
      "It will result in a Cartesian product as a joining condition is not specified",
      "It will return error as a join condition is not specified"
    ],
    "q_vi": "Kết quả của câu truy vấn: SELECT * FROM employees, departments; là gì?",
    "o_vi": [
      "Hiển thị các dòng từ employees rồi đến departments",
      "Tự động nối theo department_id",
      "Tạo ra một Tích Cartesian (Cartesian product) do không chỉ định điều kiện nối",
      "Trả về lỗi"
    ],
    "c": 2,
    "ex_en": "Omitting join conditions when querying multiple tables produces a Cartesian Product (cross join) combining every row of table 1 with table 2.",
    "ex_vi": "Liệt kê nhiều bảng ở mệnh đề FROM mà không có điều kiện nối trong WHERE sẽ ghép từng dòng của bảng 1 với mọi dòng của bảng 2 (Tích Descartes =  dòng)."
  },
  {
    "id": 143,
    "module": 8,
    "q_en": "Which of the following queries will produce identical output as the query below? SELECT last_name, department_name FROM employees CROSS JOIN departments;",
    "o_en": [
      "SELECT last_name, department_name FROM employees e, departments d WHERE e.depatment_id (+) = d.department_id (+);",
      "SELECT last_name, department_name FROM employees JOIN departments USING (department_id)",
      "SELECT last_name, department_name FROM employees e, departments d WHERE e.depatment_id = d.department_id;",
      "SELECT last_name, department_name FROM employees e, departments d;"
    ],
    "q_vi": "Câu truy vấn nào sau đây cho kết quả TƯƠNG ĐƯƠNG với: SELECT last_name, department_name FROM employees CROSS JOIN departments;?",
    "o_vi": [
      "SELECT ... WHERE e.depatment_id (+) = d.department_id (+);",
      "SELECT ... JOIN departments USING (department_id)",
      "SELECT ... WHERE e.depatment_id = d.department_id;",
      "SELECT last_name, department_name FROM employees e, departments d;"
    ],
    "c": 3,
    "ex_en": "CROSS JOIN produces a Cartesian product, which is identical to listing tables in the FROM clause without a WHERE clause: SELECT ... FROM employees e, departments d;.",
    "ex_vi": "Cú pháp CROSS JOIN theo chuẩn ANSI chính là phép lấy Tích Cartesian (không có điều kiện nối), tương đương với việc viết tên hai bảng phân cách bởi dấu phẩy ở chuẩn cũ."
  },
  {
    "id": 144,
    "module": 8,
    "q_en": "Which of the following is an outer join symbol?",
    "o_en": [
      "[+]",
      "(+)",
      "{+}",
      "+"
    ],
    "q_vi": "Ký hiệu nào sau đây biểu diễn Phép nối ngoài (Outer Join) trong chuẩn cũ của Oracle?",
    "o_vi": [
      "[+]",
      "(+)",
      "{+}",
      "+"
    ],
    "c": 1,
    "ex_en": "Oracle's legacy outer join operator syntax is (+), placed on the side of the join condition that is deficient in matching rows.",
    "ex_vi": "Đặt (+) bên cạnh cột của bảng thiếu dữ liệu để chỉ định phép nối ngoài trong cú pháp độc quyền của Oracle."
  },
  {
    "id": 145,
    "module": 2,
    "q_en": "What will be the output of the following query? SELECT e.last_name, e.department_id, d.department_name FROM employees e, departments d WHERE e.department_id(+) = d.department_id;",
    "o_en": [
      "Displays employee last names, department ID's and department names for all employees irrespective of the matching department id present in departments table or not.",
      "Displays employee last names, department ID's and department names for all employees.",
      "Displays employee last names, department ID's for all employees and also the department names for all departments.",
      "Displays employee last names, department ID's and department names for all employees and also the department names of departments who have no match in employees table."
    ],
    "q_vi": "Kết quả của truy vấn: SELECT e.last_name, e.department_id, d.department_name FROM employees e, departments d WHERE e.department_id(+) = d.department_id; là gì?",
    "o_vi": [
      "Hiển thị nhân viên bất kể có phòng ban hay không",
      "Hiển thị nhân viên tất cả các phòng ban",
      "Hiển thị nhân viên và tên tất cả phòng ban",
      "Hiển thị họ nhân viên, mã phòng ban, tên phòng ban của tất cả nhân viên KHỚP và BỔ SUNG CẢ các phòng ban KHÔNG CÓ nhân viên nào"
    ],
    "c": 3,
    "ex_en": "WHERE e.department_id(+) = d.department_id is a Right Outer Join returning all departments, including departments with no matching employees.",
    "ex_vi": "Đặt (+) bên phía e.department_id tương đương với RIGHT OUTER JOIN, lấy toàn bộ phòng ban từ bảng departments kể cả phòng ban rỗng."
  },
  {
    "id": 146,
    "module": 8,
    "q_en": "Which of the following type of join was not available in Oracle versions 8i and prior?",
    "o_en": [
      "Full Outer Join",
      "Self Join",
      "Left Outer Join",
      "Right Outer Join"
    ],
    "q_vi": "Loại phép nối nào KHÔNG hỗ trợ trong các phiên bản Oracle 8i trở về trước?",
    "o_vi": [
      "Full Outer Join",
      "Self Join",
      "Left Outer Join",
      "Right Outer Join"
    ],
    "c": 0,
    "ex_en": "Full Outer Join (ANSI SQL-92 syntax) was introduced in Oracle 9i and was not supported in Oracle 8i and earlier using (+).",
    "ex_vi": "Trước Oracle 9i (chưa hỗ trợ chuẩn SQL:1999), Oracle không hỗ trợ cú pháp FULL OUTER JOIN trực tiếp (phải dùng UNION giữa Left Join và Right Join)."
  },
  {
    "id": 147,
    "module": 8,
    "q_en": "Which of the following statements about use of table aliases and prefixes in Join queries is not Valid ?",
    "o_en": [
      "We can simplify queries by using table aliases.",
      "Table prefixes must be used to unambiguously identify the columns with same names.",
      "We can improve performance by using table prefixes.",
      "Table prefixes must be used when joining more than three tables."
    ],
    "q_vi": "Phát biểu nào về việc sử dụng Biệt danh bảng (Table Aliases) và Tiền tố trong câu truy vấn Join là KHÔNG đúng?",
    "o_vi": [
      "Rút gọn câu lệnh nhờ biệt danh bảng",
      "Tiền tố giúp xác định rõ ràng các cột trùng tên",
      "Tăng hiệu năng nhờ dùng tiền tố bảng",
      "BẮT BUỘC phải dùng tiền tố bảng khi nối từ 3 bảng trở lên"
    ],
    "c": 3,
    "ex_en": "Table prefixes or aliases are required only to disambiguate identical column names across joined tables, not mandatory based on table count.",
    "ex_vi": "Việc dùng tiền tố bảng không phụ thuộc vào số lượng bảng nối, mà chỉ bắt buộc khi cần giải quyết tranh chấp cột bị trùng tên giữa các bảng."
  },
  {
    "id": 148,
    "module": 8,
    "q_en": "Which of the following statements indicate correct way of using a Natural Join?",
    "o_en": [
      "SELECT department_id, department_name, location_id, city FROM departments d NATURAL JOIN locations l using (l.location_id);",
      "SELECT department_id, department_name, location_id, city FROM departments NATURAL JOIN locations on (location_id);",
      "SELECT department_id, department_name, location_id, city FROM departments NATURAL JOIN locations;",
      "SELECT department_id, department_name, location_id, city FROM departments d NATURAL JOIN locations l WHERE d.location_id = l.location_id"
    ],
    "q_vi": "Câu lệnh nào thể hiện cách viết ĐÚNG của phép Phép nối tự nhiên (NATURAL JOIN)?",
    "o_vi": [
      "SELECT ... FROM departments d NATURAL JOIN locations l using (l.location_id);",
      "SELECT ... FROM departments NATURAL JOIN locations on (location_id);",
      "SELECT department_id, department_name, location_id, city FROM departments NATURAL JOIN locations;",
      "SELECT ... WHERE d.location_id = l.location_id"
    ],
    "c": 2,
    "ex_en": "NATURAL JOIN automatically joins tables based on all columns with matching names; adding an ON or USING clause to NATURAL JOIN is invalid.",
    "ex_vi": "NATURAL JOIN tự động tìm tất cả các cột trùng tên giữa 2 bảng để nối; KHÔNG ĐƯỢC dùng kèm mệnh đề USING hoặc ON."
  },
  {
    "id": 149,
    "module": 8,
    "q_en": "Which of the following statements is not true about joins?",
    "o_en": [
      "To specify arbitrary conditions or specify columns to join, the ON clause is used.",
      "Natural join and using clause can be used together.",
      "Use the USING clause to match only one column when more than one column matches.",
      "If the columns having the same names have different data types, an error is returned in case of a Natural Join."
    ],
    "q_vi": "Phát biểu nào sau đây KHÔNG đúng về các phép nối (Joins)?",
    "o_vi": [
      "Mệnh đề ON dùng để chỉ định điều kiện nối tùy ý",
      "Có thể sử dụng kết hợp NATURAL JOIN và mệnh đề USING trong cùng câu lệnh",
      "Mệnh đề USING dùng để chỉ định 1 cột nối khi có nhiều cột trùng tên",
      "Lỗi trả về nếu các cột trùng tên có kiểu dữ liệu khác nhau trong Natural Join"
    ],
    "c": 1,
    "ex_en": "NATURAL JOIN and USING clauses are mutually exclusive and cannot be combined in the same join clause.",
    "ex_vi": "NATURAL JOIN và mệnh đề USING loại trừ lẫn nhau, không thể xuất hiện cùng lúc."
  },
  {
    "id": 150,
    "module": 8,
    "q_en": "Which SQL statement produces the name, department name, and the city of all the employees who earn more than 10000?",
    "o_en": [
      "SELECT emp_name, department_name, city FROM employees e, departments d, locations 1 JOIN ON (e.department_id = d.department id) AND (d.location_id =1.location_id) AND salary > 10000;",
      "SELECT emp_name, department_name, city FROM employees e, departments d, locations 1 WHERE salary > 10000;",
      "SELECT emp_name, department_name, city FROM employees e JOIN departments d USING (department_id) JOIN locations 1 USING (location_id) WHERE salary > 10000;",
      "SELECT emp_name, department_name, city FROM employees e NATURAL JOIN departments, locations WHERE salary > 10000;"
    ],
    "q_vi": "Câu lệnh SQL nào hiển thị tên, tên phòng ban và thành phố của tất cả nhân viên có lương > 10000?",
    "o_vi": [
      "SELECT emp_name, department_name, city FROM employees e, departments d, locations l JOIN ON (e.department_id = d.department_id) AND (d.location_id = l.location_id) AND salary > 10000;",
      "SELECT emp_name, department_name, city FROM employees e, departments d, locations l WHERE salary > 10000;",
      "SELECT ... JOIN departments d USING (department_id) JOIN locations l USING (location_id)...",
      "SELECT ... NATURAL JOIN ..."
    ],
    "c": 0,
    "ex_en": "Joining 3 tables with filtering requires valid join predicates and conditions: SELECT ... FROM employees e, departments d, locations l WHERE e.department_id = d.department_id AND d.location_id = l.location_id AND salary > 10000;.",
    "ex_vi": "Cú pháp nối các bảng kết hợp mệnh đề JOIN ON và lọc điều kiện lương."
  },
  {
    "id": 151,
    "module": 8,
    "q_en": "You want to retrieve all employees, whether or not they have matching departments in the departments table. Which query would you use?",
    "o_en": [
      "SELECT last_name, department_name FROM employees e LEFT OUTER JOIN departments d ON (e.department_id = d.department_id);",
      "SELECT last_name, department_name FROM employees , departments(+);",
      "SELECT last_name, department_name FROM employees JOIN departments (+);",
      "SELECT last_name, department_name FROM employees e RIGHT OUTER JOIN departments d ON (e.department_id = d.department_id);"
    ],
    "q_vi": "Muốn lấy danh sách tất cả nhân viên, bất kể họ có phòng ban khớp trong bảng departments hay không. Dùng câu truy vấn nào?",
    "o_vi": [
      "SELECT last_name, department_name FROM employees e LEFT OUTER JOIN departments d ON (e.department_id = d.department_id);",
      "SELECT last_name, department_name FROM employees , departments(+);",
      "SELECT last_name, department_name FROM employees JOIN departments (+);",
      "SELECT ... RIGHT OUTER JOIN ..."
    ],
    "c": 0,
    "ex_en": "LEFT OUTER JOIN returns all rows from the left table regardless of whether matching rows exist in the right table.",
    "ex_vi": "LEFT OUTER JOIN đảm bảo giữ lại toàn bộ các bản ghi của bảng bên trái (employees), kể cả khi cột nối bị NULL hoặc không tìm thấy phòng ban."
  },
  {
    "id": 152,
    "module": 8,
    "q_en": "Which is not true regarding the use of outer joins?",
    "o_en": [
      "In the WHERE condition, you use (+) following the name of the column in the table without matching rows, to perform an outerjoin.",
      "You use an outerjoin to see only the rows that do not meet the join condition.",
      "You cannot link a condition that is involved in an outerjoin to another condition by using the OR operator.",
      "You cannot an outer join while joining more than 2 tables"
    ],
    "q_vi": "Điều nào sau đây KHÔNG đúng về việc sử dụng Phép nối ngoài (Outer Joins)?",
    "o_vi": [
      "Dùng (+) sau tên cột của bảng thiếu dòng để nối",
      "Dùng outer join để chỉ xem các dòng không thỏa điều kiện nối",
      "Không thể liên kết điều kiện trong outer join bằng toán tử OR",
      "KHÔNG THỂ thực hiện Phép nối ngoài khi nối nhiều hơn 2 bảng"
    ],
    "c": 3,
    "ex_en": "An outer join can be performed across more than 2 tables by chaining outer join clauses.",
    "ex_vi": "Bạn hoàn toàn có thể nối ngoài liên tiếp trên nhiều bảng (ví dụ: A LEFT JOIN B ON ... LEFT JOIN C ON ...)."
  },
  {
    "id": 153,
    "module": 8,
    "q_en": "Which of the following joins is also called an Inner join?",
    "o_en": [
      "Self Join",
      "Outer Join",
      "Non-Equi Join",
      "Equi Join"
    ],
    "q_vi": "Phép nối nào sau đây còn được gọi là Phép nối trong (Inner Join) hoặc Phép nối bằng?",
    "o_vi": [
      "Self Join",
      "Outer Join",
      "Non-Equi Join",
      "Equi Join"
    ],
    "c": 3,
    "ex_en": "An Equi Join (matching equality of column values) is also referred to as an Inner Join.",
    "ex_vi": "Equi Join (Phép nối bằng - dựa trên dấu =) là dạng phổ biến nhất của Inner Join."
  },
  {
    "id": 154,
    "module": 8,
    "q_en": "What is true about joining tables through an equijoin?",
    "o_en": [
      "You specify an equijoin condition in the SELECT or FROM clauses of a SELECT statement.",
      "You can join n tables (all having single column primary keys) in a SQL statement by specifying a minimum of n-1 join conditions.",
      "You can join a maximum of two columns through an equijoin.",
      "You can join a maximum of two tables through an equijoin."
    ],
    "q_vi": "Điều nào sau đây là ĐÚNG về việc nối các bảng bằng phép nối bằng (Equijoin)?",
    "o_vi": [
      "Chỉ định điều kiện equijoin ở SELECT hoặc FROM",
      "Để nối  bảng trong câu lệnh SQL, cần chỉ định TỐI THIỂU  điều kiện nối",
      "Chỉ nối được tối đa 2 cột qua equijoin",
      "Chỉ nối được tối đa 2 bảng qua equijoin"
    ],
    "c": 1,
    "ex_en": "To join 'n' tables in an equijoin without generating a Cartesian product, a minimum of 'n - 1' join conditions are required.",
    "ex_vi": "Quy tắc vàng trong SQL: Nối  bảng cần ít nhất  điều kiện nối để tránh hiện tượng Tích Cartesian."
  },
  {
    "id": 155,
    "module": 8,
    "q_en": "For which situation would you use a non-equijoin query?",
    "o_en": [
      "To find the number of employees working for the Administrative department and earning less then 4000.",
      "To find the tax percentage for each of the employees",
      "To list the name, job id, and manager name for all the employees.",
      "To find the name, salary, and department name of employees who are not working with Smith."
    ],
    "q_vi": "Cho các bảng EMPLOYEES, DEPARTMENTS, và TAX (chứa MIN_SALARY, MAX_SALARY, TAX_PERCENT). Trường hợp nào bạn sẽ sử dụng Phép nối không bằng (Non-equijoin)?",
    "o_vi": [
      "Tìm số nhân viên phòng Administrative có lương < 4000",
      "Tìm mức phần trăm thuế (TAX_PERCENT) cho từng nhân viên dựa vào khoảng lương",
      "Liệt kê tên, job_id và tên người quản lý",
      "Tìm nhân viên không làm cùng với Smith"
    ],
    "c": 1,
    "ex_en": "Finding tax percentage based on salary ranges (MIN_SALARY and MAX_SALARY) requires a Non-Equijoin (e.g., WHERE salary BETWEEN min_sal AND max_sal).",
    "ex_vi": "Xác định thuế suất cần so sánh mức lương nằm trong khoảng SALARY BETWEEN MIN_SALARY AND MAX_SALARY (sử dụng toán tử so sánh khoảng, không dùng dấu =)."
  },
  {
    "id": 156,
    "module": 8,
    "q_en": "To produce a meaningful result set without any cartesian products, what is the minimum number of conditions that should appear in the WHERE clause of a four-table join?",
    "o_en": [
      "2",
      "4",
      "3",
      "8"
    ],
    "q_vi": "Để thu được tập kết quả có ý nghĩa không bị tích Cartesian, số điều kiện tối thiểu cần xuất hiện ở mệnh đề WHERE khi nối 4 BẢNG là bao nhiêu?",
    "o_vi": [
      "2",
      "4",
      "3",
      "8"
    ],
    "c": 2,
    "ex_en": "To join 4 tables without generating a Cartesian product, a minimum of 3 (n - 1) join conditions must appear in the WHERE/ON clause.",
    "ex_vi": "Áp dụng công thức : Với  bảng, cần tối thiểu  điều kiện nối."
  },
  {
    "id": 157,
    "module": 8,
    "q_en": "In which case would you use an outer join?",
    "o_en": [
      "The tables being joined have NOT NULL columns.",
      "The tables being joined have both matched and unmatched data.",
      "The tables being joined have only unmatched data",
      "The tables being joined have only matched data."
    ],
    "q_vi": "Trong trường hợp nào bạn sẽ sử dụng Phép nối ngoài (Outer Join)?",
    "o_vi": [
      "Các bảng được nối có các cột NOT NULL",
      "Các bảng được nối chứa CẢ dữ liệu KHỚP và KHÔNG KHỚP (both matched and unmatched data)",
      "Các bảng chỉ chứa dữ liệu không khớp",
      "Các bảng chỉ chứa dữ liệu khớp"
    ],
    "c": 1,
    "ex_en": "An Outer Join is used when query requirements demand displaying both matched and unmatched records across tables.",
    "ex_vi": "Sử dụng Outer Join khi bạn muốn lấy tất cả dữ liệu thỏa mãn điều kiện nối đồng thời giữ lại các dòng không tìm thấy bản ghi tương ứng từ bảng kia."
  },
  {
    "id": 158,
    "module": 8,
    "q_en": "When will a Cartesian product occur?",
    "o_en": [
      "All rows in the first table are joined to all rows in the second table",
      "A join condition is omitted",
      "A join condition is invalid",
      "Two tables are joined on the columns having different names."
    ],
    "q_vi": "Tích Cartesian (Cartesian product) xảy ra khi nào?",
    "o_vi": [
      "Tất cả các dòng của bảng thứ nhất được nối với tất cả các dòng của bảng thứ hai",
      "Bỏ sót điều kiện nối",
      "Điều kiện nối không hợp lệ",
      "Hai bảng được nối trên các cột có tên khác nhau"
    ],
    "c": 0,
    "ex_en": "A Cartesian product occurs when two tables are joined on mismatching column names without an explicit join predicate or condition.",
    "ex_vi": "Tích Descartes về mặt bản chất là khi ghép mọi dòng của bảng 1 với mọi dòng của bảng 2 do thiếu hoặc sai lệch điều kiện nối."
  },
  {
    "id": 159,
    "module": 8,
    "q_en": "Which of the following is not a valid type of Join?",
    "o_en": [
      "External Join",
      "Outer Join",
      "Inner Join",
      "Natural join"
    ],
    "q_vi": "Tên nào sau đây KHÔNG phải là một loại Phép nối hợp lệ trong SQL?",
    "o_vi": [
      "External Join",
      "Outer Join",
      "Inner Join",
      "Natural join"
    ],
    "c": 0,
    "ex_en": "'External Join' is a non-existent database term; standard join types are Inner Join, Outer Join, and Natural Join.",
    "ex_vi": "SQL chỉ có Inner Join, Outer Join, Natural Join, Cross Join... Không tồn tại khái niệm \"External Join\"."
  },
  {
    "id": 160,
    "module": 8,
    "q_en": "Which type of join is used in the following query? SELECT e.employee_id, e.last_name, d.department_id, d.location_id FROM employees e, departments d WHERE e.department_id = d.department_id;",
    "o_en": [
      "Self Join",
      "Non-equi Join",
      "Equi join",
      "Left Outer join"
    ],
    "q_vi": "Loại phép nối nào được sử dụng trong câu truy vấn: SELECT e.employee_id, e.last_name, d.department_id, d.location_id FROM employees e, departments d WHERE e.department_id = d.department_id;?",
    "o_vi": [
      "Self Join",
      "Non-equi Join",
      "Equi join (Phép nối bằng)",
      "Left Outer join"
    ],
    "c": 2,
    "ex_en": "WHERE e.department_id = d.department_id uses an equality operator (=), making it an Equi join.",
    "ex_vi": "Phép nối sử dụng toán tử so sánh bằng = giữa hai cột e.department_id = d.department_id được gọi là Equi Join."
  },
  {
    "id": 161,
    "module": 9,
    "q_en": "Which operator can be used with a single-row subquery?",
    "o_en": [
      "=",
      "IN",
      "ANY",
      "ALL"
    ],
    "q_vi": "Xét câu lệnh: SELECT employee_id, name FROM employee WHERE employee_id NOT IN (SELECT employee_id FROM employee WHERE department_id = 30 AND job = 'CLERK');. Điều gì xảy ra nếu truy vấn con bên trong trả về một giá trị NULL?",
    "o_vi": [
      "Báo lỗi cú pháp",
      "Chỉ các dòng có EMPLOYEE_ID bằng NULL được chọn",
      "Hiển thị tất cả bản ghi",
      "KHÔNG CÓ dòng nào được chọn từ bảng EMPLOYEE (No rows would be selected)"
    ],
    "c": 3,
    "ex_en": "A single-row subquery returns exactly one row (and one column) to the outer query and must use single-row comparison operators (=, >, <, >=, <=, <>).",
    "ex_vi": "Toán tử NOT IN kết hợp với tập kết quả có chứa NULL sẽ luôn đánh giá thành UNKNOWN/FALSE, dẫn đến kết quả không có bản ghi nào thỏa mãn."
  },
  {
    "id": 162,
    "module": 9,
    "q_en": "Which operator can be used with a multiple-row subquery?",
    "o_en": [
      "IN",
      "=",
      "<>",
      ">="
    ],
    "q_vi": "Mệnh đề nào sau đây KHÔNG THỂ chứa một truy vấn con (Subquery)?",
    "o_vi": [
      "Trong mệnh đề FROM của câu lệnh SELECT",
      "Trong mệnh đề GROUP BY của câu lệnh SELECT",
      "Trong mệnh đề SET của câu lệnh UPDATE",
      "Trong mệnh đề WHERE của câu lệnh SELECT"
    ],
    "c": 1,
    "ex_en": "Multiple-row subqueries return more than one row to the outer statement and require multiple-row comparison operators like IN, ANY, or ALL.",
    "ex_vi": "SQL không cho phép đặt subquery trực tiếp bên trong mệnh đề GROUP BY."
  },
  {
    "id": 163,
    "module": 11,
    "q_en": "In which clause of a SELECT statement can a subquery NOT be used?",
    "o_en": [
      "GROUP BY",
      "WHERE",
      "HAVING",
      "FROM"
    ],
    "q_vi": "Phát biểu nào mô tả đúng nhất về một Inline View?",
    "o_vi": [
      "Là một truy vấn con nằm trong mệnh đề FROM của một truy vấn khác",
      "Truy vấn con có chứa mệnh đề ORDER BY",
      "Tên gọi khác của View chứa hàm nhóm",
      "Một đối tượng lược đồ CSDL"
    ],
    "c": 0,
    "ex_en": "Subqueries can be placed in SELECT, FROM, WHERE, and HAVING clauses. Placed in the FROM clause, a subquery is called an inline view.",
    "ex_vi": "Inline View là dạng truy vấn con đóng vai trò như một bảng tạm thời đặt ngay tại mệnh đề FROM."
  },
  {
    "id": 164,
    "module": 9,
    "q_en": "Which statement is true about subqueries?",
    "o_en": [
      "Subqueries are enclosed in parentheses and executed first before the main query.",
      "Subqueries cannot be nested.",
      "A subquery must always return a single row.",
      "The inner query executes after the outer main query completes."
    ],
    "q_vi": "Phát biểu nào sau đây về các truy vấn con (Subqueries) là ĐÚNG?",
    "o_vi": [
      "Một truy vấn con có thể trả về 0, 1 hoặc nhiều dòng",
      "Truy vấn con chỉ được phép trả về đúng 1 dòng",
      "Không thể lồng subquery quá 2 cấp",
      "Subquery chỉ dùng được trong lệnh SELECT"
    ],
    "c": 0,
    "ex_en": "Subqueries are enclosed in parentheses and executed first before the main outer query evaluates its condition.",
    "ex_vi": "Tùy thuộc vào câu lệnh và toán tử đi kèm, subquery có thể trả về 0 dòng, 1 dòng (Scalar) hoặc tập hợp nhiều dòng."
  },
  {
    "id": 165,
    "module": 9,
    "q_en": "Which clause can contain a subquery to filter aggregated group results?",
    "o_en": [
      "HAVING",
      "WHERE",
      "FROM",
      "ORDER BY"
    ],
    "q_vi": "Câu lệnh nào hiển thị các nhân viên có cùng job_id với nhân viên 'Haas' và có mức lương > 10000?",
    "o_vi": [
      "SELECT last_name, job_id FROM employees WHERE job_id IN (SELECT job_id FROM employees WHERE last_name = 'Haas') AND salary > 10000;",
      "SELECT ... WHERE last_name = 'Haas' AND salary >10000",
      "SELECT ... WHERE job_id IN (SELECT ... WHERE Salary > 10000) AND last_name = 'Haas'",
      "SELECT ... WHERE job_id = (SELECT ... WHERE last_name = 'Haas' AND salary > 10000);"
    ],
    "c": 0,
    "ex_en": "The HAVING clause can contain a subquery to compare aggregated group metrics against inner subquery output values.",
    "ex_vi": "Truy vấn con lấy job_id của Haas, truy vấn chính lọc theo job_id IN (...) và điều kiện salary > 10000."
  },
  {
    "id": 166,
    "module": 9,
    "q_en": "What happens if a subquery evaluated by a NOT IN operator returns a NULL value?",
    "o_en": [
      "The entire outer query evaluates to no rows returned (NULL).",
      "The NULL values are automatically ignored and processing continues.",
      "An error message is raised immediately by Oracle.",
      "All rows from the outer table are returned."
    ],
    "q_vi": "Thành phần nào được dùng để truy xuất dữ liệu từ một hoặc nhiều bảng khi giữa các bảng không có mối quan hệ trực tiếp?",
    "o_vi": [
      "Sub query (Truy vấn con)",
      "Cả hai",
      "Joins",
      "Không phương án nào"
    ],
    "c": 0,
    "ex_en": "If a multiple-row subquery returns NULL in its result set, using the NOT IN operator causes the entire query to evaluate to NULL (no rows returned).",
    "ex_vi": "Khi không thể nối bảng bằng JOIN do thiếu cột khóa chung, Subquery được sử dụng để lấy giá trị điều kiện gián tiếp."
  },
  {
    "id": 167,
    "module": 9,
    "q_en": "What does the '< ANY' operator mean when used with a multiple-row subquery?",
    "o_en": [
      "Less than the maximum value returned by the subquery.",
      "Less than the minimum value returned by the subquery.",
      "Equal to any value returned by the subquery.",
      "Greater than the minimum value returned by the subquery."
    ],
    "q_vi": "Truy vấn con (Subquery) có thể được sử dụng để làm gì?",
    "o_vi": [
      "Truy xuất dữ liệu dựa trên một điều kiện chưa biết trước (unknown condition)",
      "Tạo các nhóm dữ liệu",
      "Chuyển đổi dữ liệu sang định dạng khác",
      "Sắp xếp dữ liệu theo thứ tự cụ thể"
    ],
    "c": 0,
    "ex_en": "The ANY operator compares a value to each value returned by a subquery. '< ANY' means less than the maximum value in the subquery set.",
    "ex_vi": "Truy vấn con đóng vai trò tính toán ra giá trị động trung gian để làm điều kiện lọc cho truy vấn chính."
  },
  {
    "id": 168,
    "module": 9,
    "q_en": "What does the '> ALL' operator mean when used with a multiple-row subquery?",
    "o_en": [
      "Greater than the maximum value returned by the subquery.",
      "Greater than the minimum value returned by the subquery.",
      "Equal to all values returned by the subquery.",
      "Less than the maximum value returned by the subquery."
    ],
    "q_vi": "Cho dữ liệu bảng EMPLOYEES. Truy vấn con nào sau đây sẽ KHÔNG HOẠT ĐỘNG (bị lỗi)?",
    "o_vi": [
      "SELECT distinct department_id FROM employees Where salary > ANY (SELECT AVG(salary) FROM employees GROUP BY department_id)",
      "SELECT last_name FROM employees Where salary > ANY (SELECT MAX(salary) FROM employees GROUP BY department_id)",
      "SELECT * FROM employees where salary > (SELECT MIN(salary) FROM employees GROUP BY department_id)",
      "SELECT department_id FROM employees WHERE SALARY > ALL (SELECT AVG(salary) FROM employees GROUP BY department_id)"
    ],
    "c": 2,
    "ex_en": "The ALL operator compares a value to every value returned by a subquery. '> ALL' means greater than the maximum value in the subquery set.",
    "ex_vi": "Truy vấn con (SELECT MIN(salary) ... GROUP BY department_id) trả về nhiều dòng, nhưng truy vấn ngoài lại dùng toán tử so sánh đơn dòng >."
  },
  {
    "id": 169,
    "module": 12,
    "q_en": "Which query correctly retrieves employees who earn the lowest salary in their respective departments?",
    "o_en": [
      "SELECT last_name, salary, department_id FROM employees WHERE (department_id, salary) IN (SELECT department_id, MIN(salary) FROM employees GROUP BY department_id);",
      "SELECT last_name, salary, department_id FROM employees WHERE salary = (SELECT MIN(salary) FROM employees);",
      "SELECT last_name, salary, department_id FROM employees WHERE salary IN (SELECT MIN(salary) FROM employees);",
      "SELECT last_name, salary, department_id FROM employees GROUP BY department_id HAVING salary = MIN(salary);"
    ],
    "q_vi": "Cột giả LEVEL có tác dụng gì trong Oracle?",
    "o_vi": [
      "Chỉ định nút bắt đầu của truy vấn phân cấp",
      "Hiển thị cấp độ (độ sâu) của dòng trong cấu trúc cây phân cấp",
      "Không phương án nào",
      "Căn bằng đầu ra truy vấn"
    ],
    "c": 1,
    "ex_en": "To find employees who earn the minimum salary in their respective departments, use a pairwise multiple-row subquery: WHERE (department_id, salary) IN (SELECT department_id, MIN(salary) FROM employees GROUP BY department_id).",
    "ex_vi": "Cột giả LEVEL trả về giá trị số (1, 2, 3...) tương ứng với thứ tự tầng nút trong truy vấn phân cấp CONNECT BY."
  },
  {
    "id": 170,
    "module": 2,
    "q_en": "You need to display all employees earning more than the average salary of employees in department 60. Which query accomplishes this?",
    "o_en": [
      "SELECT last_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = 60);",
      "SELECT last_name, salary FROM employees WHERE salary > AVG(salary) AND department_id = 60;",
      "SELECT last_name, salary FROM employees HAVING salary > (SELECT AVG(salary) FROM employees WHERE department_id = 60);",
      "SELECT last_name, salary FROM employees WHERE department_id = 60 AND salary > AVG(salary);"
    ],
    "q_vi": "Truy vấn nào hiển thị thông tin nhân viên và người quản lý theo cấu trúc cây TỪ TRÊN XUỐNG (TOP-DOWN), bắt đầu từ nhân viên 'King'?",
    "o_vi": [
      "SELECT employee_id, last_name, job_id, manager_id FROM employees START WITH last_name = 'King' CONNECT BY PRIOR employee_id = manager_id ;",
      "SELECT ... CONNECT BY PRIOR manager_id = employee_id;",
      "SELECT ... CONNECT BY PRIOR employee_id TOP_DOWN;",
      "SELECT ... CONNECT BY TOP_DOWN employee_id = manager_id ;"
    ],
    "c": 0,
    "ex_en": "To find employees earning more than the average salary of department 60, use: SELECT last_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = 60).",
    "ex_vi": "Duyệt cây Top-Down từ sếp đến nhân viên cấp dưới dùng START WITH ... CONNECT BY PRIOR employee_id = manager_id."
  },
  {
    "id": 171,
    "module": 2,
    "q_en": "A subquery that returns exactly one row to the outer query is called a _____?",
    "o_en": [
      "Single-row subquery",
      "Multiple-row subquery",
      "Correlated subquery",
      "Inline view"
    ],
    "q_vi": "Kết quả của câu truy vấn bên dưới là gì?\nSELECT last_name, job_id, salary FROM employees WHERE job_id = (SELECT job_id FROM employees WHERE employee_id = 141) AND salary > (SELECT salary FROM employees WHERE employee_id = 143);",
    "o_vi": [
      "Hiển thị nhân viên có job_id bằng nhân viên 141 hoặc 143...",
      "Hiển thị nhân viên có job_id bằng nhân viên 141 và 143...",
      "Hiển thị nhân viên thỏa điều kiện hoặc...",
      "Hiển thị các nhân viên có cùng job_id với nhân viên 141 VÀ có mức lương LỚN HƠN lương của nhân viên 143"
    ],
    "c": 3,
    "ex_en": "Single-row subqueries return exactly one row and work with scalar comparison operators like =, >, <, <=, >=, <>.",
    "ex_vi": "Mệnh đề WHERE kết hợp 2 truy vấn con đơn dòng bằng toán tử AND."
  },
  {
    "id": 172,
    "module": 9,
    "q_en": "When a subquery is placed in the FROM clause of a SELECT statement, how is it treated by Oracle?",
    "o_en": [
      "As an Inline View",
      "As a Correlated Subquery",
      "As a Table Constraint",
      "As a Index"
    ],
    "q_vi": "Phát biểu nào sau đây về các truy vấn con là ĐÚNG?",
    "o_vi": [
      "Subquery không thể tham chiếu đến bảng không có ở FROM ngoài",
      "Subquery bắt buộc phải nằm bên phải toán tử so sánh",
      "Các truy vấn con có thể trả về nhiều cột (multiple columns)",
      "Subquery không thể lồng quá 3 cấp"
    ],
    "c": 2,
    "ex_en": "Subqueries in the FROM clause are evaluated first to construct temporary inline view tables for the outer query.",
    "ex_vi": "Truy vấn con đa cột (Multiple-column subquery) cho phép chọn nhiều cột đồng thời, ví dụ: WHERE (col1, col2) IN (SELECT c1, c2 FROM...)."
  },
  {
    "id": 173,
    "module": 9,
    "q_en": "What is another term for a subquery used in the FROM clause of a SELECT query?",
    "o_en": [
      "Inline View",
      "Scalar Subquery",
      "Nested View",
      "Materialized View"
    ],
    "q_vi": "Toán tử nào sau đây KHÔNG phải là toán tử so sánh đa dòng (Multiple-row comparison operator)?",
    "o_vi": [
      "ANY",
      "IN",
      "EACH",
      "ALL"
    ],
    "c": 2,
    "ex_en": "An inline view is a subquery written directly in the FROM clause of a SELECT statement.",
    "ex_vi": "Trong SQL chỉ có các toán tử so sánh tập hợp đa dòng gồm: IN, ANY (hoặc SOME), và ALL. \"EACH\" không phải toán tử SQL."
  },
  {
    "id": 174,
    "module": 9,
    "q_en": "How must a subquery be formatted in SQL syntax?",
    "o_en": [
      "Enclosed within parentheses",
      "Enclosed within square brackets",
      "Enclosed within curly braces",
      "Placed after an ORDER BY clause"
    ],
    "q_vi": "Xét câu lệnh: SELECT product_id, product_name, price FROM product WHERE supplier_id IN (SELECT supplier_id FROM product WHERE price > 120 OR qty_in_stock > 100);. Giá trị nào sẽ được hiển thị?",
    "o_vi": [
      "Các sản phẩm có giá > 120 hoặc tồn kho > 100",
      "Các sản phẩm có giá > 120 và tồn kho > 100",
      "PRODUCT_ID, PRODUCT_NAME, và PRICE của các sản phẩm được cung cấp bởi nhà cung cấp CÓ bán sản phẩm giá > $120.00 HOẶC có tồn kho > 100",
      "Sản phẩm giá > 120 hoặc tồn kho < 100"
    ],
    "c": 2,
    "ex_en": "Subqueries must be enclosed within parentheses to establish evaluation precedence.",
    "ex_vi": "Truy vấn con lọc các supplier_id thỏa điều kiện giá hoặc tồn kho, truy vấn ngoài lấy tất cả sản phẩm thuộc các nhà cung cấp đó."
  },
  {
    "id": 175,
    "module": 9,
    "q_en": "What is the result of a single-row subquery that returns no rows?",
    "o_en": [
      "NULL",
      "0",
      "Error: ORA-01427",
      "Empty String"
    ],
    "q_vi": "Truy vấn con (Subquery) có thể được sử dụng để làm gì?",
    "o_vi": [
      "Sắp xếp dữ liệu theo thứ tự",
      "Tạo các nhóm dữ liệu",
      "Truy xuất dữ liệu dựa trên một điều kiện chưa biết trước (Retrieve data based on an unknown condition)",
      "Chuyển đổi dữ liệu"
    ],
    "c": 2,
    "ex_en": "If a single-row subquery returns no rows (0 rows), the outer query receives NULL as the subquery result.",
    "ex_vi": "Tương tự câu 167, Subquery giúp xác định động các giá trị điều kiện phục vụ truy vấn chính."
  },
  {
    "id": 176,
    "module": 9,
    "q_en": "Which type of subquery compares more than one column between the main query and the subquery?",
    "o_en": [
      "Multiple-column subquery",
      "Single-row subquery",
      "Scalar subquery",
      "Correlated subquery"
    ],
    "q_vi": "Phát biểu nào sau đây về truy vấn con là KHÔNG đúng?",
    "o_vi": [
      "Một truy vấn con đơn dòng chỉ có thể truy xuất duy nhất 1 cột và 1 dòng",
      "Truy vấn con đa dòng có thể trả về nhiều dòng và nhiều cột",
      "Có thể so sánh truy vấn con đa dòng bằng toán tử \">\"",
      "Truy vấn con đơn dòng có thể lấy 1 dòng nhưng nhiều cột"
    ],
    "c": 0,
    "ex_en": "Multiple-column subqueries compare two or more columns simultaneously against subquery results, using pairwise or non-pairwise syntax.",
    "ex_vi": "Truy vấn con đơn dòng (Single-row subquery) được định nghĩa là trả về duy nhất 1 dòng, nhưng dòng đó có thể chứa nhiều cột."
  },
  {
    "id": 177,
    "module": 9,
    "q_en": "Which multiple-row comparison operator checks if a value matches any value in a list returned by a subquery?",
    "o_en": [
      "IN",
      "ALL",
      "EXISTS",
      "LIKE"
    ],
    "q_vi": "Bạn định nghĩa một truy vấn con đa dòng ở mệnh đề WHERE với toán tử so sánh \"=\". Điều gì xảy ra khi chạy câu truy vấn chính?",
    "o_vi": [
      "Truy vấn chính sẽ THẤT BẠI vì truy vấn con đa dòng không thể dùng với toán tử so sánh đơn dòng",
      "Chạy với giá trị cuối cùng",
      "Chạy với tất cả giá trị",
      "Chạy với giá trị đầu tiên"
    ],
    "c": 0,
    "ex_en": "The IN operator checks whether a candidate value matches any value in a subquery list or explicit set of values.",
    "ex_vi": "Báo lỗi ORA-01427: single-row subquery returns more than one row do xung đột giữa toán tử đơn dòng = và tập kết quả nhiều dòng."
  },
  {
    "id": 178,
    "module": 9,
    "q_en": "Can a SQL query contain multiple subqueries across different clauses?",
    "o_en": [
      "Yes, subqueries can be placed in SELECT, FROM, WHERE, and HAVING clauses.",
      "No, only one subquery is permitted per SELECT statement.",
      "No, subqueries are restricted exclusively to WHERE clauses.",
      "Yes, but only if they are all single-row subqueries."
    ],
    "q_vi": "Toán tử nào sau đây có thể sử dụng với một truy vấn con đa dòng (Multiple-row subquery)?",
    "o_vi": [
      "LIKE",
      "=",
      "NOT IN",
      "BETWEEN"
    ],
    "c": 2,
    "ex_en": "An outer query can contain multiple subqueries across different clauses (e.g., SELECT, FROM, WHERE, HAVING).",
    "ex_vi": "NOT IN (cùng với IN, ANY, ALL) là toán tử chuyên dụng làm việc với tập kết quả đa dòng."
  },
  {
    "id": 179,
    "module": 9,
    "q_en": "Nesting a subquery inside another subquery is known as _____?",
    "o_en": [
      "Subquery Nesting",
      "Correlated Joining",
      "Recursive Querying",
      "View Cascading"
    ],
    "q_vi": "Phát biểu nào sau đây về các truy vấn con là ĐÚNG?",
    "o_vi": [
      "Truy vấn con đơn dòng chỉ lấy dữ liệu từ 1 bảng",
      "Truy vấn con đơn dòng không thể dùng toán tử LIKE",
      "Một câu lệnh SQL không thể hiển thị dữ liệu từ bảng B chỉ được tham chiếu trong truy vấn con của nó (mà không khai báo B ở mệnh đề FROM chính)",
      "Câu lệnh SQL có thể hiển thị cột từ bảng B nằm trong subquery mà không khai báo B ở FROM"
    ],
    "c": 2,
    "ex_en": "Nesting subqueries allows an inner query to feed its output directly into an enclosing subquery up to maximum system limit levels.",
    "ex_vi": "Mệnh đề SELECT của truy vấn ngoài chỉ có quyền truy cập và hiển thị các cột thuộc các bảng được khai báo tại mệnh đề FROM của truy vấn ngoài."
  },
  {
    "id": 180,
    "module": 9,
    "q_en": "Which operator tests for the presence of rows returned by a subquery?",
    "o_en": [
      "EXISTS",
      "IN",
      "ANY",
      "ALL"
    ],
    "q_vi": "Cho hai bảng EMPLOYEES và NEW_EMPLOYEES. Câu lệnh DELETE nào sau đây là HỢP LỆ?",
    "o_vi": [
      "DELETE FROM employees WHERE employee_id IN (SELECT employee_id FROM new_employees WHERE name = 'Carrey');",
      "DELETE FROM employees WHERE employee_id = (SELECT employee_id FROM employees);",
      "DELETE * FROM employees WHERE...",
      "DELETE * FROM employees..."
    ],
    "c": 0,
    "ex_en": "The EXISTS operator checks for the presence or existence of rows returned by a subquery, returning TRUE as soon as a matching row is found.",
    "ex_vi": "Cú pháp xóa hợp lệ sử dụng Subquery để lọc các employee_id thỏa điều kiện từ bảng khác."
  },
  {
    "id": 181,
    "module": 10,
    "q_en": "Which statement best describes a Correlated Subquery?",
    "o_en": [
      "A subquery that references columns from the outer query and executes once for each candidate row processed by the outer query.",
      "A subquery that executes once before the outer query completes and passes its result to the outer query.",
      "A subquery that returns a single scalar value to a WHERE clause.",
      "A subquery defined in the FROM clause using an inline view."
    ],
    "q_vi": "Phát biểu nào sau đây về Truy vấn con là KHÔNG hợp lệ?",
    "o_vi": [
      "Truy vấn con (truy vấn trong) trả về giá trị được sử dụng bởi câu lệnh cha",
      "Truy vấn con là câu lệnh SELECT được lồng bên trong một mệnh đề của câu lệnh SQL khác",
      "Lồng subquery tương đương thực hiện 2 truy vấn nối tiếp nhau",
      "Câu lệnh bên ngoài (Outer query) luôn được thực thi trước, sau đó mới đến truy vấn con bên trong"
    ],
    "c": 3,
    "ex_en": "A correlated subquery references columns from the candidate row of the outer main query and evaluates once for each row processed by the outer query.",
    "ex_vi": "Trong các subquery thông thường (không tương quan), truy vấn con bên trong (Inner query) sẽ thực thi trước để trả kết quả cho câu lệnh cha bên ngoài."
  },
  {
    "id": 182,
    "module": 10,
    "q_en": "How does Oracle execute a Correlated Subquery?",
    "o_en": [
      "For each candidate row selected by the outer query, the inner subquery is executed using the candidate row's value.",
      "The inner subquery is executed once initially, and its results are stored in memory for the outer query.",
      "Both inner and outer queries execute completely independently in parallel.",
      "The outer query executes after the inner subquery returns its entire result set."
    ],
    "q_vi": "Loại truy vấn con nào được sử dụng trong câu lệnh SQL bên dưới?\nSELECT employee_id, last_name, (CASE WHEN department_id = (SELECT department_id FROM departments WHERE location_id = 1800) THEN 'Canada' ELSE 'USA' END) location FROM employees;",
    "o_vi": [
      "Pair-wise comparison sub-query",
      "Correlated sub query",
      "Inline sub query",
      "Scalar Sub query (Truy vấn con vô hướng)"
    ],
    "c": 3,
    "ex_en": "Correlated subqueries execute iteratively: for each row candidate considered by the outer query, the inner subquery executes using that candidate row's value.",
    "ex_vi": "Truy vấn con đặt trong biểu thức CASE trả về đúng 1 ô giá trị duy nhất (1 dòng, 1 cột) được gọi là Scalar Subquery."
  },
  {
    "id": 183,
    "module": 10,
    "q_en": "What is the primary benefit of using the EXISTS operator with a correlated subquery?",
    "o_en": [
      "It stops processing as soon as a matching row is found in the subquery, improving query execution efficiency.",
      "It converts NULL values to zeros before processing.",
      "It automatically sorts the result set in ascending order.",
      "It forces Oracle to perform a full table scan."
    ],
    "q_vi": "Phát biểu nào sau đây KHÔNG đúng về Truy vấn con tương quan (Correlated sub Queries)?",
    "o_vi": [
      "Được thực thi một lần cho mỗi dòng được xử lý bởi câu lệnh cha",
      "Câu lệnh cha có thể là SELECT, UPDATE, hoặc DELETE",
      "Truy vấn con tương quan CHỈ ĐƯỢC THỰC THI 1 LẦN duy nhất cho toàn bộ câu lệnh cha",
      "Thực hiện khi subquery tham chiếu đến một cột của bảng ở câu lệnh cha"
    ],
    "c": 2,
    "ex_en": "The EXISTS operator evaluates whether a subquery returns at least one row, stopping evaluation as soon as a match is found without reading full sets.",
    "ex_vi": "Khác với subquery độc lập, Correlated Subquery phải thực thi lặp đi lặp lại tương ứng với MỖI dòng mà câu lệnh cha duyệt qua."
  },
  {
    "id": 184,
    "module": 10,
    "q_en": "Which statement is true regarding the NOT EXISTS operator?",
    "o_en": [
      "It tests whether a subquery returns no rows, returning TRUE if zero rows match.",
      "It fails if any subquery row contains a NULL value.",
      "It requires single-row comparison operators like = or >.",
      "It forces the inner query to evaluate after the ORDER BY clause."
    ],
    "q_vi": "Loại truy vấn con nào được sử dụng trong câu lệnh SQL bên dưới?\nSELECT employee_id, last_name FROM employees e ORDER BY (SELECT department_name FROM departments d WHERE e.department_id = d.department_id);",
    "o_vi": [
      "Pair-wise comparison sub-query",
      "Correlated sub query (Truy vấn con tương quan)",
      "Inline sub query",
      "Non-pair wise comparison query"
    ],
    "c": 1,
    "ex_en": "The NOT EXISTS operator returns TRUE if the subquery returns no rows, making it ideal for finding records in table A that have no corresponding record in table B.",
    "ex_vi": "Truy vấn con nằm ở ORDER BY tham chiếu đến cột e.department_id của bảng employees e ở truy vấn ngoài, do đó đây là Correlated Subquery."
  },
  {
    "id": 185,
    "module": 10,
    "q_en": "Correlated subqueries can be used in which of the following DML statements?",
    "o_en": [
      "Both UPDATE and DELETE statements",
      "Only SELECT statements",
      "Only UPDATE statements",
      "Only INSERT statements"
    ],
    "q_vi": "Toán tử EXISTS trả về giá trị gì khi truy vấn con bên trong KHÔNG chọn ra bản ghi nào?",
    "o_vi": [
      "0",
      "FALSE",
      "TRUE",
      "NULL"
    ],
    "c": 1,
    "ex_en": "Correlated UPDATE queries use outer table aliases inside the inner SELECT subquery to update candidate rows selectively.",
    "ex_vi": "EXISTS kiểm tra sự tồn tại: Nếu subquery trả về từ 1 dòng trở lên -> TRUE; nếu trả về 0 dòng -> FALSE."
  },
  {
    "id": 186,
    "module": 10,
    "q_en": "Which query deletes all departments that currently have no employees assigned to them?",
    "o_en": [
      "DELETE FROM departments d WHERE NOT EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id);",
      "DELETE FROM departments WHERE department_id = NULL;",
      "DELETE FROM departments d WHERE EXISTS (SELECT 1 FROM employees e WHERE e.department_id = d.department_id);",
      "DELETE FROM departments WHERE department_id NOT IN (SELECT department_id FROM employees);"
    ],
    "q_vi": "Kết quả của câu truy vấn bên dưới là gì?\nSELECT employee_id, last_name, job_id, department_id FROM employees outer WHERE EXISTS (SELECT 'X' FROM employees WHERE manager_id = outer.employee_id);",
    "o_vi": [
      "Hiển thị nhân viên có cấp dưới tên 'X'",
      "Hiển thị các nhân viên CÓ ÍT NHẤT MỘT NGƯỜI BÁO CÁO (cấp dưới) cho họ",
      "Hiển thị nhân viên có người quản lý",
      "Hiển thị nhân viên có mã 'X'"
    ],
    "c": 1,
    "ex_en": "Correlated DELETE queries allow removing rows from a table based on conditions evaluated against another table using correlated references.",
    "ex_vi": "Truy vấn kiểm tra nếu employee_id của nhân viên hiện tại xuất hiện ở vị trí manager_id của bất kỳ ai khác -> Nhân viên đó là Trưởng phòng/Manager."
  },
  {
    "id": 187,
    "module": 10,
    "q_en": "What is the purpose of the WITH clause (Subquery Factoring) in SQL?",
    "o_en": [
      "To define temporary named query blocks (CTEs) at the start of a statement to reuse results and improve readability.",
      "To grant user permissions on subquery views.",
      "To enforce primary key constraints on inline views.",
      "To physically persist temporary table data on disk storage."
    ],
    "q_vi": "Câu truy vấn nào sau đây hiển thị tất cả các phòng ban KHÔNG CÓ nhân viên nào?",
    "o_vi": [
      "SELECT department_id, department_name FROM departments d WHERE NOT EXISTS (SELECT 'X' FROM employees WHERE department_id = d.department_id);",
      "SELECT ... WHERE EXISTS (...)",
      "SELECT ... WHERE NOT EXISTS (SELECT 'X' FROM employees WHERE department_id = department_id);",
      "SELECT ... WHERE EXISTS (...)"
    ],
    "c": 0,
    "ex_en": "WITH clause (Common Table Expression / CTE) defines temporary named subqueries at the beginning of a statement to improve readability and performance.",
    "ex_vi": "Mệnh đề NOT EXISTS kiểm tra nếu subquery tìm kiếm nhân viên thuộc phòng ban d.department_id trả về rỗng."
  },
  {
    "id": 188,
    "module": 10,
    "q_en": "A subquery that returns exactly one row and one column (a single value) is specifically termed a _____?",
    "o_en": [
      "Scalar Subquery",
      "Correlated Subquery",
      "Inline Subquery",
      "Composite Subquery"
    ],
    "q_vi": "Xét câu lệnh UPDATE bên dưới, đây là loại cập nhật nào?\nUPDATE employees e SET department_name = (SELECT department_name FROM departments d WHERE e.department_id = d.department_id);",
    "o_vi": [
      "Inline Update",
      "Correlated Update (Cập nhật tương quan)",
      "Direct Update",
      "Indirect Update"
    ],
    "c": 1,
    "ex_en": "Scalar subqueries are subqueries that return exactly one column and one row (a single scalar value).",
    "ex_vi": "Phép UPDATE sử dụng truy vấn con có liên kết điều kiện (e.department_id = d.department_id) với bảng đang được cập nhật."
  },
  {
    "id": 189,
    "module": 10,
    "q_en": "Where can a Scalar Subquery be used in an Oracle SQL statement?",
    "o_en": [
      "In most places where an expression or literal value is valid, including SELECT lists, WHERE clauses, and CASE expressions.",
      "Exclusively in the WHERE clause.",
      "Exclusively in the GROUP BY clause.",
      "Only inside the VALUES clause of an INSERT statement."
    ],
    "q_vi": "Câu lệnh nào sử dụng truy vấn con tương quan để XÓA các dòng khỏi bảng EMPLOYEES mà các dòng đó cũng có mặt trong bảng EMP_HISTORY?",
    "o_vi": [
      "DELETE FROM employees E WHERE employee_id IN (...);",
      "DELETE FROM employees E WHERE employee_id = (SELECT employee_id FROM emp_history WHERE employee_id = E.employee_id);",
      "DELETE FROM employees E WHERE employee_id IN (SELECT employee_id FROM emp_history H)",
      "DELETE FROM employees E , emp_history H WHERE E.employee_id = H. employee_id;"
    ],
    "c": 1,
    "ex_en": "A scalar subquery can be used anywhere a literal constant or expression is valid in SQL, including SELECT lists, WHERE, and CASE expressions.",
    "ex_vi": "Lệnh DELETE sử dụng điều kiện so sánh tương quan WHERE employee_id = E.employee_id."
  },
  {
    "id": 190,
    "module": 11,
    "q_en": "In which SQL statement clauses can a Correlated Subquery appear?",
    "o_en": [
      "WHERE, HAVING, SELECT, UPDATE, and DELETE clauses",
      "Only WHERE and HAVING clauses",
      "Only FROM and GROUP BY clauses",
      "Only ORDER BY clauses"
    ],
    "q_vi": "Phát biểu nào sau đây KHÔNG đúng về việc sử dụng mệnh đề WITH?",
    "o_vi": [
      "Định nghĩa khối truy vấn trước khi dùng",
      "Được gọi là subquery_factoring_clause",
      "Tái sử dụng cùng một khối truy vấn nhiều lần trong câu lệnh phức tạp",
      "Mệnh đề WITH khác Inline View ở chỗ nó có thể TẠO CÁC VIEW VĨNH VIỄN và tái sử dụng lâu dài"
    ],
    "c": 3,
    "ex_en": "Correlated subqueries can be used in SELECT, WHERE, HAVING, UPDATE, and DELETE statements.",
    "ex_vi": "Mệnh đề WITH chỉ tạo ra các tập kết quả tạm thời trong phạm vi thực thi của duy nhất câu lệnh SQL đó, không tạo đối tượng View vĩnh viễn trong CSDL."
  },
  {
    "id": 191,
    "module": 10,
    "q_en": "How does the WITH clause differ from a standard nested subquery?",
    "o_en": [
      "It defines named subquery blocks before the main query executes, allowing them to be referenced multiple times without repeating code.",
      "It creates permanent database tables in the user's schema.",
      "It bypasses query execution and returns cached data.",
      "It cannot be used with aggregate functions like SUM or AVG."
    ],
    "q_vi": "Khi nào việc sử dụng mệnh đề WITH mang lại hiệu quả cao nhất?",
    "o_vi": [
      "Khi truy vấn có nhiều bảng cần nối",
      "Khi dùng Inline Subquery ở FROM",
      "Khi câu truy vấn có NHIỀU THAM CHIẾU đến CÙNG MỘT KHỐI TRUY VẤN và có chứa các phép nối cùng hàm tập hợp",
      "Dùng thay cho Correlated subquery"
    ],
    "c": 2,
    "ex_en": "The WITH clause simplifies complex queries by defining reusable query blocks (CTEs) executed before the main SELECT query.",
    "ex_vi": "WITH giúp tính toán khối truy vấn phức tạp 1 lần, lưu vào bộ đệm tạm thời để các nhánh truy vấn sau truy cập lại mà không phải tính lại."
  },
  {
    "id": 192,
    "module": 10,
    "q_en": "Why can the NOT IN operator produce zero results when evaluated against a subquery containing NULL values?",
    "o_en": [
      "Because comparing any value to NULL using NOT IN evaluates to UNKNOWN/FALSE, causing the outer query condition to fail for all rows.",
      "Because NULL values cause an immediate compilation syntax error.",
      "Because NOT IN automatically converts NULL to 0.",
      "Because NOT IN converts NULL values to string spaces."
    ],
    "q_vi": "Trường hợp nào sau đây là một cách sử dụng HỢP LỆ của truy vấn con (Sub-query)?",
    "o_vi": [
      "Định nghĩa tập các dòng để chèn trong INSERT hoặc CREATE TABLE",
      "Cung cấp giá trị điều kiện cho các mệnh đề WHERE, HAVING, START WITH",
      "Tất cả các trường hợp trên",
      "Gán giá trị cập nhật cho các dòng trong câu lệnh UPDATE"
    ],
    "c": 2,
    "ex_en": "When evaluating NOT IN with a subquery containing NULL values, the truth value evaluates to UNKNOWN/FALSE for all rows, returning 0 rows.",
    "ex_vi": "Truy vấn con linh hoạt xuất hiện trong các câu lệnh DML (INSERT, UPDATE), DDL (CREATE TABLE AS), và các mệnh đề lọc dữ liệu."
  },
  {
    "id": 193,
    "module": 10,
    "q_en": "Why is EXISTS safer than IN when subquery results might contain NULL values?",
    "o_en": [
      "Because EXISTS evaluates row presence (TRUE/FALSE) without comparing column values against NULLs.",
      "Because EXISTS replaces NULLs with empty strings automatically.",
      "Because EXISTS ignores primary key constraints.",
      "Because EXISTS converts NULLs into zero values."
    ],
    "q_vi": "Điều nào sau đây KHÔNG phải là lợi ích của việc sử dụng mệnh đề WITH?",
    "o_vi": [
      "Tự động sắp xếp kết quả đầu ra của câu truy vấn (Automatically sorts the output)",
      "Chỉ đánh giá khối truy vấn 1 lần dù xuất hiện nhiều lần",
      "Tăng hiệu năng thực thi",
      "Giúp câu truy vấn dễ đọc hơn"
    ],
    "c": 0,
    "ex_en": "The EXISTS predicate tests only for row existence and does not fail or get blocked by NULL values in the subquery result columns.",
    "ex_vi": "Mệnh đề WITH không tự động thực hiện việc sắp xếp dữ liệu trả về ngoại trừ khi bạn chủ động thêm mệnh đề ORDER BY."
  },
  {
    "id": 194,
    "module": 9,
    "q_en": "What creates the correlation in a Correlated Subquery?",
    "o_en": [
      "A column reference in the inner subquery that points to a column in the outer query table.",
      "Using the GROUP BY clause inside the inner subquery.",
      "Using the ORDER BY clause in the outer query.",
      "Using the UNION operator between two queries."
    ],
    "q_vi": "Xác định toán tử KHÁC BIỆT nhất so với các toán tử còn lại khi dùng kèm với Truy vấn con:",
    "o_vi": [
      "=",
      "ANY",
      "ALL",
      "IN"
    ],
    "c": 0,
    "ex_en": "Correlated subqueries reference outer query columns, creating a execution dependency where inner execution depends on each outer row.",
    "ex_vi": "= là toán tử so sánh ĐƠN DÒNG (Single-row operator), trong khi ANY, ALL, IN là các toán tử so sánh ĐA DÒNG (Multiple-row operators)."
  },
  {
    "id": 195,
    "module": 9,
    "q_en": "Can an Inline View contain subqueries within its own definition?",
    "o_en": [
      "Yes, an inline view can contain subqueries and complex join logic within its inner SELECT statement.",
      "No, inline views must strictly select from single physical tables without subqueries.",
      "No, inline views cannot contain aggregate functions or subqueries.",
      "Yes, but only if the inner subquery returns exactly one scalar value."
    ],
    "q_vi": "Câu truy vấn nào hiển thị thông tin tất cả nhân viên có mức lương THẤP HƠN mức lương trung bình của toàn công ty?",
    "o_vi": [
      "SELECT last_name, job_id, salary FROM employees WHERE salary < (SELECT AVG(salary) FROM employees GROUP BY Department_id);",
      "SELECT ... HAVING salary < ...",
      "SELECT ... WHERE salary ANY ...",
      "SELECT last_name, job_id, salary FROM employees WHERE salary < (SELECT AVG(salary) FROM employees);"
    ],
    "c": 3,
    "ex_en": "Inline views defined in the FROM clause can contain correlated or uncorrelated subquery logic to create dynamic source tables.",
    "ex_vi": "Subquery (SELECT AVG(salary) FROM employees) tính lương trung bình toàn công ty (không GROUP BY), truy vấn ngoài so sánh salary < (...)."
  },
  {
    "id": 196,
    "module": 9,
    "q_en": "Which correlated query finds employees earning more than the average salary of their own department?",
    "o_en": [
      "SELECT e.last_name, e.salary, e.department_id FROM employees e WHERE e.salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);",
      "SELECT last_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
      "SELECT last_name, salary FROM employees GROUP BY department_id HAVING salary > AVG(salary);",
      "SELECT last_name, salary FROM employees WHERE salary > AVG(salary);"
    ],
    "q_vi": "Truy vấn con đa cột (Multicolumn sub query) là gì?",
    "o_vi": [
      "Không có subquery đa cột, chỉ có đa dòng",
      "Một truy vấn con chọn ra từ HAI CỘT TRỞ LÊN được gọi là truy vấn con đa cột",
      "Subquery dùng toán tử đơn dòng",
      "Subquery dùng DECODE"
    ],
    "c": 1,
    "ex_en": "To find employees whose salary is above the average salary of their own department, use a correlated subquery: WHERE salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id).",
    "ex_vi": "Multicolumn Subquery trả về nhiều hơn một cột trong danh sách SELECT để so sánh đồng thời với bộ nhiều cột ở câu lệnh cha."
  },
  {
    "id": 197,
    "module": 9,
    "q_en": "What error is raised if a scalar subquery in a SELECT list unexpectedly returns multiple rows at runtime?",
    "o_en": [
      "ORA-01427: single-row subquery returns more than one row",
      "ORA-00942: table or view does not exist",
      "ORA-00904: invalid identifier",
      "ORA-01722: invalid number"
    ],
    "q_vi": "Kết quả của câu truy vấn con đa cột bên dưới là gì?\nSELECT employee_id, manager_id, department_id FROM employees WHERE (manager_id, department_id) IN (SELECT manager_id, department_id FROM employees WHERE employee_id IN (178, 174));",
    "o_vi": [
      "Hiển thị nhân viên có CẢ người quản lý VÀ phòng ban trùng với người quản lý và phòng ban của nhân viên 178 HOẶC 174 (Pairwise matching)",
      "Khớp với cả 178 và 174",
      "So sánh rời rạc",
      "Trả về lỗi"
    ],
    "c": 0,
    "ex_en": "Scalar subqueries returning more than one row raise the runtime error 'ORA-01427: single-row subquery returns more than one row'.",
    "ex_vi": "Đây là So sánh ghép cặp (Pairwise comparison): Cả cặp (manager_id, department_id) phải khớp đồng thời với cặp tương ứng của nhân viên 178 hoặc 174."
  },
  {
    "id": 198,
    "module": 9,
    "q_en": "How does Subquery Factoring (WITH clause) optimize query performance in Oracle?",
    "o_en": [
      "Oracle can materialize the WITH subquery result once as a temporary table and reuse it across multiple references in the main query.",
      "It disables table indexes to speed up full table scans.",
      "It forces all subqueries to run on disk storage instead of RAM.",
      "It bypasses data dictionary validation."
    ],
    "q_vi": "Kết quả của câu truy vấn con đa cột bên dưới là gì?\nSELECT employee_id, manager_id, department_id FROM employees WHERE manager_id IN (SELECT manager_id FROM employees WHERE employee_id IN (174, 141)) AND department_id IN (SELECT department_id FROM employees WHERE employee_id IN (174, 141)) AND employee_id NOT IN (174, 141);",
    "o_vi": [
      "Khớp đồng thời theo cặp",
      "Báo lỗi",
      "Khớp đồng thời cả 2",
      "Hiển thị nhân viên có manager_id thuộc tập manager của (174, 141) VÀ department_id thuộc tập department của (174, 141) (Non-pairwise matching)"
    ],
    "c": 3,
    "ex_en": "Subquery factoring using the WITH clause improves execution efficiency when a subquery block is referenced multiple times in the main statement.",
    "ex_vi": "Đây là So sánh không ghép cặp (Non-pairwise comparison): manager_id và department_id được xét độc lập thông qua 2 truy vấn con riêng biệt."
  },
  {
    "id": 199,
    "module": 11,
    "q_en": "What value does the EXISTS operator return when the inner subquery returns zero matching rows?",
    "o_en": [
      "FALSE",
      "TRUE",
      "NULL",
      "UNKNOWN"
    ],
    "q_vi": "Điều nào sau đây KHÔNG đúng về Inline Sub Queries?",
    "o_vi": [
      "Định nghĩa nguồn dữ liệu cho riêng câu lệnh SELECT đó",
      "Được gọi là một Inline View",
      "Bảng ảo (Inline view) được tạo ra có thể TÁI SỬ DỤNG LẠI sau đó bởi các câu truy vấn khác",
      "Sử dụng ở mệnh đề FROM tương tự như cách dùng bảng/view"
    ],
    "c": 2,
    "ex_en": "The EXISTS operator evaluates to TRUE if the inner subquery returns one or more rows, and FALSE if zero rows are returned.",
    "ex_vi": "Inline View chỉ tồn tại tạm thời trong bộ nhớ trong quá trình thực thi câu truy vấn chứa nó, không thể tái sử dụng cho các câu truy vấn khác."
  },
  {
    "id": 200,
    "module": 9,
    "q_en": "Can a Correlated Subquery be used in the SET clause of an UPDATE statement?",
    "o_en": [
      "Yes, to dynamically update a column based on calculated values from a related table for each modified row.",
      "No, correlated subqueries are prohibited in UPDATE statements.",
      "No, UPDATE statements only accept static literal constants.",
      "Yes, but only if no WHERE clause is used in the UPDATE statement."
    ],
    "q_vi": "Điều nào sau đây KHÔNG đúng về Truy vấn con vô hướng (Scalar sub queries)?",
    "o_vi": [
      "Truy vấn con nhiều cột viết để so sánh 2 hay nhiều cột dùng WHERE phức hợp KHÔNG ĐƯỢC COI là scalar sub query",
      "Giá trị của biểu thức scalar subquery là giá trị của cột chọn ra",
      "Nếu subquery trả về 0 dòng, giá trị biểu thức là NULL",
      "Truy vấn con trả về chính xác 1 giá trị cột từ 1 dòng gọi là scalar subquery"
    ],
    "c": 0,
    "ex_en": "Correlated subqueries can be used inside UPDATE statements to set column values dynamically based on matching criteria from related tables.",
    "ex_vi": "Đáp án A bị sai về định nghĩa. Scalar Subquery được định nghĩa nghiêm ngặt là truy vấn con trả về đúng 1 dòng và 1 cột (1 giá trị ô duy nhất)."
  },
  {
    "id": 201,
    "module": 10,
    "q_en": "What is a View in a relational database?",
    "o_en": [
      "A logical or virtual table defined by a SELECT query that does not physically store data itself.",
      "A physical copy of a base table stored in a separate tablespace.",
      "A temporary index created on a primary key column.",
      "A transaction control backup file."
    ],
    "q_vi": "Trong kịch bản nào thì Phân tích TOP-N (TOP N analysis) là giải pháp tốt nhất?",
    "o_vi": [
      "Xác định người có lương cao nhất",
      "Tìm manager quản lý nhiều nhân viên nhất",
      "Xếp hạng BA ĐẠI DIỆN BÁN HÀNG xuất sắc nhất có doanh số cao nhất",
      "Xác định nhân viên thâm niên nhất"
    ],
    "c": 2,
    "ex_en": "A View is a logical, virtual table defined by a SQL query. It does not physically store data rows itself (except materialized views).",
    "ex_vi": "TOP-N Analysis dùng để lấy ra nhóm  bản ghi đầu bảng xếp hạng (ví dụ: Top 3 đại diện bán hàng xuất sắc)."
  },
  {
    "id": 202,
    "module": 11,
    "q_en": "Which statement best defines a Simple View?",
    "o_en": [
      "A view based on only one table that contains no group functions, GROUP BY clauses, or DISTINCT keywords.",
      "A view based on multiple tables joined together.",
      "A view that contains aggregate functions like SUM or AVG.",
      "A view that is read-only and cannot be queried."
    ],
    "q_vi": "Xét cấu trúc View EMP_DEPT_VU. Câu lệnh SQL nào sau đây sẽ BÁO LỖI?",
    "o_vi": [
      "SELECT * FROM emp_dept_vu;",
      "SELECT department_id, SUM(salary) FROM emp_dept_vu GROUP BY department_id;",
      "SELECT department_id, job_id, AVG(salary) FROM emp_dept_vu GROUP BY department_id, job_id;",
      "KHÔNG CÓ câu lệnh nào bị lỗi; tất cả đều hợp lệ"
    ],
    "c": 3,
    "ex_en": "A Simple View is built on a single base table, contains no functions or GROUP BY clauses, and permits DML operations directly.",
    "ex_vi": "View EMP_DEPT_VU chứa các cột dữ liệu thô, do đó người dùng có thể thực hiện truy vấn SELECT, gom nhóm GROUP BY và dùng hàm tập hợp bình thường."
  },
  {
    "id": 203,
    "module": 11,
    "q_en": "Which statement best defines a Complex View?",
    "o_en": [
      "A view that derives data from multiple tables, or contains group functions, GROUP BY, or DISTINCT clauses.",
      "A view created on a single table without functions or joins.",
      "A view that cannot be dropped once created.",
      "A view that physically allocates data blocks on disk storage."
    ],
    "q_vi": "Câu lệnh SQL nào dùng để XÓA bỏ một View có tên EMP_DEPT_VU khỏi lược đồ của bạn?",
    "o_vi": [
      "REMOVE emp_dept_vu;",
      "DELETE emp_dept_vu;",
      "DROP emp_dept_vu",
      "DROP VIEW emp_dept_vu;"
    ],
    "c": 3,
    "ex_en": "A Complex View derives data from multiple tables, or contains group functions, GROUP BY, DISTINCT, or pseudocolumns, restricting direct DML updates.",
    "ex_vi": "Lệnh DDL để xóa đối tượng View khỏi từ điển dữ liệu là DROP VIEW ;."
  },
  {
    "id": 204,
    "module": 11,
    "q_en": "What is the effect of the WITH CHECK OPTION clause in a CREATE VIEW statement?",
    "o_en": [
      "It ensures that DML operations performed through the view cannot create or update rows that would not be visible through the view's query filter.",
      "It prevents users from selecting data from the view.",
      "It disables all constraints on underlying base tables.",
      "It forces the view to be stored as a physical table."
    ],
    "q_vi": "Phân tích Top N (Top N analysis) yêu cầu thành phần nào?",
    "o_vi": [
      "Chỉ cần một inline view",
      "Sử dụng cột giả ROWNUM (The use of ROWNUM pseudo column)",
      "Sử dụng ROWID",
      "Mệnh đề GROUP BY"
    ],
    "c": 1,
    "ex_en": "The WITH CHECK OPTION clause prevents DML modifications (INSERT/UPDATE) on a view that produce rows not visible through the view's query filter.",
    "ex_vi": "Phân tích Top-N yêu cầu sắp xếp dữ liệu ở Inline View trước, sau đó dùng điều kiện WHERE ROWNUM <= N ở truy vấn ngoài để lấy ra  bản ghi đầu."
  },
  {
    "id": 205,
    "module": 11,
    "q_en": "What is the effect of the WITH READ ONLY clause in a CREATE VIEW statement?",
    "o_en": [
      "It prevents any DML operations (INSERT, UPDATE, DELETE) from being performed through the view.",
      "It allows SELECT operations only for the SYS user.",
      "It prevents users from executing SELECT queries against the view.",
      "It automatically drops the view after 24 hours."
    ],
    "q_vi": "Điều nào sau đây là ĐÚNG về việc cập nhật dữ liệu thông qua một View?",
    "o_vi": [
      "Ràng buộc trên view luôn ghi đè bảng cơ sở",
      "Hàm nhóm tự động được tính lại",
      "Bạn KHÔNG THỂ cập nhật dữ liệu qua một View có chứa các HÀM NHÓM (group functions)",
      "Chỉ dữ liệu trên view bị sửa, bảng cơ sở không đổi"
    ],
    "c": 2,
    "ex_en": "The WITH READ ONLY clause prevents any DML operations (INSERT, UPDATE, DELETE) from being performed through the view.",
    "ex_vi": "View phức tạp (Complex View) có chứa hàm tập hợp, GROUP BY, DISTINCT hoặc toán tử tập hợp là View CHỈ ĐỌC, không cho phép thực hiện DML."
  },
  {
    "id": 206,
    "module": 11,
    "q_en": "Why would you use the FORCE option when creating a view?",
    "o_en": [
      "To create the view successfully even if the underlying base tables do not yet exist or the user lacks privileges on them.",
      "To force Oracle to create a unique index on the view.",
      "To convert a complex view into a simple view automatically.",
      "To physically lock the underlying base table rows."
    ],
    "q_vi": "Tùy chọn FORCE có tác dụng gì khi tạo một View (CREATE FORCE VIEW...)?",
    "o_vi": [
      "Tạo View BẤT KỂ các bảng cơ sở (base tables) đã TỒN TẠI HAY CHƯA",
      "Tạo view ở schema khác không cần quyền",
      "Tạo view dù bảng cha có constraint",
      "Tạo view có ràng buộc"
    ],
    "c": 0,
    "ex_en": "FORCE creates a view regardless of whether the underlying base tables exist or whether the user has privileges on them at creation time.",
    "ex_vi": "Tùy chọn FORCE ép buộc Oracle tạo View thành công ngay cả khi bảng cơ sở chưa được tạo hoặc người dùng chưa có quyền trên bảng đó."
  },
  {
    "id": 207,
    "module": 11,
    "q_en": "Which technique is used to perform Top-N Analysis in Oracle SQL?",
    "o_en": [
      "Using an inline view containing an ORDER BY clause combined with ROWNUM filtering in the outer query.",
      "Using the GROUP BY clause with a HAVING condition.",
      "Using the WHERE clause with an = operator on PRIMARY KEY.",
      "Using the UNION operator across multiple tables."
    ],
    "q_vi": "Phát biểu nào mô tả đúng nhất về một Inline View?",
    "o_vi": [
      "Một đối tượng lược đồ",
      "Một truy vấn con nằm trong mệnh đề FROM của một truy vấn khác",
      "Truy vấn con chứa ORDER BY",
      "Tên gọi khác của View chứa hàm nhóm"
    ],
    "c": 1,
    "ex_en": "Top-N Analysis uses an inline view with an ORDER BY clause combined with ROWNUM <= N (or FETCH FIRST N ROWS ONLY in Oracle 12c+) to extract top records.",
    "ex_vi": "Inline View chính là câu lệnh SELECT đóng vai trò như bảng dữ liệu tạm thời đặt tại mệnh đề FROM."
  },
  {
    "id": 208,
    "module": 11,
    "q_en": "You want to retrieve the top 5 highest paid employees. Which query produces the correct result?",
    "o_en": [
      "SELECT last_name, salary FROM (SELECT last_name, salary FROM employees ORDER BY salary DESC) WHERE ROWNUM <= 5;",
      "SELECT last_name, salary FROM employees WHERE ROWNUM <= 5 ORDER BY salary DESC;",
      "SELECT last_name, salary FROM employees ORDER BY salary DESC WHERE ROWNUM <= 5;",
      "SELECT last_name, salary FROM employees WHERE ROWNUM = 5 ORDER BY salary DESC;"
    ],
    "q_vi": "Phát biểu nào sau đây về View là KHÔNG đúng?",
    "o_vi": [
      "View có thể tạo ở dạng chỉ đọc (read only)",
      "Bắt buộc bảng cơ sở PHẢI TỒN TẠI mới tạo được View",
      "View có thể tạo có chứa GROUP BY",
      "View có thể tạo dựa trên một View khác"
    ],
    "c": 1,
    "ex_en": "To retrieve top records in Oracle legacy syntax, sort rows in an inner inline view before applying ROWNUM filtering in the outer query.",
    "ex_vi": "Nhờ có tùy chọn CREATE FORCE VIEW, bạn vẫn tạo được View kể cả khi bảng cơ sở chưa tồn tại."
  },
  {
    "id": 209,
    "module": 7,
    "q_en": "What happens when an UPDATE statement is executed against an updatable simple view?",
    "o_en": [
      "The data in the underlying base table is updated directly.",
      "Only the temporary view buffer in memory is updated.",
      "An error is returned because views cannot process updates.",
      "A duplicate table is created automatically."
    ],
    "q_vi": "Xét câu lệnh: SELECT a.emp_name, a.sal, a.dept_id, b.maxsal FROM employees a, (SELECT dept_id, MAX(sal) maxsal FROM employees GROUP BY dept_id) b WHERE a.dept_id = b.dept_id AND a.sal < b.maxsal;. Kết quả là gì?",
    "o_vi": [
      "Lỗi ở dòng 3",
      "Lỗi ở dòng 4",
      "Trả về tên, lương, mã phòng và lương cao nhất của phòng ban đối với tất cả nhân viên CÓ MỨC LƯƠNG THẤP HƠN mức lương cao nhất trong phòng ban của họ",
      "Lỗi ở dòng 1"
    ],
    "c": 2,
    "ex_en": "Modifying data through a view updates the underlying physical base tables upon which the view is defined.",
    "ex_vi": "Inline View b tính mức lương max theo phòng ban, truy vấn ngoài lọc các nhân viên có lương a.sal < b.maxsal."
  },
  {
    "id": 210,
    "module": 11,
    "q_en": "Which of the following is an advantage of using Views?",
    "o_en": [
      "Enhances data security, simplifies complex queries, and provides data independence.",
      "Increases physical disk storage capacity automatically.",
      "Bypasses primary key and foreign key constraint checks.",
      "Speeds up full table scans without indexes."
    ],
    "q_vi": "Cần tạo View EMP_VU cho phép người dùng INSERT các dòng thông qua View. Câu lệnh nào cho phép thực hiện?",
    "o_vi": [
      "CREATE VIEW ... SUM(sal) TOTALSAL ... GROUP BY (View chứa hàm nhóm - KHÔNG INSERT ĐƯỢC)",
      "CREATE VIEW ... WHERE mgr_id IN (102, 120);",
      "CREATE VIEW ... DISTINCT ... (View chứa DISTINCT - KHÔNG INSERT ĐƯỢC)",
      "CREATE VIEW emp_vu AS SELECT employee_id, emp_name, job_id, department_id FROM employees WHERE mgr_id IN (102, 120);"
    ],
    "c": 3,
    "ex_en": "Views provide data security by restricting user access to specific columns/rows, simplify complex queries, and ensure data independence.",
    "ex_vi": "View đơn giản (Simple View) trích xuất trực tiếp các cột dữ liệu thô từ 1 bảng, không có GROUP BY/DISTINCT sẽ hỗ trợ thao tác INSERT."
  },
  {
    "id": 211,
    "module": 11,
    "q_en": "What happens to base tables when a view defined on them is dropped with DROP VIEW?",
    "o_en": [
      "The base tables and their data remain completely unchanged.",
      "The base tables are truncated immediately.",
      "The base tables are permanently deleted from the schema.",
      "The base table columns are set to NULL."
    ],
    "q_vi": "Bạn cần xem lại cấu trúc định nghĩa (câu lệnh SELECT tạo View) của View EMP_DEPT_VU. Lấy định nghĩa này bằng cách nào?",
    "o_vi": [
      "Truy vấn từ điển dữ liệu USER_VIEWS để tìm View EMP_DEPT_VU",
      "Dùng lệnh DESCRIBE VIEW",
      "Dùng lệnh DEFINE VIEW",
      "Truy vấn view USER_SOURCE"
    ],
    "c": 0,
    "ex_en": "Executing DROP VIEW removes only the view definition from the data dictionary; base tables and their physical data remain completely intact.",
    "ex_vi": "Cột TEXT trong Data Dictionary View USER_VIEWS chứa toàn bộ câu lệnh SQL được dùng để định nghĩa View đó."
  },
  {
    "id": 212,
    "module": 11,
    "q_en": "What is the advantage of using CREATE OR REPLACE VIEW instead of DROP VIEW followed by CREATE VIEW?",
    "o_en": [
      "It modifies the view definition without invalidating grants/privileges previously assigned on the view.",
      "It automatically converts the view into a materialized view.",
      "It bypasses data dictionary validation.",
      "It creates a backup copy of the original view."
    ],
    "q_vi": "Điều kiện cần thiết để câu truy vấn của bạn trên một View có sẵn có thể thực thi thành công là gì?",
    "o_vi": [
      "Các bảng cơ sở phải cùng schema",
      "Các bảng cơ sở phải có dữ liệu",
      "Cần quyền SELECT trên bảng gốc",
      "Bạn cần có quyền SELECT trên chính View đó (SELECT privileges on the view)"
    ],
    "c": 3,
    "ex_en": "The OR REPLACE clause allows modifying an existing view definition without needing to drop the view and re-grant associated object privileges.",
    "ex_vi": "Người dùng chỉ cần được cấp quyền SELECT trên View là có thể truy vấn dữ liệu từ View đó mà không bắt buộc phải có quyền xem trực tiếp bảng gốc."
  },
  {
    "id": 213,
    "module": 11,
    "q_en": "What is ROWNUM in Oracle SQL?",
    "o_en": [
      "A pseudocolumn that assigns a sequential integer to each row returned by a query.",
      "A physical column stored in every table.",
      "A foreign key constraint parameter.",
      "A data type used for storing phone numbers."
    ],
    "q_vi": "Truy vấn con SQL nằm trong mệnh đề nào của câu lệnh SELECT thì được gọi là Inline View?",
    "o_vi": [
      "group by",
      "order by",
      "where",
      "from"
    ],
    "c": 3,
    "ex_en": "ROWNUM is a pseudocolumn assigned sequentially to rows as they are fetched from a query before any ORDER BY sorting is applied.",
    "ex_vi": "Theo định nghĩa, Subquery nằm tại mệnh đề FROM đóng vai trò là một Inline View."
  },
  {
    "id": 214,
    "module": 11,
    "q_en": "Why will SELECT * FROM employees WHERE ROWNUM <= 5 ORDER BY salary DESC; NOT return the true top 5 highest earners?",
    "o_en": [
      "Because ROWNUM is assigned to rows before the ORDER BY clause sorts the result set.",
      "Because ROWNUM requires a GROUP BY clause.",
      "Because ROWNUM cannot be used with the <= operator.",
      "Because ORDER BY automatically resets ROWNUM to zero."
    ],
    "q_vi": "Cần sửa đổi View EMP_DEPT_VU bằng cách bổ sung thêm cột thứ tư là MANAGER_ID. Thực hiện bằng câu lệnh nào?",
    "o_vi": [
      "ALTER VIEW ... AS SELECT ...",
      "MODIFY VIEW ...",
      "ALTER VIEW ...",
      "CREATE OR REPLACE VIEW emp_dept_vu AS SELECT employee_id, employee_name, department_name, manager_id FROM employees e, departments d WHERE e.department_id = d.department_id;"
    ],
    "c": 3,
    "ex_en": "Inline views in Top-N queries ensure rows are ordered correctly before ROWNUM filters the desired top N rows.",
    "ex_vi": "Để sửa đổi định nghĩa của một View đã tồn tại mà giữ nguyên các quyền đã cấp, dùng cú pháp CREATE OR REPLACE VIEW AS SELECT...."
  },
  {
    "id": 215,
    "module": 11,
    "q_en": "A view created with CREATE VIEW emp_dept_v AS SELECT e.last_name, d.department_name FROM employees e JOIN departments d ON e.department_id = d.department_id; is classified as a _____?",
    "o_en": [
      "Complex View",
      "Simple View",
      "Inline View",
      "Materialized View"
    ],
    "q_vi": "Phát biểu nào liên quan đến việc tạo một View là ĐÚNG?",
    "o_vi": [
      "Cột tính toán được đặt tên tự động",
      "Dùng OR REPLACE bắt cấp lại quyền",
      "Bắt buộc đặt tên constraint khi dùng CHECK OPTION",
      "Các cột của View có thể có tên KHÁC với cột của bảng cơ sở bằng cách sử dụng Biệt danh cột (Column Aliases)"
    ],
    "c": 3,
    "ex_en": "Creating a view based on group functions or JOINs classifies it as a Complex View.",
    "ex_vi": "Bạn có thể định nghĩa tiêu đề cột mới cho View bằng Alias trong danh sách SELECT của View."
  },
  {
    "id": 216,
    "module": 11,
    "q_en": "Which clause combination is essential for an accurate Top-N Analysis query in legacy Oracle SQL?",
    "o_en": [
      "Inline view with ORDER BY + Outer query with ROWNUM condition",
      "GROUP BY + HAVING",
      "WHERE + UNION",
      "START WITH + CONNECT BY"
    ],
    "q_vi": "Bạn được cấp quyền hệ thống CREATE VIEW. Quyền này cho phép bạn làm gì?",
    "o_vi": [
      "Tạo a table view",
      "Tạo view trong bất kỳ schema nào",
      "Tạo View trong không gian Lược đồ của chính bạn (in your schema)",
      "Tạo sequence view"
    ],
    "c": 2,
    "ex_en": "To perform Top-N filtering accurately, sort data inside an inline view subquery first, then filter ROWNUM <= N in the main query.",
    "ex_vi": "Quyền CREATE VIEW cho phép người dùng tạo các đối tượng View thuộc sở hữu của chính tài khoản người dùng đó."
  },
  {
    "id": 217,
    "module": 11,
    "q_en": "If a view is created with WITH CHECK OPTION, what occurs when an INSERT attempts to insert a row that violates the view's WHERE condition?",
    "o_en": [
      "Oracle rejects the INSERT statement and raises an error (ORA-01402).",
      "The row is inserted into the base table but hidden from the view.",
      "The row is inserted into a temporary table instead.",
      "Oracle automatically modifies the row values to match the condition."
    ],
    "q_vi": "Tùy chọn nào sau đây là HỢP LỆ khi khởi tạo một View?",
    "o_vi": [
      "WITH BREAK OPTION",
      "ON DELETE CASCADE",
      "WITH GRANT OPTION",
      "WITH CHECK OPTION"
    ],
    "c": 3,
    "ex_en": "The WITH CHECK OPTION clause ensures that any INSERT or UPDATE through the view satisfies the view's WHERE condition.",
    "ex_vi": "WITH CHECK OPTION đảm bảo các thao tác DML thực hiện qua View phải thỏa mãn điều kiện lọc WHERE của View đó."
  },
  {
    "id": 218,
    "module": 11,
    "q_en": "Can data be deleted through a complex view that contains the SUM() aggregate function?",
    "o_en": [
      "No, views containing group functions or aggregate expressions are not updatable/deletable.",
      "Yes, provided the user has DELETE ANY TABLE privileges.",
      "Yes, if the view is created with FORCE.",
      "Yes, if the base table has a Primary Key."
    ],
    "q_vi": "An inline view là câu lệnh SELECT được đặt biệt danh và lồng trong mệnh đề nào của truy vấn khác?",
    "o_vi": [
      "CASE",
      "FROM",
      "WHERE",
      "SELECT"
    ],
    "c": 1,
    "ex_en": "Complex views containing aggregate functions (e.g., SUM, AVG) do not permit direct DML operations on aggregated virtual columns.",
    "ex_vi": "Tương tự các câu trên, Inline View luôn nằm tại mệnh đề FROM."
  },
  {
    "id": 219,
    "module": 11,
    "q_en": "Which data dictionary view stores the defining SQL text of views owned by the current user?",
    "o_en": [
      "USER_VIEWS",
      "USER_TABLES",
      "USER_OBJECTS",
      "USER_CATALOG"
    ],
    "q_vi": "Cần tạo View EMP_VU chỉ cho phép người dùng thao tác DML trên các nhân viên thuộc phòng 10 hoặc 20 (không cho sửa/chèn sang phòng khác). Dùng câu lệnh nào?",
    "o_vi": [
      "CREATE VIEW emp_vu AS SELECT * FROM employees WHERE department_id IN (10,20) WITH READ ONLY;",
      "CREATE VIEW emp_vu AS SELECT * FROM employees WHERE department_id IN (10,20) WITH CHECK OPTION;",
      "CREATE VIEW emp_vu AS SELECT * FROM employees WHERE department_id IN (10,20);",
      "CREATE FORCE VIEW ..."
    ],
    "c": 1,
    "ex_en": "Data dictionary view USER_VIEWS contains the defining query text and metadata for all views owned by the current user.",
    "ex_vi": "WITH CHECK OPTION ngăn chặn các thao tác INSERT/UPDATE dữ liệu làm cho dòng bản ghi không còn thỏa mãn điều kiện department_id IN (10, 20)."
  },
  {
    "id": 220,
    "module": 11,
    "q_en": "Which statement about views is FALSE?",
    "o_en": [
      "Views store physically duplicated copies of all base table data on disk.",
      "Views can restrict access to sensitive table columns.",
      "Views can join multiple tables into a single virtual object.",
      "Views can be dropped without affecting the underlying base tables."
    ],
    "q_vi": "Phát biểu nào sau đây về View là ĐÚNG?",
    "o_vi": [
      "View không thể chứa ORDER BY",
      "View không thể chứa GROUP BY",
      "A view can be created as read only (View có thể được tạo dưới dạng chỉ đọc)",
      "View bắt buộc phải khai báo alias cho mọi cột"
    ],
    "c": 2,
    "ex_en": "Views do not store duplicate physical copies of base table data; they present dynamic, real-time results evaluated at query time.",
    "ex_vi": "Thêm mệnh đề WITH READ ONLY khi tạo View để vô hiệu hóa hoàn toàn tất cả các thao tác DML (INSERT, UPDATE, DELETE) thông qua View đó."
  },
  {
    "id": 221,
    "module": 12,
    "q_en": "What is the function of the UNION set operator?",
    "o_en": [
      "Combines the result sets of two queries and removes all duplicate rows from the final result.",
      "Combines the result sets of two queries including all duplicate rows.",
      "Returns only rows that are common to both queries.",
      "Returns rows from the first query that are not present in the second query."
    ],
    "q_vi": "Tên nào sau đây KHÔNG phải là một Toán tử tập hợp (SET Operator) trong SQL?",
    "o_vi": [
      "Intersect",
      "Union",
      "Minus",
      "Plus"
    ],
    "c": 3,
    "ex_en": "UNION combines result sets from two queries and automatically removes duplicate rows from the final output.",
    "ex_vi": "Bộ 4 toán tử tập hợp chuẩn gồm: UNION, UNION ALL, INTERSECT, và MINUS (hoặc EXCEPT). \"Plus\" là phép cộng số học."
  },
  {
    "id": 222,
    "module": 12,
    "q_en": "How does UNION ALL differ from UNION?",
    "o_en": [
      "UNION ALL retains all duplicate rows and does not perform sorting, whereas UNION eliminates duplicates.",
      "UNION ALL removes duplicate rows, whereas UNION keeps them.",
      "UNION ALL works only on numeric columns.",
      "UNION ALL can join tables with different numbers of columns."
    ],
    "q_vi": "Bảng JOB_HISTORY chứa nhân viên đã từng đổi việc. Muốn hiển thị mã các nhân viên CHƯA TỪNG đổi công việc lần nào, dùng toán tử tập hợp nào?",
    "o_vi": [
      "Intersect",
      "Minus",
      "Union",
      "Union All"
    ],
    "c": 1,
    "ex_en": "UNION ALL combines result sets from two queries including all duplicate rows, making it faster than UNION because no sorting/deduplication occurs.",
    "ex_vi": "Lấy toàn bộ nhân viên ở bảng EMPLOYEES trừ đi (MINUS) danh sách nhân viên có mặt ở JOB_HISTORY để ra người chưa từng đổi việc."
  },
  {
    "id": 223,
    "module": 12,
    "q_en": "What does the INTERSECT operator return?",
    "o_en": [
      "Only rows that are common to both component query result sets.",
      "All rows from both queries including duplicates.",
      "Rows from the first query that do not exist in the second query.",
      "All rows except common rows."
    ],
    "q_vi": "Điều nào sau đây KHÔNG đúng về việc sử dụng các Toán tử tập hợp?",
    "o_vi": [
      "Các toán tử SET KHÔNG THỂ sử dụng trong các truy vấn con (subqueries)",
      "Các biểu thức trong danh sách SELECT phải tương thích số lượng và kiểu dữ liệu",
      "Có thể dùng ngoặc đơn để thay đổi thứ tự ưu tiên thực thi",
      "Danh sách SELECT phải đồng nhất số cột"
    ],
    "c": 0,
    "ex_en": "INTERSECT returns only the distinct common rows that are returned by both queries.",
    "ex_vi": "Các toán tử tập hợp hoàn toàn có thể được lồng và sử dụng bình thường bên trong các truy vấn con (Subqueries)."
  },
  {
    "id": 224,
    "module": 12,
    "q_en": "What does the MINUS operator return?",
    "o_en": [
      "Distinct rows returned by the first query that are NOT present in the second query's result set.",
      "All rows present in both queries.",
      "The mathematical difference between two numeric columns.",
      "Rows present in the second query but not the first."
    ],
    "q_vi": "Phát biểu nào sau đây về việc sử dụng mệnh đề ORDER BY kết hợp với các Toán tử tập hợp là KHÔNG đúng?",
    "o_vi": [
      "Tên cột hoặc alias trong ORDER BY phải lấy từ câu SELECT đầu tiên",
      "ORDER BY có thể nhận tên cột, alias hoặc vị trí số cột",
      "ORDER BY chỉ xuất hiện ở cuối câu lệnh tổng thể",
      "Mệnh đề ORDER BY chỉ có thể xuất hiện ở cuối câu lệnh SELECT ĐẦU TIÊN"
    ],
    "c": 3,
    "ex_en": "MINUS returns distinct rows from the first query that are not present in the second query's result set.",
    "ex_vi": "Mệnh đề ORDER BY BẮT BUỘC phải đặt ở vị trí cuối cùng của toàn bộ câu lệnh hợp thành (Compound Query), không được đặt ở câu SELECT đầu."
  },
  {
    "id": 225,
    "module": 12,
    "q_en": "What rule must be followed regarding columns when using SET operators (UNION, INTERSECT, MINUS)?",
    "o_en": [
      "Both queries must have the same number of columns, and corresponding columns must belong to matching data type families.",
      "Column names in both SELECT lists must be identical.",
      "Tables referenced in both queries must have identical names.",
      "Both queries must contain an identical WHERE clause."
    ],
    "q_vi": "Phát biểu nào sau đây về Oracle Server và các Toán tử tập hợp là KHÔNG đúng?",
    "o_vi": [
      "Mặc định kết quả được sắp xếp tăng dần theo cột đầu tiên",
      "Tên cột kết quả do danh sách SELECT ở câu lệnh đầu tiên quyết định",
      "Kiểu dữ liệu của các cột kết quả GIỐNG HỆT như các cột được chọn",
      "Tự động loại bỏ trùng lặp ngoại trừ UNION ALL"
    ],
    "c": 2,
    "ex_en": "For SET operators (UNION, UNION ALL, INTERSECT, MINUS), corresponding columns in both SELECT lists must match in number and data type family.",
    "ex_vi": "Theo đáp án được thiết lập trong ngân hàng đề kiểm tra."
  },
  {
    "id": 226,
    "module": 9,
    "q_en": "Where must the ORDER BY clause be placed in a compound query that uses SET operators?",
    "o_en": [
      "At the very end of the entire compound statement, referencing column names/aliases from the first SELECT clause.",
      "Inside each individual SELECT statement.",
      "Immediately after the first SELECT statement only.",
      "ORDER BY is strictly prohibited in set operations."
    ],
    "q_vi": "Bảng DUAL mặc định chứa dữ liệu gì?",
    "o_vi": [
      "Một cột tên DUMMY và một dòng có giá trị 'X'",
      "Một cột tên D và một dòng có giá trị X",
      "Một cột tên COL và một dòng có giá trị 1",
      "Bảng DUAL không chứa dữ liệu"
    ],
    "c": 0,
    "ex_en": "The ORDER BY clause in set operations must appear at the very end of the entire statement, referencing column names or position numbers from the first query.",
    "ex_vi": "Bảng hệ thống DUAL có sẵn 1 cột tên DUMMY kiểu VARCHAR2(1) chứa đúng 1 giá trị là 'X'."
  },
  {
    "id": 227,
    "module": 12,
    "q_en": "What is ROWNUM in Oracle SQL?",
    "o_en": [
      "A pseudocolumn returning a sequential number assigned to each row fetched from a table.",
      "A physical column storing row numbers permanently on disk.",
      "A primary key auto-increment function.",
      "A transaction log identifier."
    ],
    "q_vi": "Điều nào sau đây KHÔNG đúng về các Cột giả (Pseudo columns) trong Oracle?",
    "o_vi": [
      "Cột giả hoạt động như cột thật nhưng không lưu trữ trên đĩa",
      "Cột giả do Oracle Server tự quản lý nội bộ",
      "Bạn KHÔNG THỂ chèn giá trị của cột giả vào cột của bảng khác",
      "Có thể SELECT từ cột giả nhưng không thể INSERT/UPDATE/DELETE giá trị của nó"
    ],
    "c": 2,
    "ex_en": "ROWNUM assigns a unique sequential integer to each row returned by a query, evaluated as rows satisfy WHERE conditions.",
    "ex_vi": "Bạn hoàn toàn có thể lấy giá trị cột giả (như ROWNUM, SYSDATE, sequence.NEXTVAL) để chèn (INSERT) vào một bảng thực."
  },
  {
    "id": 228,
    "module": 12,
    "q_en": "What is ROWID in Oracle SQL?",
    "o_en": [
      "A pseudocolumn returning the physical hexadecimal address of a row in the database.",
      "An internal table identifier number.",
      "A variable character column storing user logins.",
      "A foreign key reference string."
    ],
    "q_vi": "Tên nào sau đây KHÔNG phải là một loại hoặc tên Cột giả (Pseudo-column) hợp lệ trong Oracle?",
    "o_vi": [
      "Hierarchical Query Pseudo columns (LEVEL, CONNECT_BY_ISLEAF)",
      "Sequence Pseudo columns (CURRVAL, NEXTVAL)",
      "Sub Query Pseudo columns",
      "ROWNUM Pseudo column"
    ],
    "c": 2,
    "ex_en": "ROWID provides the physical location address of a row, making row retrieval via ROWID the fastest possible data access path in Oracle.",
    "ex_vi": "Oracle không có nhóm cột giả nào tên là \"Sub Query Pseudo columns\"."
  },
  {
    "id": 229,
    "module": 12,
    "q_en": "What does the SYSDATE pseudocolumn return?",
    "o_en": [
      "The current date and time of the database server OS.",
      "The date when the database table was created.",
      "The date when the user session opened.",
      "The expiration date of the user password."
    ],
    "q_vi": "Phát biểu nào sau đây về cột giả của Sequence là ĐÚNG?",
    "o_vi": [
      "Dùng CURRVAL để sinh giá trị mới",
      "Dùng NEXTVAL để xem trước giá trị tiếp theo mà không lấy",
      "Dùng CURRVAL để tạo giá trị tiếp theo",
      "Bạn sử dụng cột giả NEXTVAL để lấy giá trị tiếp theo có thể có từ sequence bằng cách THỰC SỰ TRUY XUẤT giá trị đó khỏi sequence"
    ],
    "c": 3,
    "ex_en": "SYSDATE is a built-in date pseudocolumn/function returning the current system date and time of the database server.",
    "ex_vi": "Gọi sequence.NEXTVAL sẽ làm tăng giá trị sequence lên 1 bước và trả về giá trị mới đó."
  },
  {
    "id": 230,
    "module": 12,
    "q_en": "What does the USER pseudocolumn return?",
    "o_en": [
      "The name of the current logged-in database user session.",
      "The owner name of the operating system.",
      "A list of all active database users.",
      "The DBA administrator account name."
    ],
    "q_vi": "Thành phần nào sau đây KHÔNG nằm trong thông tin được mã hóa bên trong Cột giả ROWID?",
    "o_vi": [
      "Số đối tượng dữ liệu (Data object number)",
      "Tệp dữ liệu chứa dòng (Data file)",
      "Vị trí thứ tự của dòng trong bảng logic (The position of row in oracle table)",
      "Khối dữ liệu chứa dòng (Data block)"
    ],
    "c": 2,
    "ex_en": "USER is a pseudocolumn returning the username of the currently connected database session.",
    "ex_vi": "ROWID chứa: Object Number, Datafile ID, Block ID, và Row Slot Number trong Block physical; không lưu vị trí dòng logic."
  },
  {
    "id": 231,
    "module": 12,
    "q_en": "Which SELECT statement determines the column header names in the final output of a UNION query?",
    "o_en": [
      "The first SELECT statement in the compound query.",
      "The second SELECT statement in the compound query.",
      "The query with the longest column names.",
      "Column headers are generated as COL1, COL2 automatically."
    ],
    "q_vi": "Cột giả nào sau đây hữu ích khi thực hiện Phân tích Top-N (TOP-N analysis)?",
    "o_vi": [
      "RANK",
      "ROWID",
      "LEVEL",
      "ROWNUM"
    ],
    "c": 3,
    "ex_en": "In set operations, column header names in the final output are determined by the column aliases or names specified in the first SELECT statement.",
    "ex_vi": "Cột giả ROWNUM gán số thứ tự cho các dòng kết quả trả về, dùng ở mệnh đề WHERE ROWNUM <= N để giới hạn Top N."
  },
  {
    "id": 232,
    "module": 12,
    "q_en": "Why is UNION ALL faster in performance than UNION?",
    "o_en": [
      "UNION ALL does not sort the result set to eliminate duplicate rows.",
      "UNION ALL uses index scans while UNION uses full table scans.",
      "UNION ALL runs on multiple CPU threads simultaneously.",
      "UNION ALL skips checking table constraints."
    ],
    "q_vi": "Cần lấy thông tin nhân viên từ 2 bảng khác nhau (có thể chứa mã trùng nhau), nhưng chỉ muốn hiển thị MỖI BẢN GHI DUY NHẤT 1 LẦN (loại bỏ trùng). Dùng toán tử tập hợp nào?",
    "o_vi": [
      "Union",
      "Union all",
      "Minus",
      "Intersect"
    ],
    "c": 0,
    "ex_en": "UNION ALL retains all duplicates and does not perform sorting, achieving superior performance compared to UNION.",
    "ex_vi": "Toán tử UNION gộp kết quả của 2 câu truy vấn và tự động thực hiện thao tác loại bỏ các dòng bị trùng lặp."
  },
  {
    "id": 233,
    "module": 12,
    "q_en": "What is the result of executing SELECT * FROM employees WHERE ROWNUM = 2;?",
    "o_en": [
      "No rows returned (0 rows).",
      "The second row of the employees table.",
      "The top 2 rows of the employees table.",
      "An error message: ORA-00904."
    ],
    "q_vi": "Kết quả của câu truy vấn: SELECT * FROM employees WHERE ROWNUM < 10; là gì?",
    "o_vi": [
      "Thực hiện Top-N lấy 9 người lương cao nhất",
      "Báo lỗi vì ROWNUM không có ở SELECT",
      "Chọn 10 bản ghi",
      "Trả về 9 DÒNG đầu tiên lấy ra từ bảng Employees (nếu bảng có từ 9 dòng trở lên)"
    ],
    "c": 3,
    "ex_en": "Using ROWNUM = 2 directly in a WHERE clause returns 0 rows because ROWNUM 1 must be fetched before ROWNUM 2 can be assigned.",
    "ex_vi": "Mệnh đề WHERE ROWNUM < 10 sẽ ngắt câu truy vấn ngay khi lấy đủ 9 bản ghi đầu tiên thỏa mãn."
  },
  {
    "id": 234,
    "module": 12,
    "q_en": "How can you retrieve rows starting from row number 10 to row number 20 using ROWNUM?",
    "o_en": [
      "By assigning ROWNUM an alias inside an inline view subquery, then filtering the alias in the outer query.",
      "By using WHERE ROWNUM BETWEEN 10 AND 20 directly in the main query.",
      "By using WHERE ROWNUM >= 10 AND ROWNUM <= 20.",
      "ROWNUM cannot be used for pagination under any circumstances."
    ],
    "q_vi": "Các câu truy vấn có chứa các Toán tử tập hợp (SET operators) được gọi là loại truy vấn gì?",
    "o_vi": [
      "Compound queries (Truy vấn hợp thành)",
      "Set queries",
      "Complex queries",
      "Set Manipulation queries"
    ],
    "c": 0,
    "ex_en": "To use ROWNUM for pagination or offset filtering, wrap ROWNUM in an inline subquery with an alias.",
    "ex_vi": "Câu lệnh chứa UNION, INTERSECT, MINUS kết hợp nhiều câu SELECT được gọi là Compound Query."
  },
  {
    "id": 235,
    "module": 12,
    "q_en": "In what order are set operators evaluated in a compound query with multiple set operations?",
    "o_en": [
      "From top to bottom (left to right), unless overridden by parentheses.",
      "INTERSECT first, followed by MINUS, then UNION.",
      "UNION ALL first, followed by UNION.",
      "In reverse order from bottom to top."
    ],
    "q_vi": "Điều nào sau đây KHÔNG đúng về Toán tử UNION?",
    "o_vi": [
      "UNION hoạt động trên tất cả các cột được chọn",
      "Toán tử IN có độ ưu tiên cao hơn UNION",
      "Mặc định đầu ra sắp xếp tăng dần theo cột đầu tiên",
      "Các giá trị NULL bị BỎ QUA trong quá trình kiểm tra trùng lặp"
    ],
    "c": 3,
    "ex_en": "Set operators evaluate queries from top to bottom unless parentheses are used to explicitly alter execution precedence.",
    "ex_vi": "UNION coi hai giá trị NULL là bằng nhau và thực hiện loại bỏ trùng lặp đối với cả các dòng chứa NULL."
  },
  {
    "id": 236,
    "module": 12,
    "q_en": "Which data types are NOT supported in queries using SET operators like UNION or INTERSECT?",
    "o_en": [
      "BLOB, CLOB, BFILE, and LONG",
      "NUMBER and FLOAT",
      "VARCHAR2 and CHAR",
      "DATE and TIMESTAMP"
    ],
    "q_vi": "Khi sử dụng Toán tử tập hợp nào thì kết quả trả về KHÔNG TỰ ĐỘNG SẮP XẾP theo mặc định?",
    "o_vi": [
      "Minus",
      "Intersect",
      "Union",
      "Union All"
    ],
    "c": 3,
    "ex_en": "BLOB, CLOB, and LONG data types cannot be used in queries involving SET operators like UNION, INTERSECT, or MINUS.",
    "ex_vi": "UNION ALL chỉ đơn giản nối kết quả 2 câu truy vấn mà không tốn chi phí thực hiện Sort để loại bỏ trùng lặp."
  },
  {
    "id": 237,
    "module": 12,
    "q_en": "Given Query A returns IDs {1, 2, 3, 4} and Query B returns IDs {3, 4, 5, 6}, what IDs are returned by Query A INTERSECT Query B?",
    "o_en": [
      "{3, 4}",
      "{1, 2, 3, 4, 5, 6}",
      "{1, 2}",
      "{5, 6}"
    ],
    "q_vi": "Phát biểu nào sau đây KHÔNG đúng về Toán tử UNION ALL?",
    "o_vi": [
      "Từ khóa DISTINCT có thể được sử dụng (The DISTINCT keyword can be used)",
      "Đầu ra không tự động sắp xếp",
      "Trả về tất cả các dòng từ nhiều truy vấn",
      "Các dòng trùng lặp không bị loại bỏ"
    ],
    "c": 0,
    "ex_en": "INTERSECT returns only rows present in both component result sets.",
    "ex_vi": "UNION ALL giữ lại toàn bộ trùng lặp, không đi kèm với từ khóa DISTINCT."
  },
  {
    "id": 238,
    "module": 12,
    "q_en": "Given Query A returns IDs {1, 2, 3, 4} and Query B returns IDs {3, 4, 5, 6}, what IDs are returned by Query A MINUS Query B?",
    "o_en": [
      "{1, 2}",
      "{5, 6}",
      "{3, 4}",
      "{1, 2, 3, 4, 5, 6}"
    ],
    "q_vi": "Điều nào sau đây KHÔNG đúng về việc sử dụng Toán tử INTERSECT?",
    "o_vi": [
      "INTERSECT không bỏ qua giá trị NULL",
      "Tên cột không bắt buộc phải giống hệt nhau",
      "Số cột và kiểu dữ liệu phải đồng nhất",
      "Việc ĐẢO NGƯỢC THỨ TỰ các bảng được giao có thể làm thay đổi kết quả đầu ra"
    ],
    "c": 3,
    "ex_en": "MINUS subtracts the second result set from the first result set, returning unique rows belonging exclusively to the first query.",
    "ex_vi": "Phép giao toán học có tính giao hoán:  luôn cho ra kết quả giống hệt , thứ tự các câu lệnh không làm đổi kết quả."
  },
  {
    "id": 239,
    "module": 12,
    "q_en": "Which sequence pseudocolumn returns the next available value in a sequence generator?",
    "o_en": [
      "NEXTVAL",
      "CURRVAL",
      "ROWVAL",
      "SEQVAL"
    ],
    "q_vi": "Sử dụng toán tử nào để hiển thị các bản ghi là KẾT QUẢ CHUNG (xuất hiện ở tất cả các câu truy vấn)?",
    "o_vi": [
      "Union",
      "Minus",
      "Intersect",
      "Union All"
    ],
    "c": 2,
    "ex_en": "NEXTVAL and CURRVAL are pseudocolumns used to retrieve sequence values; they cannot be used directly in set operations or GROUP BY clauses.",
    "ex_vi": "Toán tử INTERSECT chỉ trả về các dòng bản ghi xuất hiện đồng thời trong tập kết quả của tất cả các câu SELECT."
  },
  {
    "id": 240,
    "module": 12,
    "q_en": "How can you handle a scenario where Query 1 returns 3 columns and Query 2 returns only 2 columns, but you need to combine them using UNION?",
    "o_en": [
      "Use a literal constant or NULL as a placeholder column in Query 2 to match the 3-column requirement.",
      "Use the FORCE keyword after UNION.",
      "Drop the missing column from Query 1 automatically using ALTER.",
      "It is impossible to combine queries with different column counts."
    ],
    "q_vi": "Phát biểu nào sau đây là ĐÚNG về việc sử dụng Toán tử UNION?",
    "o_vi": [
      "Kiểu dữ liệu giống nhau nhưng số cột có thể khác",
      "SỐ LƯỢNG CỘT và KIỂU DỮ LIỆU của các cột tương ứng bắt buộc phải ĐỒNG NHẤT trong tất cả các câu lệnh SELECT",
      "Tên các cột bắt buộc phải giống hệt nhau",
      "Số cột giống nhau nhưng kiểu dữ liệu có thể khác"
    ],
    "c": 1,
    "ex_en": "The NULL keyword can be used in SELECT lists of set operators as a placeholder to align matching column counts between queries.",
    "ex_vi": "Quy tắc toán tử tập hợp: Mọi câu lệnh SELECT tham gia hợp thành phải chọn cùng số lượng cột và các cột tương ứng phải đồng nhất kiểu dữ liệu."
  },
  {
    "id": 241,
    "module": 13,
    "q_en": "What is Database Normalization?",
    "o_en": [
      "A systematic process of organizing database schema attributes and tables to eliminate data redundancy and prevent insertion, update, and deletion anomalies.",
      "The process of combining all database tables into a single master flat file.",
      "A procedure for backing up database files to cloud storage.",
      "The process of creating visual entity-relationship diagrams."
    ],
    "q_vi": "Phát biểu nào sau đây KHÔNG đúng về Chuẩn hóa cơ sở dữ liệu (Database Normalization)?",
    "o_vi": [
      "Chuẩn hóa thường bao gồm việc KẾT HỢP các bảng nhỏ lại thành một bảng lớn duy nhất để tối đa hóa khả năng truy cập",
      "Là quá trình tổ chức dữ liệu nhằm giảm thiểu sự trùng lặp (redundancy)",
      "Mục tiêu là phân rã quan hệ có bất thường thành các quan hệ nhỏ hơn, có cấu trúc tốt",
      "Phân chia các bảng lớn thành các bảng nhỏ hơn và định nghĩa mối quan hệ giữa chúng"
    ],
    "c": 0,
    "ex_en": "Database Normalization is the systematic process of organizing data attributes and tables to minimize data redundancy and eliminate update anomalies.",
    "ex_vi": "Chuẩn hóa là quá trình Phân rã (Decompose) các bảng lớn bị trùng lặp dữ liệu thành các bảng nhỏ hơn, ngược lại với việc gom hợp bảng."
  },
  {
    "id": 242,
    "module": 9,
    "q_en": "What requirement must a relation satisfy to be in First Normal Form (1NF)?",
    "o_en": [
      "All attributes must contain atomic (indivisible) values, and there must be no repeating groups or arrays.",
      "All non-key attributes must depend on the entire composite primary key.",
      "There must be no transitive dependencies between non-key attributes.",
      "Every determinant must be a candidate key."
    ],
    "q_vi": "Một thuộc tính  phụ thuộc hàm đầy đủ (Fully functionally dependent) vào tập thuộc tính  nếu nó:",
    "o_vi": [
      "Phụ thuộc hàm vào",
      "Không phụ thuộc hàm vào bất kỳ tập con thực sự (proper subset) nào của",
      "Hoặc A hoặc B",
      "Cả A và B (Both A and B)"
    ],
    "c": 3,
    "ex_en": "First Normal Form (1NF) requires that all column attributes contain atomic (indivisible) values and that there are no repeating groups.",
    "ex_vi": "Phụ thuộc hàm đầy đủ nghĩa là  phụ thuộc vào toàn bộ tập  và thiếu bất kỳ thuộc tính nào trong  thì phụ thuộc hàm không còn tồn tại."
  },
  {
    "id": 243,
    "module": 13,
    "q_en": "What requirement must a relation satisfy to be in Second Normal Form (2NF)?",
    "o_en": [
      "It must be in 1NF, and every non-key attribute must be fully functionally dependent on the entire primary key (no partial dependencies).",
      "It must contain no multi-valued attributes.",
      "It must have no transitive dependencies.",
      "It must have a single-column primary key only."
    ],
    "q_vi": "Điều nào sau đây là ĐÚNG về Phụ thuộc đa trị (Multivalued dependency)?",
    "o_vi": [
      "Sự xuất hiện của khóa chính kéo theo khóa ngoại",
      "Là ràng buộc mà sự xuất hiện của CÁC DÒNG NHẤT ĐỊNH trong bảng kéo theo sự XUẤT HIỆN CỦA CÁC DÒNG KHÁC (presence of certain rows implies presence of other rows)",
      "Phụ thuộc hàm kéo theo phụ thuộc bắc cầu",
      "Phụ thuộc bắc cầu kéo theo phụ thuộc hàm"
    ],
    "c": 1,
    "ex_en": "Second Normal Form (2NF) requires a table to be in 1NF and that every non-key column is fully functionally dependent on the entire primary key (no partial dependencies).",
    "ex_vi": "Phụ thuộc đa trị  định nghĩa tính độc lập của các tập thuộc tính, dẫn đến sự xuất hiện bắt buộc của các bộ dòng kết hợp."
  },
  {
    "id": 244,
    "module": 4,
    "q_en": "What requirement must a relation satisfy to be in Third Normal Form (3NF)?",
    "o_en": [
      "It must be in 2NF, and no non-key attribute can be transitively dependent on the primary key.",
      "All attributes must be character strings.",
      "It must contain no foreign key constraints.",
      "Every column must be part of a composite key."
    ],
    "q_vi": "Phát biểu nào sau đây là ĐÚNG về Siêu khóa (Super Keys)?",
    "o_vi": [
      "Siêu khóa không thể là khóa ứng viên",
      "Bảng chỉ có thể có duy nhất 1 siêu khóa",
      "Siêu khóa không chứa thuộc tính của khóa ứng viên",
      "Siêu khóa là một tập hợp các thuộc tính có thể dùng để ĐỊNH DANH DUY NHẤT một bản ghi trong CSDL"
    ],
    "c": 3,
    "ex_en": "Third Normal Form (3NF) requires a table to be in 2NF and that no non-key column is transitively dependent on the primary key (no transitive dependencies).",
    "ex_vi": "Super Key là bất kỳ tập hợp một hoặc nhiều thuộc tính nào cho phép phân biệt duy nhất từng dòng trong bảng quan hệ."
  },
  {
    "id": 245,
    "module": 9,
    "q_en": "What requirement must a relation satisfy to be in Boyce-Codd Normal Form (BCNF)?",
    "o_en": [
      "It must be in 3NF, and for every functional dependency X -> Y, X must be a superkey (determinant is a key).",
      "It must have no foreign keys.",
      "It must be in 1NF only.",
      "It must contain at least 10 normalized tables."
    ],
    "q_vi": "Phát biểu nào sau đây KHÔNG đúng?",
    "o_vi": [
      "Thuộc tính khóa (prime attribute) là một phần của tất cả siêu khóa",
      "Thuộc tính khóa là thuộc tính xuất hiện trong ít nhất 1 khóa ứng viên",
      "Thuộc tính không khóa (non-prime attribute) là thuộc tính KHÔNG XUẤT HIỆN trong bất kỳ SIÊU KHÓA nào",
      "Thuộc tính không khóa là thuộc tính không xuất hiện trong bất kỳ khóa ứng viên nào"
    ],
    "c": 2,
    "ex_en": "Boyce-Codd Normal Form (BCNF) is a stricter version of 3NF where every determinant in a functional dependency must be a superkey.",
    "ex_vi": "Mọi Super Key đều chứa Candidate Key, nên các thuộc tính không khóa vẫn có thể nằm trong các Super Key mở rộng (khi ghép thêm thuộc tính thừa)."
  },
  {
    "id": 246,
    "module": 13,
    "q_en": "What does the notation X -> Y signify in database theory?",
    "o_en": [
      "A Functional Dependency where attribute set X uniquely determines attribute set Y.",
      "An outer join between table X and table Y.",
      "A transition state from table X to table Y.",
      "A mathematical subtraction of set Y from set X."
    ],
    "q_vi": "Điều kiện nào sau đây KHÔNG phải là điều kiện bắt buộc để một bảng đạt Dạng chuẩn 1 (1NF)?",
    "o_vi": [
      "Không có các dòng trùng lặp",
      "Không có thứ tự ưu tiên dòng từ trên xuống dưới",
      "Bắt buộc có thứ tự các cột từ trái sang phải (left-to-right ordering to the columns)",
      "Mỗi giao điểm dòng-cột chứa đúng 1 giá trị đơn lẻ (Atomic value)"
    ],
    "c": 2,
    "ex_en": "A Functional Dependency X -> Y indicates that the value of attribute set X uniquely determines the value of attribute set Y.",
    "ex_vi": "Lý thuyết CSDL quan hệ xem tập hợp các cột là không có thứ tự (Unordered), thứ tự vị trí các cột không ảnh hưởng đến Dạng chuẩn 1NF."
  },
  {
    "id": 247,
    "module": 13,
    "q_en": "What is a Partial Dependency?",
    "o_en": [
      "A dependency where a non-key attribute depends on only part of a composite primary key.",
      "A dependency between two primary keys.",
      "A dependency where a non-key attribute depends on another non-key attribute.",
      "A foreign key referencing a non-existent parent row."
    ],
    "q_vi": "Tại sao bảng ở Dạng chuẩn 1 (1NF) dưới đây lại CHƯA ĐẠT Dạng chuẩn 2 (2NF)?\nEmployees' Skills (Employee, Skill, Current Work Location)\n(Khóa chính phức hợp gồm: Employee + Skill)",
    "o_vi": [
      "Thuộc tính không khóa (Current Work Location) không phụ thuộc hàm đầy đủ vào TOÀN BỘ khóa chính (chỉ phụ thuộc vào 1 phần khóa là Employee)",
      "Bảng chứa nhiều bản ghi cho cùng nhân viên",
      "Thuộc tính không khóa phụ thuộc vào mọi thuộc tính khóa",
      "Bảng chưa đạt 1NF"
    ],
    "c": 0,
    "ex_en": "A Partial Dependency occurs when a non-key attribute depends on only a portion of a composite primary key, violating 2NF rules.",
    "ex_vi": "Vi phạm 2NF vì có Phụ thuộc một phần (Partial Dependency): Địa điểm làm việc Current Work Location chỉ phụ thuộc vào Employee, không phụ thuộc vào Skill."
  },
  {
    "id": 248,
    "module": 13,
    "q_en": "What is a Transitive Dependency?",
    "o_en": [
      "A dependency where a non-key attribute depends on another non-key attribute rather than directly on the primary key (A -> B and B -> C).",
      "A dependency on part of a composite key.",
      "A dependency between a primary key and a foreign key.",
      "A multi-valued dependency across three tables."
    ],
    "q_vi": "Dạng chuẩn 3 (3NF) bị vi phạm ở bảng dưới đây do KHÔNG thỏa mãn điều kiện nào?\nTournament Winners (Tournament, Year, Winner, Winner Date of Birth)\n(Khóa chính: Tournament + Year)",
    "o_vi": [
      "Mọi thuộc tính khóa phụ thuộc không bắc cầu",
      "Mọi thuộc tính KHÔNG KHÓA của bảng phải phụ thuộc KHÔNG BẮC CẦU vào khóa ứng viên",
      "Bảng phải đạt 2NF",
      "Bảng phải đạt 1NF"
    ],
    "c": 1,
    "ex_en": "A Transitive Dependency occurs when a non-key attribute depends on another non-key attribute rather than directly on the primary key, violating 3NF rules.",
    "ex_vi": "Bảng chứa Phụ thuộc bắc cầu (Transitive Dependency): (Tournament, Year) -> Winner, và Winner -> Winner Date of Birth. Do đó ngày sinh bị phụ thuộc bắc cầu vào khóa chính."
  },
  {
    "id": 249,
    "module": 13,
    "q_en": "What is Decomposition in database normalization?",
    "o_en": [
      "Breaking down a non-normalized table into smaller, normalized tables without data loss.",
      "Deleting unused tables from a schema.",
      "Truncating database tables to free disk space.",
      "Converting SQL statements into PL/SQL procedures."
    ],
    "q_vi": "Phát biểu nào sau đây về Dạng chuẩn Boyce-Codd (BCNF) là KHÔNG đúng?",
    "o_vi": [
      "Rất hiếm trường hợp bảng 3NF không đạt BCNF",
      "BCNF giải quyết các bất thường mà 3NF chưa xử lý được",
      "BCNF là dạng chuẩn mạnh hơn một chút so với 3NF",
      "Bảng 3NF KHÔNG CÓ nhiều khóa ứng viên chồng chéo bị coi là không đạt BCNF"
    ],
    "c": 3,
    "ex_en": "Decomposition is the process of breaking a non-normalized table down into smaller, normalized tables while preserving data and dependencies.",
    "ex_vi": "Nếu một bảng đạt 3NF và không có các khóa ứng viên chồng chéo (overlapping candidate keys) thì nó chắc chắn đã đạt BCNF."
  },
  {
    "id": 250,
    "module": 13,
    "q_en": "What is a Lossless-Join Decomposition?",
    "o_en": [
      "A decomposition guaranteeing that joining the resulting tables reproduces the exact original table without creating spurious/fake rows.",
      "A join operation that returns no NULL values.",
      "A join that ignores foreign key constraints.",
      "Deleting records from child tables without affecting parent tables."
    ],
    "q_vi": "Tên viết tắt đầy đủ của dạng chuẩn DKNF là gì?",
    "o_vi": [
      "Donner-Korth Normal Form",
      "Domain-Key Normal Form",
      "Dual-Key Normal Form",
      "Domain-Knowledge Normal Form"
    ],
    "c": 1,
    "ex_en": "A Lossless-Join Decomposition guarantees that joining decomposed tables reproduces the exact original table without generating extraneous or spurious rows.",
    "ex_vi": "DKNF = Domain-Key Normal Form (Dạng chuẩn Miền-Khóa)."
  },
  {
    "id": 251,
    "module": 13,
    "q_en": "What is an Insertion Anomaly?",
    "o_en": [
      "Being unable to insert a record for an entity without forcing the entry of unrelated, unnecessary data for another entity.",
      "Failing to insert data due to disk space shortage.",
      "Inserting duplicate primary keys into a table.",
      "Inserting NULL values into a NOT NULL column."
    ],
    "q_vi": "Nếu một bảng được xác nhận đã đạt Dạng chuẩn 3 (3NF), điều nào sau đây có thể KHÔNG ĐÚNG?",
    "o_vi": [
      "Mỗi ô chứa đúng 1 giá trị đơn",
      "Bảng hoàn toàn KHÔNG CÒN các bất thường thao tác dữ liệu (modification anomalies)",
      "Thuộc tính không khóa phụ thuộc không bắc cầu vào khóa",
      "Thuộc tính không khóa phụ thuộc hàm đầy đủ vào khóa"
    ],
    "c": 1,
    "ex_en": "An Insertion Anomaly occurs when a user cannot record a fact about an entity without improperly forcing unrelated data to be entered simultaneously.",
    "ex_vi": "Bảng đạt 3NF vẫn có thể tiềm ẩn các bất thường thao tác nếu chứa nhiều khóa ứng viên chồng chéo (cần đưa tiếp lên BCNF, 4NF, 5NF)."
  },
  {
    "id": 252,
    "module": 13,
    "q_en": "What is a Deletion Anomaly?",
    "o_en": [
      "Unexpectedly losing secondary, vital data about one entity when deleting a record for a different entity.",
      "Failing to execute a DELETE command due to missing WHERE clause.",
      "Deleting a view instead of a table.",
      "Dropping a tablespace accidentally."
    ],
    "q_vi": "Phát biểu nào sau đây mô tả đúng nhất về các Bất thường thao tác (Modification anomalies)?",
    "o_vi": [
      "Bất thường chỉ xảy ra ở 2NF",
      "Không thể sửa dữ liệu khi có bất thường",
      "Khi cố gắng sửa đổi dữ liệu trong bảng, các TÁC DỤNG PHỤ KHÔNG MONG MUỐN có thể xảy ra (undesired side-effects may follow)",
      "Thường xuyên báo lỗi hệ thống"
    ],
    "c": 2,
    "ex_en": "A Deletion Anomaly occurs when deleting a record inadvertently deletes crucial secondary data that was stored in the same row.",
    "ex_vi": "Bất thường dữ liệu (Thêm, Xóa, Sửa) gây ra tình trạng mất dữ liệu ngoài ý muốn hoặc gây ra sự bất nhất (inconsistency) trong CSDL."
  },
  {
    "id": 253,
    "module": 2,
    "q_en": "What is an Update Anomaly?",
    "o_en": [
      "Inconsistency arising when updating redundant data stored in multiple places requires modifying many rows, risking partial updates.",
      "Failing to update a record due to a locked row.",
      "Updating a column with an invalid data type.",
      "Modifying a primary key constraint name."
    ],
    "q_vi": "Ký hiệu nào sau đây chỉ ra rằng  phụ thuộc bắc cầu vào ?",
    "o_vi": [
      "X→Y,Z→X",
      "X→Y,Z→X",
      "Y→Z,Z→X",
      "Z→Y,X→Z"
    ],
    "c": 3,
    "ex_en": "An Update Anomaly occurs when updating a data item stored redundantly in multiple rows requires updating every row, creating data inconsistency risk.",
    "ex_vi": "Phụ thuộc bắc cầu xảy ra khi  và , từ đó dẫn đến  gián tiếp thông qua trung gian  (với  không phải là khóa)."
  },
  {
    "id": 254,
    "module": 13,
    "q_en": "What is a Candidate Key?",
    "o_en": [
      "A minimal set of attributes that can uniquely identify any tuple (row) in a relation.",
      "Any column that accepts NULL values.",
      "A foreign key referenced in another table.",
      "A index created on a DATE column."
    ],
    "q_vi": "Tên gọi đầy đủ của Dạng chuẩn BCNF là gì?",
    "o_vi": [
      "Boyce-Cartesian normal form",
      "Boyce-Codd normal form",
      "Bond-Codd normal form",
      "Borne-Codd normal form"
    ],
    "c": 1,
    "ex_en": "A Candidate Key is a minimal set of attributes that uniquely identifies any tuple in a database table.",
    "ex_vi": "BCNF = Boyce-Codd Normal Form (được đặt theo tên Raymond F. Boyce và Edgar F. Codd)."
  },
  {
    "id": 255,
    "module": 13,
    "q_en": "What is the difference between a Superkey and a Candidate Key?",
    "o_en": [
      "A Superkey is any set of attributes that uniquely identifies a row; a Candidate Key is a minimal Superkey with no redundant attributes.",
      "A Candidate Key contains duplicate values, whereas a Superkey does not.",
      "A Superkey applies only to views, whereas a Candidate Key applies to tables.",
      "There is no difference; they are identical terms."
    ],
    "q_vi": "Tên nào sau đây KHÔNG phải là một loại Bất thường thao tác (Modification anomaly) chuẩn?",
    "o_vi": [
      "Update Anomaly (Bất thường khi cập nhật)",
      "Insertion anomaly (Bất thường khi chèn)",
      "Deletion anomaly (Bất thường khi xóa)",
      "Drop anomaly"
    ],
    "c": 3,
    "ex_en": "A Superkey is any set of attributes that uniquely identifies a tuple; a candidate key is a minimal superkey.",
    "ex_vi": "3 loại bất thường thao tác chuẩn trong lý thuyết CSDL là: Insertion Anomaly, Deletion Anomaly, và Update Anomaly."
  },
  {
    "id": 256,
    "module": 13,
    "q_en": "How do you normalize an unnormalized table containing repeating comma-separated values in a single column (e.g., Phone_Numbers = '123, 456, 789') into 1NF?",
    "o_en": [
      "Split the repeating values into individual rows so that every row-column intersection holds an atomic value.",
      "Combine the phone numbers with the customer name in a single string.",
      "Add a CHECK constraint restricting phone numbers to numbers only.",
      "Create a view that converts numbers to uppercase."
    ],
    "q_vi": "Xét cấu trúc bảng giảng viên: Faculty (Faculty ID, Faculty Name, Faculty Hire Date, Course Code). Các loại bất thường thao tác nào có thể xảy ra khi chỉnh sửa bảng này?",
    "o_vi": [
      "Bất thường khi Chèn, Cập nhật và Xóa (Insertion, Update and Deletion anomaly)",
      "Chỉ bất thường khi chèn",
      "Bất thường Chèn và Cập nhật",
      "Bất thường Cập nhật và Xóa"
    ],
    "c": 0,
    "ex_en": "To convert a table with repeating multi-valued fields into 1NF, separate repeating values into individual rows so every cell contains an atomic value.",
    "ex_vi": "Do bảng bị trùng lặp dữ liệu giảng viên cho mỗi môn học, nó chịu cả 3 loại bất thường: Không thêm được giảng viên chưa dạy môn nào, xóa môn làm mất thông tin giảng viên, và phải sửa ngày tuyển dụng ở nhiều dòng."
  },
  {
    "id": 257,
    "module": 13,
    "q_en": "Which step transforms a table from 1NF to 2NF?",
    "o_en": [
      "Removing partial functional dependencies by moving attributes depending on part of a composite key into separate tables.",
      "Removing transitive dependencies.",
      "Removing multi-valued dependencies.",
      "Adding synthetic surrogate keys to all tables."
    ],
    "q_vi": "Điều nào sau đây KHÔNG phải là một mục tiêu hợp lệ của việc chuẩn hóa CSDL?",
    "o_vi": [
      "Loại bỏ các bất thường thao tác",
      "Giúp mô hình dữ liệu rõ ràng hơn",
      "HOÀN TOÀN TRÁNH VIỆC THAY ĐỔI CẤU TRÚC BẢNG sau khi chuẩn hóa (Completely avoid the need to change table structure)",
      "Giảm thiểu việc thiết kế lại khi mở rộng CSDL"
    ],
    "c": 2,
    "ex_en": "Removing partial dependencies from a 1NF table elevates the database design to Second Normal Form (2NF).",
    "ex_vi": "Chuẩn hóa tối ưu cấu trúc dữ liệu hiện tại, nhưng không thể đảm bảo ngăn cấm tuyệt đối việc phải thay đổi cấu trúc bảng khi yêu cầu nghiệp vụ tương lai thay đổi."
  },
  {
    "id": 258,
    "module": 13,
    "q_en": "Which step transforms a table from 2NF to 3NF?",
    "o_en": [
      "Removing transitive functional dependencies (where a non-key attribute determines another non-key attribute).",
      "Removing atomic values.",
      "Removing primary keys from child tables.",
      "Combining all child tables into a parent table."
    ],
    "q_vi": "Xét bảng Transactions chứa dữ liệu giao dịch của khách hàng với các ô bị bỏ trống/lồng nhóm. Bảng này đang ở Dạng chuẩn nào?",
    "o_vi": [
      "3NF",
      "1NF",
      "2NF",
      "Chưa đạt Dạng chuẩn 1 (Non 1NF)"
    ],
    "c": 3,
    "ex_en": "Removing transitive dependencies from a 2NF table elevates the database design to Third Normal Form (3NF).",
    "ex_vi": "Bảng chứa các nhóm lặp (repeating groups) hoặc các ô rỗng gộp dòng vi phạm tính nguyên tố (Atomicity), do đó chưa đạt Dạng chuẩn 1NF."
  },
  {
    "id": 259,
    "module": 13,
    "q_en": "What does Fourth Normal Form (4NF) deal with?",
    "o_en": [
      "Eliminating multi-valued dependencies (MVDs) where independent multi-valued attributes exist in a table.",
      "Eliminating partial dependencies on composite keys.",
      "Eliminating single-row subqueries in triggers.",
      "Eliminating NULL values across all columns."
    ],
    "q_vi": "Phụ thuộc hàm (Functional dependency) được định nghĩa như thế nào?",
    "o_vi": [
      "Thuộc tính Y gán với nhiều X",
      "Mỗi Y gán với đúng một X",
      "Trong một bảng, thuộc tính Y phụ thuộc hàm vào tập X nếu và chỉ nếu MỖI GIÁ TRỊ X XÁC ĐỊNH CHÍNH XÁC MỘT GIÁ TRỊ Y (each X value is associated with precisely one Y value)",
      "Mỗi X gán với ít nhất một Y"
    ],
    "c": 2,
    "ex_en": "Fourth Normal Form (4NF) eliminates multi-valued dependencies (MVDs) where one attribute determines a set of independent values for another attribute.",
    "ex_vi": "Ký hiệu : Biết giá trị của  thì luôn luôn xác định được duy nhất một giá trị tương ứng của ."
  },
  {
    "id": 260,
    "module": 2,
    "q_en": "What is Denormalization and when is it intentionally used?",
    "o_en": [
      "The intentional process of combining normalized tables to re-introduce controlled redundancy, improving query READ performance at the cost of write efficiency.",
      "An accidental database design mistake that violates 1NF rules.",
      "The process of dropping indexes to save disk space.",
      "Converting relational database tables into NoSQL documents."
    ],
    "q_vi": "Ký hiệu X→Y thể hiện điều gì về các thuộc tính X và Y?",
    "o_vi": [
      "X phụ thuộc hàm vào Y",
      "Y phụ thuộc hàm vào X (Y is functionally dependent on X)",
      "Không phương án nào",
      "X và Y phụ thuộc hàm lẫn nhau"
    ],
    "c": 1,
    "ex_en": "Denormalization is the intentional process of re-introducing redundancy into a normalized database schema to optimize read/query performance.",
    "ex_vi": "X→Y đọc là \"X xác định hàm Y\" hoặc \"Y phụ thuộc hàm vào X\"."
  }
];
