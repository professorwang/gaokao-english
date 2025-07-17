import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, Target, TrendingUp, Calendar } from 'lucide-react';

export const ProgressPage: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('week');

  // Mock data for charts
  const weeklyData = [
    { day: '周一', score: 24, exercises: 2 },
    { day: '周二', score: 26, exercises: 3 },
    { day: '周三', score: 22, exercises: 1 },
    { day: '周四', score: 28, exercises: 2 },
    { day: '周五', score: 27, exercises: 3 },
    { day: '周六', score: 29, exercises: 4 },
    { day: '周日', score: 30, exercises: 2 },
  ];

  const monthlyData = [
    { week: '第1周', average: 25, total: 5 },
    { week: '第2周', average: 27, total: 8 },
    { week: '第3周', average: 26, total: 6 },
    { week: '第4周', average: 28, total: 7 },
  ];

  const categoryData = [
    { category: '日常生活', score: 85, count: 12 },
    { category: '人际关系', score: 78, count: 8 },
    { category: '教育成长', score: 82, count: 10 },
  ];

  const statistics = {
    totalExercises: 30,
    averageScore: 27.2,
    bestScore: 30,
    streak: 7,
    totalTime: '15小时30分钟',
    improvement: '+15%',
  };

  const achievements = [
    { name: '初学者', description: '完成第一篇作文', achieved: true, icon: '🏆' },
    { name: '连续学习', description: '连续7天学习', achieved: true, icon: '🔥' },
    { name: '高分达人', description: '获得28分以上', achieved: true, icon: '⭐' },
    { name: '勤奋学习', description: '完成30篇作文', achieved: true, icon: '📚' },
    { name: '完美作文', description: '获得满分30分', achieved: false, icon: '💎' },
    { name: '词汇大师', description: '使用100个高级词汇', achieved: false, icon: '🎯' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">学习进度</h1>
        <p className="text-gray-600">跟踪你的学习进展和成就</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">总练习数</p>
              <p className="text-2xl font-bold text-gray-900">{statistics.totalExercises}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">平均分</p>
              <p className="text-2xl font-bold text-gray-900">{statistics.averageScore}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">最高分数</p>
              <p className="text-2xl font-bold text-gray-900">{statistics.bestScore}</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Trophy className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">连续学习</p>
              <p className="text-2xl font-bold text-gray-900">{statistics.streak}天</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className="flex gap-2 mb-6">
        {['week', 'month'].map(range => (
          <button
            key={range}
            onClick={() => setSelectedTimeRange(range)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedTimeRange === range
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {range === 'week' ? '本周' : '本月'}
          </button>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            每日得分趋势
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[20, 30]} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            分类表现
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="score" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Achievements */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">成就系统</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${
                achievement.achieved
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{achievement.icon}</span>
                <h4 className={`font-semibold ${
                  achievement.achieved ? 'text-green-900' : 'text-gray-500'
                }`}>
                  {achievement.name}
                </h4>
              </div>
              <p className={`text-sm ${
                achievement.achieved ? 'text-green-700' : 'text-gray-500'
              }`}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">最近活动</h3>
        <div className="space-y-3">
          {[
            { date: '2024-07-16', exercise: 'The Lost Wallet', score: 28, time: '25分钟' },
            { date: '2024-07-15', exercise: 'The Unexpected Guest', score: 26, time: '30分钟' },
            { date: '2024-07-14', exercise: 'The Scholarship Interview', score: 29, time: '35分钟' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{activity.exercise}</p>
                <p className="text-sm text-gray-600">{activity.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary-600">{activity.score}分</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};