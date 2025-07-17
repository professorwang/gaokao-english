import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, TrendingUp, Users, ArrowRight, Star } from 'lucide-react';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: '经典习题解析',
      description: '精选高考真题，提供详细解析和评分标准',
      link: '/exercises',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: '自动出题练习',
      description: '智能生成练习题，个性化难度匹配',
      link: '/practice',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'AI智能评分',
      description: '即时反馈作文质量，提供改进建议',
      link: '/practice',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: '学习社区',
      description: '与同学交流写作技巧，分享学习心得',
      link: '/progress',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: '张同学',
      score: '23/25',
      comment: '通过这个平台的学习，我的读后续写从15分提升到了23分！',
      avatar: '👨‍🎓'
    },
    {
      name: '李同学',
      score: '24/25',
      comment: 'AI评分非常准确，反馈建议也很实用，强烈推荐！',
      avatar: '👩‍🎓'
    },
    {
      name: '王同学',
      score: '22/25',
      comment: '经典习题的质量很高，解析详细，让我掌握了写作技巧。',
      avatar: '👨‍💼'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center py-20">
        <div className="animate-float">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">高考英文读后续写</span>
            <br />
            <span className="text-gray-900">智能学习平台</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          专业的高考英文读后续写训练系统，AI智能评分，个性化学习路径，助力你轻松应对考试
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/exercises" className="btn-primary text-lg px-8 py-4 group">
            开始学习
            <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/practice" className="btn-secondary text-lg px-8 py-4">
            免费试练
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">核心功能</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group card card-hover text-center relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <span className="text-primary-600 font-medium group-hover:text-primary-700">
                立即体验 →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">平台数据</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-lg opacity-90">经典练习题</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">10,000+</div>
              <div className="text-lg opacity-90">学生用户</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">95%</div>
              <div className="text-lg opacity-90">满意度</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">4.8</div>
              <div className="text-lg opacity-90">用户评分</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">学员心声</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card card-hover relative">
              <div className="absolute -top-4 left-8 text-4xl">{testimonial.avatar}</div>
              <div className="pt-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  <span className="text-primary-600 font-bold">{testimonial.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            准备好提升你的读后续写了吗？
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            加入数千名学生的行列，开始你的提分之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/exercises" className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              立即开始学习
            </Link>
            <Link to="/practice" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              免费试练
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};