import React, { useState, useEffect } from 'react'
import { Trophy, Medal, Star, TrendingUp, Users, Eye, Heart, Clock, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Results = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 42,
    seconds: 30
  })

  // العد التنازلي
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // بيانات النتائج
  const topSubmissions = [
    {
      id: 1,
      rank: 1,
      title: 'جماهير الأهلي في نهائي دوري الأبطال',
      participant: 'أحمد محمد',
      country: 'مصر',
      sport: 'كرة القدم',
      image: '/src/assets/images/fans/fans_1.jpg',
      votes: 1250,
      views: 5420,
      percentage: 28.5,
      trend: '+15%',
      isLeading: true
    },
    {
      id: 2,
      rank: 2,
      title: 'مشجعو المنتخب السعودي في كأس العالم',
      participant: 'سارة العتيبي',
      country: 'السعودية',
      sport: 'كرة القدم',
      image: '/src/assets/images/fans/fans_2.jpg',
      votes: 980,
      views: 3210,
      percentage: 22.3,
      trend: '+8%',
      isLeading: false
    },
    {
      id: 3,
      rank: 3,
      title: 'جماهير كرة السلة في الدوري الأمريكي',
      participant: 'محمد الأحمد',
      country: 'الإمارات',
      sport: 'كرة السلة',
      image: '/src/assets/images/sports/sports_1.jpeg',
      votes: 750,
      views: 2890,
      percentage: 17.1,
      trend: '+5%',
      isLeading: false
    },
    {
      id: 4,
      rank: 4,
      title: 'مشجعو التنس في بطولة ويمبلدون',
      participant: 'فاطمة الزهراء',
      country: 'المغرب',
      sport: 'التنس',
      image: '/src/assets/images/sports/sports_2.jpg',
      votes: 620,
      views: 1950,
      percentage: 14.1,
      trend: '+3%',
      isLeading: false
    }
  ]

  const stats = [
    {
      title: 'إجمالي الأصوات',
      value: '4,387',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      title: 'إجمالي المشاهدات',
      value: '18,542',
      icon: Eye,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'عدد المشاركين',
      value: '127',
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'الدول المشاركة',
      value: '23',
      icon: Trophy,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    }
  ]

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2: return <Medal className="w-6 h-6 text-gray-400" />
      case 3: return <Medal className="w-6 h-6 text-amber-600" />
      default: return <Star className="w-6 h-6 text-blue-500" />
    }
  }

  const getRankBadgeColor = (rank) => {
    switch(rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white'
      case 3: return 'bg-gradient-to-r from-amber-400 to-amber-600 text-white'
      default: return 'bg-gradient-to-r from-blue-400 to-blue-600 text-white'
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header Section */}
      <section className="sports-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            النتائج والترتيب
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            تابع أحدث النتائج والترتيب المباشر للمشاركات في مسابقة الجماهير الرياضية
          </p>
          
          {/* Countdown Timer */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">النتائج النهائية خلال</h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'يوم', value: timeLeft.days },
                { label: 'ساعة', value: timeLeft.hours },
                { label: 'دقيقة', value: timeLeft.minutes },
                { label: 'ثانية', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="countdown-item rounded-2xl p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white opacity-80 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="stats-card border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold sports-text-dark">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Top Rankings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              أفضل المشاركات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              الترتيب الحالي للمشاركات الأكثر حصولاً على الأصوات
            </p>
          </div>

          <div className="space-y-6">
            {topSubmissions.map((submission, index) => (
              <Card key={submission.id} className={`overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                submission.rank === 1 ? 'ring-2 ring-yellow-400 shadow-xl' : ''
              }`}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Rank Badge */}
                    <div className={`w-full md:w-20 ${getRankBadgeColor(submission.rank)} flex items-center justify-center py-6 md:py-0`}>
                      <div className="text-center">
                        {getRankIcon(submission.rank)}
                        <div className="text-2xl font-bold text-white mt-2">#{submission.rank}</div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-48 h-48 md:h-auto">
                      <img 
                        src={submission.image} 
                        alt={submission.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="sports-text-blue border-blue-200">
                              {submission.sport}
                            </Badge>
                            <Badge variant="secondary">
                              {submission.country}
                            </Badge>
                            {submission.isLeading && (
                              <Badge className="bg-green-500 text-white">
                                <TrendingUp className="w-3 h-3 ml-1" />
                                متصدر
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold sports-text-dark mb-2">
                            {submission.title}
                          </h3>
                          <p className="text-gray-600">
                            بواسطة: <span className="font-medium">{submission.participant}</span>
                          </p>
                        </div>

                        {/* Vote Progress */}
                        <div className="text-center md:text-right">
                          <div className="text-3xl font-bold sports-text-green mb-1">
                            {submission.percentage}%
                          </div>
                          <div className="text-sm text-gray-500 mb-2">من إجمالي الأصوات</div>
                          <div className="flex items-center justify-center md:justify-end text-sm text-green-600">
                            <TrendingUp className="w-4 h-4 ml-1" />
                            {submission.trend}
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full transition-all duration-500 ${
                              submission.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                              submission.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-500' :
                              submission.rank === 3 ? 'bg-gradient-to-r from-amber-400 to-amber-600' :
                              'bg-gradient-to-r from-blue-400 to-blue-600'
                            }`}
                            style={{ width: `${submission.percentage}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                          <span className="flex items-center">
                            <Heart className="w-4 h-4 ml-1 text-red-500" />
                            {submission.votes.toLocaleString()} صوت
                          </span>
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 ml-1 text-blue-500" />
                            {submission.views.toLocaleString()} مشاهدة
                          </span>
                        </div>
                        <Button variant="outline" size="sm">
                          عرض التفاصيل
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              آخر التحديثات
            </h2>
            <p className="text-xl text-gray-600">
              تابع أحدث الأصوات والتفاعلات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                time: 'منذ دقيقتين',
                action: 'صوت جديد',
                description: 'حصلت مشاركة "جماهير الأهلي" على 5 أصوات جديدة',
                icon: Heart,
                color: 'text-red-500'
              },
              {
                time: 'منذ 5 دقائق',
                action: 'مشاركة جديدة',
                description: 'انضم مشارك جديد من الكويت بمشاركة رائعة',
                icon: Users,
                color: 'text-green-500'
              },
              {
                time: 'منذ 10 دقائق',
                action: 'تغيير في الترتيب',
                description: 'تقدمت مشاركة "مشجعو السعودية" إلى المركز الثاني',
                icon: TrendingUp,
                color: 'text-blue-500'
              }
            ].map((update, index) => {
              const Icon = update.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${update.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold sports-text-dark">{update.action}</h4>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Clock className="w-3 h-3 ml-1" />
                            {update.time}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{update.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fan Journey CTA */}
      <section className="py-20 sports-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            تابع رحلة المشجع
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            كن جزءاً من هذه التجربة المميزة وتابع النتائج لحظة بلحظة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Heart className="w-5 h-5 ml-2" />
              صوت الآن
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Eye className="w-5 h-5 ml-2" />
              شاهد المعرض
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Results

