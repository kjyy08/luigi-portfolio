"use client"

import { motion } from "framer-motion"
import { ImageIcon, Code, Monitor, Settings, Cloud } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageGallery } from "../ImageGallery"
import { ProjectImage } from "../types"

interface GalleryTabProps {
  images: readonly ProjectImage[]
  onImageClick: (imageId: string) => void
}

export function GalleryTab({ images, onImageClick }: GalleryTabProps) {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <Card className="border-luigi-green border-2">
          <CardHeader>
            <CardTitle className="text-luigi-green flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              Project Gallery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-10">
              {/* Architecture Diagrams */}
              <div>
                <h4 className="font-semibold text-luigi-green mb-6 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Architecture & Design
                </h4>
                <ImageGallery images={images} category="Architecture" onImageClick={onImageClick} />
              </div>

              {/* Screenshots */}
              <div>
                <h4 className="font-semibold text-luigi-green mb-6 flex items-center gap-2">
                  <Monitor className="w-4 h-4" />
                  Application Screenshots
                </h4>
                <ImageGallery images={images} category="Screenshots" onImageClick={onImageClick} />
              </div>

              {/* Monitoring */}
              <div>
                <h4 className="font-semibold text-luigi-green mb-6 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Monitoring
                </h4>
                <ImageGallery images={images} category="Monitoring" onImageClick={onImageClick} />
              </div>

              {/* DevOps */}
              <div>
                <h4 className="font-semibold text-luigi-green mb-6 flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  DevOps & Infrastructure
                </h4>
                <ImageGallery images={images} category="DevOps" onImageClick={onImageClick} />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
