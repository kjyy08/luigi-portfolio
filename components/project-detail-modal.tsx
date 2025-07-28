"use client"

import { useState, useCallback, useMemo } from "react"
import { motion } from "framer-motion"
import { X, Calendar, Users, Globe } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Import separated components
import { ImageModal } from "./project-detail/ImageModal"
import { OverviewTab } from "./project-detail/tabs/OverviewTab"
import { GalleryTab } from "./project-detail/tabs/GalleryTab" 
import { TechnicalTab } from "./project-detail/tabs/TechnicalTab"
import { ChallengesTab } from "./project-detail/tabs/ChallengesTab"
import { ResultsTab } from "./project-detail/tabs/ResultsTab"

// Import data and types
import { PROJECT_IMAGES, TECH_STACK_DATA, ACHIEVEMENTS_DATA, CHALLENGES } from "./project-detail/data"
import { createTechStack, createAchievement } from "./project-detail/utils"
import { ProjectDetailModalProps } from "./project-detail/types"

export function ProjectDetailModal({ isOpen, onClose }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Memoized data transformations
  const techStack = useMemo(() => createTechStack(TECH_STACK_DATA), [])
  const achievements = useMemo(() => ACHIEVEMENTS_DATA.map(createAchievement), [])

  const openImageModal = useCallback((imageId: string) => {
    const index = PROJECT_IMAGES.findIndex((img) => img.id === imageId)
    setCurrentImageIndex(index)
    setSelectedImage(imageId)
  }, [])

  const closeImageModal = useCallback(() => {
    setSelectedImage(null)
  }, [])

  const navigateImage = useCallback(
    (direction: "prev" | "next") => {
      const newIndex =
        direction === "prev"
          ? currentImageIndex > 0
            ? currentImageIndex - 1
            : PROJECT_IMAGES.length - 1
          : currentImageIndex < PROJECT_IMAGES.length - 1
            ? currentImageIndex + 1
            : 0

      setCurrentImageIndex(newIndex)
      setSelectedImage(PROJECT_IMAGES[newIndex].id)
    },
    [currentImageIndex],
  )

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "gallery", label: "Gallery" },
    { id: "technical", label: "Technical Details" },
    { id: "challenges", label: "Trouble Shooting" },
    { id: "results", label: "Results" },
  ]

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl h-[95vh] p-0 bg-gradient-to-br from-green-50 via-white to-green-100 [&>button]:hidden">
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
                <Badge className="bg-white/20 text-white border-white/30">Backend / DevOps</Badge>
              </div>
            </motion.div>
          </DialogHeader>

          {/* Custom Tabs - 고정 */}
          <div className="w-full bg-green-100 border-b border-luigi-green/20 flex-shrink-0 sticky top-0 z-10">
            <div className="flex p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-luigi-green text-white shadow-sm"
                      : "text-gray-700 hover:text-luigi-green hover:bg-white/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content - 통합 스크롤 영역 */}
          <div className="flex-1 overflow-y-auto px-6 py-4 unified-scroll-container">
            {activeTab === "overview" && <OverviewTab achievements={achievements} />}
            {activeTab === "gallery" && <GalleryTab images={PROJECT_IMAGES} onImageClick={openImageModal} />}
            {activeTab === "technical" && <TechnicalTab techStack={techStack} />}
            {activeTab === "challenges" && <ChallengesTab challenges={CHALLENGES} />}
            {activeTab === "results" && <ResultsTab />}
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <ImageModal
        selectedImage={selectedImage}
        currentImageIndex={currentImageIndex}
        images={PROJECT_IMAGES}
        onClose={closeImageModal}
        onNavigate={navigateImage}
      />
    </>
  )
}
