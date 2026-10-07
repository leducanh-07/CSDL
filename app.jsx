const { useState, useEffect, useMemo } = React;
const { motion, AnimatePresence } = window.Motion;

function useQuiz() {
  const [lang, setLang] = useState('vi');
  const [mode, setMode] = useState('practice');
  const [selectedModule, setSelectedModule] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examTimeLeft, setExamTimeLeft] = useState(0);
  const [examQuestionCount, setExamQuestionCount] = useState(20);

  useEffect(() => {
    const bms = localStorage.getItem('dbms_bookmarks');
    if (bms) setBookmarks(JSON.parse(bms));
    const savedLang = localStorage.getItem('dbms_lang');
    if (savedLang === 'en' || savedLang === 'vi') setLang(savedLang);
  }, []);

  useEffect(() => { localStorage.setItem('dbms_bookmarks', JSON.stringify(bookmarks)); }, [bookmarks]);
  useEffect(() => { localStorage.setItem('dbms_lang', lang); }, [lang]);

  const filteredQuestions = useMemo(() => {
    let q = DATA;
    if (selectedModule > 0) q = q.filter(x => x.module === selectedModule);
    if (onlyBookmarks) q = q.filter(x => bookmarks.includes(x.id));
    return q;
  }, [selectedModule, onlyBookmarks, bookmarks]);

  useEffect(() => {
    if (mode === 'exam' && examStarted && !examFinished) {
      const timer = setInterval(() => {
        setExamTimeLeft(prev => {
          if (prev <= 1) { setExamFinished(true); return 0; }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mode, examStarted, examFinished]);

  const startExam = () => {
    setExamStarted(true);
    setExamFinished(false);
    setExamTimeLeft(examQuestionCount * 90);
    setAnswers({});
    setCurrentIndex(0);
  };

  const finishExam = () => setExamFinished(true);

  const toggleBookmark = (id) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const answerQuestion = (qId, optionIndex) => {
    if (mode === 'practice' && answers[qId] !== undefined) return; 
    if (mode === 'exam' && examFinished) return;
    setAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const resetPractice = () => { setAnswers({}); setCurrentIndex(0); };

  const switchMode = (m) => {
    setMode(m);
    setExamStarted(false);
    setExamFinished(false);
    setAnswers({});
    setCurrentIndex(0);
  };

  return {
    lang, setLang, mode, switchMode, selectedModule, setSelectedModule,
    onlyBookmarks, setOnlyBookmarks, questions: filteredQuestions,
    currentIndex, setCurrentIndex, answers, answerQuestion, bookmarks, toggleBookmark,
    examStarted, examFinished, examTimeLeft, startExam, finishExam,
    examQuestionCount, setExamQuestionCount, resetPractice, ALL_QUESTIONS: DATA
  };
}

function App() {
  const quiz = useQuiz();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const t = quiz.lang === 'en' ? {
    title: "DBMS & SQL Mastery", subtitle: `${quiz.ALL_QUESTIONS.length} Questions Bank`,
    allMods: "All Modules", practice: "Practice", exam: "Exam",
    bookmarkedOnly: "Bookmarked Only", startExam: "Start Exam", submit: "Submit Exam",
    retake: "Start Over", qCount: "Questions", explanation: "Explanation",
    correct: "Correct!", incorrect: "Incorrect.", ansWas: "The correct answer is:",
    prev: "Prev", next: "Next", viewScore: "View Score", scoreSummary: "Exam Results",
    passed: "Passed \uD83C\uDF89", failed: "Keep practicing!", time: "Time", unanswered: "Unanswered",
    langSwitch: "Tiếng Việt", noQuestions: "No questions found."
  } : {
    title: "Ôn tập DBMS & SQL", subtitle: `Ngân hàng ${quiz.ALL_QUESTIONS.length} câu hỏi`,
    allMods: "Tất cả chủ đề", practice: "Ôn tập", exam: "Thi thử",
    bookmarkedOnly: "Chỉ xem câu đánh dấu", startExam: "Bắt đầu thi", submit: "Nộp bài",
    retake: "Làm lại từ đầu", qCount: "Số câu", explanation: "Giải thích",
    correct: "Chính xác!", incorrect: "Chưa đúng.", ansWas: "Đáp án đúng:",
    prev: "Câu trước", next: "Câu sau", viewScore: "Xem điểm", scoreSummary: "Kết quả thi thử",
    passed: "Đạt \uD83C\uDF89", failed: "Chưa đạt, hãy ôn thêm nhé", time: "Thời gian", unanswered: "Bỏ trống",
    langSwitch: "English", noQuestions: "Không tìm thấy câu hỏi phù hợp."
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  const examQuestions = useMemo(() => {
    if (quiz.mode !== 'exam' || !quiz.examStarted) return quiz.questions;
    return quiz.questions.slice(0, quiz.examQuestionCount);
  }, [quiz.mode, quiz.examStarted, quiz.questions, quiz.examQuestionCount]);

  const activeQuestions = quiz.mode === 'exam' && quiz.examStarted ? examQuestions : quiz.questions;
  const currentQ = activeQuestions[quiz.currentIndex];

  const totalAns = activeQuestions.filter(q => quiz.answers[q.id] !== undefined).length;
  const correctAns = activeQuestions.filter(q => quiz.answers[q.id] === q.c).length;
  const pct = activeQuestions.length > 0 ? Math.round((correctAns / activeQuestions.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans">
      <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-center px-4 sticky top-0 z-40">
        <button className="p-2 lg:hidden mr-2 text-cyan-400" onClick={() => setSidebarOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <i className="fa-solid fa-database text-cyan-400 mr-3 text-xl"></i>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg leading-tight bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <span className="text-xs text-slate-400">{t.subtitle}</span>
        </div>
        <div className="flex-1"></div>
        {quiz.mode === 'exam' && quiz.examStarted && !quiz.examFinished && (
          <div className={`mr-4 font-mono font-bold px-3 py-1 rounded-md bg-slate-800 ${quiz.examTimeLeft < 60 ? 'text-fuchsia-500 animate-pulse' : 'text-cyan-400'}`}>
            <i className="fa-regular fa-clock mr-2"></i>{formatTime(quiz.examTimeLeft)}
          </div>
        )}
        <button 
          onClick={() => quiz.setLang(quiz.lang === 'en' ? 'vi' : 'en')}
          className="flex items-center text-sm font-medium px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 hover:border-cyan-500/50"
        >
          <i className="fa-solid fa-globe mr-2 text-cyan-400"></i>{t.langSwitch}
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        <AnimatePresence>
          {(sidebarOpen || window.innerWidth >= 1024) && (
            <React.Fragment>
              {sidebarOpen && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-slate-950/80 z-40 lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
              )}
              <motion.aside 
                initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed lg:static inset-y-0 left-0 w-72 bg-slate-900 border-r border-slate-800 z-50 flex flex-col h-full"
              >
                <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                  <h2 className="font-semibold flex items-center"><i className="fa-solid fa-gear mr-2 text-fuchsia-400"></i> Settings</h2>
                  <button className="lg:hidden p-1 text-slate-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
                    <i className="fa-solid fa-xmark text-lg"></i>
                  </button>
                </div>
                <div className="p-4 overflow-y-auto flex-1 space-y-6">
                  <div className="flex p-1 bg-slate-950 rounded-lg border border-slate-800">
                    <button onClick={() => quiz.switchMode('practice')} className={`flex-1 py-1.5 text-sm font-medium rounded-md flex justify-center items-center ${quiz.mode === 'practice' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400 hover:text-slate-200'}`}>
                      <i className="fa-solid fa-book-open mr-2"></i> {t.practice}
                    </button>
                    <button onClick={() => quiz.switchMode('exam')} className={`flex-1 py-1.5 text-sm font-medium rounded-md flex justify-center items-center ${quiz.mode === 'exam' ? 'bg-fuchsia-500/20 text-fuchsia-400' : 'text-slate-400 hover:text-slate-200'}`}>
                      <i className="fa-solid fa-stopwatch mr-2"></i> {t.exam}
                    </button>
                  </div>

                  <div className={`space-y-4 ${quiz.mode === 'exam' && quiz.examStarted ? 'opacity-50 pointer-events-none' : ''}`}>
                    <div>
                      <label className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2 block">Module</label>
                      <select 
                        value={quiz.selectedModule} onChange={e => quiz.setSelectedModule(Number(e.target.value))}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-slate-200 outline-none focus:border-cyan-500"
                      >
                        <option value={0}>{t.allMods} ({quiz.ALL_QUESTIONS.length})</option>
                        {MODULES.map((name, i) => (
                          <option key={i} value={i+1}>{i+1}. {name}</option>
                        ))}
                      </select>
                    </div>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" checked={quiz.onlyBookmarks} onChange={e => quiz.setOnlyBookmarks(e.target.checked)} className="rounded border-slate-700 bg-slate-900 text-cyan-500" />
                      <span className="text-sm">{t.bookmarkedOnly} ({quiz.bookmarks.length})</span>
                    </label>

                    {quiz.mode === 'exam' && !quiz.examStarted && (
                      <div>
                        <label className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2 block">{t.qCount}</label>
                        <select 
                          value={quiz.examQuestionCount} onChange={e => quiz.setExamQuestionCount(Number(e.target.value))}
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-sm text-slate-200 outline-none focus:border-fuchsia-500"
                        >
                          {[10, 20, 40, 60].map(n => <option key={n} value={n}>{n} {t.qCount}</option>)}
                        </select>
                        <button onClick={quiz.startExam} className="mt-4 w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-medium py-2 rounded-lg flex items-center justify-center">
                          <i className="fa-solid fa-play mr-2"></i> {t.startExam}
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2 flex justify-between">
                      Navigation <span>{activeQuestions.length}</span>
                    </label>
                    <div className="grid grid-cols-5 gap-1.5 max-h-64 overflow-y-auto pr-1">
                      {activeQuestions.map((q, i) => {
                        const ans = quiz.answers[q.id];
                        let stateClass = "bg-slate-800 text-slate-400 border-slate-700";
                        if (ans !== undefined) {
                          if (quiz.mode === 'practice' || quiz.examFinished) {
                            stateClass = ans === q.c ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50" : "bg-rose-500/20 text-rose-400 border-rose-500/50";
                          } else {
                            stateClass = "bg-cyan-500/20 text-cyan-400 border-cyan-500/50";
                          }
                        }
                        if (i === quiz.currentIndex) stateClass += " ring-2 ring-white";
                        return (
                          <button 
                            key={q.id} onClick={() => { quiz.setCurrentIndex(i); if(window.innerWidth<1024) setSidebarOpen(false); }}
                            className={`text-xs font-mono py-1.5 rounded border relative ${stateClass}`}
                          >
                            {i + 1}
                            {quiz.bookmarks.includes(q.id) && <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-400"></div>}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {quiz.mode === 'practice' && totalAns > 0 && (
                    <button onClick={quiz.resetPractice} className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-2 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-rotate-left mr-2"></i> {t.retake}
                    </button>
                  )}
                  {quiz.mode === 'exam' && quiz.examStarted && !quiz.examFinished && (
                     <button onClick={quiz.finishExam} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-2 rounded-lg flex items-center justify-center">
                     <i className="fa-solid fa-paper-plane mr-2"></i> {t.submit}
                   </button>
                  )}
                </div>
              </motion.aside>
            </React.Fragment>
          )}
        </AnimatePresence>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-950 relative">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence>
              {quiz.mode === 'exam' && quiz.examFinished && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 rounded-2xl border border-slate-800 bg-slate-900 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500"></div>
                  <h2 className="text-2xl font-bold mb-4">{t.scoreSummary}</h2>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="text-5xl font-black bg-gradient-to-br from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                      {pct}%
                    </div>
                    <div className="flex flex-col text-sm text-slate-400 space-y-1">
                      <span className="text-emerald-400"><i className="fa-solid fa-check-circle mr-1"></i> {correctAns} {t.correct}</span>
                      <span className="text-rose-400"><i className="fa-solid fa-times-circle mr-1"></i> {totalAns - correctAns} {t.incorrect}</span>
                      <span className="text-slate-500"><i className="fa-regular fa-circle mr-1"></i> {activeQuestions.length - totalAns} {t.unanswered}</span>
                    </div>
                  </div>
                  <p className="text-lg font-medium">{pct >= 70 ? t.passed : t.failed}</p>
                  <button onClick={() => quiz.switchMode('exam')} className="mt-6 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg font-medium text-sm">
                    <i className="fa-solid fa-rotate-left mr-2"></i> {t.retake}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {!currentQ ? (
              <div className="text-center mt-20 text-slate-500">
                <i className="fa-solid fa-book-open text-5xl mb-4 opacity-20"></i>
                <p>{t.noQuestions}</p>
              </div>
            ) : (
              <motion.div 
                key={currentQ.id}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 rounded-t-2xl overflow-hidden">
                   <motion.div className="h-full bg-cyan-500" initial={{ width: 0 }} animate={{ width: `${((quiz.currentIndex + 1) / activeQuestions.length) * 100}%` }} />
                </div>

                <div className="flex justify-between items-start mb-6 mt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 bg-fuchsia-400/10 px-2 py-1 rounded">
                    Module {currentQ.module}
                  </span>
                  <button onClick={() => quiz.toggleBookmark(currentQ.id)} className={`p-2 rounded-full transition-colors ${quiz.bookmarks.includes(currentQ.id) ? 'text-yellow-400 bg-yellow-400/10' : 'text-slate-500 hover:bg-slate-800'}`}>
                    <i className={`${quiz.bookmarks.includes(currentQ.id) ? 'fa-solid' : 'fa-regular'} fa-star text-lg`}></i>
                  </button>
                </div>

                <div className="text-lg md:text-xl font-medium mb-8 whitespace-pre-wrap text-slate-200">
                  {quiz.lang === 'en' ? currentQ.q_en : currentQ.q_vi}
                </div>

                <div className="space-y-3">
                  {(quiz.lang === 'en' ? currentQ.o_en : currentQ.o_vi).map((opt, i) => {
                    const isSelected = quiz.answers[currentQ.id] === i;
                    const isCorrect = currentQ.c === i;
                    const showResult = (quiz.mode === 'practice' && quiz.answers[currentQ.id] !== undefined) || (quiz.mode === 'exam' && quiz.examFinished);
                    
                    let bgClass = "bg-slate-950 border-slate-800 hover:border-cyan-500/50";
                    let icon = <div className="w-6 h-6 rounded-full border border-slate-700 flex-shrink-0 flex items-center justify-center text-xs text-slate-500">{String.fromCharCode(65+i)}</div>;

                    if (showResult) {
                      if (isCorrect) {
                        bgClass = "bg-emerald-500/10 border-emerald-500/50";
                        icon = <i className="fa-solid fa-check-circle text-emerald-400 text-xl"></i>;
                      } else if (isSelected) {
                        bgClass = "bg-rose-500/10 border-rose-500/50";
                        icon = <i className="fa-solid fa-times-circle text-rose-400 text-xl"></i>;
                      } else {
                        bgClass = "bg-slate-950 border-slate-800 opacity-50";
                      }
                    } else if (isSelected) {
                      bgClass = "bg-cyan-500/20 border-cyan-500";
                      icon = <div className="w-6 h-6 rounded-full bg-cyan-500 flex-shrink-0 flex items-center justify-center text-xs text-slate-900 font-bold">{String.fromCharCode(65+i)}</div>;
                    }

                    return (
                      <motion.button
                        key={i}
                        whileHover={!showResult ? { scale: 1.01 } : {}}
                        whileTap={!showResult ? { scale: 0.99 } : {}}
                        onClick={() => quiz.answerQuestion(currentQ.id, i)}
                        disabled={showResult}
                        className={`w-full text-left p-4 rounded-xl border flex items-start space-x-4 transition-all duration-200 ${bgClass}`}
                      >
                        {icon}
                        <span className="flex-1 text-slate-300 leading-relaxed">{opt}</span>
                      </motion.button>
                    )
                  })}
                </div>

                <AnimatePresence>
                  {((quiz.mode === 'practice' && quiz.answers[currentQ.id] !== undefined) || (quiz.mode === 'exam' && quiz.examFinished)) && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, rotateX: -10 }} animate={{ opacity: 1, height: 'auto', rotateX: 0 }} 
                      className="mt-8 overflow-hidden rounded-xl bg-slate-950 border border-slate-800"
                      style={{ perspective: 1000 }}
                    >
                      <div className="p-4 bg-slate-900/50 border-b border-slate-800 flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${quiz.answers[currentQ.id] === currentQ.c ? 'bg-emerald-400' : 'bg-rose-400'}`}></div>
                        <h4 className="font-semibold text-slate-300">{t.explanation}</h4>
                      </div>
                      <div className="p-5 text-slate-400 leading-relaxed text-sm whitespace-pre-wrap">
                        <p className="mb-2 font-medium text-slate-300">
                          {quiz.answers[currentQ.id] === currentQ.c ? t.correct : t.incorrect} {t.ansWas} {String.fromCharCode(65 + currentQ.c)}
                        </p>
                        {quiz.lang === 'en' ? currentQ.ex_en : currentQ.ex_vi}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 flex justify-between items-center pt-6 border-t border-slate-800">
                  <button 
                    disabled={quiz.currentIndex === 0} 
                    onClick={() => quiz.setCurrentIndex(i => i - 1)}
                    className="flex items-center px-4 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <i className="fa-solid fa-chevron-left mr-2"></i> {t.prev}
                  </button>
                  <button 
                    disabled={quiz.currentIndex === activeQuestions.length - 1} 
                    onClick={() => quiz.setCurrentIndex(i => i + 1)}
                    className="flex items-center px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 disabled:opacity-30"
                  >
                    {t.next} <i className="fa-solid fa-chevron-right ml-2"></i>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
