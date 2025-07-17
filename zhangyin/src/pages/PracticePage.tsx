import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getExerciseById } from '../data/exercises';
import { Send, RotateCcw, CheckCircle, AlertCircle } from 'lucide-react';

export const PracticePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const exerciseId = searchParams.get('exercise');
  const exercise = exerciseId ? getExerciseById(exerciseId) : null;
  
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [score, setScore] = useState<any>(null);
  const [wordCount, setWordCount] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    const words = answer.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [answer]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const startWriting = () => {
    setIsTimerRunning(true);
  };

  const resetAnswer = () => {
    setAnswer('');
    setScore(null);
    setTimeElapsed(0);
    setIsTimerRunning(false);
  };

  const submitAnswer = async () => {
    if (wordCount < exercise?.requiredLength! * 0.8) {
      alert(`词数不足！需要至少 ${Math.round(exercise?.requiredLength! * 0.8)} 词`);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate AI grading
    setTimeout(() => {
      const mockScore = {
        content: Math.floor(Math.random() * 3) + 7,
        language: Math.floor(Math.random() * 3) + 7,
        structure: Math.floor(Math.random() * 3) + 7,
        feedback: [
          '故事情节连贯，符合原文逻辑',
          '词汇使用较为丰富，但可进一步提升',
          '语法结构基本正确，注意时态一致性',
          '建议增加更多细节描写，使故事更生动'
        ],
        suggestions: [
          '可以尝试使用更多连接词增强连贯性',
          '注意段落之间的过渡',
          '考虑使用复合句提升语言层次'
        ]
      };
      mockScore.total = mockScore.content + mockScore.language + mockScore.structure;
      setScore(mockScore);
      setIsSubmitting(false);
      setIsTimerRunning(false);
    }, 2000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const randomExercise = () => {
    const exercises = [
      '1', '2', '3'
    ];
    const randomId = exercises[Math.floor(Math.random() * exercises.length)];
    window.location.href = `/practice?exercise=${randomId}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">在线练习</h1>
        <p className="text-gray-600">开始你的读后续写练习之旅</p>
      </div>

      {exercise ? (
        <div className="space-y-6">
          {/* Exercise Info */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{exercise.title}</h2>
            <p className="text-gray-600 mb-4">{exercise.text}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>要求词数: {exercise.requiredLength}词</span>
              <span>难度: {exercise.difficulty}</span>
              <span>分类: {exercise.category}</span>
            </div>
          </div>

          {/* Writing Area */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">写作区域</h3>
              <div className="flex items-center gap-4 text-sm">
                <span className={`font-medium ${wordCount >= exercise.requiredLength ? 'text-green-600' : 'text-gray-600'}`}>
                  词数: {wordCount}/{exercise.requiredLength}
                </span>
                <span className="text-gray-600">用时: {formatTime(timeElapsed)}</span>
              </div>
            </div>
            
            <textarea
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                if (!isTimerRunning && e.target.value.length > 0) {
                  startWriting();
                }
              }}
              placeholder="在这里开始续写故事..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              disabled={isSubmitting}
            />
            
            <div className="flex gap-3 mt-4">
              <button
                onClick={submitAnswer}
                disabled={isSubmitting || !answer.trim()}
                className="btn-primary flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    评分中...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    提交答案
                  </>
                )}
              </button>
              
              <button
                onClick={resetAnswer}
                className="btn-secondary flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                重新开始
              </button>
            </div>
          </div>

          {/* Score Result */}
          {score && (
            <div className="card bg-green-50 border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                评分结果
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{score.content}</div>
                  <div className="text-sm text-gray-600">内容分</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{score.language}</div>
                  <div className="text-sm text-gray-600">语言分</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{score.structure}</div>
                  <div className="text-sm text-gray-600">结构分</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg">
                  <div className="text-2xl font-bold">{score.total}</div>
                  <div className="text-sm">总分</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">优点反馈</h4>
                  <ul className="space-y-1">
                    {score.feedback.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">改进建议</h4>
                  <ul className="space-y-1">
                    {score.suggestions.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <AlertCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">随机练习</h2>
          <p className="text-gray-600 mb-6">系统将为你随机选择一道练习题</p>
          <button onClick={randomExercise} className="btn-primary">
            开始随机练习
          </button>
        </div>
      )}
    </div>
  );
};