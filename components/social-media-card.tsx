import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface SocialMediaProfile {
  id: number
  platform: string
  username: string
  url: string
  icon: LucideIcon
  color: string
}

interface SocialMediaCardProps {
  profile: SocialMediaProfile
}

export function SocialMediaCard({ profile }: SocialMediaCardProps) {
  return (
    <Card className="bg-zinc-900/40 backdrop-blur-sm border-zinc-800/50 overflow-hidden hover:border-red-500/50 transition-colors group">
      <div className={`h-1 bg-gradient-to-r ${profile.color} opacity-70`}></div>
      <CardContent className="pt-6 pb-4 relative">
        {/* Beam effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="p-3 rounded-full bg-zinc-800/70 backdrop-blur-sm">
            {profile.icon && <profile.icon className="h-6 w-6" />}
          </div>
          <div>
            <h3 className="font-bold">{profile.platform}</h3>
            <p className="text-sm text-zinc-400">{profile.username}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-zinc-800/50 p-3 relative">
        <Button
          asChild
          variant="ghost"
          className="w-full justify-between hover:text-red-500 hover:bg-red-500/10 relative z-10"
        >
          <a href={profile.url} target="_blank" rel="noopener noreferrer">
            Visit {profile.platform}
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

