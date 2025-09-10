import React, { useState } from 'react'
import { Search, Filter, Users, Trophy, Eye, Heart, Globe, Medal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SportsCategories = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSport, setSelectedSport] = useState('all')

  const sportsData = [
    {
      id: 'football',
      name: 'كرة القدم',
      participants: 2500,
      submissions: 1250,
      views: 45000,
      likes: 8500,
      image: '/src/assets/images/sports/sports_1.jpeg',
      description: 'الرياضة الأكثر شعبية في العالم مع جماهير متحمسة في كل قارة',
      topCountries: ['البرازيل', 'الأرجنتين', 'إسبانيا', 'ألمانيا', 'إنجلترا']
    },
    {
      id: 'basketball',
      name: 'كرة السلة',
      participants: 1800,
      submissions: 900,
      views: 32000,
      likes: 6200,
      image: '/src/assets/images/sports/sports_2.jpg',
      description: 'رياضة سريعة ومثيرة مع جماهير تتفاعل مع كل تسديدة',
      topCountries: ['الولايات المتحدة', 'إسبانيا', 'فرنسا', 'أستراليا', 'الأرجنتين']
    },
    {
      id: 'volleyball',
      name: 'الكرة الطائرة',
      participants: 1200,
      submissions: 600,
      views: 18000,
      likes: 3400,
      image: '/src/assets/images/sports/sports_3.jpg',
      description: 'رياضة جماعية مثيرة مع جماهير تشجع في كل نقطة',
      topCountries: ['البرازيل', 'إيطاليا', 'روسيا', 'الولايات المتحدة', 'بولندا']
    },
    {
      id: 'swimming',
      name: 'السباحة',
      participants: 800,
      submissions: 400,
      views: 15000,
      likes: 2800,
      image: '/src/assets/images/sports/sports_4.jpg',
      description: 'رياضة فردية تتطلب القوة والتحمل مع جماهير تقدر الإنجازات الشخصية',
      topCountries: ['الولايات المتحدة', 'أستراليا', 'اليابان', 'المجر', 'هولندا']
    },
    {
      id: 'athletics',
      name: 'ألعاب القوى',
      participants: 1100,
      submissions: 550,
      views: 22000,
      likes: 4100,
      image: '/src/assets/images/fans/fans_3.jpg',
      description: 'مجموعة متنوعة من الرياضات التي تختبر السرعة والقوة والمهارة',
      topCountries: ['كينيا', 'إثيوبيا', 'الولايات المتحدة', 'جامايكا', 'بريطانيا']
    },
    {
      id: 'esports',
      name: 'الرياضات الإلكترونية',
      participants: 2200,
      submissions: 1100,
      views: 55000,
      likes: 12000,
      image: '/src/assets/images/fans/fans_4.jpg',
      description: 'الرياضة الأسرع نمواً مع جماهير شابة ومتحمسة حول العالم',
      topCountries: ['كوريا الجنوبية', 'الصين', 'الولايات المتحدة', 'السويد', 'الدنمارك']
    },
    {
      id: 'other',
      name: 'رياضات أخرى',
      participants: 1500,
      submissions: 750,
      views: 25000,
      likes: 4500,
      image: '/src/assets/images/sports/sports_5.jpg',
      description: 'مجموعة متنوعة من الرياضات الأخرى مع جماهير متحمسة',
      topCountries: ['متنوعة', 'عالمية', 'محلية', 'إقليمية', 'دولية']
    }
  ]

  const filteredSports = sportsData.filter(sport => {
    const matchesSearch = sport.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSport = selectedSport === 'all' || sport.id === selectedSport
    return matchesSearch && matchesSport
  })

  const totalStats = {
    participants: sportsData.reduce((sum, sport) => sum + sport.participants, 0),
    submissions: sportsData.reduce((sum, sport) => sum + sport.submissions, 0),
    views: sportsData.reduce((sum, sport) => sum + sport.views, 0),
    likes: sportsData.reduce((sum, sport) => sum + sport.likes, 0)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 sports-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            الرياضات المشاركة
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto leading-relaxed">
            اكتشف جميع الرياضات المشاركة في المسابقة وشاهد إبداعات الجماهير في كل رياضة
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold sports-text-green mb-2">
                {totalStats.participants.toLocaleString()}
              </div>
              <div className="text-gray-600">مشارك</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold sports-text-blue mb-2">
                {totalStats.submissions.toLocaleString()}
              </div>
              <div className="text-gray-600">مشاركة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold sports-text-gold mb-2">
                {totalStats.views.toLocaleString()}
              </div>
              <div className="text-gray-600">مشاهدة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">
                {totalStats.likes.toLocaleString()}
              </div>
              <div className="text-gray-600">إعجاب</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">تصفية النتائج:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="ابحث عن رياضة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="اختر الرياضة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الرياضات</SelectItem>
                  {sportsData.map((sport) => (
                    <SelectItem key={sport.id} value={sport.id}>
                      {sport.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSports.map((sport) => (
              <Card key={sport.id} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={sport.image} 
                    alt={sport.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">{sport.name}</h3>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{sport.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="w-5 h-5 sports-text-green mr-2" />
                      </div>
                      <div className="text-2xl font-bold sports-text-green">
                        {sport.participants.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">مشارك</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Trophy className="w-5 h-5 sports-text-blue mr-2" />
                      </div>
                      <div className="text-2xl font-bold sports-text-blue">
                        {sport.submissions.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">مشاركة</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Eye className="w-5 h-5 sports-text-gold mr-2" />
                      </div>
                      <div className="text-lg font-bold sports-text-gold">
                        {sport.views.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">مشاهدة</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Heart className="w-5 h-5 text-red-500 mr-2" />
                      </div>
                      <div className="text-lg font-bold text-red-500">
                        {sport.likes.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">إعجاب</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold sports-text-dark mb-3 flex items-center">
                      <Globe className="w-4 h-4 ml-2" />
                      أكثر الدول مشاركة:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {sport.topCountries.slice(0, 3).map((country, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {country}
                        </Badge>
                      ))}
                      {sport.topCountries.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{sport.topCountries.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full sports-bg-blue hover:bg-blue-600 text-white">
                      <Eye className="w-4 h-4 ml-2" />
                      معرض الصور والفيديو
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="border-green-300 text-green-600 hover:bg-green-50">
                        <Trophy className="w-4 h-4 ml-1" />
                        أفضل المشاركات
                      </Button>
                      <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                        <Heart className="w-4 h-4 ml-1" />
                        صوّت الآن
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredSports.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold sports-text-dark mb-2">لا توجد نتائج</h3>
              <p className="text-gray-600">جرب تغيير مصطلحات البحث أو الفلاتر</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 sports-gradient-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            شارك في رياضتك المفضلة
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            اختر الرياضة التي تحبها وشارك بأفضل لحظاتك الجماهيرية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Trophy className="w-5 h-5 ml-2" />
              شارك الآن
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Medal className="w-5 h-5 ml-2" />
              شاهد الفائزين
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SportsCategories

