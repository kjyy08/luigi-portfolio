"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Calendar,
  Users,
  Globe,
  Github,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Trophy,
  Target,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Cpu,
  Monitor,
  Settings,
  BookOpen,
  ImageIcon,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectDetailModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailModal({ isOpen, onClose }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const projectImages = [
    {
      id: "architecture",
      title: "System Architecture Diagram",
      description: "Microservices architecture with AWS cloud infrastructure",
      url: "/placeholder.svg?height=400&width=600&text=System+Architecture",
      category: "Architecture",
    },
    {
      id: "main-dashboard",
      title: "Main Dashboard",
      description: "Community platform main dashboard with project listings",
      url: "/placeholder.svg?height=400&width=600&text=Main+Dashboard",
      category: "Screenshots",
    },
    {
      id: "chat-interface",
      title: "Real-time Chat Interface",
      description: "WebSocket-based real-time chat with AI integration",
      url: "/placeholder.svg?height=400&width=600&text=Chat+Interface",
      category: "Screenshots",
    },
    {
      id: "ai-qa-system",
      title: "AI Q&A System",
      description: "Gemini 2.0 Flash powered question-answer interface",
      url: "/placeholder.svg?height=400&width=600&text=AI+QA+System",
      category: "Screenshots",
    },
    {
      id: "monitoring-dashboard",
      title: "LGTP Monitoring Dashboard",
      description: "Grafana dashboard showing system metrics and logs",
      url: "/placeholder.svg?height=400&width=600&text=Monitoring+Dashboard",
      category: "Monitoring",
    },
    {
      id: "cicd-pipeline",
      title: "CI/CD Pipeline Visualization",
      description: "GitHub Actions workflow with Blue-Green deployment",
      url: "/placeholder.svg?height=400&width=600&text=CICD+Pipeline",
      category: "DevOps",
    },
    {
      id: "database-schema",
      title: "Database Schema Design",
      description: "MySQL and MongoDB schema with relationships",
      url: "/placeholder.svg?height=400&width=600&text=Database+Schema",
      category: "Architecture",
    },
    {
      id: "n8n-workflow",
      title: "n8n Automation Workflow",
      description: "Automated notification and code review workflows",
      url: "/placeholder.svg?height=400&width=600&text=n8n+Workflow",
      category: "DevOps",
    },
  ]

  const openImageModal = (imageId: string) => {
    const index = projectImages.findIndex((img) => img.id === imageId)
    setCurrentImageIndex(index)
    setSelectedImage(imageId)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? currentImageIndex > 0
          ? currentImageIndex - 1
          : projectImages.length - 1
        : currentImageIndex < projectImages.length - 1
          ? currentImageIndex + 1
          : 0

    setCurrentImageIndex(newIndex)
    setSelectedImage(projectImages[newIndex].id)
  }

  const techStack = {
    backend: [
      { name: "Java 17", icon: <Code className="w-4 h-4" />, level: 90 },
      { name: "Spring Boot 3.5.0", icon: <Zap className="w-4 h-4" />, level: 85 },
      { name: "Spring Security", icon: <Shield className="w-4 h-4" />, level: 85 },
      { name: "Spring JPA + jOOQ", icon: <Database className="w-4 h-4" />, level: 80 },
      { name: "LangChain4j", icon: <Star className="w-4 h-4" />, level: 75 },
    ],
    database: [
      { name: "MySQL 8.0.41", icon: <Database className="w-4 h-4" />, level: 80 },
      { name: "MongoDB Atlas", icon: <Database className="w-4 h-4" />, level: 75 },
      { name: "Qdrant Vector DB", icon: <Star className="w-4 h-4" />, level: 70 },
      { name: "AWS S3", icon: <Cloud className="w-4 h-4" />, level: 75 },
    ],
    devops: [
      { name: "AWS EC2", icon: <Cloud className="w-4 h-4" />, level: 75 },
      { name: "Docker", icon: <Cpu className="w-4 h-4" />, level: 80 },
      { name: "GitHub Actions", icon: <Settings className="w-4 h-4" />, level: 85 },
      { name: "LGTP Stack", icon: <Monitor className="w-4 h-4" />, level: 80 },
      { name: "n8n Automation", icon: <Zap className="w-4 h-4" />, level: 75 },
    ],
  }

  const achievements = [
    {
      title: "jOOQ + JPA 하이브리드 구현",
      description: "복잡한 JOIN 쿼리 최적화를 위한 타입 안전 SQL 작성",
      icon: <Database className="w-6 h-6" />,
      impact: "게시판 조회 성능 향상",
      badge: "🏗️ Technical",
    },
    {
      title: "CI/CD 파이프라인 구축",
      description: "Blue-Green 무중단 배포 전략 구현",
      icon: <Cloud className="w-6 h-6" />,
      impact: "빌드 시간 20% 단축",
      badge: "🚀 DevOps",
    },
    {
      title: "LGTP 모니터링 스택 구축",
      description: "Loki, Grafana, Tempo, Prometheus 통합 모니터링",
      icon: <Monitor className="w-6 h-6" />,
      impact: "실시간 시스템 가시성 확보",
      badge: "📊 Monitoring",
    },
    {
      title: "AI 기반 질의응답 시스템",
      description: "Gemini 2.0 Flash + Vector Search 구현",
      icon: <Star className="w-6 h-6" />,
      impact: "맥락 기반 답변 생성",
      badge: "🤖 AI",
    },
    {
      title: "n8n 워크플로우 자동화",
      description: "DevOps 알림 및 코드 리뷰 자동화",
      icon: <Zap className="w-6 h-6" />,
      impact: "팀 커뮤니케이션 효율화",
      badge: "⚡ Automation",
    },
  ]

  const challenges = [
    {
      title: "CI 빌드 시간 최적화",
      problem: "jOOQ 코드 생성으로 인한 과도한 빌드 시간 (8-9분)",
      solution: "jOOQ 전용 워크플로우 분리 및 캐시 기반 조건부 실행",
      result: "5-6분 → 4-5분으로 단축 (약 20% 개선)",
      difficulty: "Hard",
      type: "Performance",
    },
    {
      title: "테스트 격리 문제 해결",
      problem: "팀원 테스트 코드 추가 후 전체 테스트 실패",
      solution: "RestAssured 기반 통합 테스트 안정화 및 데이터 격리 보장",
      result: "일관된 테스트 성공률 확보",
      difficulty: "Medium",
      type: "Testing",
    },
  ]

  const ImageGallery = ({ images, category }: { images: typeof projectImages; category?: string }) => {
    const filteredImages = category ? images.filter((img) => img.category === category) : images

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-lg border border-luigi-green/20 overflow-hidden hover:shadow-lg transition-all cursor-pointer"
            onClick={() => openImageModal(image.id)}
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={image.url || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-semibold text-luigi-green text-sm mb-1">{image.title}</h4>
              <p className="text-xs text-gray-600 line-clamp-2">{image.description}</p>
              <Badge variant="outline" className="mt-2 text-xs border-luigi-green/50 text-luigi-green">
                {image.category}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl h-[95vh] overflow-hidden p-0 bg-gradient-to-br from-green-50 via-white to-green-100">
          <div className="flex flex-col h-full">
            {/* Header - 고정 */}
            <DialogHeader className="relative p-6 bg-luigi-green text-white flex-shrink-0">
              <div className="absolute top-4 right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pr-12">
                <DialogTitle className="text-2xl font-bold mb-2">
                  Amateurs - 데브코스 수강생을 위한 커뮤니티 플랫폼
                </DialogTitle>

                <div className="flex flex-wrap gap-4 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    2025.06.10 ~ 2025.07.17 (38일간)
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    6명 팀 프로젝트
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Web Application
                  </div>
                </div>

                <div className="mt-3">
                  <Badge className="bg-white/20 text-white border-white/30">Backend Developer / DevOps Engineer</Badge>
                </div>
              </motion.div>
            </DialogHeader>

            {/* Content - 스크롤 가능 */}
            <div className="flex-1 overflow-hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                <TabsList className="w-full justify-start p-1 bg-green-100 border-b border-luigi-green/20 flex-shrink-0">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-luigi-green data-[state=active]:text-white"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="gallery"
                    className="data-[state=active]:bg-luigi-green data-[state=active]:text-white"
                  >
                    Gallery
                  </TabsTrigger>
                  <TabsTrigger
                    value="technical"
                    className="data-[state=active]:bg-luigi-green data-[state=active]:text-white"
                  >
                    Technical Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="challenges"
                    className="data-[state=active]:bg-luigi-green data-[state=active]:text-white"
                  >
                    Challenges
                  </TabsTrigger>
                  <TabsTrigger
                    value="results"
                    className="data-[state=active]:bg-luigi-green data-[state=active]:text-white"
                  >
                    Results
                  </TabsTrigger>
                </TabsList>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {/* 모든 TabsContent는 그대로 유지하되, 각각에 적절한 스크롤 처리 */}
                  <TabsContent value="overview" className="space-y-6 mt-0 pb-8">
                    {/* Project Overview */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Card className="border-luigi-green border-2 mb-8">
                        <CardHeader>
                          <CardTitle className="text-luigi-green flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            프로젝트 개요
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-gray-700 leading-relaxed">
                            데브코스 수강생들을 위한 종합 커뮤니티 플랫폼으로, 프로젝트 공유, 실시간 채팅, AI 기반
                            질의응답 기능을 제공하는 웹 애플리케이션입니다.
                          </p>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-luigi-green mb-2">핵심 목표</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-luigi-green" />
                                  개발자 커뮤니티 활성화
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-luigi-green" />
                                  프로젝트 협업 환경 제공
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-luigi-green" />
                                  AI 기반 학습 지원
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-luigi-green" />
                                  실시간 소통 플랫폼 구축
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-luigi-green mb-2">아키텍처 하이라이트</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                <li className="flex items-center gap-2">
                                  <ArrowRight className="w-4 h-4 text-luigi-green" />
                                  모듈화된 백엔드 서비스 구조
                                </li>
                                <li className="flex items-center gap-2">
                                  <ArrowRight className="w-4 h-4 text-luigi-green" />
                                  AWS 클라우드 인프라 활용
                                </li>
                                <li className="flex items-center gap-2">
                                  <ArrowRight className="w-4 h-4 text-luigi-green" />
                                  Docker 컨테이너 기반 배포
                                </li>
                                <li className="flex items-center gap-2">
                                  <ArrowRight className="w-4 h-4 text-luigi-green" />
                                  Blue-Green 무중단 배포 전략
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Key Achievements */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Card className="border-luigi-green border-2 mb-8">
                        <CardHeader>
                          <CardTitle className="text-luigi-green flex items-center gap-2">
                            <Trophy className="w-5 h-5" />
                            주요 성과 (Achievement Badges)
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4">
                            {achievements.map((achievement, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-shadow"
                              >
                                <div className="p-2 bg-luigi-green text-white rounded-full">{achievement.icon}</div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-luigi-green">{achievement.title}</h4>
                                    <Badge variant="outline" className="text-xs border-luigi-green text-luigi-green">
                                      {achievement.badge}
                                    </Badge>
                                  </div>
                                  <p className="text-gray-600 text-sm mb-1">{achievement.description}</p>
                                  <p className="text-xs text-luigi-green font-medium">Impact: {achievement.impact}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="gallery" className="space-y-6 mt-0 h-full">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                      <Card className="border-luigi-green border-2 mb-8">
                        <CardHeader>
                          <CardTitle className="text-luigi-green flex items-center gap-2">
                            <ImageIcon className="w-5 h-5" />
                            Project Gallery
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-8">
                            {/* Architecture Diagrams */}
                            <div>
                              <h4 className="font-semibold text-luigi-green mb-4 flex items-center gap-2">
                                <Code className="w-4 h-4" />
                                Architecture & Design
                              </h4>
                              <ImageGallery images={projectImages} category="Architecture" />
                            </div>

                            {/* Screenshots */}
                            <div>
                              <h4 className="font-semibold text-luigi-green mb-4 flex items-center gap-2">
                                <Monitor className="w-4 h-4" />
                                Application Screenshots
                              </h4>
                              <ImageGallery images={projectImages} category="Screenshots" />
                            </div>

                            {/* Monitoring */}
                            <div>
                              <h4 className="font-semibold text-luigi-green mb-4 flex items-center gap-2">
                                <Settings className="w-4 h-4" />
                                Monitoring & Analytics
                              </h4>
                              <ImageGallery images={projectImages} category="Monitoring" />
                            </div>

                            {/* DevOps */}
                            <div>
                              <h4 className="font-semibold text-luigi-green mb-4 flex items-center gap-2">
                                <Cloud className="w-4 h-4" />
                                DevOps & Infrastructure
                              </h4>
                              <ImageGallery images={projectImages} category="DevOps" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="technical" className="space-y-6 mt-0 h-full">
                    {/* Technology Stack */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                      <Card className="border-luigi-green border-2 mb-8">
                        <CardHeader>
                          <CardTitle className="text-luigi-green flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            Technology Stack (Game Inventory)
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {Object.entries(techStack).map(([category, technologies]) => (
                            <div key={category}>
                              <h4 className="font-semibold text-luigi-green mb-3 capitalize">
                                {category === "backend"
                                  ? "Backend Technologies"
                                  : category === "database"
                                    ? "Database & Storage"
                                    : "DevOps & Infrastructure"}
                              </h4>
                              <div className="space-y-3">
                                {technologies.map((tech, index) => (
                                  <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="p-2 bg-luigi-green/10 rounded-full text-luigi-green">
                                        {tech.icon}
                                      </div>
                                      <span className="font-medium">{tech.name}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <Progress value={tech.level} className="w-20 h-2" />
                                      <span className="text-sm text-gray-500 w-8">{tech.level}%</span>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>

                      {/* AI & Machine Learning */}
                      <Card className="border-luigi-green border-2 mb-8">
                        <CardHeader>
                          <CardTitle className="text-luigi-green flex items-center gap-2">
                            <Star className="w-5 h-5" />
                            AI & Machine Learning
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                              <h5 className="font-semibold text-purple-700 mb-2">LLM</h5>
                              <p className="text-sm text-purple-600">Gemini 2.0 Flash</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                              <h5 className="font-semibold text-blue-700 mb-2">Embeddings</h5>
                              <p className="text-sm text-blue-600">OpenAI text-embedding-3-small</p>
                            </div>
                            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                              <h5 className="font-semibold text-green-700 mb-2">Vector Search</h5>
                              <p className="text-sm text-green-600">Qdrant Vector Database</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="challenges" className="space-y-6 mt-0 h-full">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      <Card className="border-luigi-green border-2 mb-8">
                        <CardHeader>
                          <CardTitle className="text-luigi-green flex items-center gap-2">
                            <Target className="w-5 h-5" />
                            Problem Solving Stories (Game Challenges)
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {challenges.map((challenge, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.2 }}
                              className="border border-luigi-green/30 rounded-lg overflow-hidden"
                            >
                              <div
                                className="p-4 bg-luigi-green/5 cursor-pointer hover:bg-luigi-green/10 transition-colors"
                                onClick={() => toggleSection(`challenge-${index}`)}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                      <Badge
                                        className={`text-xs ${
                                          challenge.difficulty === "Hard"
                                            ? "bg-red-100 text-red-700 border-red-200"
                                            : "bg-yellow-100 text-yellow-700 border-yellow-200"
                                        }`}
                                      >
                                        {challenge.difficulty}
                                      </Badge>
                                      <Badge variant="outline" className="text-xs border-luigi-green text-luigi-green">
                                        {challenge.type}
                                      </Badge>
                                    </div>
                                    <h4 className="font-semibold text-luigi-green">{challenge.title}</h4>
                                  </div>
                                  {expandedSections.includes(`challenge-${index}`) ? (
                                    <ChevronUp className="w-5 h-5 text-luigi-green" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-luigi-green" />
                                  )}
                                </div>
                              </div>

                              <AnimatePresence>
                                {expandedSections.includes(`challenge-${index}`) && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="p-4 space-y-4 bg-white">
                                      <div>
                                        <h5 className="font-semibold text-red-600 mb-2">🚨 Problem</h5>
                                        <p className="text-gray-700 text-sm">{challenge.problem}</p>
                                      </div>
                                      <div>
                                        <h5 className="font-semibold text-blue-600 mb-2">💡 Solution</h5>
                                        <p className="text-gray-700 text-sm">{challenge.solution}</p>
                                      </div>
                                      <div>
                                        <h5 className="font-semibold text-green-600 mb-2">✅ Result</h5>
                                        <p className="text-gray-700 text-sm">{challenge.result}</p>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ))}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="results" className="space-y-6 mt-0 h-full">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                      {/* Technical Metrics */}
                      <Card className="border-luigi-green border-2 mb-8">
                        <CardHeader>
                          <CardTitle className="text-luigi-green flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            Project Outcomes & Impact
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-luigi-green mb-4">📊 Technical Metrics</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                                <h5 className="font-semibold text-green-700 mb-2">Build Time Optimization</h5>
                                <div className="flex items-center gap-2">
                                  <Progress value={80} className="flex-1 h-2" />
                                  <span className="text-sm font-medium text-green-600">20% 개선</span>
                                </div>
                              </div>
                              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                                <h5 className="font-semibold text-blue-700 mb-2">Test Coverage</h5>
                                <div className="flex items-center gap-2">
                                  <Progress value={85} className="flex-1 h-2" />
                                  <span className="text-sm font-medium text-blue-600">JaCoCo 기반</span>
                                </div>
                              </div>
                              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                                <h5 className="font-semibold text-purple-700 mb-2">Deployment</h5>
                                <p className="text-sm text-purple-600">무중단 Blue-Green 배포</p>
                              </div>
                              <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                                <h5 className="font-semibold text-orange-700 mb-2">Monitoring</h5>
                                <p className="text-sm text-orange-600">실시간 시스템 가시성</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-luigi-green mb-4">🏆 Learning & Growth</h4>
                            <div className="space-y-3">
                              {[
                                "Hybrid ORM: JPA + jOOQ 조합으로 최적화된 데이터 접근",
                                "Cloud Native: AWS 기반 확장 가능한 인프라 구축",
                                "DevOps Culture: 자동화된 개발/배포 프로세스 구축",
                                "AI Integration: 실용적인 AI 서비스 개발 경험",
                              ].map((item, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200"
                                >
                                  <CheckCircle className="w-5 h-5 text-luigi-green" />
                                  <span className="text-gray-700">{item}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-luigi-green mb-4">🔗 Links & Resources</h4>
                            <div className="flex flex-wrap gap-3">
                              <Button
                                variant="outline"
                                className="border-luigi-green text-luigi-green hover:bg-luigi-green hover:text-white bg-transparent"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub Repository
                              </Button>
                              <Button
                                variant="outline"
                                className="border-luigi-green text-luigi-green hover:bg-luigi-green hover:text-white bg-transparent"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </Button>
                              <Button
                                variant="outline"
                                className="border-luigi-green text-luigi-green hover:bg-luigi-green hover:text-white bg-transparent"
                              >
                                <BookOpen className="w-4 h-4 mr-2" />
                                Documentation
                              </Button>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-luigi-green mb-4">🚀 Next Steps & Future Improvements</h4>
                            <div className="space-y-2">
                              {[
                                "MSA 아키텍처로 전환 (Tempo 트레이싱 활용)",
                                "Kubernetes 기반 오케스트레이션",
                                "고급 AI 기능 확장",
                                "성능 최적화 및 스케일링",
                              ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 text-gray-700">
                                  <ArrowRight className="w-4 h-4 text-luigi-green" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
            <DialogContent className="max-w-5xl max-h-[90vh] p-0 bg-black/95">
              <div className="relative h-full">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeImageModal}
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-full"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Image */}
                <div className="flex items-center justify-center h-full p-8">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full"
                  >
                    <img
                      src={projectImages[currentImageIndex]?.url || "/placeholder.svg"}
                      alt={projectImages[currentImageIndex]?.title}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </motion.div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{projectImages[currentImageIndex]?.title}</h3>
                    <p className="text-gray-300 mb-2">{projectImages[currentImageIndex]?.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-luigi-green text-white">{projectImages[currentImageIndex]?.category}</Badge>
                      <span className="text-sm text-gray-400">
                        {currentImageIndex + 1} / {projectImages.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
