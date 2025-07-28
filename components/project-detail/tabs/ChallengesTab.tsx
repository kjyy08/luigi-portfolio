"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Target, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Challenge } from "../types"

interface ChallengesTabProps {
  challenges: Challenge[]
}

export function ChallengesTab({ challenges }: ChallengesTabProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  // 모든 카드를 기본적으로 확장
  useEffect(() => {
    const allSections = challenges.map((_, index) => `challenge-${index}`)
    setExpandedSections(allSections)
  }, [challenges])

  const toggleSection = useCallback((section: string) => {
    setExpandedSections((prev) => 
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    )
  }, [])

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <Card className="border-luigi-green border-2">
          <CardHeader>
            <CardTitle className="text-luigi-green flex items-center gap-2">
              <Target className="w-5 h-5" />
              Trouble Shooting
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
                              : challenge.difficulty === "medium"
                                ? "bg-green-300 text-green-800 border-green-200"
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
    </div>
  )
}
