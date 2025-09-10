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
        'درع فضي تذكاري',
        'شهادة خبرة في التصوير الرياضي'
      ],
      criteria: 'جودة التصوير، الإبداع البصري، التوقيت المثالي'
    },
    {
      id: 'fan_story',
      title: 'جائزة أفضل قصة تشجيع',
      subtitle: 'للقصص الملهمة والمؤثرة',
      prize: '30,000 ريال سعودي',
      icon: Award,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      image: '/src/assets/images/fans/fans_1.jpg',
      description: 'للقصة الأكثر إلهاماً وتأثيراً في عالم التشجيع الرياضي والتي تُجسد روح الرياضة الحقيقية',
      benefits: [
        'جائزة نقدية 30,000 ريال سعودي',
        'نشر القصة في كتاب خاص بالمسابقة',
        'مقابلة إعلامية مع وسائل الإعلام الرياضية',
        'دعوة لحضور فعاليات رياضية مميزة',
        'درع برونزي تذكاري',
        'عضوية مجانية في نادي الكتاب الرياضي'
      ],
      criteria: 'التأثير العاطفي، الأصالة، القيم الرياضية'
    }
  ]

  // الجوائز العينية
  const physicalAwards = [
    {
      title: 'دروع تكريمية مخصصة',
      description: 'دروع مصنوعة من مواد عالية الجودة مع نقش اسم الفائز',
      image: '/src/assets/images/icons/icons_1.jpg',
      features: ['نقش بالليزر', 'مواد فاخرة', 'تصميم حصري', 'صندوق هدايا أنيق']
    },
    {
      title: 'شهادات تقدير موثقة',
      description: 'شهادات رسمية موقعة من اللجنة المنظمة والشخصيات الرياضية',
      image: '/src/assets/images/icons/icons_2.jpg',
      features: ['توقيعات رسمية', 'ورق فاخر', 'ختم ذهبي', 'إطار خشبي']
    },
    {
      title: 'هدايا تذكارية حصرية',
      description: 'مجموعة من الهدايا التذكارية المصممة خصيصاً للمسابقة',
      image: '/src/assets/images/sponsor/sponsor_logo.png',
      features: ['تصميم حصري', 'جودة عالية', 'تغليف فاخر', 'رقم تسلسلي']
    }
  ]

  // مراحل التصفيات
  const eliminationPhases = [
    {
      phase: 1,
      title: 'التصفيات الأولية',
      duration: '2 أسابيع',
      description: 'مراجعة جميع المشاركات والتأكد من استيفاء الشروط',
      status: 'completed',
      participants: '5,000+',
      qualified: '1,000',
      criteria: ['استيفاء الشروط الأساسية', 'جودة المحتوى', 'الأصالة']
    },
    {
      phase: 2,
      title: 'التصفيات النصف نهائية',
      duration: '3 أسابيع',
      description: 'تقييم المشاركات المؤهلة من قبل لجنة التحكيم والتصويت الجماهيري',
      status: 'in_progress',
      participants: '1,000',
      qualified: '100',
      criteria: ['التصويت الجماهيري (60%)', 'تقييم لجنة التحكيم (40%)']
    },
    {
      phase: 3,
      title: 'النهائيات',
      duration: '1 أسبوع',
      description: 'التصويت النهائي لاختيار الفائزين في كل فئة',
      status: 'upcoming',
      participants: '100',
      qualified: '10',
      criteria: ['التصويت الجماهيري (50%)', 'تقييم لجنة التحكيم (50%)']
    }
  ]

  // آلية اختيار الفائزين
  const selectionCriteria = [
    {
      type: 'التصويت الجماهيري',
      percentage: 60,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'يشارك الجمهور في اختيار المشاركات المفضلة لديهم',
      details: [
        'تصويت مفتوح لجميع الزوار',
        'نظام تصويت آمن ومحمي',
        'صوت واحد لكل مستخدم لكل مشاركة',
        'مراقبة مستمرة لمنع التلاعب'
      ]
    },
    {
      type: 'لجنة التحكيم',
      percentage: 40,
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'لجنة من الخبراء والشخصيات الرياضية المعروفة',
      details: [
        'خبراء في المجال الرياضي',
        'شخصيات إعلامية مؤثرة',
        'مصورون ومخرجون محترفون',
        'ممثلون عن الاتحادات الرياضية'
      ]
    }
  ]

  const getPhaseStatus = (status) => {
    switch(status) {
      case 'completed':
        return { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-50', text: 'مكتملة' }
      case 'in_progress':
        return { icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50', text: 'جارية' }
      case 'upcoming':
        return { icon: Calendar, color: 'text-gray-500', bg: 'bg-gray-50', text: 'قادمة' }
      default:
        return { icon: Clock, color: 'text-gray-500', bg: 'bg-gray-50', text: 'غير محدد' }
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header Section */}
      <section className="sports-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            الجوائز والتكريم
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            اكتشف الجوائز المميزة والتكريم الذي ينتظر أفضل المشجعين والمشاركين في المسابقة
          </p>
          
          {/* Total Prize Pool */}
          <div className="max-w-md mx-auto">
            <div className="stats-card-white rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold sports-text-dark mb-2">
                180,000 ريال
              </div>
              <div className="text-lg text-gray-600">إجمالي قيمة الجوائز النقدية</div>
              <div className="text-sm text-gray-500 mt-2">+ جوائز عينية وتكريمية</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Tabs */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="main" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="main" className="flex items-center">
                <Trophy className="w-4 h-4 ml-2" />
                الجوائز الرئيسية
              </TabsTrigger>
              <TabsTrigger value="physical" className="flex items-center">
                <Gift className="w-4 h-4 ml-2" />
                الجوائز العينية
              </TabsTrigger>
              <TabsTrigger value="phases" className="flex items-center">
                <Target className="w-4 h-4 ml-2" />
                مراحل التصفيات
              </TabsTrigger>
              <TabsTrigger value="selection" className="flex items-center">
                <Zap className="w-4 h-4 ml-2" />
                آلية الاختيار
              </TabsTrigger>
            </TabsList>

            {/* Main Awards */}
            <TabsContent value="main">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {mainAwards.map((award, index) => {
                  const Icon = award.icon
                  return (
                    <Card key={award.id} className={`overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                      index === 0 ? 'ring-2 ring-yellow-400' : ''
                    }`}>
                      <div className={`h-3 bg-gradient-to-r ${award.color}`}></div>
                      
                      <CardHeader className={`${award.bgColor} text-center pb-4`}>
                        <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <Icon className={`w-8 h-8 ${award.textColor}`} />
                        </div>
                        <CardTitle className={`text-2xl font-bold ${award.textColor} mb-2`}>
                          {award.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mb-3">{award.subtitle}</p>
                        <div className="text-3xl font-bold sports-text-dark">
                          {award.prize}
                        </div>
                        {index === 0 && (
                          <Badge className="bg-yellow-500 text-white mt-2">
                            الجائزة الكبرى
                          </Badge>
                        )}
                      </CardHeader>

                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={award.image} 
                          alt={award.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <CardContent className="p-6">
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {award.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="font-bold text-gray-800 mb-2">المزايا والفوائد:</h4>
                          <ul className="space-y-2">
                            {award.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 ml-2 mt-0.5 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-lg">
                          <h5 className="font-medium text-gray-700 mb-1">معايير التقييم:</h5>
                          <p className="text-sm text-gray-600">{award.criteria}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            {/* Physical Awards */}
            <TabsContent value="physical">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {physicalAwards.map((award, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={award.image} 
                        alt={award.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold sports-text-dark mb-3">
                        {award.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {award.description}
                      </p>
                      <div className="space-y-2">
                        {award.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 ml-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Elimination Phases */}
            <TabsContent value="phases">
              <div className="space-y-6">
                {eliminationPhases.map((phase) => {
                  const statusInfo = getPhaseStatus(phase.status)
                  const StatusIcon = statusInfo.icon
                  
                  return (
                    <Card key={phase.phase} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4 md:mb-0">
                            <div className={`w-12 h-12 ${statusInfo.bg} rounded-full flex items-center justify-center`}>
                              <StatusIcon className={`w-6 h-6 ${statusInfo.color}`} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold sports-text-dark">
                                المرحلة {phase.phase}: {phase.title}
                              </h3>
                              <div className="flex items-center space-x-4 rtl:space-x-reverse mt-1">
                                <Badge variant="outline" className={statusInfo.color}>
                                  {statusInfo.text}
                                </Badge>
                                <span className="text-sm text-gray-500">
                                  المدة: {phase.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-bold sports-text-dark">
                              {phase.participants}
                            </div>
                            <div className="text-sm text-gray-500">مشارك</div>
                            <div className="text-sm text-green-600 mt-1">
                              → {phase.qualified} مؤهل
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">{phase.description}</p>

                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium text-gray-700 mb-2">معايير التأهل:</h4>
                          <ul className="space-y-1">
                            {phase.criteria.map((criterion, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                                {criterion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            {/* Selection Mechanism */}
            <TabsContent value="selection">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {selectionCriteria.map((criteria, index) => {
                  const Icon = criteria.icon
                  return (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className={`${criteria.bgColor} pb-4`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                              <Icon className={`w-6 h-6 ${criteria.color}`} />
                            </div>
                            <div>
                              <CardTitle className={`text-xl font-bold ${criteria.color}`}>
                                {criteria.type}
                              </CardTitle>
                              <Badge variant="secondary" className="mt-1">
                                {criteria.percentage}% من التقييم
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold sports-text-dark">
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
                      <div className="text-2xl font-bold text-blue-600">60%</div>
                      <div className="text-sm text-gray-600">تصويت جماهيري</div>
                    </div>
                    
                    <div className="text-4xl text-gray-400">+</div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-green-600">40%</div>
                      <div className="text-sm text-gray-600">لجنة التحكيم</div>
                    </div>
                    
                    <div className="text-4xl text-gray-400">=</div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-yellow-600">100%</div>
                      <div className="text-sm text-gray-600">النتيجة النهائية</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sports-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            كن جزءاً من المنافسة
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            شارك الآن واحصل على فرصة للفوز بالجوائز المميزة والتكريم الذي تستحقه
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Trophy className="w-5 h-5 ml-2" />
              شارك الآن
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Globe className="w-5 h-5 ml-2" />
              شاهد المشاركات
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

  const categoryAwards = [
    {
      category: 'كرة القدم',
      prize: '25,000 ريال',
      icon: Trophy,
      participants: '2,500+'
    },
    {
      category: 'كرة السلة',
      prize: '20,000 ريال',
      icon: Medal,
      participants: '1,800+'
    },
    {
      category: 'الكرة الطائرة',
      prize: '15,000 ريال',
      icon: Award,
      participants: '1,200+'
    },
    {
      category: 'السباحة',
      prize: '15,000 ريال',
      icon: Star,
      participants: '900+'
    },
    {
      category: 'ألعاب القوى',
      prize: '15,000 ريال',
      icon: Trophy,
      participants: '1,100+'
    },
    {
      category: 'الرياضات الإلكترونية',
      prize: '20,000 ريال',
      icon: Award,
      participants: '2,200+'
    }
  ]

  const specialAwards = [
    {
      title: 'جائزة الجماهير المتميزة',
      description: 'للمجموعات التي تظهر روح الفريق الاستثنائية',
      icon: Users,
      prize: '40,000 ريال'
    },
    {
      title: 'جائزة أصغر مشجع',
      description: 'للمشاركين تحت سن 16 عام',
      icon: Star,
      prize: '15,000 ريال'
    },
    {
      title: 'جائزة الإبداع في التشجيع',
      description: 'للأفكار الأكثر إبداعاً في التشجيع',
      icon: Gift,
      prize: '25,000 ريال'
    },
    {
      title: 'جائزة التأثير الاجتماعي',
      description: 'للمحتوى الذي يحمل رسالة اجتماعية إيجابية',
      icon: Award,
      prize: '20,000 ريال'
    }
  ]

  const evaluationCriteria = [
    {
      title: 'الإبداع والأصالة',
      percentage: '30%',
      description: 'مدى إبداع وأصالة المحتوى المقدم'
    },
    {
      title: 'التأثير العاطفي',
      percentage: '25%',
      description: 'قدرة المحتوى على إثارة المشاعر والحماس'
    },
    {
      title: 'جودة الإنتاج',
      percentage: '20%',
      description: 'الجودة التقنية للصور أو الفيديوهات'
    },
    {
      title: 'القصة والسرد',
      percentage: '15%',
      description: 'قوة القصة وطريقة السرد'
    },
    {
      title: 'التفاعل الجماهيري',
      percentage: '10%',
      description: 'مستوى التفاعل والإعجاب من الجمهور'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 sports-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            الجوائز والتكريم
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed">
            جوائز قيمة وتكريم استثنائي للجماهير الرياضية المميزة حول العالم
          </p>
        </div>
      </section>

      {/* Main Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              الجوائز الرئيسية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              جوائز استثنائية للمشاركات المتميزة في المسابقة العالمية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainAwards.map((award, index) => {
              const Icon = award.icon
              return (
                <Card key={index} className="card-hover border-0 shadow-2xl relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-2 ${award.color}`}></div>
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 ${award.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold sports-text-dark mb-2">{award.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{award.subtitle}</p>
                    <div className="text-3xl font-bold sports-text-gold mb-6">{award.prize}</div>
                    <p className="text-gray-600 mb-8 leading-relaxed">{award.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {award.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3 rtl:space-x-reverse">
                          <div className="w-6 h-6 sports-bg-green rounded-full flex items-center justify-center flex-shrink-0">
                            <Star className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full sports-bg-green hover:bg-green-600 text-white">
                      تفاصيل أكثر
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Category Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              جوائز الرياضات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              جوائز مخصصة لكل رياضة على حدة لتكريم أفضل الجماهير
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryAwards.map((award, index) => {
              const Icon = award.icon
              return (
                <Card key={index} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 sports-bg-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold sports-text-dark mb-4">{award.category}</h3>
                    <div className="text-2xl font-bold sports-text-gold mb-4">{award.prize}</div>
                    <div className="text-sm text-gray-500 mb-4">
                      <Users className="w-4 h-4 inline mr-2" />
                      {award.participants} مشارك
                    </div>
                    <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-50">
                      عرض المشاركات
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Special Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              الجوائز الخاصة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              جوائز إضافية لتكريم الفئات والمواهب المميزة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialAwards.map((award, index) => {
              const Icon = award.icon
              return (
                <Card key={index} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-16 h-16 sports-bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold sports-text-dark mb-2">{award.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{award.description}</p>
                        <div className="text-2xl font-bold sports-text-gold">{award.prize}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              معايير التقييم
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              المعايير التي يتم على أساسها تقييم المشاركات واختيار الفائزين
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {evaluationCriteria.map((criteria, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold sports-text-dark">{criteria.title}</h3>
                      <div className="text-2xl font-bold sports-text-green">{criteria.percentage}</div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{criteria.description}</p>
                    <div className="mt-4 bg-gray-200 rounded-full h-2">
                      <div 
                        className="sports-bg-green h-2 rounded-full transition-all duration-1000"
                        style={{ width: criteria.percentage }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Award Ceremony */}
      <section className="py-20 sports-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            حفل التكريم
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            حفل مميز لتكريم الفائزين وتسليم الجوائز بحضور شخصيات رياضية وإعلامية بارزة
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">التاريخ</h3>
              <p className="text-white opacity-90">ديسمبر 2024</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <Trophy className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">الجوائز</h3>
              <p className="text-white opacity-90">أكثر من 100 جائزة</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">الحضور</h3>
              <p className="text-white opacity-90">500+ مدعو</p>
            </div>
          </div>
          
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-bold">
            احجز مقعدك
          </Button>
        </div>
      </section>

      {/* Prize Pool */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold sports-text-dark mb-6 section-title">
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

