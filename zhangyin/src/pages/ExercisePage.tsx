import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { exercises } from '../data/exercises';
import { Star, Clock, Filter, Search, BookOpen, Play, Eye } from 'lucide-react';

export const ExercisePage: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const difficulties = ['all', 'easy', 'medium', 'hard'];
  const categories = ['all', '日常生活', '人际关系', '教育成长'];

  const filteredExercises = exercises.filter(exercise => {
    const matchesDifficulty = selectedDifficulty === 'all' || exercise.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDifficulty && matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200';
      case 'medium': return 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border border-yellow-200';
      case 'hard': return 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border border-red-200';
      default: return 'bg-gray-100 text-gray-800 border border-gray-200';
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

  const getDifficultyStars = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 1;
      case 'medium': return 2;
      case 'hard': return 3;
      default: return 0;
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded-lg w-48 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-64 mb-8"></div>
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
            <div className="h-4 bg-gray-200 rounded-lg w-32 mb-4"></div>
            <div className="flex gap-4 mb-4">
              <div className="h-8 bg-gray-200 rounded-full w-20"></div>
              <div className="h-8 bg-gray-200 rounded-full w-20"></div>
              <div className="h-8 bg-gray-200 rounded-full w-20"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="h-4 bg-gray-200 rounded-lg w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded-lg w-1/4 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded-lg"></div>
                  <div className="h-3 bg-gray-200 rounded-lg"></div>
                  <div className="h-3 bg-gray-200 rounded-lg w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">经典习题解析</h1>
        <p className="text-lg text-gray-600">精选高考真题，提供详细解析和评分标准</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索习题标题或内容..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">难度:</span>
              <div className="flex gap-2">
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-4 py-2 text-sm rounded-xl transition-all duration-200 ${
                      selectedDifficulty === difficulty
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-sm'
                    }`}
                  >
                    {getDifficultyText(difficulty)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">分类:</span>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm rounded-xl transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-sm'
                    }`}
                  >
                    {category === 'all' ? '全部' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          找到 <span className="font-semibold text-gray-900">{filteredExercises.length}</span> 道符合条件的习题
        </p>
      </div>

      {/* Exercise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExercises.map(exercise => (
          <div key={exercise.id} className="card card-hover group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {exercise.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${getDifficultyColor(exercise.difficulty)}`}>
                    {getDifficultyText(exercise.difficulty)}
                  </span>
                  <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < getDifficultyStars(exercise.difficulty)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mr-2">
                {exercise.category}
              </span>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                {exercise.requiredLength}词
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {exercise.text.substring(0, 120)}...
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                预计用时: {Math.ceil(exercise.requiredLength / 50)}分钟
              </span>
            </div>

            <div className="flex gap-2">
              <Link 
                to={`/analysis/${exercise.id}`} 
                className="flex-1 text-center btn-primary text-sm py-2.5 flex items-center justify-center gap-2 group"
              >
                <Eye className="h-4 w-4 group-hover:scale-110 transition-transform" />
                查看解析
              </Link>
              <Link 
                to={`/practice?exercise=${exercise.id}`} 
                className="flex-1 text-center btn-secondary text-sm py-2.5 flex items-center justify-center gap-2 group"
              >
                <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                开始练习
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className="text-center py-20">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">没有找到符合条件的习题</h3>
          <p className="text-gray-500 mb-4">请尝试调整筛选条件或搜索关键词</p>
          <button
            onClick={() => {
              setSelectedDifficulty('all');
              setSelectedCategory('all');
              setSearchTerm('');
            }}
            className="btn-primary"
          >
            清空筛选条件
          </button>
        </div>
      )}
    </div>
  );
};