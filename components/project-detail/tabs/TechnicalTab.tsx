"use client"

import { motion } from "framer-motion"
import { Code, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TechItem } from "../types"

interface TechnicalTabProps {
  techStack: {
    backend: TechItem[]
    database: TechItem[]
    devops: TechItem[]
  }
}

export function TechnicalTab({ techStack }: TechnicalTabProps) {
  return (
    <div className="space-y-6">
      {/* Technology Stack */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <Card className="border-luigi-green border-2">
          <CardHeader>
            <CardTitle className="text-luigi-green flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technology Stack
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
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200"
                    >
                      <span className="font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI & Machine Learning */}
        <Card className="border-luigi-green border-2">
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
    </div>
  )
}
