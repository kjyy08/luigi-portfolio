"use client"

import { useCallback, useEffect, useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectImage } from "./types"

interface ImageModalProps {
  selectedImage: string | null
  currentImageIndex: number
  images: readonly ProjectImage[]
  onClose: () => void
  onNavigate: (direction: "prev" | "next") => void
}

export function ImageModal({
  selectedImage,
  currentImageIndex,
  images,
  onClose,
  onNavigate,
}: ImageModalProps) {
  const currentImage = images[currentImageIndex]
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        setSlideDirection('right')
        onNavigate("prev")
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        setSlideDirection('left')
        onNavigate("next")
      } else if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      }
    },
    [onNavigate, onClose],
  )

  const handleNavigate = useCallback((direction: "prev" | "next") => {
    setSlideDirection(direction === "prev" ? 'right' : 'left')
    onNavigate(direction)
  }, [onNavigate])

  // Add keyboard event listener when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImage, handleKeyDown])

  if (!selectedImage || !currentImage) return null

  // 슬라이드 애니메이션 variants - 타입 지정
  const slideVariants: Variants = {
    enter: (direction: string) => ({
      x: direction === 'left' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: string) => ({
      x: direction === 'left' ? -300 : 300,
      opacity: 0
    })
  }

  // 모달 등장 애니메이션 variants - 속도 개선
  const modalVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 400,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.15,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={onClose}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 image-modal-content bg-white/95 backdrop-blur-xl [&>button]:hidden">
            {/* Hidden DialogTitle for accessibility */}
            <DialogTitle className="sr-only">
              {currentImage.title} - Image {currentImageIndex + 1} of {images.length}
            </DialogTitle>
            
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative h-full w-full flex flex-col"
            >
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="flex items-center justify-between p-6 bg-gradient-to-r from-luigi-green to-luigi-dark-green text-white rounded-t-lg"
              >
                <div className="flex items-center gap-3">
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                    className="text-lg font-semibold"
                  >
                    {currentImage.title}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.15 }}
                  >
                    <Badge className="bg-white/20 text-white border-white/30 text-xs">
                      {currentImage.category}
                    </Badge>
                  </motion.div>
                </div>
                
                <div className="flex items-center gap-2">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                    className="text-sm text-white/80"
                  >
                    {currentImageIndex + 1} / {images.length}
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={onClose}
                      className="text-white hover:bg-white/20 rounded-full h-8 w-8"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Image Container */}
              <div className="flex-1 relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                {/* Navigation Buttons - 기존 호버 효과로 복원 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleNavigate("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-luigi-green bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12 border border-luigi-green/20 transition-all duration-200 hover:shadow-xl hover:border-luigi-green/40"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleNavigate("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-luigi-green bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12 border border-luigi-green/20 transition-all duration-200 hover:shadow-xl hover:border-luigi-green/40"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </motion.div>

                {/* Image with Slide Animation */}
                <div className="relative max-w-full max-h-full flex items-center justify-center p-8">
                  <AnimatePresence mode="wait" custom={slideDirection}>
                    <motion.div
                      key={currentImageIndex}
                      custom={slideDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 400, damping: 35 },
                        opacity: { duration: 0.2 }
                      }}
                      className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
                    >
                      <img
                        src={currentImage.url || "/placeholder.svg"}
                        alt={currentImage.title}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                        style={{
                          maxWidth: "calc(100vw - 200px)",
                          maxHeight: "calc(100vh - 300px)",
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.2 }}
                className="p-6 bg-white border-t border-gray-200 rounded-b-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.2 }}
                      className="text-gray-700 text-sm leading-relaxed mb-3"
                    >
                      {currentImage.description}
                    </motion.p>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.2 }}
                    className="flex items-center gap-2 ml-4"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleNavigate("prev")}
                      className="border-luigi-green/30 text-luigi-green hover:bg-luigi-green hover:text-white transition-all duration-200"
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"  
                      onClick={() => handleNavigate("next")}
                      className="border-luigi-green/30 text-luigi-green hover:bg-luigi-green hover:text-white transition-all duration-200"
                    >
                      Next
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
