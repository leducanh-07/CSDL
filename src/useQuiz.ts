import { useState, useMemo, useEffect } from 'react';
import type { Question, QuizMode } from './types';
import questionsData from './data/questions.json';

const ALL_QUESTIONS = questionsData as Question[];

export function useQuiz() {
  const [lang, setLang] = useState<'en' | 'vi'>('vi');
  const [mode, setMode] = useState<QuizMode>('practice');
  const [selectedModule, setSelectedModule] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  
  // Exam state
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examTimeLeft, setExamTimeLeft] = useState(0);
   // Default 20 q
  const [examQuestionCount, setExamQuestionCount] = useState(20);

  // Load from local storage
  useEffect(() => {
    const bms = localStorage.getItem('dbms_bookmarks');
    if (bms) setBookmarks(JSON.parse(bms));
    const savedLang = localStorage.getItem('dbms_lang');
    if (savedLang === 'en' || savedLang === 'vi') setLang(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem('dbms_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('dbms_lang', lang);
  }, [lang]);

  // Filtering
  const filteredQuestions = useMemo(() => {
    let q = ALL_QUESTIONS;
    if (selectedModule > 0) {
      q = q.filter(x => x.module === selectedModule);
    }
    if (onlyBookmarks) {
      q = q.filter(x => bookmarks.includes(x.id));
    }
    return q;
  }, [selectedModule, onlyBookmarks, bookmarks]);

  // Exam logic
  useEffect(() => {
    if (mode === 'exam' && examStarted && !examFinished) {
      const timer = setInterval(() => {
        setExamTimeLeft(prev => {
          if (prev <= 1) {
            setExamFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mode, examStarted, examFinished]);

  const startExam = () => {
    // Shuffle and pick
    
    // We'll just use filteredQuestions for now if we want full set, or subset
    // Wait, the exam mode should pick examQuestionCount
    // Let's just pick first N after shuffle
    setExamStarted(true);
    setExamFinished(false);
    setExamTimeLeft(examQuestionCount * 90); // 1.5 mins per question
    setAnswers({});
    setCurrentIndex(0);
  };

  const finishExam = () => {
    setExamFinished(true);
  };

  const toggleBookmark = (id: number) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const answerQuestion = (qId: number, optionIndex: number) => {
    if (mode === 'practice' && answers[qId] !== undefined) return; // already answered
    if (mode === 'exam' && examFinished) return;
    setAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const resetPractice = () => {
    setAnswers({});
    setCurrentIndex(0);
  };

  const switchMode = (m: QuizMode) => {
    setMode(m);
    setExamStarted(false);
    setExamFinished(false);
    setAnswers({});
    setCurrentIndex(0);
  };

  return {
    lang, setLang,
    mode, switchMode,
    selectedModule, setSelectedModule,
    onlyBookmarks, setOnlyBookmarks,
    questions: filteredQuestions,
    currentIndex, setCurrentIndex,
    answers, answerQuestion,
    bookmarks, toggleBookmark,
    examStarted, examFinished, examTimeLeft,
    startExam, finishExam,
    examQuestionCount, setExamQuestionCount,
    resetPractice,
    ALL_QUESTIONS
  };
}
