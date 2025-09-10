import React, { useState } from 'react'
import { Trophy, Award, Medal, Crown, Star, Gift, Users, Calendar, CheckCircle, Clock, Target, Zap, Shield, Globe } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Awards = () => {
  const [activeCategory, setActiveCategory] = useState('main')

  // الجوائز الرئيسية
  const mainAwards = [
    {
      id: 'grand_prize',
      title: 'الجائزة الكبرى',
      subtitle: 'أفضل جماهير رياضية عالمياً',
      prize: '100,000 ريال سعودي',
      icon: Crown,
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
      image: '/src/assets/images/awards/award_1.jpg',
      description: 'للمشارك الذي يقدم أفضل محتوى يعبر عن الشغف والحماس الرياضي على مستوى العالم',
      benefits: [
        'جائزة نقدية 100,000 ريال سعودي',
        'رحلة مدفوعة التكاليف لحضور حدث رياضي عالمي',
        'شهادة تقدير موقعة من اللجنة المنظمة',
        'تغطية إعلامية خاصة في وسائل الإعلام',
        'درع تذكاري مطلي بالذهب',
        'عضوية شرفية في نادي المشجعين العالمي'
      ],
      criteria: 'الأصالة، التأثير، الإبداع، التفاعل الجماهيري'
    },
    {
      id: 'visual_content',
      title: 'جائزة أفضل محتوى مرئي',
      subtitle: 'للصور والفيديوهات المميزة',
      prize: '50,000 ريال سعودي',
      icon: Trophy,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      image: '/src/assets/images/awards/award_2.jpg',
      description: 'للمحتوى المرئي الأكثر إبداعاً وتأثيراً في التشجيع والذي يُظهر جمال اللحظات الرياضية',
      benefits: [
        'جائزة نقدية 50,000 ريال سعودي',
        'معدات تصوير احترافية بقيمة 20,000 ريال',
        'ورشة تدريبية في التصوير الرياضي',
        'نشر المحتوى في المنصات الرسمية',
        'درع فضي تذكاري'
      ],
      criteria: 'جودة التصوير، الإبداع، التأثير البصري'
    },
    {
      id: 'fan_spirit',
      title: 'جائزة روح التشجيع',
      subtitle: 'للحماس والشغف الرياضي',
      prize: '30,000 ريال سعودي',
      icon: Star,
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      image: '/src/assets/images/awards/award_3.jpg',
      description: 'للمشارك الذي يُظهر أعلى مستويات الحماس والشغف في التشجيع الرياضي',
      benefits: [
        'جائزة نقدية 30,000 ريال سعودي',
        'تذاكر مجانية لأهم الأحداث الرياضية',
        'قميص رياضي موقع من النجوم',
        'شهادة تقدير خاصة',
        'درع برونزي تذكاري'
      ],
      criteria: 'الحماس، الأصالة، التأثير على الآخرين'
    }
  ]

  // الجوائز الفرعية
  const categoryAwards = [
    {
      category: 'كرة القدم',
      prize: '25,000 ريال',
      icon: '⚽',
      participants: 1250,
      description: 'أفضل جماهير كرة القدم'
    },
    {
      category: 'كرة السلة',
      prize: '20,000 ريال',
      icon: '🏀',
      participants: 800,
      description: 'أفضل جماهير كرة السلة'
    },
    {
      category: 'الرياضات الإلكترونية',
      prize: '35,000 ريال',
      icon: '🎮',
      participants: 2200,
      description: 'أفضل جماهير الرياضات الإلكترونية'
    },
    {
      category: 'ألعاب القوى',
      prize: '15,000 ريال',
      icon: '🏃‍♂️',
      participants: 600,
      description: 'أفضل جماهير ألعاب القوى'
    },
    {
      category: 'السباحة',
      prize: '12,000 ريال',
      icon: '🏊‍♂️',
      participants: 400,
      description: 'أفضل جماهير السباحة'
    },
    {
      category: 'الكرة الطائرة',
      prize: '18,000 ريال',
      icon: '🏐',
      participants: 650,
      description: 'أفضل جماهير الكرة الطائرة'
    },
    {
      category: 'رياضات أخرى',
      prize: '22,000 ريال',
      icon: '🏆',
      participants: 900,
      description: 'أفضل جماهير الرياضات الأخرى'
    }
  ]

  // مراحل التصفيات
  const eliminationPhases = [
    {
      phase: 'التصفيات الأولية',
      duration: '4 أسابيع',
      description: 'فترة استقبال المشاركات وتقييمها الأولي',
      status: 'مكتملة',
      icon: Clock,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      phase: 'التصفيات النهائية',
      duration: '2 أسبوع',
      description: 'اختيار أفضل 50 مشاركة للتصفيات النهائية',
      status: 'جارية',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      phase: 'التصويت النهائي',
      duration: '1 أسبوع',
      description: 'التصويت الجماهيري وتقييم لجنة التحكيم',
      status: 'قريباً',
      icon: Trophy,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      phase: 'إعلان النتائج',
      duration: '1 يوم',
      description: 'الإعلان الرسمي عن الفائزين وتوزيع الجوائز',
      status: 'قريباً',
      icon: Crown,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  // معايير التحكيم
  const judgingCriteria = [
    {
      type: 'التصويت الجماهيري',
      percentage: 60,
      description: 'يشكل التصويت الجماهيري النسبة الأكبر من التقييم، حيث يصوت الجمهور لأفضل المشاركات',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      details: [
        'عدد الأصوات المستلمة',
        'معدل التفاعل والمشاركة',
        'التعليقات الإيجابية',
        'المشاركات على وسائل التواصل'
      ]
    },
    {
      type: 'تقييم لجنة التحكيم',
      percentage: 40,
      description: 'لجنة من الخبراء في المجال الرياضي والإعلامي تقيم المشاركات وفقاً لمعايير محددة',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      details: [
        'الأصالة والإبداع',
        'جودة المحتوى',
        'التأثير والرسالة',
        'الالتزام بقواعد المسابقة'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header Section */}
      <section className="sports-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            الجوائز والتكريم
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            اكتشف الجوائز القيمة والتكريم المميز الذي ينتظر أفضل الجماهير الرياضية حول العالم
          </p>
          
          {/* Prize Pool Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                500,000
              </div>
              <div className="text-sm text-gray-600">ريال سعودي</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                100+
              </div>
              <div className="text-sm text-gray-600">جائزة</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                7
              </div>
              <div className="text-sm text-gray-600">فئات رياضية</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                4
              </div>
              <div className="text-sm text-gray-600">مراحل تصفيات</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Tabs */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="main" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="main" className="flex items-center">
                <Crown className="w-4 h-4 ml-2" />
                الجوائز الرئيسية
              </TabsTrigger>
              <TabsTrigger value="categories" className="flex items-center">
                <Trophy className="w-4 h-4 ml-2" />
                جوائز الفئات
              </TabsTrigger>
              <TabsTrigger value="phases" className="flex items-center">
                <Calendar className="w-4 h-4 ml-2" />
                مراحل التصفيات
              </TabsTrigger>
              <TabsTrigger value="criteria" className="flex items-center">
                <Target className="w-4 h-4 ml-2" />
                معايير التحكيم
              </TabsTrigger>
            </TabsList>

            {/* Main Awards */}
            <TabsContent value="main">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {mainAwards.map((award, index) => {
                  const IconComponent = award.icon
                  return (
                    <Card key={award.id} className={`overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${award.bgColor} border-0`}>
                      <div className={`h-32 bg-gradient-to-r ${award.color} flex items-center justify-center relative`}>
                        <IconComponent className="w-16 h-16 text-white" />
                        {index === 0 && (
                          <Badge className="absolute top-4 right-4 bg-white text-yellow-700 font-bold">
                            الأكبر
                          </Badge>
                        )}
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="text-center mb-6">
                          <h3 className={`text-2xl font-bold ${award.textColor} mb-2`}>
                            {award.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {award.subtitle}
                          </p>
                          <div className={`text-3xl font-bold ${award.textColor} mb-4`}>
                            {award.prize}
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                          {award.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <h4 className="font-semibold text-gray-700">المزايا والفوائد:</h4>
                          {award.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                          {award.benefits.length > 3 && (
                            <div className="text-sm text-gray-500">
                              +{award.benefits.length - 3} مزايا إضافية
                            </div>
                          )}
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-700 mb-2">معايير التقييم:</h4>
                          <p className="text-sm text-gray-600">{award.criteria}</p>
                        </div>

                        <Button className={`w-full bg-gradient-to-r ${award.color} text-white hover:opacity-90`}>
                          <Gift className="w-4 h-4 ml-2" />
                          تفاصيل أكثر
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            {/* Category Awards */}
            <TabsContent value="categories">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryAwards.map((award, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{award.icon}</div>
                      <h3 className="text-xl font-bold sports-text-dark mb-2">
                        {award.category}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {award.description}
                      </p>
                      <div className="text-2xl font-bold sports-text-gold mb-4">
                        {award.prize}
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                        <Users className="w-4 h-4 ml-1" />
                        {award.participants.toLocaleString()} مشارك
                      </div>
                      <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">
                        <Trophy className="w-4 h-4 ml-2" />
                        شاهد المشاركات
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Elimination Phases */}
            <TabsContent value="phases">
              <div className="space-y-6">
                {eliminationPhases.map((phase, index) => {
                  const IconComponent = phase.icon
                  return (
                    <Card key={index} className={`${phase.bgColor} border-0 shadow-lg`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 rtl:space-x-reverse">
                            <div className={`w-12 h-12 ${phase.bgColor} rounded-full flex items-center justify-center`}>
                              <IconComponent className={`w-6 h-6 ${phase.color}`} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold sports-text-dark">
                                {phase.phase}
                              </h3>
                              <p className="text-gray-600 text-sm">
                                {phase.description}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant={phase.status === 'مكتملة' ? 'default' : phase.status === 'جارية' ? 'secondary' : 'outline'}>
                              {phase.status}
                            </Badge>
                            <div className="text-sm text-gray-500 mt-1">
                              {phase.duration}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            {/* Judging Criteria */}
            <TabsContent value="criteria">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {judgingCriteria.map((criteria, index) => {
                  const IconComponent = criteria.icon
                  return (
                    <Card key={index} className="overflow-hidden border-0 shadow-lg">
                      <CardHeader className={`bg-gradient-to-r ${criteria.color} text-white p-6`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <IconComponent className="w-8 h-8" />
                            <div>
                              <CardTitle className="text-xl">
                                {criteria.type}
                              </CardTitle>
                              <Badge variant="secondary" className="mt-1">
                                {criteria.percentage}% من التقييم
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold">
                              {criteria.percentage}%
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-6">
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {criteria.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-700">التفاصيل:</h4>
                          {criteria.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Combined Evaluation Process */}
              <Card className="bg-gradient-to-r from-blue-50 to-green-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold sports-text-dark mb-4">
                    عملية التقييم المتكاملة
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                    يتم دمج نتائج التصويت الجماهيري مع تقييم لجنة التحكيم للوصول إلى النتيجة النهائية، 
                    مما يضمن العدالة والشفافية في اختيار الفائزين
                  </p>
                  
                  <div className="flex items-center justify-center space-x-8 rtl:space-x-reverse">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-lg font-bold">60%</div>
                      <div className="text-sm text-gray-600">تصويت جماهيري</div>
                    </div>
                    
                    <div className="text-4xl text-gray-400">+</div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-lg font-bold">40%</div>
                      <div className="text-sm text-gray-600">لجنة التحكيم</div>
                    </div>
                    
                    <div className="text-4xl text-gray-400">=</div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-lg font-bold">100%</div>
                      <div className="text-sm text-gray-600">النتيجة النهائية</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Prize Pool */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold sports-text-dark mb-6">
            إجمالي قيمة الجوائز
          </h2>
          <div className="text-6xl md:text-8xl font-bold sports-text-gold mb-8">
            500,000 ريال
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نصف مليون ريال سعودي موزعة على أكثر من 100 جائزة قيمة لتكريم أفضل الجماهير الرياضية
          </p>
        </div>
      </section>
    </div>
  )
}

export default Awards

