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
  Globe, Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectDetailModal } from "@/components/project-detail-modal"

export default function LuigiPortfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const skillCategories = {
    Backend: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    DevOps: [
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    ],
    Tools: [
      { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
      { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
      { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
      { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    ],
  }

  const achievements = [
    {
      title: "jOOQ + JPA 세팅",
      description: "복잡한 JOIN 쿼리를 위한 DSL 통합",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "프로젝트 허브 게시판 API 개발",
      description: "커뮤니티 플랫폼 핵심 API 구현",
      icon: <Code className="w-6 h-6" />,
    },
    { title: "CI/CD 워크플로우 구현", description: "블루/그린 배포 전략 적용", icon: <Cloud className="w-6 h-6" /> },
    { title: "n8n 자동화 워크플로우", description: "알림 시스템 자동화 구현", icon: <Zap className="w-6 h-6" /> },
    { title: "LGTP Observability 구축", description: "모니터링 환경 구축", icon: <Globe className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
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
              asChild
            >
              <a href="tel:010-2472-0947">
                <Phone className="w-4 h-4 mr-2" />
                010-2472-0947
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-luigi-green hover:text-white transition-colors bg-transparent"
              asChild
            >
              <a href="mailto:kjyy08@naver.com">
                <Mail className="w-4 h-4 mr-2" />
                kjyy08@naver.com
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-luigi-green hover:text-white transition-colors bg-transparent"
              asChild
            >
              <a href="https://github.com/kjyy08" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-luigi-green hover:text-white transition-colors bg-transparent"
              asChild
            >
              <a href="https://velog.io/@kjyy08" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Blog
              </a>
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

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Profile Image */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-luigi-green shadow-lg">
                  <img
                    src="/images/profile/profile.png"
                    alt="김주엽 프로필"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <Card className="border-luigi-green border-2">
                <CardHeader>
                  <CardTitle className="text-luigi-green">김주엽</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    <strong>Born:</strong> 1999.08.13
                  </p>
                  <p>
                    <strong>Location:</strong> 경기도 화성시 능동
                  </p>
                  <p className="text-gray-600">
                    개발하는 과정 자체를 즐기는 백엔드 개발자입니다. <br/>
                    새로운 기술을 학습하고 적용하는 것을 좋아하며, 팀과 함께 성장하는 것을 중요하게 생각합니다.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-luigi-green mb-6">Skills</h3>
              
              {isClient && Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold text-gray-800">{category}</h4>
                  <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.1 }}
                        className="group relative"
                      >
                        <div className="w-16 h-16 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center hover:shadow-lg transition-all duration-200 hover:scale-110">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                          {skill.name}
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
                className="border-luigi-green border-2 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-luigi-green">데브코스 수강생을 위한 커뮤니티 플랫폼</CardTitle>
                  <img
                    src="/images/projects/amateurs/cover.png"
                    alt="Amateurs Cover"
                    className="w-full h-64 object-cover"
                  />
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
                        "Loki",
                        "Grafana",
                        "Tempo",
                        "Prometheus",
                        "OTEL-Collector",
                        "n8n"
                      ].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-luigi-green text-luigi-green">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-center flex justify-center space-x-4">
                    <Button
                      className="bg-luigi-light-green text-luigi-green hover:bg-luigi-green hover:text-white bg-transparent"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Project Details
                    </Button>
                    <Button
                      className="bg-luigi-light-green text-luigi-green hover:bg-luigi-green hover:text-white bg-transparent"
                      onClick={() => {
                        window.open('https://github.com/kjyy08/AIBE1-FinalProject-Team01-BE', '_blank');
                      }}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </Button>
                    <Button
                        className="bg-luigi-light-green text-luigi-green hover:bg-luigi-green hover:text-white bg-transparent"
                        onClick={() => {
                          window.open('https://www.amateurs.co.kr/', '_blank');
                        }}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
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
            Contact Me
          </motion.h2>

          <motion.p
            className="text-xl mb-12 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            편하게 연락주세요! 언제든 환영입니다 :)
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              { 
                icon: <Mail className="w-6 h-6" />, 
                label: "Email", 
                value: "kjyy08@naver.com",
                href: "mailto:kjyy08@naver.com"
              },
              { 
                icon: <Phone className="w-6 h-6" />, 
                label: "Phone", 
                value: "010-2472-0947",
                href: "tel:010-2472-0947"
              },
              { 
                icon: <Github className="w-6 h-6" />, 
                label: "GitHub", 
                value: "kjyy08",
                href: "https://github.com/kjyy08"
              },
              { 
                icon: <ExternalLink className="w-6 h-6" />, 
                label: "Blog", 
                value: "velog.io/@kjyy08",
                href: "https://velog.io/@kjyy08"
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white bg-opacity-20 p-6 rounded-lg hover:bg-opacity-30 transition-all cursor-pointer block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="mb-3">{contact.icon}</div>
                <h3 className="font-semibold mb-1">{contact.label}</h3>
                <p className="text-sm opacity-90">{contact.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
