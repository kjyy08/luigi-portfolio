"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { ZoomIn } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ProjectImage } from "./types"

interface ImageGalleryProps {
  images: readonly ProjectImage[]
  category?: string
  onImageClick: (imageId: string) => void
}

export function ImageGallery({ images, category, onImageClick }: ImageGalleryProps) {
  const filteredImages = useMemo(
    () => (category ? images.filter((img) => img.category === category) : images),
    [images, category],
  )

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
      {filteredImages.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="group relative bg-white rounded-xl border border-luigi-green/20 overflow-hidden hover:shadow-xl hover:shadow-luigi-green/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
          onClick={() => onImageClick(image.id)}
        >
          <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-luigi-green/30 transition-all duration-300 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <ZoomIn className="w-6 h-6 text-luigi-green" />
              </div>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-2 right-2">
              <Badge variant="outline" className="text-xs border-white/50 text-white bg-black/30 backdrop-blur-sm">
                {image.category}
              </Badge>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-luigi-green text-sm mb-2 line-clamp-1">{image.title}</h4>
            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-2">{image.description}</p>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs border-luigi-green/50 text-luigi-green bg-luigi-green/5">
                {image.category}
              </Badge>
              <span className="text-xs text-gray-400 font-medium">Click to view</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
