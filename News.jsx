import React, { useState } from 'react'
import { Calendar, Clock, User, Eye, MessageCircle, Share2, Tag, TrendingUp, Globe, BookOpen, Video, Image, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // أخبار المسابقة
  const competitionNews = [
    {
      id: 1,
      title: 'انطلاق المرحلة النهائية من مسابقة الجماهير الرياضية العالمية',
      excerpt: 'بدأت اليوم المرحلة النهائية من المسابقة بمشاركة أكثر من 100 مشارك من 50 دولة حول العالم',
      content: 'شهدت المسابقة إقبالاً كبيراً من الجماهير الرياضية حول العالم، حيث تم تسجيل أكثر من 5000 مشاركة في المراحل الأولى...',
      author: 'فريق التحرير',
      date: '2024-01-15',
      readTime: '3 دقائق',
      views: 2500,
      comments: 45,
      image: '/src/assets/images/fans/fans_1.jpg',
      category: 'competition',
      tags: ['مسابقة', 'نهائيات', 'جماهير'],
      featured: true
    },
    {
      id: 2,
      title: 'إعلان الجوائز الجديدة للمسابقة بقيمة 180 ألف ريال',
      excerpt: 'تم الإعلان عن زيادة قيمة الجوائز النقدية والعينية للمسابقة لتصل إلى 180 ألف ريال سعودي',
      content: 'في خطوة لتشجيع المزيد من المشاركة، أعلنت اللجنة المنظمة عن زيادة قيمة الجوائز...',
      author: 'أحمد الرياضي',
      date: '2024-01-12',
      readTime: '2 دقيقة',
      views: 1800,
      comments: 32,
      image: '/src/assets/images/awards/award_1.jpg',
      category: 'competition',
      tags: ['جوائز', 'مكافآت', 'إعلان'],
      featured: false
    },
    {
      id: 3,
      title: 'تسجيل رقم قياسي في عدد المشاهدات للمشاركات',
      excerpt: 'حققت المشاركات في المسابقة رقماً قياسياً جديداً بأكثر من مليون مشاهدة خلال أسبوع واحد',
      content: 'شهدت منصة المسابقة نشاطاً استثنائياً من الجماهير حول العالم...',
      author: 'سارة الإعلامية',
      date: '2024-01-10',
      readTime: '4 دقائق',
      views: 3200,
      comments: 67,
      image: '/src/assets/images/fans/fans_2.jpg',
      category: 'competition',
      tags: ['إحصائيات', 'مشاهدات', 'رقم قياسي'],
      featured: false
    }
  ]

  // مقالات عن دور الجماهير
  const fanArticles = [
    {
      id: 4,
      title: 'دور الجماهير في تحفيز الرياضيين: دراسة نفسية شاملة',
      excerpt: 'تأثير الجماهير على أداء الرياضيين من الناحية النفسية والمعنوية وكيف يمكن للتشجيع أن يغير مجرى المباريات',
      content: 'أظهرت الدراسات النفسية الحديثة أن للجماهير تأثيراً كبيراً على أداء الرياضيين...',
      author: 'د. محمد النفسي',
      date: '2024-01-08',
      readTime: '8 دقائق',
      views: 4500,
      comments: 89,
      image: '/src/assets/images/sports/sports_1.jpeg',
      category: 'articles',
      tags: ['علم النفس', 'تحفيز', 'أداء رياضي'],
      featured: true
    },
    {
      id: 5,
      title: 'تاريخ التشجيع الرياضي: من الكولوسيوم إلى العصر الرقمي',
      excerpt: 'رحلة عبر التاريخ لاستكشاف تطور ثقافة التشجيع الرياضي من العصور القديمة حتى اليوم',
      content: 'منذ أيام الإمبراطورية الرومانية والكولوسيوم، كان للجماهير دور محوري في الرياضة...',
      author: 'ليلى المؤرخة',
      date: '2024-01-05',
      readTime: '12 دقيقة',
      views: 2100,
      comments: 34,
      image: '/src/assets/images/fans/fans_3.jpg',
      category: 'articles',
      tags: ['تاريخ', 'ثقافة', 'تطور'],
      featured: false
    },
    {
      id: 6,
      title: 'الجماهير والتكنولوجيا: كيف غيرت وسائل التواصل وجه التشجيع',
      excerpt: 'تأثير وسائل التواصل الاجتماعي والتكنولوجيا الحديثة على طرق التشجيع والتفاعل مع الأحداث الرياضية',
      content: 'لقد أحدثت وسائل التواصل الاجتماعي ثورة حقيقية في عالم التشجيع الرياضي...',
      author: 'خالد التقني',
      date: '2024-01-03',
      readTime: '6 دقائق',
      views: 1900,
      comments: 28,
      image: '/src/assets/images/sports/sports_2.jpg',
      category: 'articles',
      tags: ['تكنولوجيا', 'وسائل التواصل', 'تطوير'],
      featured: false
    }
  ]

  // تغطيات خاصة
  const specialCoverage = [
    {
      id: 7,
      title: 'تغطية خاصة: ورشة تدريب المصورين الرياضيين',
      excerpt: 'تقرير شامل عن ورشة التدريب المجانية للمصورين الرياضيين التي نظمتها المسابقة',
      content: 'نظمت اللجنة المنظمة للمسابقة ورشة تدريبية مجانية للمصورين الرياضيين...',
      author: 'فريق التغطية',
      date: '2024-01-14',
      readTime: '5 دقائق',
      views: 1200,
      comments: 19,
      image: '/src/assets/images/icons/icons_1.jpg',
      category: 'coverage',
      tags: ['ورشة', 'تدريب', 'تصوير'],
      featured: false,
      type: 'workshop'
    },
    {
      id: 8,
      title: 'لقاء حصري مع أفضل المشاركين في المسابقة',
      excerpt: 'حوارات مع المتصدرين في المسابقة حول تجربتهم وأسرار نجاحهم في التشجيع',
      content: 'التقينا بأفضل المشاركين في المسابقة للحديث عن تجربتهم الفريدة...',
      author: 'نور الصحفية',
      date: '2024-01-11',
      readTime: '10 دقائق',
      views: 3800,
      comments: 76,
      image: '/src/assets/images/awards/award_2.jpg',
      category: 'coverage',
      tags: ['مقابلات', 'مشاركين', 'تجارب'],
      featured: true,
      type: 'interview'
    },
    {
      id: 9,
      title: 'تقرير مصور: أجمل اللحظات من فعاليات المسابقة',
      excerpt: 'مجموعة من أجمل الصور واللحظات المميزة من الفعاليات والأنشطة المصاحبة للمسابقة',
      content: 'شهدت فعاليات المسابقة لحظات مميزة ومؤثرة نستعرضها في هذا التقرير المصور...',
      author: 'عدسة المسابقة',
      date: '2024-01-09',
      readTime: '7 دقائق',
      views: 2700,
      comments: 52,
      image: '/src/assets/images/fans/fans_4.jpg',
      category: 'coverage',
      tags: ['تقرير مصور', 'فعاليات', 'لحظات مميزة'],
      featured: false,
      type: 'photo_report'
    }
  ]

  const allNews = [...competitionNews, ...fanArticles, ...specialCoverage]

  const categories = [
    { id: 'all', name: 'جميع الأخبار', count: allNews.length },
    { id: 'competition', name: 'أخبار المسابقة', count: competitionNews.length },
    { id: 'articles', name: 'مقالات الجماهير', count: fanArticles.length },
    { id: 'coverage', name: 'تغطيات خاصة', count: specialCoverage.length }
  ]

  const filteredNews = allNews.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  )

  const featuredNews = allNews.filter(item => item.featured)
  const latestNews = allNews.slice(0, 6)

  const getTypeIcon = (type) => {
    switch(type) {
      case 'workshop': return BookOpen
      case 'interview': return MessageCircle
      case 'photo_report': return Image
      default: return Globe
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header Section */}
      <section className="sports-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            الأخبار والتغطيات
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            تابع آخر أخبار المسابقة والمقالات المتخصصة حول دور الجماهير في الرياضة
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                {allNews.length}
              </div>
              <div className="text-sm text-gray-600">مقال وخبر</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                {allNews.reduce((sum, item) => sum + item.views, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">مشاهدة</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                {allNews.reduce((sum, item) => sum + item.comments, 0)}
              </div>
              <div className="text-sm text-gray-600">تعليق</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                {featuredNews.length}
              </div>
              <div className="text-sm text-gray-600">مقال مميز</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Tabs */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="latest" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="latest" className="flex items-center">
                <TrendingUp className="w-4 h-4 ml-2" />
                آخر الأخبار
              </TabsTrigger>
              <TabsTrigger value="featured" className="flex items-center">
                <Star className="w-4 h-4 ml-2" />
                المقالات المميزة
              </TabsTrigger>
              <TabsTrigger value="categories" className="flex items-center">
                <Tag className="w-4 h-4 ml-2" />
                حسب الفئة
              </TabsTrigger>
            </TabsList>

            {/* Latest News */}
            <TabsContent value="latest">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Article */}
                <div className="lg:col-span-2">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-64 md:h-80">
                      <img 
                        src={latestNews[0]?.image} 
                        alt={latestNews[0]?.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <Badge className="bg-red-500 text-white mb-3">
                          عاجل
                        </Badge>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                          {latestNews[0]?.title}
                        </h2>
                        <p className="text-lg opacity-90 mb-4">
                          {latestNews[0]?.excerpt}
                        </p>
                        <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm">
                          <span className="flex items-center">
                            <User className="w-4 h-4 ml-1" />
                            {latestNews[0]?.author}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 ml-1" />
                            {formatDate(latestNews[0]?.date)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 ml-1" />
                            {latestNews[0]?.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Side Articles */}
                <div className="space-y-6">
                  {latestNews.slice(1, 4).map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="flex">
                        <div className="w-24 h-24 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="flex-1 p-4">
                          <h3 className="font-bold text-sm mb-2 line-clamp-2 sports-text-dark">
                            {item.title}
                          </h3>
                          <div className="flex items-center space-x-3 rtl:space-x-reverse text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 ml-1" />
                              {formatDate(item.date)}
                            </span>
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 ml-1" />
                              {item.views.toLocaleString()}
                            </span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Featured Articles */}
            <TabsContent value="featured">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredNews.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                        مميز
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
                        {item.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-bold sports-text-dark mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <span className="flex items-center">
                            <User className="w-4 h-4 ml-1" />
                            {item.author}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 ml-1" />
                            {item.readTime}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 ml-1" />
                            {item.views.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 ml-1" />
                            {item.comments}
                          </span>
                        </div>
                      </div>
                      
                      <Button className="w-full sports-bg-blue text-white hover:bg-blue-600">
                        اقرأ المقال كاملاً
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Categories */}
            <TabsContent value="categories">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-4 mb-8">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`rounded-full px-6 py-2 ${
                      selectedCategory === category.id 
                        ? 'sports-bg-blue text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-blue-500'
                    }`}
                  >
                    {category.name}
                    <Badge variant="secondary" className="mr-2">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>

              {/* Filtered News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((item) => {
                  const TypeIcon = getTypeIcon(item.type)
                  return (
                    <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        {item.type && (
                          <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-full">
                            <TypeIcon className="w-4 h-4 text-gray-600" />
                          </div>
                        )}
                        {item.featured && (
                          <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                            مميز
                          </Badge>
                        )}
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-3">
                          {item.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <h3 className="text-lg font-bold sports-text-dark mb-3 line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {item.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="flex items-center">
                              <User className="w-3 h-3 ml-1" />
                              {item.author}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 ml-1" />
                              {formatDate(item.date)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 ml-1" />
                              {item.views.toLocaleString()}
                            </span>
                            <span className="flex items-center">
                              <MessageCircle className="w-3 h-3 ml-1" />
                              {item.comments}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Button size="sm" className="flex-1 ml-2 sports-bg-blue text-white hover:bg-blue-600">
                            اقرأ المزيد
                          </Button>
                          <Button variant="outline" size="sm" className="p-2">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 sports-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            اشترك في النشرة الإخبارية
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              اشترك الآن
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News

