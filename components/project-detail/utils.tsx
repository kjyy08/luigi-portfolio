import {
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Star,
  Monitor,
  Settings,
  Users,
} from "lucide-react"
import { TechItem, TechItemData, Achievement, AchievementData } from "./types"

const iconMap = {
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Star,
  Monitor,
  Settings,
  Users,
}

export function createTechItem(data: TechItemData): TechItem {
  const IconComponent = iconMap[data.iconName as keyof typeof iconMap]
  return {
    name: data.name,
    icon: <IconComponent className="w-4 h-4" />,
    level: data.level,
  }
}

export function createAchievement(data: AchievementData): Achievement {
  const IconComponent = iconMap[data.iconName as keyof typeof iconMap]
  return {
    title: data.title,
    description: data.description,
    icon: <IconComponent className="w-6 h-6" />,
    impact: data.impact,
    badge: data.badge,
  }
}

export function createTechStack(techStackData: {
  backend: TechItemData[]
  database: TechItemData[]
  devops: TechItemData[]
}) {
  return {
    backend: techStackData.backend.map(createTechItem),
    database: techStackData.database.map(createTechItem),
    devops: techStackData.devops.map(createTechItem),
  }
}
