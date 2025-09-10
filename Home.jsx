import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Play, Users, Trophy, Award, Calendar, ArrowRight, Star, Globe, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  })

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

  const quickSections = [
    {
      title: 'عن المسابقة',
      description: 'تعرف على أهداف المسابقة ورسالتها في تكريم الجماهير الرياضية',
      icon: Users,
      path: '/about',
      color: 'sports-bg-green'
    },
    {
      title: 'كيف تشارك',
      description: 'خطوات بسيطة للمشاركة في المسابقة وتسجيل مشاركتك',
      icon: Trophy,
      path: '/participate',
      color: 'sports-bg-blue'
    },
    {
      title: 'الجوائز',
      description: 'اكتشف الجوائز المميزة والتكريم المنتظر للفائزين',
      icon: Award,
      path: '/awards',
      color: 'sports-bg-gold'
    },
    {
      title: 'الأخبار',
      description: 'آخر الأخبار والتحديثات حول المسابقة والأنشطة',
      icon: Calendar,
      path: '/news',
      color: 'bg-purple-500'
    }
  ]

  const stats = [
    { number: '50+', label: 'دولة مشاركة', icon: Globe },
    { number: '10K+', label: 'مشارك', icon: Users },
    { number: '15', label: 'رياضة مختلفة', icon: Trophy },
    { number: '100+', label: 'جائزة قيمة', icon: Award }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              مسابقة الجماهير الرياضية
              <br />
              <span className="text-yellow-300">العالمية</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              احتفاء بالجماهير الرياضية حول العالم وتكريم لشغفهم وحماسهم اللامحدود
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <div className="bg-black bg-opacity-50 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300 pulse-glow">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                </div>
                <p className="text-white text-lg">شاهد الفيديو التعريفي</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Link to="/participate">
              <Button className="sports-bg-gold hover:bg-yellow-500 text-black text-xl px-12 py-4 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300">
                شارك الآن
                <ArrowRight className="w-6 h-6 mr-2" />
              </Button>
            </Link>
          </div>

          {/* Countdown Timer */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">العد التنازلي لإعلان النتائج</h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <div key={unit} className="countdown-item rounded-2xl p-4 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</div>
                  <div className="text-sm text-gray-200">
                    {unit === 'days' ? 'يوم' : 
                     unit === 'hours' ? 'ساعة' : 
                     unit === 'minutes' ? 'دقيقة' : 'ثانية'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 float-animation">
          <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
            <Trophy className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 float-animation" style={{animationDelay: '2s'}}>
          <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Quick Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              اكتشف المسابقة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تعرف على جميع جوانب المسابقة وكيفية المشاركة في هذا الحدث العالمي المميز
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickSections.map((section, index) => {
              const Icon = section.icon
              return (
                <Link key={index} to={section.path}>
                  <Card className="card-hover h-full cursor-pointer border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 ${section.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold sports-text-dark mb-4">{section.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{section.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sports-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              أرقام مذهلة
            </h2>
            <p className="text-xl text-white opacity-90">
              إحصائيات تعكس حجم المشاركة العالمية في المسابقة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="stats-card rounded-2xl p-8 text-center">
                  <Icon className="w-12 h-12 sports-text-green mx-auto mb-4" />
                  <div className="text-4xl font-bold sports-text-dark mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold sports-text-dark mb-6 section-title">
                احتفاء بالجماهير الرياضية
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                مسابقة عالمية تهدف إلى تكريم الجماهير الرياضية وإبراز دورهم المهم في دعم الرياضة والرياضيين. 
                نحتفي بالشغف والحماس والولاء الذي يظهره المشجعون في جميع أنحاء العالم.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 sports-bg-green rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">مشاركة عالمية من أكثر من 50 دولة</span>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 sports-bg-blue rounded-full flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">تغطية لأكثر من 15 رياضة مختلفة</span>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 sports-bg-gold rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">جوائز قيمة وتكريم استثنائي</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="sports-bg-green hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg">
                  اعرف المزيد
                  <ArrowRight className="w-5 h-5 mr-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/src/assets/images/fans/fans_1.jpg" 
                  alt="جماهير رياضية" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full sports-gradient rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sports-gradient-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            انضم إلى المسابقة الآن
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 leading-relaxed">
            لا تفوت الفرصة للمشاركة في هذا الحدث العالمي المميز وكن جزءًا من احتفالية الجماهير الرياضية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/participate">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-bold">
                ابدأ المشاركة
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg">
                شاهد المعرض
                <Camera className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

