import React, { useState } from 'react'
import { Trophy, Heart, Eye, Share2, Users, TrendingUp, Download, Calendar, Clock, Star, Award, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const ParticipantDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // بيانات المشارك الوهمية
  const participantData = {
    name: 'أحمد محمد',
    country: 'مصر',
    registrationId: 'SP2024-001',
    submissionTitle: 'جماهير الأهلي في نهائي دوري الأبطال',
    sport: 'كرة القدم',
    submissionDate: '2024-01-15',
    status: 'approved',
    currentRank: 1,
    totalParticipants: 127,
    votes: 1250,
    views: 5420,
    comments: 89,
    shares: 156,
    image: '/src/assets/images/fans/fans_1.jpg',
    description: 'لحظة تاريخية من جماهير النادي الأهلي في نهائي دوري أبطال أفريقيا، تُظهر الحماس والدعم اللامحدود للفريق.',
    votePercentage: 28.5
  }

  const stats = [
    {
      title: 'الترتيب الحالي',
      value: `#${participantData.currentRank}`,
      icon: Trophy,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      change: '+2 مراكز'
    },
    {
      title: 'إجمالي الأصوات',
      value: participantData.votes.toLocaleString(),
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      change: '+45 اليوم'
    },
    {
      title: 'المشاهدات',
      value: participantData.views.toLocaleString(),
      icon: Eye,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      change: '+120 اليوم'
    },
    {
      title: 'المشاركات',
      value: participantData.shares.toLocaleString(),
      icon: Share2,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      change: '+8 اليوم'
    }
  ]

  const recentActivity = [
    {
      type: 'vote',
      message: 'حصلت على 5 أصوات جديدة',
      time: 'منذ دقيقتين',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      type: 'comment',
      message: 'تعليق جديد من مشجع من السعودية',
      time: 'منذ 15 دقيقة',
      icon: MessageCircle,
      color: 'text-blue-500'
    },
    {
      type: 'share',
      message: 'تمت مشاركة مشاركتك 3 مرات',
      time: 'منذ ساعة',
      icon: Share2,
      color: 'text-green-500'
    },
    {
      type: 'rank',
      message: 'تقدمت مركزين في الترتيب العام',
      time: 'منذ 3 ساعات',
      icon: TrendingUp,
      color: 'text-yellow-500'
    }
  ]

  const shareLinks = [
    { platform: 'واتساب', url: '#', color: 'bg-green-500' },
    { platform: 'تويتر', url: '#', color: 'bg-blue-400' },
    { platform: 'فيسبوك', url: '#', color: 'bg-blue-600' },
    { platform: 'إنستغرام', url: '#', color: 'bg-pink-500' },
    { platform: 'تيليجرام', url: '#', color: 'bg-blue-500' }
  ]

  const getStatusBadge = (status) => {
    switch(status) {
      case 'approved':
        return <Badge className="bg-green-500 text-white">مُعتمدة</Badge>
      case 'pending':
        return <Badge className="bg-yellow-500 text-white">قيد المراجعة</Badge>
      case 'rejected':
        return <Badge className="bg-red-500 text-white">مرفوضة</Badge>
      default:
        return <Badge variant="secondary">غير محدد</Badge>
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header */}
      <section className="sports-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-bold mb-2">لوحة تحكم المشارك</h1>
              <p className="text-xl opacity-90">مرحباً {participantData.name}</p>
              <div className="flex items-center mt-2 space-x-4 rtl:space-x-reverse">
                <span className="text-sm opacity-80">رقم التسجيل: {participantData.registrationId}</span>
                {getStatusBadge(participantData.status)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">#{participantData.currentRank}</div>
              <div className="text-sm opacity-80">من أصل {participantData.totalParticipants} مشارك</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 -mt-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="stats-card border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold sports-text-dark">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                      </div>
                    </div>
                    <div className="text-sm text-green-600 flex items-center">
                      <TrendingUp className="w-4 h-4 ml-1" />
                      {stat.change}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Submission Details */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Submission Card */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>تفاصيل المشاركة</span>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 ml-2" />
                      تحميل التقرير
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={participantData.image} 
                        alt={participantData.submissionTitle}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold sports-text-dark mb-3">
                        {participantData.submissionTitle}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center">
                          <Badge variant="outline" className="sports-text-blue border-blue-200">
                            {participantData.sport}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          <Calendar className="w-4 h-4 inline ml-1" />
                          تاريخ التسجيل: {participantData.submissionDate}
                        </p>
                        <p className="text-sm text-gray-600">
                          <Users className="w-4 h-4 inline ml-1" />
                          الدولة: {participantData.country}
                        </p>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {participantData.description}
                      </p>
                    </div>
                  </div>

                  {/* Vote Progress */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">نسبة الأصوات</span>
                      <span className="text-2xl font-bold sports-text-green">
                        {participantData.votePercentage}%
                      </span>
                    </div>
                    <Progress value={participantData.votePercentage} className="h-3" />
                    <p className="text-sm text-gray-600 mt-2">
                      {participantData.votes} صوت من إجمالي الأصوات
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>أداء المشاركة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-red-600">{participantData.votes}</div>
                      <div className="text-sm text-gray-600">إجمالي الأصوات</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Eye className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-blue-600">{participantData.views}</div>
                      <div className="text-sm text-gray-600">إجمالي المشاهدات</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">{participantData.comments}</div>
                      <div className="text-sm text-gray-600">إجمالي التعليقات</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Activity & Sharing */}
            <div className="space-y-6">
              
              {/* Invite Friends */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 ml-2" />
                    ادع أصدقاءك للتصويت
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    شارك رابط مشاركتك مع الأصدقاء والعائلة لزيادة فرص الفوز
                  </p>
                  
                  <div className="space-y-3">
                    {shareLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <div className={`w-4 h-4 ${link.color} rounded mr-3`}></div>
                        مشاركة عبر {link.platform}
                      </Button>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-2">رابط المشاركة:</p>
                    <div className="flex items-center">
                      <input
                        type="text"
                        value="https://competition.com/vote/SP2024-001"
                        readOnly
                        className="flex-1 text-xs bg-white border rounded px-2 py-1"
                      />
                      <Button size="sm" className="mr-2">نسخ</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 ml-2" />
                    النشاط الأخير
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => {
                      const Icon = activity.icon
                      return (
                        <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <Icon className={`w-4 h-4 ${activity.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium sports-text-dark">
                              {activity.message}
                            </p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Participant Journey */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 ml-2" />
                    رحلة المشارك
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div className="mr-3">
                        <p className="text-sm font-medium">تسجيل المشاركة</p>
                        <p className="text-xs text-gray-500">مكتمل</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div className="mr-3">
                        <p className="text-sm font-medium">مراجعة واعتماد</p>
                        <p className="text-xs text-gray-500">مكتمل</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">⏳</span>
                      </div>
                      <div className="mr-3">
                        <p className="text-sm font-medium">فترة التصويت</p>
                        <p className="text-xs text-gray-500">جارية</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">⏰</span>
                      </div>
                      <div className="mr-3">
                        <p className="text-sm font-medium">إعلان النتائج</p>
                        <p className="text-xs text-gray-500">15 يوم متبقي</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ParticipantDashboard

