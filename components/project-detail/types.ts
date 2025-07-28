export interface ProjectImage {
  id: string
  title: string
  description: string
  url: string
  category: string
}

export interface TechItem {
  name: string
  icon: React.ReactNode
  level: number
}

export interface TechItemData {
  name: string
  iconName: string
  level: number
}

export interface Achievement {
  title: string
  description: string
  icon: React.ReactNode
  impact: string
  badge: string
}

export interface AchievementData {
  title: string
  description: string
  iconName: string
  impact: string
  badge: string
}

export interface Challenge {
  title: string
  problem: string
  solution: string
  result: string
  difficulty: string
  type: string
}

export interface ProjectDetailModalProps {
  isOpen: boolean
  onClose: () => void
}
