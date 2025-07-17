import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getExerciseById } from '../data/exercises';
import { ArrowLeft, BookOpen, Target, Zap } from 'lucide-react';

export const AnalysisPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = getExerciseById(id || '');

  if (!exercise) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">习题未找到</h2>
          <Link to="/exercises" className="btn-primary">
            返回习题列表
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '简单';
      case 'medium': return '中等';
      case 'hard': return '困难';
      default: return difficulty;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/exercises" className="flex items-center text-primary-600 hover:text-primary-700 mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          返回习题列表
        </Link>
        
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{exercise.title}</h1>
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
            {getDifficultyText(exercise.difficulty)}
          </span>
        </div>
        
        <div className="text-sm text-gray-600 mb-4">
          分类: {exercise.category} | 要求词数: {exercise.requiredLength}词
        </div>
      </div>

      {/* Original Text */}
      <div className="card mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-primary-600" />
          原文
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {exercise.text}
        </p>
      </div>

      {/* Key Points */}
      <div className="card mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="h-5 w-5 mr-2 text-primary-600" />
          写作要点
        </h2>
        <ul className="space-y-2">
          {exercise.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sample Answer */}
      {exercise.sampleAnswer && (
        <div className="card mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">范文示例</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {exercise.sampleAnswer}
            </p>
          </div>
        </div>
      )}

      {/* Analysis */}
      {exercise.analysis && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Zap className="h-6 w-6 mr-2 text-primary-600" />
            深度解析
          </h2>

          {/* Structure Analysis */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">结构分析</h3>
            <ul className="space-y-2">
              {exercise.analysis.structure.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>

          {/* Vocabulary Analysis */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">词汇亮点</h3>
            <div className="flex flex-wrap gap-2">
              {exercise.analysis.vocabulary.map((word, index) => (
                <span key={index} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Grammar Analysis */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">语法要点</h3>
            <ul className="space-y-2">
              {exercise.analysis.grammar.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>

          {/* Coherence Analysis */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">连贯性分析</h3>
            <ul className="space-y-2">
              {exercise.analysis.coherence.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>

          {/* Scoring Criteria */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">评分标准</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {exercise.analysis.scoring.content}/10
                </div>
                <div className="text-sm text-gray-600">内容分</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {exercise.analysis.scoring.language}/10
                </div>
                <div className="text-sm text-gray-600">语言分</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {exercise.analysis.scoring.structure}/10
                </div>
                <div className="text-sm text-gray-600">结构分</div>
              </div>
            </div>
            <div className="text-center mt-4 p-4 bg-primary-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-700">
                总分: {exercise.analysis.scoring.total}/30
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4 justify-center">
        <Link to={`/practice?exercise=${exercise.id}`} className="btn-primary px-6 py-3">
          开始练习
        </Link>
        <Link to="/exercises" className="btn-secondary px-6 py-3">
          查看其他习题
        </Link>
      </div>
    </div>
  );
};