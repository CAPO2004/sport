import React, { useState } from 'react'
import { Heart, Eye, Share2, MessageCircle, Trophy, Star, Filter, Search, Globe, Calendar, Play, Download, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [selectedSeason, setSelectedSeason] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [votedItems, setVotedItems] = useState(new Set())

  // بيانات محدثة للمشاركات مع تفاصيل أكثر
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      title: 'جماهير الأهلي في نهائي دوري الأبطال',
      participant: 'أحمد محمد',
      country: 'مصر',
      sport: 'كرة القدم',
      image: '/src/assets/images/fans/fans_1.jpg',
      votes: 1250,
      views: 5420,
      category: 'football',
      description: 'لحظة تاريخية من جماهير النادي الأهلي في نهائي دوري أبطال أفريقيا',
      isVideo: false,
      rank: 1,
      qualified: true,
      season: '2024',
      date: '2024-01-15',
      location: 'القاهرة، مصر',
      tags: ['نهائي', 'دوري الأبطال', 'الأهلي']
    },
    {
      id: 2,
      title: 'مشجعو المنتخب السعودي في كأس العالم',
      participant: 'سارة العتيبي',
      country: 'السعودية',
      sport: 'كرة القدم',
      image: '/src/assets/images/fans/fans_2.jpg',
      votes: 980,
      views: 3210,
      category: 'football',
      description: 'احتفال جماهير المنتخب السعودي بالفوز التاريخي في كأس العالم',
      isVideo: true,
      rank: 2,
      qualified: true,
      season: '2024',
      date: '2024-01-12',
      location: 'الدوحة، قطر',
      tags: ['كأس العالم', 'المنتخب السعودي', 'فوز تاريخي']
    },
    {
      id: 3,
      title: 'جماهير كرة السلة في الدوري الأمريكي',
      participant: 'محمد الأحمد',
      country: 'الإمارات',
      sport: 'كرة السلة',
      image: '/src/assets/images/sports/sports_1.jpeg',
      votes: 750,
      views: 2890,
      category: 'basketball',
      description: 'أجواء رائعة من جماهير كرة السلة في مباراة حاسمة',
      isVideo: false,
      rank: 3,
      qualified: true,
      season: '2024',
      date: '2024-01-10',
      location: 'دبي، الإمارات',
      tags: ['NBA', 'كرة السلة', 'مباراة حاسمة']
    },
    {
      id: 4,
      title: 'مشجعو التنس في بطولة ويمبلدون',
      participant: 'فاطمة الزهراء',
      country: 'المغرب',
      sport: 'التنس',
      image: '/src/assets/images/sports/sports_2.jpg',
      votes: 620,
      views: 1950,
      category: 'tennis',
      description: 'لحظات مميزة من جماهير التنس في بطولة ويمبلدون العريقة',
      isVideo: false,
      rank: 4,
      qualified: true,
      season: '2024',
      date: '2024-01-08',
      location: 'لندن، بريطانيا',
      tags: ['ويمبلدون', 'تنس', 'بطولة عريقة']
    },
    {
      id: 5,
      title: 'جماهير ألعاب القوى في الأولمبياد',
      participant: 'خالد علي',
      country: 'الجزائر',
      sport: 'ألعاب القوى',
      image: '/src/assets/images/fans/fans_3.jpg',
      votes: 400,
      views: 1500,
      category: 'athletics',
      description: 'لحظات حماسية من الأولمبياد تشجع الأبطال',
      isVideo: false,
      rank: 5,
      qualified: true,
      season: '2024',
      date: '2024-01-05',
      location: 'باريس، فرنسا',
      tags: ['أولمبياد', 'ألعاب القوى', 'باريس 2024']
    },
    {
      id: 6,
      title: 'مشجعو السباحة في بطولة العالم',
      participant: 'ليلى حسن',
      country: 'تونس',
      sport: 'السباحة',
      image: '/src/assets/images/sports/sports_3.jpg',
      votes: 300,
      views: 1000,
      category: 'swimming',
      description: 'دعم لا يتوقف للسباحين في كل المنافسات',
      isVideo: false,
      rank: 6,
      qualified: true,
      season: '2024',
      date: '2024-01-03',
      location: 'تونس، تونس',
      tags: ['سباحة', 'بطولة العالم', 'دعم']
    },
    {
      id: 7,
      title: 'جماهير الرياضات الإلكترونية في نهائي League of Legends',
      participant: 'يوسف جمال',
      country: 'الأردن',
      sport: 'الرياضات الإلكترونية',
      image: '/src/assets/images/fans/fans_4.jpg',
      votes: 2000,
      views: 8000,
      category: 'esports',
      description: 'حماس لا مثيل له في عالم الرياضات الإلكترونية',
      isVideo: true,
      rank: 7,
      qualified: true,
      season: '2024',
      date: '2024-01-01',
      location: 'عمان، الأردن',
      tags: ['League of Legends', 'رياضات إلكترونية', 'نهائي']
    },
    {
      id: 8,
      title: 'مشجعو الكرة الطائرة في بطولة آسيا',
      participant: 'نور الدين',
      country: 'قطر',
      sport: 'الكرة الطائرة',
      image: '/src/assets/images/sports/sports_4.jpg',
      votes: 500,
      views: 1800,
      category: 'volleyball',
      description: 'تشجيع قوي في كل نقطة في مباريات الكرة الطائرة',
      isVideo: false,
      rank: 8,
      qualified: true,
      season: '2023',
      date: '2023-12-28',
      location: 'الدوحة، قطر',
      tags: ['كرة طائرة', 'بطولة آسيا', 'تشجيع']
    }
  ])

  const categories = [
    { id: 'all', name: 'جميع الرياضات', count: submissions.filter(s => s.qualified).length },
    { id: 'football', name: 'كرة القدم', count: submissions.filter(s => s.category === 'football' && s.qualified).length },
    { id: 'basketball', name: 'كرة السلة', count: submissions.filter(s => s.category === 'basketball' && s.qualified).length },
    { id: 'tennis', name: 'التنس', count: submissions.filter(s => s.category === 'tennis' && s.qualified).length },
    { id: 'athletics', name: 'ألعاب القوى', count: submissions.filter(s => s.category === 'athletics' && s.qualified).length },
    { id: 'swimming', name: 'السباحة', count: submissions.filter(s => s.category === 'swimming' && s.qualified).length },
    { id: 'esports', name: 'الرياضات الإلكترونية', count: submissions.filter(s => s.category === 'esports' && s.qualified).length },
    { id: 'volleyball', name: 'الكرة الطائرة', count: submissions.filter(s => s.category === 'volleyball' && s.qualified).length },
  ]

  const countries = [
    { id: 'all', name: 'جميع الدول' },
    { id: 'مصر', name: 'مصر' },
    { id: 'السعودية', name: 'السعودية' },
    { id: 'الإمارات', name: 'الإمارات' },
    { id: 'المغرب', name: 'المغرب' },
    { id: 'الجزائر', name: 'الجزائر' },
    { id: 'تونس', name: 'تونس' },
    { id: 'الأردن', name: 'الأردن' },
    { id: 'قطر', name: 'قطر' }
  ]

  const seasons = [
    { id: 'all', name: 'جميع المواسم' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' }
  ]

  const handleVote = (submissionId) => {
    if (!votedItems.has(submissionId)) {
      setVotedItems(prev => new Set(prev).add(submissionId))
      setSubmissions(prevSubmissions =>
        prevSubmissions.map(sub =>
          sub.id === submissionId ? { ...sub, votes: sub.votes + 1 } : sub
        )
      )
      alert("تم التصويت بنجاح!")
    } else {
      alert("لقد قمت بالتصويت لهذه المشاركة من قبل.")
    }
  }

  const filteredSubmissions = submissions.filter(submission => {
    const matchesCategory = selectedCategory === 'all' || submission.category === selectedCategory
    const matchesCountry = selectedCountry === 'all' || submission.country === selectedCountry
    const matchesSeason = selectedSeason === 'all' || submission.season === selectedSeason
    const matchesSearch = submission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.participant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesCountry && matchesSeason && matchesSearch && submission.qualified
  })

  const getRankBadgeColor = (rank) => {
    switch(rank) {
      case 1: return 'bg-yellow-500 text-white'
      case 2: return 'bg-gray-400 text-white'
      case 3: return 'bg-amber-600 text-white'
      default: return 'bg-blue-500 text-white'
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
            معرض الصور والفيديو
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            صور جماهيرية من مختلف الدول ومقاطع فيديو للتشجيع مع إمكانية الفرز حسب الرياضة أو البلد أو الموسم
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث في المعرض..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full text-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                {submissions.filter(s => s.qualified).length}
              </div>
              <div className="text-sm text-gray-600">مشاركة</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                {submissions.filter(s => s.qualified && s.isVideo).length}
              </div>
              <div className="text-sm text-gray-600">فيديو</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                {submissions.filter(s => s.qualified && !s.isVideo).length}
              </div>
              <div className="text-sm text-gray-600">صورة</div>
            </div>
            <div className="stats-card-white rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold sports-text-dark mb-1">
                {new Set(submissions.filter(s => s.qualified).map(s => s.country)).size}
              </div>
              <div className="text-sm text-gray-600">دولة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <span className="font-medium text-gray-700">فلترة المحتوى:</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="اختر الرياضة" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name} ({category.count})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-full sm:w-48">
                      <Globe className="w-4 h-4 ml-2" />
                      <SelectValue placeholder="اختر الدولة" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.id} value={country.id}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                    <SelectTrigger className="w-full sm:w-48">
                      <Calendar className="w-4 h-4 ml-2" />
                      <SelectValue placeholder="اختر الموسم" />
                    </SelectTrigger>
                    <SelectContent>
                      {seasons.map((season) => (
                        <SelectItem key={season.id} value={season.id}>
                          {season.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-gray-600 text-sm">
                  {filteredSubmissions.length} نتيجة
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all" className="flex items-center">
                <Trophy className="w-4 h-4 ml-2" />
                جميع المشاركات
              </TabsTrigger>
              <TabsTrigger value="photos" className="flex items-center">
                <Eye className="w-4 h-4 ml-2" />
                الصور فقط
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center">
                <Play className="w-4 h-4 ml-2" />
                الفيديوهات فقط
              </TabsTrigger>
            </TabsList>

            {/* All Content */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSubmissions.map(submission => (
                  <Card key={submission.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative">
                      <img 
                        src={submission.image} 
                        alt={submission.title}
                        className="w-full h-64 object-cover"
                      />
                      
                      {/* Rank Badge */}
                      {submission.rank && (
                        <Badge className={`absolute top-4 right-4 ${getRankBadgeColor(submission.rank)} px-3 py-1`}>
                          <Trophy className="w-4 h-4 ml-1" />
                          المركز {submission.rank}
                        </Badge>
                      )}

                      {/* Video Indicator */}
                      {submission.isVideo && (
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Country Flag */}
                      <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <MapPin className="w-3 h-3 ml-1" />
                        {submission.country}
                      </div>

                      {/* Download Button */}
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="absolute bottom-4 right-4 bg-white bg-opacity-90 hover:bg-white"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                          <Badge variant="outline" className="sports-text-blue border-blue-200">
                            {submission.sport}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {submission.season}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold sports-text-dark mb-2 line-clamp-2">
                          {submission.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {submission.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 ml-1" />
                            {formatDate(submission.date)}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 ml-1" />
                            {submission.location}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-500">
                          بواسطة: <span className="font-medium">{submission.participant}</span>
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {submission.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 ml-1" />
                            {submission.views.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-4 h-4 ml-1" />
                            {submission.votes.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <Button
                          onClick={() => handleVote(submission.id)}
                          variant={votedItems.has(submission.id) ? "default" : "outline"}
                          className={`flex-1 ml-2 ${
                            votedItems.has(submission.id)
                              ? 'sports-bg-red text-white'
                              : 'border-red-300 text-red-600 hover:bg-red-50'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ml-1 ${votedItems.has(submission.id) ? 'fill-current' : ''}`} />
                          {votedItems.has(submission.id) ? 'تم التصويت' : 'صوت الآن'}
                        </Button>
                        
                        <div className="flex space-x-2 rtl:space-x-reverse">
                          <Button variant="outline" size="sm" className="p-2">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="p-2">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Photos Only */}
            <TabsContent value="photos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredSubmissions.filter(s => !s.isVideo).map(submission => (
                  <Card key={submission.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={submission.image} 
                        alt={submission.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Button 
                          size="sm" 
                          className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 hover:bg-gray-100"
                        >
                          <Eye className="w-4 h-4 ml-2" />
                          عرض
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-sm mb-1 line-clamp-1">{submission.title}</h4>
                      <p className="text-xs text-gray-500">{submission.country} • {submission.sport}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Videos Only */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredSubmissions.filter(s => s.isVideo).map(submission => (
                  <Card key={submission.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={submission.image} 
                        alt={submission.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <Button size="lg" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white">
                          <Play className="w-6 h-6 ml-2" />
                          تشغيل الفيديو
                        </Button>
                      </div>
                      <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                        فيديو
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold sports-text-dark mb-2">{submission.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{submission.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{submission.country} • {submission.sport}</span>
                        <span>{submission.views.toLocaleString()} مشاهدة</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredSubmissions.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">لا توجد نتائج</h3>
              <p className="text-gray-500">جرب البحث بكلمات مختلفة أو غير الفلاتر المحددة</p>
            </div>
          )}
        </div>
      </section>

      {/* Fan Journey CTA */}
      <section className="py-20 sports-gradient-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            شارك لحظاتك المميزة
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            انضم إلى آلاف المشجعين حول العالم وشارك أجمل لحظاتك الرياضية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Trophy className="w-5 h-5 ml-2" />
              شارك الآن
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Star className="w-5 h-5 ml-2" />
              شاهد الفائزين
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

