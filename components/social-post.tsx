import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageSquare, Share2, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Author {
  name: string
  username: string
  avatar: string
}

interface Post {
  id: number
  author: Author
  content: string
  image?: string
  likes: number
  comments: number
  shares: number
  timestamp: string
}

interface SocialPostProps {
  post: Post
}

export function SocialPost({ post }: SocialPostProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader className="p-4 pb-0 flex flex-row items-start space-y-0">
        <div className="flex items-center space-x-3 flex-1">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-xs text-zinc-400">
              {post.author.username} • {post.timestamp}
            </p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
            <DropdownMenuItem className="text-zinc-300 focus:text-zinc-100 focus:bg-zinc-800">
              Save post
            </DropdownMenuItem>
            <DropdownMenuItem className="text-zinc-300 focus:text-zinc-100 focus:bg-zinc-800">Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm mb-4">{post.content}</p>
        {post.image && (
          <div className="relative w-full h-64 md:h-80 rounded-md overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt="Post image" fill className="object-cover" />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-2 border-t border-zinc-800 flex justify-between">
        <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-red-500 hover:bg-red-500/10">
          <Heart className="h-4 w-4 mr-1" />
          {post.likes}
        </Button>
        <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-red-500 hover:bg-red-500/10">
          <MessageSquare className="h-4 w-4 mr-1" />
          {post.comments}
        </Button>
        <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-red-500 hover:bg-red-500/10">
          <Share2 className="h-4 w-4 mr-1" />
          {post.shares}
        </Button>
      </CardFooter>
    </Card>
  )
}

