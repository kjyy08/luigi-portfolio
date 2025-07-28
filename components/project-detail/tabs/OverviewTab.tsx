"use client"

import { motion } from "framer-motion"
import { BookOpen, CheckCircle, ArrowRight, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Achievement } from "../types"

interface OverviewTabProps {
  achievements: Achievement[]
}

export function OverviewTab({ achievements }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* Project Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-luigi-green border-2">
          <CardHeader>
            <CardTitle className="text-luigi-green flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              프로젝트 개요
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              데브코스 수강생들을 위한 종합 커뮤니티 플랫폼으로, 프로젝트 공유, 실시간 채팅, AI 기반
              게시글 추천 기능을 제공하는 웹 애플리케이션입니다.
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
                    AI 기반 게시글 추천
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
                    모놀리식 아키텍처 구조
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-luigi-green" />
                    AWS 클라우드 인프라 활용
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-luigi-green" />
                    Docker & GitHub Actions 기반 배포
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
        <Card className="border-luigi-green border-2">
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
    </div>
  )
}
