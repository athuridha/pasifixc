import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface User {
  id: number
  name: string
  username: string
  avatar: string
  bio: string
}

interface UserProfileProps {
  user: User
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <Card className="bg-zinc-900/40 backdrop-blur-sm border-zinc-800/50 overflow-hidden hover:border-red-500/50 transition-colors group">
      <CardHeader className="p-0">
        <div className="h-24 bg-gradient-to-r from-red-900/20 to-zinc-900 relative">
          <div className="absolute -bottom-10 left-4">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              width={80}
              height={80}
              className="rounded-full border-4 border-zinc-900"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-12 pb-6 relative">
        {/* Beam effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="space-y-1 relative z-10">
          <h3 className="font-bold text-lg">{user.name}</h3>
          <p className="text-sm text-zinc-400">{user.username}</p>
        </div>
        <p className="mt-3 text-sm text-zinc-300 relative z-10">{user.bio}</p>
      </CardContent>
    </Card>
  )
}

