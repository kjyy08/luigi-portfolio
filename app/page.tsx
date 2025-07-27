"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Gamepad2,
  Star,
  Zap,
  Shield,
  Cpu,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ProjectDetailModal } from "@/components/project-detail-modal"

export default function LuigiPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skills = [
    { name: "Java 17", level: 90, icon: <Code className="w-4 h-4" /> },
    { name: "Spring Boot", level: 85, icon: <Zap className="w-4 h-4" /> },
    { name: "MySQL", level: 80, icon: <Database className="w-4 h-4" /> },
    { name: "AWS", level: 75, icon: <Cloud className="w-4 h-4" /> },
    { name: "Docker", level: 70, icon: <Cpu className="w-4 h-4" /> },
    { name: "Spring Security", level: 85, icon: <Shield className="w-4 h-4" /> },
  ]

  const achievements = [
    {
      title: "jOOQ + JPA 세팅",
      description: "복잡한 JOIN 쿼리를 위한 DSL 통합",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "프로젝트 허브 시판 API 개발",
      description: "커뮤니티 플랫폼 핵심 API 구현",
      icon: <Code className="w-6 h-6" />,
    },
    { title: "CI/CD 워크플로우 구현", description: "블루/그린 배포 전략 적용", icon: <Cloud className="w-6 h-6" /> },
    { title: "n8n 자동화 워크플로우", description: "알림 시스템 자동화 구현", icon: <Zap className="w-6 h-6" /> },
    { title: "LGTP Observability 구축", description: "모니터링 환경 완전 구축", icon: <Globe className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-luigi-green rounded-full opacity-80" />
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Luigi Hat Icon */}
          <motion.div
            className="w-24 h-24 mx-auto mb-8 relative"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-full h-full bg-luigi-green rounded-full relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-luigi-green rounded-t-full border-4 border-white" />
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-white rounded-full" />
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-luigi-green rounded-full" />
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold text-luigi-green mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            It's Me! Luigi!
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Backend Developer
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            무언가를 만들어가는 그 순간
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            무엇을 하느냐보다 만드는 과정 그 자체를 즐기는 개발자 김주엽입니다
          </motion.p>

          {/* Contact Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-luigi-green hover:text-white transition-colors bg-transparent"
            >
              <Phone className="w-4 h-4 mr-2" />
              010-2472-0947
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-luigi-green hover:text-white transition-colors bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
              kjyy08@naver.com
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-luigi-green hover:text-white transition-colors bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-luigi-green hover:text-white transition-colors bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Blog
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-luigi-green mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-luigi-green border-2">
                <CardHeader>
                  <CardTitle className="text-luigi-green">김주엽 (Kim Ju Yeop)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    <strong>Born:</strong> 1999.08.13
                  </p>
                  <p>
                    <strong>Location:</strong> 화성시, 경기도, Korea
                  </p>
                  <p className="text-gray-600">
                    창조의 과정 자체를 즐기는 백엔드 개발자입니다. 새로운 기술을 학습하고 적용하는 것을 좋아하며, 팀과
                    함께 성장하는 것을 중요하게 생각합니다.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-luigi-green mb-6">Skills Progress</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-luigi-green mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education & Achievements
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "수원공업고등학교",
                subtitle: "게임과",
                period: "2015-2018",
                icon: <Gamepad2 className="w-8 h-8" />,
              },
              {
                title: "수원대학교",
                subtitle: "컴퓨터 소프트웨어학과",
                period: "2019-2025",
                detail: "GPA: 3.81/4.5",
                icon: <Code className="w-8 h-8" />,
              },
              {
                title: "데브코스",
                subtitle: "생성형 AI 백엔드 과정 1기",
                period: "2025.01-2025.07",
                icon: <Star className="w-8 h-8" />,
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-luigi-green border">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-luigi-green text-white rounded-full w-fit">{edu.icon}</div>
                    <CardTitle className="text-luigi-green">{edu.title}</CardTitle>
                    <CardDescription className="text-lg">{edu.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-gray-700">{edu.period}</p>
                    {edu.detail && <p className="text-sm text-gray-500 mt-2">{edu.detail}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-luigi-green mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Project: Amateurs
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card
                className="border-luigi-green border-2 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setIsModalOpen(true)}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-luigi-green">데브코스 수강생을 위한 커뮤니티 플랫폼</CardTitle>
                  <CardDescription className="text-lg">
                    <strong>Duration:</strong> 2025.06.10 ~ 2025.07.17
                    <br />
                    <strong>Team:</strong> 6명
                    <br />
                    <strong>Role:</strong> Backend / DevOps
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-luigi-green mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Java 17",
                        "Spring Boot 3.5.0",
                        "MySQL 8.0.41",
                        "MongoDB Atlas",
                        "AWS EC2",
                        "Docker",
                        "GitHub Actions",
                        "WebSocket",
                        "Gemini 2.0 Flash",
                      ].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-luigi-green text-luigi-green">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <Button className="bg-luigi-green hover:bg-luigi-dark-green text-white">프로젝트 상세보기</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-luigi-green">Key Achievements</h3>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-shadow"
                >
                  <div className="p-2 bg-luigi-green text-white rounded-full">{achievement.icon}</div>
                  <div>
                    <h4 className="font-semibold text-luigi-green">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-luigi-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Connect!
          </motion.h2>

          <motion.p
            className="text-xl mb-12 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            함께 멋진 프로젝트를 만들어보세요!
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { icon: <Mail className="w-6 h-6" />, label: "Email", value: "kjyy08@naver.com" },
              { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "010-2472-0947" },
              { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "kjyy08" },
              { icon: <ExternalLink className="w-6 h-6" />, label: "Blog", value: "velog.io/@kjyy08" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-20 p-6 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="mb-3">{contact.icon}</div>
                <h3 className="font-semibold mb-1">{contact.label}</h3>
                <p className="text-sm opacity-90">{contact.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
