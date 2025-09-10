import React, { useState, useEffect } from 'react'
import { CheckCircle, Mail, MessageSquare, Calendar, Clock, Trophy, Users, ArrowRight, Download, Share2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const RegistrationConfirmation = () => {
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

  // بيانات التسجيل الوهمية
  const registrationData = {
    registrationId: 'SP2024-001',
    participantName: 'أحمد محمد',
    email: 'ahmed.mohamed@email.com',
    phone: '+20 123 456 7890',
    country: 'مصر',
    sport: 'كرة القدم',
    submissionTitle: 'جماهير الأهلي في نهائي دوري الأبطال',
    submissionDate: '2024-01-15',
    fileType: 'صورة',
    fileSize: '2.5 MB',
    status: 'pending_review'
  }

  const timeline = [
    {
      step: 1,
      title: 'تسجيل المشاركة',
      description: 'تم استلام مشاركتك بنجاح',
      status: 'completed',
      date: '15 يناير 2024',
      icon: CheckCircle
    },
    {
      step: 2,
      title: 'إرسال التأكيد',
      description: 'تم إرسال رسائل التأكيد عبر البريد الإلكتروني والرسائل النصية',
      status: 'completed',
      date: '15 يناير 2024',
      icon: Mail
    },
    {
      step: 3,
      title: 'مراجعة المشاركة',
      description: 'جاري مراجعة مشاركتك من قبل لجنة التحكيم',
      status: 'in_progress',
      date: 'خلال 3-5 أيام عمل',
      icon: Users
    },
    {
      step: 4,
      title: 'بدء التصويت',
      description: 'ستصبح مشاركتك متاحة للتصويت العام',
      status: 'pending',
      date: 'بعد الموافقة',
      icon: Trophy
    }
  ]

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case 'in_progress':
        return <Clock className="w-6 h-6 text-blue-500" />
      case 'pending':
        return <Clock className="w-6 h-6 text-gray-400" />
      default:
        return <Clock className="w-6 h-6 text-gray-400" />
    }
  }

  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return <Badge className="bg-green-500 text-white">مكتمل</Badge>
      case 'in_progress':
        return <Badge className="bg-blue-500 text-white">جاري</Badge>
      case 'pending':
        return <Badge className="bg-gray-400 text-white">في الانتظار</Badge>
      default:
        return <Badge variant="secondary">غير محدد</Badge>
    }
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Success Header */}
      <section className="sports-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            تم التسجيل بنجاح!
          </h1>
          
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            شكراً لك على المشاركة في مسابقة الجماهير الرياضية. تم استلام مشاركتك وسيتم مراجعتها قريباً.
          </p>

          <div className="bg-white bg-opacity-20 rounded-2xl p-6 backdrop-blur-sm max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">رقم التسجيل</h3>
            <div className="text-3xl font-mono font-bold text-white tracking-wider">
              {registrationData.registrationId}
            </div>
            <p className="text-white opacity-80 text-sm mt-2">
              احتفظ بهذا الرقم للمراجعة المستقبلية
            </p>
          </div>
        </div>
      </section>

      {/* Registration Summary */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold sports-text-dark text-center">
                ملخص التسجيل
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold sports-text-dark mb-4">المعلومات الشخصية</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">الاسم:</span>
                      <span className="font-medium">{registrationData.participantName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">البريد الإلكتروني:</span>
                      <span className="font-medium">{registrationData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">رقم الهاتف:</span>
                      <span className="font-medium">{registrationData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">الدولة:</span>
                      <span className="font-medium">{registrationData.country}</span>
                    </div>
                  </div>
                </div>

                {/* Submission Information */}
                <div>
                  <h3 className="text-lg font-bold sports-text-dark mb-4">تفاصيل المشاركة</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">نوع الرياضة:</span>
                      <Badge variant="outline" className="sports-text-blue border-blue-200">
                        {registrationData.sport}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">عنوان المشاركة:</span>
                      <span className="font-medium text-right max-w-48">
                        {registrationData.submissionTitle}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">تاريخ التسجيل:</span>
                      <span className="font-medium">{registrationData.submissionDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">نوع الملف:</span>
                      <span className="font-medium">{registrationData.fileType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">حجم الملف:</span>
                      <span className="font-medium">{registrationData.fileSize}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t">
                <Button className="flex-1 sports-bg-blue text-white">
                  <Download className="w-4 h-4 ml-2" />
                  تحميل إيصال التسجيل
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 ml-2" />
                  مشاركة رقم التسجيل
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Confirmation Status */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold sports-text-dark text-center">
                حالة التأكيد
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Email Confirmation */}
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-green-700 mb-2">البريد الإلكتروني</h3>
                  <Badge className="bg-green-500 text-white mb-3">تم الإرسال</Badge>
                  <p className="text-sm text-green-600">
                    تم إرسال رسالة تأكيد إلى بريدك الإلكتروني
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    تحقق من صندوق الوارد أو الرسائل غير المرغوب فيها
                  </p>
                </div>

                {/* SMS Confirmation */}
                <div className="text-center p-6 bg-blue-50 rounded-2xl">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-700 mb-2">الرسائل النصية</h3>
                  <Badge className="bg-blue-500 text-white mb-3">تم الإرسال</Badge>
                  <p className="text-sm text-blue-600">
                    تم إرسال رسالة نصية إلى رقم هاتفك
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    ستصلك رسالة خلال دقائق قليلة
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold sports-text-dark mb-4 section-title">
              الخطوات التالية
            </h2>
            <p className="text-xl text-gray-600">
              تتبع مراحل معالجة مشاركتك
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start space-x-6 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.status === 'completed' ? 'bg-green-500' :
                      item.status === 'in_progress' ? 'bg-blue-500' :
                      'bg-gray-300'
                    }`}>
                      {getStatusIcon(item.status)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold sports-text-dark">
                        {item.step}. {item.title}
                      </h3>
                      {getStatusBadge(item.status)}
                    </div>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 ml-1" />
                      {item.date}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Countdown to Results */}
      <section className="py-20 sports-gradient-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            النتائج النهائية خلال
          </h2>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
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

          <p className="text-xl text-white opacity-90 mb-8">
            ستتمكن من متابعة أداء مشاركتك من خلال لوحة التحكم الخاصة بك
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Trophy className="w-5 h-5 ml-2" />
              انتقل إلى لوحة التحكم
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <ArrowRight className="w-5 h-5 ml-2" />
              العودة للصفحة الرئيسية
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegistrationConfirmation

