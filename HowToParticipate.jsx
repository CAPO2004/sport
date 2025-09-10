import React, { useState } from 'react'
import { CheckCircle, Upload, User, Mail, Globe, Camera, Video, FileText, ArrowRight, Users, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const HowToParticipate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    sport: '',
    description: ''
  })

  const steps = [
    {
      number: 1,
      title: 'التسجيل في المسابقة',
      description: 'املأ نموذج التسجيل بمعلوماتك الأساسية',
      icon: User,
      details: [
        'الاسم الكامل',
        'البريد الإلكتروني',
        'الدولة',
        'الرياضة المفضلة'
      ]
    },
    {
      number: 2,
      title: 'رفع المحتوى',
      description: 'ارفع صورك أو فيديوهاتك أثناء التشجيع',
      icon: Upload,
      details: [
        'صور عالية الجودة',
        'فيديوهات قصيرة (أقل من 2 دقيقة)',
        'محتوى أصلي وحصري',
        'يظهر الحماس والتشجيع'
      ]
    },
    {
      number: 3,
      title: 'كتابة الوصف',
      description: 'اكتب قصة تشجيعك وشغفك الرياضي',
      icon: FileText,
      details: [
        'قصة شخصية ملهمة',
        'وصف لحظة التشجيع',
        'سبب حبك للرياضة',
        'تأثير الرياضة على حياتك'
      ]
    },
    {
      number: 4,
      title: 'المراجعة والإرسال',
      description: 'راجع مشاركتك وأرسلها للمسابقة',
      icon: CheckCircle,
      details: [
        'مراجعة جميع البيانات',
        'التأكد من جودة المحتوى',
        'قراءة الشروط والأحكام',
        'إرسال المشاركة'
      ]
    }
  ]

  const requirements = [
    {
      icon: Camera,
      title: 'الصور',
      description: 'صور واضحة وعالية الجودة تظهر التشجيع والحماس'
    },
    {
      icon: Video,
      title: 'الفيديوهات',
      description: 'مقاطع فيديو قصيرة (أقل من 2 دقيقة) تعبر عن الشغف الرياضي'
    },
    {
      icon: Users,
      title: 'المحتوى الجماعي',
      description: 'صور أو فيديوهات جماعية تظهر روح الفريق والتشجيع'
    },
    {
      icon: Trophy,
      title: 'اللحظات المميزة',
      description: 'توثيق اللحظات الاستثنائية والمؤثرة في التشجيع'
    }
  ]

  const sports = [
    'كرة القدم',
    'كرة السلة',
    'الكرة الطائرة',
    'السباحة',
    'ألعاب القوى',
    'التنس',
    'كرة اليد',
    'الهوكي',
    'الرياضات الإلكترونية',
    'أخرى'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('شكراً لك! تم إرسال مشاركتك بنجاح. سنتواصل معك قريباً.')
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 sports-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            كيف تشارك
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed">
            خطوات بسيطة للانضمام إلى المسابقة العالمية وتسجيل مشاركتك المميزة
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              خطوات المشاركة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اتبع هذه الخطوات البسيطة للمشاركة في المسابقة العالمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={index} className="card-hover border-0 shadow-lg relative">
                  <CardContent className="p-8 text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 sports-bg-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="w-16 h-16 sports-bg-blue rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold sports-text-dark mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                          <CheckCircle className="w-4 h-4 sports-text-green" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              متطلبات المحتوى
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تعرف على أنواع المحتوى المطلوب للمشاركة في المسابقة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => {
              const Icon = req.icon
              return (
                <Card key={index} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 sports-bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold sports-text-dark mb-4">{req.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{req.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              نموذج التسجيل
            </h2>
            <p className="text-xl text-gray-600">
              املأ النموذج أدناه لبدء مشاركتك في المسابقة
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium sports-text-dark mb-2">
                      الاسم الكامل *
                    </label>
                    <Input
                      type="text"
                      placeholder="أدخل اسمك الكامل"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium sports-text-dark mb-2">
                      البريد الإلكتروني *
                    </label>
                    <Input
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium sports-text-dark mb-2">
                      الدولة *
                    </label>
                    <Input
                      type="text"
                      placeholder="أدخل اسم دولتك"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium sports-text-dark mb-2">
                      الرياضة المفضلة *
                    </label>
                    <Select onValueChange={(value) => handleInputChange('sport', value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="اختر رياضتك المفضلة" />
                      </SelectTrigger>
                      <SelectContent>
                        {sports.map((sport, index) => (
                          <SelectItem key={index} value={sport}>
                            {sport}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium sports-text-dark mb-2">
                    وصف مشاركتك *
                  </label>
                  <Textarea
                    placeholder="اكتب قصة تشجيعك وشغفك الرياضي..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="min-h-32"
                    required
                  />
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium sports-text-dark mb-2">رفع الملفات</h3>
                  <p className="text-gray-600 mb-4">اسحب وأفلت ملفاتك هنا أو انقر للاختيار</p>
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                    اختيار الملفات
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    الحد الأقصى: 10 ملفات، 50 ميجابايت لكل ملف
                  </p>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <input type="checkbox" id="terms" className="w-4 h-4" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    أوافق على <a href="#" className="sports-text-green hover:underline">الشروط والأحكام</a> و
                    <a href="#" className="sports-text-green hover:underline"> سياسة الخصوصية</a>
                  </label>
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="sports-bg-green hover:bg-green-600 text-white px-12 py-4 rounded-full text-lg font-bold"
                  >
                    إرسال المشاركة
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              أسئلة شائعة
            </h2>
            <p className="text-xl text-gray-600">
              إجابات على الأسئلة الأكثر تكراراً حول المشاركة
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold sports-text-dark mb-4">
                  ما هي شروط المشاركة في المسابقة؟
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  يمكن لأي شخص من أي دولة المشاركة في المسابقة. يجب أن يكون المحتوى أصلياً وحصرياً، 
                  ويظهر الحماس والتشجيع الرياضي. لا توجد قيود عمرية للمشاركة.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold sports-text-dark mb-4">
                  ما هي أنواع الملفات المقبولة؟
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  نقبل الصور بصيغ JPG, PNG, GIF والفيديوهات بصيغ MP4, MOV, AVI. 
                  الحد الأقصى لحجم الملف 50 ميجابايت، ومدة الفيديو أقل من دقيقتين.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold sports-text-dark mb-4">
                  متى سيتم إعلان النتائج؟
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  سيتم إعلان النتائج خلال حفل التكريم الذي سيقام في نهاية المسابقة. 
                  ستتم مراسلة جميع المشاركين بالنتائج عبر البريد الإلكتروني.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowToParticipate

