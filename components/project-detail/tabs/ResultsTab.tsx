"use client"

import { motion } from "framer-motion"
import {Award, Github, ExternalLink, BookOpen, CheckCircle, ArrowRight, Globe} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function ResultsTab() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {/* Technical Metrics */}
        <Card className="border-luigi-green border-2">
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
                  <h5 className="font-semibold text-green-700 mb-2">CI Build Time 최적화</h5>
                  <div className="flex items-center gap-2">
                    {/*<Progress value={80} className="flex-1 h-2" />*/}
                    <span className="text-sm font-medium text-green-600">20% 개선</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-700 mb-2">Test Coverage</h5>
                  <div className="flex items-center gap-2">
                    {/*<Progress value={85} className="flex-1 h-2" />*/}
                    <span className="text-sm font-medium text-blue-600">테스트 커버리지 61.3% 달성</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-700 mb-2">Deployment</h5>
                  <p className="text-sm text-purple-600">무중단 Blue-Green 배포</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                  <h5 className="font-semibold text-orange-700 mb-2">Observability</h5>
                  <p className="text-sm text-orange-600">LGTP 옵저빌리티 환경 구축</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-luigi-green mb-4">🏆 Learning & Growth</h4>
              <div className="space-y-3">
                {[
                  "Hybrid Persistence: JPA + jOOQ 조합으로 최적화된 데이터 처리",
                  "Cloud Native: AWS 기반 확장 가능한 인프라 구축",
                  "DevOps Culture: 자동화된 개발/배포 프로세스 구축",
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
                  onClick={() => {
                    window.open('https://github.com/kjyy08/AIBE1-FinalProject-Team01-BE', '_blank');
                  }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Repository
                </Button>
                <Button
                  variant="outline"
                  className="border-luigi-green text-luigi-green hover:bg-luigi-green hover:text-white bg-transparent"
                  onClick={() => {
                    window.open('https://www.amateurs.co.kr/', '_blank');
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-luigi-green mb-4">🚀 Next Steps & Future Improvements</h4>
              <div className="space-y-2">
                {[
                  "MSA 아키텍처로 전환",
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
    </div>
  )
}
