import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Brain, 
  BookOpen, 
  Code, 
  Palette, 
  GraduationCap, 
  TrendingUp, 
  BarChart3,
  ExternalLink,
  Play,
  Download,
  Globe,
  Languages,
  Star,
  Users,
  Clock,
  Target,
  ArrowLeft,
  CheckCircle,
  Lightbulb,
  Rocket,
  Heart
} from 'lucide-react'
import './App.css'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('ar')
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'ar' ? 'en' : 'ar')
  }

  const content = {
    ar: {
      title: "ابدأ من هنا... مسارك في عالم الذكاء الاصطناعي التوليدي",
      subtitle: "دليلك الشامل لتعلم تقنيات الذكاء الاصطناعي التوليدي باللغة العربية",
      supervisor: "بإشراف: د. مصطفى صادق لطيف",
      intro: {
        title: "ما هو الذكاء الاصطناعي التوليدي؟",
        description: "الذكاء الاصطناعي التوليدي هو تقنية ثورية تمكن الآلات من إنشاء محتوى جديد ومبتكر بناءً على البيانات التي تم تدريبها عليها. يشمل هذا المحتوى النصوص والصور والأصوات ومقاطع الفيديو والأكواد البرمجية.",
        examples: "من أشهر تطبيقاته: ChatGPT، DALL·E، Copilot، Bard، Midjourney"
      },
      paths: {
        title: "مسارات التعلم",
        content: "كتابة المحتوى",
        programming: "البرمجة",
        design: "التصميم",
        education: "التعليم",
        marketing: "التسويق الرقمي",
        analytics: "تحليل البيانات"
      },
      resources: {
        title: "المصادر التعليمية",
        arabic: "المصادر العربية",
        english: "المصادر الإنجليزية"
      },
      mustafa: {
        title: "قسم د. مصطفى صادق لطيف",
        description: "خبير في هندسة الحاسوب والأنظمة الذكية، دكتوراه من جامعة تنسي-ناكسفيل"
      },
      tools: {
        title: "الأدوات التجريبية",
        description: "جرب أدوات الذكاء الاصطناعي التوليدي مباشرة"
      },
      quiz: {
        title: "اختبار تحديد المسار",
        description: "اكتشف المسار الأنسب لك في عالم الذكاء الاصطناعي"
      },
      resources_section: {
        title: "مكتبة الموارد",
        description: "كتب ودلائل ومواد تعليمية مجانية"
      },
      start: {
        title: "ابدأ الآن",
        description: "اختر مسارك وابدأ رحلتك في تعلم الذكاء الاصطناعي التوليدي"
      }
    },
    en: {
      title: "Start Here... Your Path to Generative AI",
      subtitle: "Your comprehensive guide to learning Generative AI technologies",
      supervisor: "Supervised by: Dr. Mustafa Sadiq Latif",
      intro: {
        title: "What is Generative AI?",
        description: "Generative AI is a revolutionary technology that enables machines to create new and innovative content based on the data they were trained on. This content includes text, images, audio, videos, and code.",
        examples: "Famous applications include: ChatGPT, DALL·E, Copilot, Bard, Midjourney"
      },
      paths: {
        title: "Learning Paths",
        content: "Content Writing",
        programming: "Programming",
        design: "Design",
        education: "Education",
        marketing: "Digital Marketing",
        analytics: "Data Analytics"
      },
      resources: {
        title: "Educational Resources",
        arabic: "Arabic Resources",
        english: "English Resources"
      },
      mustafa: {
        title: "Dr. Mustafa Sadiq Latif Section",
        description: "Expert in Computer Engineering and Smart Systems, PhD from University of Tennessee-Knoxville"
      },
      tools: {
        title: "Interactive Tools",
        description: "Try Generative AI tools directly"
      },
      quiz: {
        title: "Path Assessment Quiz",
        description: "Discover the most suitable path for you in the world of AI"
      },
      resources_section: {
        title: "Resource Library",
        description: "Free books, guides, and educational materials"
      },
      start: {
        title: "Start Now",
        description: "Choose your path and begin your journey in learning Generative AI"
      }
    }
  }

  const currentContent = content[currentLanguage]

  const learningPaths = [
    {
      icon: BookOpen,
      title: currentContent.paths.content,
      description: "تعلم استخدام ChatGPT وBard لكتابة المحتوى الإبداعي",
      tools: ["ChatGPT", "Jasper", "Copy.ai"],
      level: "مبتدئ - محترف",
      color: "bg-blue-500"
    },
    {
      icon: Code,
      title: currentContent.paths.programming,
      description: "استخدم GitHub Copilot وChatGPT لتطوير التطبيقات",
      tools: ["GitHub Copilot", "Replit", "CodeT5"],
      level: "متوسط - محترف",
      color: "bg-green-500"
    },
    {
      icon: Palette,
      title: currentContent.paths.design,
      description: "إنشاء الصور والتصاميم باستخدام DALL·E وMidjourney",
      tools: ["Midjourney", "DALL·E", "Canva AI"],
      level: "مبتدئ - محترف",
      color: "bg-purple-500"
    },
    {
      icon: GraduationCap,
      title: currentContent.paths.education,
      description: "تطوير المحتوى التعليمي والدروس التفاعلية",
      tools: ["ChatGPT for Education", "Gradescope"],
      level: "مبتدئ - متوسط",
      color: "bg-orange-500"
    },
    {
      icon: TrendingUp,
      title: currentContent.paths.marketing,
      description: "إنشاء حملات إعلانية ومحتوى تسويقي ذكي",
      tools: ["Jasper", "AdCreative.ai", "Persado"],
      level: "مبتدئ - محترف",
      color: "bg-pink-500"
    },
    {
      icon: BarChart3,
      title: currentContent.paths.analytics,
      description: "تحليل البيانات وبناء النماذج التنبؤية",
      tools: ["ChatGPT Code Interpreter", "Tableau AI"],
      level: "متوسط - محترف",
      color: "bg-indigo-500"
    }
  ]

  const arabicResources = [
    {
      name: "منصة إدراك",
      description: "دورة مقدمة إلى الذكاء الاصطناعي",
      url: "https://www.edraak.org/programs/course/arin-vt3_2018/",
      type: "دورة مجانية"
    },
    {
      name: "منصة رواق",
      description: "مهارات الذكاء الاصطناعي للنساء",
      url: "https://www.rwaq.org/courses/ai-skills",
      type: "تدريب مجاني"
    },
    {
      name: "أكاديمية حسوب",
      description: "دورة الذكاء الاصطناعي الشاملة",
      url: "https://academy.hsoub.com/learn/artificial-intelligence/",
      type: "دورة متقدمة"
    }
  ]

  const englishResources = [
    {
      name: "Google AI",
      description: "Introduction to Generative AI",
      url: "https://grow.google/ai/",
      type: "Free Course"
    },
    {
      name: "DeepLearning.AI",
      description: "Generative AI for Everyone",
      url: "https://www.deeplearning.ai/",
      type: "Andrew Ng Course"
    },
    {
      name: "Microsoft Learn",
      description: "Generative AI for Beginners",
      url: "https://learn.microsoft.com/en-us/ai/",
      type: "18-lesson Course"
    },
    {
      name: "OpenAI Academy",
      description: "Expert & Community-Led Learning",
      url: "https://academy.openai.com/",
      type: "Official Training"
    }
  ]

  const aiTools = [
    {
      name: "ChatGPT",
      description: "محادثة ذكية وإنتاج النصوص",
      url: "https://chat.openai.com/",
      category: "نصوص",
      free: true
    },
    {
      name: "DALL·E",
      description: "توليد الصور من النصوص",
      url: "https://openai.com/dall-e/",
      category: "صور",
      free: false
    },
    {
      name: "Midjourney",
      description: "تصميم إبداعي بالذكاء الاصطناعي",
      url: "https://www.midjourney.com/",
      category: "تصميم",
      free: false
    },
    {
      name: "GitHub Copilot",
      description: "مساعد البرمجة الذكي",
      url: "https://github.com/features/copilot/",
      category: "برمجة",
      free: false
    },
    {
      name: "Google Bard",
      description: "مساعد ذكي من Google",
      url: "https://gemini.google.com/",
      category: "محادثة",
      free: true
    },
    {
      name: "Craiyon",
      description: "توليد الصور مجاناً",
      url: "https://www.craiyon.com",
      category: "صور",
      free: true
    }
  ]

  const quizQuestions = [
    {
      question: "ما هو مستوى خبرتك التقنية؟",
      options: ["مبتدئ تماماً", "لدي خبرة أساسية", "متوسط الخبرة", "خبير/محترف"]
    },
    {
      question: "ما هو مجال اهتمامك الأساسي؟",
      options: ["كتابة المحتوى والإبداع", "البرمجة وتطوير التطبيقات", "التصميم والفنون البصرية", "التعليم والتدريب", "التسويق والأعمال", "تحليل البيانات"]
    },
    {
      question: "كم من الوقت يمكنك تخصيصه للتعلم أسبوعياً؟",
      options: ["أقل من 5 ساعات", "5-10 ساعات", "10-20 ساعة", "أكثر من 20 ساعة"]
    },
    {
      question: "ما هي أهدافك من تعلم الذكاء الاصطناعي التوليدي؟",
      options: ["تطوير مهاراتي الشخصية", "تحسين أدائي في العمل", "تغيير مجال عملي", "بدء مشروع تجاري"]
    }
  ]

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answerIndex
    })
    
    if (questionIndex < quizQuestions.length - 1) {
      setQuizStep(questionIndex + 1)
    } else {
      // Show results
      setQuizStep(quizQuestions.length)
    }
  }

  const getQuizResult = () => {
    const interests = quizAnswers[1]
    const level = quizAnswers[0]
    
    const recommendations = {
      0: { path: "كتابة المحتوى", tools: ["ChatGPT", "Jasper"], courses: ["دورة ChatGPT للمبتدئين"] },
      1: { path: "البرمجة", tools: ["GitHub Copilot", "Replit"], courses: ["دورة البرمجة بالذكاء الاصطناعي"] },
      2: { path: "التصميم", tools: ["DALL·E", "Midjourney"], courses: ["دورة التصميم بالذكاء الاصطناعي"] },
      3: { path: "التعليم", tools: ["ChatGPT for Education"], courses: ["دورة الذكاء الاصطناعي في التعليم"] },
      4: { path: "التسويق الرقمي", tools: ["Jasper", "AdCreative.ai"], courses: ["دورة التسويق بالذكاء الاصطناعي"] },
      5: { path: "تحليل البيانات", tools: ["ChatGPT Code Interpreter"], courses: ["دورة تحليل البيانات بالذكاء الاصطناعي"] }
    }
    
    return recommendations[interests] || recommendations[0]
  }

  return (
    <div className="min-h-screen bg-background font-cairo">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  {currentLanguage === 'ar' ? 'مسارك في الذكاء الاصطناعي' : 'Your AI Journey'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {currentContent.supervisor}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-2"
              >
                <Languages className="w-4 h-4" />
                {currentLanguage === 'ar' ? 'English' : 'العربية'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {currentContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Rocket className="w-5 h-5 ml-2" />
              {currentContent.start.title}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Play className="w-5 h-5 ml-2" />
              شاهد الفيديو التعريفي
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{currentContent.intro.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {currentContent.intro.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["ChatGPT", "DALL·E", "Copilot", "Bard", "Midjourney"].map((tool) => (
                <Badge key={tool} variant="secondary" className="text-sm px-4 py-2">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{currentContent.paths.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="card-hover cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-lg ${path.color} flex items-center justify-center`}>
                      <path.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{path.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {path.level}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-sm leading-relaxed">
                    {path.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {path.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{currentContent.resources.title}</h2>
          <Tabs defaultValue="arabic" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="arabic">{currentContent.resources.arabic}</TabsTrigger>
              <TabsTrigger value="english">{currentContent.resources.english}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="arabic">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {arabicResources.map((resource, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        {resource.name}
                        <ExternalLink className="w-4 h-4" />
                      </CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {resource.type}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {resource.description}
                      </CardDescription>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open(resource.url, '_blank')}
                      >
                        زيارة المنصة
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="english">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {englishResources.map((resource, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        {resource.name}
                        <ExternalLink className="w-4 h-4" />
                      </CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {resource.type}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {resource.description}
                      </CardDescription>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open(resource.url, '_blank')}
                      >
                        Visit Platform
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Dr. Mustafa Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="gradient-bg text-white p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{currentContent.mustafa.title}</h2>
                    <p className="opacity-90">{currentContent.mustafa.description}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      الموقع الرسمي
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      أكثر من 6 مليون زائر من 200 دولة، مع أكثر من 1111 منشور وكتاب وشرح
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => window.open('https://mustafasadiq0.wordpress.com', '_blank')}
                    >
                      زيارة الموقع
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      قناة اليوتيوب
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      أكثر من 90 ألف مشترك و1600 فيديو تعليمي في التقنية والذكاء الاصطناعي
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => window.open('https://youtube.com/mustafasadiq', '_blank')}
                    >
                      زيارة القناة
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{currentContent.tools.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      {tool.free && (
                        <Badge variant="secondary" className="text-xs">
                          مجاني
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {tool.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    جرب الأداة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-3">
                  <Target className="w-6 h-6" />
                  {currentContent.quiz.title}
                </CardTitle>
                <CardDescription>
                  {currentContent.quiz.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {quizStep < quizQuestions.length ? (
                  <div>
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-muted-foreground mb-2">
                        <span>السؤال {quizStep + 1} من {quizQuestions.length}</span>
                        <span>{Math.round(((quizStep + 1) / quizQuestions.length) * 100)}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-6">
                      {quizQuestions[quizStep].question}
                    </h3>
                    
                    <div className="space-y-3">
                      {quizQuestions[quizStep].options.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full text-right justify-start h-auto p-4"
                          onClick={() => handleQuizAnswer(quizStep, index)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold mb-4">نتائج التقييم</h3>
                    {Object.keys(quizAnswers).length === quizQuestions.length && (
                      <div className="text-right space-y-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">المسار المقترح:</h4>
                          <p className="text-primary font-medium">{getQuizResult().path}</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">الأدوات الموصى بها:</h4>
                          <div className="flex flex-wrap gap-2">
                            {getQuizResult().tools.map((tool) => (
                              <Badge key={tool} variant="secondary">{tool}</Badge>
                            ))}
                          </div>
                        </div>
                        <Button 
                          className="w-full"
                          onClick={() => {
                            setQuizStep(0)
                            setQuizAnswers({})
                          }}
                        >
                          إعادة الاختبار
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Start Now Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{currentContent.start.title}</h2>
          <p className="text-xl mb-12 opacity-90">{currentContent.start.description}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningPaths.map((path, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <path.icon className="w-6 h-6" />
                    ابدأ في {path.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => {
                      // Navigate to specific learning path based on the path title
                      const pathUrls = {
                        'كتابة المحتوى': 'https://www.edraak.org/programs/course/arin-vt3_2018/',
                        'البرمجة': 'https://www.deeplearning.ai/',
                        'التصميم': 'https://www.midjourney.com/',
                        'التعليم': 'https://www.edraak.org/programs/course/arin-vt3_2018/',
                        'التسويق الرقمي': 'https://academy.hsoub.com/learn/artificial-intelligence/',
                        'تحليل البيانات': 'https://www.deeplearning.ai/'
                      };
                      const url = pathUrls[path.title];
                      if (url) {
                        window.open(url, '_blank');
                      } else {
                        console.log(`No specific URL found for ${path.title} path`);
                      }
                    }}
                  >
                    ابدأ الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">مسارك في الذكاء الاصطناعي</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                دليلك الشامل لتعلم تقنيات الذكاء الاصطناعي التوليدي باللغة العربية
              </p>
              <p className="text-sm text-muted-foreground">
                {currentContent.supervisor}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">روابط مفيدة</h4>
              <div className="space-y-2">
                <a href="https://mustafasadiq0.wordpress.com" target="_blank" className="block text-muted-foreground hover:text-primary">
                  الموقع الرسمي
                </a>
                <a href="https://youtube.com/mustafasadiq" target="_blank" className="block text-muted-foreground hover:text-primary">
                  قناة اليوتيوب
                </a>
                <a href="https://chat.openai.com" target="_blank" className="block text-muted-foreground hover:text-primary">
                  ChatGPT
                </a>
                <a href="https://www.edraak.org" target="_blank" className="block text-muted-foreground hover:text-primary">
                  منصة إدراك
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">تواصل معنا</h4>
              <p className="text-muted-foreground text-sm">
                هذا الموقع تم تطويره لخدمة المجتمع العربي في مجال الذكاء الاصطناعي التوليدي
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm text-muted-foreground">صُنع بحب للمجتمع العربي</span>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>© 2024 مسارك في الذكاء الاصطناعي التوليدي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

