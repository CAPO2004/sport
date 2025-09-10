import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Phone, Mail, Users, Trophy, Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedItems, setExpandedItems] = useState(new Set())

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  // الأسئلة الشائعة مقسمة حسب الفئات
  const faqCategories = [
    {
      id: 'participation',
      title: 'المشاركة والتسجيل',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      questions: [
        {
          id: 'how-to-participate',
          question: 'كيف أشارك في المسابقة؟',
          answer: 'للمشاركة في المسابقة، يجب عليك أولاً التسجيل من خلال صفحة "كيف تشارك" وملء النموذج المطلوب. ثم قم برفع صورة أو فيديو يُظهر حماسك وتشجيعك للرياضة المفضلة لديك. تأكد من أن المحتوى أصلي ويتبع قواعد المسابقة.',
          tags: ['تسجيل', 'مشاركة', 'رفع ملفات'],
          category: 'participation'
        },
        {
          id: 'registration-requirements',
          question: 'ما هي متطلبات التسجيل؟',
          answer: 'يجب أن تكون فوق 16 عاماً، وأن تقدم محتوى أصلي (صورة أو فيديو) يُظهر تشجيعك الرياضي. المحتوى يجب أن يكون واضحاً وعالي الجودة، ولا يحتوي على أي مواد مسيئة أو مخالفة للآداب العامة.',
          tags: ['متطلبات', 'عمر', 'محتوى أصلي'],
          category: 'participation'
        },
        {
          id: 'file-formats',
          question: 'ما هي صيغ الملفات المقبولة؟',
          answer: 'للصور: JPG, PNG, GIF (حد أقصى 10 ميجابايت). للفيديوهات: MP4, MOV, AVI (حد أقصى 100 ميجابايت، مدة أقصاها 3 دقائق). يُفضل أن تكون الصور بدقة عالية والفيديوهات بجودة HD.',
          tags: ['صيغ ملفات', 'صور', 'فيديو', 'حجم'],
          category: 'participation'
        },
        {
          id: 'multiple-submissions',
          question: 'هل يمكنني تقديم أكثر من مشاركة؟',
          answer: 'نعم، يمكنك تقديم حتى 3 مشاركات كحد أقصى، ولكن كل مشاركة يجب أن تكون في رياضة مختلفة. هذا يتيح لك إظهار تنوع اهتماماتك الرياضية وزيادة فرصك في الفوز.',
          tags: ['مشاركات متعددة', 'حد أقصى', 'رياضات مختلفة'],
          category: 'participation'
        }
      ]
    },
    {
      id: 'voting',
      title: 'التصويت والتقييم',
      icon: Trophy,
      color: 'from-green-500 to-green-600',
      questions: [
        {
          id: 'voting-frequency',
          question: 'هل يمكن التصويت أكثر من مرة؟',
          answer: 'يمكنك التصويت مرة واحدة فقط لكل مشاركة. ولكن يمكنك التصويت لمشاركات متعددة مختلفة. نظام التصويت يتتبع عنوان IP الخاص بك لضمان عدالة العملية ومنع التلاعب.',
          tags: ['تصويت', 'مرة واحدة', 'عدالة'],
          category: 'voting'
        },
        {
          id: 'voting-criteria',
          question: 'ما هي معايير اختيار الفائزين؟',
          answer: 'يتم اختيار الفائزين بناءً على مزيج من التصويت الجماهيري (60%) وتقييم لجنة التحكيم (40%). لجنة التحكيم تقيم الأصالة، الإبداع، جودة المحتوى، والتأثير. التصويت الجماهيري يعكس شعبية المشاركة.',
          tags: ['معايير', 'لجنة تحكيم', 'تصويت جماهيري'],
          category: 'voting'
        },
        {
          id: 'voting-period',
          question: 'متى تبدأ وتنتهي فترة التصويت؟',
          answer: 'فترة التصويت تبدأ بعد انتهاء فترة استقبال المشاركات وتستمر لمدة أسبوعين. سيتم الإعلان عن التواريخ المحددة على الموقع وعبر وسائل التواصل الاجتماعي.',
          tags: ['فترة تصويت', 'تواريخ', 'أسبوعين'],
          category: 'voting'
        },
        {
          id: 'vote-security',
          question: 'كيف تضمنون أمان عملية التصويت؟',
          answer: 'نستخدم تقنيات متقدمة لحماية التصويت من التلاعب، بما في ذلك تتبع عناوين IP، التحقق من الهوية، وخوارزميات كشف التصويت الوهمي. كما نراجع النتائج يدوياً للتأكد من صحتها.',
          tags: ['أمان', 'حماية', 'تلاعب'],
          category: 'voting'
        }
      ]
    },
    {
      id: 'prizes',
      title: 'الجوائز والتكريم',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      questions: [
        {
          id: 'prize-distribution',
          question: 'كيف يتم توزيع الجوائز؟',
          answer: 'الجوائز النقدية يتم تحويلها إلى الحساب البنكي للفائز خلال 30 يوماً من إعلان النتائج. الجوائز العينية والدروع التذكارية يتم شحنها إلى عنوان الفائز المسجل. جميع الرسوم والضرائب على حساب المنظمين.',
          tags: ['توزيع جوائز', 'تحويل بنكي', 'شحن'],
          category: 'prizes'
        },
        {
          id: 'tax-obligations',
          question: 'هل هناك ضرائب على الجوائز؟',
          answer: 'المنظمون يتحملون جميع الضرائب والرسوم المترتبة على الجوائز. الفائزون يحصلون على المبلغ كاملاً دون أي خصومات. ولكن قد تختلف القوانين حسب بلد الإقامة، لذا ننصح بمراجعة القوانين المحلية.',
          tags: ['ضرائب', 'رسوم', 'قوانين محلية'],
          category: 'prizes'
        },
        {
          id: 'prize-eligibility',
          question: 'من هم المؤهلون للحصول على الجوائز؟',
          answer: 'جميع المشاركين المسجلين رسمياً والذين قدموا مشاركات تتوافق مع قواعد المسابقة مؤهلون للفوز. لا توجد قيود جغرافية، والمسابقة مفتوحة لجميع الجنسيات والأعمار فوق 16 عاماً.',
          tags: ['أهلية', 'جنسيات', 'أعمار'],
          category: 'prizes'
        }
      ]
    },
    {
      id: 'technical',
      title: 'الدعم التقني',
      icon: HelpCircle,
      color: 'from-orange-500 to-orange-600',
      questions: [
        {
          id: 'upload-problems',
          question: 'أواجه مشكلة في رفع الملفات، ماذا أفعل؟',
          answer: 'تأكد من أن حجم الملف لا يتجاوز الحد المسموح (10 ميجابايت للصور، 100 ميجابايت للفيديو). جرب استخدام متصفح مختلف أو امسح ذاكرة التخزين المؤقت. إذا استمرت المشكلة، تواصل مع الدعم التقني.',
          tags: ['رفع ملفات', 'مشاكل تقنية', 'متصفح'],
          category: 'technical'
        },
        {
          id: 'account-access',
          question: 'نسيت كلمة المرور، كيف أستعيد حسابي؟',
          answer: 'اضغط على "نسيت كلمة المرور" في صفحة تسجيل الدخول، وأدخل بريدك الإلكتروني. ستصلك رسالة تحتوي على رابط لإعادة تعيين كلمة المرور. إذا لم تصل الرسالة، تحقق من مجلد الرسائل غير المرغوب فيها.',
          tags: ['كلمة مرور', 'استعادة حساب', 'بريد إلكتروني'],
          category: 'technical'
        },
        {
          id: 'mobile-compatibility',
          question: 'هل الموقع متوافق مع الهواتف المحمولة؟',
          answer: 'نعم، الموقع مصمم ليكون متجاوباً ويعمل بشكل مثالي على جميع الأجهزة بما في ذلك الهواتف الذكية والأجهزة اللوحية. يمكنك المشاركة والتصويت وتصفح المحتوى بسهولة من أي جهاز.',
          tags: ['هواتف محمولة', 'تجاوب', 'أجهزة'],
          category: 'technical'
        }
      ]
    },
    {
      id: 'support',
      title: 'التواصل والدعم',
      icon: MessageCircle,
      color: 'from-red-500 to-red-600',
      questions: [
        {
          id: 'contact-support',
          question: 'كيفية التواصل مع الدعم؟',
          answer: 'يمكنك التواصل معنا عبر عدة طرق: البريد الإلكتروني (support@sportscompetition.com)، الهاتف (966-11-1234567)، واتساب، أو نموذج التواصل في الموقع. فريق الدعم متاح 24/7 للرد على استفساراتك.',
          tags: ['دعم', 'تواصل', 'بريد إلكتروني', 'هاتف'],
          category: 'support'
        },
        {
          id: 'response-time',
          question: 'كم يستغرق الرد على الاستفسارات؟',
          answer: 'نهدف للرد على جميع الاستفسارات خلال 24 ساعة كحد أقصى. الاستفسارات العاجلة يتم الرد عليها خلال ساعات قليلة. في أوقات الذروة قد يستغرق الرد وقتاً أطول قليلاً.',
          tags: ['وقت رد', '24 ساعة', 'استفسارات عاجلة'],
          category: 'support'
        },
        {
          id: 'complaint-procedure',
          question: 'كيف أقدم شكوى أو اعتراض؟',
          answer: 'يمكنك تقديم الشكاوى أو الاعتراضات عبر نموذج خاص في قسم "التواصل والدعم" أو عبر البريد الإلكتروني المخصص للشكاوى. سيتم مراجعة جميع الشكاوى من قبل لجنة مختصة والرد عليها خلال 7 أيام عمل.',
          tags: ['شكاوى', 'اعتراضات', 'لجنة مختصة'],
          category: 'support'
        }
      ]
    }
  ]

  // دمج جميع الأسئلة للبحث
  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, categoryTitle: category.title, categoryColor: category.color }))
  )

  // فلترة الأسئلة حسب البحث
  const filteredQuestions = allQuestions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const QuestionCard = ({ question, categoryColor }) => {
    const isExpanded = expandedItems.has(question.id)
    
    return (
      <Card className="mb-4 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
        <CardHeader 
          className="cursor-pointer"
          onClick={() => toggleExpanded(question.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg sports-text-dark mb-2 text-right">
                {question.question}
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                {question.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mr-4">
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
          </div>
        </CardHeader>
        
        {isExpanded && (
          <CardContent className="pt-0 pb-6 px-6">
            <div className={`p-4 rounded-lg bg-gradient-to-r ${categoryColor} bg-opacity-10`}>
              <p className="text-gray-700 leading-relaxed text-right">
                {question.answer}
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Badge variant="secondary" className="text-xs">
                  {question.categoryTitle}
                </Badge>
              </div>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Button variant="outline" size="sm" className="text-xs">
                  <CheckCircle className="w-3 h-3 ml-1" />
                  مفيد
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <MessageCircle className="w-3 h-3 ml-1" />
                  سؤال إضافي
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    )
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header Section */}
      <section className="sports-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            إجابات شاملة على جميع استفساراتك حول المسابقة والمشاركة والتصويت والجوائز
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="ابحث في الأسئلة الشائعة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full text-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                {allQuestions.length}
              </div>
              <div className="text-sm text-gray-600">سؤال وجواب</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                {faqCategories.length}
              </div>
              <div className="text-sm text-gray-600">فئة</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                24/7
              </div>
              <div className="text-sm text-gray-600">دعم متاح</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                &lt;24h
              </div>
              <div className="text-sm text-gray-600">وقت الرد</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            // Search Results
            <div>
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold sports-text-dark mb-2">
                  نتائج البحث
                </h2>
                <p className="text-gray-600">
                  تم العثور على {filteredQuestions.length} نتيجة لـ "{searchTerm}"
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map(question => (
                    <QuestionCard 
                      key={question.id} 
                      question={question} 
                      categoryColor={question.categoryColor}
                    />
                  ))
                ) : (
                  <Card className="text-center py-12">
                    <CardContent>
                      <div className="text-6xl mb-4">🔍</div>
                      <h3 className="text-xl font-bold text-gray-600 mb-2">
                        لا توجد نتائج
                      </h3>
                      <p className="text-gray-500 mb-4">
                        جرب البحث بكلمات مختلفة أو تصفح الفئات أدناه
                      </p>
                      <Button 
                        onClick={() => setSearchTerm('')}
                        variant="outline"
                      >
                        مسح البحث
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          ) : (
            // Categories View
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                <TabsTrigger value="all" className="flex items-center">
                  <HelpCircle className="w-4 h-4 ml-2" />
                  الكل
                </TabsTrigger>
                {faqCategories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center text-xs">
                      <IconComponent className="w-4 h-4 ml-1" />
                      {category.title}
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {/* All Questions */}
              <TabsContent value="all">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {faqCategories.map((category) => {
                    const IconComponent = category.icon
                    return (
                      <div key={category.id}>
                        <div className={`bg-gradient-to-r ${category.color} rounded-lg p-6 mb-6 text-white`}>
                          <div className="flex items-center mb-4">
                            <IconComponent className="w-8 h-8 ml-3" />
                            <h3 className="text-2xl font-bold">{category.title}</h3>
                          </div>
                          <p className="opacity-90">
                            {category.questions.length} سؤال وجواب
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          {category.questions.slice(0, 2).map(question => (
                            <QuestionCard 
                              key={question.id} 
                              question={question} 
                              categoryColor={category.color}
                            />
                          ))}
                          {category.questions.length > 2 && (
                            <Card className="text-center py-4 border-dashed">
                              <CardContent>
                                <p className="text-gray-600 mb-2">
                                  +{category.questions.length - 2} أسئلة إضافية
                                </p>
                                <Button variant="outline" size="sm">
                                  عرض الكل
                                </Button>
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>

              {/* Individual Category Tabs */}
              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="max-w-4xl mx-auto">
                    <div className={`bg-gradient-to-r ${category.color} rounded-lg p-8 mb-8 text-white text-center`}>
                      <category.icon className="w-16 h-16 mx-auto mb-4" />
                      <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                      <p className="text-xl opacity-90">
                        {category.questions.length} سؤال وجواب شامل
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {category.questions.map(question => (
                        <QuestionCard 
                          key={question.id} 
                          question={question} 
                          categoryColor={category.color}
                        />
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-6xl mb-4">💬</div>
            <h2 className="text-3xl font-bold sports-text-dark mb-4">
              لم تجد إجابة لسؤالك؟
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              فريق الدعم متاح 24/7 للإجابة على جميع استفساراتك
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-1">البريد الإلكتروني</h4>
                <p className="text-sm text-gray-600">support@sportscompetition.com</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-1">الهاتف</h4>
                <p className="text-sm text-gray-600">966-11-1234567</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-1">الدردشة المباشرة</h4>
                <p className="text-sm text-gray-600">متاح 24/7</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="sports-bg-blue hover:bg-blue-600 text-white px-8 py-3">
                <MessageCircle className="w-5 h-5 ml-2" />
                تواصل معنا
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3">
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

